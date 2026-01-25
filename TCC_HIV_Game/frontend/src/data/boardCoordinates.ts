export interface Coordinate {
    id: number;
    top: number;
    left: number;
}

// Estimated coordinates based on "Tabuleiro HIV.png" description and common board game patterns.
// User Description:
// Casa 1: Top Left (approx 15%, 28%)
// Casa 5: Desce
// Casa 13: Center
// Casa 25: Final (Bottom/Center?)
// Please adjust these values to perfectly match the artwork.

export const BOARD_COORDINATES: Coordinate[] = [
    // Top Row (Left to Right)
    { id: 1, top: 15, left: 28 },
    { id: 2, top: 15, left: 38 },
    { id: 3, top: 15, left: 48 },
    { id: 4, top: 15, left: 58 },

    // Right Side (Going Down)
    { id: 5, top: 20, left: 68 },
    { id: 6, top: 30, left: 72 },
    { id: 7, top: 40, left: 70 },
    { id: 8, top: 50, left: 65 },

    // Bottom (Right to Left)
    { id: 9, top: 60, left: 58 },
    { id: 10, top: 60, left: 48 },
    { id: 11, top: 60, left: 38 },
    { id: 12, top: 55, left: 30 },

    // Middle Area (Spiraling in to Center)
    { id: 13, top: 45, left: 35 }, // Center-ish
    { id: 14, top: 35, left: 40 },
    { id: 15, top: 35, left: 50 },
    { id: 16, top: 35, left: 60 },

    // Inner loop continues...
    { id: 17, top: 45, left: 60 },
    { id: 18, top: 50, left: 55 },
    { id: 19, top: 50, left: 45 },
    { id: 20, top: 45, left: 40 }, // Loop closing

    // Final stretch to true center/finish
    { id: 21, top: 40, left: 45 },
    { id: 22, top: 40, left: 50 },
    { id: 23, top: 40, left: 55 },
    { id: 24, top: 42, left: 52 },
    { id: 25, top: 42, left: 48 } // Finish
];
