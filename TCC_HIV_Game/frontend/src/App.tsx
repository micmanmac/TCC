import { useState, useEffect } from 'react';
import { Board } from './components/Board';
import { Dice3D } from './components/Dice3D';
import { QuizModal } from './components/QuizModal';
import { PenaltyModal } from './components/PenaltyModal';
import { GameRules } from './components/GameRules';
import { GameSetup } from './components/GameSetup';
import { ReferencesModal } from './components/ReferencesModal';
import { OrientationLock } from './components/OrientationLock';
import { GameTimer } from './components/GameTimer';
import { FinishTurnModal } from './components/FinishTurnModal';

import { useGameSounds } from './hooks/useGameSounds';

import type { Node, Player, Question } from './types';
import { QUESTIONS } from './data/questions';
import { BOARD_COORDINATES } from './data/boardCoordinates';

// Map manual coordinates to Nodes
const generateNodes = (): Node[] => {
    return BOARD_COORDINATES.map(coord => {
        let type: Node['type'] = 'normal';
        if (coord.id === 0) type = 'start';
        if (coord.id === 1) type = 'normal';
        if (coord.id === 25) type = 'finish';
        if (coord.id === 26) type = 'finish';

        if (coord.id >= 1 && coord.id <= 5) type = 'normal'; // Prevenção
        if (coord.id >= 6 && coord.id <= 10) type = 'normal'; // Diagnóstico
        if (coord.id >= 11 && coord.id <= 15) type = 'normal'; // Aconselhamento
        if (coord.id >= 16 && coord.id <= 20) type = 'normal'; // Tratamento
        if (coord.id >= 21 && coord.id <= 25) type = 'normal'; // Mitos

        return {
            id: coord.id,
            x: coord.left,
            y: coord.top,
            type
        };
    });
};

const PLAYER_COLORS = ['#EF4444', '#3B82F6', '#10B981', '#F59E0B']; // Red, Blue, Green, Amber

