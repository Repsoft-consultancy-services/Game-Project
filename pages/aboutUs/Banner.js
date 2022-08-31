import Image from 'next/image';
import React from 'react';
import RavendiseBanner from '../../public/RavendiseBanner.png'
import aboutBannerlg from '../../public/aboutBannerlg.png'
import aboutBannersm from '../../public/aboutBannersm.png'
import { BsArrowDown } from 'react-icons/bs'
import spoidor from '../../public/spoidormon.png'

const Banner = () => {
    return (
        <div className='w-full text-black'>
                <div className='flex flex-col lg:flex-row justify-between items-center '>
                    <div className='block lg:hidden px-10'>
                        <Image src={aboutBannersm} alt=""></Image>
                    </div>
                    <div className='ml-0 lg:ml-32'>
                        <h1 className='text-5xl first-letter:lg:text-6xl font-bold my-3 text-center lg:text-left'>WELCOME TO</h1>
                        <div className='px-10 lg:px-0'>
                            <Image src={RavendiseBanner} alt=""></Image>
                        </div>
                        <div className='flex justify-center lg:justify-start'>
                        <button className='bg-black text-white text-center text-xs lg:text-lg normal-case px-12 py-5 rounded-[10px] mt-10 '><div className='flex justify-between items-center' > < BsArrowDown />Check Out</div></button>
                        </div>

                       
                    </div>
                    <div className='hidden lg:block'>
                        <Image src={aboutBannerlg}></Image>
                    </div>
                </div>

                <div className='my-20 '>
                    <h1 className='text-center text-3xl underline font-semibold' >Who are we?</h1>
                    <div className='flex mt-16'>
                        <div className='flex-1 hidden lg:block'>
                            <Image src={spoidor}></Image>
                        </div>
                        <div className='flex-1 px-5'>
                            <p className='text-2xl text-center lg:text-right font-semibold'>For Studios and Publishers, traditional outsourcing models have proven costly,
                                often requiring more supervision and resources than expected to achieve quality
                                return on the investment made. <br /><br />

                                How is Ravendise different? Our team of industry professionals, based offshore
                                in India and onshore in the US and Sweden,collaborate throughout the
                                development process toreduce turn-around time and client costs, while
                                delivering a greater volume of high quality content. <br /> <br />

                                Whether a high volume of content on a tight schedule, or the generation of
                                specific assets that requires dedicated attention, we understand the issues that
                                arise in the development process. Our team of industry veterans helps manage
                                projects efficiently, foresees and provides solutions to the challenges that may
                                arise during the production process, delivering the highest quality at the best
                                value while adhering to the strictest standards of QC and Security. <br /><br />

                                While still new Ravendise is starting of with AAA projects all over the world.
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Banner;