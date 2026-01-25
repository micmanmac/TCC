import { useState } from 'react';

interface DiceProps {
    onRoll: (value: number) => void;
    disabled?: boolean;
}

export const Dice = ({ onRoll, disabled }: DiceProps) => {
    const [value, setValue] = useState(1);
    const [rolling, setRolling] = useState(false);

    const roll = () => {
        if (disabled || rolling) return;
        setRolling(true);

        // Simple animation effect
        let counter = 0;
        const interval = setInterval(() => {
            setValue(Math.floor(Math.random() * 6) + 1);
            counter++;
            if (counter > 10) {
                clearInterval(interval);
                const finalValue = Math.floor(Math.random() * 6) + 1;
                setValue(finalValue);
                setRolling(false);
                onRoll(finalValue);
            }
        }, 100);
    };

    return (
        <div className="flex flex-col items-center gap-4 p-4 bg-white rounded-lg shadow-lg">
            <div
                className={`w-16 h-16 flex items-center justify-center bg-red-600 text-white text-3xl font-bold rounded-xl border-4 border-red-800 cursor-pointer transition-transform ${rolling ? 'animate-bounce' : 'hover:scale-105'} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={roll}
            >
                {value}
            </div>
            <button
                onClick={roll}
                disabled={disabled || rolling}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            >
                Jogar Dado
            </button>
        </div>
    );
};
