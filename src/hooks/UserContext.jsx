import { useContext, useState } from "react";
import { createContext } from "react";
const userContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useUserContext() {
    if (userContext == null) {
        throw new Error("UserContext was not provided");
    }

    return useContext(userContext);
}

export function UserContextProvider(props) {
    const [gameData, setGameData] = useState({
        bananas: 0,
        monkeys: 1,
        tress: 1,
        currentMonkeyClimbHeight: 0,
        bananaTreeYield: 10
    });

    const setGameDataPublic = (newGameData) => {
        const keys = Object.keys(newGameData);
        const gameDataToSet = { ...gameData };

        keys.forEach((key) => {
            gameDataToSet[key] = newGameData[key];
        });

        setGameData(gameDataToSet);
    }

    const provided = {
        gameData,
        setGameData: setGameDataPublic
    }

    return (
        <userContext.Provider value={provided} >
            {props.children}
        </userContext.Provider>
    )
}