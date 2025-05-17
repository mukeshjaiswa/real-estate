import React from 'react'

export default function Contact() {
  return (
    <div id='contact' className='bg-red-100  w-full md:w-[95%] h-fit m-auto grid grid-cols-1 md:grid-cols-2 justify-center items-start md:px-36 px-6 py-20 gap-10'>
      <div data-aos='zoom-in' className=' w-full flex flex-col bg-white justify-center  items-start px-6 py-5 gap-4 rounded-md'>
        <h1 data-aos='zoom-in' className='text-2xl font-semibold text-black '>Send us  a message today</h1>
        <input type='text' placeholder='Enter your full name here' className=' w-full outline-none px-4 py-3 border-2 border-gray-100 rounded-xl' />
        <input type='email' placeholder='Enter your  valid email' className=' w-full outline-none px-4 py-3 border-2 border-gray-100 rounded-xl' />
        <input type='number' placeholder='Enter your mobile number' className=' w-full outline-none px-4 py-3 border-2 border-gray-100 rounded-xl' />
        <textarea type='text' rows={6} cols={6} placeholder='Enter your message here..' className=' w-full outline-none px-4 py-3 border-2 border-gray-100 rounded-xl' />
        <button className=' w-full text-white p-3  text-xl  rounded-xl font-semibold hover:text-white bg-red-500 hover:bg-black  '>Submit</button>


      </div>
      <div data-aos='zoom-in' className='flex flex-col justify-center items-start gap-4'>
                <h1 data-aos='zoom-in' className='text-red-500 '>Reach us</h1>
                <h1 data-aos='zoom-in' className='text-black text-[50px] font-semibold tracking-widest  leading-10'>Get in touch <br/>with us today <br/> and our team <br/> will assist you</h1>
                <p className='text-justify text-xl tracking-wide text-gray-500 '>Our experts and developers would love to contribute their expertise and insights and help you today. Contact us to help you plan your next transaction, either buying or selling a home.</p>
                <button className='  text-white px-10 mt-10 py-3  text-xl  rounded-xl font-semibold hover:text-white bg-red-500 hover:bg-black  '>Contact us</button>
            </div>
    </div>
  )
}
