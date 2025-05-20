// src/hooks/PowerUpContext.jsx
import { createContext, useContext, useState } from "react";

const powerUpContext = createContext(null);

export function usePowerUpContext() {
    return useContext(powerUpContext);
}

export function PowerUpProvider({ children }) {
    const [powerUps, setPowerUps] = useState({
        HARVEST: { level: 1, cost: 10 },
        AUTO_CLICKER: { level: 0, cost: 25 },
        STEROIDS: { level: 0, cost: 50 },
        GOLDEN_BANANA: { level: 0, cost: 100 }
    });

    function levelUp(powerUpType) {
        setPowerUps(prev => {
            const current = prev[powerUpType];
            return {
                ...prev,
                [powerUpType]: {
                    level: current.level + 1,
                    cost: Math.floor(current.cost * 1.5)
                }
            };
        });
    }

    return (
        <powerUpContext.Provider value={{ powerUps, levelUp }}>
            {children}
        </powerUpContext.Provider>
    );
}
