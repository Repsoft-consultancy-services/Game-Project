import Image from 'next/image';
import React from 'react';
import SoftwareDevelopmentimg from '../../public/SoftwareDevelopment.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar } from "swiper";
import SD1 from '../../public/SD1.png'
import SD2 from '../../public/SD2.png'
import SD3 from '../../public/SD3.png'

const SoftwareDevelopment = () => {
    return (
        <div>
            <div className='flex justify-center md:justify-between items-center flex-col md:flex-row mt-5'>
                <div className='flex-1 px-10 md:px-0'>
                    <div className='flex md:justify-start'>
                        <Image src={SoftwareDevelopmentimg} alt=""></Image>
                    </div>
                </div>
                <div className='flex-1 text-center md:text-right px-10 md:px-0'>
                    <h2 className='text-2xl lg:text-6xl uppercase font-bold'>SOFTWARE <br /> DEVELOPMENT</h2>
                    <div className='mt-8 mb-10 font-semibold text-xl'>
                        We help our partners accelerate disruption both within their organizations and industries. They strategize new ideas and obtain real business value by getting the most out of our production-ready custom software development services. Talk to our experts today!
                    </div>
                </div>
            </div>
            <div className=' mb-20'>
                <div className='grid grid-cols-3 justify-items-center gap-20'>
                    <div className='text-center w-[400px] h-[450px] py-10 px-3 rounded-[20px] shadow-[4px_4px_25px_0px_rgba(0,0,0,0.15)]'>
                        <h1 className='text-4xl font-bold uppercase'>MOTION GRAPHICS</h1>
                        <p className='px-12 font-semibold mt-6'>Motion graphics is animation, but with text as a major component. Essentially, it’s animated graphic design.</p>
                    </div>
                    <div className='text-center w-[400px] h-[450px] bg-black text-white pt-10 rounded-[20px]'>
                        <h1 className='text-4xl font-bold uppercase'>UI / UX DESIGN</h1>
                        <p className='px-12 font-semibold mt-6'>The user interface is the graphical layout of an application. It consists of the buttons users click on, the text they read, the images, sliders, text entry fields, and all the rest of the items the user interacts with. This includes screen layout, transitions, interface animations and every single micro-interaction. Any sort of visual element, interaction, or animation must all be designed.</p>
                    </div>
                    <div className='text-center w-[400px] h-[450px] py-10 px-3 rounded-[20px] shadow-[4px_4px_25px_0px_rgba(0,0,0,0.15)]'>
                        <h1 className='text-4xl font-bold uppercase'>BRANDING</h1>
                        <p className='px-12 font-semibold mt-6'> Branding is one of those marketing concepts that are a bit vague and can quickly become confusing, even for people who have studied marketing.</p>
                    </div>
                </div>
            </div>
            <div className='mb-20'>
                <h1 className='text-4xl lg:text-5xl text-center font-semibold mb-20'>Our projects</h1>
                <div className='h-auto'>
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
                                    <Image className='rounded-[7px] shadow-[3px_5px_34px_0_rgba(0,0,0,0.15)]' height={281} width={409} src={SD1} alt=""></Image>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Image className='rounded-[7px] shadow-[3px_5px_34px_0_rgba(0,0,0,0.15)]' height={281} width={409} src={SD2} alt=""></Image>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Image className='rounded-[7px]shadow-[3px_5px_34px_0_rgba(0,0,0,0.15)]' height={281} width={409} src={SD3} alt=""></Image>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>
        </div>
    );
};

export default SoftwareDevelopment;