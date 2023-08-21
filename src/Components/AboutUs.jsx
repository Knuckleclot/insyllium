import React from 'react'
import { aboutus } from '../assets'

const AboutUs = () => {
  return (
    <section className='w-full flex flex-col-reverse sm:flex-row gap-4 sm:my-20 my-10'>
        <div className='flex-1 flex justify-center items-center'>
            <img src={aboutus} alt="aboutusimg" className='object-cover h-full w-full rounded-[2rem]'/>
        </div>
        <div className='flex flex-col flex-1'>
    <div className="flex-1 flex flex-col gap-4 py-8">
        <p className='font-poppins font-normal text-[16px] text-gray-500 uppercase'>about us</p>
        <h2 className='font-poppins font-semibold text-[24px] text-black'>Turning Ideas into Reality</h2>
        <p className='font-poppins font-normal text-[16px] text-gray-500'>
            In this digital age, developing a successful corporate empire requires meaningful connections. Our team creates user-focused websites and mobile applications that enhance your market competitiveness.
        </p>
        <button className='bg-primary hover:bg-blue-500 transition-all duration-200 ease-in px-8 py-3 rounded-3xl border-none cursor-pointer text-[1em] uppercase text-white font-poppins font-normal w-full md:w-[50%]'>
            More about us
        </button>
    </div>
    <div className="flex-1 border border-gray-300 rounded-xl flex justify-center items-center mt-8">
        <div className='grid grid-cols-2 gap-8 p-8'>
            <div className='flex flex-col items-center'>
                <h1 className='font-poppins font-bold text-[34px] text-black'>5+</h1>
                <p className='font-poppins font-normal text-gray-400 text-[16px] text-center md:text-left'>Years of Experience</p>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='font-poppins font-bold text-[34px] text-black'>50+</h1>
                <p className='font-poppins font-normal text-gray-400 text-[16px] text-center md:text-left'>Projects Completed</p>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='font-poppins font-bold text-[34px] text-black'>100%</h1>
                <p className='font-poppins font-normal text-gray-400 text-[16px] text-center md:text-left'>Client Satisfaction</p>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='font-poppins font-bold text-[34px] text-black'>15+</h1>
                <p className='font-poppins font-normal text-gray-400 text-[16px] text-center md:text-left'>Professionals</p>
            </div> 
        </div>
    </div>
</div>

        
    </section>
  )
}

export default AboutUs