import {useState} from 'react'
import styles from '../style'
import { Link } from 'react-router-dom'
import { logo } from '../assets'
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
    <nav className={`w-[90%] xl:w-[60%] mx-auto py-6 items-center flex justify-between z-[999]`}>
        <div className='flex items-center justify-between w-full z-[3]'>
                {navbar?<h1 className={`font-poppins font-bold text-2xl text-black`}>INSYLLIUM</h1>:
                <img src={logo} alt="logo" className='w-[100px] h-[30px] md:w-[200px] md:h-[45px] cursor-pointer object-contain z-[999]'/>}
                <span onClick={()=>setToggle((prev)=>!prev)} className='z-[2] sm:hidden blcok'>
                    {toggle?<AiOutlineClose size={20} className='text-white'/>:<AiOutlineMenu size={20} className={navbar?'text-black':'text-white'}/>}
                </span>
            </div>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1 z-[999]'>
            <Link to={`/projects`}><li className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-[#33bbcf] transition-colors  mr-10 ${navbar?'text-black':'text-white'}`}>Projects</li></Link>
            <Link to={`/projects`}><li className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-[#33bbcf] transition-colors  mr-10 ${navbar?'text-black':'text-white'}`}>Services</li></Link>
            <Link to={`/projects`}><li className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-[#33bbcf] transition-colors  mr-10 ${navbar?'text-black':'text-white'}`}>About</li></Link>
            <Link to={`/projects`}><li className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-[#33bbcf] transition-colors  mr-10 ${navbar?'text-black':'text-white'}`}>Contact</li></Link>
        </ul>

        <div className={`${toggle?'opacity-100':'opacity-0'} flex flex-col w-full fixed top-0 left-0 bg-[#1F51FF] z-[2] transition-all duration-500 ease-in h-full sm:hidden`}
        >
            <ul className={`list-none flex flex-col items-start w-[90%] mx-auto relative top-20`}>
                    <Link className='flex w-full justify-start items-center py-2  mt-6'><li className={`${toggle?'left-0':'left-[-200px]'} transition-all duration-500 ease-in text-left font-poppins font-normal cursor-pointer text-[22px] leading-2 text-white relative flex`}>Projects</li></Link>
                    <Link className='flex w-full justify-start items-center py-2 mt-6'><li className={`${toggle?'left-0':'left-[-200px]'} transition-all duration-500 ease-in text-left font-poppins font-normal cursor-pointer text-[22px] leading-2 text-white relative`}>Services</li></Link>
                    <Link className='flex w-full justify-start items-center py-2 mt-6'><li className={`${toggle?'left-0':'left-[-200px]'} transition-all duration-500 ease-in text-left font-poppins font-normal cursor-pointer text-[22px] leading-2 text-white relative`}>About</li></Link>
                    <Link className='flex w-full justify-start items-center py-2 mt-6'><li className={`${toggle?'left-0':'left-[-200px]'} transition-all duration-500 ease-in text-left font-poppins font-normal cursor-pointer text-[22px] leading-2 text-white relative pb-4`}>Contact</li></Link>
            </ul>
        </div>

    </nav>
  )
}

export default Navbar