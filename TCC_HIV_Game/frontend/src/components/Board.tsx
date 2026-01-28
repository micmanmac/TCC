import type { Node, Player } from '../types';
import { useEffect, useState } from 'react';
import { GamePawn } from './GamePawn';
import boardBg from '../assets/Tabuleiro HIV SITE.png';

interface BoardProps {
    nodes: Node[];
    players: Player[];
}

export const Board = ({ nodes, players }: BoardProps) => {
    // We'll manage pawn positions locally to animate them
    const [pawnPositions, setPawnPositions] = useState<{ [playerId: number]: { top: string, left: string } }>({});

    useEffect(() => {
        const newPositions: { [key: number]: { top: string, left: string } } = {};

        players.forEach((player, index) => {
            const currentNode = nodes.find(n => n.id === player.currentNodeId);
            if (currentNode) {
                // Add slight offset for multiple players on same node
                const baseTop = currentNode.y;
                const baseLeft = currentNode.x;

                // Offsets: 0: (0,0), 1: (2,2), 2: (-2,-2), 3: (2,-2) approximately?
                const offset = 2;
                let offsetX = 0;
                let offsetY = 0;

                if (index === 1) { offsetX = offset; offsetY = offset; }
                if (index === 2) { offsetX = -offset; offsetY = -offset; }
                if (index === 3) { offsetX = offset; offsetY = -offset; }

                newPositions[player.id] = {
                    top: `${baseTop + offsetY}%`,
                    left: `${baseLeft + offsetX}%`
                };
            }
        });
        setPawnPositions(newPositions);
    }, [players, nodes]);

    return (
        <div className="relative w-full max-w-2xl mx-auto aspect-[3402/5669] rounded-lg overflow-hidden shadow-2xl border-4 border-gray-800">
            {/* Background Image */}
            <img
                src={boardBg}
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
                    <span className="sr-only">{node.id}</span>
                </div>
            ))}

            {/* Pawns - Animated */}
            {players.map((player) => (
                <div
                    key={player.id}
                    className="absolute transition-all duration-500 ease-in-out z-20"
                    style={{
                        top: pawnPositions[player.id]?.top || '0%',
                        left: pawnPositions[player.id]?.left || '0%',
                        // Adjust margin to center the pawn (width 24px, height 48px -> -ml-3 -mt-6 approx)
                        // Actually let's trust the pawn's internal sizing but center the container
                        marginLeft: '-12px', // half of w-6 (24px)
                        marginTop: '-40px', // anchor bottom of pawn to the point
                    }}
                >
                    <GamePawn
                        color={player.color}
                        name={player.name}
                        isBlocked={player.isBlocked}
                    />
                </div>
            ))}
        </div>
    );
};
