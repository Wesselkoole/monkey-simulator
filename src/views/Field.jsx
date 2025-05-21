import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUserContext } from '../hooks/UserContext';
import { useEffect, useRef } from 'react';
import climbingMonkey from "../assets/climbing-monkey.png"
import { usePowerUpContext } from '../hooks/PowerUpContext';
import bananen from "./assets/bananen.png";
import bladeren from "../assets/bladeren.png";
import midden from "../assets/midden.png";
import bodem from "../assets/bodem.png";

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

    return (
        <>
            <div id="forestContainer" className="h-100">
                <div id="forest" className="row" ref={forestRef}>
                    {Array.from({ length: powerUpContext.powerUps.TREE.level }).map(() => (
                        <div className="col-md-3 tree">
                            <div className="bananasContainer">
                                <img className="bananas" alt="bananas" src={bananen} />
                                <img className="bananas inverted-image" alt="bananas" src={bananen} />
                            </div>

                            <div className="tree-body">
                                <img className="leaves" alt="leaves" src={bladeren} />
                                    {Array.from({ length: powerUpContext.powerUps.TREE_HEIGHT.level }).map((_, i) => <img
                                        key={`bark-${i}`}
                                        ref={barkRef}
                                        className="bark"
                                        alt="bark"
                                        src={midden}
                                    />)}
                                <img className="root anchored-root" alt="root" ref={rootRef} src={bodem} />
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
