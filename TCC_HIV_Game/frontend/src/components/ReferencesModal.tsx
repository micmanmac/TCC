import React from 'react';

interface ReferencesModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ReferencesModal: React.FC<ReferencesModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[60] p-4 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative overflow-hidden flex flex-col max-h-[90vh]">

                <div className="flex justify-between items-center mb-6 border-b pb-4">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <span>📚</span> Fontes Científicas
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="overflow-y-auto pr-4 text-justify space-y-6 text-gray-700 leading-relaxed font-serif">
                    <p className="text-sm text-gray-500 italic mb-4">
                        Este jogo foi desenvolvido com base nas diretrizes oficiais do Ministério da Saúde do Brasil.
                    </p>

                    <div className="pl-4 border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg shadow-sm">
                        1. BRASIL. Ministério da Saúde. <strong>Protocolo Clínico e Diretrizes Terapêuticas para Manejo da Infecção pelo HIV em Adultos (PCDT)</strong>. Brasília, 2024.
                    </div>

                    <div className="pl-4 border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg shadow-sm">
                        2. BRASIL. Ministério da Saúde. <strong>Protocolo Clínico e Diretrizes Terapêuticas para Prevenção da Transmissão Vertical de HIV, Sífilis e Hepatites Virais</strong>. Brasília, 2022.
                    </div>

                    <div className="pl-4 border-l-4 border-orange-500 bg-orange-50 p-4 rounded-r-lg shadow-sm">
                        3. BRASIL. Ministério da Saúde. <strong>Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com Infecções Sexualmente Transmissíveis (IST)</strong>. Brasília, 2022.
                    </div>
                </div>

                <div className="mt-8 pt-4 border-t flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-6 rounded-lg transition-transform hover:scale-105"
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
};
