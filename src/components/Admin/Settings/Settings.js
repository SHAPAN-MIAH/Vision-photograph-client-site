import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './Settings.css';


const Settings = () => {
    const [appointmentsList, setAppointmentsList] = useState([]);
    
    useEffect(()=> {
        fetch('https://fast-garden-51323.herokuapp.com/appointments')
        .then(res => res.json())
        .then(data => setAppointmentsList(data))
        .then(data => console.log(data))
    }, [])

    const deleteAppointment = id => {
        console.log('delete clicked');
        axios.delete(`https://fast-garden-51323.herokuapp.com/deleteAppointment/${id}`)
        .then(res => {
            alert('Appointment deleted successfully.')
        })
        .catch(error => {
            console.log(error)
          })
        
    }

    return (
        <div className="container-fluid">
            <Navbar/>
            
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar/>
                    </div>
                    <div className="col-md-8 appointmentData-table mt-5 ml-3">
                        
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
                                        <td scope="col"><span onClick={() => deleteAppointment(appointmentList._id)} className="deleteIcon" style={{color: 'red', cursor: 'pointer', marginLeft: '12px'}}> <FontAwesomeIcon icon={faTrashAlt} /> </span></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
               
             </div>
        </div>
    );
};

export default Settings;