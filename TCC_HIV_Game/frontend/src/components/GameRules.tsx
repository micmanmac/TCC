
import React from 'react';

import rulesIcon from '../assets/rules_icon.png';

interface GameRulesProps {
    onStartMatch: () => void;
}

export const GameRules: React.FC<GameRulesProps> = ({ onStartMatch }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 bg-white rounded-xl shadow-xl max-w-2xl w-full animate-fade-in mx-auto mt-8 relative">

            {/* Rules Icon */}
            <div className="mb-4 flex justify-center">
                <img
                    src={rulesIcon}
                    alt="Regras do Jogo"
                    className="w-40 h-40 object-contain hover:rotate-3 transition-transform"
                />
            </div>

            <h2 className="text-3xl font-bold text-red-700 mb-6 font-serif border-b-2 border-red-100 pb-2 w-full text-center">
                Regras do Jogo
            </h2>

            <div className="text-gray-700 space-y-6 text-lg leading-relaxed mb-8 px-4">
                <div className="flex gap-4 items-start">
                    <span className="text-2xl">🎯</span>
                    <div>
                        <h3 className="font-bold text-gray-900">Objetivo</h3>
                        <p>Chegar primeiro ao final do tabuleiro (Casa 25) respondendo corretamente perguntas sobre HIV/AIDS.</p>
                    </div>
                </div>

                <div className="flex gap-4 items-start">
                    <span className="text-2xl">🎲</span>
                    <div>
                        <h3 className="font-bold text-gray-900">Como Jogar</h3>
                        <p>Lance o dado para avançar. Cada casa tem um tema (Prevenção, Tratamento, Diagnóstico...). Ao cair, responda a uma pergunta Verdadeiro ou Falso.</p>
                    </div>
                </div>

                <div className="flex gap-4 items-start">
                    <span className="text-2xl">🚫</span>
                    <div>
                        <h3 className="font-bold text-gray-900">Desafios</h3>
                        <p>
                            <span className="text-green-600 font-bold">Acertou?</span> Continua o jogo.<br />
                            <span className="text-red-500 font-bold">Errou?</span> Você é <span className="font-bold text-red-600">BLOQUEADO</span>! Na próxima rodada, terá que responder outra pergunta para tentar liberar seu peão.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 items-start">
                    <span className="text-2xl">🏆</span>
                    <div>
                        <h3 className="font-bold text-gray-900">Vitória</h3>
                        <p>Vence quem alcançar a casa final primeiro. O jogo continua para definir as próximas colocações.</p>
                    </div>
                </div>
            </div>

            <button
                onClick={onStartMatch}
                className="w-full max-w-sm bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-full shadow-lg transform hover:scale-105 transition-all flex items-center justify-center gap-2 text-xl"
            >
                <span>Entendi, Vamos Jogar!</span>
                <span>🚀</span>
            </button>
        </div>
    );
};
