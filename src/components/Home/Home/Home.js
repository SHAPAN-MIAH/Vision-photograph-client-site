import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import Service from '../Service/Service';
import StayWIthUs from '../StayWithUs/StayWIthUs';
import Team from '../Team/Team';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header/>
            <Service/>
            <FeaturedService/>
            <Team/>
            <Testimonials/>
            <StayWIthUs/>
            <Footer/>
        </div>
    );
};

export default Home;