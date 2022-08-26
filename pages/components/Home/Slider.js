import React from 'react';
import BannerSlider from './BannerSlider';

const Slider = () => {
    return (
        <div className='w-full xl:w-[80rem] 2xl:w-[95rem] 3xl:w-[150rem]'>
            <div>
                <BannerSlider></BannerSlider>
                <h1 className='text-2xl lg:text-5xl font-bold text-center mt-10'>“Lets dive into the vast world of ravendise and<br />explore the most creative world out there”</h1>
            </div>
        </div>
    );
};

export default Slider;