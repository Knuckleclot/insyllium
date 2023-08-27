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
            <motion.h1 className='font-poppins font-semibold ss:text-[52px] text-[42px] text-white'
             initial={{
                opacity:0,
                y:100,
               }}
               whileInView={{
                opacity:1,
                y:0,
                transition:{
                  delay:0.15,
                  duration:0.50,
                }
               }}
               viewport={{
                once:true,
               }}>Coding your{" "} <br className='md:block hidden'/>
                <span className='text-white sm:text-secondary xl:text-white'><Typewriter
                options={{      
                    strings: ['Vision', 'Ideas', 'Future','Success','Experience','Dreams'],
                    autoStart: true,
                    loop: true,
                }}
                
                />
                </span> 
                </motion.h1>
                <motion.p className={`${styles.paragraph} max-w-[470px] mt-5 opacity-100 transition-opacity duration-500 mb-6 sm:text-black xl:text-dimWhite`}
                    initial={{
                        y:100,
                        opacity:0,
                    }}
                    whileInView={{
                        y:0,
                        opacity:1,
                        transition:{
                        delay:0.35,
                        duration:0.50,
                        },
                    }}
                    viewport={{
                        once:true,
                    }}
                >Empowering businesses to thrive in today's digital realm through our ingenious solutions is our driving force.
                </motion.p>
                <motion.button className='bg-primary transition-all duration-200 ease-in hover:bg-blue-500 px-8 py-3 rounded-3xl border-none cursor-pointer text-[1em] uppercase text-white font-poppins font-normal'
                  initial={{
                    opacity:0,
                    y:100,
                   }}
                   whileInView={{
                     y:0,
                     opacity:100,
                      transition:{
                      delay:0.35,
                      duration:0.50,
                    }
                   }}
                   viewport={{
                    once:true,
                   }}
                   onClick={()=>{
                    window.location.href='#consultation'
                   }}
                >
                    Get Started
                </motion.button>
        </div>
        <div className='flex-1'>
            {/* <h1>hello</h1> */}
            <Lottie animationData={animation}/>
        </div>
    </div>
  )
}

export default Hero