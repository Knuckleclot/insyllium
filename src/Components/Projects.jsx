import React, { useEffect, useState } from "react";
import styles from "../style";
import { insylinkphoto } from "../assets";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("");
  const [isActive, setIsActive] = useState("");

  const products = [
    {
      name: "Insylink",
      desc: "Introducing Insylink, the ultimate restaurant Point of Sale (POS) system designed for modern dining establishments. With its intuitive interface, Insylink streamlines operations, from order management to inventory control, ensuring efficiency and organization. The user-friendly touch-screen interface makes order entry a breeze, while real-time analytics empower informed decision-making.",
      img: insylinkphoto,
      ref:'https://www.insylink.com',
    },
  ];

  useEffect(() => {
    handleActiveTab(products[0]);
  }, []);

  const handleActiveTab = (p) => {
    setIsActive(p?.name);
    setActiveTab(p);
  };

  return (
    <div className={`${styles.flexCenter} py-20`}>
      <div class="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-4 items-center">
          <p className="font-poppins font-medium text-3xl text-white">
            Our Products
          </p>
          <p className="font-poppins font-normal text-[16px] text-center text-gray-300">
            We empower businesses with our revolutionary products.
          </p>
        </div>
        <div className="flex gap-8 items-center flex-wrap justify-center py-12 w-full">
          {products?.map((p) => (
            <p
              className={`font-poppins font-medium text-lg cursor-pointer pb-1 ${
                p?.name == isActive
                  ? "border-b-2 border-b-[#46a2aa] text-[#46a2aa]"
                  : "text-white border-b-2 border-b-gray-300"
              } transition-all duration-200`}
              onClick={() => handleActiveTab(p)}
            >
              {p?.name}
            </p>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-8">
          <div className="flex flex-col gap-8 w-full md:w-1/2 relative">
            <div className="turqouise__gradient w-full h-1/2 absolute top-20" />
            <p className="font-poppins font-medium text-3xl text-white">{activeTab?.name}</p>
            <p className="font-poppins font-normal text-lg text-gray-300">
              {activeTab?.desc ? activeTab?.desc : ""}
            </p>
            <button className="font-poppins font-medium text-[17px] text-white bg-[#46a2aa] px-4 py-2 rounded-lg w-max" onClick={()=>window.location.href=`${activeTab?.ref}`}>Learn more</button>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={activeTab?.img}
              alt=""
              className="object-contain rounded-3xl block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
