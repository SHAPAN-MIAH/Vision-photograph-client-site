import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import './AddTeam.css'
import Navbar from '../../Shared/Navbar/Navbar';

const AddTeam = () => {
    const { register, handleSubmit, errors } = useForm();
    const [imageUrl, setImageUrl] = useState(null)
    
    const handelImgUpload = (event) => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '282791da900bc047d811a5c2dcf9f3f5');
        imageData.append('image', event.target.files[0])
        
        axios.post('https://api.imgbb.com/1/upload',imageData)
        .then(res => setImageUrl(res.data.data.display_url))
        .catch(err => console.log(err))
    }

    const onSubmit = (data) => {
        console.log(data)
        const teamData = {
            name : data.name,
            designation: data.designation,
            imageUrl: imageUrl
        };
        console.log(teamData)
        axios.post('https://fast-garden-51323.herokuapp.com/addTeam', teamData)
        .then(res => {
            alert('Team member added successfully.')
        })
    }
    
    
    return (
        <section>
            <div style={{boxShadow: "0 3px 10px rgba(0,0,0,0.2)"}}>
            <Navbar/>
            </div>
            <div className="row container-fluid">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10">
                    <div className="AddTeamForm-container mt-5">
                            <h4>Add Team Member</h4>
                            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputName1">Name</label>
                                    <input type="text" {...register("name")} name="name" placeholder="Team Member Name" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputDesignation1">Designation</label>
                                    <input type="text" {...register("designation")} name="designation" placeholder="Designation" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputImage1">Upload a image </label> <br/>
                                    <input onChange={handelImgUpload} type="file" id="imgInput" name="image" />
                                </div>
                                
                                <div className="form-group text-right">
                                    <button type="submit" className="teamAddBtn">Submit</button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default AddTeam;