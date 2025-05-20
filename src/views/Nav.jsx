import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Nav = () => {
    return (

        <nav className="navbar bg-warning">
            <div className="container-fluid">
                    <a className="navbar-brand text-start"   style={{ height: "5%", width: "5%" }} href="#"><img className="img-fluid" alt="logo" src="src/images/logo.png"/> </a>
                <div className="col-md-11">
                    <h5 className="text-center">Banana counter:</h5>
                </div>
            </div>
        </nav>    );
};

export default Nav;
