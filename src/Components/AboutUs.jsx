import React from 'react'
import { aboutus } from '../assets'
import {motion} from 'framer-motion'

const AboutUs = () => {
  return (
    <section id='about' className='w-full flex flex-col-reverse sm:flex-row gap-12 sm:my-20 my-10'>
        <div className='flex-1 flex justify-center items-center'>
            <motion.img src={aboutus} alt="aboutusimg" className='object-cover h-full w-full shadow-xl rounded-[2rem]'
            initial={{
                opacity:0,
                y:200, 
            }}
            whileInView={{
                opacity:1,
                y:0,
                transition:{
                    delay:0.30,
                    duration:0.50,
                }
            }}
            viewport={{
                once:true,
            }}/>
        </div>
        <div className='flex flex-col flex-1'>
    <div className="flex-1 flex flex-col gap-4 py-8">
        <motion.p className='font-poppins font-normal text-[16px] text-gray-500 uppercase'
        initial={{
            opacity:0,
            y:200,
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
        }}>about us</motion.p>
        <motion.h2 className='font-poppins font-semibold text-[24px] text-black'
        initial={{
            opacity:0,
            y:200,
        }}
        whileInView={{
            opacity:1,
            y:0,
            transition:{
                delay:0.30,
                duration:0.50,
            }
        }}
        viewport={{
            once:true,
        }}>Turning Ideas into Reality</motion.h2>
        <motion.p className='font-poppins font-normal text-[16px] text-gray-500'
        initial={{
            opacity:0,
            y:200,
        }}
        whileInView={{
            opacity:1,
            y:0,
            transition:{
                delay:0.40,
                duration:0.50,
            }
        }}
        viewport={{
            once:true,
        }}>
            In this digital age, developing a successful corporate empire requires meaningful connections. Our team creates user-focused websites and mobile applications that enhance your market competitiveness.
        </motion.p>
        <motion.button className='bg-primary hover:bg-blue-500 transition-all duration-200 ease-in px-8 py-3 rounded-3xl border-none cursor-pointer text-[1em] uppercase text-white font-poppins font-normal w-full md:w-[50%]'
        initial={{
            opacity:0,
            y:70,
        }}
        whileInView={{
            opacity:1,
            y:0,
            transition:{
                delay:0.50,
                duration:0.50,
            }
        }}
        viewport={{
            once:true,
        }}
        onClick={()=>{
            window.location.href='/about'
        }}>
            More about us
        </motion.button>
    </div>
    <div className="flex-1 border border-gray-300 rounded-xl flex justify-center items-center mt-8">
        <div className='grid grid-cols-2 gap-8 p-8'>
            <motion.div className='flex flex-col items-center'
            initial={{
                opacity:0,
            }}
            whileInView={{
                opacity:1,
                transition:{
                    delay:0.25,
                    duration:0.50,
                }
            }}
            viewport={{
                once:true,
            }}>
                <h1 className='font-poppins font-bold text-[34px] text-black'>5+</h1>
                <p className='font-poppins font-normal text-gray-400 text-[16px] text-center md:text-left'>Years of Experience</p>
            </motion.div>
            <motion.div className='flex flex-col items-center'
            initial={{
                opacity:0,
            }}
            whileInView={{
                opacity:1,
                transition:{
                    delay:0.1,
                    duration:0.50,
                }
            }}
            viewport={{
                once:true,
            }}>
                <h1 className='font-poppins font-bold text-[34px] text-black'>50+</h1>
                <p className='font-poppins font-normal text-gray-400 text-[16px] text-center md:text-left'>Projects Completed</p>
            </motion.div>
            <motion.div className='flex flex-col items-center'
            initial={{
                opacity:0,
            }}
            whileInView={{
                opacity:1,
                transition:{
                    delay:0.2,
                    duration:0.50,
                }
            }}
            viewport={{
                once:true,
            }}>
                <h1 className='font-poppins font-bold text-[34px] text-black'>100%</h1>
                <p className='font-poppins font-normal text-gray-400 text-[16px] text-center md:text-left'>Client Satisfaction</p>
            </motion.div>
            <motion.div className='flex flex-col items-center'
            initial={{
                opacity:0,
            }}
            whileInView={{
                opacity:1,
                transition:{
                    delay:0.40,
                    duration:0.50,
                }
            }}
            viewport={{
                once:true,
            }}>
                <h1 className='font-poppins font-bold text-[34px] text-black'>15+</h1>
                <p className='font-poppins font-normal text-gray-400 text-[16px] text-center md:text-left'>Professionals</p>
            </motion.div> 
        </div>
    </div>
</div>

        
    </section>
  )
}

export default AboutUs