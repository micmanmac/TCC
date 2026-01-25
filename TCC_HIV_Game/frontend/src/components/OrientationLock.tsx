

export const OrientationLock = () => {
    return (
        <div className="fixed inset-0 z-[9999] bg-blue-900 flex flex-col items-center justify-center p-8 text-center text-white md:hidden portrait-only">
            {/* Animated Rotate Icon */}
            <div className="mb-8 animate-spin-slow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
            </div>

            <div className="animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            </div>

            <h2 className="text-2xl font-bold mb-4">Gire seu celular para jogar 🔄</h2>
            <p className="text-blue-200">
                Este jogo foi desenhado para ser jogado em modo paisagem (deitado) para melhor visualização do tabuleiro.
            </p>

            <style>{`
                /* Only show this component on portrait devices with width <= 768px */
                .portrait-only {
                    display: none;
                }
                @media screen and (orientation: portrait) and (max-width: 768px) {
                    .portrait-only {
                        display: flex;
                    }
                }
                .animate-spin-slow {
                    animation: spin 3s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};
