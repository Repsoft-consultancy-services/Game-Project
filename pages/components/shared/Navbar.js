import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import RD from '../../../public/RD-logo-Black.png'
import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';

const Navbar = () => {
    const menu = <>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/'>Services</Link></li>
        <li><Link href='/'>Contact Us</Link></li>
        <li><Link href='/'>Join Us</Link></li>
        <li><Link href='/'>About Us</Link></li>
    </>
    return (
        <div className="navbar border-b-2 border-black font-semibold h-[20px]">
            <Link href="/">
                <div>
                    <Image src={RD} alt="" height={58} width={86} />
                </div>
            </Link>
            <div className="navbar-start lg:hidden">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
            </div>
            <div className="justify-start w-4/5 hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-2xl">
                    {menu}
                </ul>
            </div>
            <div className="justify-end w-1/3 mr-5 xl:mr-16 space-x-8 text-3xl">
                <a ><AiOutlineInstagram /></a>
                <a ><FaDiscord /></a>
                <a ><AiFillYoutube /></a>
            </div>
        </div>
    );
};

export default Navbar;