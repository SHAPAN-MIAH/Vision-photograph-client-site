import React, { useEffect, useState } from 'react';
import './MoreTestimonials.css';
import MoreTestimonial from '../MoreTestimonial/MoreTestimonial';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const MoreTestimonials = () => {
    const [testimonialData, setTestimonialData] = useState([])
    // const someReviews = testimonialData.slice(0,3);

    useEffect(()=> {
        fetch('https://fast-garden-51323.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setTestimonialData(data))
    }, [])
    
    return (
       <section className="testimonials my-5">
           <div className="testimonial-header">
                <h3 className="testimonial-title">TESTIMONIAL</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, provident! Esse dolorum culpa aspernatur iusto.</p>
            </div>
           <div className="container">
           <h3 className="clientSays">What Our <span>Clients <br/> Says</span> </h3>
               
               <div className="card-deck mt-5">
                    {
                        testimonialData.map(testimonial => <MoreTestimonial key={testimonial.key} testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
               
           </div>
           <div className="text-center m-5">
                 <Link to="/">
                    <button className="showMoreBtn">Back To Home <FontAwesomeIcon  icon={faArrowRight}></FontAwesomeIcon></button>
                 </Link>
            </div> 
       </section>
    );
};

export default MoreTestimonials;