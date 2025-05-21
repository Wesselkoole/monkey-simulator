import {PowerUpProvider} from "../hooks/PowerUpContext.jsx";

export function monkeyClicked(userContext, powerUpContext) {
    const gameData = userContext.gameData;
    const setGameData = userContext.setGameData;

     setGameData({
        currentMonkeyClimbHeight: gameData.currentMonkeyClimbHeight + 1
    });

    if (gameData.currentMonkeyClimbHeight < gameData.maxTreeClimbHeight) {
        return;
    }

    setGameData({
        currentMonkeyClimbHeight: 0,
        bananas: gameData.bananas + ((gameData.bananaTreeYield * powerUpContext.powerUps.HARVEST.level) * gameData.monkeys)
    });
}
