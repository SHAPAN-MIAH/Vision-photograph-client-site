import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AppointmentList from '../AppointmentList/AppointmentList';
import './Dashboard.css'

const Dashboard = () => {
    const [appointmentsList, setAppointmentsList] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(()=> {
        fetch('https://fast-garden-51323.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    }, [])

    useEffect(()=> {
        fetch('https://fast-garden-51323.herokuapp.com/appointments')
        .then(res => res.json())
        .then(data => setAppointmentsList(data))
    }, [])
    return (
        <div className="container">
             <div className="row">
                <div className="col-md-10 appointmentData-table">
                    {
                        appointmentsList.map(appointmentList => <AppointmentList appointmentList={appointmentList}></AppointmentList>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;