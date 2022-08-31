import React from 'react';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar';
import Banner from './Banner';

const index = () => {
    return (
        <>
        <Navbar></Navbar>
        <Banner></Banner>
        <Footer></Footer>
        </>
    );
};

export default index;