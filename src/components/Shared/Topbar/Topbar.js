import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Topbar.css';

const Topbar = () => {
    return (
        <section id="topBar">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="phone"><FontAwesomeIcon className="icon" icon={faPhoneAlt}></FontAwesomeIcon> Phone: +(98) 888 7777</div>
                    </div>
                    <div class="col-md-4">
                        <div class="email"><FontAwesomeIcon className="icon" icon={faEnvelope}></FontAwesomeIcon> Email: sample-email@example.com</div>
                    </div>
                    <div class="col-md-5">
                        <div class="social">
                            <a href=""><FontAwesomeIcon className="icon" icon={faFacebook}></FontAwesomeIcon></a>
                            <a href=""><FontAwesomeIcon className="icon" icon={faInstagram}></FontAwesomeIcon></a>
                            <a href=""><FontAwesomeIcon className="icon" icon={faYoutube}></FontAwesomeIcon></a>
                        </div>
                    </div>
                </div>
            </div>
  </section>
    );
};

export default Topbar;