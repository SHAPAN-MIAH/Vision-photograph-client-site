import React from 'react';
import { Link } from 'react-router-dom';

const FooterColum = (props) => {
    return (
        <div className="col-md-3">
            <h5 style={{color: "#da7b00"}}>{props.menuTitle ? props.menuTitle : " "}</h5>
            <ul className="list-unstyled mt-3">
                 {
                     props.menuItems.map((item, index) => <li key={index}><Link to={item.link} className="text-secondary">{item.name}</Link></li>)
                 }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterColum;