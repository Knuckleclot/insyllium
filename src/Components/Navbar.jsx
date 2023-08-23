import {useState} from 'react'
import styles from '../style'
import { Link } from 'react-router-dom'
import { logo, mobapp } from '../assets'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import {motion} from 'framer-motion'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
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
    <nav className={`w-[90%] xl:w-[60%] mx-auto py-4 items-center flex justify-between z-[999]`}>
        <div className='flex items-center justify-between w-full z-[3]'>
                {navbar|toggle?<motion.h1 className={`font-poppins font-bold text-2xl text-black`} 
                initial={{
                    x:-200,
                }}
                animate={{
                    x:0,
                    transition:{
                        delay:0.15,
                        duration:0.25,
                    }
                }}
                viewport={{
                    once:true,
                }}
                
                >INSYLLIUM</motion.h1>:
                <img src={logo} alt="logo" className='w-[100px]  h-[30px] md:w-[200px] md:h-[45px] cursor-pointer object-contain z-[999]' onClick={()=>{
                    window.location.href='/'
                }}/>}
                <span onClick={()=>setToggle((prev)=>!prev)} className='z-[2] sm:hidden block'>
                    {toggle?<AiOutlineClose size={20} className='text-black'/>:<AiOutlineMenu size={20} className={navbar?'text-black':'text-white'}/>}
                </span>
            </div>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1 z-[999]'>
            <Link to={`/projects`}><li className={`font-poppins font-normal relative after:bg-secondary after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer text-[18px] pb-1 transition-colors  mr-10 ${navbar?'text-black':'text-white'}`}>Projects</li></Link>
            <div class="group inline-block relative">
                <button
                class={`${navbar?'bg-white':'bg-slate-900'} ${navbar?'text-black':'text-white'} font-semibold rounded inline-flex items-center mr-10`}
                >
                <span class="mr-1 text-[18px] font-poppins font-normal h-full pb-1">Services</span>
                <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                </svg>
                </button>
                <motion.div class="absolute hidden left-[-400px] bg-white group-hover:grid w-[1000px] h-min p-4 pl-6 transition-all duration-200 ease-in-out gap-2 grid-cols-3 rounded-[1rem]"
                initial={{
                    y:20,
                    opacity:0,
                }}
                whileInView={{
                    y:0,
                    opacity:1,
                    transition:{
                        delay:0.05,
                        duration:0.05,
                    }
                }}>
                    <div className='flex flex-col items-start hover:scale-[1.015] group/navitem m-2 transition-all duration-200 ease-in hover:cursor-pointer'>
                        {/* <p className='font-poppins font-semibold text-[18px] relative text-black after:bg-secondary after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300'>Mobile app</p> */}
                        <p className={`font-poppins font-semibold text-[18px] pb-1 transition-colors  mr-10 text-black`}>Mobile Applications</p>
                        <p className='font-poppins font-normal relative after:bg-secondary after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 group-hover/navitem:after:w-full after:transition-all after:duration-300 cursor-pointer text-[16px] pb-1 transition-colors  mr-10 text-gray-800'>Creating mobile applications for iOS and Android platforms</p>
                    </div>
                    <div className='flex flex-col items-start hover:scale-[1.015] group/navitem m-2 transition-all duration-200 ease-in hover:cursor-pointer'>
                        {/* <p className='font-poppins font-semibold text-[18px] relative text-black after:bg-secondary after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300'>Mobile app</p> */}
                        <p className={`font-poppins font-semibold text-[18px] pb-1 transition-colors  mr-10 text-black`}>Web Applications</p>
                        <p className='font-poppins font-normal relative after:bg-secondary after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 group-hover/navitem:after:w-full after:transition-all after:duration-300 cursor-pointer text-[16px] pb-1 transition-colors  mr-10 text-gray-800'>Creating mobile applications for iOS and Android platforms</p>
                    </div>
                    <div className='flex flex-col items-start hover:scale-[1.015] group/navitem m-2 transition-all duration-200 ease-in hover:cursor-pointer'>
                        {/* <p className='font-poppins font-semibold text-[18px] relative text-black after:bg-secondary after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300'>Mobile app</p> */}
                        <p className={`font-poppins font-semibold text-[18px] pb-1 transition-colors  mr-10 text-black`}>UI/UX Design</p>
                        <p className='font-poppins font-normal relative after:bg-secondary after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 group-hover/navitem:after:w-full after:transition-all after:duration-300 cursor-pointer text-[16px] pb-1 transition-colors  mr-10 text-gray-800'>Creating mobile applications for iOS and Android platforms</p>
                    </div>
                    <div className='flex flex-col items-start hover:scale-[1.015] group/navitem m-2 transition-all duration-200 ease-in hover:cursor-pointer'>
                        {/* <p className='font-poppins font-semibold text-[18px] relative text-black after:bg-secondary after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300'>Mobile app</p> */}
                        <p className={`font-poppins font-semibold text-[18px] pb-1 transition-colors  mr-10 text-black`}>Logo Design</p>
                        <p className='font-poppins font-normal relative after:bg-secondary after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 group-hover/navitem:after:w-full after:transition-all after:duration-300 cursor-pointer text-[16px] pb-1 transition-colors  mr-10 text-gray-800'>Creating mobile applications for iOS and Android platforms</p>
                    </div>
                    <div className='flex flex-col items-start hover:scale-[1.015] group/navitem m-2 transition-all duration-200 ease-in hover:cursor-pointer'>
                        {/* <p className='font-poppins font-semibold text-[18px] relative text-black after:bg-secondary after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300'>Mobile app</p> */}
                        <p className={`font-poppins font-semibold text-[18px] pb-1 transition-colors  mr-10 text-black`}>E-commerce solutions</p>
                        <p className='font-poppins font-normal relative after:bg-secondary after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 group-hover/navitem:after:w-full after:transition-all after:duration-300 cursor-pointer text-[16px] pb-1 transition-colors  mr-10 text-gray-800'>Creating mobile applications for iOS and Android platforms</p>
                    </div>
                
                </motion.div>
            </div>
            {/* <Link to={`/services`}><li className={`font-poppins font-normal relative after:bg-secondary after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer text-[18px] transition-colors pb-1 mr-10 ${navbar?'text-black':'text-white'}`}>Services</li></Link> */}
            <Link to={`/about`}><li className={`font-poppins font-normal relative after:bg-secondary after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer text-[18px] transition-colors pb-1 mr-10 ${navbar?'text-black':'text-white'}`}>About</li></Link>
            <Link to={`/contact`}><li className={`font-poppins font-normal relative after:bg-secondary after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer text-[18px] transition-colors pb-1 mr-10 ${navbar?'text-black':'text-white'}`}>Contact</li></Link>
        </ul>

        <div
          class="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible"
          onClick=""
        >
          <a
            class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
            >Product One</a
          >
 
          <a
            class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
            >Product Two</a
          >
          <a
            class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
            >Product Three
          </a>
          <a
            class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
            >Product Four
          </a>
        </div>

        <motion.div className={`${toggle?'opacity-100 left-0':'opacity-0 -left-20 hidden'} flex flex-col w-full fixed top-0 bg-[#fff] z-[2] transition-all duration-500 ease-in h-full sm:hidden justify-center items-center`}
        initial={{
            x:-200,
        }}
        whileInView={{
            x:0,
            transition:{
                duration:0.05,
            }
        }}
        >
            <ul className={`list-none flex flex-col items-start w-[80%] mx-auto relative h-min`}>
                    <Link className='flex w-full justify-start items-center py-2  mt-4'>
                        <li className={`${toggle?'left-0':'left-[-200px]'} transition-all duration-500 ease-in text-left font-poppins font-normal cursor-pointer text-[22px] leading-2 text-black relative flex border-b border-b-gray-400 pb-2 w-full`}>Projects</li>
                    </Link>
                    <Link className='flex w-full justify-start items-center py-2  mt-4'>
                        <li className={`${toggle?'left-0':'left-[-200px]'} transition-all duration-500 ease-in text-left font-poppins font-normal cursor-pointer text-[22px] leading-2 text-black relative flex border-b border-b-gray-400 pb-2 w-full`}>Services</li>
                    </Link>
                    <Link className='flex w-full justify-start items-center py-2  mt-4'>
                        <li className={`${toggle?'left-0':'left-[-200px]'} transition-all duration-500 ease-in text-left font-poppins font-normal cursor-pointer text-[22px] leading-2 text-black relative flex border-b border-b-gray-400 pb-2 w-full`}>About</li>
                    </Link>
                    <Link to={'/contact'} className='flex w-full justify-start items-center py-2  mt-4'>
                        <li className={`${toggle?'left-0':'left-[-200px]'} transition-all duration-500 ease-in text-left font-poppins font-normal cursor-pointer text-[22px] leading-2 text-black relative flex border-b border-b-gray-400 pb-2 w-full`}>Contact</li>
                    </Link>

            </ul>
        </motion.div>

    </nav>
  )
}

export default Navbar