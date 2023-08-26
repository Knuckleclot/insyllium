import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import styles from '../style'
import { aboutimage} from '../assets'
import {BiSolidQuoteLeft} from 'react-icons/bi'
import { ourTeam } from '../Constants'
import Footer from './Footer'
import { motion } from 'framer-motion'

const About = () => {
    const [navbar,setNavbar] = useState(false)

    const changeNavBackground = ()=> {
        if (window.scrollY >= 80) {
            setNavbar(true)
          } else {
              setNavbar(false)
          }
      }
      
      window.addEventListener('scroll',changeNavBackground)

      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  return (
    <div className={`${styles.flexCenter} flex-col`} >
        <div className={`w-full flex mb-4 fixed top-0 ${navbar?'bg-white':'bg-[#0f172a]'} z-[999] transition-colors duration-200 ease-in`}>
            <Navbar />
        </div>
        <div className={`${styles.boxWidth} mt-4 mb-4 sm:mb-0 sm:mt-20`}> 
            <div className='flex flex-col sm:flex-row w-full mt-20 h-min sm:h-[180px] items-center gap-8 sm:gap-0'>
                    <motion.h1 className='font-poppins flex-1 font-semibold text-[38px] sm:text-[44px] text-gray-900 text-left'
                    initial={{
                        x:-300,
                        opacity:0,
                    }}
                    whileInView={{
                        opacity:100,
                        x:0,
                        transition:{
                            duration:0.50,
                        }
                    }}
                    viewport={{
                        once:true,
                    }}>We build bridges between <span className='font-poppins font-semibold text-[38px] sm:text-[44px] text-gray-700 text-left'>companies <br className='hidden sm:block'/>and customers.</span></motion.h1>
                    <motion.p className='font-poppins flex-1 font-normal text-[16px] text-gray-600 text-left'
                    initial={{
                        x:300,
                        opacity:0,
                    }}
                    whileInView={{
                        opacity:100,
                        x:0,
                        transition:{
                            duration:0.50,
                        }
                    }}
                    viewport={{
                        once:true,
                    }}>To build software that gives customer-facing teams at small and medium-sized businesses the ability to create fruitful and enduring relationships with customers.</motion.p>
            </div>
            <div className='relative w-full my-20'>
                <img src={aboutimage} alt="" className='object-contain sm:object-fill w-full h-full sm:h-[500px] rounded-xl'/>
            </div>
            <hr className='bg-gray-800 h-[2px] my-8'/>
            <div className='flex flex-col sm:flex-row w-full my-20 gap-12 sm:gap-4'>
                <motion.div className='flex flex-col w-full sm:w-[70%] gap-8'
                initial={{
                    x:-300,
                    opacity:0,
                }}
                whileInView={{
                    opacity:100,
                    x:0,
                    transition:{
                        duration:0.50,
                    }
                }}
                viewport={{
                    once:true,
                }}>
                    <h1 className='font-poppins font-semibold text-[34px] sm:text-[44px] text-gray-900 text-left lowercase'>Forging the Future with Exceptional Software Solutions</h1>
                    <p className='font-poppins font-normal text-[16px] sm:text-[18px] text-gray-600 text-left'>At Insyllium, we are not just software developers; we are visionaries, architects, and partners in your digital journey. With a foundation built on innovation, expertise, and a relentless pursuit of excellence, we transcend the realm of conventional software development.</p>
                </motion.div>
                <motion.div className='w-full sm:w-[30%] bg-slate-900 '
                 initial={{
                    x:300,
                    opacity:0,
                }}
                whileInView={{
                    opacity:100,
                    x:0,
                    transition:{
                        duration:0.50,
                    }
                }}
                viewport={{
                    once:true,
                }}>
                    <div className='flex flex-col p-8 gap-4'>
                        <BiSolidQuoteLeft size={50} className='text-white'/>
                        <p className='font-poppins font-normal text-[16px] text-white text-left lowercase'>In the realm where creativity meets technology, we are your partner in turning ideas into interactive, user-centric digital experiences.</p>
                        <p className='font-poppins font-normal text-[16px] text-white text-left uppercase'>- mendime tholla</p>
                    </div>
                </motion.div>
            </div>
            <hr className='bg-gray-800 h-[2px] my-8'/>
            <div className='flex flex-col w-full my-20'>
                <div className='w-full flex flex-col'>
                    <motion.h1 className='font-poppins font-semibold text-[44px] max-w-[350px] text-gray-900 text-left'
                    initial={{
                        x:-200,
                        opacity:0,
                    }}
                    whileInView={{
                        opacity:100,
                        x:0,
                        transition:{
                            duration:0.50,
                        }
                    }}
                    viewport={{
                        once:true,
                    }}>Meet our amazing team</motion.h1>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center mt-8'>
                    {ourTeam.map((o,index)=>(
                        <motion.div className='flex flex-col'
                        initial={{
                            y:100,
                            opacity:0,
                        }}
                        whileInView={{
                            opacity:100,
                            y:0,
                            transition:{
                                delay:0.15*index,
                                duration:0.50,
                            }
                        }}
                        viewport={{
                            once:true,
                        }}>
                        <img src={o?.image} alt="" className='w-full h-full object-contain rounded-xl'/>
                        <h1 className='font-poppins font-semibold text-[20px] max-w-[350px] text-gray-900 text-left mt-2'>{o?.name}</h1>
                        <p className='font-poppins font-normal text-[14px] text-gray-800 text-left'>{o?.role}</p>
                    </motion.div>
                    ))}
                </div>
            </div>
            {/* <hr className='bg-gray-800 h-[2px] my-8'/> */}
        </div>
        <div className={`bg-[#0f172a] w-full`} >
                <div className={`${styles.boxWidth} mx-auto`}>
                    <Footer />
                </div>
            </div>
     </div>
  )
}

export default About