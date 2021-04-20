import { faFacebook, faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './TeamDtl.css'

const TeamDtl = (props) => {
    
    const {name, designation, imageUrl} = props.teamData;
    return (
            <div className="col-md-4">
                <div className="img-tm">
                    <img src={imageUrl} alt=""/>
                    <div className="tm-content">
                        <div className="tm-txtPosition">
                            <h5>{name}</h5>
                            <h4>{designation}</h4>
                        </div>
                    </div>
                    <div className="socialIcon">
                        <a href=""> <FontAwesomeIcon  icon={faFacebook}></FontAwesomeIcon> </a>
                        <a href=""> <FontAwesomeIcon  icon={faTwitter}></FontAwesomeIcon> </a>
                        <a href=""> <FontAwesomeIcon  icon={faInstagram}></FontAwesomeIcon> </a>
                        <a href=""> <FontAwesomeIcon  icon={faLinkedin}></FontAwesomeIcon> </a>
                    </div>
                </div>

                
            </div>
    );
};

export default TeamDtl;