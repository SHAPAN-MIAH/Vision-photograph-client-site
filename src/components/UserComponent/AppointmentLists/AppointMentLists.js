import React, { useContext, useEffect, useState } from 'react';
// import { UserContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';
import UserSidebar from '../UserSidebar/UserSidebar';


const AppointmentLists = () => {
    const [appointmentsList, setAppointmentsList] = useState([]);
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(()=> {
        fetch('https://fast-garden-51323.herokuapp.com/appointments')
        // fetch('http://localhost:5500/isUSer',{
        //     method: 'post',
        //     headers: { 'content-type': 'application/json' },
        //     body: JSON.stringify({email: loggedInUser.email})
        // })
        .then(res => res.json())
        .then(data => setAppointmentsList(data))
    }, [])
    return (
        <div>
            <Navbar/>
            <div className="row">
            
            <div className="col-md-2">
                <UserSidebar/>
            </div>
            <div className="col-md-8 appointmentData-table mt-5 ml-4">
            
            <table className="table">
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

export default AppointmentLists;