import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './AppointmentForm.css'


const AppointmentForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const {id} = useParams();
    const[service, setService] = useState({});
    const{serviceName, serviceCost} = service;

    const [appointmentData, setAppointmentData] = useState("");
   
    useEffect(() => {
        fetch(`https://fast-garden-51323.herokuapp.com/services/${id}`)
        .then(res => res.json())
        .then(data => setService(data[0]))
    }, [id]);

    const onSubmit = data => {
        setAppointmentData(data)
        // console.log(data)
    }

    const handelPayment = paymentId => {
        const appointmentDetails = {...appointmentData, orderTime: new Date(), paymentId}
        console.log(appointmentDetails);

        fetch('https://fast-garden-51323.herokuapp.com/addAppointment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(appointmentDetails)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert('Appointment created successfully. Check appointment list for details.');
            }
        })
    }

    return (
        <section>
                <div className="row">
                    <div className="col-md-10 mt-5" style={{display: appointmentData ? 'none' : 'block'}} >
                        
                        <div className="form-Container">
                            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                            <h5 className="serviceName">You chose a service: {serviceName}</h5>
                                <div className="form-group">
                                    <input type="text" {...register("serviceName")} name="serviceName" placeholder="Service Name" className="form-control" required/>
                                </div>
                                <div className="form-group">
                                    <input type="text" {...register("name")} name="name" placeholder="Your Name" className="form-control" required/>
                                </div>
                                <div className="form-group">
                                    <input type="text" {...register("phone")} name="phone" placeholder="Phone Number" className="form-control" required/>
                                </div>
                                <div className="form-group">
                                    <input type="text" {...register("email")} name="email" placeholder="Email" className="form-control" required/>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-6 mb-3">
                                        <select className="form-control" {...register("gender")} name="gender"  >
                                            <option disabled={true} value="Not set">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Not set">Other</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6">
                                        <input className="form-control" {...register("age")} name="age" placeholder="Your Age" type="number" />
                                    </div>
                                    
                                </div>
                                <div className="form-group text-right">
                                    <button type="submit" className="appointment-submitBtn">Submit</button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7" style={{display: appointmentData ? 'block' : 'none'}}>
                        <div className="payment-container">
                            <h5>Payment</h5>
                            <ProcessPayment handelPayment={handelPayment}/>
                            <p>Your service charge will be ${serviceCost}</p>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default AppointmentForm;