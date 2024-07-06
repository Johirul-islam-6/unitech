"use client";
import CommentCourse from "@/components/CourseDetails/CommentCourse";
import { CourseDetails } from "@/components/CourseDetails/CourseDetails";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import { LoadingPage } from "@/components/Loading/LoadingPage";
import { GraphicDesign } from "@/components/CourseDetails/SoftwareCetagory/GraphicDesign";
import { WebDvelopment } from "@/components/CourseDetails/SoftwareCetagory/WebDvelopment";
import { BasicComputer } from "@/components/CourseDetails/SoftwareCetagory/BasicComputer";

import { UxUi } from "@/components/CourseDetails/SoftwareCetagory/UxUi";
import { Autocad } from "@/components/CourseDetails/SoftwareCetagory/Autocad";
import { ReviewWrite } from "@/components/CourseDetails/reviwWrite/ReviewWrite";
import { ReviewDisplay } from "@/components/CourseDetails/reviwWrite/ReviewDisplay";

const DetailsCourse = () => {
  const { id } = useParams();

  const [singleCourses, setSingleCourses] = useState();
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://api.unitechbangladesh.com/api/v1/courses/${id}`
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
          <div className="max-w-screen-xl mx-auto mt-16 ">
            <div className="flex flex-col justify-center md:grid grid-cols-2 gap-5 mt-5 pb-10">
              <div>
                <h1 className="text-[25px] font-[600] text-[#1F1F1F]  text-center SILIGURI">
                  যে সকল সফটওয়্যার / স্কিল গুলো শেখানো হবে
                </h1>
                {/* "web-development", "graphic-desing", "digital-marketing",
                "video-editing", "basic-computer", "Autocad-basic-premium",
                "autocad", "ux-ui-design", "video", */}

                {singleCourses?.CCategory === "graphic-desing" && (
                  <>
                    <GraphicDesign />
                  </>
                )}
                {singleCourses?.CCategory === "web-development" && (
                  <>
                    <WebDvelopment />
                  </>
                )}
                {singleCourses?.CCategory === "basic-computer" && (
                  <>
                    <BasicComputer />
                  </>
                )}
                {singleCourses?.CCategory === "autocad" && (
                  <>
                    <Autocad singleCourses={singleCourses} />
                  </>
                )}
                {singleCourses?.CCategory === "ux-ui-design" && (
                  <>
                    <UxUi />
                  </>
                )}

                {/* <div className="f"><CommentCourse /></div> */}
              </div>

              {/* <ReviewDisplay /> */}
              <CommentCourse singleCourses={singleCourses} />
              {/* <ReviewWrite /> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailsCourse;
