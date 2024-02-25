"use client";
import "./Project.css";
import React from "react";
import ProjectSlider from "./ProjectSlider";
import location from "@/app/Assets/Archtctural landing page/location.png";
import Image from "next/image";
import s1 from "@/app/Assets/Archtctural landing page/services/1.png";
import s2 from "@/app/Assets/Archtctural landing page/services/2.png";
import s3 from "@/app/Assets/Archtctural landing page/services/3.png";
import s4 from "@/app/Assets/Archtctural landing page/services/4.png";
import s5 from "@/app/Assets/Archtctural landing page/services/5.png";
import s6 from "@/app/Assets/Archtctural landing page/services/6.png";
import s7 from "@/app/Assets/Archtctural landing page/services/7.png";
import s8 from "@/app/Assets/Archtctural landing page/services/8.png";

export const OurInfrastructure = () => {
  return (
    <>
      <div className="mt-20">
        <ProjectSlider />
        <div>
          <h1 className="text-[25px] font-bold text-center mt-10">
            Our Address
          </h1>
          <div className="mt-10 flex md:gap-10 flex-row justify-center items-center">
            <div>
              <div className="Address-box p-5">
                <span className="flex gap-2 items-center  text-[18px] font-[600]">
                  <Image
                    width={15}
                    height={20}
                    className=""
                    src={location}
                    alt=""
                  />
                  Head Office
                </span>
                <p className="pt-3 ">
                  Room #707,14/A,Indira Road, Mahabub Plaza(6th floor),
                  Farmgate,Dhaka-1215
                </p>
              </div>
            </div>
            <div>
              <div className="hidden md:block Address-box p-5">
                <span className="flex gap-2 items-center  text-[18px] font-[600]">
                  <Image
                    width={15}
                    height={20}
                    className=""
                    src={location}
                    alt=""
                  />
                  Saver Office
                </span>
                <p className="pt-3 ">
                  Room #707,14/A,Indira Road, Mahabub Plaza(6th floor),
                  Farmgate,Dhaka-1215
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---- our Services --- */}

        <div className="mt-20 pb-10">
          <h1 className="text-[30px] font-bold text-center  ">Our Servies</h1>
          <div className="w-[15%] mx-auto border-2 border-amber-600 mt-5"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-5 justify-center items-center mt-16 ">
            {/* ----- serveic box---- */}
            <div className="service-box h-[185px] p-3  hover:border-amber-600 border-2  rounded-md">
              <div className="flex justify-center">
                <Image width={50} height={40} src={s1} alt="" />
              </div>
              <h1 className="text-[18px] font-[600] pt-3 text-[#000000a5] text-center">
                Municipal seat plan.
              </h1>
            </div>
            {/* ----- serveic box---- */}
            <div className="service-box h-[185px] p-3  hover:border-amber-600 border-2  rounded-md">
              <div className="flex justify-center">
                <Image width={50} height={40} src={s2} alt="" />
              </div>
              <h1 className="text-[18px] font-[600] pt-3 text-[#000000a5] text-center">
                Working drawing
              </h1>
            </div>
            {/* ----- serveic box---- */}
            <div className="service-box h-[185px] p-3  hover:border-amber-600 border-2  rounded-md">
              <div className="flex justify-center">
                <Image width={50} height={40} src={s3} alt="" />
              </div>
              <h1 className="text-[18px] font-[600] pt-3 text-[#000000a5] text-center">
                Structural Drawings
              </h1>
            </div>
            {/* ----- serveic box---- */}
            <div className="service-box h-[185px] p-3  hover:border-amber-600 border-2  rounded-md">
              <div className="flex justify-center">
                <Image width={50} height={40} src={s4} alt="" />
              </div>
              <h1 className="text-[18px] font-[600] pt-3 text-[#000000a5] text-center">
                Electrical drawing
              </h1>
            </div>
            {/* ----- serveic box---- */}
            <div className="service-box h-[185px] p-3 border-2  hover:border-amber-600 rounded-md">
              <div className="flex justify-center">
                <Image width={50} height={40} src={s5} alt="" />
              </div>
              <h1 className="text-[18px] font-[600] pt-3 text-[#000000a5] text-center">
                Materials Estimating
              </h1>
            </div>
            {/* ----- serveic box---- */}
            <div className="service-box h-[185px] p-3 border-2  hover:border-amber-600 rounded-md">
              <div className="flex justify-center">
                <Image width={50} height={40} src={s6} alt="" />
              </div>
              <h1 className="text-[18px] font-[600] pt-3 text-[#000000a5] text-center">
                Plumbing drawing
              </h1>
            </div>
            {/* ----- serveic box---- */}
            <div className="service-box h-[185px] p-3 border-2  hover:border-amber-600 rounded-md">
              <div className="flex justify-center">
                <Image width={50} height={40} src={s7} alt="" />
              </div>
              <h1 className="text-[18px] font-[600] pt-3 text-[#000000a5] text-center">
                Architectural drawing
              </h1>
            </div>
            {/* ----- serveic box---- */}
            <div className="service-box h-[185px] p-3 border-2  hover:border-amber-600 rounded-md">
              <div className="flex justify-center">
                <Image width={50} height={40} src={s8} alt="" />
              </div>
              <h1 className="text-[18px] font-[600] pt-3 text-[#000000a5] text-center">
                3D Design
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
