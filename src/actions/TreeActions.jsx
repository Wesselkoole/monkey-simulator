import { useState } from "react";

export function generateTree(userContext) {
    const gameData = userContext.gameData;
    const [forestContainerHeight, setForestContainerHeight] = useState(0);

    const barks = [];
    for (let i = 0; i < gameData.maxTreeClimbHeight; i = i + 10) {
        barks.push(
            <img
                key={`bark-${i}`}
                className="bark"
                alt="bark"
                src="src/images/midden.png"
            />
        );
    }
    return (
        <div className="col-md-3 tree">
            <div className="bananasContainer">
                <img className="bananas" alt="bananas" src="src/images/bananen.png" />
                <img className="bananas inverted-image" alt="bananas" src="src/images/bananen.png" />
            </div>

            <div className="tree-body">
                <img className="leaves" alt="leaves" src="src/images/bladeren.png" />
                {barks}
                <img className="root anchored-root" alt="root" src="src/images/bodem.png" />
            </div>
        </div>
    );


}

export function generateForest(userContext) {
    const forest = document.getElementById("forest");
    if (forest){
        forest.innerHTML = "";
    }
    const gameData = userContext.gameData;
    const trees = [];
    for (let i = 0; i < gameData.trees; i++) {
        trees.push(generateTree(userContext));
    }
    
    return <>{trees}</>;
}


export function changeForestHeight(px){
    const forest = document.getElementById("forest");
    if (!forest.style.marginTop){
        forest.style.marginTop = "0px";
    }
    forest.style.marginTop = Number(forest.style.marginTop.slice(0,-2))-px+"px";
}