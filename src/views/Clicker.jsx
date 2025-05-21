import React, {useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/clicker.css';
import { useUserContext } from '../hooks/UserContext'
import { monkeyClicked } from '../actions/MonkeyActions';
import { usePowerUpContext } from '../hooks/PowerUpContext.jsx';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSyringe} from "@fortawesome/free-solid-svg-icons";

const Clicker = () => {
    const userContext = useUserContext();
    const powerUpContext = usePowerUpContext();
    const autoClickerLevel = powerUpContext.powerUps.AUTO_CLICKER.level;
    // const [clickAmount, setClickAmount] = useState(null);
    // const [showValue, setShowValue] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        // const value = ((userContext.gameData.bananaTreeYield * powerUpContext.powerUps.HARVEST.level) * userContext.gameData.monkeys);
        // setClickAmount(value);
        // setShowValue(true);
        monkeyClicked(userContext, powerUpContext);
        setIsClicked(true);

        // klik animatie
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 100); // Reset na 100ms

        // +x amimatie
        // setTimeout(() => {
        //     setShowValue(false);
        // }, 800);
    };

    const renderAutoClickerIcons = () => {
        const icons = [];
        const radius = 150;

        for (let i = 0; i < autoClickerLevel; i++) {
            const angle = (2 * Math.PI / autoClickerLevel) * i;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const rotation = angle * (180 / Math.PI) + 45;

            icons.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faSyringe}
                    style={{
                        position: 'absolute',
                        left: `calc(50% + ${x}px - 10px)`,
                        top: `calc(50% + ${y}px - 10px)`,
                        fontSize: '20px',
                        color: '#00c8ff',
                        zIndex: 1,
                        transform: `rotate(${rotation}deg)`,
                    }}
                />
            );
        }
        return icons;
    };



    useEffect(() => {
        if (autoClickerLevel > 0) {
            const delay = 1000 / autoClickerLevel;

            let index = 0;
            const interval = setInterval(() => {
                monkeyClicked(userContext, powerUpContext);
                index = (index + 1) % autoClickerLevel;
            }, delay);

            return () => clearInterval(interval);
        }
    }, [autoClickerLevel, userContext, powerUpContext]);


    return (
        <div className="d-flex justify-content-center align-items-center h-100 position-relative">
            {/* Auto Clicker Rings */}
            {renderAutoClickerIcons()}

            {/*{showValue && (*/}
            {/*    <div*/}
            {/*        className="position-absolute text-success fw-bold"*/}
            {/*        style={{*/}
            {/*            top: '30%',*/}
            {/*            fontSize: '2rem',*/}
            {/*            animation: 'riseAndFade 0.8s ease-out',*/}
            {/*            zIndex: 3*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        +{clickAmount}*/}
            {/*    </div>*/}
            {/*)}*/}

            {/* Aap afbeelding */}
            <img
                className={`img-fluid ${isClicked ? 'monkey-clicked' : ''}`}
                src="src/images/monkey.png"
                alt="Monkey"
                style={{ cursor: 'pointer', zIndex: 2 }}
                onClick={handleClick}
            />
        </div>

    );
};

export default Clicker;
