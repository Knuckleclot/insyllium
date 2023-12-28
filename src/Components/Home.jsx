import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import styles from '../style'
import { laptop,curve, topwave, mobilewave,botwave,botwavemob } from '../assets'
import Hero from './Hero'
import TechStack from './TechStack'
import Services from './Services'
import Footer from './Footer'
import Work from './Work'
import Consultation from './Consultation'
import AboutUs from './AboutUs'
import Benefits from './Benefits'
import Trusted from './Trusted'
import Projects from './Projects'

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

  const divArray = Array.from({ length: 80 }, (_, index) => index);

  return (
    <div className='w-full overflow-hidden relative bg-[#080A17]'>
        <div
        className="absolute inset-0 h-full z-[0] w-full bg-[radial-gradient(#444444_0px,transparent_2px)] [background-size:128px_128px] [mask-image:radial-gradient(ellipse_65%_65%_at_50%_50%,#000_60%,transparent_100%)]"
        ></div>
        <div
        className="absolute inset-0 z-[0] h-full w-full bg-[linear-gradient(to_right,#80808015_2px,transparent_1px),linear-gradient(to_bottom,#80808015_2px,transparent_1px)] bg-[size:130px_130px] sm:bg-[size:256px_256px] [mask-image:radial-gradient(ellipse_65%_65%_at_50%_50%,#000_60%,transparent_100%)]"
        ></div>
        {/* <img loading='lazy' src={window.innerWidth<=768?mobilewave:topwave} alt="" className='w-full object-contain absolute top-0 left-0 z-[-1]'/> */}
        <div className={`${styles.flexCenter}`} >
            <div className={`w-full`}>
                <Navbar />
            </div>
        </div>
        <div className={`${styles.flexCenter}`} >
            <div className={`${styles.boxWidth} mb-4 pt-10 lg:pt-20 z-20`}>
                <Hero />
                {/* <Trusted /> */}
                <AboutUs />
                <Services />
                <Projects />
                {/* <Consultation />
                <Work />
                <Benefits /> */}
            </div>
        </div>
        <div className={`${styles.flexCenter}`} >
            <div className={`${styles.boxWidth} mb-4 pt-10`}>
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default Home