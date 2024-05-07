"use client";
import CommentCourse from "@/components/CourseDetails/CommentCourse";
import { CourseDetails } from "@/components/CourseDetails/CourseDetails";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import icon1 from "@/app/Assets/skill_courses_details/courseIcon/word.png";
import icon2 from "@/app/Assets/skill_courses_details/courseIcon/power.png";
import icon3 from "@/app/Assets/skill_courses_details/courseIcon/exal.png";
import Image from "next/image";
import { LoadingPage } from "@/components/Loading/LoadingPage";

const DetailsCourse = () => {
  const { id } = useParams();

  const [singleCourses, setSingleCourses] = useState();
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://unitech-server.vercel.app/api/v1/courses/${id}`
        );

        setSingleCourses(result?.data?.data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [id]);

  return (
    <div className="">
      {Loading ? (
        <>
          <LoadingPage content={"ইউনিটেক"} />
        </>
      ) : (
        <>
          <CourseDetails singleCourses={singleCourses} />
          <div className="max-w-screen-xl mx-auto ">
            <div className="flex flex-col justify-center md:grid grid-cols-2 gap-5 mt-5 pb-10">
              <div>
                {/* <h1 className="text-center text-[1.7rem] md:text-[2rem] font-[600] py-5 SILIGURI my-5">
              যেসব সফটওয়্যার শেখানো হয়
            </h1> */}
                <h1 className="text-[30px] font-[600] text-[#1F1F1F]  text-center">
                  যে সব সফটওয়্যার শেখানো হয়
                </h1>
                <div className="w-[100%] justify-start p-6 grid grid-cols-1 gap-5 md:gap-y-8 md:grid-cols-2 bg-[#FAF9FD] mt-8 rounded-md">
                  <div className="software-icon flex gap-2 justify-start items-center">
                    <Image className="w-[50px] h-[50px]" src={icon1} alt="" />
                    <p className="text-[19px] text-[#353535] font-[800]">
                      MS Word
                    </p>
                  </div>
                  <div className="software-icon flex gap-2 justify-start items-center">
                    <Image className="w-[50px] h-[50px]" src={icon2} alt="" />
                    <p className="text-[19px] text-[#353535] font-[800]">
                      MS Powerpoint
                    </p>
                  </div>
                  <div className="software-icon flex gap-2 justify-start items-center">
                    <Image className="w-[50px] h-[50px]" src={icon3} alt="" />
                    <p className="text-[19px] text-[#353535] font-[800]">
                      MS Excel
                    </p>
                  </div>
                  <div className="software-icon flex gap-2 justify-start items-center">
                    <Image className="w-[50px] h-[50px]" src={icon1} alt="" />
                    <p className="text-[19px] text-[#353535] font-[800]">
                      MS Word
                    </p>
                  </div>
                  <div className="software-icon flex gap-2 justify-start items-center">
                    <Image className="w-[50px] h-[50px]" src={icon2} alt="" />
                    <p className="text-[19px] text-[#353535] font-[800]">
                      MS Powerpoint
                    </p>
                  </div>
                  <div className="software-icon flex gap-2 justify-start items-center">
                    <Image className="w-[50px] h-[50px]" src={icon3} alt="" />
                    <p className="text-[19px] text-[#353535] font-[800]">
                      MS Excel
                    </p>
                  </div>
                </div>
              </div>

              <CommentCourse />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailsCourse;
