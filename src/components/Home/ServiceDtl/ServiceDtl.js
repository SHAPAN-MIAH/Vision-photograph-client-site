import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceDtl.css'

const ServiceDtl = (props) => {
    // console.log(props)
    const {serviceName, description, serviceCost, _id} = props.service;
    const history = useHistory()
    const handelAppointment = id => {
        console.log("purchase clicked", id );
        history.push(`/appointment/${id}`)
    }
    return (
        <div className="col-md-4 ">
            <div className="services-dtl text-center">
                <div className="cost">
                    <h5>${serviceCost}</h5>
                    <h5 className="ch">Cost Here <FontAwesomeIcon  icon={faArrowRight}></FontAwesomeIcon></h5>
                </div>
                <div className="service-text">
                    <h4 className="pb-2 pt-2">{serviceName}</h4>
                    <p>{description}</p>
                    <button onClick={ () => handelAppointment(_id)} className="appointmentBtn">Get Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDtl;