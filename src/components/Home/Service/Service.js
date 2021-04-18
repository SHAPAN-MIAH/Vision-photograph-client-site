import React, { useEffect, useState } from 'react';
import ServiceDtl from '../ServiceDtl/ServiceDtl';
import './Service.css'


const Service = () => {
    const[serviceData, setServiceData] = useState([])
    useEffect(() => {
        fetch('https://fast-garden-51323.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServiceData(data))
    }, [])
    return (
        <section className="services-Container container">
            <div className="service-title text-center">
                <h3>OUR SERVICES</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quisquam molestiae unde magni nam ducimus?</p>
            </div>

            <div className="d-flex justify-content-center align-items-center">
                <div className="pt-3 row">
                    {
                    serviceData.map(service => <ServiceDtl service={service}></ServiceDtl>)  
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;