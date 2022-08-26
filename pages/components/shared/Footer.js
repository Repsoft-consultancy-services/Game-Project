import React from 'react';
import { GoLocation } from 'react-icons/go'
import { FiPhoneCall } from 'react-icons/fi'
import { IoIosMail } from 'react-icons/io'
import { AiOutlineInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoTwitch } from 'react-icons/io';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='w-full bg-black text-white'>
            <div className='p-10 lg:p-20'>
                <div className='flex flex-row justify-between items-start'>
                    <div>
                        <h1 className='text-[8.75px] lg:text-3xl font-semibold'>Contact Us</h1>
                        <div className='text-[6.13px] lg:text-xl flex space-x-5 mt-3 lg:mt-5'>
                            <div className='mt-0 lg:mt-2'>
                                <GoLocation className='text-white' />
                            </div>
                            <div>
                                <p>Plot no. 3, Kadolkar Colony, Talegaon Dabhade,<br />
                                    Maharashtra, India. 410506</p>
                            </div>
                        </div>
                        <div className='text-[6.13px] lg:text-xl flex space-x-5  mt-3 lg:mt-5'>
                            <div className='mt-0 lg:mt-2'>
                                <FiPhoneCall className='text-white' />
                            </div>
                            <div>
                                <p>+91 7020912096<br />
                                    +91 9767652894</p>
                            </div>
                        </div>
                        <div className='text-[6.13px] lg:text-xl flex space-x-5  mt-3 lg:mt-5'>
                            <div className='mt-0 lg:mt-2'>
                                <IoIosMail className='text-white' />
                            </div>
                            <div>
                                <p>Ravendisestudio</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-[7px] lg:text-2xl text-right'>
                        <div className='flex flex-col justify-end ml-auto space-y-1 lg:space-y-2'>
                            <Link href='/'>Home</Link>
                            <Link href='/'>Services</Link>
                            <Link href='/'>Contact Us</Link>
                            <Link href='/'>Join Us</Link>
                            <Link href='/'>About Us</Link>
                        </div>
                        <div className='flex space-x-2 lg:space-x-4 text-xs lg:text-4xl mt-5'>
                            <Link href=""><AiOutlineInstagram /></Link>
                            <Link href=""><AiOutlineTwitter /></Link>
                            <Link href=""><IoLogoTwitch /></Link>
                            <Link href=""><AiFillYoutube /></Link>
                            <Link href=""><FaFacebookF className='text-xs lg:text-3xl' /></Link>
                        </div>
                    </div>
                </div>
                {/* <div className='mt-8'>
                    <hr />
                </div>
                <div className='flex justify-between mt-8 -mb-10 text-slate-400'>
                    <div>
                        <p>Copyright © 2022Ravendise, All rights reserved  </p>
                    </div>
                    <div className='flex justify-between space-x-16 mr-16'>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Footer;