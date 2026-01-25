import { useState } from 'react';
import { Board } from './components/Board';
import { Dice } from './components/Dice';
import { CardModal } from './components/CardModal';
import type { Node, Question } from './types';
import { QUESTIONS } from './data/questions';
import { BOARD_COORDINATES } from './data/boardCoordinates';

// Map manual coordinates to Nodes
const generateNodes = (): Node[] => {
    return BOARD_COORDINATES.map(coord => {
        let type: Node['type'] = 'normal';
        if (coord.id === 1) type = 'start';
        if (coord.id === 25) type = 'finish';
        if ([13, 14, 15].includes(coord.id)) type = 'red'; // Keep logic or adjust based on image? Keeping for now.

        return {
            id: coord.id,
            x: coord.left,
            y: coord.top,
            type
        };
    });
};



function App() {
    const [nodes] = useState<Node[]>(generateNodes());
    const [currentNodeId, setCurrentNodeId] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
    const [gameState, setGameState] = useState<'idle' | 'moving' | 'question'>('idle');

    const handleRoll = (file: number) => {
        if (gameState !== 'idle') return;

        const nextId = Math.min(currentNodeId + file, 25);
        setGameState('moving');

        // Animate movement (simple delay)
        setTimeout(() => {
            setCurrentNodeId(nextId);
            handleNodeArrival(nextId);
        }, 1000);
    };

    const handleNodeArrival = (_nodeId: number) => {
        // Determine Category based on node or random
        // Fetch question logic here
        // Get a random question
        const randomQuestion = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
        setCurrentQuestion(randomQuestion);
        setGameState('question');
        setIsModalOpen(true);
    };

    const handleQuestionClose = (correct: boolean) => {
        setIsModalOpen(false);
        setGameState('idle');
        if (!correct) {
            // Penalty?
            // alert("Penalty applied!");
        }
        if (currentNodeId === 25) {
            alert("Parabéns! Você completou a trilha!");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
            <h1 className="text-4xl font-bold text-red-700 mb-8 font-serif">
                HIV de A a Z: O Jogo
            </h1>

            <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl px-4">
                <div className="flex-1">
                    <Board nodes={nodes} currentNodeId={currentNodeId} />
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Página desenvolvida pelo Prof. Dr. Michel Mansur Machado (michelmachado@unipampa.edu.br).
                    </p>
                </div>

                <div className="w-full md:w-64 flex flex-col gap-4">
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <h3 className="font-bold text-gray-500 uppercase text-xs">Casa Atual</h3>
                        <p className="text-3xl font-bold text-gray-800">{currentNodeId}</p>
                    </div>
                    <Dice onRoll={handleRoll} disabled={gameState !== 'idle'} />
                </div>
            </div>

            <CardModal
                isOpen={isModalOpen}
                question={currentQuestion}
                onClose={handleQuestionClose}
            />
        </div>
    );
}

export default App;
