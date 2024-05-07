"use client";
import { AllCoursesss } from "@/components/OurCourses/AllCoursesss";
import { useParams } from "next/navigation";
import React from "react";
import "./cetagorycourses.css";
const CetagoryCourses = () => {
  const { id } = useParams();
  return (
    <>
      <div className="mt-8 max-w-screen-xl mx-auto">
        <h1 className="text-[25px] font-bold uppercase text-center">
          {id} Courses
        </h1>

        <div className="grid grid-cols-1 px-5 md:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-10 md:gap-3 justify-center items-center mt-10">
          <AllCoursesss />
        </div>
      </div>
    </>
  );
};
export default CetagoryCourses;
