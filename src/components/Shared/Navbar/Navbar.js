import React from 'react';
import logo from '../../../images/vp logo.png';
import './Navbar.css';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
            img
                  <center> <div id="mainlogo"> <img style={{width: '150px'}} src={logo}/>     </div> </center>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">  </span>
                  </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active mr-4" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active mr-4" href="/moreTeam">Our Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active mr-4" href="/appointmentLists">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active mr-4" href="/admin">Admin</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active mr-4" href="/contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active  " href="/login">Login</a>
                        </li>
                    
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;