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
        <div>
            <div className='relative z-10 mt-24 flex items-baseline space-x-3'>
            <div ref={navigationPrevRef}>
                    <button className='btn rounded-full bg-black'><FaLessThan /></button>
                </div>
                <Swiper
                    spaceBetween={0}
                    scrollbar={{
                        draggable: true,
                        dragSize: 50,
                        el: ".swiper-scrollbar"
                    }}
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
                    className="mySwiper"
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
                <div ref={navigationNextRef}>
                    <button className='btn rounded-full bg-black'><FaGreaterThan /></button>
                </div>
            </div>
        </div>
    );
};


export default ServiceSlider;