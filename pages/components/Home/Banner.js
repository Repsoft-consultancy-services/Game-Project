import Image from 'next/image';
import React from 'react';
import banner from '../../../public/valagents.png'
import RDtext from '../../../public/Ravendise Png white 2.png'

const Banner = () => {
    return (
        <div className='mt-10 xl:w-[80rem] 2xl:w-[100rem] 3xl:w-[150rem]'>
            <div className='flex lg:flex-row items-center'>
                <div className='flex-1'>
                    <div className='flex 2xl:ml-10'>
                        <Image src={banner} alt=""></Image>
                    </div>
                </div>
                <div className='flex-1'>
                    <Image src={RDtext} alt=""></Image>
                    <p className='text-2xl font-semibold text-justify ml-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui odit cumque, neque placeat quae at amet expedita mollitia maxime, fugit dolorum debitis inventore voluptatibus. Non voluptatem dolorem quaerat quasi.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;