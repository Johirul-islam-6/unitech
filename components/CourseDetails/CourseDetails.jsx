"use client";
import Image from "next/image";
import "./CourseDetails.css";
import teacherProfile from "@/app/Assets/skill_courses_details/teacher.png";
import { Video } from "./Video";
import Link from "next/link";

import icon1 from "@/app/Assets/skill_courses_details/courseIcon/1.png";
import icon2 from "@/app/Assets/skill_courses_details/courseIcon/2.png";
import icon3 from "@/app/Assets/skill_courses_details/courseIcon/3.png";
import icon4 from "@/app/Assets/skill_courses_details/courseIcon/4.png";
import icon5 from "@/app/Assets/skill_courses_details/courseIcon/5.png";
import icon6 from "@/app/Assets/skill_courses_details/courseIcon/6.png";
import icon7 from "@/app/Assets/skill_courses_details/courseIcon/7.png";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { EnrollFrom } from "../Untility/EnrollFrom";
import { useRouter } from "next/navigation";

export const CourseDetails = ({ singleCourses }) => {
  const [openModal, closeModal] = useState(false);
  const router = useRouter();

  const [Loading, setLoading] = useState(true);
  const accessToken = Cookies.get("accessToken");
  const [userInfo, setUserInfo] = useState("");
  // ------ login access checked ------
  useEffect(() => {
    // if (!accessToken) {
    //   route.push("/login");
    // }
    if (accessToken) {
      const getCookiesData = Cookies.get("CookieYouserData");
      const cookiesInfo = JSON.parse(getCookiesData);
      setUserInfo(cookiesInfo);
    }
    setLoading(false);
  }, [accessToken]);

  const closeModalFunction = (e) => {
    closeModal(e);
  };
  const ModalOpenButton = () => {
    closeModal(!openModal);
  };

  return (
    <>
      {openModal && (
        <>
          <EnrollFrom
            accessToken={accessToken}
            userInfo={userInfo}
            singleCourses={singleCourses}
            closeModalFunction={closeModalFunction}
            CCetagorys={"Skill"}
          />
        </>
      )}

      <div className="d">
        <div className="mt-1 pt-4 bg-[#FAF9FD] max-w-screen-xl mx-auto flex flex-col-reverse md:grid grid-cols-2 gap-5 md:gap-x-2 justify-between  ">
          {/* -------------Col-1 course Details-------- */}
          <div className="container-text ">
            <div className="banner-informaton p-5 ">
              <h1 className="text-[20px] md:text-[30px] font-bold md:text-start text-center SILIGURI text-[#FE941E]">
                {singleCourses?.CName}
              </h1>
              <div className="flex gap-5 flex-wrap md:justify-start justify-center mt-5">
                <div className="border-2 px-5 py-3 rounded-lg">
                  <p className="text-[14px] text-center text-slate-500">
                    কোর্সের মেয়াদ
                  </p>
                  <h1 className="text-[14px] text-center font-bold text-slate-800">
                    {" "}
                    {singleCourses?.CDuration}
                  </h1>
                </div>
                <div className="border-2 px-5 py-3 rounded-lg">
                  <p className="text-[14px] text-center text-slate-500">
                    মোট ক্লাস
                  </p>
                  <h1 className="text-[14px] text-center font-bold text-slate-800">
                    {" "}
                    {singleCourses?.CTotalClass}
                  </h1>
                </div>
                <div className="border-2 px-5 py-3 rounded-lg">
                  <p className="text-[14px] text-center text-slate-500">
                    অ্যাসাইনমেন্ট
                  </p>
                  <h1 className="text-[14px] text-center font-bold text-slate-800">
                    {" "}
                    {singleCourses?.CTotalAssignment?.slice(0, 5)}
                  </h1>
                </div>
                <div className="border-2 px-5 py-3 rounded-lg">
                  <p className="text-[14px] text-center text-slate-500">
                    প্রজেক্ট
                  </p>
                  <h1 className="text-[14px] text-center font-bold text-slate-800">
                    {" "}
                    {singleCourses?.CProfessionalProject?.slice(0, 4)}
                  </h1>
                </div>
              </div>
              <p className="py-5 text-justify text-[17px] font-[400] SILIGURI">
                {singleCourses?.CDescription}
              </p>
              <div className="flex md:justify-start gap-5 justify-center ">
                <button
                  onClick={() => ModalOpenButton()}
                  className="SILIGURI px-6 py-4 bg-amber-600 hover:bg-amber-500 text-white text-[12px] md:text-[14px] font-[600] rounded-md"
                >
                  এনরোল করুন
                </button>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.facebook.com/groups/813066086240252/`}
                >
                  <button className="SILIGURI px-6 py-4 bg-[#080D2A] hover:bg-[#151b3f] text-white text-[12px] md:text-[14px] font-[600] rounded-md">
                    ফ্রি ক্লাস জয়েন করুন
                  </button>
                </Link>
              </div>
            </div>
            {/* ----------- teacher list ------- */}
            <div className="course-teacher p-5">
              <h1 className="text-[30px] font-[600] text-[#1F1F1F] pt-5">
                কোর্স ইন্সট্রাক্টর
              </h1>

              <div className="teacher-container flex flex-col gap-y-2 mt-5">
                <div className="teacher-box md:w-[450px] flex p-3 md:p-4 items-center gap-5 bg-[#fff] rounded-lg border-2">
                  <Image width={50} height={50} src={teacherProfile} alt="" />
                  <div className="teacher-content">
                    <p className="text-[16px] font-bold text-[#000000e0]">
                      {singleCourses?.CTeacher1Name}
                    </p>
                    <p className="text-[12px] font-bold text-[#e37a02]">
                      {singleCourses?.CTeacher1Post}
                    </p>
                    <p className="text-[14px] font-bold text-[#00000084]">
                      {singleCourses?.CTeacher1Title}
                    </p>
                  </div>
                </div>
                {/* ----teacher-2 */}
                <div className="teacher-box md:w-[450px] flex p-3 md:p-4 items-center gap-5 bg-[#fff] rounded-lg border-2">
                  <Image width={50} height={50} src={teacherProfile} alt="" />
                  <div className="teacher-content">
                    <p className="text-[16px] font-bold text-[#000000e0]">
                      {singleCourses?.CTeacher2Name}
                    </p>
                    <p className="text-[12px] font-bold text-[#e37a02]">
                      {singleCourses?.CTeacher2Post}
                    </p>
                    <p className="text-[14px] font-bold text-[#00000084]">
                      {singleCourses?.CTeacher2Title}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* -----------  কোর্স ওভারভিউ ------- */}
            <div className="course-teacher p-5">
              <h1 className="text-[30px] font-[600] text-[#1F1F1F] ">
                কোর্স ওভারভিউ
              </h1>
              <p className="py-3 text-justify text-[16px] font-[400] SILIGURI">
                {singleCourses?.COverview}
              </p>
            </div>
          </div>

          {/* -------------- Col-2 Video container  ---------- */}
          <div className="video-card   ">
            <div className="md:w-[500px] mx-auto p-4 border-2">
              <Video singleCourses={singleCourses} />
              <h1 className="text-[26px] font-[900] text-[#1F1F1F] text-center md:text-start">
                ৳{singleCourses?.CPrice}
              </h1>
              <h1 className="pt-1 text-[18px] font-[600] text-[#1f1f1fb0] text-center md:text-start">
                {singleCourses?.CName}
              </h1>
              <Link href={""}>
                <button className="flex rounded-[5px] justify-center text-[16px] mt-5 font-bold items-center text-white bg-[#FE941E] w-[100%] h-[55px]">
                  কোর্সটি কিনুন
                </button>
              </Link>
              <div className="mt-5 ms-2">
                <h1 className="text-[22px] font-[900] text-[#353535] text-start">
                  এই কোর্সে যা থাকছে
                </h1>
                <div className="flex gap-2 items-center mt-1">
                  <Image className="w-[25px] h-[35px]" src={icon1} alt="" />
                  <p className="font-[500] text-[#353535] text-[14px]">
                    কোর্সটি করছেন ৩৪২ জন
                  </p>
                </div>
                <div className="flex gap-2 items-center mt-1">
                  <Image className="w-[23px] h-[22px]" src={icon2} alt="" />
                  <p className="font-[500] text-[#353535] text-[14px]">
                    {singleCourses?.CTotalHours}
                  </p>
                </div>
                <div className="flex gap-2 items-center mt-1">
                  <Image
                    className="w-[25px] h-[25px] mt-1"
                    src={icon3}
                    alt=""
                  />
                  <p className="font-[500] text-[#353535] text-[14px]">
                    {singleCourses?.CTotalVideo}
                  </p>
                </div>
                <div className="flex gap-2 items-center mt-2">
                  <Image className="w-[25px] h-[25px] " src={icon4} alt="" />
                  <p className="font-[500] text-[#353535] text-[14px]">
                    {singleCourses?.CTotalAssignment}
                  </p>
                </div>
                <div className="flex gap-2 items-center mt-2">
                  <Image className="w-[25px] h-[25px]" src={icon5} alt="" />
                  <p className="font-[500] text-[#353535] text-[14px]">
                    {singleCourses?.CResourcesFolder}
                  </p>
                </div>
                <div className="flex gap-2 items-center mt-1">
                  <Image className="w-[30px] h-[30px]" src={icon6} alt="" />
                  <p className="font-[500] text-[#353535] text-[14px]">
                    {" "}
                    ফেসবুক সাপোর্ট গ্রুপ
                  </p>
                </div>
                <div className="flex gap-2 items-center mt-1">
                  <Image
                    className="w-[22px] h-[32px] ms-1"
                    src={icon7}
                    alt=""
                  />
                  <p className="font-[500] text-[#353535] text-[14px]">
                    {singleCourses?.CProfessionalProject}
                  </p>
                </div>
                <div className="flex gap-2  mt-1 pb-2">
                  <span className=""></span>
                  <Link href={""} className="font-[500] text-[#FE941E]">
                    More..
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- Course OverView ---------- */}
        <div className="course-over-view mt-10 max-w-screen-xl mx-auto ">
          <h1 className="text-[30px] font-[600] text-[#1F1F1F]  text-center">
            কোর্স ওভারভিউ
          </h1>
          <div className="mt-5 course-box grid-cols-1 md:grid-cols-2 grid gap-5 border-2 p-5 rounded-lg">
            {/* {courseInformation?.map((item, index) => (
              <>
                <div className="flex bg-[#FAF9FD] rounded-md gap-5 items-center module border-[1px] p-2 text-[#353535] text-[18px] font-[600]">
                  <div className=" w-[65px] h-[62px]  text-[14px] py-1 text-white bg-[#FE941E] rounded-[12px] font-[900] flex flex-col items-center justify-cente border-2">
                    <span className="text-[20px] ">{item?.module}</span>{" "}
                    {item?.moduleNumber}
                  </div>
                  <p>{item?.moduleTitle} </p>
                </div>
              </>
            ))} */}
            {singleCourses?.allClass?.map((moduleObj, index) => (
              <button
                key={index}
                className="group py-2 px-2 border-t border-r border-l border-b border-slate-300 focus:outline-none bg-[#faf9fd]"
              >
                {/* // this is Modulte title text field */}
                <div className="flex  items-center justify-between h-14 font-semibold bg-[#FAF9FD]">
                  <div className="flex h-[100%] items-center gap-2">
                    <p className="truncate rounded-md text-center justify-center font-[800] text-white bg-[#FE941E] w-[75px] h-[100%] flex flex-col items-center">
                      <span className="">মডিউল</span>{" "}
                      <span className="">{index + 1}</span>{" "}
                    </p>
                    <span className="">{moduleObj[`module${index + 1}`]}</span>
                  </div>
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
                {/* this is group open field */}
                <div className="max-h-0  overflow-hidden duration-300 group-focus:max-h-[100vh]">
                  {Object.keys(moduleObj).map((key) => {
                    if (key.startsWith("moduleP")) {
                      const classKey = key.replace("moduleP", "");
                      return (
                        <a
                          key={key}
                          className="flex items-center text-start cursor-text justify-start border-t-2 pt-2 mt-1 h-[auto] px-4 text-[16px]  pb-3 hover:bg-gray-200"
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
        </div>

        {/* ---------------- sedule courses ---------------- */}
      </div>
    </>
  );
};
