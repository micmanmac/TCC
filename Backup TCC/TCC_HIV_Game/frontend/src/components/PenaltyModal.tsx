import React from 'react';
import virusImage from '../assets/virus_malicious.png';

interface PenaltyModalProps {
    isOpen: boolean;
    onClose: () => void;
    playerName: string;
}

export const PenaltyModal: React.FC<PenaltyModalProps> = ({ isOpen, onClose, playerName }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 text-center relative overflow-hidden transform transition-all scale-100">

                {/* Malicious Virus Image */}
                <div className="mb-6 flex justify-center">
                    <img
                        src={virusImage}
                        alt="Vírus Sorrindo"
                        className="w-32 h-32 object-contain animate-bounce-slow drop-shadow-lg"
                    />
                </div>

                <h2 className="text-2xl font-bold text-red-600 mb-2">
                    Que pena, {playerName}!
                </h2>

                <p className="text-gray-700 font-medium mb-6">
                    Você errou a resposta.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
                    <p className="text-sm text-red-800">
                        <strong>Instrução:</strong><br />
                        Na próxima rodada você terá que responder outra pergunta para tentar desbloquear seu peão.
                    </p>
                </div>

                <button
                    onClick={onClose}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl shadow-lg transition-transform hover:scale-105 active:scale-95"
                >
                    Entendi, vou conseguir na próxima!
                </button>
            </div>
        </div>
    );
};
