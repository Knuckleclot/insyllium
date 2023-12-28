import React from 'react'
import { aboutus } from '../assets'
import { AiOutlineCheck } from 'react-icons/ai'

const aboutUsFeatures = ['Expertise',
    'Customization',
    'Innovation',
    'Quality Assurance']

const AboutUs = () => {
  return (
    <section id='about' className='w-full bg-[#262836] rounded-[2rem] flex flex-col gap-4 sm:my-20 my-10 p-10 sm:p-16 relative'>
        <p className='text-gray-300 font-poppins font-medium text-xl uppercase'>who we are</p>
        <p className='text-gray-50 font-poppins font-semibold text-3xl'>Empowering Futures through Software Solutions.</p>
        <div className='flex items-start flex-col md:flex-row justify-between gap-8 mt-4'>
            <img src={aboutus} alt="" className='w-full md:w-1/2 h-full object-cover rounded-[2rem]'/>
           <div className='flex flex-col gap-4'>
           <div className='flex-1 flex flex-col gap-8'>
                <p className='font-poppins font-white text-xl font-normal text-white'>At <span className='text-[#46a2aa]'>Insyllium</span>, we're not just developers; we're partners in your success. With a focus on customization, innovation, and quality, we turn ideas into powerful software solutions.</p>
                <div className='flex flex-col gap-2'>
                    {aboutUsFeatures?.map((feature)=>(
                        <div className='flex items-center gap-2'>
                            <AiOutlineCheck className='text-[#46a2aa]' size={25}/>
                            <p className='text-gray-300 font-poppins font-normal text-sm'>{feature}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='relative p-8 bg-[#46a2aa] rounded-2xl gap-8 mt-4 w-full flex flex-col sm:flex-row justify-between'>
                <div className='flex flex-col gap-1 justify-center items-center border-b pb-8 sm:border-r sm:border-b-0 sm:pr-8 sm:pb-0'>
                    <p className="font-poppins font-medium text-xl text-white">20+</p>
                    <p className="font-poppins font-medium text-lg text-gray-100 text-center">Projects Completed</p>
                </div>
                <div className='flex flex-col gap-1  justify-center items-center border-b pb-8 sm:border-r sm:border-b-0 sm:pr-8 sm:pb-0'>
                    <p className="font-poppins font-medium text-xl text-white">30+</p>
                    <p className="font-poppins font-medium text-lg text-gray-100 text-center">Happy Clients</p>
                </div>
                <div className='flex flex-col gap-1  justify-center items-center'>
                    <p className="font-poppins font-medium text-xl text-white">5+</p>
                    <p className="font-poppins font-medium text-lg text-gray-100 text-center">Countries Served</p>
                </div>
          </div>

           </div>
        </div>
    </section>
  )
}

export default AboutUs