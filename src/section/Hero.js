import React from 'react'
import hero from '../assets/images/hero1.webp'

export default function Hero() {

    return (
        <>

            <div id='hero' name='hero' className='w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:pz-28 px-10 gap-7 z-20 ' style={{ backgroundImage: `url(${hero})` }}>
                <h1 data-aos='zoom-in' className='text-4xl text-white font-semibold lg-pr-[500px] pr-0 lg-leading-[70px] leading-[60px]'>Find your next home in Las Vegas</h1>
                <p data-aos='zoom-in' className='text-white text-xl lg-pr-[500px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime assumenda reprehenderit minima ex inventore, optio distinctio dignissimos accusamus id non?</p>
            </div>

            <div className='z-1 flex justify-center items-center mt-[-40px]  w-full'>
               <div className='w-full md:w-[80%] bg-white grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-6 p-8 rounded-xl mt-1' data-aos='zoom-in'>

                    <div className='w-full'>
                        <h1 className='text-black font-semibold '> LOCATION</h1>
                        <input type="text" placeholder='Enter an adddress, city and state' className='bg-white p-2 w-full rounded-md mt-2 border-b-[1px] border-[#c9c7c1] outline-none' />
                    </div>
                    <div className='w-full'>
                        <h1 className='text-black font-semibold '> TYPE</h1>
                        <select name="selectoption" id="selectoption" className='text-gray-500  rounded-md  text-md bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1] outline-none' >
                            <option value='' disabled selected>Select Property</option>
                            <option value="">Rentals</option>
                            <option value="">sales</option>
                            <option value="">Commercial</option>
                        </select>
                    </div>
                    <div className='w-full'>
                        <h1 className='text-black font-semibold '> Category</h1>
                        <select name="selectoption" id="selectoption" className='text-gray-500  rounded-md text-md bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1] outline-none' >
                            <option value='' disabled selected> Property Category</option>
                            <option value="">Apartment</option>
                            <option value="">Dulpes</option>
                            <option value="">Condos</option>
                        </select>
                    </div>
                    <div className='w-full'>
                        <button className='text-white p-2 md:mt-7 text-xl w-full rounded-xl font-semibold hover:text-white bg-red-500 hover:bg-black  '>Submit</button>
                    </div>

                </div>
            </div>
        </>
    )
}
