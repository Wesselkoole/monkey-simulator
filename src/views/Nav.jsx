import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useUserContext } from '../hooks/UserContext';

const Nav = () => {
    const userContext = useUserContext();

    return (
        <nav className="navbar bg-warning shadow-sm py-2">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                {/* Logo */}
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img
                        src="src/images/logo.png"
                        alt="Logo"
                        className="img-fluid"
                        style={{ height: '40px', width: 'auto' }}
                    />
                </a>
            </div>

            {/* Banana Counter */}
            <div
                className="position-absolute top-50 start-50 translate-middle d-flex align-items-center gap-2"
                style={{ pointerEvents: 'none' }}
            >
                <img
                    src="src/images/bananen.png"
                    alt="Bananen"
                    style={{ height: '30px', width: 'auto' }}
                />
                <h5 className="mb-0">{userContext.gameData.bananas}</h5>
            </div>
        </nav>
    );
};

export default Nav;
