import React, { useState } from 'react'
import Navbar from './Navbar'
import styles from '../style'
import { services } from '../Constants'
import { contactimg } from '../assets'



const Contact = () => {
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
        <div className={`w-full flex mb-4 fixed top-0 bg-[#0066FF] z-[999] transition-colors duration-200 ease-in`}>
            <Navbar />
        </div>
        <div className={`${styles.boxWidth} mt-20`}> 
            <div className='flex flex-col md:flex-row mt-20 gap-8'>
                <div className="flex flex-1">
                    <img src={contactimg} alt="" className='w-full h-[80%] object-contain opacity-80'/>
                </div>
                <div className="flex flex-col flex-1 gap-4 justify-center items-center md:justify-start md:items-start">
                    <p className='font-poppins font-bold text-[40px] text-blue-500 text-left tracking-wider'>Let's talk!</p>
                    <select name="" id="" className='font-poppins px-4 py-2 outline-none pl-0 cursor-pointer w-[70%] border-b-black border-b hover:border-b-blue-500'>
                        {services.map((s)=>(
                            <option key={s?.id}>{s?.title}</option>
                        ))}
                        <option><span className='text-gray-700'>Other (multiple)</span></option>
                    </select>
                    <input type="text" placeholder='Your name' className='font-poppins border-b border-b-black hover:border-b-blue-500 focus:border-b-blue-500 w-[70%] mt-4 p-2 pl-0 text-gray-700 outline-none' required/>
                    <input type="text" placeholder='Your email' className='font-poppins border-b border-b-black w-[70%] mt-4 p-2 pl-0 hover:border-b-blue-500 focus:border-b-blue-500 text-gray-700 outline-none' required/>
                    <input type="text" placeholder='Mobile (optional) ' className='font-poppins border-b border-b-black w-[70%] mt-4 p-2 pl-0 hover:border-b-blue-500 focus:border-b-blue-500 text-gray-700 outline-none' required/>
                    <textarea name="" id="" cols="30" rows="5" placeholder='Your message' className='resize-none p-2 mt-4 w-[70%] outline-none border border-black font-poppins hover:border-blue-500'></textarea>
                    <button className='py-4 px-6 hover:bg-blue-500 border-none cursor-pointer bg-black text-white w-[70%] font-poppins font-semibold text-[20px] rounded-lg'>Send message</button>
                </div>
            </div>
        </div>
     </div>
  )
}

export default Contact