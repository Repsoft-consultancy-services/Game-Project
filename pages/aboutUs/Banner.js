import Image from 'next/image';
import React from 'react';
import banner from '../../public/valagents.png'
import RDtext from '../../public/RavendiseBanner.png'
import Link from 'next/link';

const Banner = () => {
    return (
        <div className='mt-10 w-full lg:w-[60rem] xl:w-[80rem] 2xl:w-[110rem] 3xl:w-[150rem]'>
            <div className='flex flex-col lg:flex-row items-center'>
                <div className='flex-1 block lg:hidden px-14 lg:px-0'>
                    <div className='flex 2xl:ml-10'>
                        <Image src={RDtext} alt=""></Image>
                    </div>
                </div>
                <div className='flex-1 px-10 lg:px-0'>
                    <div className='flex 2xl:ml-10'>
                        <Image src={banner} alt=""></Image>
                    </div>
                </div>
                <div className='flex-1'>
                    <div className='hidden lg:block'>
                        <Image src={RDtext} alt=""></Image>
                    </div>
                    <p className='text-base lg:text-2xl font-semibold ml-0 lg:ml-[6px] text-center lg:text-left'>Ravendise is a company that is focused solely on the quality. We focus on quality in affordable rates so you don&apos;t have worry about headhunting for the projects you do. Our fully transperent system gives you access to all the processes that are happening on your project helping you achieve your invisioned goal.</p>
                    <div className='flex justify-center lg:justify-start ml-0 lg:ml-[6px]'>
                        <Link href="/contactUs"><button className='btn bg-black text-white text-lg normal-case px-10 rounded-md mt-10'>Get in Touch</button></Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;