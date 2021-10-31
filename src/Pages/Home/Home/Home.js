import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import TourismPlaces from '../TourismPlaces/TourismPlaces';

const Home = () => {
    return (
        <div>
            <Banner/>
            
            <TourismPlaces></TourismPlaces>
            <AboutUs></AboutUs>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;