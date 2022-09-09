import React from 'react';
import { AiOutlineInstagram, AiFillYoutube, AiFillLinkedin, AiOutlineCopyrightCircle } from 'react-icons/ai';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import Image from 'next/image';
import RD from '../../../public/RavendiseBannerWhite.png'
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='w-full bg-black text-white'>
            <div className='bg-white text-black pb-10'>
                <h4 className='text-xl text-center font-semibold mb-3 uppercase'>Stay Connected</h4>
                <div className='flex justify-center space-x-4 text-3xl'>
                    <a className='border border-black rounded-full p-1' target="_blank" rel="noreferrer" href="https://www.instagram.com/ravendise_official/"><AiOutlineInstagram className='hover:cursor-pointer' /></a>
                    <a className='border border-black rounded-full p-1' target="_blank" rel="noreferrer" href="https://discord.gg/Z2F4uPHngD"><FaDiscord className='hover:cursor-pointer' /></a>
                    <a className='border border-black rounded-full p-1' target="_blank" rel="noreferrer" href="https://youtube.com/channel/UC02Leyeh-kCL-OcnP4vGV1g"><AiFillYoutube className='hover:cursor-pointer' /></a>
                    <a className='border border-black rounded-full p-1' target="_blank" rel="noreferrer" href="https://twitter.com/RavendiseStudio"><FaTwitter className='hover:cursor-pointer' /></a>
                    <a className='border border-black rounded-full p-1' target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/ravendise/"><AiFillLinkedin className='hover:cursor-pointer' /></a>
                </div>
            </div>
            <div className='py-5 space-y-5'>
                <div className='flex items-center justify-center'>
                    <BiWorld /> English (US)
                </div>
                <div className='flex items-center justify-center'>
                    <Image width={125} height={30} src={RD} alt=""></Image>
                </div>
                <div className='flex justify-center items-center text-xs font-semibold uppercase '>
                    <Link href="/"><h3 className='border-r border-white px-2'>careers</h3></Link>
                    <Link href="/aboutUs"><h3 className='border-r border-white px-2'>about</h3></Link>
                    <Link href="/joinUs"><h3 className='border-r border-white px-2'>support</h3></Link>
                    <Link href="/contactUs"><h3 className='px-2'>contact us</h3></Link>
                </div>
                <div className='flex flex-col justify-center items-center text-[10px] font-semibold'>
                    <p>©2022 ravendise, inc. all right reserved</p>
                    <p>All trademarks referenced here in are the properties of their respective owners</p>
                </div>
                <div className='flex justify-center items-center text-xs font-semibold uppercase '>
                    <p className='border-r border-white px-2'>privacy</p>
                    <p className='border-r border-white px-2'>legal</p>
                    <p className='border-r border-white px-2'>terms</p>
                    <p className='border-r border-white px-2'>cookie policy</p>
                    <p className='px-2'>cookie settings</p>
                </div>
            </div>
            {/* <div className='p-10 lg:p-20'>
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
            </div> */}
        </div>
    );
};

export default Footer;