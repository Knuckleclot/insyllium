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

const Services = () => {
  return (
    <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4">
          <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
            <span className="font-semibold text-lg text-primary mb-2 block">
              Our Services
            </span>
            <h2
              className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
            >
              What We Offer
            </h2>
            <p className="text-base text-body-color">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4">
        {services.map((s) => (
          <div
            className="md:w-1/2 lg:w-1/3 px-4 group hover:scale-[1.02] transition-all duraiton-200 ease-in cursor-pointer h-[350px] w-[400px]"
            key={s?.id}
          >
            <div
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
               "
            >
              <div className="w-[70px] h-[70px] flex items-center justify-center bg-primary group-hover:bg-blue-500 transition-colors duration-200 ease-in rounded-2xl mb-8 relative left-[50%] translate-x-[-50%]">
                <img src={s?.logo} alt="" />
              </div>
              <h4 className="font-semibold text-xl text-dark mb-3 text-left sm:text-center">
                {s?.title}
              </h4>
              <p className="text-body-color text-left sm:text-center">
                {s?.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
