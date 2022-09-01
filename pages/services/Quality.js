import React from 'react';
import Image from 'next/image';
import QualityAssurance from '../../public/QualityAssurance.png';
import QualityAssurancefig from '../../public/QualityAssurancefig.png';
import Link from 'next/link';
const Quality = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center md:justify-between items-center'>
                <div className='flex-1 px-10 md:px-0'>
                    <div className='flex md:justify-start'>
                        <Image src={QualityAssurance} alt=""></Image>
                    </div>
                </div>
                <div className='flex-1 text-center md:text-right px-10 md:px-0'>
                    <h2 className='text-2xl lg:text-6xl uppercase font-bold'>QUALITY <br /> ASSURANCE</h2>
                    <div className='mt-8 mb-10 font-bold text-xl'>
                        Ravendise is a community of software testers who are passionate about quality and love to test. We develop an in-depth understanding of the applications under test and include software testing strategies that deliver quantifiable results.
                    </div>

                </div>
            </div>
            <div className=' mb-20'>
                <div className='grid grid-cols-2 justify-items-center gap-20'>
                    <div className="text-center w-[400px] h-[450px] ml-auto box-border1 boxclip">
                        <div className='w-[390px] h-[440px] py-6 '>
                            <h1 className='text-4xl font-bold uppercase'>Game Testing</h1>
                            <p className='px-12 font-semibold mt-6'>Game testing, a subset of game development, is a software testing process for quality control of video games. The primary function of game testing is the discovery and documentation of software defects. Interactive entertainment software testing is a highly technical field requiring computing expertise, analytic competence, critical evaluation skills, and endurance.</p>
                        </div>
                    </div>
                    <div className="text-center w-[400px] h-[450px] bg-[url('/border2.png')] bg-no-repeat bg-cover mr-auto">
                        <div className='w-[400px] h-[450px] py-6'>
                            <h1 className='text-4xl font-bold uppercase'>Software Testing</h1>
                            <p className='px-12 font-semibold mt-6'>Software testing is the act of examining the artifacts and the behavior of the software under test by validation and verification. Software testing can also provide an objective, independent view of the software to allow the business to appreciate and understand the risks of software implementation. </p>
                        </div>

                    </div>
                    <div className='col-span-2'><Image src={QualityAssurancefig} alt=""></Image></div>
                </div>
            </div>

        </div>
    );
};

export default Quality;