import React from 'react'
import Navbar from './Navbar'
import styles from '../style'
import { laptop } from '../assets'

const Home = () => {
  return (
    <div className='w-full overflow-hidden'>
        <div className={`${styles.flexCenter} `} >
            <div className={`${styles.boxWidth} mb-4 px-4 xl:px-0`}>
                <Navbar />
            </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center w-full items-center'>
            <div className={`${styles.boxWidth} px-4 xl:px-0` }>
                <div className='w-full md:w-[60%] h-[80vh] flex flex-col relative'>
                    <img src={laptop} alt="" className='w-full h-full rounded-[3rem] absolute'/>
                    <div className='w-full flex justify-between absolute bottom-14 left-14'>
                        <div className='flex flex-col gap-4 items-start flex-1'>
                            <p className='font-poppins text-[16px] text-white uppercase'>software development service</p>
                            <h className='font-poppins font-bold text-[30px] tracking-wide text-white max-w-[400px]'>We are a website & app development agency</h>
                        </div>
                        <div className='flex-1 flex items-center justify-center'>
                            <button className='bg-white py-4 px-6 text-blue-500 border-none rounded-[2rem] font-poppins font-semibold'>Get in touch</button>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-[40%]'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Home