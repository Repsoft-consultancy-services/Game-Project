import React from 'react';
import AboutDetails from './AboutDetails';
import Banner from './Banner';
import Partner from './Partner';
import Rating from './Rating';
import Services from './Services';
import Slider from './Slider';
import Stats from './Stats';

const HomeStart = () => {
    return (
        <div className='flex items-center flex-col text-black'>
            <Banner></Banner>
            <Slider></Slider>
            <AboutDetails></AboutDetails>
            <Stats></Stats>
            <Services></Services>
            <Partner></Partner>
            <Rating></Rating>
        </div>
    );
};

export default HomeStart;