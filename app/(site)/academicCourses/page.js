"use client";
import { Academic } from "@/components/OurCourses/Academic";
import { AllCoursesss } from "@/components/OurCourses/AllCoursesss";
import "./ourCourses.css";
import ourCourssBanner from "@/app/Assets/All Courses Image/banner.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { LoadingPage } from "@/components/Loading/LoadingPage";
const AcademicCoures = () => {
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
  }, []);

  return (
    <>
      <>
        <div className="max-w-screen-xl mx-auto pb-10">
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
        </div>
      </>
    </>
  );
};

export default AcademicCoures;
