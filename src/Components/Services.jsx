import React from 'react'
import { nodelogo } from '../assets'

const Services = () => {
  return (
    <div className='mt-10 flex flex-col '>
      <h1 className='font-poppins text-[30px] leading-2 text-black text-center'>what we do!</h1>
        <div className='flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3'>
          <div className='flex flex-col flex-1 items-center gap-4'>
            <img src={nodelogo} alt="" className='object-contain w-[50px] h-[50px]'/>
            <h3 className='font-poppins font-semibold text-[20px] text-black text-center'>Web Development</h3>
            <p className='font-poppins font-normal text-[16px] text-gray-500 text-center max-w-[90%]'>We develop web applications that are responsive, intuitive, highly scalable, and can function online or offline as progressive web apps.</p>
          </div>
          <div className='flex flex-col flex-1 items-center gap-4'>
            <img src={nodelogo} alt="" className='object-contain w-[50px] h-[50px]'/>
            <h3 className='font-poppins font-semibold text-[20px] text-black text-center'>Web Development</h3>
            <p className='font-poppins font-normal text-[16px] text-gray-500 text-center max-w-[90%]'>We develop web applications that are responsive, intuitive, highly scalable, and can function online or offline as progressive web apps.</p>
          </div>
          <div className='flex flex-col flex-1 items-center gap-4'>
            <img src={nodelogo} alt="" className='object-contain w-[50px] h-[50px]'/>
            <h3 className='font-poppins font-semibold text-[20px] text-black text-center'>Web Development</h3>
            <p className='font-poppins font-normal text-[16px] text-gray-500 text-center max-w-[90%]'>We develop web applications that are responsive, intuitive, highly scalable, and can function online or offline as progressive web apps.</p>
          </div>
          <div className='flex flex-col flex-1 items-center gap-4'>
            <img src={nodelogo} alt="" className='object-contain w-[50px] h-[50px]'/>
            <h3 className='font-poppins font-semibold text-[20px] text-black text-center'>Web Development</h3>
            <p className='font-poppins font-normal text-[16px] text-gray-500 text-center max-w-[90%]'>We develop web applications that are responsive, intuitive, highly scalable, and can function online or offline as progressive web apps.</p>
          </div>
          <div className='flex flex-col flex-1 items-center gap-4'>
            <img src={nodelogo} alt="" className='object-contain w-[50px] h-[50px]'/>
            <h3 className='font-poppins font-semibold text-[20px] text-black text-center'>Web Development</h3>
            <p className='font-poppins font-normal text-[16px] text-gray-500 text-center max-w-[90%]'>We develop web applications that are responsive, intuitive, highly scalable, and can function online or offline as progressive web apps.</p>
          </div>
          <div className='flex flex-col flex-1 items-center gap-4'>
            <img src={nodelogo} alt="" className='object-contain w-[50px] h-[50px]'/>
            <h3 className='font-poppins font-semibold text-[20px] text-black text-center'>Web Development</h3>
            <p className='font-poppins font-normal text-[16px] text-gray-500 text-center max-w-[90%]'>We develop web applications that are responsive, intuitive, highly scalable, and can function online or offline as progressive web apps.</p>
          </div>
        </div>
    </div>
  )
}

export default Services