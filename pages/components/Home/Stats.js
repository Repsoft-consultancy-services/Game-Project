import React from 'react';

const Stats = () => {
    return (
        <div className='w-full bg-black my-10 text-white'>
            <div className="flex justify-center">
                <div className='grid lg:grid-cols-3 gap-5 text-center'>
                    <div className='p-10'>
                        <h1 className='text-5xl font-bold'>450+</h1>
                        <p className='text-slate-400 mt-4'>Games Tested</p>
                    </div>
                    <div className='p-10'>
                        <h1 className='text-5xl font-bold'>100+</h1>
                        <p className='text-slate-400 mt-4'>Happy Clients</p>
                    </div>
                    <div className='p-10'>
                        <h1 className='text-5xl font-bold'>500+</h1>
                        <p className='text-slate-400 mt-4'>Career Game Testers</p>
                    </div>
                    <div className='px-10 pb-10'>
                        <h1 className='text-5xl font-bold'>1000+</h1>
                        <p className='text-slate-400 mt-4'>Gaming Events</p>
                    </div>
                    <div className='px-10 pb-10'>
                        <h1 className='text-5xl font-bold'>10+</h1>
                        <p className='text-slate-400 mt-4'>Years In Industry</p>
                    </div>
                    <div className='px-10 pb-10'>
                        <h1 className='text-5xl font-bold'>10M+</h1>
                        <p className='text-slate-400 mt-4'>Testing Hours</p>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Stats;