function App() {
    const [nodes] = useState<Node[]>(generateNodes());
    const [players, setPlayers] = useState<Player[]>([]);
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [gamePhase, setGamePhase] = useState<'setup' | 'rules' | 'turn_start' | 'moving' | 'answering' | 'game_over'>('setup');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPenaltyModalOpen, setIsPenaltyModalOpen] = useState(false);
    const [isReferencesOpen, setIsReferencesOpen] = useState(false);
    const [finishedPlayerData, setFinishedPlayerData] = useState<{ name: string; rank: number } | null>(null);
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
    const [rankCounter, setRankCounter] = useState(1);
    const [usedQuestionIds, setUsedQuestionIds] = useState<Set<number>>(new Set());
    const [isRolling, setIsRolling] = useState(false);
    const [diceResult, setDiceResult] = useState(1);
    const [elapsedTime, setElapsedTime] = useState(0);

    const { isMuted, toggleMute, playRoll, playCorrect, playWrong, playWin } = useGameSounds();

    const currentPlayer = players[currentPlayerIndex];

    // Timer Effect
    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;

        if (gamePhase !== 'setup' && gamePhase !== 'rules' && gamePhase !== 'game_over') {
            interval = setInterval(() => {
                setElapsedTime(prev => prev + 1);
            }, 1000);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [gamePhase]);

    const startGame = (playerNames: string[]) => {
        const newPlayers: Player[] = playerNames.map((name, index) => ({
            id: index,
            name: name,
            currentNodeId: 0,
            color: PLAYER_COLORS[index % PLAYER_COLORS.length],
            isBlocked: false,
            finishedRank: undefined,
            correctAnswers: 0,
            wrongAnswers: 0
        }));
        setPlayers(newPlayers);
        setCurrentPlayerIndex(0);
        setRankCounter(1);
        setUsedQuestionIds(new Set());
        setElapsedTime(0);
        setGamePhase('rules');
    };

    const startMatch = () => {
        setGamePhase('turn_start');
    };

    const checkGameOver = (currentPlayers: Player[]) => {
        const allFinished = currentPlayers.every(p => p.finishedRank !== undefined);
        if (allFinished) {
            playWin();
            setGamePhase('game_over');
        } else {
            let nextIndex = (currentPlayerIndex + 1) % currentPlayers.length;
            let attempts = 0;
            while (currentPlayers[nextIndex].finishedRank !== undefined && attempts < currentPlayers.length) {
                nextIndex = (nextIndex + 1) % currentPlayers.length;
                attempts++;
            }
            setCurrentPlayerIndex(nextIndex);
            setGamePhase('turn_start');
        }
    };

    const nextTurn = () => {
        setPlayers(prevPlayers => {
            checkGameOver(prevPlayers);
            return prevPlayers;
        });
    };

    const getQuestionCategory = (nodeId: number): string => {
        if (nodeId >= 1 && nodeId <= 5) return "Prevenção";
        if (nodeId >= 6 && nodeId <= 10) return "Diagnóstico";
        if (nodeId >= 11 && nodeId <= 15) return "Aconselhamento";
        if (nodeId >= 16 && nodeId <= 20) return "Tratamento";
        if (nodeId >= 21 && nodeId <= 25) return "Mitos e Curiosidades";
        return "Geral";
    };

    const triggerQuestion = (nodeId: number) => {
        const category = getQuestionCategory(nodeId);
        const categoryQuestions = QUESTIONS.filter(q =>
            (q.category.toLowerCase().includes(category.toLowerCase()) ||
                (category === "Mitos e Curiosidades" && q.category.includes("Mitos"))) &&
            !usedQuestionIds.has(q.id)
        );

        let pool = categoryQuestions;
        if (pool.length === 0) {
            pool = QUESTIONS.filter(q => !usedQuestionIds.has(q.id));
            if (pool.length === 0) {
                pool = QUESTIONS;
            }
        }

        const randomQuestion = pool[Math.floor(Math.random() * pool.length)];
        setUsedQuestionIds(prev => new Set(prev).add(randomQuestion.id));
        setCurrentQuestion(randomQuestion);
        setGamePhase('answering');
        setIsModalOpen(true);
    };

    const handleDiceClick = () => {
        if (gamePhase !== 'turn_start' || isRolling) return;

        if (currentPlayer.isBlocked) {
            triggerQuestion(currentPlayer.currentNodeId);
            return;
        }

        setIsRolling(true);
        playRoll();

        setTimeout(() => {
            const roll = Math.floor(Math.random() * 6) + 1;
            setDiceResult(roll);
            setIsRolling(false);

            setTimeout(() => {
                executeMove(roll);
            }, 1500);
        }, 2000);
    };

    const executeMove = (roll: number) => {
        let nextId = currentPlayer.currentNodeId + roll;
        if (nextId >= 25) {
            nextId = 25;
        }

        setGamePhase('moving');

        setTimeout(() => {
            if (nextId === 25) {
                const finishedRank = rankCounter;
                setRankCounter(prev => prev + 1);

                // Play win sound individually for players finishing
                playWin();

                const updatedPlayers = players.map((p, i) =>
                    i === currentPlayerIndex ? { ...p, currentNodeId: 26, finishedRank, finishTime: elapsedTime } : p
                );
                setPlayers(updatedPlayers);

                setFinishedPlayerData({ name: currentPlayer.name, rank: finishedRank });

                // checkGameOver will be called when modal closes
            } else {
                setPlayers(prev => prev.map((p, i) =>
                    i === currentPlayerIndex ? { ...p, currentNodeId: nextId } : p
                ));
                triggerQuestion(nextId);
            }
        }, 1000);
    };

    const handleQuestionClose = (correct: boolean) => {
        setIsModalOpen(false);

        setPlayers(prev => prev.map((p, i) => {
            if (i !== currentPlayerIndex) return p;

            if (correct) {
                return { ...p, isBlocked: false, correctAnswers: p.correctAnswers + 1 };
            } else {
                return { ...p, isBlocked: true, wrongAnswers: p.wrongAnswers + 1 };
            }
        }));

        if (correct) {
            nextTurn();
        } else {
            setIsPenaltyModalOpen(true);
        }
    };

    const handlePenaltyClose = () => {
        setIsPenaltyModalOpen(false);
        nextTurn();
    };

    const handleFinishModalClose = () => {
        setFinishedPlayerData(null);
        // We need the updated players list here
        checkGameOver(players);
    };

    const formatTime = (totalSeconds: number) => {
        const minutes = Math.floor(totalSeconds / 60);
        const remainingSeconds = totalSeconds % 60;
        return `${minutes}m ${remainingSeconds}s`;
    };

    return (
        <div className="min-h-screen w-full bg-slate-100 flex flex-col items-center py-8 relative">
            <OrientationLock />

            {/* Game Timer - Top Left (only when playing) */}
            {gamePhase !== 'setup' && gamePhase !== 'rules' && gamePhase !== 'game_over' && (
                <GameTimer seconds={elapsedTime} />
            )}

            {/* Mute Button - Top Right */}
            <button
                onClick={toggleMute}
                className="absolute top-4 right-4 bg-white p-4 rounded-full shadow-xl hover:bg-gray-50 z-40 transition-transform hover:scale-110 border border-gray-200"
                title={isMuted ? "Ativar Som" : "Mudo"}
            >
                {isMuted ? (
                    <span className="text-4xl">🔇</span>
                ) : (
                    <span className="text-4xl">🔊</span>
                )}
            </button>

            <h1 className="text-4xl font-bold text-red-700 mb-8 font-serif drop-shadow-sm">
                HIV de A a Z: O Jogo
            </h1>

            {gamePhase === 'setup' ? (
                <GameSetup onStartGame={startGame} />
            ) : gamePhase === 'rules' ? (
                <GameRules onStartMatch={startMatch} />
            ) : gamePhase === 'game_over' ? (
                <div className="bg-white p-8 rounded-xl shadow-2xl max-w-4xl w-full animate-fade-in text-center">
                    <h2 className="text-3xl font-bold text-red-700 mb-6">Ranking Final</h2>

                    <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-gray-600 font-bold uppercase text-xs mb-1">Tempo Total de Jogo</p>
                        <p className="text-3xl font-bold text-blue-700 font-mono">{formatTime(elapsedTime)}</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b border-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-center">Pos</th>
                                    <th className="py-3 px-6 text-left">Jogador</th>
                                    <th className="py-3 px-6 text-center">Tempo</th>
                                    <th className="py-3 px-6 text-center text-green-600">Acertos</th>
                                    <th className="py-3 px-6 text-center text-red-600">Erros</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {[...players].sort((a, b) => (a.finishedRank || 99) - (b.finishedRank || 99)).map((p, index) => (
                                    <tr key={p.id} className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="py-3 px-6 text-center whitespace-nowrap">
                                            <span className="text-2xl font-bold">
                                                {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🏅'}
                                            </span>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: p.color }} />
                                                <span className="font-bold text-lg">{p.name}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center font-mono font-bold">
                                            {p.finishTime ? formatTime(p.finishTime) : '-'}
                                        </td>
                                        <td className="py-3 px-6 text-center font-bold text-green-600 text-lg">
                                            {p.correctAnswers}
                                        </td>
                                        <td className="py-3 px-6 text-center font-bold text-red-600 text-lg">
                                            {p.wrongAnswers}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <button
                        onClick={() => setGamePhase('setup')}
                        className="mt-8 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
                    >
                        Jogar Novamente
                    </button>
                </div>
            ) : (
                <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl px-4 pb-20">
                    <div className="flex-1">
                        <Board nodes={nodes} players={players} />
                    </div>

                    <div className="w-full md:w-64 flex flex-col gap-4">
                        {/* Player Info Cards */}
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-bold text-gray-500 uppercase text-xs mb-2">Turno de</h3>
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-4 h-4 rounded-full"
                                    style={{ backgroundColor: currentPlayer?.color }}
                                />
                                <p className="text-xl font-bold text-gray-800">
                                    {currentPlayer?.name}
                                </p>
                            </div>
                            {currentPlayer?.isBlocked && (
                                <p className="text-xs text-red-500 font-bold mt-1">
                                    BLOQUEADO - Responda para liberar!
                                </p>
                            )}
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow">
                            <div className="flex justify-between border-b pb-2 mb-2">
                                <h3 className="font-bold text-gray-500 uppercase text-xs">JOGADORES</h3>
                                <h3 className="font-bold text-gray-500 uppercase text-xs">POSIÇÃO</h3>
                            </div>
                            <div className="flex flex-col gap-2">
                                {players.map(p => (
                                    <div key={p.id} className={`flex justify-between items-center text-sm ${p.id === currentPlayerIndex ? 'font-bold' : ''}`}>
                                        <span className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: p.color }} />
                                            {p.name}
                                        </span>
                                        <span>
                                            {p.finishedRank ? `🏁 ${p.finishedRank}º` : p.currentNodeId === 0 ? 'Início' : `Casa ${p.currentNodeId}`}
                                            {p.isBlocked ? ' 🔒' : ''}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Dice3D
                            rolling={isRolling}
                            result={diceResult}
                            onClick={handleDiceClick}
                            disabled={gamePhase !== 'turn_start' && !currentPlayer?.isBlocked}
                        />

                        {currentPlayer?.isBlocked && gamePhase === 'turn_start' && (
                            <div className="text-center text-sm text-gray-600 animate-pulse">
                                Clique no dado para tentar responder novamente!
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Footer with Credits and References */}
            <div className="w-full text-center text-sm text-gray-600 py-6 mt-auto border-t bg-slate-100">
                <p className="font-semibold text-gray-800">HIV de A a Z: O Jogo</p>
                <p>Webpage desenvolvida pelo Prof. Dr. Michel Mansur Machado</p>
                <p className="mb-2">michelmachado@unipampa.edu.br</p>

                <button
                    onClick={() => setIsReferencesOpen(true)}
                    className="mt-2 inline-flex items-center gap-2 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full font-bold text-xs transition-colors"
                >
                    <span>📚</span> Referências
                </button>
            </div>

            {/* Modals */}
            <QuizModal
                isOpen={isModalOpen}
                question={currentQuestion}
                onClose={handleQuestionClose}
                playCorrect={playCorrect}
                playWrong={playWrong}
            />

            <PenaltyModal
                isOpen={isPenaltyModalOpen}
                onClose={handlePenaltyClose}
                playerName={currentPlayer?.name || ''}
            />

            <FinishTurnModal
                isOpen={!!finishedPlayerData}
                onClose={handleFinishModalClose}
                playerName={finishedPlayerData?.name || ''}
                rank={finishedPlayerData?.rank || 0}
            />

            <ReferencesModal
                isOpen={isReferencesOpen}
                onClose={() => setIsReferencesOpen(false)}
            />
        </div>
    );
}

export default App;
