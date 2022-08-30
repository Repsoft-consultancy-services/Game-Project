import Image from 'next/image';
import React from 'react';
import lolcat from '../../public/lolcat.png'
import lolarcher from '../../public/lolarcher.png'
import lolmerged from '../../public/lolmerged.png'
import avatar1 from '../../public/avatar1.png'
import avatar2 from '../../public/avatar2.png'
import avatar3 from '../../public/avatar3.png'
import avatar4 from '../../public/avatar4.png'
import avatar5 from '../../public/avatar5.png'

const Banner = () => {
    return (
        <div className='w-full text-black'>
            <div className='flex flex-col lg:flex-row justify-center items-center lg:justify-between'>
                <div className='block lg:hidden'>
                    <Image src={lolmerged} alt=""></Image>
                </div>
                <div className='hidden lg:block'>
                    <Image src={lolcat} alt=""></Image>
                </div>
                <div className='flex flex-col items-center justify-center text-center'>
                    <div className="flex overflow-hidden -space-x-6">
                        <div className="z-[6]">
                            <div className="w-[46px] lg:w-[75px]">
                                <Image src={avatar1} alt=""></Image>
                            </div>
                        </div>
                        <div className="z-[5]">
                            <div className="w-[46px] lg:w-[75px]">
                                <Image src={avatar2} alt=""></Image>
                            </div>
                        </div>
                        <div className="z-[4]">
                            <div className="w-[46px] lg:w-[75px]">
                                <Image src={avatar3} alt=""></Image>
                            </div>
                        </div>
                        <div className="z-[3]">
                            <div className="w-[46px] lg:w-[75px]">
                                <Image src={avatar4} alt=""></Image>
                            </div>
                        </div>
                        <div className="z-[2]">
                            <div className="w-[46px] lg:w-[75px]">
                                <Image src={avatar5} alt=""></Image>
                            </div>
                        </div>
                        <div className="z-[1]">
                            <div className="w-[46px] lg:w-[75px] bg-black text-white text-xl flex justify-center items-center aspect-square rounded-full">
                                +27
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-4xl lg:text-6xl font-bold uppercase'>join our team</h1>
                    </div>
                    <div className='text-base lg:text-2xl'>
                        <p>Lorem Ipsum is simply dummy text <br /> of the printing and typesetting <br />  industry. Lorem Ipsum has been the <br /> industry</p>
                    </div>
                    <div>
                        <button className='bg-black text-white text-center text-xs lg:text-lg normal-case px-9 lg:px-12 py-4 lg:py-5 rounded-[10px] mt-10 '>Look for open positions</button>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <Image src={lolarcher} alt=""></Image>
                </div>
            </div>
            <div className='my-10 text-center'>
                <div>
                    <h1 className='text-4xl lg:text-6xl font-bold uppercase w-1/2 mx-auto'>Why join us</h1>
                    <p className='text-base lg:text-2xl mt-5 w-2/3 mx-auto'>Our team of industry professionals, based offshore
                        in India and onshore in the <br /> US and Sweden,collaborate throughout the
                        development process toreduce <br /> turn-around time and client costs, while
                        delivering a greater volume of high <br /> quality content.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;