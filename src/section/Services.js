import React from 'react'
import { service } from './PropertiesData'

export default function Services() {
    return (
        <div className='bg-red-100  w-full md:w-[95%] h-fit m-auto flex flex-col justify-center items-start md:px-20 px-6 py-20 gap-10'>
            <div className='flex flex-col justify-center items-start gap-4'>
                <h1 data-aos='zoom-in' className='text-red-500 '>Our services</h1>
                <h1 data-aos='zoom-in' className='text-black text-[40px] font-semibold leading-10'>Top real estate <br />Services available</h1>

            </div>
                <div id='serach-box' className='grid md:grid-cols-3 grid-cols-1 justify-center items-center gap-8'>
                {service.map((s,index) => (
            <div id='services'  data-aos='zoom-in' key={index} className='px-8 py-6 flex flex-col  justify-center items-start  cursor-pointer rounded-lg hover:bg-red-300 border-b-[5px] border-red-600     gap-8'>
                        <div className='p-6 rounded-full bg-red-200 '>
                            <s.image className='text-red-600 size-10 cursor-pointer'/>
                        </div>
                        <h3 className='text-black text-[22px] font-semibold'>{s.title}</h3>
                        <p className='text-lg text-slate-700'>{s.desc}</p>
                        <button className='border-b-2 border-red-600 text-red-600 font-semibold '>Read More</button>
             </div>
             
             ))}
             </div>
        </div>
    )
}
