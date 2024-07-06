"use client";
import { Academic } from "@/components/OurCourses/Academic";
import { AllCoursesss } from "@/components/OurCourses/AllCoursesss";
import "./ourCourses.css";
import ourCourssBanner from "@/app/Assets/All Courses Image/banner.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { LoadingPage } from "@/components/Loading/LoadingPage";
const OurCourses = () => {
  const [Loading, setLoading] = useState(true);
  const [AcademicCourse, setAcademicCourse] = useState();
  const [SkillCourses, setSkillCourses] = useState();

  useEffect(() => {
    // ------- academic courses--------
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://api.unitechbangladesh.com/api/v1/Academic-courses/?searchTerm=&page=1&limit=120&sort=createdAt&sortOrder=desc`
        );

        setAcademicCourse(result?.data?.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    // -------- get skill base data loade------------
    async function fetchData2() {
      try {
        const result = await axios.get(
          `https://api.unitechbangladesh.com/api/v1/courses/?searchTerm=&page=1&limit=100&sort=createdAt&sortOrder=desc`
        );

        setSkillCourses(result?.data?.data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData2();
  }, []);

  return (
    <>
      <>
        <div className="max-w-screen-xl mx-auto">
          <div className="courses-banner w-[100%] overflow-hidden rounded-md h-[50vh] bg-slate-300 mt-2 text-center flex items-center justify-center text-[20px]">
            <Image
              width={0}
              height={0}
              className="h-[400px]"
              src={ourCourssBanner}
              alt=""
            />
          </div>
          <Academic />

          {/* ------------------- all Skill base courses ------------ */}
          <div className="border-t-2 my-20">
            <h1 className="text-center text-[1.7rem] md:text-[2rem] font-[600] pt-5 SILIGURI  mt-10">
              স্কিল ডেভেলপমেন্ট কোর্সেস
            </h1>
            <p className="text-center text-[16px] font-semibold SILIGURI py-1 text-[#667085] ">
              যে কেউ চাইলে করতে পারবে
            </p>
            {Loading && (
              <>
                <div class="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8  items-center justify-center mt-5">
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
            <div className="grid grid-cols-1 px-5 md:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-2 gap-y-5 md:gap-3 justify-center items-center mt-10">
              <AllCoursesss SkillCourses={SkillCourses} />
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default OurCourses;
