import type { Node } from '../types';
import { useEffect, useState } from 'react';

interface BoardProps {
    nodes: Node[];
    currentNodeId: number;
}

export const Board = ({ nodes, currentNodeId }: BoardProps) => {
    const [pawnPosition, setPawnPosition] = useState({ top: '0%', left: '0%' });

    useEffect(() => {
        const currentNode = nodes.find(n => n.id === currentNodeId);
        if (currentNode) {
            setPawnPosition({
                top: `${currentNode.y}%`,
                left: `${currentNode.x}%`
            });
        }
    }, [currentNodeId, nodes]);

    return (
        <div className="relative w-full max-w-2xl mx-auto aspect-[3402/5669] bg-gray-200 rounded-lg overflow-hidden shadow-2xl border-4 border-gray-800">
            {/* Background Image */}
            <img
                src="/src/assets/Tabuleiro HIV SITE.png"
                alt="Tabuleiro do Jogo"
                className="absolute inset-0 w-full h-full object-fill"
            />

            {/* Nodes - Transparent Clickable Areas */}
            {nodes.map((node) => (
                <div
                    key={node.id}
                    className="absolute w-10 h-10 -ml-5 -mt-5 rounded-full border-2 border-transparent hover:border-blue-400 cursor-pointer transition-colors"
                    style={{
                        top: `${node.y}%`,
                        left: `${node.x}%`,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)' // Slightly visible for debug/hover
                    }}
                    title={`Casa ${node.id}`}
                >
                    {/* Optional: Show number on hover or always if needed for debug */}
                    <span className="sr-only">{node.id}</span>
                </div>
            ))}

            {/* Pawn - Animated */}
            <div
                className="absolute w-8 h-8 -ml-4 -mt-4 bg-blue-600 border-2 border-white rounded-full shadow-lg z-20 flex items-center justify-center transition-all duration-500 ease-in-out"
                style={{
                    top: pawnPosition.top,
                    left: pawnPosition.left
                }}
            >
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <div className="absolute -top-8 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    Você
                </div>
            </div>
        </div>
    );
};
