import React from 'react';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar';
import Art2D from './Art2D';
import Banner from './Banner';
import Quality from './Quality';
import ServiceSlider from './ServiceSlider';
import SoftwareDevelopment from './SoftwareDevelopment';

const index = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <ServiceSlider></ServiceSlider>
            <Footer></Footer>
        </div>
    );
};

export default index;