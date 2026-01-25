import { useState } from 'react';
import { Board } from './components/Board';
import { Dice3D } from './components/Dice3D';
import { CardModal } from './components/CardModal';
import { GameSetup } from './components/GameSetup';
import type { Node, Player, Question } from './types';
import { QUESTIONS } from './data/questions';
import { BOARD_COORDINATES } from './data/boardCoordinates';

// Map manual coordinates to Nodes
const generateNodes = (): Node[] => {
    return BOARD_COORDINATES.map(coord => {
        let type: Node['type'] = 'normal';
        if (coord.id === 0) type = 'start'; // New true start
        if (coord.id === 1) type = 'normal'; // Was start, now normal
        if (coord.id === 25) type = 'finish';
        if (coord.id === 26) type = 'finish'; // Winner Zone is also finish type for styling? Or normal.

        // Colors/Types based on ranges could be visual, but logic handles categories
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
    const [gamePhase, setGamePhase] = useState<'setup' | 'turn_start' | 'moving' | 'answering' | 'game_over'>('setup');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
    const [rankCounter, setRankCounter] = useState(1);
    const [usedQuestionIds, setUsedQuestionIds] = useState<Set<number>>(new Set());
    const [isRolling, setIsRolling] = useState(false);
    const [diceResult, setDiceResult] = useState(1);

    const currentPlayer = players[currentPlayerIndex];

    const startGame = (playerNames: string[]) => {
        const newPlayers: Player[] = playerNames.map((name, index) => ({
            id: index,
            name: name,
            currentNodeId: 0, // Start at 0 (Off Board)
            color: PLAYER_COLORS[index % PLAYER_COLORS.length],
            isBlocked: false,
            finishedRank: undefined // New property for ranking
        }));
        setPlayers(newPlayers);
        setCurrentPlayerIndex(0);
        setRankCounter(1);
        setUsedQuestionIds(new Set()); // Reset used questions
        setGamePhase('turn_start');
    };

    const checkGameOver = (currentPlayers: Player[]) => {
        const allFinished = currentPlayers.every(p => p.finishedRank !== undefined);
        if (allFinished) {
            setGamePhase('game_over');
        } else {
            // Find next player who hasn't finished
            let nextIndex = (currentPlayerIndex + 1) % currentPlayers.length;
            // Loop until an unfinshed player is found or all players are checked
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
            return prevPlayers; // Return prevPlayers as state update is handled by checkGameOver
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
        // Filter questions by category AND not used
        const categoryQuestions = QUESTIONS.filter(q =>
            (q.category.toLowerCase().includes(category.toLowerCase()) ||
                (category === "Mitos e Curiosidades" && q.category.includes("Mitos"))) &&
            !usedQuestionIds.has(q.id)
        );

        let pool = categoryQuestions;

        // Fallback: If ran out of unique questions in category, reset usage for that category OR use full pool?
        if (pool.length === 0) {
            // Try full pool of unused
            pool = QUESTIONS.filter(q => !usedQuestionIds.has(q.id));
            if (pool.length === 0) {
                // Absolute fallback: Recyle all questions but warn or just proceed
                pool = QUESTIONS;
            }
        }

        const randomQuestion = pool[Math.floor(Math.random() * pool.length)];

        // Mark as used
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

        // Suspense time (rolling animation)
        setTimeout(() => {
            const roll = Math.floor(Math.random() * 6) + 1;
            setDiceResult(roll); // Set result

            // Stop rolling to transition to result face
            setIsRolling(false);

            // Wait for transition to finish (1s transition in CSS) + reading time
            setTimeout(() => {
                executeMove(roll);
            }, 1500); // 1s visual transition + 0.5s pause
        }, 2000); // 2 seconds of frantic rolling
    };

    const executeMove = (roll: number) => {
        let nextId = currentPlayer.currentNodeId + roll;
        // If > 25, cap at 25 for "Finish Line" logic.
        if (nextId >= 25) {
            nextId = 25;
        }

        setGamePhase('moving');

        // Animate movement
        setTimeout(() => {
            if (nextId === 25) {
                // Player finished!
                const finishedRank = rankCounter;
                setRankCounter(prev => prev + 1);

                const updatedPlayers = players.map((p, i) =>
                    i === currentPlayerIndex ? { ...p, currentNodeId: 26, finishedRank } : p
                );
                setPlayers(updatedPlayers);

                alert(`Parabéns ${currentPlayer.name}! Você terminou em ${finishedRank}º lugar!`);
                checkGameOver(updatedPlayers); // Pass updated players because state update is async
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
                return { ...p, isBlocked: false };
            } else {
                return { ...p, isBlocked: true };
            }
        }));

        if (correct) {
            nextTurn();
        } else {
            alert(`Que pena, ${currentPlayer.name}! Você errou. Na próxima rodada terá que responder outra pergunta para tentar desbloquear.`);
            nextTurn();
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
            <h1 className="text-4xl font-bold text-red-700 mb-8 font-serif">
                HIV de A a Z: O Jogo
            </h1>

            {gamePhase === 'setup' ? (
                <GameSetup onStartGame={startGame} />
            ) : gamePhase === 'game_over' ? (
                <div className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full animate-fade-in text-center">
                    <h2 className="text-3xl font-bold text-red-700 mb-6">Ranking Final</h2>
                    <div className="flex flex-col gap-4">
                        {[...players].sort((a, b) => (a.finishedRank || 99) - (b.finishedRank || 99)).map((p, index) => (
                            <div key={p.id} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <span className="flex items-center gap-3">
                                    <span className="text-2xl font-bold">
                                        {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🏅'}
                                    </span>
                                    <span className="text-xl font-bold text-gray-400">#{index + 1}</span>
                                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: p.color }} />
                                    <span className="text-lg font-bold text-gray-800">{p.name}</span>
                                </span>
                                <span className="font-bold text-green-600">Chegou!</span>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={() => setGamePhase('setup')}
                        className="mt-8 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
                    >
                        Jogar Novamente
                    </button>
                </div>
            ) : (
                <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl px-4">
                    <div className="flex-1">
                        <Board nodes={nodes} players={players} />
                        <div className="text-center text-sm text-gray-600 mt-4">
                            <p>Página desenvolvida pelo Prof. Dr. Michel Mansur Machado</p>
                            <p>michelmachado@unipampa.edu.br</p>
                        </div>
                    </div>

                    <div className="w-full md:w-64 flex flex-col gap-4">
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
                        // Logic tweak: The Dice component might handle animation internally.
                        // If blocked, we might want a "Responder" button instead of Dice?
                        // For simplicity, we can let them click Dice to "Try" and it triggers the question immediately if blocked.
                        />

                        {currentPlayer?.isBlocked && gamePhase === 'turn_start' && (
                            <div className="text-center text-sm text-gray-600 animate-pulse">
                                Clique no dado para tentar responder novamente!
                            </div>
                        )}
                    </div>
                </div>
            )}

            <CardModal
                isOpen={isModalOpen}
                question={currentQuestion}
                onClose={handleQuestionClose}
            />
        </div>
    );
}

export default App;
