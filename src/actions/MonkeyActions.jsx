import {PowerUpProvider} from "../hooks/PowerUpContext.jsx";

export function monkeyClicked(userContext, powerUpContext) {
    const gameData = userContext.gameData;
    const setGameData = userContext.setGameData;

    setGameData({
        currentMonkeyClimbHeight: powerUpContext.powerUps.STEROIDS.level === 0 ? gameData.currentMonkeyClimbHeight +1 : gameData.currentMonkeyClimbHeight + (powerUpContext.powerUps.STEROIDS.level *1.1)
    });

    if (gameData.currentMonkeyClimbHeight + 1 < (powerUpContext.powerUps.TREE_HEIGHT.level * 10)) {
        return { earned: false };
    }

    const goldenBananaLevel = powerUpContext.powerUps.GOLDEN_BANANA.level;
    let goldenBananaUsed = false;

    if (goldenBananaLevel > 0) {
        const chance =  1;
        const roll = Math.random() * 100;
        if (roll < chance) {
            goldenBananaUsed = true;
        }
    }

    const harvestLevel = powerUpContext.powerUps.HARVEST.level;
    const treeHeightLevel = powerUpContext.powerUps.TREE_HEIGHT.level;
    const harvestMultiplier = harvestLevel === 0 ? 1 : harvestLevel * 1.5;
    const treeHeightLevelMultiplier = treeHeightLevel === 1 ? 1 : treeHeightLevel * 1.5;

    let monkeys = powerUpContext.powerUps.MONKEY.level;

    let bananasGained = gameData.bananaTreeYield * harvestMultiplier * monkeys * treeHeightLevelMultiplier;

    if(goldenBananaUsed) {
        bananasGained = bananasGained  * (10 + goldenBananaLevel)
    }

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
