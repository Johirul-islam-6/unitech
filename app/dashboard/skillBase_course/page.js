"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../Dashboard.css";
import Cookies from "js-cookie";
//mamunbooks.com/
// resellbook.store
const SkillBaseCourse = () => {
  const router = useRouter();

  const accessToken = Cookies.get("accessToken");
  const [userInfo, setUserInfo] = useState("");
  const [Loadings, setLoading] = useState(true);
  useEffect(() => {
    if (!accessToken) {
      router.push("/login");
    }
    if (accessToken) {
      const getCookiesData = Cookies.get("CookieYouserData");
      const cookiesInfo = JSON.parse(getCookiesData);
      setUserInfo(cookiesInfo);
    }
    setLoading(false);
  }, [accessToken]);

  // const [disable, disableButton] = useState(null);
  const [cetagorybook, setCetagory] = useState();
  const [postImage, setPostImage] = useState();
  const [buttonHidden, setHidden] = useState(false);

  const departmental = [
    "Web Design",
    "Web Development",
    "Graphic Design",
    "Digital Marketing",
    "Basic Computer",
    "Autocad Basic & premium",
    "Autocad 3d",
    "UX/UI Design",
    "Ai",
  ];

  // Date genarate---
  const today = new Date();
  const padZero = (num) => {
    return num < 10 ? "0" + num : num;
  };

  // Format the date to DD/MM/YYYY
  const formattedDate = `${padZero(today.getDate())}/${padZero(
    today.getMonth() + 1
  )}/${today.getFullYear()}`;
  // const BookObject = [courseName,bookImage,subjectCode,department,mejor-subject, buy-price , sell-price];

  const HandleSubmite = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const CName = formData.get("CName");
    const CCode = formData.get("course-code");
    const CCategory = formData.get("cetagory");
    // const courseImage = "image not send";
    const courseImage = postImage;
    const CDuration = formData.get("CDuration");
    const CTotalClass = formData.get("total-class");
    const CTotalAssignment = formData.get("total-assignment");
    const CTotalHours = formData.get("CTotalHoure");
    const CTotalVideo = formData.get("CTotalVideo");
    const CResourcesFolder = formData.get("CRechorsesFolder");
    const CProfessionalProject = formData.get("CTotalProject");
    const CPrice = formData.get("CPrice");
    const CBatch = formData.get("CBatch");
    const CEnrollEndDate = formData.get("Cenroll-end");
    const CDescription = formData.get("CDiscription");
    const COverview = formData.get("COverView");
    //teacher
    const CTeacher1Name = formData.get("CTeacher1Name");
    const CTeacher1Post = formData.get("CTeacher1Post");
    const CTeacher1Title = formData.get("CTeacher1Title");
    const CTeacher2Name = formData.get("CTeacher2Name");
    const CTeacher2Post = formData.get("CTeacher2Post");
    const CTeacher2Title = formData.get("CTeacher2Title");
    //Optional
    const status = "panding";

    // ---------- all class ------------
    const module1 = formData.get("module_1");
    const moduleP1 = formData.get("module_P_1");
    // -----next
    const module2 = formData.get("module_2");
    const moduleP2 = formData.get("module_P_2");
    // -----next
    const module3 = formData.get("module_3");
    const moduleP3 = formData.get("module_P_3");
    // -----next
    const module4 = formData.get("module_4");
    const moduleP4 = formData.get("module_P_4");
    // -----next
    const module5 = formData.get("module_5");
    const moduleP5 = formData.get("module_P_5");
    // -----next
    const module6 = formData.get("module_6");
    const moduleP6 = formData.get("module_P_6");
    // -----next
    const module7 = formData.get("module_7");
    const moduleP7 = formData.get("module_P_7");
    // -----next
    const module8 = formData.get("module_8");
    const moduleP8 = formData.get("module_P_8");
    // -----next
    const module9 = formData.get("module_9");
    const moduleP9 = formData.get("module_P_9");
    // -----next
    const module10 = formData.get("module_10");
    const moduleP10 = formData.get("module_P_10");
    // -----next
    const module11 = formData.get("module_11");
    const moduleP11 = formData.get("module_P_11");
    // -----next
    const module12 = formData.get("module_12");
    const moduleP12 = formData.get("module_P_12");
    // -----next
    const module13 = formData.get("module_13");
    const moduleP13 = formData.get("module_P_13");
    // -----next
    const module14 = formData.get("module_14");
    const moduleP14 = formData.get("module_P_14");
    // -----next
    const module15 = formData.get("module_15");
    const moduleP15 = formData.get("module_P_15");
    // -----next

    if (CCategory === "select") {
      return alert("Please select cetagoryCourse Cetagory !");
    }

    const courseInfoData = {
      CName,
      CCode,
      CCategory,
      courseImage,
      CDuration,
      CTotalClass,
      CTotalAssignment,
      CTotalHours,
      CTotalVideo,
      CBatch,
      CResourcesFolder,
      CProfessionalProject,
      CPrice,
      CEnrollEndDate,
      CDescription,
      COverview,
      CTeacher1Name,
      CTeacher1Post,
      CTeacher1Title,
      CTeacher2Name,
      CTeacher2Post,
      CTeacher2Title,
      status,
      //Optional
      view: "0",
      email: userInfo?.email,
      allClass: [
        {
          module1,
          moduleP1,
        },
        {
          module2,
          moduleP2,
        },
        {
          module3,
          moduleP3,
        },
        {
          module4,
          moduleP4,
        },
        {
          module5,
          moduleP5,
        },
        {
          module6,
          moduleP6,
        },
        {
          module7,
          moduleP7,
        },
        {
          module8,
          moduleP8,
        },
        {
          module9,
          moduleP9,
        },
        {
          module10,
          moduleP10,
        },
        {
          module11,
          moduleP11,
        },
        {
          module12,
          moduleP12,
        },
      ],
    };
    setHidden(true);
    console.log("All create courses Dat ===>a", courseInfoData);
    try {
      const response = await axios.post(
        // "https://unitech-server.vercel.app/api/v1/courses/create",
        "https://unitech-server.vercel.app/api/v1/courses/create",
        courseInfoData,
        {
          maxContentLength: 100000000000,
        }
      );
      const result = response.data;

      // if get the data then save
      if (result?.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${result?.message}`,
          text: "Thank you",
          showConfirmButton: false,
          timer: 2500,
        });

        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error fetching data:", error);

      Swal.fire({
        title: `${error?.response?.data?.errorMessages[0]?.message}`,
        text: ` Field : ${error?.response?.data?.errorMessages[0]?.path}`,
        icon: "error",
      });
      setHidden(false);
    }

    // setHidden(false);
  };

  const [uploadeImages, setuploade] = useState();

  const handelFileImageUpload = async (fileImage) => {
    const file = fileImage?.target?.files[0];
    setuploade(file);

    try {
      const base64 = await ConvertToBase64(file);
      setPostImage(base64);
    } catch (error) {
      console.error("Error converting file to Base64:", error);
    }
  };

  return (
    <div className="h-[100vh] overflow-auto">
      <div className="mt-5 Academic-Courses px-2 md:mx-10 pt-16 ">
        <h1 className="uppercase text-center text-[28px] font-[700] text-[#151d30] ">
          Create Skill Development Courses
        </h1>
        <div className="w-[180px] h-[5px] bg-amber-600 mx-auto mt-3"></div>
        <form onSubmit={HandleSubmite}>
          <div className="grid grid-cols-1 gap-x-6 gap-y-4  sm:grid-cols-2 md:px-5 mt-10">
            {/* ------ field number 01 ------- */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                কোর্সের এর নাম
              </label>
              <input
                required
                id="username"
                name="CName"
                type="text"
                placeholder="Web Design-1"
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 02 ------- */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                কোর্সের এর কোড
              </label>
              <input
                required
                id="username"
                name="course-code"
                type="text"
                placeholder="WD-1-2024"
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 04 ------- */}
            <div className="">
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="phone"
              >
                ক্যাটাগরি
              </label>

              <select
                name="cetagory"
                onChange={(e) => setCetagory(e.target.value)}
                className="input block border border-gray-300 focus:border-pitch-black py-2 px-3 w-full focus:outline-none mt-1"
              >
                <option value="selectss" className="bg-[#E8F0FE]">
                  select
                </option>
                {departmental?.map((item, index) => (
                  <option
                    className="bg-[#e9e9e9de] text-black "
                    key={index}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {/* ------------ */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                কোর্সের এর মেয়াদ
              </label>
              <input
                required
                id="username"
                name="CDuration"
                type="text"
                placeholder="4 Months"
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------------ */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                কোর্সের Batch
              </label>
              <input
                required
                id="username"
                name="CBatch"
                type="text"
                placeholder="Batch-৩"
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>

            {/* ------ field number 08 ------- */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                সর্বমোট ক্লাস
              </label>
              <input
                required
                id="username"
                name="total-class"
                type="text"
                placeholder="45"
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 09 ------- */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                সর্বমোট অ্যাসাইনমেন্ট
              </label>
              <input
                required
                id="username"
                name="total-assignment"
                type="text"
                placeholder="35 টি অ্যাসাইনমেন্ট"
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 09 ------- */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                সর্বমোট ঘন্টা
              </label>
              <input
                required
                id="username"
                name="CTotalHoure"
                type="text"
                placeholder="সময় লাগবে 480 ঘন্টা"
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 09 ------- */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                সর্বমোট ভিডিও
              </label>
              <input
                required
                id="username"
                name="CTotalVideo"
                type="text"
                placeholder="48 টি ভিডিও"
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 09 ------- */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                সর্বমোট রিসোর্স ফোল্ডার
              </label>
              <input
                required
                id="username"
                name="CRechorsesFolder"
                type="text"
                placeholder="৮ রিসোর্স ফোল্ডার"
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 09 ------- */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                সর্বমোট প্রফেশনাল প্রজেক্
              </label>
              <input
                required
                id="username"
                name="CTotalProject"
                type="text"
                placeholder="১৩+ প্রফেশনাল প্রজেক্"
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 03 ------- */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                কোর্সের ফ্রী
              </label>
              <input
                required
                id="username"
                name="CPrice"
                type="text"
                placeholder="৫০০০ টাকা"
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>

            {/* ------ field number 07 ------- */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                কোর্সের এনরোল করার শেষ তারিখ
              </label>
              <input
                required
                defaultValue={formattedDate}
                id="username"
                type="text"
                name="Cenroll-end"
                placeholder="24/02/2024"
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
          </div>
          {/* ---- Courses Details ----- */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-4  sm:grid-cols-2 md:px-5 mt-10">
            <div className="mt-2">
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN text-center flex justify-center"
                for="username"
              >
                কোর্সের বিবরণ সমূহ
              </label>
              <textarea
                required
                name="CDiscription"
                id="username"
                type="text"
                placeholder="ভিজ্যুয়াল কনটেন্টের চাহিদা বেড়ে যাওয়ায় এখন মার্কেটাররা গ্রাফিক্যাল কনটেন্টের দিকে ঝুঁকেছেন তাই বিশ্বজুড়ে গ্রাফিক ডিজাইনারদের চাহিদা এখন আকাশচুম্বী এক জরিপে দেখা যায়, ভালো একটা লোগোর জন্য একটি ছোট প্রতিষ্ঠানও ৫০০ ডলার পর্যন্ত "
                className="input h-[140px] block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            <div className="mt-2">
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN text-center flex justify-center"
                for="username"
              >
                কোর্স ওভারভিউ
              </label>
              <textarea
                required
                name="COverView"
                id="username"
                type="text"
                placeholder="একজন সফল গ্রাফিক ডিজাইনার হতে হলে মানসম্পন্ন কারিকুলামে প্রশিক্ষণের পাশাপাশি প্রজেক্ট ভিত্তিক কাজের অভিজ্ঞতা আর মার্কেটপ্লেস সম্পর্কে ভালো ধারণা থাকা প্রয়োজন তাই এসব কিছুই একসাথে অন্তর্ভুক্ত করা হয়েছে আমাদের কোর্স মডিউলে গ্রাফিক ডিজাইন কোর্স থেকে আপনি অ্যাডোবি ফটোশপ "
                className="input h-[140px] block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <label
                className="text-[#000b] md:text-[14px] text-[14px] text-center ps-[2px] font-bold  md:ps-1 md:pb-2 IN"
                for="username"
              >
                কোর্সের এর ছবি
              </label>

              <div className="relative px-2 mt-1">
                <label
                  title="Click to upload"
                  for="bookImage"
                  className="cursor-pointer flex justify-center h-[100px] items-center 
                   before:border-gray-400/60 hover:before:border-gray-300 group dark:before:bg-darker
                    dark:hover:before:border-gray-500 before:bg-gray-100 dark:before:border-gray-600 
                    before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed
                     before:transition-transform before:duration-300 hover:before:scale-105
                      active:duration-75 active:before:scale-95"
                >
                  <div className="w-[50px] mt-9 relative flex justify-center items-center">
                    <img
                      className="mx-auto h-12 w-12"
                      src="https://www.svgrepo.com/show/357902/image-upload.svg"
                      alt=""
                    />
                  </div>

                  <div className="relative top-[20px]">
                    <span className="block text-[14px] font-semibold relative text-blue-900 dark:text-black group-hover:text-blue-500">
                      {uploadeImages?.name
                        ? uploadeImages?.name?.slice(0, 16)
                        : "Upload a image"}
                    </span>
                    <span className=" block text-[12px] text-gray-500 dark:text-gray-400">
                      Max 980kb
                    </span>
                  </div>
                </label>
                <input
                  onChange={(e) => handelFileImageUpload(e)}
                  hidden=""
                  type="file"
                  name="bookImage"
                  id="bookImage"
                  accept=".jpeg, .png, .jpg,.webp"
                  className="bg-[#F3F4F6] mb-1 "
                />
              </div>
            </div>
          </div>

          {/* ------   কোর্সের কোর্স ইন্সট্রাক্টর ------- */}
          <p className="text-center my-7 text-[#000] font-[600] uppercase py-2 bg-[#00000011]">
            কোর্সের কোর্স ইন্সট্রাক্টর
          </p>

          <div className="grid grid-cols-1 gap-x-6 gap-y-4  sm:grid-cols-2 md:px-5 mt-3">
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-[900]  md:ps-1 IN "
                for="username"
              >
                কোর্সের ইন্সট্রাক্টর ০১
              </label>
              <input
                required
                id="username"
                type="text"
                name="CTeacher1Name"
                placeholder="Md Amir Hamza Nirob"
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-[900]  md:ps-1 IN "
                for="username"
              >
                কোর্সের ইন্সট্রাক্টর ০১ পদবি
              </label>
              <input
                required
                id="username"
                type="text"
                name="CTeacher1Post"
                placeholder="Course Coordinator"
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-[900]  md:ps-1 IN "
                for="username"
              >
                কোর্সের ইন্সট্রাক্টর ০১ অভিজ্ঞ
              </label>
              <input
                required
                id="username"
                type="text"
                name="CTeacher1Title"
                placeholder="Graphic Designer, Social Media Expert"
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-4  sm:grid-cols-2 md:px-5 mt-5">
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-[900]  md:ps-1 IN "
                for="username"
              >
                কোর্সের ইন্সট্রাক্টর ০২
              </label>
              <input
                required
                id="username"
                type="text"
                name="CTeacher2Name"
                placeholder="Md Amir Hamza Nirob"
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-[900]  md:ps-1 IN "
                for="username"
              >
                কোর্সের ইন্সট্রাক্টর ০১ পদবি
              </label>
              <input
                required
                id="username"
                type="text"
                name="CTeacher2Post"
                placeholder="Course Coordinator"
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-[900]  md:ps-1 IN "
                for="username"
              >
                কোর্সের ইন্সট্রাক্টর ০১ অভিজ্ঞ
              </label>
              <input
                required
                id="username"
                type="text"
                name="CTeacher2Title"
                placeholder="Graphic Designer, Social Media Expert"
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
          </div>

          <p className="text-center my-7 text-[#000] font-[600] uppercase py-2 bg-[#00000037]">
            All Class Module Content
          </p>
          {/* --------------- all Module ------------ */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-4  sm:grid-cols-2 md:px-5 ">
            {/* ------ field number 1 ------- */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                ১ নাম্বার Module
              </label>

              <input
                name="module_1"
                id="username"
                type="text"
                placeholder="Module মেইন টপিক সমূহ.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
              <textarea
                name="module_P_1"
                id="username"
                type="text"
                placeholder="ক্লাসে কি কি থাকবে তা বননা.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 2 ------- */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                ২ নাম্বার Module
              </label>

              <input
                name="module_2"
                id="username"
                type="text"
                placeholder="Module মেইন টপিক সমূহ.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
              <textarea
                name="module_P_2"
                id="username"
                type="text"
                placeholder="ক্লাসে কি কি থাকবে তা বননা.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 3 ------- */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                ৩ নাম্বার Module
              </label>

              <input
                name="module_3"
                id="username"
                type="text"
                placeholder="Module মেইন টপিক সমূহ.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
              <textarea
                name="module_P_3"
                id="username"
                type="text"
                placeholder="ক্লাসে কি কি থাকবে তা বননা.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 4 ------- */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                ৪ নাম্বার Module
              </label>

              <input
                name="module_4"
                id="username"
                type="text"
                placeholder="Module মেইন টপিক সমূহ.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
              <textarea
                name="module_P_4"
                id="username"
                type="text"
                placeholder="ক্লাসে কি কি থাকবে তা বননা.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 5 ------- */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                ৫ নাম্বার Module
              </label>

              <input
                name="module_5"
                id="username"
                type="text"
                placeholder="Module মেইন টপিক সমূহ.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
              <textarea
                name="module_P_5"
                id="username"
                type="text"
                placeholder="ক্লাসে কি কি থাকবে তা বননা.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 6 ------- */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                ৬ নাম্বার Module
              </label>

              <input
                name="module_6"
                id="username"
                type="text"
                placeholder="Module মেইন টপিক সমূহ.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
              <textarea
                name="module_P_6"
                id="username"
                type="text"
                placeholder="ক্লাসে কি কি থাকবে তা বননা.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 7 ------- */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                ৭ নাম্বার Module
              </label>

              <input
                name="module_7"
                id="username"
                type="text"
                placeholder="Module মেইন টপিক সমূহ.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
              <textarea
                name="module_P_7"
                id="username"
                type="text"
                placeholder="ক্লাসে কি কি থাকবে তা বননা.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 8 ------- */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                ৮ নাম্বার Module
              </label>

              <input
                name="module_8"
                id="username"
                type="text"
                placeholder="Module মেইন টপিক সমূহ.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
              <textarea
                name="module_P_8"
                id="username"
                type="text"
                placeholder="ক্লাসে কি কি থাকবে তা বননা.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 9 ------- */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                ৯ নাম্বার Module
              </label>

              <input
                name="module_9"
                id="username"
                type="text"
                placeholder="Module মেইন টপিক সমূহ.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
              <textarea
                name="module_P_9"
                id="username"
                type="text"
                placeholder="ক্লাসে কি কি থাকবে তা বননা.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 10 ------- */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                ১০ নাম্বার Module
              </label>

              <input
                name="module_10"
                id="username"
                type="text"
                placeholder="Module মেইন টপিক সমূহ.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
              <textarea
                name="module_P_10"
                id="username"
                type="text"
                placeholder="ক্লাসে কি কি থাকবে তা বননা.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 10 ------- */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                ১১ নাম্বার Module
              </label>

              <input
                name="module_11"
                id="username"
                type="text"
                placeholder="Module মেইন টপিক সমূহ.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
              <textarea
                name="module_P_11"
                id="username"
                type="text"
                placeholder="ক্লাসে কি কি থাকবে তা বননা.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 10 ------- */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                ১2 নাম্বার Module
              </label>

              <input
                name="module_12"
                id="username"
                type="text"
                placeholder="Module মেইন টপিক সমূহ.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
              <textarea
                name="module_P_12"
                id="username"
                type="text"
                placeholder="ক্লাসে কি কি থাকবে তা বননা.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 10 ------- */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                ১৩ নাম্বার Module
              </label>

              <input
                name="module_13"
                id="username"
                type="text"
                placeholder="Module মেইন টপিক সমূহ.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
              <textarea
                name="module_P_13"
                id="username"
                type="text"
                placeholder="ক্লাসে কি কি থাকবে তা বননা.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 10 ------- */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                ১৪ নাম্বার Module
              </label>

              <input
                name="module_14"
                id="username"
                type="text"
                placeholder="Module মেইন টপিক সমূহ.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
              <textarea
                name="module_P_14"
                id="username"
                type="text"
                placeholder="ক্লাসে কি কি থাকবে তা বননা.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 10 ------- */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                ১৫ নাম্বার Module
              </label>

              <input
                name="module_15"
                id="username"
                type="text"
                placeholder="Module মেইন টপিক সমূহ.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
              <textarea
                name="module_P_15"
                id="username"
                type="text"
                placeholder="ক্লাসে কি কি থাকবে তা বননা.."
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
          </div>

          <div className="flex justify-center mt-1">
            <button
              // onClick={() => disableButton("hidden")}
              type="submit"
              className={`my-5 px-12 flex justify-center bg-[#563A9F] text-gray-100 py-3  rounded-md tracking-wide
                 font-semibold  focus:outline-none focus:shadow-outline hover:bg-[#8555fe] shadow-lg cursor-pointer transition ease-in duration-300 ${
                   buttonHidden ? "disabled-button" : ""
                 }`}
            >
              {buttonHidden && (
                <>
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="mr-2 animate-spin"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                  </svg>
                </>
              )}
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SkillBaseCourse;

export function ConvertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
