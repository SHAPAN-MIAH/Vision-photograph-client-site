import React from 'react';
import './ContactUs.css'
import map from "../../images/426ae26bf911c625853ba3f6340fea25.jpg";
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
const ContactUs = () => {
    return (
        <section>
            <div className="container-fluid">
            <Navbar/>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <div class="map_content">
                            <div>
                                    <h2> Contact Us </h2> 
                                    <h4>Vision Photograph.net</h4>
                                    <h6>Vision Photograph Center,</h6>
                                    <h6>California - 45647 Los Angeles</h6>
                                    <h6><span> Tel: </span> +23345345646</h6>
                                    <h6><span>E-mail: </span> visionphotograph@gmail.com</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nesciunt ad a dolorum quibusdam eaque dolore veritatis et dignissimos qui!</p>
                            </div>

                            <div>
                                    <h4>Comments</h4>
                                    <textarea  id="text_input" cols="40" rows="2"></textarea> <br></br>
                                    <a href="">Submit</a>
                            </div>
                        </div>   
                    </div>
                    <div className="col-md-6">
                    <div class="google_map">
                    <img src={map} alt=""/>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            <Footer/>
        </section>
    );
};

export default ContactUs;