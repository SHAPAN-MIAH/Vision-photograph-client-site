import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentListDtl from '../AppointmentListsDtl/AppointmentListDtl';
import UserSidebar from '../UserSidebar/UserSidebar';


const AppointmentLists = () => {
    const [appointmentsList, setAppointmentsList] = useState([])

    useEffect(()=> {
        fetch('https://fast-garden-51323.herokuapp.com/appointments')
        .then(res => res.json())
        .then(data => setAppointmentsList(data))
    }, [])
    return (
        <div className="container-fluid">
            <Navbar/>
            <div className="row">
            
            <div className="col-md-2">
                <UserSidebar/>
            </div>
            <div className="col-md-8 appointmentData-table">
                {
                    appointmentsList.map(appointmentList => <AppointmentListDtl appointmentList={appointmentList}> </AppointmentListDtl>)
                }
            </div>
        </div>
        </div>
    );
};

export default AppointmentLists;