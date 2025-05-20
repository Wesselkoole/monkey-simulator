import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloud} from "@fortawesome/free-solid-svg-icons";

const Field = () => {
    return (
        <>
            {/*Cloulds*/}
            <div className="row bg-info p-3">
                <div className="col-md-4"><FontAwesomeIcon icon={faCloud} size="2xl" className="text-light " /></div>
                <div className="col-md-4"><FontAwesomeIcon icon={faCloud} size="2xl" className="text-light " /></div>
                <div className="col-md-4"><FontAwesomeIcon icon={faCloud} size="2xl" className="text-light " /></div>
            </div>
            <div className="row bg-info p-3">
                <div className="col-md-3"><FontAwesomeIcon icon={faCloud} size="2xl" className="text-light " /></div>
                <div className="col-md-3"><FontAwesomeIcon icon={faCloud} size="2xl" className="text-light " /></div>
                <div className="col-md-3"><FontAwesomeIcon icon={faCloud} size="2xl" className="text-light " /></div>
                <div className="col-md-3"><FontAwesomeIcon icon={faCloud} size="2xl" className="text-light " /></div>
            </div>

            {/*Trees*/}
            <div className="row me-5">
                <div className="col-md-3 " style={{ height: "15%", width: "15%" }}>
                    <img className="img-fluid" alt="logo" src="src/images/bladeren.png"/>
                    <img className="img-fluid" alt="logo" src="src/images/midden.png"/>
                    <img className="img-fluid" alt="logo" src="src/images/bodem.png"/>
                </div>
            </div>

        </>
    );
};

export default Field;
