import React from 'react';

const Banner = () => {
    return (
        <div className="w-full text-black bg-[url('/servicesbanner.png')] bg-no-repeat bg-cover">
            <div className='flex justify-start items-center py-52 xl:py-72 2xl:py-[600px]'>
                <div className='ml-0 lg:ml-32'>
                    <h1 className='text-5xl lg:text-[64px] font-bold text-left'>OUR<br />SERVICES</h1>
                    <p className='text-2xl font-medium'>Lorem Ipsum is simply dummy text <br /> of the printing and typesetting <br /> industry. Lorem Ipsum has been the <br /> industry&apos;s</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;