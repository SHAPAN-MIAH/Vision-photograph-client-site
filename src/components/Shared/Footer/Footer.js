import React from 'react';
import './Footer.css';
import FooterColum from '../FooterColum/FooterColum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Home" , link: "/home"},
        {name: "Our Portfolio" , link: "/portfolio"},
        {name: "Our Team" , link: "/team"},
        {name: "DashBoard" , link: "/dashboard"},
        {name: "Admin" , link: "/admin"},
        {name: "Login" , link: "/login"},
        {name: "Log Out" , link: "/logout"},
    ]
    const ourAddress = [
        {name: "California - 45647 Los Angeles" , link: "//google.com/map"},
        {name: "Vision PhotoGraph" , link: "//google.com/map"},
       
    ]
    const teams = [
        {name: "Laura Cynthia" , link: "/team"},
        {name: "Robert Bryson" , link: "/team"},
        {name: "Dev Ed" , link: "/team"},
        {name: "Aseel Mackdone" , link: "/team"},
        {name: "Joe Katalin" , link: "/team"},
        {name: "Ariana grandy" , link: "/team"},
        
    ]
    const services = [
        {name: "Wedding Photography " , link: "/services"},
        {name: "Event Photography" , link: "/services"},
        {name: "Portrait Photography" , link: "/services"},
        {name: "Product Photography" , link: "/services"},
        {name: "Fine Art Photography" , link: "/services"},
        {name: "Fashion Photography " , link: "/checkup"},
        {name: "Architectural Photography" , link: "/services"},
        {name: "Travel Photography" , link: "/services"},
        {name: "Advertising or Lifestyle Photography" , link: "/services"},
        {name: "Photojournalism " , link: "/services"},
        {name: "Sports Photography" , link: "/services"},
        {name: "Aerial Photography" , link: "/services"},
        {name: "Stock Photography" , link: "/services"},
    ]
    return (
        <footer className="footer-area clear-both  py-3">
            <div className="container pt-5">
                <div className="row ">
                    <FooterColum key={1} menuTitle={"Vision Photograph"} menuItems={noNamed}/>
                    <FooterColum key={2} menuTitle="Services" menuItems={services}/>
                    <FooterColum key={3} className="menuTitle" menuTitle="Our Teams" menuItems={teams}/>
                    <FooterColum key={4} className="menuTitle" menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-brand">+974763745734</button>
                        </div>
                    </FooterColum>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;