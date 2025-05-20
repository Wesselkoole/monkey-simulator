import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useUserContext } from '../hooks/UserContext'
import { monkeyClicked } from '../actions/MonkeyActions';
import { usePowerUpContext } from '../hooks/PowerUpContext.jsx';
const Clicker = () => {
    const userContext = useUserContext();
    const powerUpContext = usePowerUpContext();
    const handleClick = () => {
        monkeyClicked(userContext, powerUpContext);
    };

    return (
        <div className="d-flex justify-content-center align-items-center h-100">
            <img
                className="img-fluid"
                src="src/images/monkey.png"
                alt="Monkey"
                style={{ cursor: 'pointer' }}
                onClick={handleClick}
            />
        </div>
    );
};

export default Clicker;
