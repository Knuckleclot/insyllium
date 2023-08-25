import React, { useState } from 'react'
import Navbar from './Navbar'
import styles from '../style'

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
  return (
    <div className={`${styles.flexCenter}`} >
        <div className={`w-full flex mb-4 fixed top-0 ${navbar?'bg-white':'bg-[#0f172a]'} z-[999] transition-colors duration-200 ease-in`}>
            <Navbar />
        </div>
        <div className={`${styles.boxWidth} mt-4 mb-4 sm:mb-0 sm:mt-20`}> 

            <h1>hi suka</h1>

        </div>
     </div>
  )
}

export default About