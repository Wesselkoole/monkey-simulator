import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../css/upgrades.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { usePowerUpContext } from '../hooks/PowerUpContext';
import { useUserContext } from '../hooks/UserContext';
import { buyUpgrade } from '../actions/PowerUpActions';
import PowerUpInfoModal from '../views/PowerUpInfoModal.jsx';

const Upgrades = () => {
    const userContext = useUserContext();
    const powerUpContext = usePowerUpContext();

    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <>
            <div className="row mb-3">
                <h1>Upgrades
                    <FontAwesomeIcon
                    icon={faInfoCircle}
                    className="ms-2 fa-dark info-icon"
                    style={{ cursor: 'pointer' }}
                    onClick={() => openModal()}
                    title="More info"
                /></h1>

                {Object.keys(powerUpContext.powerUps).map((key) => {
                    const powerUp = powerUpContext.powerUps[key];
                    const userBananas = userContext.gameData.bananas;

                    let maxLevelReached = false;
                    if (powerUp.maxLevel !== undefined) {
                        const maxLevel = typeof powerUp.maxLevel === "function"
                            ? powerUp.maxLevel(powerUpContext.powerUps)
                            : powerUp.maxLevel;
                        maxLevelReached = powerUp.level >= maxLevel;
                    }

                    const notEnoughBananas = userBananas < powerUp.cost;

                    return (
                        <div key={key} className="col-12 mt-2 d-flex align-items-center upgrade-container">
                            <button
                                className="upgrade-btn flex-grow-1"
                                onClick={() => buyUpgrade(userContext, powerUpContext, key)}
                                disabled={notEnoughBananas || maxLevelReached}
                            >
                                {key.replace("_", " ")} (lvl {powerUp.level}) - Cost: {powerUp.cost}
                            </button>
                        </div>
                    );
                })}
            </div>

            <PowerUpInfoModal
                show={modalVisible}
                onClose={closeModal}
            />
        </>
    );
};

export default Upgrades;
