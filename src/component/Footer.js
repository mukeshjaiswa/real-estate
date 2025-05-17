import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll';

import { abouticon,contacticon,latest } from '../section/PropertiesData'




export default function Footer() {
    return (
        <>
        <footer className='bg-gray-800 w-full m-auto md:px-20 px-10 py-10 grid md:grid-cols-3 grid-cols-1 justify-center items-start md:gap-20 gap-10 '>
            <div className='flex flex-col justify-center items-start gap-5'>
                <h1 className='text-white text-2xl font-seminbold'>About us</h1>
                <p className='text-slate-200 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt id voluptates in, odit facere quibusdam explicabo! Quisquam, eligendi? Nesciunt, totam!</p>
                <div id='icons' className='flex  justify-start items-center gap-4 mt-4 '>
                    {abouticon.map((item,index) => (
                        <div key={index} className='p-3 rounded-xl bg-white hover:text-white hover:bg-red-600 '>
                            <item.icon className='size-4' />
                        </div>
                    ))}


                </div>
                <h1 className='text-white mt-8'>Copyright Real Estate, All Rights Reserved</h1>
            </div>
            <div className='flex flex-col justify-center items-start gap-5'>
                <h1 className='text-white text-2xl font-semibold '>Contact Us</h1>
                {contacticon.map((cont, index) => (
                    <div key={index} className='flex justify-center items-center gap-3'>
                        <cont.icon className='text-white size-5' />
                        <p className='text-slate-200'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                ))}


            </div>
            <div className='flex flex-col justify-center items-start gap-5'>
                <h1 className='text-white text-2xl font-semibold'>Latest Properties</h1>
                {latest.map((item, index) => (
                    <div key={index} className='flex justify-center items-start gap-3'>
                        <img src={item.image} alt='' className='w-[120px] rounded-xl cursor-pointer' />
                        <div className='flex flex-col justify-center items-start'>
                            <h1 className='text-lg text-white'>{item.name}</h1>
                            <p className='text-slate-300'> {item.price}</p>
                        </div>
                    </div>
                ))}



            </div>


        </footer>
        <div className='bg-red-600 rounded-full fixed p-4 hover:bg-black cursor-pointer right-6 bottom-6 md:bottom-12'>
        <Link to="hero" spy={true} offset={-100} smooth={true}>

         <FaArrowUp  className='size-5 text-white'/> 
        </Link>

        </div>
        </>

    )
}
