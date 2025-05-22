import Cookies from "js-cookie";

export function saveGameState(userContext, powerUpContext) {
    const powerUps = {};
    const keys = Object.keys(powerUpContext.powerUps);

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const level = powerUpContext.powerUps[key].level;

        console.log(key, level);

        powerUps[key] = level;
    }

    const saveData = {
        bananas: userContext.gameData.bananas,
        powerUps
    };

    Cookies.set("save_data", JSON.stringify(saveData));
}

export function loadGameState(userContext, powerUpContext) {
    const saveDataStr = Cookies.get("save_data");

    let saveData = {};

    if (saveDataStr) {
        try {
            saveData = JSON.parse(saveDataStr);
        }
        catch (err) {
            console.error(err);
        }
    }

    userContext.setGameData({
        bananas: saveData.bananas || 0
    });

    const powerUps = saveData.powerUps || {};
    const keys = Object.keys(powerUps);

    console.log(saveData);

    // Process all powerups at once to avoid React state batching issues
    const powerUpUpdates = {};
    
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const level = powerUps[key];
        const powerUp = powerUpContext.powerUps[key];

        if (!powerUp || level < powerUp.level)
            continue;
            
        // Store the target level for this powerup
        powerUpUpdates[key] = level;
    }
    
    // Apply all updates at once
    if (Object.keys(powerUpUpdates).length > 0) {
        powerUpContext.setPowerUps(prev => {
            const updated = { ...prev };
            
            Object.entries(powerUpUpdates).forEach(([key, targetLevel]) => {
                const current = prev[key];
                const levelDiff = targetLevel - current.level;
                
                if (levelDiff > 0) {
                    // Calculate the new cost based on the original formula
                    let newCost = current.cost;
                    for (let i = 0; i < levelDiff; i++) {
                        newCost = Math.floor(newCost * 2.25);
                    }
                    
                    updated[key] = {
                        ...current,
                        level: targetLevel,
                        cost: newCost
                    };
                }
            });
            
            return updated;
        });
    }
}

export function resetSavedGameState() {
    Cookies.remove("save_data");
    location.reload();
}
