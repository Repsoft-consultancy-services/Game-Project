import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import RD from '../../../public/RD-logo-Black.png'
import { AiOutlineInstagram, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { CgMenuLeft } from 'react-icons/cg';
import { IoIosArrowUp } from 'react-icons/io';

const Navbar = () => {
    const [servicedrop, setServicedrop] = useState(false)
    const [home, setHome] = useState(false)
    const [service, setService] = useState(false)
    const [contact, setContact] = useState(false)
    const [join, setJoin] = useState(false)
    const [about, setAbout] = useState(false)
    const handledropdown = () => {
        if (!servicedrop)
            setServicedrop(true)
        else
            setServicedrop(false)
    }
    const handlehome = ()=>{
        setHome(true)
        setContact(false)
        setJoin(false)
        setAbout(false)
        setService(false)
    }
    const handlecontact = ()=>{
        setHome(false)
        setContact(true)
        setJoin(false)
        setAbout(false)
        setService(false)
    }
    const handleabout = ()=>{
        setHome(false)
        setContact(false)
        setJoin(false)
        setAbout(true)
        setService(false)
    }
    const handlejoin = ()=>{
        setHome(false)
        setContact(false)
        setJoin(true)
        setAbout(false)
        setService(false)
    }
    const handleservice = ()=>{
        setHome(false)
        setContact(false)
        setJoin(false)
        setAbout(false)
        setService(true)
    }
    
    const menu = <>
        <li onClick={handlehome}><Link href='/'><p className={`bg-white ${home? 'font-bold':'font-normal'}`}>Home</p></Link></li>
        <li onClick={()=>{
            handledropdown()
            handleservice()
        }}>
            <p className={`bg-white ${service? 'font-bold':'font-normal'}`}>Services</p>
        </li>
        <li onClick={handlecontact}><Link href='/contactUs'><p className={`bg-white ${contact? 'font-bold':'font-normal'}`}>Contact Us</p></Link></li>
        <li onClick={handlejoin}><Link href='/joinUs'><p className={`bg-white ${join? 'font-bold':'font-normal'}`}>Join Us</p></Link></li>
        <li onClick={handleabout}><Link href='/aboutUs'><p className={`bg-white ${about? 'font-bold':'font-normal'}`}>About Us</p></Link></li>
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
                                <Link href="https://www.instagram.com/ravendise_official/"><AiOutlineInstagram /></Link>
                                <Link href="https://discord.gg/Z2F4uPHngD"><FaDiscord /></Link>
                                <Link href="https://youtube.com/channel/UC02Leyeh-kCL-OcnP4vGV1g"><AiFillYoutube /></Link>
                                <Link href="https://twitter.com/RavendiseStudio"><FaTwitter /></Link>
                                <Link href="https://www.linkedin.com/company/ravendise/"><AiFillLinkedin /></Link>
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
                        <Link target="_blank" href="https://www.instagram.com/ravendise_official/"><AiOutlineInstagram className='hover:cursor-pointer' /></Link>
                        <Link target="_blank" href="https://discord.gg/Z2F4uPHngD"><FaDiscord className='hover:cursor-pointer' /></Link>
                        <Link target="_blank" href="https://youtube.com/channel/UC02Leyeh-kCL-OcnP4vGV1g"><AiFillYoutube className='hover:cursor-pointer' /></Link>
                        <Link target="_blank" href="https://twitter.com/RavendiseStudio"><FaTwitter  className='hover:cursor-pointer'/></Link>
                        <Link target="_blank" href="https://www.linkedin.com/company/ravendise/"><AiFillLinkedin  className='hover:cursor-pointer'/></Link>
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