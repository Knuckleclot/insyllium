import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import styles from '../style'
import { services,budgetoptions } from '../Constants'
import { contactimg } from '../assets'
import axios from 'axios'
import Footer from './Footer'



const Projects = () => {
  const [navbar,setNavbar] = useState(false)

  const changeNavBackground = ()=> {
      if (window.scrollY >= 80) {
          setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
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

            <div className='flex flex-col sm:flex-row gap-8'>
            <div class="flex items-center justify-center h-screen">
      <div class="flex flex-col items-center justify-center max-w-2xl">
        <img src="https://cdn.pixabay.com/photo/2017/06/20/08/12/maintenance-2422173__340.png"  className=' hover:shadow-2xl hover:scale-[1.6] hover: transition-all duration-500'
          alt="tailwindcss maintenance"/>
        <h1 class="mb-3 text-3xl font-bold text-center text-slate-900">Under Maintenance</h1>
        <p class="text-center text-gray-600"> 
        We're working hard to bring you something amazing! <br /> 
        Please stay tuned for updates. <br /> <br /> 
        <h1 className='scale-[2] text-slate-900 hover:text-cyan-800 transition-all duration-200'>- The Insyllium Team -</h1>
            </p>
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

export default Projects