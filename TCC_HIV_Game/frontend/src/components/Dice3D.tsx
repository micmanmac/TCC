import React from 'react';

interface Dice3DProps {
    rolling: boolean;
    result: number; // 1-6
    onClick: () => void;
    disabled?: boolean;
}

export const Dice3D: React.FC<Dice3DProps> = ({ rolling, result, onClick, disabled }) => {

    // transform logic to show the correct face
    const getTransform = () => {
        switch (result) {
            case 1: return 'rotateY(0deg)';
            case 6: return 'rotateY(180deg)';
            case 2: return 'rotateY(90deg)'; // Face 2 is -90, so we rotate cube +90
            case 5: return 'rotateY(-90deg)'; // Face 5 is 90, so we rotate cube -90
            case 3: return 'rotateX(90deg)'; // Face 3 is -90X, so we rotate cube +90X
            case 4: return 'rotateX(-90deg)'; // Face 4 is 90X, so we rotate cube -90X
            default: return 'rotateY(0deg)';
        }
    };

    return (
        <div className="flex flex-col items-center justify-center py-4">
            <style>{`
                .scene {
                    width: 100px;
                    height: 100px;
                    perspective: 600px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                }

                .cube {
                    width: 100px;
                    height: 100px;
                    position: relative;
                    transform-style: preserve-3d;
                    transition: transform 1s ease-out;
                }

                .cube.rolling {
                    animation: spin 0.5s infinite linear;
                }

                .face {
                    position: absolute;
                    width: 100px;
                    height: 100px;
                    background: white;
                    border: 1px solid #ddd;
                    border-radius: 16px;
                    box-shadow: inset 0 0 15px rgba(0,0,0,0.1);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 20px;
                    font-weight: bold;
                    backface-visibility: visible; 
                }

                /* Dots Positioning */
                .pip {
                    display: block;
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    background-color: #333;
                    box-shadow: inset 0 3px #111;
                }

                /* Grid layouts for faces */
                .face-1 { transform: rotateY(0deg) translateZ(50px); display: flex; justify-content: center; align-items: center; }
                .face-6 { transform: rotateY(180deg) translateZ(50px); display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr 1fr; padding: 16px; gap: 4px; justify-items: center; align-items: center; }
                .face-2 { transform: rotateY(-90deg) translateZ(50px); display: flex; justify-content: space-between; padding: 20px; }
                .face-2 .pip:nth-child(2) { align-self: flex-end; }
                
                .face-5 { transform: rotateY(90deg) translateZ(50px); display: flex; flex-direction: column; justify-content: space-between; padding: 20px; }
                .face-5 .row { display: flex; justify-content: space-between; width: 100%; }
                .face-5 .center { align-self: center; }
                
                .face-3 { transform: rotateX(-90deg) translateZ(50px); display: flex; justify-content: space-between; padding: 20px; }
                .face-3 .pip:nth-child(2) { align-self: center; }
                .face-3 .pip:nth-child(3) { align-self: flex-end; }

                .face-4 { transform: rotateX(90deg) translateZ(50px); display: flex; flex-direction: column; justify-content: space-between; padding: 20px; }
                .face-4 .row { display: flex; justify-content: space-between; width: 100%; }
                
                @keyframes spin {
                    0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
                    100% { transform: rotateX(360deg) rotateY(720deg) rotateZ(360deg); }
                }
            `}</style>

            <div
                className={`scene ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 transition-transform'}`}
                onClick={!disabled ? onClick : undefined}
                title={disabled ? "Aguarde sua vez" : "Clique para jogar!"}
            >
                <div
                    className={`cube ${rolling ? 'rolling' : ''}`}
                    style={{ transform: rolling ? undefined : getTransform() }}
                >
                    <div className="face face-1">
                        <span className="pip"></span>
                    </div>
                    <div className="face face-2">
                        <span className="pip"></span>
                        <span className="pip"></span>
                    </div>
                    <div className="face face-3">
                        <span className="pip"></span>
                        <span className="pip"></span>
                        <span className="pip"></span>
                    </div>
                    <div className="face face-4">
                        <div className="row"><span className="pip"></span><span className="pip"></span></div>
                        <div className="row"><span className="pip"></span><span className="pip"></span></div>
                    </div>
                    <div className="face face-5">
                        <div className="row"><span className="pip"></span><span className="pip"></span></div>
                        <span className="pip center"></span>
                        <div className="row"><span className="pip"></span><span className="pip"></span></div>
                    </div>
                    <div className="face face-6">
                        <span className="pip"></span><span className="pip"></span>
                        <span className="pip"></span><span className="pip"></span>
                        <span className="pip"></span><span className="pip"></span>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <button
                    onClick={!disabled ? onClick : undefined}
                    disabled={disabled || rolling}
                    className={`px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all transform hover:scale-105 active:scale-95 ${disabled
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-700 hover:to-red-600 active:translate-y-1'
                        }`}
                >
                    {rolling ? 'Rolando...' : disabled ? 'Aguarde...' : 'LANÇAR'}
                </button>
            </div>
        </div>
    );
};
