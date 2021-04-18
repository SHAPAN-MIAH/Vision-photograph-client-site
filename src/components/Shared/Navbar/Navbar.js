import React from 'react';
import logo from '../../../images/vp logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                  {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                  </button> */}
                  <center> <div id="mainlogo" class="ml-5"> <img style={{width: '170px'}} src={logo}/>     </div> </center>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon">  </span>
                  </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active mr-5" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active mr-5" href="/team">Our Team</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active mr-5" href="/appointmentLists">Dashboard</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active mr-5" href="/admin">Admin</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active mr-5" href="/contact">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active mr-5" href="/login">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;