import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaXmark } from 'react-icons/fa6';
import { FaPhoneAlt, FaUserCircle, FaBars } from 'react-icons/fa';
import logo from '../assets/images/logo.png'





export default function Header() {
    const [istoggle, setIstoggle] = useState(false);
    const togglemenu = () => {
        setIstoggle(!istoggle);
    }
    const navItem = [
        {
            link: 'Home', path: 'hero'
        },
        {
            link: 'About', path: 'about'
        },
        {
            link: 'Popular', path: 'populars'
        },
        {
            link: 'Properties', path: 'properties'
        },
        {
            link: 'Servies', path: 'services'
        },
        {
            link: 'Testimonials', path: 'testimonials'
        },
        {
            link: 'Contact', path: 'contact'
        },
    ]

    return (
        <div className='bg-[#f3f3f3] flex justify-between items-center gap-4 lg:px-20  px-4 py-2 sticky top-0 z-20 '>
            <div id='logo'>
                <img src={logo} alt="Company logo " className='lg:w-[150px] w-[120px] cursor-pointer' />
            </div>
            <ul className='lg:flex justify-center items-center gap-3 hidden'>
                {navItem.map(({ link, path }) => (
                    <Link key={path} className='text-black text-[15px] uppercase font-semibold rounded-lg hover:bg-red-600 px-3 py-2  cursor-pointer hover:text-white' to={path} spy={true} offset={-100} smooth={true}
                    >{link}</Link>
                ))}
            </ul>
            <div className='md:flex justify-center items-center gap-4 hidden '>
                <a href="tel:9817361906" className='flex justify-center items-center gap-2'>

                    <FaPhoneAlt className='size-5 text-red-600' />
                    <h1 className='text-xl text-black'>9817361906</h1></a>
                <FaUserCircle className='size-5 hidden md:block cursor-pointer text-red-600' />
            </div>
            <div className='md:hidden'>
                {istoggle ? <FaXmark className='text-black text-2xl ' onClick={togglemenu} /> : <FaBars onClick={togglemenu} className='text-black text-2xl ' />}
            </div>
            <div className={`${istoggle ? 'flex' : 'hidden'} md:hidden w-full h-fit bg-slate-800 text-white p-4 absolute top-[80px] left-0 `}>
                <ul className='flex flex-col justify-center items-center gap-4 w-full'>
                    {navItem.map(({ link, path }) => (
                        <Link key={path} className='text-white text-[25px] uppercase font-semin rounded-lg hover:bg-red-600 px-3 py-2  w-full text-center cursor-pointer hover:text-black' to={path} spy={true} offset={-100} smooth={true} onClick={togglemenu}
                        >{link}</Link>
                    ))}
                </ul>
            </div>

        </div>
    )
}
