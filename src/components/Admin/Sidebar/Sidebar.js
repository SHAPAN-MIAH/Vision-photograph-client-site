import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faUserCog, faFile, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    console.log(isAdmin)

    
    useEffect(()=> {
        fetch('https://fast-garden-51323.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
        .then(data => console.log(data))
    }, [])
    
    return (
        <div className="sidebar  flex-column justify-content-between py-5 px-4">
             <div>
                    <ul className="list-unstyled">
                        <li>
                            <Link to="/admin/appointmentList">
                                <FontAwesomeIcon className="icons" icon={faFileAlt} /><span>Appointment List</span> 
                            </Link>
                        </li>
                        <li>
                            <Link to="/serviceAdded" >
                                <FontAwesomeIcon className="icons" icon={faCalendar} /><span>Add Services</span> 
                            </Link>
                        </li>
                        <li>
                            <Link to="/addTeam" >
                                <FontAwesomeIcon className="icons" icon={faUsers} /><span>Add Team</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addAdmin">
                                <FontAwesomeIcon className="icons" icon={faUserCog} /><span>Add Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/setting" >
                            <FontAwesomeIcon className="icons" icon={faCog} /><span>Setting</span>
                            </Link>
                        </li>
                    </ul>
            </div>
            
            <div>
                <Link to="/logout" >
                    <FontAwesomeIcon className="icons" icon={faSignOutAlt} /><span className='logout'>Logout</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;