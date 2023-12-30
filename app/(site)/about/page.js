import React from "react";
import "./about.css";
import company from "@/app/Assets/about/office.png";
import misson from "@/app/Assets/about/misson.png";
import grows from "@/app/Assets/about/grows.png";
import mission from "@/app/Assets/about/mission.png";
import help from "@/app/Assets/about/help.png";
import Image from "next/image";
import GallarySlider from "./GallarySlider";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-banner relative">
          <div className="absolute left-10 top-[70px]">
            <h1 className="text-[#FFFFFF] font-[700] text-[30px] md:text-[50px]">
              About
            </h1>
            <p className="text-[#ffffffd2] font-[700] text-[16px] md:text-[20px]">
              Online Learning Solution in Bangladesh
            </p>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto">
          <div>
            <div className="about-container mt-20">
              {/* ------ about -company ---- */}
              <div className="flex flex-col-reverse md:grid grid-cols-2 justify-center items-center gap-5">
                <div className="text-container p-2">
                  <h1 className="text-[30px] font-[600]">
                    Who <span className="text-amber-700">We</span> Are
                  </h1>
                  <p className="text-[16px] font-[400] mt-4">
                    Incepted in 2015, Mediusware Ltd. has been serving as a
                    leading IT Solution provider in Bangladesh. Our aim is to
                    help businesses all around the world by providing the
                    digital solutions according to their need. Serving a number
                    of renowned companies from the USA, UK, and many other
                    countries, we have already created a wide range of satisfied
                    clients!
                  </p>
                </div>

                <div className="flex justify-end">
                  <Image
                    width={550}
                    height={400}
                    className="object-cover"
                    src={company}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* ------ about -why  ---- */}
            <div className="flex flex-col md:grid grid-cols-2 justify-center items-center gap-5 mt-10">
              <div className="flex justify-start">
                <Image
                  width={450}
                  height={400}
                  className="object-cover"
                  src={misson}
                  alt=""
                />
              </div>

              <div className="text-container p-2">
                <h1 className="text-[30px] font-[600]">
                  Why <span className="text-amber-700">Uni</span>tech
                </h1>
                <p className="text-[16px] font-[400] mt-4">
                  Incepted in 2015, Mediusware Ltd. has been serving as a
                  leading IT Solution provider in Bangladesh. Our aim is to help
                  businesses all around the world by providing the digital
                  solutions according to their need. Serving a number of
                  renowned companies from the USA, UK, and many other countries,
                  we have already created a wide range of satisfied clients!
                </p>
              </div>
            </div>
            {/* ------ about -why  ---- */}
            <div className="flex flex-col-reverse md:grid grid-cols-2 justify-center items-center gap-5 mt-10">
              <div className="text-container p-2">
                <h1 className="text-[30px] font-[600]">
                  Unitech <span className="text-amber-700">Gro</span>wth
                </h1>
                <p className="text-[16px] font-[400] mt-4">
                  Incepted in 2015, Mediusware Ltd. has been serving as a
                  leading IT Solution provider in Bangladesh. Our aim is to help
                  businesses all around the world by providing the digital
                  solutions according to their need. Serving a number of
                  renowned companies from the USA, UK, and many other countries,
                  we have already created a wide range of satisfied clients!
                </p>
              </div>
              <div className="flex justify-end">
                <Image
                  width={450}
                  height={400}
                  className="object-cover"
                  src={grows}
                  alt=""
                />
              </div>
            </div>
            {/* ------ about -why  ---- */}
            <div className="flex flex-col md:grid grid-cols-2 justify-center items-center gap-5 mt-10">
              <div className="flex justify-start">
                <Image
                  width={450}
                  height={400}
                  className="object-cover"
                  src={mission}
                  alt=""
                />
              </div>

              <div className="text-container p-2">
                <h1 className="text-[30px] font-[600]">
                  Our <span className="text-amber-700">Miss</span>ion
                </h1>
                <p className="text-[16px] font-[400] mt-4">
                  Incepted in 2015, Mediusware Ltd. has been serving as a
                  leading IT Solution provider in Bangladesh. Our aim is to help
                  businesses all around the world by providing the digital
                  solutions according to their need. Serving a number of
                  renowned companies from the USA, UK, and many other countries,
                  we have already created a wide range of satisfied clients!
                </p>
              </div>
            </div>
          </div>

          <div className="gallary mt-20 p-2">
            <h1 className="text-[20px] md:text-[30px] font-[600] ps-1">
              Gallery
            </h1>
            <GallarySlider />
          </div>
          <div className="flex flex-col md:grid grid-cols-2 w-[100%] justify-center items-center gap-5 my-20">
            <div className="text-container p-2 ">
              <h1 className="text-[20px] font-[600]">
                Let Us Help You Accelerate{" "}
                <span className="text-amber-700">
                  Your Digital Transformation
                </span>
              </h1>
              <p className="text-[16px] font-[400] mt-5">
                Leave a positive footprint by devoting our human resources,
                technologies and expertise to deliver top-of-the-line digital
                products, thereby contributing to the success of modern
                businesses around the globe.
              </p>
            </div>
            <div className="flex justify-end">
              <Image
                width={450}
                height={400}
                className="object-cover"
                src={help}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
