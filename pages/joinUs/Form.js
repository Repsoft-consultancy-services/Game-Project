import Image from 'next/image';
import React from 'react';
import upload from '../../public/upload.png'
import formtext from '../../public/formtext.png'
const Form = () => {
    return (
        <div className='text-black px-5 lg:px-24 mb-10'>
            <h1 className='text-[32px] lg:text-[40px] font-bold uppercase text-center mb-14'>Fill up for enquiry</h1>
            <div className="rounded-[20px] bg-white drop-shadow-[2px_4px_25px_rgba(0,0,0,0.15)]">
                <div className='flex items-center justify-center space-x-0 lg:space-x-10'>
                    <div className="bg-[url('/formbg.png')] bg-no-repeat bg-cover rounded-[20px] hidden lg:flex items-center justify-center w-1/3 lg:h-[910px] xl:h-[790px]">
                        <div className='mr-2'>
                            <Image src={formtext} alt=""></Image>
                        </div>
                    </div>
                    <div className='p-5 w-full lg:w-2/3 my-10'>
                        <h1 className='text-4xl lg:text-5xl uppercase font-bold my-3 text-center lg:text-left mb-10'>join us</h1>
                        <div className='w-full'>
                            <div className='flex flex-col lg:flex-row space-x-0 xl:space-x-20 2xl:space-x-32 mb-7'>
                                <div className="form-control w-full lg:max-w-xs">
                                    <label className="label">
                                        <span className="text-base font-semibold">Full Name</span>
                                    </label>
                                    <input type="text" placeholder="John doe" className="border-b py-7 border-black lg:w-[360px]" />
                                </div>
                                <div className="form-control w-full lg:max-w-xs">
                                    <label className="label">
                                        <span className="text-base font-semibold">Contact Number</span>
                                    </label>
                                    <input type="text" placeholder="1234567890" className="border-b py-7 border-black lg:w-[360px]" />
                                </div>
                            </div>
                            <div className="form-control w-full lg:max-w-xs mb-7">
                                <label className="label">
                                    <span className="text-base font-semibold">Email</span>
                                </label>
                                <input type="text" placeholder="Johndoe@gmail.com" className="border-b py-7 border-black lg:w-[360px]" />
                            </div>
                            <div className="form-control w-full lg:max-w-xs mb-7">
                                <label className="label">
                                    <span className="text-base font-semibold">Upload CV</span>
                                </label> <br />
                                <div className=''>
                                    <button className='bg-[#EEEEEE] rounded-[10px] py-5'> <div className='px-32 py-2'><Image src={upload} alt=""></Image> </div><input type="file" placeholder="Type here" className="opacity-0 absolute -mt-10 -ml-20 hover:cursor-pointer" /></button>
                                </div>

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