import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import styles from '../style'
import { laptop,curve, topwave, mobilewave } from '../assets'
import Hero from './Hero'
import TechStack from './TechStack'
import Services from './Services'
import Footer from './Footer'

const Home = () => {
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
    <div className='w-full overflow-hidden relative'>
        <img src={window.innerWidth<=500?mobilewave:topwave} alt="" className='w-full object-contain absolute top-0 left-0 z-[-1]'/>
        <div className={`${styles.flexCenter}`} >
            <div className={`w-full flex mb-4 fixed top-0 ${navbar&&'bg-white'} z-[999] transition-colors duration-200 ease-in`}>
                <Navbar />
            </div>
        </div>
        <div className={`${styles.flexCenter}`} >
            <div className={`${styles.boxWidth} mb-4 pt-20`}>
                <Hero />
                <Services />
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default Home