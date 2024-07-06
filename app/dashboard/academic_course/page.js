"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
//mamunbooks.com/
// resellbook.store
const AcademicCourses = () => {
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

  const [cetagorybook, setCetagory] = useState();
  const [cetagorybook2, setCetagory2] = useState();
  const [postImage, setPostImage] = useState();
  const [buttonHidden, setHidden] = useState(false);

  const semester = [
    "1st Semester",
    "2nd Semester",
    "3rd Semester",
    "4th Semester",
    "5th Semester",
    "6th Semester",
    "7th Semester",
    "8th Semester",
    "Others",
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
    const courseImage = postImage;
    const CCategory = formData.get("cetagory");
    const CDuration = formData.get("CDuration");
    const CTotalClass = formData.get("total-class");
    const CAssignment = formData.get("total-assignment");
    const CQuize = formData.get("CQuize");
    const CExam = formData.get("CExam");
    const CPrice = formData.get("CPrice");
    const CDescription = formData.get("CDiscription");
    const COverview = formData.get("COverView");

    // const email = userInfo?.email;
    // const userId = userInfo?.id;

    if (CCategory === "select") {
      return alert("Please select cetagoryCourse Cetagory !");
    }

    const courseInfoData = {
      CName,
      CCode,
      courseImage,
      CCategory,
      CDuration,
      CTotalClass,
      CAssignment,
      CQuize,
      CExam,
      CPrice,
      CDescription,
      COverview,
      view: "0",
      email: userInfo?.email,
    };
    setHidden(true);

    try {
      const response = await axios.post(
        "https://api.unitechbangladesh.com/api/v1/Academic-courses/create",
        courseInfoData,
        {
          maxContentLength: 1000000000000,
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

    setHidden(false);
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
      <div className="mt-5 Academic-Courses px-2 md:mx-10 pt-16">
        <h1 className="uppercase text-center text-[28px] font-[700] text-[#151d30] ">
          Create Valid Academic Courses
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
                কোর্সের এর সেমিস্টার নাম
              </label>
              <input
                required
                id="username"
                name="CName"
                type="text"
                placeholder="প্রথম সেমিস্টার"
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
                placeholder="1S2024B1"
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 04 ------- */}
            <div className="">
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="phone"
              >
                সেমিস্টার ক্যাটাগরি
              </label>

              <select
                name="cetagory"
                onChange={(e) => setCetagory(e.target.value)}
                className="input block border border-gray-300 focus:border-pitch-black py-2 px-3 w-full focus:outline-none mt-1"
              >
                <option value="selectss" className="bg-[#E8F0FE]">
                  select
                </option>
                {semester?.map((item, index) => (
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
                placeholder="৪ মাস"
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
                placeholder="৪৮ টি"
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
                placeholder="৬ টি অ্যাসাইনমেন্ট"
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 09 ------- */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                সর্বমোট কুইজ
              </label>
              <input
                required
                id="username"
                name="CQuize"
                type="text"
                placeholder="৫টি বিশেষ কুইজ টেস্ট"
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>

            {/* ------ field number 09 ------- */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                সর্বমোট ফাইনাল পরিক্ষা
              </label>
              <input
                required
                id="username"
                name="CExam"
                type="text"
                placeholder="১+ ফাইনাল পরিক্ষা"
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
                placeholder="৬,০০০ টাকা"
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>

            {/* ------ field number 07 ------- */}
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                কোর্সের এনরোল শুরু
              </label>
              <input
                required
                id="username"
                type="text"
                name="Cenroll-end"
                placeholder="পলিটেকনিকের প্রত্যেক ফাইনাল সেমিস্টার পর থেকে ১০ দিন এর ভেতরে.."
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
                placeholder="কনটেন্টের চাহিদা বেড়ে যাওয়ায় এখন মার্কেটাররা গ্রাফিক্যাল কনটেন্টের দিকে ঝুঁকেছেন তাই বিশ্বজুড়ে গ্রাফিক ডিজাইনারদের চাহিদা এখন আকাশচুম্বী এক জরিপে দেখা যায়, ভালো একটা লোগোর জন্য একটি ছোট প্রতিষ্ঠানও ৫০০ ডলার পর্যন্ত "
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
export default AcademicCourses;

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
