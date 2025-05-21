import {PowerUpProvider} from "../hooks/PowerUpContext.jsx";

export function monkeyClicked(userContext, powerUpContext) {
    const gameData = userContext.gameData;
    const setGameData = userContext.setGameData;

    setGameData({
        currentMonkeyClimbHeight: gameData.currentMonkeyClimbHeight + 1
    });

    if (gameData.currentMonkeyClimbHeight + 1 < (powerUpContext.powerUps.TREE_HEIGHT.level * 10)) {
        return { earned: false };
    }

    const goldenBananaLevel = powerUpContext.powerUps.GOLDEN_BANANA.level;
    let multiplier = 1;
    let goldenBananaUsed = false;

    if (goldenBananaLevel > 0) {
        const chance =  5;
        const roll = Math.random() * 100;
        if (roll < chance) {
            multiplier = goldenBananaLevel + 10;
            goldenBananaUsed = true;
        }
    }

    const harvestLevel = powerUpContext.powerUps.HARVEST.level;
    const harvestMultiplier = harvestLevel === 0 ? 1 : harvestLevel * 1.5;

    let monkeys = powerUpContext.powerUps.MONKEY.level;

    const bananasGained = gameData.bananaTreeYield * harvestMultiplier * monkeys * multiplier;

    setGameData({
        currentMonkeyClimbHeight: 0,
        bananas: gameData.bananas + bananasGained
    });

    return {
        earned: true,
        bananasGained,
        goldenBananaUsed
    };
}
