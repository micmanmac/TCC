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
    // Start Position (Off Board)
    { id: 0, top: 16, left: 14 },

    // Top Row (Left to Right)
    { id: 1, top: 15, left: 28 },
    { id: 2, top: 18, left: 43 },
    { id: 3, top: 21, left: 54 },
    { id: 4, top: 17, left: 65 },

    // Right Side (Going Down)
    { id: 5, top: 21, left: 71 },
    { id: 6, top: 29, left: 93 },
    { id: 7, top: 33, left: 87 },
    { id: 8, top: 37, left: 92 },

    // Bottom (Right to Left)
    { id: 9, top: 43, left: 92 },
    { id: 10, top: 45, left: 83 },
    { id: 11, top: 53, left: 70 },
    { id: 12, top: 49, left: 61 },

    // Middle Area (Spiraling in to Center)
    { id: 13, top: 48, left: 50 }, // Center-ish
    { id: 14, top: 49, left: 37 },
    { id: 15, top: 51, left: 25 },
    { id: 16, top: 66, left: 8 },

    // Inner loop continues...
    { id: 17, top: 71, left: 11 },
    { id: 18, top: 75, left: 6 },
    { id: 19, top: 78, left: 14 },
    { id: 20, top: 83, left: 11 }, // Loop closing

    // Final stretch to true center/finish
    { id: 21, top: 90, left: 23 },
    { id: 22, top: 93, left: 30 },
    { id: 23, top: 90, left: 38 },
    { id: 24, top: 42, left: 52 },
    { id: 25, top: 42, left: 48 }, // Finish

    // Winner Zone (Off Board - After Finish)
    { id: 26, top: 42, left: 83 }
];
