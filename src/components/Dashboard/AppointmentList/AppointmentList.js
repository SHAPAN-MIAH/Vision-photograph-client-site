import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import './AppointmentList.css'

const AppointmentList = (props) => {
    console.log(props)
    const {name, serviceName, email, _id} = props.appointmentList;

    const deleteAppointment = id => {
        axios.delete(`https://fast-garden-51323.herokuapp.com/deleteAppointment/${id}`)
        .then(res => {
            console.log(res)
            alert('Appointment deleted successfully.')
        })
        
    }

    return (
        <div className="container-fluid">
            <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Appointment</th>
                        <th scope="col">User</th>
                        <th scope="col">Email</th>
                        <th scope="col">Delete</th>
                        </tr>
                    </thead>
               
                <thead>
                    <tr>
                        <td scope="col">{serviceName}</td>
                        <td scope="col">{name}</td>
                        <td scope="col">{email}</td>
                        <td scope="col"><span onClick={() => deleteAppointment(_id)} className="deleteIcon"> <FontAwesomeIcon icon={faTrashAlt} /> </span></td>
                        
                    </tr>
                </thead>
            </table>
            
        </div>
    );
};

export default AppointmentList;