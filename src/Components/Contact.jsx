import React, { useEffect, useLayoutEffect, useState } from 'react'
import Navbar from './Navbar'
import styles from '../style'
import { services,budgetoptions } from '../Constants'
import { contactimg } from '../assets'
import axios from 'axios'
import Footer from './Footer'



const Contact = () => {
  const [navbar,setNavbar] = useState(false)

  const changeNavBackground = ()=> {
      if (window.scrollY >= 80) {
          setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    window.addEventListener('scroll',changeNavBackground)
    
    const [app_type, setapp_type] = useState("");
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [message, setmessage] = useState("");
    const [budget, setbudget] = useState("");

    const sendConsultation=async()=>{
        console.log("kupton");
        try {
            await axios.post("https://important-wetsuit-frog.cyclic.cloud/consultation", {
                app_type:app_type,
                name: name,
                email: email,
                phone: phone,
                message: message,
                budget: budget,
            })
        } catch (error) {
            console.log(error);
        }
        window.location.reload()
    }

  return ( 
    <div className={`${styles.flexCenter} flex-col`} >
        <div className={`w-full flex mb-4 fixed top-0 ${navbar?'bg-white':'bg-[#0f172a]'} z-[999] transition-colors duration-200 ease-in`}>
            <Navbar />
        </div>
        <div className={`${styles.boxWidth} mt-4 mb-4 sm:mb-0 sm:mt-20`}> 
            <div className='flex flex-col sm:flex-row mt-20 gap-8'>
                <div className="flex flex-1">
                    <img src={contactimg} loading='lazy' alt="" className='w-full h-full md:max-h-[75%] lg:max-h-[85%] object-fill opacity-80 shadow-xl rounded-[2rem] mr-4'/>
                </div>
                <div className="flex flex-col flex-1 gap-4 justify-center items-center sm:justify-start sm:items-start">
                    <p className='font-poppins font-bold text-[40px] text-blue-500 text-left tracking-wider'>Let's talk!</p>
                    <select name="" onChange={(e) => setapp_type(e.target.value)} id="" className='font-poppins transition-all duration-200 ease-in px-4 py-2 outline-none pl-0 cursor-pointer w-[90%] md:w-[70%] border-b-black border-b-2 hover:border-b-blue-500'>
                    <option value={""} className="">Select service</option>
                        {services.map((s)=>(
                            <option value={s?.title} key={s?.id}>{s?.title}</option>
                        ))}
                        <option value={"other"}><span className='text-gray-700'>Other (multiple)</span></option>
                    </select>
                    <input type="text" onChange={(e) => setname(e.target.value)} placeholder='Your name' className='font-poppins transition-all duration-200 ease-in border-b-2 border-b-black hover:border-b-blue-500 focus:border-b-blue-500 w-[90%] md:w-[70%] mt-4 p-2 pl-0 text-gray-700 outline-none' required/>
                    <input type="text" onChange={(e) => setemail(e.target.value)} placeholder='Your email' className='font-poppins transition-all duration-200 ease-in border-b-2 border-b-black w-[90%] md:w-[70%] mt-4 p-2 pl-0 hover:border-b-blue-500 focus:border-b-blue-500 text-gray-700 outline-none' required/>
                    <input type="text" onChange={(e) => setphone(e.target.value)} placeholder='Mobile (optional) ' className='font-poppins transition-all duration-200 ease-in border-b-2 border-b-black w-[90%] md:w-[70%] mt-4 p-2 pl-0 hover:border-b-blue-500 focus:border-b-blue-500 text-gray-700 outline-none' required/>
                    <textarea name="" onChange={(e) => setmessage(e.target.value)} id="" cols="30" rows="5" placeholder='Your message' className='resize-none transition-all duration-200 ease-in p-2 mt-4 w-[90%] md:w-[70%] outline-none border-2 border-black font-poppins hover:border-blue-500'></textarea>
                    {/* <select name="" onChange={(e) => setbudget(e.target.value)} id="" className='font-poppins transition-all duration-200 ease-in px-4 py-2 outline-none pl-0 cursor-pointer w-[90%] md:w-[70%] border-b-black border-b-2 hover:border-b-blue-500'>
                        <option value={""} className="">Select your budget</option>
                        {budgetoptions.map((s)=>(
                            <option value={s?.title} key={s?.id}>{s?.title}</option>
                        ))}
                    </select> */}

                    <button onClick={sendConsultation} class="w-[90%] md:w-[70%] relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-black rounded-lg group">
                    <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-lg group-hover:w-full group-hover:h-56"></span>
                    <span class="absolute inset-0 w-full h-full rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                    <span class="relative text-white font-poppins font-semibold text-[20px]">Send message</span>
                    </button>
                    {/* <button onClick={sendConsultation} className='py-4 px-6 hover:bg-blue-500 border-none cursor-pointer transition-all duration-200 ease-in bg-black text-white w-[90%] md:w-[70%] font-poppins font-semibold text-[20px] rounded-lg'>Send message</button> */}
                </div>
            </div>
        </div>
           <div className={`bg-[#0f172a] w-full`} >
                <div className={`${styles.boxWidth} mx-auto`}>
                    <Footer />
                </div>
            </div>
     </div>
  )
}

export default Contact