import Image from 'next/image';
import React from 'react';
import CR from '../../../public/clashroyale.png'
import BGMI from '../../../public/BGMI.png'
import LOL from '../../../public/LOL.png'
import CODM from '../../../public/CODM.png'

const Partner = () => {
    return (
        <div className='w-full bg-black text-white'>
            <h1 className='text-2xl lg:text-5xl text-center font-bold mt-3'>Our Partners</h1>
            <div className='flex justify-evenly items-center my-10'>
                <div>
                    <Image src={CR} alt=""></Image>
                </div>
                <div>
                    <Image src={BGMI} alt=""></Image>
                </div>
                <div>
                    <Image src={LOL} alt=""></Image>
                </div>
                <div>
                    <Image src={CODM} alt=""></Image>
                </div>
            </div>
        </div>
    );
};

export default Partner;