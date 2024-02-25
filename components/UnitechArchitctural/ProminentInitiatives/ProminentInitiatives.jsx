"use client";

import React, { useState } from "react";
import "../UnitechArchitctural.css";
import icon1 from "@/app/Assets/Archtctural landing page/icon/1.png";
import icon2 from "@/app/Assets/Archtctural landing page/icon/2.png";
import icon3 from "@/app/Assets/Archtctural landing page/icon/3.png";
import icon4 from "@/app/Assets/Archtctural landing page/icon/4.png";
import icon5 from "@/app/Assets/Archtctural landing page/icon/5.png";
import Image from "next/image";

export const ProminentInitiatives = () => {
  const [displaydata, setdata] = useState({
    id: "1",
    icon: icon1,
    name: "Our Goal",
    title:
      "We aspire to empower the young generation providing quality training on trendy topics.",
    paragraph: "",
  });

  const cetagoryDetails = [
    {
      id: "1",
      icon: icon1,
      name: "Our Goal",
      title:
        "We aspire to empower the young generation providing quality training on trendy topics.",
      paragraph: "",
    },
    {
      id: "2",
      icon: icon2,
      name: "Our Vision",
      title: "",
      paragraph: "",
    },
    {
      id: "3",
      icon: icon3,
      name: "History",
      title:
        "Unitech Architectural is an engineering firm that designs beautiful and quality complete buildings at low cost",
      paragraph: "",
    },
    {
      id: "4",
      icon: icon4,
      name: "Culture",
      title: "",
      paragraph: "",
    },
    {
      id: "5",
      icon: icon5,
      name: "Our Values",
      title: "",
      paragraph: "",
    },
  ];

  return (
    <>
      <div className="mt-16">
        <div className="md:flex gap-10 ">
          <div className="flex flex-wrap md:flex-col bg-[#FAF9FD] w-[100%] md:w-[25%] rounded-md py-5">
            {cetagoryDetails?.map((item) => (
              <>
                <button
                  onClick={() => setdata(item)}
                  className=" px-5 py-3 mt-3 text-[12px] flex items-center gap-3 md:text-[18px] font-[600] hover:border-l-4  border-amber-600 hover:bg-[#fff]"
                >
                  <Image width={25} className="" src={item?.icon} alt="" />{" "}
                  {item?.name}
                </button>
              </>
            ))}
          </div>

          <div className="w-[100%] border-t-2 border-b-2 flex flex-col items-center  py-10 md:py-0 md:mt-0 justify-center">
            <h1 className="text-[30px] font-[600] ">{displaydata?.name}</h1>
            <p className="text-[16px] font-[600] text-[#707275]">
              {displaydata?.title}
            </p>
          </div>
        </div>
        {/* ------Prominent Initiatives----- */}

        <div className="mt-20">
          <h1 className="text-[30px] font-[600] text-[#000]">
            Prominent Initiatives
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 gap-y-10 justify-center items-center mt-10">
            {/* ----- card box ---- */}
            <div className="p-5 bg-[#FAF9FD] border-r-4 border-[#f8931f6a] rounded-lg">
              <h1 className="text-[25px] font-[600] text-[#F8931F]">6000+</h1>
              <p className="text-[18px] font-[400] text-[#000000]">
                Students recieved career counseling
              </p>
            </div>
            {/* ----- card box ---- */}
            <div className="p-5 bg-[#FAF9FD] border-r-4 border-[#f8931f6a] rounded-lg">
              <h1 className="text-[25px] font-[600] text-[#F8931F]">3000+</h1>
              <p className="text-[18px] font-[400] text-[#000000]">
                Women got IT training on full free scholarship
              </p>
            </div>
            {/* ----- card box ---- */}
            <div className="p-5 bg-[#FAF9FD] border-r-4 border-[#f8931f6a] rounded-lg">
              <h1 className="text-[25px] font-[600] text-[#F8931F]">1000+</h1>
              <p className="text-[18px] font-[400] text-[#000000]">
                Students get online intership facilitiy
              </p>
            </div>
            {/* ----- card box ---- */}
            <div className="p-5 bg-[#FAF9FD] border-r-4 border-[#f8931f6a] rounded-lg">
              <h1 className="text-[25px] font-[600] text-[#F8931F]">100+</h1>
              <p className="text-[18px] font-[400] text-[#000000]">
                Physically challanged people recieved IT training
              </p>
            </div>
            {/* ----- card box ---- */}
            <div className="p-5 bg-[#FAF9FD] border-r-4 border-[#f8931f6a] rounded-lg">
              <h1 className="text-[25px] font-[600] text-[#F8931F]">4000+</h1>
              <p className="text-[18px] font-[400] text-[#000000]">
                Financially deprive got IT scholarship
              </p>
            </div>
            {/* ----- card box ---- */}
            <div className="p-5 bg-[#FAF9FD] border-r-4 border-[#f8931f6a] rounded-lg">
              <h1 className="text-[25px] font-[600] text-[#F8931F]">200+</h1>
              <p className="text-[18px] font-[400] text-[#000000]">
                Polytechnics are attached for training
              </p>
            </div>
            {/* ----- card box ---- */}
            <div className="p-5 bg-[#FAF9FD] border-r-4 border-[#f8931f6a] rounded-lg">
              <h1 className="text-[25px] font-[600] text-[#F8931F]">50+</h1>
              <p className="text-[18px] font-[400] text-[#000000]">
                Senior citizens ot scolarship in IT
              </p>
            </div>
            {/* ----- card box ---- */}
            <div className="p-5 bg-[#FAF9FD] border-r-4 border-[#f8931f6a] rounded-lg">
              <h1 className="text-[25px] font-[600] text-[#F8931F]">200+</h1>
              <p className="text-[18px] font-[400] text-[#000000]">
                Buildings Plan Design
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
