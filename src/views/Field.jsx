import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { useUserContext } from '../hooks/UserContext';
import { useEffect, useRef, useState } from 'react';
import { monkeyClicked } from '../actions/MonkeyActions';
import climbingMonkey from "../images/climbing-monkey.png"
import { usePowerUpContext } from '../hooks/PowerUpContext';

export function Field() {
    const userContext = useUserContext();
    const powerUpContext = usePowerUpContext();

    const gameData = userContext.gameData;

    const forestRef = useRef();
    const barkRef = useRef();
    const rootRef = useRef();

    const updateHeight = () => {
        const forest = forestRef.current;
        const bark = barkRef.current;
        const root = rootRef.current;

        if (!forest || !bark || !root)
            return;

        let offset = (gameData.currentMonkeyClimbHeight * bark.offsetHeight / 10);

        forest.style.transform = `translateY(${root.offsetHeight + offset}px)`;
    };

    useEffect(updateHeight, [gameData.currentMonkeyClimbHeight]);
    useEffect(() => monkeyClicked(userContext, powerUpContext), []);

    return (
        <>
            <div id="forestContainer" className="h-100">
                <div id="forest" className="row" ref={forestRef}>
                    {Array.from({ length: powerUpContext.powerUps.TREE.level }).map(() => (
                        <div className="col-md-3 tree">
                            <div className="bananasContainer">
                                <img className="bananas" alt="bananas" src="src/images/bananen.png" />
                                <img className="bananas inverted-image" alt="bananas" src="src/images/bananen.png" />
                            </div>

                            <div className="tree-body">
                                <img className="leaves" alt="leaves" src="src/images/bladeren.png" />
                                    {Array.from({ length: gameData.maxTreeClimbHeight / 10 }).map((_, i) => <img
                                        key={`bark-${i}`}
                                        ref={barkRef}
                                        className="bark"
                                        alt="bark"
                                        src="src/images/midden.png"
                                    />)}
                                <img className="root anchored-root" alt="root" ref={rootRef} src="src/images/bodem.png" />
                            </div>
                        </div>
                    ))}
                </div>
            
                <div className="monkey-container">
                    {Array.from({ length: powerUpContext.powerUps.MONKEY.level }).map(() => (
                        <img src={climbingMonkey} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Field;
