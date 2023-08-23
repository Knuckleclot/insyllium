import React from 'react'
import { laptop } from '../assets'
import {GrValidate} from 'react-icons/gr'

const Benefits = () => {
  return (
    <section className='w-full flex flex-col'>
        <div class="inline-flex items-center justify-center w-full">
            <hr class="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
            <span class="absolute px-3 font-normal text-gray-500 -translate-x-1/2 bg-white left-1/2 font-poppins text-[1em]">Features & Benefits</span>
        </div>

        <div className='flex flex-col ss:flex-row flex-wrap my-10'>
            <div className='flex flex-col items-start flex-1 w-full'>
                <h1 className='font-poppins font-semibold text-[1.45em] text-gray-900 tracking-wide'>Features</h1>
                <div className='flex flex-col gap-4 mt-4'>
                    <p className='flex items-center gap-2'><GrValidate  size={20}/> Custom Mobile Applications</p>
                    <p className='flex items-center gap-2'><GrValidate  size={20}/> Innovative Web Applications</p>
                    <p className='flex items-center gap-2'><GrValidate  size={20}/> Intuitive UI/UX Design</p>
                    <p className='flex items-center gap-2'><GrValidate  size={20}/> Streamlined Processes</p>
                    <p className='flex items-center gap-2'><GrValidate  size={20}/> Increased Productivity</p>
                </div>
            </div>
            <div className='flex flex-col items-start flex-1 mt-4 ss:mt-0 w-full'>
                <h1 className='font-poppins font-semibold text-[1.45em] text-gray-900 tracking-wide'>Benefits</h1>
                <div className='flex flex-col gap-4 mt-4'>
                    <p className='flex items-center gap-2'><GrValidate  size={20}/> Improved Efficiency</p>
                    <p className='flex items-center gap-2'><GrValidate  size={20}/> Custom Solutions</p>
                    <p className='flex items-center gap-2'><GrValidate  size={20}/> Time Savings</p>
                    <p className='flex items-center gap-2'><GrValidate  size={20}/> Dedicated Support</p>
                    <p className='flex items-center gap-2'><GrValidate  size={20}/> Competitive Pricing</p>
                </div>
            </div>
            <div className='flex-1 mt-4 hidden sm:block'>
                <img src={laptop} alt="" className='object-contain rounded-[2rem]'/>
            </div>
        </div>

    </section>
  )
}

export default Benefits