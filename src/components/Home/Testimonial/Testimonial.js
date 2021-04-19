import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Testimonial.css'
const Testimonial = (props) => {
    const {name, state, imageUrl, description} = props.testimonial;
    return (
        <div className="card card-container">
            
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={imageUrl} alt="" width="70"/>
                <div>
                    <h6>{name}</h6>
                    <p className="m-0">{state}</p>
                </div>
                <div className="quote-icon">
                <FontAwesomeIcon  icon={faQuoteRight}></FontAwesomeIcon>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-center">{description}</p>
            </div>
       </div>
    );
};

export default Testimonial;