import React from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './ServiceAdded.css';

const ServiceAdded = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        fetch('https://fast-garden-51323.herokuapp.com/addServices', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert('services added successfully.');
            }
        })
    }
    return (
        <section className="container-fluid">
            <Navbar/>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10">
                    <div className="serviceAddForm-container mt-5" style={{width: "800px"}}>
                        <h4 className="teamTitle">Add Service</h4>
                            <h2 className="text-center text-brand">{}</h2>
                            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <input type="text" {...register("serviceName")} name="serviceName" placeholder="Service Name" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="text" {...register("description")} name="description" placeholder="Description" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="text" {...register("serviceCost")} name="serviceCost" placeholder="Service Cost" className="form-control" />
                                </div>
                                
                                <div className="form-group text-right">
                                    <button type="submit" className="serviceAddBtn">Submit</button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default ServiceAdded;