import type { Question } from '../types';

interface CardModalProps {
    question: Question | null;
    isOpen: boolean;
    onClose: (correct: boolean) => void;
}

export const CardModal = ({ question, isOpen, onClose }: CardModalProps) => {
    if (!isOpen || !question) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 relative animate-fade-in">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                    {question.category}
                </div>

                <h2 className="text-xl font-bold text-gray-800 mt-4 mb-6 text-center">
                    {question.question}
                </h2>

                <div className="grid gap-3">
                    {question.options.map((option, idx) => (
                        <button
                            key={idx}
                            className="w-full text-left p-4 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg transition-colors font-medium text-gray-700"
                            onClick={() => {
                                // For now, assume answer string match or index. 
                                // We'll pass simplistic validation to parent or handle here.
                                const isCorrect = option === question.answer;
                                // In a real game, maybe show feedback first.
                                // For MVP, just close with result.
                                alert(isCorrect ? "Correto! " + question.explanation : "Incorreto! " + question.explanation);
                                onClose(isCorrect);
                            }}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
