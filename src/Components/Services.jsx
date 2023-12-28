import React, { useState } from "react";
import { services } from "../Constants";
import {motion} from 'framer-motion'
import { AiOutlineArrowRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Services = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 30,
    },
    480: {
      slidesPerView: 1.5,
      spaceBetween: 40,
    },
    708: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 100,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 150,
    },
  };

  const [isHovered, setIsHovered] = useState();

  const handleMouseEnter = (s) => {
    setIsHovered(s?.id);
  };

  const handleMouseLeave = () => {
    setIsHovered('');
  };

  return (
    <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
            <p className="font-popins text-white text-[2rem] font-semibold w-full md:w-[40%]">Our network of talents are ready to help.</p>
            <div className="flex flex-col gap-4 w-full md:w-[60%]">
                <p className="font-poppins font-normal text-gray-300 text-[16px]">
                    Explore a world of possibilities with our dedicated team of experts. Whether you're looking for innovative solutions, reliable services, or expert guidance, we've got you covered.
                </p>
                <div className="flex items-center gap-2 cursor-pointer" onClick={()=>window.location.href='/contact'}>
                    <AiOutlineArrowRight className="text-[#46a2aa]" size={20}/>
                    <p className="text-[#46a2aa] font-poppins font-medium text-lg">Get a quote!</p>
                </div>
            </div>

        </div>
      </div>
        <Swiper
         breakpoints={breakpoints}
         className="overflow-visible"
         >
        {services.map((s,i) => (
         <SwiperSlide>
          <div 
            onMouseEnter={()=>handleMouseEnter(s)}
            onMouseLeave={handleMouseLeave} className={`w-[300px] transition-all duration-300 h-max rounded-2xl bg-[#262836] flex flex-col items-start justify-start gap-4 p-8 ${isHovered==s?.id&&'box-shadow scale-[1.03]'}`}>
            <span className="p-4 rounded-full font-medium font-poppins text-lg text-white bg-[#46a2aa] flex justify-center items-center"><img src={s?.logo} alt="" className="object-fit w-[25px] h-[25px]"/></span>
            <p className="font-poppins font-medium text-lg text-white">{s?.title}</p>
            <p className="font-poppins font-normal text-sm text-gray-300">{s?.content}</p>
            <div className="flex items-center gap-2 cursor-pointer" onClick={()=>window.location.href=`/${s?.link}`}>
              <p className="text-white font-poppins font-normal text-[17px] border-b border-b-[#46a2aa]">Learn more</p>
              <AiOutlineArrowRight className="text-white" size={20}/>
            </div>
          </div>
          </SwiperSlide>
         ))}
        </Swiper>
    </section>
  );
};

export default Services;
