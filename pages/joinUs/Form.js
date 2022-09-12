import Image from 'next/image';
import React, { useState } from 'react';
import upload from '../../public/upload.png'
import formtext from '../../public/formtext.png'
import { storage } from '../../firebase.init';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Form = () => {
    const [cvUrl, setCvUrl] = useState('')
    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    var templateParams = {
        name: name,
        contact: contact,
        email: email,
        cv: cvUrl
    };
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.send('service_jytcqqo', 'template_zzwlj1e', templateParams, 'C3VLFtX2oBtdfiIo1')
            .then((result) => {
                toast.success("Mail sent.We will reply to you shortly")
            }, (error) => {
                toast.error("Mail not sent.Please try again later")
            });
        e.target.reset()
    };
    const handleFile = async (e) => {
        e.preventDefault()
        const target = e.target.files[0];
        const imageStorageRef = ref(storage, `cv/${target.name}`);
        uploadBytesResumable(imageStorageRef, target)
            .then(
                () => {
                    getDownloadURL(imageStorageRef)
                        .then((url) => setCvUrl(url))
                }
            )
    }
    return (
        <div className='text-black px-5 lg:px-24 mb-10 2xl:w-[100rem] 2xl:mx-auto'>
            <h1 className='text-[32px] lg:text-[40px] font-bold uppercase text-center mb-14'>Fill up for enquiry</h1>
            <div className="rounded-[20px] bg-white drop-shadow-[2px_4px_25px_rgba(0,0,0,0.15)]">
                <div className='flex items-center justify-center space-x-0 lg:space-x-10'>
                    <div className="bg-[url('/formbg.png')] bg-no-repeat bg-cover rounded-[20px] hidden lg:flex items-center justify-center w-1/3 lg:h-[910px] xl:h-[810px]">
                        <div className='mr-2'>
                            <Image src={formtext} alt=""></Image>
                        </div>
                    </div>
                    <div className='p-5 w-full lg:w-2/3 my-10'>
                        <h1 className='text-4xl lg:text-5xl uppercase font-bold my-3 text-center lg:text-left mb-10'>join us</h1>
                        <form onSubmit={sendEmail}>
                            <div className='w-full'>
                                <div className='flex flex-col xl:flex-row space-x-0 xl:space-x-20 2xl:space-x-32 mb-7'>
                                    <div className="form-control w-full lg:max-w-xs">
                                        <label className="label">
                                            <span className="text-base font-semibold">Full Name<span className='text-red-600'>*</span></span>
                                        </label>
                                        <input type="text" required onChange={(event) => { setName(event.target.value) }} placeholder="John doe" className="border-b py-7 border-black lg:w-[360px]" />
                                    </div>
                                    <div className="form-control w-full lg:max-w-xs">
                                        <label className="label">
                                            <span className="text-base font-semibold">Contact Number<span className='text-red-600'>*</span></span>
                                        </label>
                                        <input type="text" required onChange={(event) => { setContact(event.target.value) }} placeholder="1234567890" className="border-b py-7 border-black lg:w-[360px]" />
                                    </div>
                                </div>
                                <div className="form-control w-full lg:max-w-xs mb-7">
                                    <label className="label">
                                        <span className="text-base font-semibold">Email<span className='text-red-600'>*</span></span>
                                    </label>
                                    <input type="text" required onChange={(event) => { setEmail(event.target.value) }} placeholder="Johndoe@gmail.com" className="border-b py-7 border-black lg:w-[360px]" />
                                </div>
                                <div className="form-control w-full lg:max-w-xs mb-7">
                                    <label className="label">
                                        <span className="text-base font-semibold">Upload CV<span className='text-red-600'>*</span></span>
                                    </label> <br />
                                    <div className=''>
                                        <button className='bg-[#EEEEEE] rounded-[10px] py-5'> <div className='px-32 py-2'><Image src={upload} alt=""></Image> </div><input required onChange={(event) => { handleFile(event) }} type="file" placeholder="Type here" className="opacity-0 absolute -mt-10 -ml-20 hover:cursor-pointer" /></button>
                                    </div>

                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <button disabled={!cvUrl} type='submit' className='bg-black text-white text-center text-lg px-16 lg:px-20 py-2 lg:py-3 rounded-[10px] mt-10 disabled:opacity-70'>SUBMIT</button>
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