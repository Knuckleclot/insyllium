import React from 'react'
import { nodelogo, reactlogo } from '../assets'

const TechStack = () => {
  return (
    <div className='flex flex-wrap w-full mt-0 sm:mt-20'>
        <div className='flex-1 justify-center flex'>
            <img src={reactlogo} alt="" className='object-contain w-[50%] h-[50%]'/>
        </div>
        <div className='flex-1 justify-center flex'>
            <img src={reactlogo} alt="" className='object-contain w-[50%] h-[50%]'/>
        </div>
        <div className='flex-1 justify-center flex'>
            <img src={reactlogo} alt="" className='object-contain w-[50%] h-[50%]'/>
        </div>
    </div> 
  )
}

export default TechStack