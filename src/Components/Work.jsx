import React,{useRef} from 'react'
import {motion,useScroll,useTransform} from 'framer-motion'
import { contactimg, goldentouch, hakbus_showcase, laptop } from '../assets'
import {BsArrowRight} from 'react-icons/bs'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Work = () => {
    const targetRef = useRef()
    const {scrollYProgress} = useScroll({
        target:targetRef,
    })

    const x = useTransform(scrollYProgress,[0,1],["1%","-99%"])

  return (
    <section ref={targetRef} className='w-full flex flex-col sm:flex-row my-20'>
        <div className='flex flex-col flex-1 sm:flex-row gap-10 md:gap-2'>
            <div className='flex-col flex justify-evenly items-start flex-1 gap-4'>
                <div className='flex flex-col gap-4'>
                <p className='font-poppins font-normal text-[16px] uppercase text-gray-500'>
                    our latest work
                </p>
                <h1 className='font-poppins font-semibold text-[24px] tracking-wide text-gray-900'>
                Explore a curated collection spanning diverse domains, from intuitive apps and robust backends to AI experiments. Our project snapshots provide insights into challenges, tech stacks, and outcomes.
                </h1>
                </div>
                <button className='bg-primary transition-all duration-200 ease-in hover:bg-blue-500 px-8 py-3 rounded-3xl border-none cursor-pointer text-[1em] uppercase text-white font-poppins font-normal'>See all work</button>
            </div>
        </div>
        <motion.div className='flex flex-1 items-center overflow-x-auto w-full my-10'
        initial={{
            opacity:0,
        }}
        whileInView={{
            opacity:1,
            transition:{
                delay:0.15,
                duration:0.25,
            }
        }}
        viewport={{
            once:true,
        }}
        >
            <Carousel axis='horizontal' emulateTouch={true} infiniteLoop={true} showThumbs={false} showArrows={false} showIndicators={false} showStatus={false} width={window.innerWidth<=450?'60%':'100%'} className='overflow-visible group cursor-pointer' autoPlay={true} interval={3000} >
                <div className='flex flex-1 flex-col justify-start' onClick={()=>{
                        window.location.href='/hakbus'
                    }}>
                    <img src={hakbus_showcase} alt="" role='button' className='object-contain group-hover:opacity-80 transition-all duration-200 ease-in rounded-[2rem]' />
                    <div className='flex items-center justify-start md:justify-between pl-0 p-4'>
                        <div className='flex flex-col'>
                            <h1 className='font-poppins font-semibold text-[24px] text-black text-left'>Hakbus</h1>
                            <p className='font-poppins font-normal text-[16px] text-gray-500'>Mobile/Web App</p>
                        </div>
                            <BsArrowRight  size={25}/>
                    </div>
                </div>
                <div className='flex flex-1 flex-col justify-start'>
                    <img src={goldentouch} alt="" className='object-contain cursor-pointer hover:opacity-70 transition-all duration-200 ease-in rounded-[2rem]'/>
                    <div className='flex items-center justify-start md:justify-between pl-0 p-4 gap-4 md:gap-0'>
                        <div className='flex flex-col'>
                            <h1 className='font-poppins font-semibold text-[24px] text-black text-left'>Hakbus</h1>
                            <p className='font-poppins font-normal text-[16px] text-gray-500'>Mobile/Web App</p>
                        </div>
                            <BsArrowRight  size={25}/>
                    </div>
                </div>
            </Carousel>
        </motion.div>
    </section>
  )
}

export default Work