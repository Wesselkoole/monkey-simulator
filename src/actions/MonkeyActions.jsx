export function monkeyClicked(userContext) {
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
        bananas: gameData.bananas + (gameData.bananaTreeYield * gameData.monkeys)
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
    });
}
