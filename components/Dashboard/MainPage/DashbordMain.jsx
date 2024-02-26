"use client";
import React, { useState } from "react";
import "./MainPage.css";
import { AllCard } from "./AllCard";
import Link from "next/link";
export const DashbordMain = () => {
  const [openCourseLink, setOpenCourse] = useState(false);

  const createdCourses = () => {
    setOpenCourse(!openCourseLink);
  };

  return (
    <>
      <div className="main-page-dashboard  relative z-10 ">
        <div className="over-view w-[100%] h-[auto] bg-[#F4F4F4] p-2 py-4 rounded-md">
          <div className=" flex justify-between">
            <h1 className="text-[20px] font-[700] text-[#0c0b15]  ">
              Overview
            </h1>
            {/* ----drop down--- */}
            <input
              class="dark-light"
              type="checkbox"
              id="dark-light"
              name="dark-light"
            />

            <div class="menu-dropdown sec-center">
              <input
                class="dropdown"
                type="checkbox"
                id="dropdown"
                name="dropdown"
              />
              <label class="for-dropdown flex items-center" for="dropdown">
                Total statistics
                <svg
                  className="uil"
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="10"
                  viewBox="0 0 512 512"
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </label>
              {/* ----- dropdown box ---- */}
              <div class="section-dropdown">
                <a className="overView-a" href="#">
                  Yearly statistics<i class="uil uil-arrow-right"></i>
                </a>
                <input
                  class="dropdown-sub"
                  type="checkbox"
                  id="dropdown-sub"
                  name="dropdown-sub"
                />

                <a className="overView-a" href="#">
                  Monthly statistics <i class="uil uil-arrow-right"></i>
                </a>
                <a className="overView-a" href="#">
                  Weekly statistics <i class="uil uil-arrow-right"></i>
                </a>
                <a className="overView-a" href="#">
                  Day statistics <i class="uil uil-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* -------box all system----- */}

          <div className="all-box grid grid-cols-2 gap-5  md:grid-cols-4  md:justify-start justify-center items-center mt-5 pb-2 ">
            {/* ----box -01 ---- */}
            <div className="Impressions bg-[#72bce7] px-4 py-6 rounded-lg dashbord-box-shadow ">
              <p className="text-[20px] font-[700] text-[#0c0b15]">
                Impressions
              </p>
              <div className="flex items-center ">
                <h1 className="total-count-number text-[30px] md:text-[40px] text-[#0c0b15] ">
                  79.1k
                </h1>
                <span className="text-[14px] font-[600] text-red-800 flex gap-1 md:mt-5 justify-end items-center ps-2">
                  +11.02%{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.6823 8.41165L21 6L18.9297 14.4092L16.3471 11.9298L12.181 16.2694C12.0396 16.4167 11.8442 16.5 11.64 16.5C11.4358 16.5 11.2404 16.4167 11.099 16.2694L8.04 13.083L3.54104 17.7694C3.25419 18.0682 2.77941 18.0779 2.4806 17.791C2.18179 17.5042 2.1721 17.0294 2.45896 16.7306L7.49896 11.4806C7.64039 11.3333 7.83578 11.25 8.04 11.25C8.24422 11.25 8.43961 11.3333 8.58104 11.4806L11.64 14.667L15.265 10.891L12.6823 8.41165Z"
                      fill="#111212"
                    />
                  </svg>
                </span>
              </div>
            </div>
            {/* ----box -02 ---- */}
            <div className="Visitors bg-[#d7d7d7] px-4 py-6 rounded-lg dashbord-box-shadow ">
              <p className="text-[18px] font-[700] text-[#0c0b15] ">Visitors</p>
              <div className="flex items-center ">
                <h1 className="total-count-number text-[30px] md:text-[40px] text-[#0c0b15] ">
                  79.1k
                </h1>
                <span className="text-[14px] font-[600] text-red-800 flex gap-1 md:mt-5 justify-end items-center ps-2">
                  +11.02%{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.5194 5.45896C21.8182 5.74582 21.8279 6.22059 21.541 6.5194L16.501 11.7694C16.3596 11.9167 16.1642 12 15.96 12C15.7558 12 15.5604 11.9167 15.419 11.7694L12.36 8.58298L8.73503 12.359L11.3177 14.8383L3 17.25L5.07029 8.84084L7.65295 11.3202L11.819 6.9806C11.9604 6.83328 12.1558 6.75 12.36 6.75C12.5642 6.75 12.7596 6.83328 12.901 6.9806L15.96 10.167L20.459 5.4806C20.7458 5.18179 21.2206 5.1721 21.5194 5.45896Z"
                      fill="#1C1C1C"
                    />
                  </svg>
                </span>
              </div>
            </div>
            {/* ----box -03 ---- */}
            {/* <div className="Engaged bg-[#fef4e9] px-4 py-6 rounded-lg dashbord-box-shadow ">
              <p className="text-[18px] font-[700] text-[#0c0b15]">Engaged</p>
              <div className="flex items-center ">
                <h1 className="total-count-number text-[30px] md:text-[40px] text-[#0c0b15]">
                  15k
                </h1>
                <span className="text-[14px] font-[600] text-red-800 flex gap-1 md:mt-5 justify-end items-center ps-2">
                  +15.03%{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.6823 8.41165L21 6L18.9297 14.4092L16.3471 11.9298L12.181 16.2694C12.0396 16.4167 11.8442 16.5 11.64 16.5C11.4358 16.5 11.2404 16.4167 11.099 16.2694L8.04 13.083L3.54104 17.7694C3.25419 18.0682 2.77941 18.0779 2.4806 17.791C2.18179 17.5042 2.1721 17.0294 2.45896 16.7306L7.49896 11.4806C7.64039 11.3333 7.83578 11.25 8.04 11.25C8.24422 11.25 8.43961 11.3333 8.58104 11.4806L11.64 14.667L15.265 10.891L12.6823 8.41165Z"
                      fill="#111212"
                    />
                  </svg>
                </span>
              </div>
            </div> */}
            {/* ----box -05 ---- */}
            <div className="Enrolled bg-[#fef4e9] px-4 py-6 rounded-lg dashbord-box-shadow ">
              <p className="text-[18px] font-[700] text-[#0c0b15]">Enrolled</p>
              <div className="flex items-center ">
                <h1 className="total-count-number text-[30px] md:text-[40px] text-[#0c0b15]">
                  90.2k
                </h1>
                <span className="text-[14px] font-[600] text-red-800 flex gap-1 md:mt-5 justify-end items-center ps-2">
                  +45.03%{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.6823 8.41165L21 6L18.9297 14.4092L16.3471 11.9298L12.181 16.2694C12.0396 16.4167 11.8442 16.5 11.64 16.5C11.4358 16.5 11.2404 16.4167 11.099 16.2694L8.04 13.083L3.54104 17.7694C3.25419 18.0682 2.77941 18.0779 2.4806 17.791C2.18179 17.5042 2.1721 17.0294 2.45896 16.7306L7.49896 11.4806C7.64039 11.3333 7.83578 11.25 8.04 11.25C8.24422 11.25 8.43961 11.3333 8.58104 11.4806L11.64 14.667L15.265 10.891L12.6823 8.41165Z"
                      fill="#111212"
                    />
                  </svg>
                </span>
              </div>
            </div>
            {/* ----box -06 ---- */}
            <div className="Total Users bg-[#d7d7d7] px-4 py-6 rounded-lg dashbord-box-shadow ">
              <p className="text-[18px] font-[700] text-[#0c0b15]">
                Total Users
              </p>
              <div className="flex items-center ">
                <h1 className="total-count-number text-[30px] md:text-[40px] text-[#0c0b15]">
                  22.2k
                </h1>
                <span className="text-[14px] font-[600] text-red-800 flex gap-1 md:mt-5 justify-end items-center ps-2">
                  +60.03%{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.6823 8.41165L21 6L18.9297 14.4092L16.3471 11.9298L12.181 16.2694C12.0396 16.4167 11.8442 16.5 11.64 16.5C11.4358 16.5 11.2404 16.4167 11.099 16.2694L8.04 13.083L3.54104 17.7694C3.25419 18.0682 2.77941 18.0779 2.4806 17.791C2.18179 17.5042 2.1721 17.0294 2.45896 16.7306L7.49896 11.4806C7.64039 11.3333 7.83578 11.25 8.04 11.25C8.24422 11.25 8.43961 11.3333 8.58104 11.4806L11.64 14.667L15.265 10.891L12.6823 8.41165Z"
                      fill="#111212"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* ------ all Courses ---- */}
        <div className="all-course-card mt-10">
          <div className="flex bg-[#f4f4f4be] justify-between items-center relative py-3 md:px-2">
            <h1 className="text-[18px] font-[700]  text-[#393A3A] underline">
              All Course
            </h1>

            <div className="div block relative z-30">
              <button
                onClick={() => createdCourses()}
                className="border-2 flex items-center gap-1 px-3 py-2 bg-[#00000004] text-[12px] font-[700] text-[#707070] rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 11H13V5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5V11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H11V19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z"
                    fill="#606161"
                  />
                </svg>{" "}
                Create New Course
              </button>
              {openCourseLink && (
                <>
                  <div className="flex flex-col bg-[#fff] border-2 px-2 rounded-md absolute z-40">
                    <Link
                      className="border-b-2 py-2"
                      href={"/dashboard/academic_course"}
                    >
                      Academic Courses
                    </Link>
                    <Link
                      className="border-b-2 py-2"
                      href={"/dashboard/skillBase_course"}
                    >
                      Skill Courses
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="diploma_Academic mt-10">
            <h1 className="text-center text-[18px] font-[600] md:text-[28px] uppercase ">
              Diploma Academic Courses
            </h1>
            <div className="w-[80px] h-[5px] bg-blue-600 mx-auto mt-3"></div>
            <div className=" flex flex-wrap md:grid gap-y-8 md:gap-3   md:grid-cols-2 lg:grid-cols-4  justify-center items-center mt-5">
              <AllCard />
              <AllCard />
              <AllCard />
              <AllCard />
            </div>
          </div>

          <div className="Skill-Development mt-10">
            <h1 className="text-center text-[18px] font-[600] md:text-[28px] uppercase ">
              Skill Development Courses
            </h1>
            <div className="w-[80px] h-[5px] bg-blue-600 mx-auto mt-3"></div>
            <div className=" flex flex-wrap md:grid gap-y-8 md:gap-3   md:grid-cols-2 lg:grid-cols-4  justify-center items-center mt-5">
              <AllCard />
              <AllCard />
              <AllCard />
              <AllCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
