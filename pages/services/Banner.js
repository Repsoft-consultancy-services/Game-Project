import Image from 'next/image';
import React from 'react';
import SB from '../../public/servicesbanner.png'
import SBsm from '../../public/servicesbannersm.png'

const Banner = () => {
    return (
        <div className="w-full text-black">
            <div className='flex flex-col lg:flex-row-reverse lg:justify-between items-center'>
                <div className='hidden lg:block'>
                    <Image src={SB} alt=""></Image>
                </div>
                <div className='block lg:hidden'>
                    <Image src={SBsm} alt=""></Image>
                </div>
                <div className='ml-0 lg:ml-20 text-center lg:text-left 2xl:ml-[34rem]'>
                    <h1 className='text-5xl xl:text-[64px] font-bold'>OUR<br />SERVICES</h1>
                    <p className='xl:text-2xl lg:font-medium'>Ravendise specialises in all services from design to development. <br /> We cover all the important areas with our inhouse team that is professionalised in their own areas</p>
                </div>

            </div>
        </div>
    );
};

export default Banner;