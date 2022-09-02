import Image from 'next/image';
import React from 'react';
import GraphicDesignimg from '../../public/GraphicDesign.png';

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
                <div className='grid grid-cols-2 justify-items-center gap-20'>
                    <div className='text-center w-[400px] h-[450px] border py-6 box-border1 ml-auto'>
                        <h1 className='text-4xl font-bold uppercase'>Web Development</h1>
                        <p className='px-12 font-semibold mt-6'>At Ravendise, we professionally design, redesign and continuously support customer-facing and enterprise web apps to achieve high conversion and adoption rates.</p>
                    </div>
                    <div className='text-center w-[400px] h-[450px] border py-6 box-border2 mr-auto'>
                        <h1 className='text-4xl font-bold uppercase'>App Development</h1>
                        <p className='px-12 font-semibold mt-6'>We offer a full cycle of application design, integration and management services. Whether it is a consumer oriented app or a transformative enterprise-class solution, the company leads the entire mobile app development process from ideation and concept to delivery, and to ongoing ongoing support.</p>
                    </div>
                    <div className='text-center w-[400px] h-[450px] border py-6 box-border2 col-span-2'>
                        <h1 className='text-4xl font-bold uppercase'>Game Development</h1>
                        <p className='px-12 font-semibold mt-6'>Our video game development company runs independent projects, jointly creates games with the client and provides additional operational services. Expertise of our team allows us to cover all gaming platforms and develop an amazing product that matches the customer&apos;s vision and players preferences.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GraphicDesign;