import React from 'react';
import './AboutUs.css'
import aboutImg from "../../../images/_103576711_whatsubject.jpg"

const AboutUs = () => {
    return (
        <section className="aboutSection">
            <div className="container aboutDetail">
                <div className="about-title">
                    <h3>ABOUT <span>VISION PHOTOGRAPH</span></h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus a accusantium perspiciatis iure. Doloribus esse distinctio, magnam quibusdam perspiciatis laborum alias eligendi animi assumenda architecto?</p>
                </div>
                <div className="About-img d-flex justify-content-center">
                    <img src={aboutImg} alt="" />
                </div>
            </div>
            <div className="best">
                <div className="container">
                    <div className="best-title">
                        <h3>---WHY BEST <span>VISION PHOTOGRAPH!</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt impedit, ea dignissimos quod quas porro ut doloribus. Itaque, maxime autem.</p>
                    </div>
                    <div className="row specials">
                        <div className="col-md-4 mb-3">
                            <h3>Creative Photography</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ratione totam ipsam nulla, eaque vitae optio quod doloribus reiciendis voluptatibus.</p>

                        </div>
                        <div className="col-md-4 mb-3">
                            <h3>100% Client Satisfaction</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae expedita quasi sunt, vel dolores quia quidem ipsam nulla officiis tempora?</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <h3>Dedicated Support</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error modi tenetur aliquid iste numquam illo reprehenderit, harum eaque eum similique.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;