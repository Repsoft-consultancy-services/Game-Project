import React from 'react';

import { FaLessThan, FaGreaterThan } from 'react-icons/fa'

const Services = () => {
    return (
        <div className='w-full mt-5'>
            <h1 className='text-5xl font-bold text-center text-black'>Services We offer</h1>
            <div className='grid lg:grid-cols-5 gap-5 text-center text-white mt-10'>
                <div className='bg-black p-4 h-[468px]'>
                    <h2 className='text-4xl uppercase font-bold'>QUALITY ASSURANCE</h2>
                    <div className='mt-8 mb-10'>
                        Ravendise is a community of software testers who are passionate about quality and love to test. We develop an in-depth understanding of the applications under test and include software testing strategies that deliver quantifiable results.
                    </div>
                </div>
                <div className='bg-black p-4 h-[468px]'>
                    <h2 className='text-4xl uppercase font-bold'>3D ART</h2>
                    <div className='mt-8 mb-10 h-[468px]'>
                        Ravendise is a 3D game art outsourcing company providing a full spectrum of custom 3D art services from 3D concept development to complex 3D art projects. Since we always strive to create supreme-quality art that interprets the client&apos;s thoughts we offer to hire 3D designers from our team for projects of any complexity.
                    </div>
                </div>
                <div className='bg-black p-4 h-[468px]'>
                    <h2 className='text-4xl uppercase font-bold'>2D ART</h2>
                    <div className='mt-8 mb-10'>
                        Ravendise is a 2D art company with an exceptional reputation for talented 2D game artists with solid experience in the industry. We offer 2D game art outsourcing services for projects of any size and deliver high-quality artworks satisfying customers around the world.
                    </div>
                </div>
                <div className='bg-black p-4 h-[468px]'>
                    <h2 className='text-4xl uppercase font-bold'>SOFTWARE DEVELOPMENT</h2>
                    <div className='mt-8 mb-10'>
                        We help our partners accelerate disruption both within their organizations and industries. They strategize new ideas and obtain real business value by getting the most out of our production-ready custom software development services. Talk to our experts today!
                    </div>
                </div>
                <div className='bg-black p-4 h-[468px]'>
                    <h2 className='text-4xl uppercase font-bold'>Graphic Design</h2>
                    <div className='mt-8 mb-10'>
                        Ravendise is a multi-disciplinary, independently owned design studio.
                        Our work encompasses graphics and identity, strategy and positioning, products and packaging, exhibitions and installations, websites and digital experiences, advertising and communications, data visualizations and typefaces, sound and motion
                    </div>
                </div>
            </div>
            <div className='flex justify-center space-x-3 my-10'>
                <div>
                    <button className='btn rounded-full bg-black'><FaLessThan /></button>
                </div>
                <div>
                    <button className='btn rounded-full bg-white border-0 shadow-[2px_4px_15px_0_rgba(0,0,0,0.15)]'><FaGreaterThan className='text-black' /></button>
                </div>
            </div>
        </div>
    );
};

export default Services;