import { useState } from 'react';

interface GameSetupProps {
    onStartGame: (playerNames: string[]) => void;
}

export const GameSetup = ({ onStartGame }: GameSetupProps) => {
    const [playerCount, setPlayerCount] = useState(1);
    const [names, setNames] = useState<string[]>(['Jogador 1', '', '', '']);

    const handleCountChange = (count: number) => {
        setPlayerCount(count);
        // Reset names if reducing count? Or keep them? Let's keep distinct defaults.
        const newNames = [...names];
        for (let i = 0; i < count; i++) {
            if (!newNames[i]) newNames[i] = `Jogador ${i + 1}`;
        }
        setNames(newNames);
    };

    const handleNameChange = (index: number, value: string) => {
        const newNames = [...names];
        newNames[index] = value;
        setNames(newNames);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Filter only the active players
        const activeNames = names.slice(0, playerCount).map((name, i) => name.trim() || `Jogador ${i + 1}`);
        onStartGame(activeNames);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] p-6 bg-white rounded-xl shadow-xl max-w-md w-full animate-fade-in mx-auto mt-10">
            <h2 className="text-3xl font-bold text-red-700 mb-6 text-center font-serif">Configuração do Jogo</h2>

            <div className="w-full mb-6">
                <label className="block text-gray-700 font-bold mb-2">Número de Jogadores:</label>
                <div className="flex gap-4 justify-center">
                    {[1, 2, 3, 4].map(num => (
                        <button
                            key={num}
                            type="button"
                            onClick={() => handleCountChange(num)}
                            className={`w-12 h-12 rounded-full font-bold text-lg transition-all ${playerCount === num
                                    ? 'bg-red-600 text-white scale-110 shadow-lg'
                                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                }`}
                        >
                            {num}
                        </button>
                    ))}
                </div>
            </div>

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                {Array.from({ length: playerCount }).map((_, i) => (
                    <div key={i} className="flex flex-col animate-slide-in">
                        <label className="text-sm font-semibold text-gray-600 mb-1">Nome do Jogador {i + 1}</label>
                        <input
                            type="text"
                            value={names[i]}
                            onChange={(e) => handleNameChange(i, e.target.value)}
                            placeholder={`Nome do Jogador ${i + 1}`}
                            className="p-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                            required
                        />
                    </div>
                ))}

                <button
                    type="submit"
                    className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2"
                >
                    <span>Iniciar Aventura</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </form>
        </div>
    );
};
