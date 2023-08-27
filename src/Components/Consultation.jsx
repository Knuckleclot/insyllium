import React, { useState } from 'react'
import styles from '../style'
import { Link } from 'react-router-dom'

const Consultation = () => {

    
  return (
    <section id='consultation' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-[#0f172a] rounded-[20px] mb-10 gap-4` }>
      <div className='flex-1 flex flex-col z-[2]'>
        <h2 className={`${styles.heading2}`}>Do you have <br className='sm:hidden'/> a  project in mind?</h2>
        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>At Insyllium, we believe that every successful software solution begins with a thoughtful consultation.</p>
      </div>
      <div>
        {/* <button className={`sm:px-8 px-6 sm:py-6 group py-4 bg-transparent rounded-xl border-white hover:border-secondary border outline-none cursor-pointer text-[1.1em] transition-all duration-200 ease-in hover:scale-[1.025] my-8 mt-10`} onClick={()=>{
          window.location.href='/contact'
        }}>
         <h2 className='cursor-pointer font-poppins font-normal text-white group-hover:text-secondary duration-200 transition-all ease-in'>get in touch!</h2>
        </button> */}
         <Link to="/contact" class="my-8 mt-10 relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter transition-all duration-300 hover:text-black text-white border border-white rounded-lg group">
          <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span class="absolute inset-0 w-full h-full rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-white"></span>
          <span class="relative font-poppins font-normal text-[1.1em] tracking-wide">get in touch!</span>
          </Link>
      </div>
    </section>
  )
}

export default Consultation