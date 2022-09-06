import React from 'react';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar';
import Banner from './Banner';
import Waw from './Waw';

const index = () => {
    return (
        <>
        <Navbar></Navbar>
        <Banner></Banner>
        <Waw></Waw>
        <Footer></Footer>
        </>
    );
};

export default index;