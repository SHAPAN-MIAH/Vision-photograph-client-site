import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
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
            <AboutUs/>
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