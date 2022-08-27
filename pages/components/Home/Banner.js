import Image from 'next/image';
import React from 'react';
import banner from '../../../public/valagents.png'
import RDtext from '../../../public/Ravendise Png white 2.png'

const Banner = () => {
    return (
        <div className='mt-10 w-full lg:w-[50rem] xl:w-[80rem] 2xl:w-[100rem] 3xl:w-[150rem]'>
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
                    <p className='text-base lg:text-2xl font-semibold ml-4 text-center lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui odit cumque, neque placeat quae at amet expedita mollitia maxime, fugit dolorum debitis inventore voluptatibus. Non voluptatem dolorem quaerat quasi.</p>
                    <div className='flex justify-center lg:justify-start'>
                        <button className='btn bg-black text-white text-lg normal-case px-10 rounded-md mt-10'>Get in Touch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;