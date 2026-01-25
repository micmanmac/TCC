import { useState, useEffect } from 'react';
import useSound from 'use-sound';

import diceSound from '../assets/dice.mp3';
import correctSound from '../assets/acerto.mp3';
import wrongSound from '../assets/erro.mp3';
import winSound from '../assets/aplauso.mp3';

// Using local assets for sound effects
const SOUNDS = {
    roll: diceSound,
    correct: correctSound,
    wrong: wrongSound,
    win: winSound,
};

export const useGameSounds = () => {
    // Persist mute state
    const [isMuted, setIsMuted] = useState(() => {
        const saved = localStorage.getItem('game_muted');
        return saved === 'true';
    });

    useEffect(() => {
        localStorage.setItem('game_muted', String(isMuted));
    }, [isMuted]);

    // Volume control: 0.5 for normal, 0 if muted (though use-sound has mute prop too)
    const volume = isMuted ? 0 : 0.5;

    const [playRoll] = useSound(SOUNDS.roll, { volume });
    const [playCorrect] = useSound(SOUNDS.correct, { volume });
    const [playWrong] = useSound(SOUNDS.wrong, { volume: 0.3 }); // Lower volume for negative sound
    const [playWin] = useSound(SOUNDS.win, { volume: 0.6 });

    const toggleMute = () => setIsMuted(prev => !prev);

    return {
        isMuted,
        toggleMute,
        playRoll: () => !isMuted && playRoll(),
        playCorrect: () => !isMuted && playCorrect(),
        playWrong: () => !isMuted && playWrong(),
        playWin: () => !isMuted && playWin(),
    };
};
