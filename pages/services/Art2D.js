import React from 'react';
import Image from 'next/image';
import art2D from '../../public/art2D.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar } from "swiper";
import D21 from '../../public/D21.png'
import D22 from '../../public/D22.png'
import D23 from '../../public/D23.png'

const Art2D = () => {
    return (
        <div>
            <div className='flex justify-center md:justify-between items-center flex-col md:flex-row mt-5'>
                <div className='flex-1 order-2  text-center md:text-left px-10 md:px-0'>
                    <h2 className='text-2xl lg:text-6xl uppercase font-bold'>2D ART</h2>
                    <div className='mt-8 mb-10 font-semibold text-xl'>
                        Ravendise is a 2D art company with an exceptional reputation for talented 2D game artists with solid experience in the industry. We offer 2D game art outsourcing services for projects of any size and deliver high-quality artworks satisfying customers around the world.
                    </div>
                </div>
                <div className='flex-1 order-1 lg:order-3 px-10 md:px-0'>
                    <div className='flex md:justify-end'>
                        <Image src={art2D} alt=""></Image>
                    </div>
                </div>
            </div>
            <div className='mb-20'>
                <div className='grid grid-cols-1 lg:grid-cols-3 justify-center gap-0 lg:gap-5'>
                    <div className="text-center lg:py-10 lg:px-3 rounded-[20px] shadow-[4px_4px_25px_0px_rgba(0,0,0,0.15)] mb-5 lg:mb-0">
                        <h1 className='text-4xl font-bold uppercase'>CHARACTER DESIGN</h1>
                        <p className='px-12 font-semibold mt-6'>character design is the full creation of a character&apos;s aesthetic, personality, behavior, and overall visual appearance. This means that every aspect of a character such as shapes, color palettes, and details are chosen for a specific reason.</p>
                    </div>
                    <div className='text-center bg-black text-white pt-10 pb-5 rounded-[20px] mb-5 lg:mb-0'>
                        <h1 className='text-4xl font-bold uppercase'>CONCEPT ART</h1>
                        <p className='px-12 font-semibold mt-6'>Concept art is a visual representation that tells a story or conveys a certain look. It is commonly used in film and video games to convey a vision and set the tone for an entire game or movie. Concept art provides a strong reference point that helps align the creatives working on the project.</p>
                    </div>
                    <div className='text-center py-10 px-3 rounded-[20px] shadow-[4px_4px_25px_0px_rgba(0,0,0,0.15)] mb-5 lg:mb-0'>
                        <h1 className='text-4xl font-bold uppercase'>DIGITAL PAINT</h1>
                        <p className='px-12 font-semibold mt-6'>Digital painting is a relatively new but an already established art form. It’s a medium that typically combines a computer, a graphics tablet, and software of choice.</p>
                    </div>
                </div>
            </div>
            <div className='mb-20'>
                <h1 className='text-4xl lg:text-5xl text-center font-semibold mb-20'>Our 2D Work</h1>
                <div className='flex flex-col lg:flex-row justify-evenly'>
                    <div><Image className='rounded-[7px] shadow-[3px_5px_34px_0_rgba(0,0,0,0.15)]' height={281} width={409} src={D21} alt=""></Image></div>
                    <div><Image className='rounded-[7px] shadow-[3px_5px_34px_0_rgba(0,0,0,0.15)]' height={281} width={409} src={D22} alt=""></Image></div>
                    <div><Image className='rounded-[7px] shadow-[3px_5px_34px_0_rgba(0,0,0,0.15)]' height={281} width={409} src={D23} alt=""></Image></div>



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
                                    <Image className='rounded-[7px] shadow-[3px_5px_34px_0_rgba(0,0,0,0.15)] mb-5 lg:mb-0' height={281} width={409} src={D21} alt=""></Image>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Image className='rounded-[7px] shadow-[3px_5px_34px_0_rgba(0,0,0,0.15)] mb-5 lg:mb-0' height={281} width={409} src={D22} alt=""></Image>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Image className='rounded-[7px] shadow-[3px_5px_34px_0_rgba(0,0,0,0.15)] mb-5 lg:mb-0' height={281} width={409} src={D23} alt=""></Image>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div> */}

            </div>
        </div>
    );
};

export default Art2D;