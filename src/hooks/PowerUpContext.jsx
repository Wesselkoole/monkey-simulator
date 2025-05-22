// src/hooks/PowerUpContext.jsx
import { createContext, useContext, useState } from "react";

const powerUpContext = createContext(null);

export function usePowerUpContext() {
    return useContext(powerUpContext);
}

export function PowerUpProvider({ children }) {
    const [powerUps, setPowerUps] = useState({
        HARVEST: { level: 0, cost: 10 ,info: "Increases harvest by 1.5*"},
        AUTO_CLICKER: { level: 0, cost: 25 ,info: "Adds an auto clicker that clicks once per second"},
        GOLDEN_BANANA: { level: 0, cost: 100 ,info: "Change of getting a banana worth 10* harvest + level of this upgrade"},
        TREE_HEIGHT: { level: 1, cost: 250 ,info: "Increases tree height to improve tree yield by 1.5"},
        STEROIDS: { level: 0, cost: 1000 ,info: "Increases climb rate by 1.25*", maxLevel: () => { return 10; }},
        MONKEY: { level: 1, cost: 2500,info: "Adds monkey to tree to harvest more bananas", maxLevel: (currentPowerUps) => { return currentPowerUps.TREE.level * 2; }},
        TREE: { level: 1, cost: 5000, maxLevel: 4 ,info: "Adds a tree for more harvest space"},
    });

    function levelUp(powerUpType) {
        setPowerUps(prev => {
            const current = prev[powerUpType];
            return {
                ...prev,
                [powerUpType]: {
                    level: current.level + 1,
                    cost: Math.floor(current.cost * 2.25),
                    maxLevel: current.maxLevel,
                    info: current.info
                }
            };
        });
    }

    return (
        <powerUpContext.Provider value={{ powerUps, levelUp, setPowerUps }}>
            {children}
        </powerUpContext.Provider>
    );
}
