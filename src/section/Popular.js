import React from 'react'
import area1 from '../assets/images/area1.jpg'
import area2 from '../assets/images/area2.jpg'
import area3 from '../assets/images/area3.jpg'

export default function Popular() {
  return (
    <section id='populars' className='w-full bg-red-100  h-fit m-auto bg-cover bg-center rounded-xl flex flex-col justify-center items-center md:px-20 px-6 py-20 gap-20'>
    <div id='top' className='w-full grid md:grid-cols-3 grid-cols-1 justify-center items-center gap-8'>

        <div className='flex flex-col items-center justity-center text-center'>
            <h1 data-aos='zoom-in' className='text-red-500 '>POPULAR AREAS</h1>
            <h1 data-aos='zoom-in' className='text-black text-[40px] font-semibold leading-10 mt-4'>Explore more<br></br>popular areas</h1>
        </div>
        <div className='grid md:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6'>
            <div data-aos='zoom-in' data-aos-delay='400' style={{backgroundImage:`url(${area1})`}} className='h-[400px] bg-cover bg-center rounded-xl  '></div>

            <div data-aos='zoom-in' data-aos-delay='400' style={{backgroundImage:`url(${area2})`}} className='h-[400px] bg-cover bg-center rounded-xl  '></div>
            <div data-aos='zoom-in' data-aos-delay='400' style={{backgroundImage:`url(${area3})`}} className='h-[400px] bg-cover bg-center rounded-xl  '></div>
        </div>

    </div>
    <div id='bottom' className='w-full grid md:grid-cols-3 grid-cols-1 md:justify-start justify-center items-cetnter gap-6'>
        <div  data-aos-delay='200'  className='flex justify-center items-center gap-8 w-full'>
            <h1 className='text-black text-5xl font-semibold '>5K</h1>
            <h1 className=''>Active<br></br> Listings</h1>
        </div>
        <div  data-aos='' data-aos-delay='200'  className='flex md:justify-center justify-center items-center gap-8 w-full'>
            <h1 className='text-black text-5xl font-semibold '>5K</h1>
            <h1 className=''>Active<br></br> Listings</h1>
        </div>
        <div  data-aos-delay='200'  className='flex md:justify-center justify-center items-center gap-8 w-full'>
            <h1 className='text-black text-5xl font-semibold '>5K</h1>
            <h1 className=''>Active<br></br> Listings</h1>
        </div>
    </div>

</section>
  )
}
