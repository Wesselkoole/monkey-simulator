import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../css/upgrades.css";

const Upgrades = () => {
    return (
    <>
        <div className="row mb-3">
            <h1>Upgrades</h1>

            <div>
                <button className="btn btn-sm border border-black upgrade-btn">
                    <div className="col-md-12 text-start">
                        <h5>Bananas per harvest: </h5>
                    </div>
                </button>
                <div className="upgrade-info">Info about the upgrade</div>
            </div>

            <div>
                <button className="btn btn-sm border border-black upgrade-btn">
                    <div className="col-md-12 text-start">
                        <h5>Auto clicker: </h5>
                    </div>
                </button>
                <div className="upgrade-info">Info about the upgrade</div>
            </div>

            <div>
                <button className="btn btn-sm border border-black upgrade-btn">
                    <div className="col-md-12 text-start">
                        <h5>Steroids: </h5>
                    </div>
                </button>
                <div className="upgrade-info">Info about the upgrade</div>
            </div>

            <div>
                <button className="btn btn-sm border border-black upgrade-btn">
                    <div className="col-md-12 text-start">
                        <h5>Golden banana: </h5>
                    </div>
                </button>
                <div className="upgrade-info">Info about the upgrade</div>
            </div>
        </div>
        <div className="row">
            <h1>Power-ups</h1>

            <div>
                <button className="btn btn-sm border border-black upgrade-btn">
                    <div className="col-md-12 text-start">
                        <h5>Steriods: </h5>
                    </div>
                </button>
                <div className="upgrade-info">Info about the power-up</div>
            </div>

        </div>
    </>
    );
};

export default Upgrades;
