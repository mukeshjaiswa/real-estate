import React from 'react'
import aboutimg from '../assets/images/about.jpg'

export default function About() {
  return (
    <section id='about' className='w-[95%] m-auto lg-px-40 py-20 grid md:grid-cols-2 grid-cols-1  justify-center items-ceter gap-10'
    >
      <div>
        <img src={aboutimg} alt='' data-aos='zoom-in' className='rounded-2xl md:w-[500px] mf:h-[600px] ' />
      </div>
      <div className='flex flex-col justify-center items-start gap-8'>
        <h1 data-aos="zoom-in" className='text-red-500 '>Who We Are.</h1>
        <h1 data-aos='zoom-in' data-aos-delay='200' className='text-blac text-[40px] font-semibold leadinf-10 '>Lorem ipsum dolor sit amet.</h1>
        <p data-aos='zoom-in' data-aos-delay='400' className='text-gray-600 text-justify '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati esse numquam corporis recusandae. Amet, corporis quam esse expedita libero facilis!</p>
        <button className='text-white p-3  text-xl  rounded-xl font-semibold hover:text-white bg-red-500 hover:bg-black  '>Read More</button>
      </div>

    </section>
  )
}
