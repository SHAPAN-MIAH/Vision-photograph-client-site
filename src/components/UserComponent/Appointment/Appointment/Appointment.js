import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import UserSidebar from '../../UserSidebar/UserSidebar';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import './Appointment.css'

const Appointment = () => {

    return (
        <div className="Appointment-container">
            <Navbar/>
            <div className="row">
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