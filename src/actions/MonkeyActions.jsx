import {PowerUpProvider} from "../hooks/PowerUpContext.jsx";

export function monkeyClicked(userContext, powerUpContext) {
    const gameData = userContext.gameData;
    const setGameData = userContext.setGameData;
     setGameData({
        currentMonkeyClimbHeight: gameData.currentMonkeyClimbHeight + powerUpContext.powerUps.HARVEST.level
    });

    if (gameData.currentMonkeyClimbHeight < gameData.maxTreeClimbHeight) {
        return;
    }

    setGameData({
        currentMonkeyClimbHeight: 0,
        bananas: gameData.bananas + (gameData.bananaTreeYield * gameData.monkeys)
    });
}
