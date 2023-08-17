import React, { useState } from 'react'
import Navbar from './Navbar'
import styles from '../style'
import { laptop,curve } from '../assets'
import Hero from './Hero'
import TechStack from './TechStack'

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
  console.log(navbar)
  return (
    <div className='w-full overflow-hidden'>
          <svg id="visual" viewBox="0 0 960 540" width="1920" height="1080" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="1920" height="1080" fill="#fff"></rect><path d="M0 362L53.3 360.5C106.7 359 213.3 356 320 360.5C426.7 365 533.3 377 640 338.3C746.7 299.7 853.3 210.3 906.7 165.7L960 121L960 0L906.7 0C853.3 0 746.7 0 640 0C533.3 0 426.7 0 320 0C213.3 0 106.7 0 53.3 0L0 0Z" fill="#0066FF" stroke-linecap="round" stroke-linejoin="miter" className='w-full fixed top-0 left-0 z-[-1]'></path></svg>
          {/* <svg id="visual" viewBox="0 0 1920 1080" width="1920" height="1080" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="1920" height="1080" fill="#fff"></rect><path d="M0 695L45.7 700.3C91.3 705.7 182.7 716.3 274.2 726.7C365.7 737 457.3 747 548.8 751.8C640.3 756.7 731.7 756.3 823 757.7C914.3 759 1005.7 762 1097 694.8C1188.3 627.7 1279.7 490.3 1371.2 441.5C1462.7 392.7 1554.3 432.3 1645.8 439.2C1737.3 446 1828.7 420 1874.3 407L1920 394L1920 0L1874.3 0C1828.7 0 1737.3 0 1645.8 0C1554.3 0 1462.7 0 1371.2 0C1279.7 0 1188.3 0 1097 0C1005.7 0 914.3 0 823 0C731.7 0 640.3 0 548.8 0C457.3 0 365.7 0 274.2 0C182.7 0 91.3 0 45.7 0L0 0Z" fill="#0066FF" stroke-linecap="round" stroke-linejoin="miter" className='w-full fixed top-0 left-0 z-[-1]'></path></svg> */}
        <div className={`${styles.flexCenter}`} >
            <div className={`w-full flex mb-4 fixed top-0 ${navbar&&'bg-white'} z-[999] transition-colors duration-200 ease-in`}>
                <Navbar />
            </div>
        </div>
        <div className={`${styles.flexCenter}`} >
            <div className={`${styles.boxWidth} mb-4 absolute top-20`}>
                <Hero />
                {/* <TechStack /> */}
            </div>
        </div>
    </div>
  )
}

export default Home