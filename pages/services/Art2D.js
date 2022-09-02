import React from 'react';
import Image from 'next/image';
import art2D from '../../public/art2D.png';

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
            <div className=' mb-20'>
                <div className='grid grid-cols-2 justify-items-center gap-20'>
                    <div className="text-center w-[400px] h-[450px] border box-border1 py-6 ml-auto">
                        <h1 className='text-4xl font-bold uppercase'>CHARACTER DESIGN</h1>
                        <p className='px-12 font-semibold mt-6'>character design is the full creation of a character&apos;s aesthetic, personality, behavior, and overall visual appearance. This means that every aspect of a character such as shapes, color palettes, and details are chosen for a specific reason.</p>
                    </div>
                    <div className='text-center w-[400px] h-[450px] border py-6 box-border2 mr-auto'>
                        <h1 className='text-4xl font-bold uppercase'>CONCEPT ART</h1>
                        <p className='px-12 font-semibold mt-6'>Concept art is a visual representation that tells a story or conveys a certain look. It is commonly used in film and video games to convey a vision and set the tone for an entire game or movie. Concept art provides a strong reference point that helps align the creatives working on the project.</p>
                    </div>
                    <div className='text-center w-[400px] h-[450px] border py-6 box-border2 col-span-2'>
                        <h1 className='text-4xl font-bold uppercase'>DIGITAL PAINT</h1>
                        <p className='px-12 font-semibold mt-6'>Digital painting is a relatively new but an already established art form. It’s a medium that typically combines a computer, a graphics tablet, and software of choice.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Art2D;