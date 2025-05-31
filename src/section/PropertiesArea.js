import React from 'react'
import { property } from './PropertiesData'
import { FaBath, FaShareAlt, FaBed, FaUserCircle,FaHeart, FaPlus , FaMapMarkerAlt, FaVideo, FaCamera } from 'react-icons/fa'
import { MdSpaceDashboard } from "react-icons/md";



export default function PropertiesArea() {
    
    return (
        <section id='properties' className='md:w-[90%] m-auto mg:px-20 px-6 py-20 w-full flex flex-col justify-center items-center gap-10'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <h1 data-aos='zoom-in' className='text-red-500 '>Properties</h1>
                <h1 data-aos='zoom-in' className='text-black font-semibold text-4xl'>Explore the latest </h1>
            </div>
            <div id='grid-box' className='w-full grid  md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8'>
                {property.map((item, index) => (
                    <div data-aos='zoom-in' data-aos-delay='200' key={index} className="bg-white rounded-xl w-full ">
                        <div id='image-box' className='bg-cover bg-center h-[250px] rounded-t-lg flex flex-col justify-between p-4 items-end ' style={{ backgroundImage: `url(${item.image})` }}>
                            <div id='top' className='flex justify-between items-center w-full'>
                                <div>
                                    <button className='text-white px-3 py-1 bg-red-600 hover:bg-white hover:text-black rounded-full text-[13px]'>Feature</button>
                                </div>
                                <div className='flex justify-between items-center gap-3'>
                                    <button className='text-white px-3 py-1 bg-red-600 hover:bg-white hover:text-black rounded-full text-[13px]'>Sales</button>
                                    <button className='text-white px-3 py-1 bg-red-600 hover:bg-white hover:text-black rounded-full text-[13px]'>Active</button>
                                </div>
                            </div>
                            <div id='bottom' className='flex justify-between items-end w-full '>
                                <div className='flex justify-start items-center gap-3 md:gap-2 lg:gap-1'>

                                    <FaMapMarkerAlt className='size-4 lg:size-3 text-white' />
                                    <h1 className='text-white lg:text-sm text-md'>{item.address}</h1>
                                </div>
                                <div className='flex justify-center items-center gap-3 md:gap-2 lg:gap-3'>
                                    <FaVideo className='text-white text-xl' />
                                    <FaCamera className='text-white text-xl' />
                                </div>

                            </div>

                        </div>
                        <div className='px-6 py-3 flex  flex-col justify-center items-start gap-3'>
                            <h1 className='text-xl font-semibold '>{item.name}</h1>
                            <h1 className='text-2xl font-bold text-red-600'>{item.price}</h1>
                            <p>{item.about}</p>

                            <div id='icon' className='flex justify-center items-start gap-3'>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaBath  className='text-red-400 text-2xl'/>
                                    <h1>{item.bath}</h1>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaBed  className='text-red-400 text-2xl'/>
                                    <h1>{item.bed}</h1>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <MdSpaceDashboard className='text-red-400 text-2xl'/>
                                    <h1>{item.area}</h1>
                                </div>
                            </div>
                            <div className='w-full h-[1px] bg-gray-200 mt-8'></div>
                            <div className='flex justify-between w-full mt-3 items-center gap-2'>
                                <div className='flex justify-center items-center  gap-2'>
                                    <FaUserCircle className='text-red-400 text-2xl'/>
                                    <h1>{item.owner}</h1>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <div className='p-2 border-2 border-gray-200 hover:bg-black'>
                                        <FaShareAlt className='text-red-400 size-4 hover:text-white'/>
                                    </div>
                                    <div className='p-2 border-2 border-gray-200 hover:bg-black'>
                                        <FaHeart className='text-red-400 size-4 hover:text-red-700'/>
                                    </div>
                                    <div className='p-2 border-2 border-gray-200 hover:bg-black'>
                                        <FaPlus  className='text-red-400 size-4 hover:text-white'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
             {/* <button className='border-b-2 border-red-600 text-red-600 font-semibold '>Read More</button> */}
        </section>
    )
}

