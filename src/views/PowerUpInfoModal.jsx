import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { usePowerUpContext } from '../hooks/PowerUpContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const PowerUpInfoModal = ({ show, onClose }) => {
    const powerUpContext = usePowerUpContext();

    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Power-up Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {Object.keys(powerUpContext.powerUps).map((key) => {
                    const powerUp = powerUpContext.powerUps[key];

                    return (
                        <div key={key} className="mb-3">
                            <h5 className="mb-1">{key.replace("_", " ")}:</h5>
                            <p className="mb-0 text-muted">{powerUp.info}</p>
                        </div>
                    );
                })}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PowerUpInfoModal;
