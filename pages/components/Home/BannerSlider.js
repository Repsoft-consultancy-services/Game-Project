import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar } from "swiper";
import { FaLessThan, FaGreaterThan } from 'react-icons/fa'

const BannerSlider = () => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    return (
        <div>
            <div className='relative z-50 mt-0 xl:-mt-64 flex items-center space-x-3 h-[20rem]'>
                <div ref={navigationPrevRef} >
                    <button className=''><FaLessThan className='text-black' /></button>
                </div>
                <Swiper
                    spaceBetween={0}
                    scrollbar={{
                        draggable: true,
                        dragSize: 50,
                        el: ".swiper-scrollbar"
                    }}
                    modules={[Navigation, Scrollbar]}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1025: {
                            slidesPerView: 3,
                        },
                        1440: {
                            slidesPerView: 4,
                        },
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className=' bg-white'>
                            <iframe width="297" height="170" src="https://www.youtube.com/embed/lcmKphUoteE?controls=0" title="YouTube video player" className='rounded-[5px] shadow-[2px_4px_15px_0_rgba(0,0,0,0.15)]' allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white'>
                            <iframe width="297" height="170" src="https://www.youtube.com/embed/6yX3pAElNNE?controls=0" title="YouTube video player" className='rounded-[5px] shadow-[2px_4px_15px_0_rgba(0,0,0,0.15)]' allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white'>
                            <iframe width="297" height="170" src="https://www.youtube.com/embed/eTQS90TTaHw?controls=0" title="YouTube video player" className='rounded-[5px] shadow-[2px_4px_15px_0_rgba(0,0,0,0.15)]' allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white'>
                            <iframe width="297" height="170" src="https://www.youtube.com/embed/ClmUwfnJIB4?controls=0" title="YouTube video player" className='rounded-[5px] shadow-[2px_4px_15px_0_rgba(0,0,0,0.15)]' allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div ref={navigationNextRef}>
                    <button className=''><FaGreaterThan className='text-white' /></button>
                </div>
            </div>
            {/* <div className='flex justify-center'>
                <div className="swiper-scrollbar"></div>
            </div> */}
        </div>
    );
};

export default BannerSlider;