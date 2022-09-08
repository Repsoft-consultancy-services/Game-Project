import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { FaLessThan, FaGreaterThan } from 'react-icons/fa'
import Quality from './Quality';
import Art2D from './Art2D';
import Art3D from './Art3D';
import GraphicDesign from './GraphicDesign';
import SoftwareDevelopment from './SoftwareDevelopment';

const ServiceSlider = () => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    return (
        <div className='mt-24'>
            <h1 className='text-4xl lg:text-5xl text-center font-semibold'>Services Explained</h1>
            <div className='relative z-10 flex items-baseline space-x-3 h-auto'>
                <div ref={navigationPrevRef} className="order-1">
                    <button className='btn text-xs lg:text-base rounded-full bg-black'><FaLessThan /></button>
                </div>
                <div ref={navigationNextRef} className="order-3">
                    <button className='btn text-xs lg:text-base rounded-full bg-black'><FaGreaterThan /></button>
                </div>
                <Swiper
                    spaceBetween={10}
                    modules={[Navigation]}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    slidesPerView={1}
                    className="mySwiper order-2"
                >
                    <SwiperSlide>
                        <Quality></Quality>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Art2D></Art2D>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Art3D></Art3D>
                    </SwiperSlide>
                    <SwiperSlide>
                        <GraphicDesign></GraphicDesign>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SoftwareDevelopment></SoftwareDevelopment>
                    </SwiperSlide>
                </Swiper>
                
            </div>
        </div>
    );
};


export default ServiceSlider;