"use client";
import StudentImageSlide from "@/components/StudentImageSlider/StudentImageSlide";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import teacherProfile from "@/app/Assets/skill_courses_details/teacher.png";

import icon1 from "@/app/Assets/skill_courses_details/courseIcon/1.png";
import icon2 from "@/app/Assets/skill_courses_details/courseIcon/2.png";
import icon3 from "@/app/Assets/skill_courses_details/courseIcon/3.png";
import icon4 from "@/app/Assets/skill_courses_details/courseIcon/4.png";
import icon5 from "@/app/Assets/skill_courses_details/courseIcon/5.png";
import icon6 from "@/app/Assets/skill_courses_details/courseIcon/6.png";
import icon7 from "@/app/Assets/skill_courses_details/courseIcon/7.png";
import { Video } from "@/components/AcademicCourse/Video";
import axios from "axios";
import { LoadingPage } from "@/components/Loading/LoadingPage";
import Cookies from "js-cookie";
import { EnrollFrom } from "@/components/Untility/EnrollFrom";

const DetailsCourse = () => {
  const { id } = useParams();
  const [Loading, setLoading] = useState(true);
  const [singleCourses, setSingleCourses] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://unitech-server.vercel.app/api/v1/Academic-courses/${id}`
        );

        setSingleCourses(result?.data?.data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [id]);

  // ------------- Enroll -------------

  const [openModal, closeModal] = useState(false);
  const router = useRouter();

  const [Loading2, setLoading2] = useState(true);
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
    setLoading2(false);
  }, [accessToken]);

  const closeModalFunction = (e) => {
    closeModal(e);
  };
  const ModalOpenButton = () => {
    closeModal(!openModal);
  };

  return (
    <>
      <div className=" ">
        {Loading ? (
          <>
            <LoadingPage content={"ইউনিটেক"} />
          </>
        ) : (
          <>
            {openModal && (
              <>
                <EnrollFrom
                  accessToken={accessToken}
                  userInfo={userInfo}
                  singleCourses={singleCourses}
                  closeModalFunction={closeModalFunction}
                />
              </>
            )}
            <div className="w-[100%] max-w-screen-xl mx-auto">
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
                          {singleCourses?.CDuration?.slice(0, 1)} মাস
                        </h1>
                      </div>
                      <div className="border-2 px-5 py-3 rounded-lg">
                        <p className="text-[14px] text-center text-slate-500">
                          মোট ক্লাস
                        </p>
                        <h1 className="text-[14px] text-center font-bold text-slate-800">
                          {" "}
                          {singleCourses?.CTotalClass?.slice(0, 6)}
                        </h1>
                      </div>
                      <div className="border-2 px-5 py-3 rounded-lg">
                        <p className="text-[14px] text-center text-slate-500">
                          অ্যাসাইনমেন্ট
                        </p>
                        <h1 className="text-[14px] text-center font-bold text-slate-800">
                          {" "}
                          {singleCourses?.CAssignment?.slice(0, 5)}
                        </h1>
                      </div>
                      <div className="border-2 px-5 py-3 rounded-lg">
                        <p className="text-[14px] text-center text-slate-500">
                          ক্লাস পরিক্ষা
                        </p>
                        <h1 className="text-[14px] text-center font-bold text-slate-800">
                          {" "}
                          {singleCourses?.CExam?.slice(0, 5)}
                        </h1>
                      </div>
                    </div>
                    <p className="py-5 text-justify text-[17px] font-[400] SILIGURI">
                      {singleCourses?.CDescription?.slice(0, 480)}...
                    </p>
                    <div className="flex md:justify-start gap-5 justify-center ">
                      <button
                        onClick={() => ModalOpenButton()}
                        className="SILIGURI px-6 py-4 bg-amber-600 hover:bg-amber-500 text-white text-[12px] md:text-[14px] font-[600] rounded-md"
                      >
                        এনরোল করুন
                      </button>
                      <button className="SILIGURI px-6 py-4 bg-[#080D2A] hover:bg-[#151b3f] text-white text-[12px] md:text-[14px] font-[600] rounded-md">
                        ফ্রি ক্লাস জয়েন করুন
                      </button>
                    </div>
                  </div>
                  {/* ----------- teacher list ------- */}
                  <div className="course-teacher p-5">
                    <h1 className="text-[30px] font-[600] text-[#1F1F1F] pt-5">
                      কোর্স ইন্সট্রাক্টর
                    </h1>

                    <p className="py-5 text-justify text-[17px] font-[400] SILIGURI">
                      এখানে অভিঙ্গ শিক্ষক শিক্ষিকা দ্বারা সকল বিষয় এর খুবই
                      গুরুত্ব সহকারে ক্লাস নেওয়া হয় ।
                    </p>
                    <p>— B.S.C </p>
                    <p>— M.S.C </p>
                    <p>— Diploma Engineer </p>
                  </div>

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
                        <Image
                          className="w-[25px] h-[35px]"
                          src={icon1}
                          alt=""
                        />
                        <p className="font-[500] text-[#353535] text-[14px]">
                          কোর্সটি করছেন ৩৪২ জন
                        </p>
                      </div>

                      <div className="flex gap-2 items-center mt-2">
                        <Image
                          className="w-[25px] h-[25px] "
                          src={icon4}
                          alt=""
                        />
                        <p className="font-[500] text-[#353535] text-[14px]">
                          {singleCourses?.CAssignment}
                        </p>
                      </div>
                      <div className="flex gap-2 items-center mt-2">
                        <Image
                          className="w-[25px] h-[25px]"
                          src={icon5}
                          alt=""
                        />
                        <p className="font-[500] text-[#353535] text-[14px]">
                          {singleCourses?.CQuize}
                        </p>
                      </div>
                      <div className="flex gap-2 items-center mt-2">
                        <Image
                          className="w-[25px] h-[25px]"
                          src={icon5}
                          alt=""
                        />
                        <p className="font-[500] text-[#353535] text-[14px]">
                          বিশেষ সাপট
                        </p>
                      </div>
                      <div className="flex gap-2 items-center mt-1">
                        <Image
                          className="w-[30px] h-[30px]"
                          src={icon6}
                          alt=""
                        />
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
                          {singleCourses?.CExam}
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
              <StudentImageSlide />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DetailsCourse;
