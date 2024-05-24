"use client";
import React, { useEffect, useState } from "react";
import "./MainPage.css";
import { AllCard } from "./AllCard";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";

import { FaRegTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

export const DashbordMain = () => {
  const [openCourseLink, setOpenCourse] = useState(false);

  const createdCourses = () => {
    setOpenCourse(!openCourseLink);
  };

  const [searchingValue, setSearchingValue] = useState("");
  const [Loading, setLoading] = useState(true);
  const [Loading2, setLoading2] = useState(true);
  const [AcademicCourse, setAcademicCourse] = useState();
  const [SkillCourses, setSkillCourses] = useState();

  const [reloades, setReload] = useState(false);

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

    // -------- get skill base data loade------------
    async function fetchData2() {
      try {
        const result = await axios.get(
          `https://unitech-server.vercel.app/api/v1/courses/?searchTerm=&page=1&limit=12&sort=createdAt&sortOrder=desc`
        );

        setSkillCourses(result?.data?.data);

        setLoading2(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData2();
  }, [reloades]);

  // ----------- delete courses book -------------

  async function DeleteDeplomaCourses(id, name) {
    try {
      const response = await axios.delete(
        `https://unitech-server.vercel.app/api/v1/Academic-courses/${id}`
      );

      if (response?.data?.success) {
        Swal.fire({
          title: ` item : ${name}`,
          text: `Delete Complited`,
          icon: "success",
        });
        setReload(true);
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  }
  // -------------- Delete skill courses --------
  async function DeleteSkillCourses(id, name) {
    try {
      const response = await axios.delete(
        `https://unitech-server.vercel.app/api/v1/courses/${id}`
      );

      if (response?.data?.success) {
        Swal.fire({
          title: ` item : ${name}`,
          text: `Delete Complited`,
          icon: "success",
        });
        setReload(true);
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  }

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
              className="dark-light"
              type="checkbox"
              id="dark-light"
              name="dark-light"
            />

            <div className="menu-dropdown sec-center">
              <input
                className="dropdown"
                type="checkbox"
                id="dropdown"
                name="dropdown"
              />
              <label className="for-dropdown flex items-center" for="dropdown">
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
              <div className="section-dropdown">
                <a className="overView-a" href="#">
                  Yearly statistics<i className="uil uil-arrow-right"></i>
                </a>
                <input
                  className="dropdown-sub"
                  type="checkbox"
                  id="dropdown-sub"
                  name="dropdown-sub"
                />

                <a className="overView-a" href="#">
                  Monthly statistics <i className="uil uil-arrow-right"></i>
                </a>
                <a className="overView-a" href="#">
                  Weekly statistics <i className="uil uil-arrow-right"></i>
                </a>
                <a className="overView-a" href="#">
                  Day statistics <i className="uil uil-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          < />
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

          {/* --------------------- diploma academic ------------ */}
          <div className="diploma_Academic mt-10">
            <h1 className="text-[25px] md:text-start font-[800] text-[#1f1f1fea]  text-center">
              Diploma Academic Courses
            </h1>
            {Loading2 ? (
              <>
                <>
                  <div class="hidden mx-auto md:grid md:grid-cols-4 gap-8  items-center justify-center mt-5">
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
                  <div className="md:hidden flex justify-center items-center">
                    <div class="w-[100%] px-5 rounded overflow-hidden shadow-lg animate-pulse">
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
              </>
            ) : (
              <>
                <div className="w-[350px] h-[5px] bg-[#F89521] mx-auto md:mx-0 mt-1"></div>
                <div className=" flex flex-wrap md:grid gap-y-8 md:gap-8 md:grid-cols-2 lg:grid-cols-3  justify-center items-center mt-8">
                  {AcademicCourse &&
                    Array.isArray(AcademicCourse) &&
                    AcademicCourse.map((single, index) => (
                      <div
                        key={index}
                        className="course-Card border-4 border-[#23232334] overflow-hidden bg-[#fff] rounded-md "
                      >
                        <div className="image relative">
                          <div className="bg-[#0008] w-[100%] h-[100%] absolute rounded-t-md">
                            <div className="flex justify-between w-[100%] items-center mt-[5px] px-[5px]">
                              <p className="bg-[#fff] text-black rounded-full w-[16px] text-center text-[12px] font-[600]">
                                {index + 1}
                              </p>
                              <div
                                onClick={() =>
                                  DeleteDeplomaCourses(
                                    single?._id,
                                    single?.CName
                                  )
                                }
                                className="group flex relative"
                              >
                                <span className=" px-2 py-1">
                                  <FaRegTrashAlt className="text-white hover:text-red-700 cursor-pointer" />
                                </span>
                                <span className="group-hover:opacity-100 transition-opacity bg-red-800 px-1 pb-[2px] text-sm text-gray-100 rounded-md absolute left-[-1px] -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">
                                  delete
                                </span>
                              </div>
                            </div>
                          </div>
                          <Image
                            width={70}
                            height={70}
                            className="rounded-t-md d-image w-[100%] h-[230px] object-cover"
                            src={single?.courseImage}
                            alt=""
                          />
                          <h1 className="absolute bottom-0 text-[#fff] text-[18px] md:text-[25px] font-[700] pb-2 ps-2">
                            {single?.CName}
                          </h1>
                        </div>
                        <div className="px-2 pb-6 ">
                          <div className="all-button-courses flex flex-wrap justify-start items-center mt-5 gap-2 ">
                            <button className="bg-[#0000] flex gap-[2px] items-center px-2 py-[4px] border-2 border-[#955914] rounded-md text-[14px] font-[700] text-[#955914]">
                              {single?.updatedAt?.slice(0, 10)}
                            </button>

                            <button className="bg-[#0000] flex gap-[2px] items-center px-2 py-[4px] border-2 border-[#955914] rounded-md text-[14px] font-[700] text-[#955914]">
                              {single?.email}
                            </button>
                          </div>
                          <div className=" pt-3">
                            <div className="flex justify-between py-3 ">
                              <h1 className="font-[600] text-[22px]">
                                Tk.{" "}
                                <span className="font-[800] text-[18px] md:text-[22px] lg:text-[22px] ps-1">
                                  {single?.CPrice}
                                </span>
                              </h1>
                              <div className="review flex items-center gap-1 font-[600] text-[10px] md:text-[12px]">
                                <span className="font-[700] text-[12px] md:text-[14px]">
                                  <FaUser />
                                </span>
                                (637 enrolled)
                              </div>
                            </div>
                            <div className="mt-3 ">
                              <Link href={`/diplomaCourse/${single?._id}`}>
                                <button className="flex w-[100%] rounded-lg px-2 py-[10px] text-[16px] text-center justify-center font-[600] text-[#161616dd] bg-[#F89521]">
                                  Details Course
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </>
            )}
          </div>

          {/* -------------- skill base courses ------------ */}

          <div className="Skill-Development mt-16">
            <h1 className="text-[25px] md:text-start font-[800] text-[#1f1f1fea]  text-center">
              Skill Development Courses
            </h1>
            <div className="w-[350px] h-[5px] bg-[#F89521] mx-auto md:mx-0 mt-1"></div>
            {Loading ? (
              <>
                <>
                  <div class="hidden mx-auto md:grid md:grid-cols-4 gap-8  items-center justify-center mt-5">
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
                  <div className="md:hidden flex justify-center items-center">
                    <div class="w-[100%] px-5 rounded overflow-hidden shadow-lg animate-pulse">
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
              </>
            ) : (
              <>
                <div className=" flex flex-wrap md:grid gap-y-8 md:gap-10   md:grid-cols-2 lg:grid-cols-3  justify-center items-center mt-5">
                  {SkillCourses &&
                    Array.isArray(SkillCourses) &&
                    SkillCourses.map((single, index) => (
                      <div
                        key={index}
                        className="course-Card border-4 border-[#23232334] overflow-hidden bg-[#fff] rounded-md "
                      >
                        <div className="image relative">
                          <div className="bg-[#0008] w-[100%] h-[100%] absolute rounded-t-md">
                            <div className="flex justify-between w-[100%] items-center mt-[5px] px-[5px]">
                              <p className="bg-[#fff] text-black rounded-full w-[16px] text-center text-[12px] font-[600]">
                                {index + 1}
                              </p>
                              <div
                                onClick={() =>
                                  DeleteSkillCourses(
                                    single?._id,
                                    single?.courseName
                                  )
                                }
                                className="group flex relative"
                              >
                                <span className=" px-2 py-1">
                                  <FaRegTrashAlt className="text-white hover:text-red-700 cursor-pointer" />
                                </span>
                                <span className="group-hover:opacity-100 transition-opacity bg-red-800 px-1 pb-[2px] text-sm text-gray-100 rounded-md absolute left-[-1px] -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">
                                  delete
                                </span>
                              </div>
                            </div>
                          </div>
                          <Image
                            width={160}
                            height={160}
                            className="rounded-t-md d-image w-[100%] h-[230px] object-cover"
                            src={single?.CImage}
                            alt=""
                          />
                          <h1 className="absolute bottom-0 text-[#fff] text-[18px] md:text-[25px] font-[700] pb-2 ps-2">
                            {single?.CName}
                          </h1>
                        </div>
                        <div className="px-2 pb-6 ">
                          <div className="all-button-courses flex flex-wrap justify-start items-center mt-5 gap-2 ">
                            <button className="bg-[#0000] flex gap-[2px] items-center px-2 py-[4px] border-2 border-[#955914] rounded-md text-[14px] font-[700] text-[#955914]">
                              {single?.updatedAt?.slice(0, 10)}
                            </button>
                            <button className="bg-[#0000] flex gap-[2px] items-center px-2 py-[4px] border-2 border-[#955914] rounded-md text-[14px] font-[700] text-[#955914]">
                              {single?.email}
                            </button>
                          </div>
                          <div className="">
                            <div className="flex justify-between py-3 ">
                              <h1 className="font-[600] text-[22px]">
                                Tk.{" "}
                                <span className="font-[800] text-[18px] md:text-[22px] lg:text-[22px] ps-1">
                                  {single?.CPrice}
                                </span>
                              </h1>
                              <div className="review flex items-center gap-1 font-[600] text-[10px] md:text-[12px]">
                                <span className="font-[700] text-[12px] md:text-[14px]">
                                  <FaUser />
                                </span>
                                (637 enrolled)
                              </div>
                            </div>
                            <div className="mt-3 ">
                              <Link href={`/DetailsCourse/${single?._id}`}>
                                <button className="flex w-[100%] rounded-lg px-2 py-[10px] text-[16px] text-center justify-center font-[600] text-[#161616dd] bg-[#F89521]">
                                  Details Course
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
