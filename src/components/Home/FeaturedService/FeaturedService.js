import { faCamera, faImages, faProjectDiagram, faTrophy, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import featuredImg from "../../../images/photographer-1805317_960_720.jpg";
import './FeaturedService.css'

const FeaturedService = () => {

    // const featuredContainer = document.querySelector('.featured-container');
    // const counters = document.querySelectorAll(".counter");
    // const speed = 3000;


    // counters.forEach(counter => {
    //     const updateCount = () => {
    //         const target = +counter.getAttribute('data-target');
    //         const count = +counter.innerText;

    //         const inc = target / speed;

    //         if (count < target) {
    //             counter.innerText = Math.ceil(count + inc);
    //             setTimeout(updateCount, 1);
    //         } else {
    //             counter.innerText = target;
    //         }
    //     }
    //     featuredContainer.addEventListener('mouseenter', Event =>{
    //         updateCount();
    //     })
        
    // })
    
    return (
        <section className=" featured-container">
            <div className="container ">
                <div className="row">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={featuredImg} alt=""/>
                    </div>
                    <div className="col-md-7">
                        <div className="featuresDes ">
                            <h3 className="feature-title">Exceptional <span>Photography,</span><br/> On Your Terms</h3>
                            <p className="feature-dec">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab autem voluptate quis eligendi animi expedita nesciunt deserunt nobis eum officiis minima, repellat optio at suscipit.</p>
                            <Link to="/appointment" className="text-white">
                                <button className="LearnMore-btn">Get Appointment</button>
                            </Link>
                        </div>

                        <div className="count row m-3 text-center">
                            <div className="col-sm-3">
                                <div className="Cp">
                                    <div id="countIcon"> <FontAwesomeIcon  icon={faImages}></FontAwesomeIcon> </div>
                                    <div className="counter" data-target="1750">500 +</div>
                                    <h6>Complete Project</h6>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="Hc">
                                    <div id="countIcon"> <FontAwesomeIcon  icon={faUserCheck}></FontAwesomeIcon> </div>
                                    <div className="counter" data-target="1550">500 +</div>
                                    <h6>Happy Client </h6>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="Rp">
                                    <div id="countIcon"> <FontAwesomeIcon  icon={faCamera}></FontAwesomeIcon> </div>
                                    <div className="counter" data-target="1255">100 +</div>
                                    <h6>Running Project</h6>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="Aw">
                                    <div id="countIcon"> <FontAwesomeIcon  icon={faTrophy}></FontAwesomeIcon> </div>
                                    <div className="counter" data-target="1255">50 +</div>
                                    <h6>Awards</h6>
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