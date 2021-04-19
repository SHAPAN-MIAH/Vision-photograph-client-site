import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCalendar, faFileAlt, faCommentDots } from '@fortawesome/free-solid-svg-icons';


const UserSidebar = () => {
    return (
        <div className="sidebar  flex-column justify-content-between py-5 px-4">
            <ul className="list-unstyled">
                <li>
                    <Link to="/appointmentLists">
                        <FontAwesomeIcon className="icons" icon={faFileAlt} /><span>Appointment List</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/appointment" >
                        <FontAwesomeIcon className="icons" icon={faCalendar} /><span>Add Appointment</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/review">
                        <FontAwesomeIcon className="icons" icon={faCommentDots} /><span>Review</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/logout" className="text-white log-out">
                    <FontAwesomeIcon className="icons" icon={faSignOutAlt} /><span className='logout'>Logout</span>
                </Link>
            </div>
        </div>
    );
};

export default UserSidebar;