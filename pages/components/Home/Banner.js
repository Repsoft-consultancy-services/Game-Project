import Image from 'next/image';
import React from 'react';
import RavendiseBanner from '../../../public/RavendiseBanner.png'
import aboutBannerlg from '../../../public/aboutBannerlg.png'
import aboutBannersm from '../../../public/aboutBannersm.png'
import { BsArrowDown } from 'react-icons/bs'

const Banner = () => {
    return (
        <div className='w-full text-black'>
            <div className='flex flex-col lg:flex-row justify-between items-center '>
                <div className='block lg:hidden px-10'>
                    <Image src={aboutBannersm} alt=""></Image>
                </div>
                <div className='ml-0 lg:ml-32'>
                    <h1 className='text-5xl first-letter:lg:text-6xl font-bold my-3 text-center lg:text-left'>WELCOME TO</h1>
                    <div className='px-10 lg:px-0'>
                        <Image src={RavendiseBanner} alt=""></Image>
                    </div>
                    <div className='flex justify-center lg:justify-start'>
                        <button className='bg-black text-white text-center text-xs lg:text-lg normal-case px-12 py-5 rounded-[10px] mt-10 '><div className='flex justify-between items-center' > < BsArrowDown />Check Out</div></button>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <Image src={aboutBannerlg} alt=""></Image>
                </div>
            </div>
        </div>
    );
};

export default Banner;