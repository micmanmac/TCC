import React from 'react';

interface GamePawnProps {
    color: string;
    name: string;
    isBlocked?: boolean;
}

export const GamePawn: React.FC<GamePawnProps> = ({ color, name, isBlocked }) => {
    return (
        <div className="relative group cursor-pointer hover:scale-110 transition-transform duration-300 z-30">
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(45deg); }
                    50% { transform: translateY(-5px) rotate(45deg); }
                }
                .pawn-capsule {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>

            {/* Shadow */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/30 rounded-full blur-[2px]" />

            {/* Capsule Body */}
            <div
                className="pawn-capsule relative w-6 h-12 rounded-full overflow-hidden shadow-lg border border-gray-300/50"
                style={{
                    background: `linear-gradient(to bottom, #ffffff 50%, ${color} 50%)`,
                    boxShadow: 'inset -2px -2px 6px rgba(0,0,0,0.3), inset 2px 2px 6px rgba(255,255,255,0.8)'
                }}
            >
                {/* 3D Gloss/Reflection */}
                <div className="absolute top-2 left-1.5 w-2 h-3 bg-white/60 rounded-full blur-[0.5px] transform -rotate-12" />

                {/* Blocked Status Overlay */}
                {isBlocked && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="text-sm">🚫</span>
                    </div>
                )}
            </div>

            {/* Tooltip */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {name}
            </div>
        </div>
    );
};
