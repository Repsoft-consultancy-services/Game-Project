import React from 'react';
import { GoLocation } from 'react-icons/go'
import { FiPhoneCall } from 'react-icons/fi'
import { IoIosMail } from 'react-icons/io'
import { AiOutlineInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoTwitch } from 'react-icons/io';
import Link from 'next/link';
import Form from './Form';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

const index = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Form></Form>
            <Footer></Footer>
        </div>
    );
};

export default index;