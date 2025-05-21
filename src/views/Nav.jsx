import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useUserContext } from '../hooks/UserContext';
import {usePowerUpContext} from "../hooks/PowerUpContext.jsx";
import logo from "../images/logo.png";
import bananen from "../images/bananen.png";

const Nav = () => {
    const userContext = useUserContext();
    const powerUpContext = usePowerUpContext();
    const rawValue = (userContext.gameData.bananaTreeYield * (powerUpContext.powerUps.HARVEST.level * 1.5)) / (powerUpContext.powerUps.TREE_HEIGHT.level * 10);

    const bananasPerClick = rawValue > 0 ? rawValue : 1;    return (
        <nav className="navbar bg-warning shadow-sm py-2">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                {/* Logo */}
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img
                        src={logo}
                        alt="Logo"
                        className="img-fluid"
                        style={{ height: '40px', width: 'auto' }}
                    />
                </a>
                <p>boom hoogte({powerUpContext.powerUps.TREE_HEIGHT.level * 10} : {userContext.gameData.currentMonkeyClimbHeight}) Banana's per click({bananasPerClick})</p>

            </div>

            {/* Banana Counter */}
            <div
                className="position-absolute top-50 start-50 translate-middle d-flex align-items-center gap-2"
                style={{ pointerEvents: 'none' }}
            >
                <img
                    src={bananen}
                    alt="Bananen"
                    style={{ height: '30px', width: 'auto' }}
                />
                <h5 className="mb-0">{userContext.gameData.bananas}</h5>
            </div>
        </nav>
    );
};

export default Nav;
