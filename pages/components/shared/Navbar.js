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
    const [menudrop, setMenudrop] = useState(false)
    const [home, setHome] = useState(true)
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
    const handlehome = () => {
        setHome(true)
        setContact(false)
        setJoin(false)
        setAbout(false)
        setService(false)
        setMenudrop(false)
    }
    const handlecontact = () => {
        setHome(false)
        setContact(true)
        setJoin(false)
        setAbout(false)
        setService(false)
        setMenudrop(false)
    }
    const handleabout = () => {
        setHome(false)
        setContact(false)
        setJoin(false)
        setAbout(true)
        setService(false)
        setMenudrop(false)
    }
    const handlejoin = () => {
        setHome(false)
        setContact(false)
        setJoin(true)
        setAbout(false)
        setService(false)
        setMenudrop(false)
    }
    const handleservice = () => {
        setHome(false)
        setContact(false)
        setJoin(false)
        setAbout(false)
        setService(true)
        setMenudrop(true)
    }

    const menu = <>
        <li onClick={handlehome}><Link href='/'><p className={`bg-white ${home ? 'font-bold' : 'font-normal'}`}>Home</p></Link></li>
        <li onClick={() => {
            handledropdown()
            handleservice()
        }}>
            <p className={`bg-white ${service ? 'font-bold' : 'font-normal'}`}>Services</p>
        </li>
        <li onClick={handlecontact}><Link href='/contactUs'><p className={`bg-white ${contact ? 'font-bold' : 'font-normal'}`}>Contact Us</p></Link></li>
        <li onClick={handlejoin}><Link href='/joinUs'><p className={`bg-white ${join ? 'font-bold' : 'font-normal'}`}>Join Us</p></Link></li>
        <li onClick={handleabout}><Link href='/aboutUs'><p className={`bg-white ${about ? 'font-bold' : 'font-normal'}`}>About Us</p></Link></li>
    </>
    return (
        <div className='border-b-2 border-black'>
            <div className="navbar h-[20px] w-full 2xl:w-[100rem] 2xl:mx-auto">
                <Link href="/">
                    <div className='hidden lg:block'>
                        <Image src={RD} alt="" height={58} width={86} />
                    </div>
                </Link>
                <div className="navbar-start lg:hidden -ml-5">
                    <div className="dropdown">
                        <label onClick={()=>setMenudrop(true)} tabIndex="0" className="btn btn-ghost">
                            <CgMenuLeft className='text-4xl' />
                        </label>
                        <ul tabIndex="0" className={`menu menu-compact ${menudrop ? 'dropdown-content' : 'hidden'} mt-3 p-2 shadow
                     rounded-md w-52 bg-white`}>
                            {menu}
                            <div className='flex ml-3 mt-2 space-x-3 text-2xl'>
                                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ravendise_official/"><AiOutlineInstagram className='hover:cursor-pointer' /></a>
                                <a target="_blank" rel="noreferrer" href="https://discord.gg/Z2F4uPHngD"><FaDiscord className='hover:cursor-pointer' /></a>
                                <a target="_blank" rel="noreferrer" href="https://youtube.com/channel/UC02Leyeh-kCL-OcnP4vGV1g"><AiFillYoutube className='hover:cursor-pointer' /></a>
                                <a target="_blank" rel="noreferrer" href="https://twitter.com/RavendiseStudio"><FaTwitter className='hover:cursor-pointer' /></a>
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/ravendise/"><AiFillLinkedin className='hover:cursor-pointer' /></a>
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
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ravendise_official/"><AiOutlineInstagram className='hover:cursor-pointer' /></a>
                        <a target="_blank" rel="noreferrer" href="https://discord.gg/Z2F4uPHngD"><FaDiscord className='hover:cursor-pointer' /></a>
                        <a target="_blank" rel="noreferrer" href="https://youtube.com/channel/UC02Leyeh-kCL-OcnP4vGV1g"><AiFillYoutube className='hover:cursor-pointer' /></a>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/RavendiseStudio"><FaTwitter className='hover:cursor-pointer' /></a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/ravendise/"><AiFillLinkedin className='hover:cursor-pointer' /></a>
                    </div>
                </div>
            </div>
            {servicedrop && <div onMouseLeave={handledropdown} className="bg-white rounded-md mt-1 absolute top-[59px] left-32 z-50 flex flex-col space-y-2">
                <div onClick={handledropdown} className='rounded-md px-2 shadow-[2px_4px_15px_0_rgba(0,0,0,0.15)] hover:cursor-pointer hover:bg-black hover:text-white'><Link href={{pathname:'/services',query:{keyword:'0'}}}><p className='text-base uppercase'>Quality assurance</p></Link></div>
                <div onClick={handledropdown} className='rounded-md px-2 shadow-[2px_4px_15px_0_rgba(0,0,0,0.15)] hover:cursor-pointer hover:bg-black hover:text-white'><Link href={{pathname:'/services',query:{keyword:'2'}}}><p className='text-base uppercase'>3D ART</p></Link></div>
                <div onClick={handledropdown} className='rounded-md px-2 shadow-[2px_4px_15px_0_rgba(0,0,0,0.15)] hover:cursor-pointer hover:bg-black hover:text-white'><Link href={{pathname:'/services',query:{keyword:'1'}}}><p className='text-base uppercase'>2D ART</p></Link></div>
                <div onClick={handledropdown} className='rounded-md px-2 shadow-[2px_4px_15px_0_rgba(0,0,0,0.15)] hover:cursor-pointer hover:bg-black hover:text-white'><Link href={{pathname:'/services',query:{keyword:'4'}}}><p className='text-base uppercase'>SOFTWARE DEVELOPMENT</p></Link></div>
                <div onClick={handledropdown} className='rounded-md px-2 shadow-[2px_4px_15px_0_rgba(0,0,0,0.15)] hover:cursor-pointer hover:bg-black hover:text-white'><Link href={{pathname:'/services',query:{keyword:'3'}}}><p className='text-base uppercase'>Graphic Design</p></Link></div>
                <div onClick={handledropdown} className='rounded-md px-2 shadow-[2px_4px_15px_0_rgba(0,0,0,0.15)] hover:cursor-pointer hover:bg-black hover:text-white'><p className='text-base uppercase flex justify-center'><IoIosArrowUp /></p></div>
            </div>}
        </div>

    );
};

export default Navbar;