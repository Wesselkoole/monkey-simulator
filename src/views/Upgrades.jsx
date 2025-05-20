import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../css/upgrades.css";
import { usePowerUpContext } from '../hooks/PowerUpContext';
import { useUserContext } from '../hooks/UserContext';
import { buyUpgrade } from '../actions/PowerUpActions';

const Upgrades = () => {
    const userContext = useUserContext();
    const powerUpContext = usePowerUpContext();

    return (
    <>
        <div className="row mb-3">
            <h1>Upgrades</h1>

            {Object.keys(powerUpContext.powerUps).map((key) => (
                <div key={key} className="mt-2">
                    <button
                        className="upgrade-btn"
                        onClick={() => buyUpgrade(userContext, powerUpContext, key)}
                    >
                        {key.replace("_", " ")} (lvl {powerUpContext.powerUps[key].level}) - Cost: {powerUpContext.powerUps[key].cost}
                    </button>
                    <div className="upgrade-info">
                        Info about the {key.toLowerCase().replace("_", " ")} upgrade
                    </div>
                </div>
            ))}

        </div>
    </>
    );
};

export default Upgrades;
