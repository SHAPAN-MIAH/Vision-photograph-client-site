import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import UserSidebar from '../../UserSidebar/UserSidebar';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import './Appointment.css'

const Appointment = () => {

    return (
        <div>
            <div style={{boxShadow: "0 3px 10px rgba(0,0,0,0.2)"}}>
            <Navbar/>
            </div>
            <div className="row Appointment-container">
                <div className="col-md-2">
                    <UserSidebar/>
                </div>
                <div className="col-md-10">
                    <AppointmentForm/>
                </div>
            </div>
        </div>
    );
};

export default Appointment;