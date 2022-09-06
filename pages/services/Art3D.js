import Image from 'next/image';
import React from 'react';
import art3D from '../../public/art3D.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar } from "swiper";
import D31 from '../../public/D31.png'
import D32 from '../../public/D32.png'
import D33 from '../../public/D33.png'

const Art3D = () => {
    return (
        <div>
            <div className='flex justify-center md:justify-between items-center flex-col md:flex-row mt-5'>
                <div className='flex-1 px-10 md:px-0'>
                    <div className='flex md:justify-start'>
                        <Image src={art3D} alt=""></Image>
                    </div>
                </div>
                <div className='flex-1 text-center md:text-right px-10 md:px-0'>
                    <h2 className='text-2xl lg:text-6xl uppercase font-bold'>3D ART</h2>
                    <div className='mt-8 mb-10 font-semibold text-xl'>
                        Ravendise is a 3D game art outsourcing company providing a full spectrum of custom 3D art services from 3D concept development to complex 3D art projects. Since we always strive to create supreme-quality art that interprets the client&apos;s thoughts we offer to hire 3D designers from our team for projects of any complexity.
                    </div>
                </div>
            </div>
            <div className='mb-20'>
                <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-0 lg:gap-5'>
                    <div className='text-center py-10 px-3 rounded-[20px] shadow-[4px_4px_25px_0px_rgba(0,0,0,0.15)] mb-5 lg:mb-0'>
                        <h1 className='text-4xl font-bold uppercase'>CHARACTER DESIGN</h1>
                        <p className='px-12 font-semibold mt-6'>character design is the full creation of a character&apos;s aesthetic, personality, behavior, and overall visual appearance. This means that every aspect of a character such as shapes, color palettes, and details are chosen for a specific reason.</p>
                    </div>
                    <div className='text-center  bg-black text-white pt-10 pb-5 rounded-[20px] mb-5 lg:mb-0'>
                        <h1 className='text-4xl font-bold uppercase'>ENVIROMENT DESIGN</h1>
                        <p className='px-12 font-semibold mt-6'>A 3D environment is a computer-controlled digital setting created with the illusion of depth. It can be both an outdoor and indoor location, from which you can get visually specific sensations.</p>
                    </div>
                    <div className='text-center py-10 px-3 rounded-[20px] shadow-[4px_4px_25px_0px_rgba(0,0,0,0.15)] mb-5 lg:mb-0'>
                        <h1 className='text-4xl font-bold uppercase'>ASSET MODELING</h1>
                        <p className='px-12 font-semibold mt-6'>A game asset is a character or an object that&apos;s meant to appear in a video game. </p>
                    </div>
                </div>
            </div>
            <div className='mb-20'>
                <h1 className='text-4xl lg:text-5xl text-center font-semibold mb-20'>Our 3D Work</h1>
                <div className='flex flex-col lg:flex-row justify-evenly'>
                    <div><Image className='rounded-[7px] shadow-[3px_5px_34px_0_rgba(0,0,0,0.15)]' height={281} width={409} src={D31} alt=""></Image></div>
                    <div><Image className='rounded-[7px] shadow-[3px_5px_34px_0_rgba(0,0,0,0.15)]' height={281} width={409} src={D32} alt=""></Image></div>
                    <div><Image className='rounded-[7px] shadow-[3px_5px_34px_0_rgba(0,0,0,0.15)]' height={281} width={409} src={D33} alt=""></Image></div>
                </div>
                {/* <div className='h-auto'>
                    <Swiper
                        spaceBetween={0}
                        scrollbar={{
                            draggable: true,
                            dragSize: 50,
                            el: ".swiper-scrollbar"
                        }}
                        modules={[Navigation, Scrollbar]}
                        // onBeforeInit={(swiper) => {
                        //     swiper.params.navigation.prevEl = navigationPrevRef.current;
                        //     swiper.params.navigation.nextEl = navigationNextRef.current;
                        // }}
                        // navigation={{
                        //     prevEl: navigationPrevRef.current,
                        //     nextEl: navigationNextRef.current,
                        // }}
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
                                slidesPerView: 3,
                            },
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div>
                                    <Image className='rounded-[7px] shadow-[3px_5px_34px_0_rgba(0,0,0,0.15)] mb-5 lg:mb-0' height={281} width={409} src={D31} alt=""></Image>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Image className='rounded-[7px] shadow-[3px_5px_34px_0_rgba(0,0,0,0.15)] mb-5 lg:mb-0' height={281} width={409} src={D32} alt=""></Image>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Image className='rounded-[7px] shadow-[3px_5px_34px_0_rgba(0,0,0,0.15)] mb-5 lg:mb-0' height={281} width={409} src={D33} alt=""></Image>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div> */}

            </div>
        </div>
    );
};

export default Art3D;