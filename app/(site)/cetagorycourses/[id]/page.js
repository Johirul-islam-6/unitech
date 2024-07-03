"use client";
import { AllCoursesss } from "@/components/OurCourses/AllCoursesss";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./cetagorycourses.css";
import axios from "axios";

const CetagoryCourses = () => {
  const { id } = useParams();

  const [Loading, setLoading] = useState(true);
  const [SkillCourses, setSkillCourses] = useState();

  useEffect(() => {
    // ------- academic courses--------
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://api.unitechbangladesh.com/api/v1/courses/?searchTerm=${id}&page=1&limit=200&sort=createdAt&sortOrder=desc`
        );

        setSkillCourses(result?.data?.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id]);
  console.log(SkillCourses?.length);
  return (
    <>
      <div className="mt-8 max-w-screen-xl mx-auto">
        <h1 className="text-[25px] font-bold uppercase text-center">
          {id} Courses
        </h1>
        {Loading && (
          <>
            <div class="max-w-screen-xl mx-auto grid md:grid-cols-4 gap-8  items-center justify-center mt-5">
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

        {SkillCourses?.length === 0 ? (
          <>
            <div className="h-[60vh] w-[100%] flex justify-center items-center">
              <h1 className="text-center font-bold text-[18px] text-amber-700">
                No Courses Available
              </h1>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 px-5 md:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-10 md:gap-3 justify-center items-center mt-10 pb-10">
            <AllCoursesss SkillCourses={SkillCourses} />
          </div>
        )}
      </div>
    </>
  );
};
export default CetagoryCourses;
