export function buyUpgrade(userContext, powerUpContext, powerUpType) {
    const { gameData, setGameData } = userContext;
    const { powerUps, levelUp } = powerUpContext;

    const upgrade = powerUps[powerUpType];
    if (!upgrade) return;

    if (gameData.bananas >= upgrade.cost) {
        setGameData({ bananas: gameData.bananas - upgrade.cost });
        levelUp(powerUpType);
    } else {
        alert("Not enough bananas!");
    }
}
