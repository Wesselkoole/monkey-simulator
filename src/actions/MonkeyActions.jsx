export function monkeyClicked(userContext) {
    const gameData = userContext.gameData;
    const setGameData = userContext.setGameData;

    gameData.setCurrentMonkeyClimbHeight(gameData.currentMonkeyClimbHeight + 1);
    if (gameData.currentMonkeyClimbHeight < gameData.maxTreeClimbHeight) {
        return;
    }
    setGameData({
        currentMonkeyClimbHeight: 0,
        bananas: gameData.bananas + gameData.bananaTreeYield
    })
}