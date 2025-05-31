import React from 'react'
import { FaStar } from 'react-icons/fa'
import { client } from './PropertiesData'

export default function Clients() {
    return (
        <div id='testimonials' className='  w-full md:w-[95%] h-fit m-auto flex flex-col justify-center items-start md:px-20 px-6 py-20 gap-10'>
            <div className='flex flex-col justify-center items-start gap-4'>
                <h1 data-aos='zoom-in' className='text-red-500 '>Our Clients</h1>
                <h1 data-aos='zoom-in' className='text-black text-[40px] font-semibold leading-10'>What your client <br />Say about us</h1>

            </div>
            <div  className='grid md:w-full md:grid-cols-3 grid-cols-1 justify-center items-center  gap-3'>
                {client.map((c, index) => (
                    <div id='testimonial-box' data-aos='zoom-in' key={index} className=' w-full bg-white p-12 flex flex-col  justify-center items-start  cursor-pointer rounded-lg hover:bg-red-100    gap-8'>
                        <div className='flex justify-start items-center w-full gap-4 '>
                            <img src={c.image} alt='clientimg' className='w-[70px] ' />
                            <div className='flex flex-col justify-center items-start gap-1'>
                                <h1 className='text-xl text-black font-semibold whitespace-nowrap '>{c.name}</h1>
                                <h1 className='text-xl text-slate-600 font-semibold whitespace-nowrap'>{c.para}</h1>
                            </div>

                        </div>
                        <p className='text-md text-justify text-slate-600'>{c.desc}</p>
                   <div className='flex justify-start items-start gap-2 w0full'>
                       <FaStar className='size-4 text-yellow-400'/>
                       <FaStar className='size-4 text-yellow-400'/>
                       <FaStar className='size-4 text-yellow-400'/>
                       <FaStar className='size-4 text-yellow-400'/>
                       <FaStar className='size-4 text-yellow-400'/>
                   </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
