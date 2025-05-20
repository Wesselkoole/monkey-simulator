import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../css/upgrades.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Upgrades = () => {
    return (
        <>
        <div className="row">
            <h1>Upgrades</h1>

            <div>
                <button className="btn btn-sm border border-black upgrade-btn">
                    <div className="col-md-12 text-start">
                        <h5>Bananas per harvest: xxx</h5>
                    </div>
                </button>
                <div className="upgrade-info">Verhoogt het aantal bananen per klik.</div>
            </div>

            <div>
                <button className="btn btn-sm border border-black upgrade-btn">
                    <div className="col-md-12 text-start">
                        <h5>Auto clicker: xxx</h5>
                    </div>
                </button>
                <div className="upgrade-info">Klikt automatisch elke seconde.</div>
            </div>

            <div>
                <button className="btn btn-sm border border-black upgrade-btn">
                    <div className="col-md-12 text-start">
                        <h5>Steroids: xxx</h5>
                    </div>
                </button>
                <div className="upgrade-info">Verdubbelt de clicks tijdelijk.</div>
            </div>

            <div>
                <button className="btn btn-sm border border-black upgrade-btn">
                    <div className="col-md-12 text-start">
                        <h5>Golden banana: xxx</h5>
                    </div>
                </button>
                <div className="upgrade-info">Speciaal item voor grote boosts.</div>
            </div>
        </div>
        <div className="row">
            <h1>Upgrades</h1>
            <button className="btn btn-sm border border-black upgrade-btn">
                <div className="col-md-12 text-start">
                    <h5>Steriods: xxx</h5>
                </div>
            </button>
            <div className="upgrade-info">Speciaal item voor grote boosts.</div>
        </div>
    </>
    );
};

export default Upgrades;
