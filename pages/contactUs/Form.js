import React, { useState } from 'react';
import { GoLocation } from 'react-icons/go'
import { FiPhoneCall } from 'react-icons/fi'
import { IoIosMail } from 'react-icons/io'
import { AiOutlineInstagram, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Form = () => {
    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    var templateParams = {
        name: name,
        contact: contact,
        email: email,
        message:message
    };
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.send('service_jytcqqo', 'template_uiot43c', templateParams, 'C3VLFtX2oBtdfiIo1')
            .then((result) => {
                toast.success("Mail sent.We will reply to you shortly")
            }, (error) => {
                toast.error("Mail not sent.Please try again later")
            });
        e.target.reset()
    };
    return (
        <div className='text-black px-5 lg:px-24 my-20 w-full 2xl:w-[98rem] 2xl:mx-auto'>
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
                                        +91 9518741906</p>
                                </div>
                            </div>
                            <div className='text-xl flex space-x-5  mt-3 lg:mt-20'>
                                <div className='mt-0 lg:mt-2'>
                                    <IoIosMail className='text-white' />
                                </div>
                                <div>
                                    <p>info@ravendise.com</p>
                                </div>
                            </div>
                            <div className='flex space-x-4 text-4xl mt-10 lg:mt-0 ml-6 lg:ml-0 lg:absolute lg:bottom-0 mb-5'>
                                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ravendise_official/"><AiOutlineInstagram className='hover:cursor-pointer' /></a>
                                <a target="_blank" rel="noreferrer" href="https://discord.gg/Z2F4uPHngD"><FaDiscord className='hover:cursor-pointer' /></a>
                                <a target="_blank" rel="noreferrer" href="https://youtube.com/channel/UC02Leyeh-kCL-OcnP4vGV1g"><AiFillYoutube className='hover:cursor-pointer' /></a>
                                <a target="_blank" rel="noreferrer" href="https://twitter.com/RavendiseStudio"><FaTwitter className='hover:cursor-pointer' /></a>
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/ravendise/"><AiFillLinkedin className='hover:cursor-pointer' /></a>
                            </div>
                        </div>

                    </div>
                    <div className='p-5 w-full lg:w-2/3 my-10'>
                        <form onSubmit={sendEmail}>
                            <div className='w-full'>
                                <div className="form-control w-full lg:max-w-xs">
                                    <label className="label">
                                        <span className="text-base font-semibold">Full Name</span>
                                    </label>
                                    <input type="text" onChange={(event) => { setName(event.target.value) }} placeholder="John doe" className="border-b py-7 border-black lg:w-[360px]" />
                                </div>
                                <div className='flex flex-col lg:flex-row space-x-0 xl:space-x-20 2xl:space-x-32 mb-7'>
                                    <div className="form-control w-full lg:max-w-xs mb-7">
                                        <label className="label">
                                            <span className="text-base font-semibold">Email</span>
                                        </label>
                                        <input type="text" onChange={(event) => { setEmail(event.target.value) }} placeholder="Johndoe@gmail.com" className="border-b py-7 border-black lg:w-[360px]" />
                                    </div>
                                    <div className="form-control w-full lg:max-w-xs">
                                        <label className="label">
                                            <span className="text-base font-semibold">Contact Number</span>
                                        </label>
                                        <input type="text" onChange={(event) => { setContact(event.target.value) }} placeholder="1234567890" className="border-b py-7 border-black lg:w-[360px]" />
                                    </div>
                                </div>
                                <div className="form-control w-full mb-7">
                                    <label className="label">
                                        <span className="text-base font-semibold">Your Message</span>
                                    </label>
                                    <input type="text" onChange={(event) => { setMessage(event.target.value) }} placeholder="Lorem Ipsum......................................." className="border-b py-7 border-black w-full" />
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <button type='submit' className='bg-black text-white text-center text-lg px-16 lg:px-20 py-2 lg:py-3 rounded-[10px] mt-10 '>SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Form;