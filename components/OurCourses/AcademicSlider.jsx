"use client";
import Slider from "react-slick";
import React, { Component, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Academic.css";
import course1 from "@/app/Assets/All Courses Image/course1.jpg";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const AcademicSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [Loading, setLoading] = useState(true);
  const [AcademicCourse, setAcademicCourse] = useState();

  useEffect(() => {
    // ------- academic courses--------
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://unitech-server.vercel.app/api/v1/Academic-courses/?searchTerm=&page=1&limit=12&sort=createdAt&sortOrder=desc`
        );

        setAcademicCourse(result?.data?.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  console.log("AcademicCourse", AcademicCourse);
  return (
    <div className="">
      {Loading && (
        <>
          <div class="max-w-screen-xl mx-auto grid md:grid-cols-4 gap-8  items-center justify-center ">
            <div class="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
              <div class="h-48 bg-gray-300"></div>
              <div class="px-6 py-4">
                <div class="h-6 bg-gray-300 mb-2"></div>
                <div class="h-4 bg-gray-300 w-2/3"></div>
              </div>
              <div class="px-6 pt-4 pb-2">
                <div class="h-4 bg-gray-300 w-1/4 mb-2"></div>
                <div class="h-4 bg-gray-300 w-1/2"></div>
              </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
              <div class="h-48 bg-gray-300"></div>
              <div class="px-6 py-4">
                <div class="h-6 bg-gray-300 mb-2"></div>
                <div class="h-4 bg-gray-300 w-2/3"></div>
              </div>
              <div class="px-6 pt-4 pb-2">
                <div class="h-4 bg-gray-300 w-1/4 mb-2"></div>
                <div class="h-4 bg-gray-300 w-1/2"></div>
              </div>
            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
              <div class="h-48 bg-gray-300"></div>
              <div class="px-6 py-4">
                <div class="h-6 bg-gray-300 mb-2"></div>
                <div class="h-4 bg-gray-300 w-2/3"></div>
              </div>
              <div class="px-6 pt-4 pb-2">
                <div class="h-4 bg-gray-300 w-1/4 mb-2"></div>
                <div class="h-4 bg-gray-300 w-1/2"></div>
              </div>
            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
              <div class="h-48 bg-gray-300"></div>
              <div class="px-6 py-4">
                <div class="h-6 bg-gray-300 mb-2"></div>
                <div class="h-4 bg-gray-300 w-2/3"></div>
              </div>
              <div class="px-6 pt-4 pb-2">
                <div class="h-4 bg-gray-300 w-1/4 mb-2"></div>
                <div class="h-4 bg-gray-300 w-1/2"></div>
              </div>
            </div>
          </div>
        </>
      )}
      <Slider {...settings}>
        {AcademicCourse &&
          Array.isArray(AcademicCourse) &&
          AcademicCourse.map((semester, index) => (
            <>
              <div key={semester.id} className="p-5">
                <div className="course-Card-shadow overflow-hidden bg-[#fff] rounded-md ">
                  <div className="image relative">
                    <div className="bg-[#0008] w-[100%] h-[100%] absolute rounded-t-md"></div>
                    <Image
                      width={428}
                      height={450}
                      className="rounded-t-md d-image w-[100%] h-[270px]"
                      src={semester?.courseImage}
                      alt=""
                    />
                    <h1 className="absolute bottom-0 text-[#fff] text-[18px] md:text-[25px] font-[700] pb-2 ps-2">
                      {semester?.CName}
                    </h1>
                  </div>
                  <div className="px-2 pb-6 ">
                    <div className="all-button-courses flex flex-wrap justify-start items-center mt-5 gap-2 ">
                      <button className="bg-[#0000] flex gap-[2px] items-center px-2 py-[4px] border-2 border-[#955914] rounded-md text-[10px] lg:text-[14px] font-[700] text-[#955914]">
                        সময় {semester?.CDuration?.slice(0, 1)} মাস
                      </button>

                      <button className="bg-[#0000] flex gap-[2px] items-center px-2 py-[4px] border-2 border-[#955914] rounded-md text-[10px] lg:text-[14px] font-[700] text-[#955914]">
                        {semester?.CTotalClass?.slice(0, 6)} ক্লাস
                      </button>

                      <button className="bg-[#0000] flex gap-[2px] items-center px-2 py-[4px] border-2 border-[#955914] rounded-md text-[10px] lg:text-[14px] font-[700] text-[#955914]">
                        {semester?.CAssignment?.slice(0, 6)} অ্যাসাইনমেন্ট
                      </button>

                      <button className="bg-[#0000] flex gap-[2px] items-center px-2 py-[4px] border-2 border-[#955914] rounded-md text-[10px] lg:text-[14px] font-[700] text-[#955914]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M1.66667 7.04001L7.66667 10.5067C7.76802 10.5652 7.88298 10.596 8.00001 10.596C8.11703 10.596 8.23199 10.5652 8.33334 10.5067L14.3333 7.04001C14.4344 6.9814 14.5182 6.89729 14.5765 6.79608C14.6348 6.69488 14.6655 6.58013 14.6655 6.46334C14.6655 6.34655 14.6348 6.2318 14.5765 6.1306C14.5182 6.02939 14.4344 5.94528 14.3333 5.88667L8.33334 2.42001C8.23199 2.36149 8.11703 2.33069 8.00001 2.33069C7.88298 2.33069 7.76802 2.36149 7.66667 2.42001L1.66667 5.88667C1.56565 5.94528 1.48179 6.02939 1.4235 6.1306C1.3652 6.2318 1.33452 6.34655 1.33452 6.46334C1.33452 6.58013 1.3652 6.69488 1.4235 6.79608C1.48179 6.89729 1.56565 6.9814 1.66667 7.04001ZM8.00001 3.76667L12.6667 6.43334L8.00001 9.13334L3.33334 6.46L8.00001 3.76667ZM13.6667 8.96L8.00001 12.2333L2.33334 8.96C2.25765 8.91565 2.17395 8.88667 2.08703 8.87473C2.00012 8.86279 1.9117 8.86812 1.82685 8.89041C1.742 8.91271 1.66239 8.95153 1.59257 9.00466C1.52276 9.05779 1.46412 9.12417 1.42001 9.20001C1.37593 9.27609 1.34734 9.36015 1.33588 9.44734C1.32443 9.53452 1.33033 9.62311 1.35326 9.70801C1.37619 9.7929 1.41568 9.87242 1.46947 9.94199C1.52326 10.0115 1.59028 10.0698 1.66667 10.1133L7.66667 13.58C7.76802 13.6385 7.88298 13.6693 8.00001 13.6693C8.11703 13.6693 8.23199 13.6385 8.33334 13.58L14.3333 10.1133C14.4097 10.0698 14.4768 10.0115 14.5305 9.94199C14.5843 9.87242 14.6238 9.7929 14.6468 9.70801C14.6697 9.62311 14.6756 9.53452 14.6641 9.44734C14.6527 9.36015 14.6241 9.27609 14.58 9.20001C14.5359 9.12417 14.4773 9.05779 14.4074 9.00466C14.3376 8.95153 14.258 8.91271 14.1732 8.89041C14.0883 8.86812 13.9999 8.86279 13.913 8.87473C13.8261 8.88667 13.7424 8.91565 13.6667 8.96Z"
                            fill="#955914"
                          />
                        </svg>
                        {semester?.CExam?.slice(0, 5)} ক্লাস পরিক্ষা
                      </button>
                      <button className="bg-[#0000] flex gap-[2px] items-center px-2 py-[4px] border-2 border-[#955914] rounded-md text-[10px] lg:text-[14px] font-[700] text-[#955914]">
                        views {semester?.view}
                      </button>
                    </div>
                    <div className="">
                      <div className="flex justify-between py-3 ">
                        <h1 className="font-[600] text-[16px] md:text-[18px] whitespace-nowrap pe-2">
                          মূল্য{" "}
                          <span className="font-[900] text-[18px] md:text-[28px]  ps-[1px]">
                            {semester?.CPrice}
                          </span>
                          <span className="text-[12px] font-[600] ps-[3px]">
                            টাকা
                          </span>
                        </h1>
                        <div className="review underline flex items-center gap-1 font-[600] text-[10px] md:text-[12px] whitespace-nowrap">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="16"
                            width="18"
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="#e7ca08"
                              d="M309.5 13.5C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5L197.7 154.8 44.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L142.2 328.4 116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L433.6 328.4 544.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L378.1 154.8 309.5 13.5zM288 384.7V79.1l52.5 108.1c3.5 7.1 10.2 12.1 18.1 13.3l118.3 17.5L391 303c-5.5 5.5-8.1 13.3-6.8 21l20.2 119.6L299.2 387.5c-3.5-1.9-7.4-2.8-11.2-2.8z"
                            />
                          </svg>
                          <span className="font-[700] text-[12px] md text-[10px]:lg:text-[14px]">
                            4.7{" "}
                          </span>
                          (637 Reviews)
                        </div>
                      </div>
                      <div className="mt-3">
                        <Link href={`/diplomaCourse/${semester?.id}`}>
                          <button className="flex w-[100%] rounded-lg px-2 py-[10px] text-[14px] md:text-[17px] text-center justify-center font-[800] text-[#161616dd] bg-[#F89521]">
                            Details Course
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
      </Slider>
    </div>
  );
};

export default AcademicSlider;
