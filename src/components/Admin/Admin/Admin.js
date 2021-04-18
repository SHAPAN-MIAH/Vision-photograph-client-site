import React from 'react';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';


const Admin = () => {

    return (
        <section className="container-fluid">
            <Navbar/>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10">
                    <Dashboard/>
                </div>
            </div>
        </section>
    );
};

export default Admin;