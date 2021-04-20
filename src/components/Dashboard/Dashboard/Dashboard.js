import React, { useEffect, useState } from 'react';
import './Dashboard.css'

const Dashboard = () => {
    const [appointmentsList, setAppointmentsList] = useState([])
    
    useEffect(()=> {
        fetch('https://fast-garden-51323.herokuapp.com/appointments')
        .then(res => res.json())
        .then(data => setAppointmentsList(data))
    }, [])


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