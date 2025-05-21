import {PowerUpProvider} from "../hooks/PowerUpContext.jsx";

export function monkeyClicked(userContext, powerUpContext) {
    const gameData = userContext.gameData;
    const setGameData = userContext.setGameData;

    setGameData({
        currentMonkeyClimbHeight: gameData.currentMonkeyClimbHeight + 1
    });

    if (gameData.currentMonkeyClimbHeight + 1 < gameData.maxTreeClimbHeight) {
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

    const bananasGained = gameData.bananaTreeYield * harvestMultiplier * gameData.monkeys * multiplier;

    let monkeys = 0;

    gameData.trees.forEach(tree => {
        monkeys += tree.monkeys;
    });

    setGameData({
        currentMonkeyClimbHeight: 0,
        bananas: gameData.bananas + (gameData.bananaTreeYield * monkeys)
    });
}

export function upgradeMonkeys(userContext) {
    const { gameData, setGameData } = userContext;

    let trees = gameData.trees.map(tree => ({ ...tree }));
    let changed = false;

    for (let i = 0; i < trees.length; i++) {
        const tree = trees[i];

        if (tree.monkeys >= 2)
            continue;

        tree.monkeys += 1;
        changed = true;

        break;
    }

    if (changed && gameData.bananas < 150000)
        return;

    setGameData({
        bananas: changed ? gameData.bananas - 150000 : gameData.bananas,
        trees
    });
}

export function upgradeTree(userContext) {
    const { gameData, setGameData } = userContext;

    if (gameData.bananas < 150000)
        return;

    let trees = gameData.trees.map(tree => ({ ...tree }));

    if (trees.length >= 4)
        return;

    trees.push({
        monkeys: 0
    });

    setGameData({
        bananas: gameData.bananas - 150000,
        trees
        bananas: gameData.bananas + bananasGained
    });

    return {
        earned: true,
        bananasGained,
        goldenBananaUsed
    };
}
