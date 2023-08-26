import React from "react";
import { logo, nodelogo } from "../assets";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { services } from "../Constants";
import {motion} from 'framer-motion'

const Services = () => {
  return (
    <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4">
          <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
            <motion.span className="font-semibold text-lg text-primary mb-2 block"
            initial={{
              opacity:0,
              y:200,
          }}
          whileInView={{
              opacity:1,
              y:0,
              transition:{
                  delay:0.10,
                  duration:0.50,
              }
          }}
          viewport={{
              once:true,
          }}>
              Our Services
            </motion.span>
            <motion.h2
              className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                  initial={{
                    opacity:0,
                    y:200,
                }}
                whileInView={{
                    opacity:1,
                    y:0,
                    transition:{
                        delay:0.25,
                        duration:0.50,
                    }
                }}
                viewport={{
                    once:true,
                }}
            >
              What We Offer
            </motion.h2>
            <motion.p className="text-base text-body-color"
            initial={{
              opacity:0,
              y:200,
          }}
          whileInView={{
              opacity:1,
              y:0,
              transition:{
                  delay:0.35,
                  duration:0.50,
              }
          }}
          viewport={{
              once:true,
          }}>
            With strategic insights, we amplify digital footprints, fostering growth through impactful solutions.
            </motion.p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4">
        {services.map((s,i) => (
          <div
            className="md:w-1/2 lg:w-1/3 px-4 group hover:scale-[1.02] transition-all duraiton-200 ease-in cursor-pointer h-[350px] w-[400px]"
            key={s?.id}
          >
            <motion.div
              className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               max-h-[100%]
               transition-all
               duration-300
               ease-in
               "
               initial={{
                opacity:0,
                y:100,
               }}
               whileInView={{
                opacity:1,
                y:0,
                transition:{
                  delay:0.15*i,
                  duration:0.50,
                }
               }}
               viewport={{
                once:true,
               }}
            >
              <div className="w-[70px] h-[70px] flex items-center justify-center bg-primary group-hover:bg-blue-500 transition-colors duration-200 ease-in rounded-2xl mb-8 relative left-[50%] translate-x-[-50%]">
                <img src={s?.logo} alt="" />
              </div>
              <h4 className="font-semibold text-xl text-dark mb-3 text-center">
                {s?.title}
              </h4>
              <p className="text-body-color text-center">
                {s?.content}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
