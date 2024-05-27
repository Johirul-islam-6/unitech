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
          `https://unitech-server.vercel.app/api/v1/Academic-courses/?searchTerm=${id}&page=1&limit=12&sort=createdAt&sortOrder=desc`
        );

        setSkillCourses(result?.data?.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  }, [id]);

  console.log(
    SkillCourses,
    `https://unitech-server.vercel.app/api/v1/Academic-courses/?searchTerm=${id}&page=1&limit=12&sort=createdAt&sortOrder=desc`
  );

  return (
    <>
      <div className="mt-8 max-w-screen-xl mx-auto">
        <h1 className="text-[25px] font-bold uppercase text-center">
          {id} Courses fff
        </h1>

        <div className="grid grid-cols-1 px-5 md:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-10 md:gap-3 justify-center items-center mt-10">
          <AllCoursesss SkillCourses={SkillCourses} />
        </div>
      </div>
    </>
  );
};
export default CetagoryCourses;
