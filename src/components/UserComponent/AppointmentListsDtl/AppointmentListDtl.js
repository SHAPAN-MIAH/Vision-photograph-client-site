import React from 'react';

const AppointmentListDtl = (props) => {
    const {name, serviceName, email} = props.appointmentList;
    return (
        <div className="container-fluid">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Appointment</th>
                        <th scope="col">User</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td scope="col">{serviceName}</td>
                        <td scope="col">{name}</td>
                        <td scope="col">{email}</td>
                    </tr>
                </thead>
            </table>
            
        </div>
    );
};

export default AppointmentListDtl;