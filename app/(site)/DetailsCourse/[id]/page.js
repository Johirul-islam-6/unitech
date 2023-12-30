"use client";
import CommentCourse from "@/components/CourseDetails/CommentCourse";
import { CourseDetails } from "@/components/CourseDetails/CourseDetails";
import { useParams } from "next/navigation";
import React from "react";

const DetailsCourse = () => {
  const { id } = useParams();
  return (
    <div className="mt-5 max-w-screen-xl mx-auto">
      {/* Details Course Id Numeber {id} */}
      <CourseDetails />
      <div className="">
        <div className="flex flex-col justify-center md:grid grid-cols-2 gap-5 mt-5">
          <div>
            <h1 className="text-center text-[1.7rem] md:text-[2rem] font-[600] py-5 SILIGURI my-5">
              র্কোসে মোট প্রজেক্ট তালিকা
            </h1>

            <div className="md:hidden flex">
              <iframe
                className="rounded-lg border-4 border-amber-700"
                width="580"
                height="325"
                src="https://www.youtube.com/embed/jCqKP3CHxCM?si=5TQZoKWwQkHxhJdH"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>

            <div className="md:flex hidden">
              <iframe
                className="rounded-lg border-4 border-amber-700"
                width="580"
                height="325"
                src="https://www.youtube.com/embed/jCqKP3CHxCM?si=5TQZoKWwQkHxhJdH"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <CommentCourse />
        </div>
      </div>
    </div>
  );
};

export default DetailsCourse;
