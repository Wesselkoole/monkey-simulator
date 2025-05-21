import { useContext, useState } from "react";
import { createContext } from "react";
import Cookies from "js-cookie";
const userContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useUserContext() {
    return useContext(userContext);
}

export function UserContextProvider(props) {
    const [gameData, setGameData] = useState({
        bananas: 0,
        monkeys: 1,
        trees: 4,
        maxTreeClimbHeight: 5,
        currentMonkeyClimbHeight: 0,
        bananaTreeYield: 10
    });

    function setGameDataPublic(newGameData) {
        const keys = Object.keys(newGameData);
        const gameDataToSet = { ...gameData };

        keys.forEach((key) => {
            gameDataToSet[key] = newGameData[key];
        });

        setGameData(gameDataToSet);
    }

    function saveGameData() {
        Cookies.set("gameData", JSON.stringify(gameData))
    }

    function loadGameData() {
        const parsed = JSON.parse(Cookies.get("gameData"));
        setGameDataPublic(parsed);
    }

    const provided = {
        gameData,
        setGameData: setGameDataPublic,
        saveGameData,
        loadGameData
    }

    return (
        <userContext.Provider value={provided} >
            {props.children}
        </userContext.Provider>
    )
}