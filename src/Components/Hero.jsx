import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect';
import styles from '../style';
import Lottie from 'lottie-react'
import animation from '../assets/webdevanimation.json'

const Hero = () => {   
  return (
    <div className='flex flex-col sm:flex-row'>
        <div className='flex-1 items-start flex flex-col justify-center'>
            <h1 className='font-poppins font-semibold ss:text-[52px] text-[42px] text-white'>Coding your{" "}<br className='md:block hidden'
            />
                <span className='text-white'><Typewriter
                options={{      
                    strings: ['Vision', 'Ideas', 'Future','Success','Experience','Dreams'],
                    autoStart: true,
                    loop: true,
                    wrapperClassName:'text-white'
                }}
                />
                </span> 
                </h1>
                <motion.p className={`${styles.paragraph} max-w-[470px] mt-5 opacity-100 transition-opacity duration-500 mb-6`}
                    initial={{
                        y:-100,
                        opacity:0,
                    }}
                    whileInView={{
                        y:0,
                        opacity:1,
                        transition:{
                        delay:0.25,
                        },
                    }}
                    viewport={{
                        once:true,
                    }}
                >Empowering businesses to thrive in today's digital realm through our ingenious solutions is our driving force.
                </motion.p>
                <button className='bg-cyan-500 px-8 py-3 rounded-3xl border-none cursor-pointer text-[1em] uppercase text-white font-poppins font-normal'>
                    Get Started
                </button>
        </div>
        <div className='flex-1'>
            {/* <h1>hello</h1> */}
            <Lottie animationData={animation}/>
        </div>
    </div>
  )
}

export default Hero