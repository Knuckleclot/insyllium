import React, { useState } from 'react'
import styles from '../style'

const Consultation = () => {

  return (
    <section id='consultation' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-[#0066FF] rounded-[20px] mb-10` }>
      <div className='flex-1 flex flex-col z-[2]'>
        <h2 className={`${styles.heading2}`}>Do you have <br className='sm:hidden'/> a  project in mind?</h2>
        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>At Insyllium, we believe that every successful software solution begins with a thoughtful consultation.</p>
      </div>
      <div>
        <button className={`sm:px-8 px-6 sm:py-6 py-4 bg-transparent rounded-xl border-white border outline-none cursor-pointer text-[1.1em] transition-all duration-200 ease-in hover:scale-[1.05] my-8 mt-10`} onClick={()=>{
          window.location.href='/contact'
        }}>
         <h2 className='cursor-pointer font-poppins font-normal text-white'>get in touch!</h2>
        </button>
      </div>
    </section>
  )
}

export default Consultation