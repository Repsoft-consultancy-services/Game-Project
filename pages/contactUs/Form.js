import React from 'react';
import { GoLocation } from 'react-icons/go'
import { FiPhoneCall } from 'react-icons/fi'
import { IoIosMail } from 'react-icons/io'
import { AiOutlineInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoTwitch } from 'react-icons/io';
import Link from 'next/link';

const Form = () => {
    return (
        <div className='text-black px-5 lg:px-24 my-20'>
            <div className="rounded-[20px] bg-white drop-shadow-[2px_4px_25px_rgba(0,0,0,0.15)]">
                <div className='flex flex-col-reverse lg:flex-row items-center justify-center space-x-0 lg:space-x-10'>
                    <div className="bg-black text-white rounded-[20px] w-full lg:w-1/3 h-[500px] lg:h-[670px] ">
                        <div className='px-10 mt-20'>
                            <h1 className='text-4xl font-bold text-center mt-5 mb-5 uppercase'>Contact Us</h1>
                            <div className='text-xl flex space-x-5 mt-3 lg:mt-20'>
                                <div className='mt-0 lg:mt-2 '>
                                    <GoLocation className='text-white' />
                                </div>
                                <div>
                                    <p>Plot no. 3, Kadolkar Colony, Talegaon Dabhade,<br />
                                        Maharashtra, India. 410506</p>
                                </div>
                            </div>
                            <div className='text-xl flex space-x-5  mt-3 lg:mt-20'>
                                <div className='mt-0 lg:mt-2'>
                                    <FiPhoneCall className='text-white' />
                                </div>
                                <div>
                                    <p>+91 7020912096<br />
                                        +91 9767652894</p>
                                </div>
                            </div>
                            <div className='text-xl flex space-x-5  mt-3 lg:mt-20'>
                                <div className='mt-0 lg:mt-2'>
                                    <IoIosMail className='text-white' />
                                </div>
                                <div>
                                    <p>Ravendisestudio@gmail.com</p>
                                </div>
                            </div>
                            <div className='flex space-x-4 text-4xl mt-10 lg:mt-0 ml-6 lg:ml-0 lg:absolute lg:bottom-0 mb-5'>
                                <Link href=""><AiOutlineInstagram /></Link>
                                <Link href=""><AiOutlineTwitter /></Link>
                                <Link href=""><IoLogoTwitch /></Link>
                                <Link href=""><AiFillYoutube /></Link>
                                <Link href=""><FaFacebookF className='text-3xl' /></Link>
                            </div>
                        </div>

                    </div>
                    <div className='p-5 w-full lg:w-2/3 my-10'>
                        <div className='w-full'>
                            <div className="form-control w-full lg:max-w-xs">
                                <label className="label">
                                    <span className="text-base font-semibold">Full Name</span>
                                </label>
                                <input type="text" placeholder="John doe" className="border-b py-7 border-black lg:w-[360px]" />
                            </div>
                            <div className='flex flex-col lg:flex-row space-x-0 xl:space-x-20 2xl:space-x-32 mb-7'>
                                <div className="form-control w-full lg:max-w-xs mb-7">
                                    <label className="label">
                                        <span className="text-base font-semibold">Email</span>
                                    </label>
                                    <input type="text" placeholder="Johndoe@gmail.com" className="border-b py-7 border-black lg:w-[360px]" />
                                </div>
                                <div className="form-control w-full lg:max-w-xs">
                                    <label className="label">
                                        <span className="text-base font-semibold">Contact Number</span>
                                    </label>
                                    <input type="text" placeholder="1234567890" className="border-b py-7 border-black lg:w-[360px]" />
                                </div>
                            </div>
                            <div className="form-control w-full mb-7">
                                <label className="label">
                                    <span className="text-base font-semibold">Your Message</span>
                                </label>
                                <input type="text" placeholder="Lorem Ipsum......................................." className="border-b py-7 border-black w-full" />
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button className='bg-black text-white text-center text-lg px-16 lg:px-20 py-2 lg:py-3 rounded-[10px] mt-10 '>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Form;