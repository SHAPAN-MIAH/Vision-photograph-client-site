import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import USerSidebar from '../UserSidebar/UserSidebar';
import './Reviews.css'
import Navbar from '../../Shared/Navbar/Navbar';

const Reviews = () => {
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

    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            state: data.state,
            description: data.description,
            imageUrl: imageUrl
        };
        fetch('https://fast-garden-51323.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(reviewData)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert('Review added successfully.');
            }
        })
    }
    return (
        <section>
            <Navbar/>
            <div className="row">
                <div className="col-md-2">
                    <USerSidebar/>
                </div>
                <div className="col-md-8">
                        <div className="review-form mt-5">
                            <h4>Please drop your review</h4>
                            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <input type="text" {...register("name")} name="name" placeholder="Your Name" className="form-control" required/>
                                </div>
                                <div className="form-group">
                                    <input type="text" {...register("state")} name="state" placeholder="State" className="form-control" required/>
                                </div>
                                <div className="form-group">
                                    <input type="text" {...register("description")} name="description" placeholder="Your Comments Here" className="form-control" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputImage">Select your image</label> <br/>
                                    <input onChange={handelImgUpload} type="file"  />
                                </div>
                                <div className="form-group text-right">
                                    <button type="submit" className="reviewAddBtn">Submit</button>
                                </div>
                            </form>
                        </div>
                </div>
                
            </div>
        </section>
    );
};

export default Reviews;