import React from 'react';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar';
import Banner from './Banner';
import Form from './Form';

const index = () => {
    return (
        <>
        <Navbar></Navbar>
        <Banner></Banner>
        <Form></Form>
        <Footer></Footer>
        </>
    );
};

export default index;