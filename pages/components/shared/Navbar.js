import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import RD from '../../../public/RD-logo-Black.png'
import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { CgMenuLeft } from 'react-icons/cg';

const Navbar = () => {
    const menu = <>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/'>Services</Link></li>
        <li><Link href='/contactUs'>Contact Us</Link></li>
        <li><Link href='/joinUs'>Join Us</Link></li>
        <li><Link href='/aboutUs'>About Us</Link></li>
    </>
    return (
        <div className="navbar border-b-2 border-black font-semibold h-[20px]">
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
    );
};

export default Navbar;