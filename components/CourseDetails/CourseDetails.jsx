import React from "react";
import "./CourseDetails.css";
export const CourseDetails = ({ singleUser }) => {
  return (
    <>
      <div className="d">
        <div className="flex flex-col-reverse md:grid grid-cols-2 gap-5 md:gap-x-20 justify-center  md:h-[60vh] ">
          <div className="container-text">
            <div className="banner-informaton">
              <h1 className="text-[20px] md:text-[30px] font-bold md:text-start text-center SILIGURI">
                {singleUser?.courseName}
              </h1>
              <div className="flex gap-5 flex-wrap md:justify-start justify-center mt-5">
                <div className="border-2 px-5 py-3 rounded-lg">
                  <p className="text-[14px] text-center text-slate-500">
                    Duration
                  </p>
                  <h1 className="text-[18px] text-center font-bold text-slate-800">
                    {" "}
                    {singleUser?.courseDuration} Months
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
                    Assignment
                  </p>
                  <h1 className="text-[18px] text-center font-bold text-slate-800">
                    {" "}
                    {singleUser?.totalAssignment}
                  </h1>
                </div>
                <div className="border-2 px-5 py-3 rounded-lg">
                  <p className="text-[14px] text-center text-slate-500">
                    Projects
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
                  Admition Now
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
              src="https://www.youtube.com/embed/C72WkcUZvco?si=dTpdbvUlT_1ZKe2l"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="425"
              className="rounded-[20px] md:hidden"
              height="300"
              src="https://www.youtube.com/embed/C72WkcUZvco?si=dTpdbvUlT_1ZKe2l"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        {/* ---------------- sedule courses ---------------- */}
        <div className="Course-Curriculum mt-20">
          <h1 className="text-[30px] font-bold py-5 flex gap-1 items-center">
            {" "}
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                width="30"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </span>{" "}
            Course Curriculum
          </h1>
          <div class="flex md:justify-start justify-center items-center  ">
            {/* <!-- Component Start --> */}
            <div class="flex flex-col w-full">
              {singleUser?.allClass?.map((moduleObj, index) => (
                <button
                  key={index}
                  className="group border-t border-r border-l border-slate-300 focus:outline-none"
                >
                  <div className="flex items-center justify-between h-14 px-3 font-semibold hover:bg-gray-200">
                    <p className="truncate">
                      <span className="text-[#000] font-[800]">
                        Module {index + 1} :{" "}
                      </span>{" "}
                      <span>{moduleObj[`module${index + 1}`]}</span>
                    </p>
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
                    {/* Render class details for each module */}
                    {Object.keys(moduleObj).map((key) => {
                      if (key.startsWith("moduleP")) {
                        const classKey = key.replace("moduleP", "");
                        return (
                          <a
                            key={key}
                            className="flex items-center h-8 px-4 text-[16px] pt-1 pb-3 hover:bg-gray-200"
                            href="#"
                          >
                            {moduleObj[key]}
                          </a>
                        );
                      }
                      return null;
                    })}
                  </div>
                </button>
              ))}
            </div>
            {/* <!-- Component End  --> */}
          </div>
        </div>
      </div>
    </>
  );
};
