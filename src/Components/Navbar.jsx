import {useState} from 'react'
import styles from '../style'
import { Link } from 'react-router-dom'
import { logo } from '../assets'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full py-6 items-center flex justify-between bg-white'>
        <img src={logo} alt="logo" className='w-[100px] h-[30px] md:w-[200px] md:h-[45px] cursor-pointer object-contain z-[999]'/>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1 z-[999]'>
            <Link to={`/projects`}><li className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-[#33bbcf] transition-colors text-[#333] mr-10`}>Projects</li></Link>
            <Link><li className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-[#33bbcf] transition-colors text-[#333] mr-10`}>Services</li></Link>
            <Link><li className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-[#33bbcf] transition-colors text-[#333] mr-10`}>About</li></Link>
            <Link><li className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-[#33bbcf] transition-colors text-[#333]`}>Contact</li></Link>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center z-[1]'>
            <span onClick={()=>setToggle((prev)=>!prev)}>
                {toggle?<AiOutlineClose/>:<AiOutlineMenu/>}
            </span>

            <div
                className={`${toggle ? 'flex top-20 opacity-100':'top-[-400px] opacity-0'} p-6 absolute top-20 right-0 my-2 w-full transition-all duration-500 ease-in`}
            >
                <ul className={`list-none flex flex-col justify-center items-center flex-1`}>
                    <Link><li className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-[#33bbcf] transition-colors text-[#333]`}>Projects</li></Link>
                    <Link><li className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-[#33bbcf] transition-colors text-[#333] mt-4`}>Services</li></Link>
                    <Link><li className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-[#33bbcf] transition-colors text-[#333] mt-4`}>About</li></Link>
                    <Link><li className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-[#33bbcf] transition-colors text-[#333] mt-4`}>Contact</li></Link>
                </ul>
            </div>
        </div>

    </nav>
  )
}

export default Navbar