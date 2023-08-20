import React from 'react'
import { aboutus } from '../assets'

const AboutUs = () => {
  return (
    <section className='w-full flex flex-col-reverse sm:flex-row gap-4 sm:my-20 my-10'>
        <div className='flex-1 flex justify-center items-center'>
            <img src={aboutus} alt="aboutusimg" className='object-cover h-full w-full rounded-[2rem]'/>
        </div>
        <div className='flex flex-col flex-1'>
            <div className="flex-1 flex flex-col gap-4">
                <p className='font-poppins font-normal text-[16px] uppercase text-gray-500'>about us</p>
                <p className='font-poppins font-semibold text-[20px] text-black'>The team will turn your ideas into reality</p>
                <p className='font-poppins font-normal text-[16px] text-gray-500'>We feel that in this digital age, connection is required to develop a succesfull corporate empire. Having user-focused websites or mobile applications that are simple to use can increase your market competetiveness.</p>
                <button className='bg-primary transition-all duration-200 ease-in hover:bg-blue-500 px-8 py-3 rounded-3xl border-none cursor-pointer text-[1em] uppercase text-white font-poppins font-normal w-full sm:w-[50%]'>More about us</button>
            </div>
            <div className="flex-1 border border-gray-300 rounded-xl flex justify-center items-center mt-8">
                <div className='grid grid-cols-2'>
                    <div className='flex flex-col p-8 items-center'>
                        <h1 className='font-poppins font-bold text-[34px] text-black'>5+</h1>
                        <p className='font-poppins font-normal text-gray-400 text-[16px] text-center sm:text-left'>Years experience</p>
                    </div>
                    <div className='flex flex-col p-8 items-center'>
                        <h1 className='font-poppins font-bold text-[34px] text-black'>50+</h1>
                        <p className='font-poppins font-normal text-gray-400 text-[16px] text-center sm:text-left'>Projects completed</p>
                    </div>
                    <div className='flex flex-col p-8 items-center'>
                        <h1 className='font-poppins font-bold text-[34px] text-black'>100%</h1>
                        <p className='font-poppins font-normal text-gray-400 text-[16px] text-center sm:text-left'>Client satisfaction</p>
                    </div>
                    <div className='flex flex-col p-8 items-center'>
                        <h1 className='font-poppins font-bold text-[34px] text-black'>15+</h1>
                        <p className='font-poppins font-normal text-gray-400 text-[16px] text-center sm:text-left'>Professionals</p>
                    </div> 
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default AboutUs