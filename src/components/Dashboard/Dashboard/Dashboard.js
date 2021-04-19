import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
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

    const deleteAppointment = id => {
        axios.delete(`https://fast-garden-51323.herokuapp.com/deleteAppointment/${id}`)
        .then(res => {
            console.log(res)
            alert('Appointment deleted successfully.')
        })
        
    }

    return (
        <div className="container">
             <div className="row">
                <div className="col-md-10 appointmentData-table mt-5">
                    
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Appointment</th>
                                <th scope="col">User</th>
                                <th scope="col">Email</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            appointmentsList.map((appointmentList, index) =>
                            
                                <tr>
                                    <td scope="col">{index}</td>
                                    <td scope="col">{appointmentList.serviceName}</td>
                                    <td scope="col">{appointmentList.name}</td>
                                    <td scope="col">{appointmentList.email}</td>
                                    <td scope="col"><span onClick={() => deleteAppointment(appointmentsList._id)} className="deleteIcon" style={{color: 'red', cursor: 'pointer', marginLeft: '12px'}}> <FontAwesomeIcon icon={faTrashAlt} /> </span></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;