"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import "../../globals.css";
import axios from "axios";
const DetailsCourse = () => {
  const { id } = useParams();

  const [singleUser, setSingelUser] = useState();
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `http://localhost:8080/api/v1/Academic-courses/${id}`
        );

        setSingelUser(result?.data?.data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [id]);

  console.log("singel", singleUser);
  return (
    <div className="mt-5 max-w-screen-xl mx-auto">
      <div className="">
        <div className="flex flex-col-reverse md:grid grid-cols-2 gap-5 md:gap-x-10 justify-center py-5 md:py-20 h-[100%] ">
          <div className="container-text">
            <div className="">
              <h1 className="text-[20px] md:text-[30px] font-bold md:text-start text-center SILIGURI">
                {singleUser?.courseName}
                <span className="text-[25px] ps-2">
                  [{singleUser?.categoryCourse}]
                </span>
              </h1>
              <div className="flex gap-5 flex-wrap md:justify-start justify-center mt-5">
                <div className="border-2 px-5 py-3 rounded-lg">
                  <p className="text-[14px] text-center text-slate-500">
                    Duration
                  </p>
                  <h1 className="text-[18px] text-center font-bold text-slate-800">
                    {" "}
                    {singleUser?.courseDuration} Semester
                  </h1>
                </div>
                <div className="border-2 px-5 py-3 rounded-lg">
                  <p className="text-[14px] text-center text-slate-500">
                    Total Class
                  </p>
                  <h1 className="text-[18px] text-center font-bold text-slate-800">
                    {" "}
                    {singleUser?.totalClass}
                  </h1>
                </div>
                <div className="border-2 px-5 py-3 rounded-lg">
                  <p className="text-[14px] text-center text-slate-500">
                    Class Test
                  </p>
                  <h1 className="text-[18px] text-center font-bold text-slate-800">
                    {" "}
                    {singleUser?.totalAssignment}
                  </h1>
                </div>
                <div className="border-2 px-5 py-3 rounded-lg">
                  <p className="text-[14px] text-center text-slate-500">
                    Final Exam
                  </p>
                  <h1 className="text-[18px] text-center font-bold text-slate-800">
                    {" "}
                    {singleUser?.totalProject}
                  </h1>
                </div>
              </div>
              <p className="py-5  text-justify text-[18px] font-[400] SILIGURI">
                {singleUser?.courseDescription}
              </p>
              <div className="flex md:justify-start gap-5 justify-center mt-2">
                <button className="SILIGURI px-6 py-4 bg-amber-600 hover:bg-amber-500 text-white text-[16px] font-[600] rounded-md">
                  Enroll Now
                </button>
                <button className="SILIGURI px-6 py-4 bg-[#080D2A] hover:bg-[#151b3f] text-white text-[16px] font-[600] rounded-md">
                  Join Free Class
                </button>
              </div>
            </div>
          </div>
          <div className="container-video mx-auto flex justify-center w-[100%] md:h-[60dvh]">
            <iframe
              width="625"
              className="rounded-[20px] md:flex hidden"
              height="412"
              src="https://www.youtube.com/embed/E_AJBIDgYRw?si=L202IVsBkYPRWyZT"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="425"
              className="rounded-[20px] md:hidden"
              height="300"
              src="https://www.youtube.com/embed/E_AJBIDgYRw?si=L202IVsBkYPRWyZT"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCourse;
