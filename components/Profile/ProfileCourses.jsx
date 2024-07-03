"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
export const ProfileCourses = ({ cookiesInfo }) => {
  const [Loading, setLoading] = useState(true);
  const [EnrollCourses, setEnrollCourses] = useState();

  useEffect(() => {
    // ------- all this user enroll courses courses--------
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://api.unitechbangladesh.com/api/v1/enroll/?searchTerm=${cookiesInfo?.email}&page=1&limit=1000&sort=createdAt&sortOrder=desc`
        );

        setEnrollCourses(result?.data?.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {Loading ? (
        <>
          <div class="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-8  items-center justify-center mt-5">
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
      ) : (
        <div className="py-10 bg-gradient-to-tr from-[#ededed] to-white flex flex-col justify-center items-center">
          <div className="pb-5 ">
            <h1 className="pt-5 text-[18px] md:text-[22px] font-[600] uppercase">
              All enroll Courses
            </h1>
            <div className="w-[80px] h-[5px] bg-blue-600 mx-auto mt-2"></div>
          </div>

          <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
            {EnrollCourses?.map((item, index) => (
              <>
                {item?.status === "success" ? (
                  <>
                    <div
                      key={index}
                      className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
                    >
                      <h3 className="mb-3 text-xl font-bold text-indigo-600">
                        {item?.CCetagory === "Skill"
                          ? "Skill Development"
                          : "Academic Course"}
                      </h3>

                      <div className="relative">
                        <Image
                          className="w-full rounded-xl"
                          src={item?.courseImage}
                          width={400}
                          height={400}
                          alt="Colors"
                        />
                        <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                          {item?.CDuration}
                        </p>
                      </div>
                      <h1 className="mt-4 text-gray-800 text-[25px] font-bold cursor-pointer">
                        {item?.CName}{" "}
                        <span className="ps-1 text-amber-700 text-[14px] font-[600]">
                          {item?.CBatch}
                        </span>
                      </h1>

                      <div className="my-4 mt-1">
                        <div className="flex space-x-1 items-center">
                          <p className="text-green-600 text-[18px] font-[600]">
                            {item?.status}
                          </p>
                        </div>
                        <div className="flex space-x-1 items-center">
                          <p>Price : {item?.CPrice}</p>
                        </div>
                        <div className="flex space-x-1 items-center">
                          <p>Roll : {item?.SRoll}</p>
                        </div>
                        <div className="flex space-x-1 items-center">
                          <p>Phone : {item?.SPhone}</p>
                        </div>
                        <div className="flex space-x-1 items-center">
                          <p>Enroll Request date : {item?.CreateDate}</p>
                        </div>

                        <Link
                          href={`${
                            item?.CCetagory === "Skill"
                              ? `/DetailsCourse/${item?.CourseID}`
                              : `/diplomaCourse/${item?.CourseID}`
                          }`}
                        >
                          <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
                            See Course
                          </button>
                        </Link>
                      </div>
                    </div>
                  </>
                ) : null}
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
