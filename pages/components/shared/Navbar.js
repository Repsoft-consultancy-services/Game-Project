import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import RD from '../../../public/RD-logo-Black.png'
import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { CgMenuLeft } from 'react-icons/cg';
import { IoIosArrowUp } from 'react-icons/io';

const Navbar = () => {
    const [servicedrop, setServicedrop] = useState(false)
    const handledropdown = () => {
        if (!servicedrop)
            setServicedrop(true)
        else
            setServicedrop(false)
    }
    console.log(servicedrop);
    const menu = <>
        <li><Link href='/'><p className='bg-white'>Home</p></Link></li>
        <li onClick={handledropdown}>
            <p className='bg-white'>Services</p>
        </li>
        <li><Link href='/contactUs'><p className='bg-white'>Contact Us</p></Link></li>
        <li><Link href='/joinUs'><p className='bg-white'>Join Us</p></Link></li>
        <li><Link href='/aboutUs'><p className='bg-white'>About Us</p></Link></li>
    </>
    return (
        <div>
            <div className="navbar border-b-2 border-black h-[20px]">
                <Link href="/">
                    <div className='hidden lg:block'>
                        <Image src={RD} alt="" height={58} width={86} />
                    </div>
                </Link>
                <div className="navbar-start lg:hidden -ml-5">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost">
                            <CgMenuLeft className='text-4xl' />
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow
                     rounded-md w-52 bg-white">
                            {menu}
                            <div className='flex ml-3 mt-2 space-x-3 text-3xl'>
                                <Link href=""><AiOutlineInstagram /></Link>
                                <Link href=""><FaDiscord /></Link>
                                <Link href=""><AiFillYoutube /></Link>
                            </div>
                        </ul>
                    </div>
                </div>
                <Link href="/">
                    <div className='flex lg:hidden justify-center -ml-[24px]'>
                        <Image src={RD} alt="" height={58} width={86} />
                    </div>
                </Link>
                <div className="justify-start w-4/5 hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-2xl">
                        {menu}
                    </ul>
                </div>

                <div className="justify-end w-1/3 ">
                    <div className='hidden lg:flex mr-5 xl:mr-16 space-x-8 text-3xl'>
                        <Link href=""><AiOutlineInstagram /></Link>
                        <Link href=""><FaDiscord /></Link>
                        <Link href=""><AiFillYoutube /></Link>
                    </div>
                </div>
            </div>
            {servicedrop && <ul onMouseLeave={handledropdown} className="bg-white mt-1 absolute top-[59px] left-32 z-50">
                <li className='border border-b-0 border-black rounded-none hover:cursor-pointer'><Link href='/services'><p className='bg-white text-base uppercase'>Quality assurance</p></Link></li>
                <li className='border border-b-0 border-black rounded-none hover:cursor-pointer'><Link href='/services'><p className='bg-white text-base uppercase'>3D ART</p></Link></li>
                <li className='border border-b-0 border-black rounded-none hover:cursor-pointer'><Link href='/services'><p className='bg-white text-base uppercase'>2D ART</p></Link></li>
                <li className='border border-b-0 border-black rounded-none hover:cursor-pointer pr-5'><Link href='/services'><p className='bg-white text-base uppercase'>SOFTWARE DEVELOPMENT</p></Link></li>
                <li className='border border-b-0 border-black rounded-none hover:cursor-pointer'><Link href='/services'><p className='bg-white text-base uppercase'>Graphic Design</p></Link></li>
                <li onClick={handledropdown} className='border border-black rounded-none hover:cursor-pointer'><p className='bg-white text-base uppercase flex justify-center'><IoIosArrowUp /></p></li>
            </ul>}
        </div>

    );
};

export default Navbar;