import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import styles from "../style";
import Footer from "./Footer";
import { projects } from "../Constants";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const Projects = () => {
  const [navbar, setNavbar] = useState(false);

  const changeNavBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  window.addEventListener("scroll", changeNavBackground);

  return (
    <div className={`${styles.flexCenter} flex-col`}>
      <div
        className={`w-full flex mb-4 fixed top-0 ${
          navbar ? "bg-white" : "bg-[#0f172a]"
        } z-[999] transition-colors duration-200 ease-in`}
      >
        <Navbar />
      </div>
      <div className={`${styles.boxWidth} mt-4 mb-4 sm:mb-0 sm:mt-20`}>
        <div class="flex flex-col items-center justify-center m-20">
              <img loading='lazy'
                src="https://cdn.pixabay.com/photo/2017/06/20/08/12/maintenance-2422173__340.png"
                className=" hover:shadow-2xl hover: transition-all duration-500"
                alt="tailwindcss maintenance"
              />
              <h1 class="mb-3 text-3xl font-bold text-center text-slate-900">
                Under Maintenance
              </h1>
              <p class="text-center text-gray-600">
                We're working hard to bring you something amazing! <br />
                Please stay tuned for updates. <br /> <br />
                <h1 className="scale-[2] text-slate-900 hover:text-cyan-800 transition-all duration-200">
                  - The Insyllium Team -
                </h1>
              </p>
        </div>
        {/* <div className="flex flex-col w-full my-20 h-min sm:h-[180px] items-start gap-8 sm:gap-0">
          <h1 className="flex-1 font-poppins font-semibold text-[38px] sm:text-[44px] text-gray-900 text-left">
            Projects
          </h1>
          <p className="font-poppins flex-1 font-normal text-[16px] text-gray-600 text-left max-w-[700px]">
            A window into the heart of Insyllium's software development prowess.
            Discover a range of cutting-edge projects that exemplify our team's
            passion for innovation and excellence. From sleek mobile apps to
            robust web solutions, each project showcases our commitment to
            merging creativity with functionality.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center mt-8">
          {projects.map((o, index) => (
            <motion.div
              className="flex flex-col"
              initial={{
                y: 100,
                opacity: 0,
              }}
              whileInView={{
                opacity: 100,
                y: 0,
                transition: {
                  delay: 0.15 * index,
                  duration: 0.25,
                },
              }}
              viewport={{
                once: true,
              }}
            >
              <img
                src={o?.image}
                alt=""
                className="w-full h-full object-contain rounded-xl"
              />
              <div className="flex justify-between items-center mt-2">
                <p className="font-poppins font-normal text-[20px] max-w-[350px] text-gray-900 text-left">
                  {o?.name}
                </p>
                <FiArrowUpRight
                  size={20}
                  className="text-gray-700"
                  onClick={() => {
                    window.location.href = `/${a?.link}`;
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div> */}
      </div>
      <div className={`bg-[#0f172a] w-full`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Projects;
