import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import StarRatings from 'react-star-ratings';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import user from '../../../public/user.png'
import Image from 'next/image';

const RatingSlider = () => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    return (
        <div className='mt-10 h-[20rem] lg:h-[40rem] xl:h-[30rem]'>
            <Swiper
                spaceBetween={10}
                loop={true}
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    1440: {
                        slidesPerView: 4,
                    },
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='h-[265px] lg:h-[390px] text-center p-3 lg:p-10 shadow-[2px_4px_15px_0_rgba(0,0,0,0.15)]'>
                        <div className='flex items-center justify-evenly'>
                            <div className='rounded-full'>
                                <Image src={user} alt=""></Image>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='text-base lg:text-2xl font-bold'>Lorem Ipsun</h1>
                                <StarRatings
                                    rating={5}
                                    starRatedColor="black"
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension="24px"
                                    starSpacing="0px"
                                />
                            </div>
                        </div>
                        <div className='mt-5 lg:mt-20 font-normal lg:font-semibold'>
                            <p>“Lorem Ipsum is simply dummy text of the printing and typesetting industry”</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[265px] lg:h-[390px] text-center p-3 lg:p-10 shadow-[2px_4px_15px_0_rgba(0,0,0,0.15)]'>
                        <div className='flex items-center justify-between'>
                            <div className='rounded-full'>
                                <Image src={user} alt=""></Image>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='text-base lg:text-2xl font-bold'>Lorem Ipsun</h1>
                                <StarRatings
                                    rating={5}
                                    starRatedColor="black"
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension="24px"
                                    starSpacing="0px"
                                />
                            </div>
                        </div>
                        <div className='mt-5 lg:mt-20 font-normal lg:font-semibold'>
                            <p>“Lorem Ipsum is simply dummy text of the printing and typesetting industry”</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[265px] lg:h-[390px] text-center p-3 lg:p-10 shadow-[2px_4px_15px_0_rgba(0,0,0,0.15)]'>
                        <div className='flex items-center justify-between'>
                            <div className='rounded-full'>
                                <Image src={user} alt=""></Image>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='text-base lg:text-2xl font-bold'>Lorem Ipsun</h1>
                                <StarRatings
                                    rating={5}
                                    starRatedColor="black"
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension="24px"
                                    starSpacing="0px"
                                />
                            </div>
                        </div>
                        <div className='mt-5 lg:mt-20 font-normal lg:font-semibold'>
                            <p>“Lorem Ipsum is simply dummy text of the printing and typesetting industry”</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className='h-[265px] lg:h-[390px] text-center p-3 lg:p-10 shadow-[2px_4px_15px_0_rgba(0,0,0,0.15)]'>
                    <div className='flex items-center justify-between'>
                        <div className='rounded-full'>
                            <Image src={user} alt=""></Image>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-base lg:text-2xl font-bold'>Lorem Ipsun</h1>
                            <StarRatings
                                rating={5}
                                starRatedColor="black"
                                numberOfStars={5}
                                name='rating'
                                starDimension="24px"
                                starSpacing="0px"
                            />
                        </div>
                    </div>
                    <div className='mt-5 lg:mt-20 font-normal lg:font-semibold'>
                        <p>“Lorem Ipsum is simply dummy text of the printing and typesetting industry”</p>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='h-[265px] lg:h-[390px] text-center p-3 lg:p-10 shadow-[2px_4px_15px_0_rgba(0,0,0,0.15)]'>
                    <div className='flex items-center justify-between'>
                        <div className='rounded-full'>
                            <Image src={user} alt=""></Image>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-base lg:text-2xl font-bold'>Lorem Ipsun</h1>
                            <StarRatings
                                rating={5}
                                starRatedColor="black"
                                numberOfStars={5}
                                name='rating'
                                starDimension="24px"
                                starSpacing="0px"
                            />
                        </div>
                    </div>
                    <div className='mt-5 lg:mt-20 font-normal lg:font-semibold'>
                        <p>“Lorem Ipsum is simply dummy text of the printing and typesetting industry”</p>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='h-[265px] lg:h-[390px] text-center p-3 lg:p-10 shadow-[2px_4px_15px_0_rgba(0,0,0,0.15)]'>
                    <div className='flex items-center justify-between'>
                        <div className='rounded-full'>
                            <Image src={user} alt=""></Image>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-base lg:text-2xl font-bold'>Lorem Ipsun</h1>
                            <StarRatings
                                rating={5}
                                starRatedColor="black"
                                numberOfStars={5}
                                name='rating'
                                starDimension="24px"
                                starSpacing="0px"
                            />
                        </div>
                    </div>
                    <div className='mt-5 lg:mt-20 font-normal lg:font-semibold'>
                        <p>“Lorem Ipsum is simply dummy text of the printing and typesetting industry”</p>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className=' h-[265px] lg:h-[390px] text-center p-3 lg:p-10 shadow-[2px_4px_15px_0_rgba(0,0,0,0.15)]'>
                    <div className='flex items-center justify-between'>
                        <div className='rounded-full'>
                            <Image src={user} alt=""></Image>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-base lg:text-2xl font-bold'>Lorem Ipsun</h1>
                            <StarRatings
                                rating={5}
                                starRatedColor="black"
                                numberOfStars={5}
                                name='rating'
                                starDimension="24px"
                                starSpacing="0px"
                            />
                        </div>
                    </div>
                    <div className='mt-5 lg:mt-20 font-normal lg:font-semibold'>
                        <p>“Lorem Ipsum is simply dummy text of the printing and typesetting industry”</p>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className=' h-[265px] lg:h-[390px] text-center p-3 lg:p-10 shadow-[2px_4px_15px_0_rgba(0,0,0,0.15)]'>
                    <div className='flex items-center justify-between'>
                        <div className='rounded-full'>
                            <Image src={user} alt=""></Image>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-base lg:text-2xl font-bold'>Lorem Ipsun</h1>
                            <StarRatings
                                rating={5}
                                starRatedColor="black"
                                numberOfStars={5}
                                name='rating'
                                starDimension="24px"
                                starSpacing="0px"
                            />
                        </div>
                    </div>
                    <div className='mt-5 lg:mt-20 font-normal lg:font-semibold'>
                        <p>“Lorem Ipsum is simply dummy text of the printing and typesetting industry”</p>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className=' h-[265px] lg:h-[390px] text-center p-3 lg:p-10 shadow-[2px_4px_15px_0_rgba(0,0,0,0.15)]'>
                    <div className='flex items-center justify-between'>
                        <div className='rounded-full'>
                            <Image src={user} alt=""></Image>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-base lg:text-2xl font-bold'>Lorem Ipsun</h1>
                            <StarRatings
                                rating={5}
                                starRatedColor="black"
                                numberOfStars={5}
                                name='rating'
                                starDimension="24px"
                                starSpacing="0px"
                            />
                        </div>
                    </div>
                    <div className='mt-5 lg:mt-20 font-normal lg:font-semibold'>
                        <p>“Lorem Ipsum is simply dummy text of the printing and typesetting industry”</p>
                    </div>
                </div></SwiperSlide>
            </Swiper>
            <div className='flex justify-center lg:justify-end space-x-3'>
                <div ref={navigationPrevRef} >
                    <button className='btn rounded-full bg-black'><FaLessThan /></button>
                </div>
                <div ref={navigationNextRef}>
                    <button className='btn rounded-full bg-white border-0 shadow-[2px_4px_15px_0_rgba(0,0,0,0.15)]'><FaGreaterThan className='text-black' /></button>
                </div>
            </div>
        </div>
    );
};

export default RatingSlider;