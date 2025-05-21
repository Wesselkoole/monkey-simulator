export function buyUpgrade(userContext, powerUpContext, powerUpType) {
    const { gameData, setGameData } = userContext;
    const { powerUps, levelUp } = powerUpContext;

    const upgrade = powerUps[powerUpType];
    if (!upgrade) return;

    if (upgrade.maxLevel !== undefined) {
        if (typeof(upgrade.maxLevel) == "number" && upgrade.level >= upgrade.maxLevel)
            return;

        if (typeof(upgrade.maxLevel) == "function" && upgrade.level >= upgrade.maxLevel(powerUps))
            return;
    }

    if (gameData.bananas >= upgrade.cost) {
        setGameData({ bananas: gameData.bananas - upgrade.cost });
        levelUp(powerUpType);
    } else {
        alert("Not enough bananas!");
    }
}
