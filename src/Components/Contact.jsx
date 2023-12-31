import React, { useEffect, useLayoutEffect, useState } from 'react'
import Navbar from './Navbar'
import styles from '../style'
import { services,budgetoptions } from '../Constants'
import { contactimg } from '../assets'
import axios from 'axios'
import Footer from './Footer'



const Contact = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    
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
    <div className={`${styles.flexCenter} flex-col bg-[#080A17]`} >
        <div className={`w-full flex mb-4 fixed top-0 z-[999] transition-colors duration-200 ease-in`}>
            <Navbar />
        </div>
        <div className={`${styles.boxWidth} mt-4 mb-4 sm:mb-0 sm:mt-20`}> 
            <div className='flex flex-col sm:flex-row mt-20 gap-8'>
                <div className="flex flex-1">
                    <img src={contactimg} loading='lazy' alt="" className='w-full h-full md:max-h-[75%] lg:max-h-[85%] object-fill opacity-80 shadow-xl rounded-[2rem] mr-4'/>
                </div>
                <div className="flex flex-col flex-1 gap-4 justify-center items-center sm:justify-start sm:items-start">
                    <p className='font-poppins font-bold text-[40px] text-gray-100 text-left tracking-wider'>Let's talk!</p>
                    <select name="" onChange={(e) => setapp_type(e.target.value)} id="" className='rounded-lg font-poppins transition-all duration-200 ease-in px-4 py-2 outline-none pl-0 cursor-pointer w-[90%] md:w-[70%] border-b-black border-b-2 hover:border-b-[#46a2aa]'>
                    <option value={""} className="">Select service</option>
                        {services.map((s)=>(
                            <option value={s?.title} key={s?.id}>{s?.title}</option>
                        ))}
                        <option value={"other"}><span className='text-gray-700'>Other (multiple)</span></option>
                    </select>
                    <input type="text" onChange={(e) => setname(e.target.value)} placeholder='Your name' className='rounded-lg font-poppins transition-all duration-200 ease-in border-b-2 border-b-black hover:border-b-[#46a2aa] focus:border-b-[#46a2aa] w-[90%] md:w-[70%] mt-4 p-2 pl-0 text-gray-700 outline-none' required/>
                    <input type="text" onChange={(e) => setemail(e.target.value)} placeholder='Your email' className='rounded-lg font-poppins transition-all duration-200 ease-in border-b-2 border-b-black w-[90%] md:w-[70%] mt-4 p-2 pl-0 hover:border-b-[#46a2aa] focus:border-b-[#46a2aa] text-gray-700 outline-none' required/>
                    <input type="text" onChange={(e) => setphone(e.target.value)} placeholder='Mobile (optional) ' className='rounded-lg font-poppins transition-all duration-200 ease-in border-b-2 border-b-black w-[90%] md:w-[70%] mt-4 p-2 pl-0 hover:border-b-[#46a2aa] focus:border-b-[#46a2aa] text-gray-700 outline-none' required/>
                    <textarea name="" onChange={(e) => setmessage(e.target.value)} id="" cols="30" rows="5" placeholder='Your message' className='rounded-lg resize-none transition-all duration-200 ease-in p-2 mt-4 w-[90%] md:w-[70%] outline-none border-2 border-black font-poppins hover:border-[#46a2aa]'></textarea>
                    {/* <select name="" onChange={(e) => setbudget(e.target.value)} id="" className='font-poppins transition-all duration-200 ease-in px-4 py-2 outline-none pl-0 cursor-pointer w-[90%] md:w-[70%] border-b-black border-b-2 hover:border-b-[#46a2aa]'>
                        <option value={""} className="">Select your budget</option>
                        {budgetoptions.map((s)=>(
                            <option value={s?.title} key={s?.id}>{s?.title}</option>
                        ))}
                    </select> */}

                    <button onClick={sendConsultation} class="w-[90%] md:w-[70%] relative inline-flex items-center justify-center px-10 py-4 mt-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#46a2aa] rounded-lg group">
                    <span class="relative text-white font-poppins font-semibold text-[20px]">Send message</span>
                    </button>
                    {/* <button onClick={sendConsultation} className='py-4 px-6 hover:bg-[#46a2aa] border-none cursor-pointer transition-all duration-200 ease-in bg-black text-white w-[90%] md:w-[70%] font-poppins font-semibold text-[20px] rounded-lg'>Send message</button> */}
                </div>
            </div>
        </div>
           <div className={`w-full`} >
                <div className={`${styles.boxWidth} mx-auto`}>
                    <Footer />
                </div>
            </div>
     </div>
  )
}

export default Contact