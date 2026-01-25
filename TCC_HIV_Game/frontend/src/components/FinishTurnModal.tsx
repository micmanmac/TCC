import React, { useEffect } from 'react';
import useSound from 'use-sound';
import applauseSound from '../assets/aplauso.mp3';


interface FinishTurnModalProps {
    isOpen: boolean;
    onClose: () => void;
    playerName: string;
    rank: number;
}

export const FinishTurnModal: React.FC<FinishTurnModalProps> = ({ isOpen, onClose, playerName, rank }) => {
    const [playApplause] = useSound(applauseSound);

    useEffect(() => {
        if (isOpen) {
            playApplause();
        }
    }, [isOpen, playApplause]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative animate-scale-in text-center border-4 border-yellow-400">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                    <div className="text-6xl filter drop-shadow-lg">
                        {rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : '🏅'}
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-2">Parabéns!</h2>

                <p className="text-xl text-gray-600 mb-6">
                    <span className="font-bold text-blue-600">{playerName}</span>
                    <br />
                    terminou em <span className="font-bold text-yellow-600 text-2xl">{rank}º lugar</span>!
                </p>

                <button
                    onClick={onClose}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-xl transition-transform hover:scale-105 shadow-lg"
                >
                    Continuar
                </button>
            </div>
        </div>
    );
};
