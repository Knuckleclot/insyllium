import React, { useState } from 'react'
import { herobgimage } from '../assets';
import { AiFillClockCircle, AiFillStar, AiOutlineArrowRight, AiOutlineTeam } from 'react-icons/ai';
import Lottie from 'lottie-react';
import animation from '../assets/webdevanimation.json'
import heroanimation from '../assets/insyllium_icon.json'

const heroFeatures = [
  {
    icon: <AiFillStar size={20} className='text-[#e9e8e8]'/>,
    name: 'Top 1% IT Talent',
  },
  {
    icon: <AiFillClockCircle size={20} className='text-[#e9e8e8]'/>,
    name: 'Timezone Aligned',
  },
  {
    icon: <AiOutlineTeam size={20} className='text-[#e9e8e8]'/>,
    name: 'Experienced Team',
  },
];

const Hero = () => {   
  return (
    <div className='flex flex-col-reverse sm:flex-row relative'>
      {/* <div className='flex-1'>
        <img src={herobgimage} alt="" className='object-contain'/>
      </div> */}
        <div className='flex-1 z-[5] items-start flex flex-col justify-start pt-12 gap-4'>
            <p className='font-poppins font-medium text-lg text-[#e9e8e8] sm:text-3xl sm:font-bold'>
            Welcome to Insyllium, your digital catalyst for accelerated innovation through creative talent solutions.
            </p>
            <p className='font-poppins font-normal text-sm mt-6 text-[#979694] sm:text-lg'>
            We help businesses stay ahead by integrating creative excellence into projects.    
            </p>
            <div className='flex items-center gap-4 mt-2'>
              <button onClick={()=>window.location.href='/contact'} className='py-2 px-6 text-white font-poppins text-[17px] bg-[#46a2aa] rounded-lg'>Let's talk</button>
              <div className='flex items-center gap-2'>
              <AiOutlineArrowRight color='white' size={20}/>
              <button onClick={()=>window.location.href='/about'} className='text-white font-poppins text-[17px] border-b border-b-[#46a2aa]'>Learn more</button>
              </div>
            </div>
            <div className='flex items-center flex-wrap justify-center sm:justify-start gap-4 mt-8'>
                {heroFeatures?.map((feature)=>(
                  <div className='flex items-center gap-2'>
                    {feature?.icon}
                    <p className='font-poppins font-normal text-[#e9e8e8] text-sm'>{feature?.name}</p>
                  </div>  
                ))}
            </div>
        </div>
        <div className='flex-1 relative'>
          <div className='turqouise__gradient w-full h-1/2 absolute top-20'/>
            <Lottie animationData={animation} />
        </div>
    </div>
  )
}

export default Hero