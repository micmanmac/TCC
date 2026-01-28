import React from 'react';

interface GameTimerProps {
    seconds: number;
}

export const GameTimer: React.FC<GameTimerProps> = ({ seconds }) => {
    const formatTime = (totalSeconds: number) => {
        const minutes = Math.floor(totalSeconds / 60);
        const remainingSeconds = totalSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-white px-3 py-2 md:px-6 md:py-3 rounded-xl shadow-lg border border-gray-200 z-40 flex items-center gap-3">
            <span className="text-xl md:text-2xl">⏱️</span>
            <span className="text-xl md:text-3xl font-mono font-bold text-gray-800">
                {formatTime(seconds)}
            </span>
        </div>
    );
};
