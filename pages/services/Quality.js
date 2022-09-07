import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar } from "swiper";
import QualityAssurance from '../../public/QualityAssurance.png';
import control from '../../public/control.png'
import tombraider from '../../public/tombraider.png'
import nfsheat from '../../public/nfsheat.png'


const Quality = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center md:justify-between items-center'>
                <div className='flex-1 px-10 md:px-0'>
                    <div className='flex md:justify-start'>
                        <Image src={QualityAssurance} alt=""></Image>
                    </div>
                </div>
                <div className='flex-1 text-center md:text-right px-10 md:px-0'>
                    <h2 className='text-2xl lg:text-6xl uppercase font-bold'>QUALITY <br /> ASSURANCE</h2>
                    <div className='mt-8 mb-10 font-semibold text-xl'>
                        Ravendise is a community of software testers who are passionate about quality and love to test. We develop an in-depth understanding of the applications under test and include software testing strategies that deliver quantifiable results.
                    </div>
                </div>
            </div>
            <div className='mb-20'>
                <div className='grid lg:grid-cols-2 justify-items-center gap-0 lg:gap-20'>
                    <div className="text-center w-full lg:w-2/3 ml-auto bg-black text-white p-10 rounded-[20px] mb-5 lg:mb-0">
                        <div className=''>
                            <h1 className='text-4xl font-bold uppercase'>Game Testing</h1>
                            <p className='font-semibold mt-6'>Game testing, a subset of game development, is a software testing process for quality control of video games. The primary function of game testing is the discovery and documentation of software defects. Interactive entertainment software testing is a highly technical field requiring computing expertise, analytic competence, critical evaluation skills, and endurance.</p>
                        </div>
                    </div>
                    <div className="text-center w-full lg:w-2/3 mr-auto py-10 rounded-[20px] shadow-[4px_4px_25px_0px_rgba(0,0,0,0.15)] mb-5 lg:mb-0">
                        <div className=''>
                            <h1 className='text-4xl font-bold uppercase'>Software Testing</h1>
                            <p className='px-12 font-semibold mt-6'>Software testing is the act of examining the artifacts and the behavior of the software under test by validation and verification. Software testing can also provide an objective, independent view of the software to allow the business to appreciate and understand<br /> the  risks of software <br /> implementation. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-5 lg:mb-20'>
                <h1 className='text-4xl lg:text-5xl text-center font-semibold mb-20'>Our Tested Games</h1>
                    <div className='flex flex-col lg:flex-row justify-evenly'>
                        <Image className='rounded-[7px] shadow-[3px_5px_34px_0_rgba(0,0,0,0.15)]' height={281} width={409} src={control} alt=""></Image>
                        <Image className='rounded-[7px] shadow-[3px_5px_34px_0_rgba(0,0,0,0.15)]' height={281} width={409} src={tombraider} alt=""></Image>
                        <Image className='rounded-[7px] shadow-[3px_5px_34px_0_rgba(0,0,0,0.15)]' height={281} width={409} src={nfsheat} alt=""></Image>
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
                                    <Image className='rounded-[7px] shadow-[3px_5px_34px_0_rgba(0,0,0,0.15)] mb-5 lg:mb-0' height={281} width={409} src={control} alt=""></Image>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Image className='rounded-[7px] shadow-[3px_5px_34px_0_rgba(0,0,0,0.15)] mb-5 lg:mb-0' height={281} width={409} src={tombraider} alt=""></Image>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Image className='rounded-[7px] shadow-[3px_5px_34px_0_rgba(0,0,0,0.15)] mb-5 lg:mb-0' height={281} width={409} src={nfsheat} alt=""></Image>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div> */}

            </div>
        </div>
    );
};

export default Quality;