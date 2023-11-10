import { darkmodelogo, logo } from '../assets'
import styles from '../style'
import { footerLinks, socialMedia } from '../Constants'
import { Link } from 'react-router-dom'

const Footer = () =>{

  const navigate = (url) => {
    window.open(url, '_blank');
  }
  return(
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`} >
      <div className={`${styles.flexStart} sm:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 w-full i flex-col sm:items-center md:items-start md:justify-between md:flex-col mr-10 md:mt-0 mt-10'>
        <img loading='lazy' src={darkmodelogo} alt='insylliumdark' className='w-[150px] h-[40px] md:w-[200px] md:h-[55px] cursor-pointer object-contain' onClick={()=>{
            window.location.href='#navbar'
        }}/>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          Partner with us to unlock the full potential of technology and reshape the way you do business. 
          </p>
          <div className='flex flex-col mt-4'>
              <p className='font-poppins font-normal text-[16px] text-dimWhite'>Phone: <span className='font-medium text-white'> +389 71 604 221</span></p>
              <p className='font-poppins font-normal text-[16px] text-dimWhite'>Email:<span className='font-medium text-white'> info@insyllium.com</span></p>
          </div>
        </div>

        <div className='flex-[1.5] w-full flex flex-row justify-between sm:justify-end gap-12 flex-wrap md:mt-0 mt-10 z-[2]'>
          {footerLinks.map((footerLink)=>(
            <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-poppins font-medium text-[20px] leading-[27px] text-white'>
                {footerLink.title}
              </h4>
              <ul className='list-none mt-4'>
                {footerLink.links.map((link,index)=>(
                  <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite transition-colors duration-300 hover:text-secondary cursor-pointer ${index!==footerLink.links.length -1 ? "mb-3":"mb-0"}`}>
                    <Link to={`/${link.link}`}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#fff]'>
        <p className='font-poppins font-normal text-[18px] text-center leading-[27px] text-white'>&copy; 2023 Insyllium. All Rights Reserved </p>

        <div className='flex flex-row md:mt-0 mt-6'>
            {socialMedia.map((social, index)=>(
              <img loading='lazy'
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain
              cursor-pointer ${index!== socialMedia.length-1 ? "mr-6" : 'mr-0'}`}
              onClick={()=>navigate(social?.link)}
              />
            ))}
        </div>
      </div>
    </section>
  )
} 


export default Footer