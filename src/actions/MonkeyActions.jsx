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
        bananas: gameData.bananas + (
            (gameData.bananaTreeYield * (powerUpContext.powerUps.HARVEST.level === 0
                    ? 1
                    : powerUpContext.powerUps.HARVEST.level * 1.5)
            ) * gameData.monkeys
        )
    });
}
