import React from 'react';
import { Link } from 'react-router-dom';
import chair from "../../../images/girlcamera.png";
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <main style={{height: "600px"}} className="row d-flex headerMain-container">
            <div className="col-md-4 offset-md-1 headerMain-dtl">
                <h2 style={{color: '#da7b00'}}> <span>WE ARE CREATIVE</span> PHOTOGRAPHER</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vero perspiciatis labore, voluptatum ipsam quam.</p>
                <Link to="/appointment">
                <button className="getAppointmentBtn">Get Appointment</button>
                </Link>
            </div>
            <div className="col-md-6">
                <div className="showCase-img">
                     <img src={chair} alt="" className="img-fluid"/>
                </div>
            </div>
            
        </main>
    );
};

export default HeaderMain;