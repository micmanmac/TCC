import React, { useState, useEffect } from 'react';
import type { Question } from '../types';

interface QuizModalProps {
    question: Question | null;
    isOpen: boolean;
    onClose: (correct: boolean) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ question, isOpen, onClose }) => {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    // Reset state when question changes or modal opens
    useEffect(() => {
        if (isOpen && question) {
            setSelectedAnswer(null);
            setShowFeedback(false);
            setIsCorrect(false);
        }
    }, [isOpen, question]);

    if (!isOpen || !question) return null;

    const handleAnswerClick = (option: string) => {
        if (showFeedback) return; // Prevent multiple clicks

        const correct = option === question.answer;
        setSelectedAnswer(option);
        setIsCorrect(correct);
        setShowFeedback(true);
    };

    const handleContinue = () => {
        onClose(isCorrect);
    };

    // Category Color Mapping
    const getCategoryColor = (category: string) => {
        const lowerCat = category.toLowerCase();
        if (lowerCat.includes('prevenção')) return 'bg-yellow-500';
        if (lowerCat.includes('diagnóstico')) return 'bg-blue-500';
        if (lowerCat.includes('tratamento')) return 'bg-red-600';
        if (lowerCat.includes('aconselhamento')) return 'bg-green-500';
        if (lowerCat.includes('mitos')) return 'bg-purple-600';
        return 'bg-gray-500';
    };

    const categoryColor = getCategoryColor(question.category);

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full relative overflow-hidden flex flex-col max-h-[90vh]">

                {/* Header - Card Style */}
                <div className={`${categoryColor} p-6 text-center shadow-md`}>
                    <h2 className="text-white font-bold text-xl uppercase tracking-widest drop-shadow-md">
                        {question.category}
                    </h2>
                </div>

                {/* Body */}
                <div className="p-8 flex-1 overflow-y-auto flex flex-col justify-center">
                    <p className="text-xl md:text-2xl font-medium text-gray-800 text-center mb-8 leading-relaxed">
                        {question.question}
                    </p>

                    {/* Options */}
                    <div className="grid grid-cols-2 gap-4">
                        {question.options.map((option, idx) => {
                            let btnClass = "py-6 text-lg font-bold rounded-xl transition-all shadow-md transform hover:scale-105 active:scale-95 border-2 ";

                            if (showFeedback) {
                                if (option === question.answer) {
                                    btnClass += "bg-green-500 text-white border-green-600 opacity-100";
                                } else if (option === selectedAnswer) {
                                    btnClass += "bg-red-500 text-white border-red-600 opacity-100";
                                } else {
                                    btnClass += "bg-gray-100 text-gray-400 border-gray-200 opacity-50 cursor-not-allowed";
                                }
                            } else {
                                btnClass += "bg-white text-gray-700 hover:bg-gray-50 border-gray-200 hover:border-gray-400";
                            }

                            return (
                                <button
                                    key={idx}
                                    onClick={() => handleAnswerClick(option)}
                                    disabled={showFeedback}
                                    className={btnClass}
                                >
                                    {option}
                                </button>
                            );
                        })}
                    </div>

                    {/* Feedback / Explanation Section */}
                    {showFeedback && (
                        <div className="mt-8 animate-slide-up">
                            <div className={`p-4 rounded-lg border-l-4 mb-4 ${isCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`}>
                                <h3 className={`font-bold text-lg mb-2 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                                    {isCorrect ? '🎉 Correto!' : '❌ Incorreto'}
                                </h3>
                                <p className="text-gray-600 italic">
                                    <span className="font-bold block text-sm text-gray-500 mb-1 uppercase not-italic">O que aprendemos:</span>
                                    {question.explanation}
                                </p>
                            </div>

                            <button
                                onClick={handleContinue}
                                className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 rounded-xl shadow-lg transition-transform hover:translate-y-[-2px] flex items-center justify-center gap-2"
                            >
                                Continuar ➜
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
