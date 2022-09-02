import Image from 'next/image';
import React from 'react';
import art3D from '../../public/art3D.png';

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
                <div className='grid grid-cols-2 justify-items-center gap-20'>
                    <div className='text-center w-[400px] h-[450px] border py-6 box-border1 ml-auto'>
                        <h1 className='text-4xl font-bold uppercase'>CHARACTER DESIGN</h1>
                        <p className='px-12 font-semibold mt-6'>character design is the full creation of a character&apos;s aesthetic, personality, behavior, and overall visual appearance. This means that every aspect of a character such as shapes, color palettes, and details are chosen for a specific reason.</p>
                    </div>
                    <div className='text-center w-[400px] h-[450px] border py-6 box-border2 mr-auto'>
                        <h1 className='text-4xl font-bold uppercase'>ENVIROMENT DESIGN</h1>
                        <p className='px-12 font-semibold mt-6'>A 3D environment is a computer-controlled digital setting created with the illusion of depth. It can be both an outdoor and indoor location, from which you can get visually specific sensations.</p>
                    </div>
                    <div className='text-center w-[400px] h-[450px] border py-6 box-border2 col-span-2'>
                        <h1 className='text-4xl font-bold uppercase'>ASSET MODELING</h1>
                        <p className='px-12 font-semibold mt-6'>A game asset is a character or an object that&apos;s meant to appear in a video game. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Art3D;