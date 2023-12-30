import React from "react";
import "./CourseDetails.css";
export const CourseDetails = () => {
  return (
    <>
      <div className="d">
        <div className="flex flex-col-reverse md:grid grid-cols-2 gap-5 md:gap-x-10 justify-center  md:h-[60vh] ">
          <div className="container-text">
            <div className="banner-informaton">
              <h1 className="text-[35px] font-bold md:text-start text-center SILIGURI">
                Modern Web Design
              </h1>
              <div className="flex gap-5 flex-wrap md:justify-start justify-center mt-5">
                <div className="border-2 px-5 py-3 rounded-lg">
                  <p className="text-[14px] text-center text-slate-500">
                    Duration
                  </p>
                  <h1 className="text-[18px] text-center font-bold text-slate-800">
                    {" "}
                    6 Month
                  </h1>
                </div>
                <div className="border-2 px-5 py-3 rounded-lg">
                  <p className="text-[14px] text-center text-slate-500">
                    Total Class
                  </p>
                  <h1 className="text-[18px] text-center font-bold text-slate-800">
                    {" "}
                    52
                  </h1>
                </div>
                <div className="border-2 px-5 py-3 rounded-lg">
                  <p className="text-[14px] text-center text-slate-500">
                    Assignment
                  </p>
                  <h1 className="text-[18px] text-center font-bold text-slate-800">
                    {" "}
                    6+
                  </h1>
                </div>
                <div className="border-2 px-5 py-3 rounded-lg">
                  <p className="text-[14px] text-center text-slate-500">
                    Projects
                  </p>
                  <h1 className="text-[18px] text-center font-bold text-slate-800">
                    {" "}
                    20+
                  </h1>
                </div>
              </div>
              <p className="py-5  text-justify text-[18px] font-[400] SILIGURI">
                Web Design bring stunning visuals to life using movements . A
                report by MIT shows, human brain takes a brief moment, only 13
                milliseconds to process visual content. As a result, many
                companies are using motion graphics to engage the audience with
                ideas. If you have the basic knowledge on making intro or
                broadcasting videos, this course is for you.
              </p>
              <div className="flex md:justify-start gap-5 justify-center mt-2">
                <button className="SILIGURI px-6 py-4 bg-amber-600 hover:bg-amber-500 text-white text-[16px] font-[600] rounded-md">
                  Admition Now
                </button>
                <button className="SILIGURI px-6 py-4 bg-[#080D2A] hover:bg-[#151b3f] text-white text-[16px] font-[600] rounded-md">
                  Join Free Class
                </button>
              </div>
            </div>
          </div>
          <div className="container-video mx-auto flex justify-center w-[100%] md:h-[60dvh]">
            <iframe
              width="625"
              className="rounded-[20px] md:flex hidden"
              height="412"
              src="https://www.youtube.com/embed/C72WkcUZvco?si=dTpdbvUlT_1ZKe2l"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="425"
              className="rounded-[20px] md:hidden"
              height="300"
              src="https://www.youtube.com/embed/C72WkcUZvco?si=dTpdbvUlT_1ZKe2l"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        {/* ---------------- sedule courses ---------------- */}
        <div className="Course-Curriculum mt-20">
          <h1 className="text-[30px] font-bold py-5 flex gap-1 items-center">
            {" "}
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                width="30"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </span>{" "}
            Course Curriculum
          </h1>
          <div class="flex md:justify-start justify-center items-center  ">
            {/* <!-- Component Start --> */}
            <div class="flex flex-col w-full">
              <button class="group border-t border-r border-l border-slate-300 focus:outline-none">
                <div class="flex items-center justify-between h-14 px-3 font-semibold hover:bg-gray-200">
                  <span class="truncate">
                    Module-1 Modern Web Design Introduction.
                  </span>
                  <svg
                    class="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-01 ] Basic web design
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-02 ] Tools Code Editor Setup (vsCode).
                  </a>
                </div>
              </button>
              <button class="group border-t border-r border-l  border-slate-300 focus:outline-none">
                <div class="flex items-center justify-between h-14 px-3 font-semibold hover:bg-gray-200">
                  <span class="truncate">
                    {" "}
                    Module-2 Let s Start Html5 Coding.
                  </span>
                  <svg
                    class="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-03 ] Basic Html Stucture.
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-04 ] Advance Html5
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-05 ] Practis day
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-06 ] Assignment-1
                  </a>
                </div>
              </button>
              <button class="group border border-slate-300 focus:outline-none">
                <div class="flex items-center justify-between h-14 px-3 font-semibold hover:bg-gray-200">
                  <span class="truncate"> Module-3 Modern Style CSS3</span>
                  <svg
                    class="h-4 w-4 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-07 ] Basic Modern CSS3.
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-08 ] Advance Modern CSS3
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-09 ] Practic Day
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-10 ] Assigment-2
                  </a>
                </div>
              </button>
              <button class="group border border-slate-300 focus:outline-none">
                <div class="flex items-center justify-between h-14 px-3 font-semibold hover:bg-gray-200">
                  <span class="truncate">
                    {" "}
                    Module-4 Responsive Web Design any device
                  </span>
                  <svg
                    class="h-4 w-4 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-11 ] Basic Responsive Design
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-12 ] Advance Responsive Web page.
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-13 ] Practic Day
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-14 ] Assignment-4
                  </a>
                </div>
              </button>
              <button class="group border border-slate-300 focus:outline-none">
                <div class="flex items-center justify-between h-14 px-3 font-semibold hover:bg-gray-200">
                  <span class="truncate">
                    {" "}
                    Module-5 Css framework [Bootstrap]
                  </span>
                  <svg
                    class="h-4 w-4 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-15 ] Introduction Bootstrap-5
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-16 ] Basic Bootstrap-5
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-17 ] Advance Bootstrap-5
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-17 ] Practic Day
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-18 ] Assignment-5
                  </a>
                </div>
              </button>
              <button class="group border border-slate-300 focus:outline-none">
                <div class="flex items-center justify-between h-14 px-3 font-semibold hover:bg-gray-200">
                  <span class="truncate">
                    {" "}
                    Module-6 Bootstrap, Html, Css Project
                  </span>
                  <svg
                    class="h-4 w-4 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-21 ] Html, Css, Bootstrap landing page design-1.
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-22 ] Html, Css, Bootstrap landing page design-2.
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-23 ] Html, Css, Bootstrap landing page design-3.
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-24 ] Html, Css, Bootstrap 5 page full project.
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-25 ] Assignment-6.
                  </a>
                </div>
              </button>
              <button class="group border border-slate-300 focus:outline-none">
                <div class="flex items-center justify-between h-14 px-3 font-semibold hover:bg-gray-200">
                  <span class="truncate">
                    {" "}
                    Module-7 Css framework [TailWindCSS]
                  </span>
                  <svg
                    class="h-4 w-4 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-19 ] Introduction TailWindCSS
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-20 ] Basic TailWindCSS
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-21 ] Advance TailWindCSS
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-22 ] Practic Day
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-23 ] Assignment-7
                  </a>
                </div>
              </button>
              <button class="group border border-slate-300 focus:outline-none">
                <div class="flex items-center justify-between h-14 px-3 font-semibold hover:bg-gray-200">
                  <span class="truncate">
                    {" "}
                    Module-8 Tailwind, Html, Css Project
                  </span>
                  <svg
                    class="h-4 w-4 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-24 ] Html, Css, Tailwind Css landing page design-1.
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-25 ] Html, Css, Tailwind Css landing page design-2.
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-26 ] Html, Css, Tailwind Css landing page design-3.
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-27 ] Html, Css, Tailwind Css 5 page full project.
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-28 ] Assignment-8.
                  </a>
                </div>
              </button>
              <button class="group border border-slate-300 focus:outline-none">
                <div class="flex items-center justify-between h-14 px-3 font-semibold hover:bg-gray-200">
                  <span class="truncate"> Module-9 Advance JavaScript.</span>
                  <svg
                    class="h-4 w-4 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-29 ] Introduction JavaScript
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-30 ] Basic JavaScript
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-31 ] Advance JavaScript
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-32 ] Practic Day
                  </a>
                  <a
                    class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                    href="#"
                  >
                    [ Class-33 ] Assignment-7
                  </a>
                </div>
              </button>
            </div>
            {/* <!-- Component End  --> */}
          </div>
        </div>
      </div>
    </>
  );
};
