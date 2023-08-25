import React from 'react'
import { laptop } from '../assets'
import {GrValidate} from 'react-icons/gr'
import { motion } from 'framer-motion'

const Benefits = () => {
  return (
    <section className='w-full flex flex-col'>
        <div class="inline-flex items-center justify-center w-full">
            <hr class="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
            <span class="absolute px-3 font-normal text-gray-500 -translate-x-1/2 bg-white left-1/2 font-poppins text-[1em]">Features & Benefits</span>
        </div>

        <div className='flex flex-col ss:flex-row flex-wrap my-10'>
            <div className='flex flex-col items-start flex-1 w-full'>
                <motion.h1 className='font-poppins font-semibold text-[1.45em] text-gray-900 tracking-wide'
                initial={{
                    opacity:0,
                }}
                whileInView={{
                    opacity:1,
                    transition:{
                        delay:0.15,
                        duration:0.35,
                    }
                }}
                viewport={{
                    once:true,
                }}>Features</motion.h1>
                <div className='flex flex-col gap-4 mt-4'>
                    <motion.p className='flex items-center gap-2'
                    initial={{
            opacity:0,
            x:-200,
        }}
        whileInView={{
            opacity:1,
            x:0,
            transition:{
                delay:0.20,
                duration:0.35,
            }
        }}
        viewport={{
            once:true,
        }}><GrValidate  size={20}/> Custom Mobile Applications</motion.p>
                    <motion.p className='flex items-center gap-2'
                    initial={{
            opacity:0,
            x:-200,
        }}
        whileInView={{
            opacity:1,
            x:0,
            transition:{
                delay:0.25,
                duration:0.35,
            }
        }}
        viewport={{
            once:true,
        }}><GrValidate  size={20}/> Innovative Web Applications</motion.p>
                    <motion.p className='flex items-center gap-2'
                    initial={{
            opacity:0,
            x:-200,
        }}
        whileInView={{
            opacity:1,
            x:0,
            transition:{
                delay:0.30,
                duration:0.35,
            }
        }}
        viewport={{
            once:true,
        }}><GrValidate  size={20}/> Intuitive UI/UX Design</motion.p>
                    <motion.p className='flex items-center gap-2'
                    initial={{
            opacity:0,
            x:-200,
        }}
        whileInView={{
            opacity:1,
            x:0,
            transition:{
                delay:0.35,
                duration:0.35,
            }
        }}
        viewport={{
            once:true,
        }}><GrValidate  size={20}/> Streamlined Processes</motion.p>
                    <motion.p className='flex items-center gap-2'
                    initial={{
            opacity:0,
            x:-200,
        }}
        whileInView={{
            opacity:1,
            x:0,
            transition:{
                delay:0.40,
                duration:0.35,
            }
        }}
        viewport={{
            once:true,
        }}><GrValidate  size={20}/> Increased Productivity</motion.p>
                </div>
            </div>
            <div className='flex flex-col items-start flex-1 mt-4 ss:mt-0 w-full'>
                <motion.h1 className='font-poppins font-semibold text-[1.45em] text-gray-900 tracking-wide'
                 initial={{
                    opacity:0,
                }}
                whileInView={{
                    opacity:1,
                    transition:{
                        delay:0.15,
                        duration:0.35,
                    }
                }}
                viewport={{
                    once:true,
                }}>Benefits</motion.h1>
                <div className='flex flex-col gap-4 mt-4'>
                    <motion.p className='flex items-center gap-2'
                    initial={{
            opacity:0,
            x:200,
        }}
        whileInView={{
            opacity:1,
            x:0,
            transition:{
                delay:0.20,
                duration:0.35,
            }
        }}
        viewport={{
            once:true,
        }}><GrValidate  size={20}/> Improved Efficiency</motion.p>
                    <motion.p className='flex items-center gap-2'
                    initial={{
            opacity:0,
            x:200,
        }}
        whileInView={{
            opacity:1,
            x:0,
            transition:{
                delay:0.25,
                duration:0.35,
            }
        }}
        viewport={{
            once:true,
        }}><GrValidate  size={20}/> Custom Solutions</motion.p>
                    <motion.p className='flex items-center gap-2'
                    initial={{
            opacity:0,
            x:200,
        }}
        whileInView={{
            opacity:1,
            x:0,
            transition:{
                delay:0.30,
                duration:0.35,
            }
        }}
        viewport={{
            once:true,
        }}><GrValidate  size={20}/> Time Savings</motion.p>
                    <motion.p className='flex items-center gap-2'
                    initial={{
            opacity:0,
            x:200,
        }}
        whileInView={{
            opacity:1,
            x:0,
            transition:{
                delay:0.35,
                duration:0.35,
            }
        }}
        viewport={{
            once:true,
        }}><GrValidate  size={20}/> Dedicated Support</motion.p>
                    <motion.p className='flex items-center gap-2'
                    initial={{
            opacity:0,
            x:200,
        }}
        whileInView={{
            opacity:1,
            x:0,
            transition:{
                delay:0.40,
                duration:0.35,
            }
        }}
        viewport={{
            once:true,
        }}><GrValidate  size={20}/> Competitive Pricing</motion.p>
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