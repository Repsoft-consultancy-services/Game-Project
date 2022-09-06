import Image from 'next/image';
import React from 'react';
import GraphicDesignimg from '../../public/GraphicDesign.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar } from "swiper";
import GD1 from '../../public/GD1.png'
import GD2 from '../../public/GD2.png'
import GD3 from '../../public/GD3.png'

const GraphicDesign = () => {
    return (
        <div>
            <div className='flex justify-center md:justify-between items-center flex-col md:flex-row mt-5'>
                <div className='flex-1 order-2 text-center md:text-left px-10 md:px-0'>
                    <h2 className='text-2xl lg:text-6xl uppercase font-bold'>Graphic Design</h2>
                    <div className='mt-8 mb-10 font-semibold text-xl'>
                        Ravendise is a multi-disciplinary, independently owned design studio.<br />
                        Our work encompasses graphics and identity, strategy and positioning, products and packaging, exhibitions and installations, websites and digital experiences, advertising and communications, data visualizations and typefaces, sound and motion
                    </div>
                </div>
                <div className='flex-1 order-1 lg:order-3 px-10 md:px-0'>
                    <div className='flex md:justify-end'>
                        <Image src={GraphicDesignimg} alt=""></Image>
                    </div>
                </div>
            </div>
            <div className=' mb-20'>
                <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-0 lg:gap-5'>
                    <div className='text-center py-10 px-3 rounded-[20px] shadow-[4px_4px_25px_0px_rgba(0,0,0,0.15)] mb-5 lg:mb-0'>
                        <h1 className='text-4xl font-bold uppercase'>Web Development</h1>
                        <p className='lg:px-12 font-semibold mt-6'>At Ravendise, we professionally design, redesign and continuously support customer-facing and enterprise web apps to achieve high conversion and adoption rates.</p>
                    </div>
                    <div className='text-center bg-black text-white pt-10 pb-5 px-5 rounded-[20px] mb-5 lg:mb-0'>
                        <h1 className='text-4xl font-bold uppercase'>App Development</h1>
                        <p className='lg:px-12 font-semibold mt-6'>We offer a full cycle of application design, integration and management services. Whether it is a consumer oriented app or a transformative enterprise-class solution, the company leads the entire mobile app development process from ideation and concept to delivery, and to ongoing ongoing support.</p>
                    </div>
                    <div className='text-center py-10 px-3 rounded-[20px] shadow-[4px_4px_25px_0px_rgba(0,0,0,0.15)] mb-5 lg:mb-0'>
                        <h1 className='text-4xl font-bold uppercase'>Game Development</h1>
                        <p className='lg:px-12 font-semibold mt-6'>Our video game development company runs independent projects, jointly creates games with the client and provides additional operational services. Expertise of our team allows us to cover all gaming platforms and develop an amazing product that matches the customer&apos;s vision and players preferences.</p>
                    </div>
                </div>
            </div>
            <div className='mb-20'>
                <h1 className='text-4xl lg:text-5xl text-center font-semibold mb-5 lg:mb-20'>Our Graphic Design Work</h1>
                <div className='flex flex-col lg:flex-row justify-evenly'>
                    <Image className='rounded-[7px] shadow-[3px_5px_34px_0_rgba(0,0,0,0.15)]' height={281} width={409} src={GD1} alt=""></Image>
                    <Image className='rounded-[7px] shadow-[3px_5px_34px_0_rgba(0,0,0,0.15)]' height={281} width={409} src={GD2} alt=""></Image>
                    <Image className='rounded-[7px] shadow-[3px_5px_34px_0_rgba(0,0,0,0.15)]' height={281} width={409} src={GD3} alt=""></Image>
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
                            1900: {
                                slidesPerView: 3,
                            },
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div>
                                    <Image className='rounded-[7px] shadow-[3px_5px_34px_0_rgba(0,0,0,0.15)] mb-5 lg:mb-0' height={281} width={409} src={GD1} alt=""></Image>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Image className='rounded-[7px] shadow-[3px_5px_34px_0_rgba(0,0,0,0.15)] mb-5 lg:mb-0' height={281} width={409} src={GD2} alt=""></Image>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Image className='rounded-[7px] shadow-[3px_5px_34px_0_rgba(0,0,0,0.15)] mb-5 lg:mb-0' height={281} width={409} src={GD3} alt=""></Image>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div> */}

            </div>
        </div>
    );
};

export default GraphicDesign;