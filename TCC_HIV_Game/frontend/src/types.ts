export interface Node {
    id: number;
    x: number; // Percentage 0-100
    y: number; // Percentage 0-100
    type: 'start' | 'normal' | 'red' | 'finish';
    category?: string;
}

export interface Player {
    id: number;
    name: string;
    currentNodeId: number;
    color: string;
    isBlocked: boolean;
    finishedRank?: number; // 1st, 2nd, 3rd...
}

export interface Question {
    id: number;
    category: string;
    question: string;
    options: string[];
    answer: string;
    explanation: string;
}
