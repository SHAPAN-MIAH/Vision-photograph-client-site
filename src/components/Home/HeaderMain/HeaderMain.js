import React from 'react';
import { Link } from 'react-router-dom';
import girl from "../../../images/girlcamera.png";
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <main style={{height: "620px"}} className="row d-flex headerMain-container">
            <div className="col-md-4 offset-md-1 headerMain-dtl">
                <h2> <span>WE ARE CREATIVE</span> PHOTOGRAPHER</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vero perspiciatis labore, voluptatum ipsam quam.</p>
                <Link to="/appointment">
                <button className="getAppointmentBtn mt-3">Get Appointment</button>
                </Link>
            </div>
            <div className="col-md-6">
                <div className="showCase-img">
                     <img src={girl} alt="" className="img-fluid"/>
                </div>
            </div>
            
        </main>
    );
};

export default HeaderMain;