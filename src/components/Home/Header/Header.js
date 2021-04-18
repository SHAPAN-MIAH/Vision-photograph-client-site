import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Topbar from '../../Shared/Topbar/Topbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <Topbar/>
            <Navbar/>
            <HeaderMain/>
        </div>
    );
};

export default Header;