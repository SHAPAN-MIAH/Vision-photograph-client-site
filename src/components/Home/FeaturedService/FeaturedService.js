import { faCamera, faProjectDiagram, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import featuredImg from "../../../images/photographer-1805317_960_720.jpg";
import './FeaturedService.css'

const FeaturedService = () => {
    
    return (
        <section className="my-5 featured-container">
            <div className="container ">
                <div className="row">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={featuredImg} alt=""/>
                    </div>
                    <div className="col-md-7">
                        <h3 className="feature-title">Exceptional <span>Photography,</span><br/> On Your Terms</h3>
                        <p className="feature-dec">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab autem voluptate quis eligendi animi expedita nesciunt deserunt nobis eum officiis minima, repellat optio at suscipit.</p>
                        <Link to="/appointment" className="text-white">
                            <button className="LearnMore-btn">Get Appointment</button>
                        </Link>

                        <div className="count row m-3 text-center">
                            <div className="col-sm-4">
                                <div className="Cp">
                                    <div id="countIcon"> <FontAwesomeIcon  icon={faProjectDiagram}></FontAwesomeIcon> </div>
                                    <div className="counter">1756 +</div>
                                    <h6>Complete Project</h6>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="Rp">
                                    <div id="countIcon"> <FontAwesomeIcon  icon={faCamera}></FontAwesomeIcon> </div>
                                    <div className="counter">321 +</div>
                                    <h6>Running Project</h6>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="Hc">
                                    <div id="countIcon"> <FontAwesomeIcon  icon={faUserCheck}></FontAwesomeIcon> </div>
                                    <div className="counter">1550 +</div>
                                    <h6>Happy Client </h6>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;