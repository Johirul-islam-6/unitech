"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../Dashboard.css";
//mamunbooks.com/
// resellbook.store
const SkillBaseCourse = () => {
  const router = useRouter();
  // const [disable, disableButton] = useState(null);
  const [cetagorybook, setCetagory] = useState();
  const [postImage, setPostImage] = useState();
  const [buttonHidden, setHidden] = useState(false);

  const publication = ["হক প্রকাশনী", "এস আর প্রকাশনী", "অন্যান্য"];
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
    const courseName = formData.get("courseName");
    const courseImage = "image not send";
    const coursePrice = formData.get("course-price");
    // const courseImage = postImage;
    const courseCode = formData.get("course-code");
    const categoryCourse = formData.get("cetagory");
    const enrollStartDate = formData.get("enroll-Start");
    const enrollEndDate = formData.get("enroll-end");
    const courseDuration = formData.get("course-duration");
    const totalClass = formData.get("total-class");
    const totalAssignment = formData.get("total-assignment");
    const totalProject = formData.get("total-Projects");
    const courseDescription = formData.get("discription");

    // const email = userInfo?.email;
    const location = formData.get("location");
    const discription = formData.get("discription");
    // const userId = userInfo?.id;
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

    if (categoryCourse === "select") {
      return alert("Please select cetagoryCourse Cetagory !");
    }

    const courseInfoData = {
      courseName,
      courseImage,
      coursePrice,
      courseCode,
      categoryCourse,
      enrollStartDate,
      enrollEndDate,
      courseDuration,
      totalClass,
      totalAssignment,
      totalProject,
      courseDescription,
      view: "0",
      email: "rase@gmail.com",
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

    try {
      const response = await axios.post(
        "https://unitech-server.vercel.app/api/v1/courses/create",
        courseInfoData,
        {
          maxContentLength: 10000000000,
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
          <div class="grid grid-cols-1 gap-x-6 gap-y-4  sm:grid-cols-2 md:px-5 mt-10">
            {/* ------ field number 01 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                কোর্সের এর নাম
              </label>
              <input
                required
                id="username"
                name="courseName"
                type="text"
                placeholder="Web Design"
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 02 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
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
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 03 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                কোর্সের ফ্রী
              </label>
              <input
                required
                id="username"
                name="course-price"
                type="text"
                placeholder="৫০০০ টাকা"
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 04 ------- */}
            <div className="md:mt-2">
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
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
            {/* ------ field number 05 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                কোর্সের এর Duration
              </label>
              <input
                required
                id="username"
                name="course-duration"
                type="text"
                placeholder="6 month"
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 06 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                কোর্সের enroll শুরূ তারিখ
              </label>
              <input
                required
                defaultValue={formattedDate}
                id="username"
                type="text"
                name="enroll-Start"
                placeholder="24/02/2024"
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>

            {/* ------ field number 07 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                কোর্সের enroll শেষ তারিখ
              </label>
              <input
                required
                defaultValue={formattedDate}
                id="username"
                type="text"
                name="enroll-end"
                placeholder="24/02/2024"
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 08 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                সর্বমোট ক্লাস
              </label>
              <input
                required
                id="username"
                name="total-class"
                type="text"
                placeholder="52"
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 09 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                সর্বমোট Assignment
              </label>
              <input
                required
                id="username"
                name="total-assignment"
                type="text"
                placeholder="10+"
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 10 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                সর্বমোট Projects
              </label>
              <input
                required
                id="username"
                name="total-Projects"
                type="text"
                placeholder="30+"
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
          </div>
          {/* ---- Courses Details ----- */}
          <div class="grid grid-cols-1 gap-x-6 gap-y-4  sm:grid-cols-2 md:px-5 mt-10">
            <div className="mt-2">
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN text-center flex justify-center"
                for="username"
              >
                কোর্সের বিবরণ সমূহ
              </label>
              <textarea
                required
                name="discription"
                id="username"
                type="text"
                placeholder="কমপক্ষে ৪০ শব্দের হতে হবে,  যেটা দ্বারা ছাত্র-ছাত্রী বই এর ভালো দিকগুলো জানতে জানতে পারে । "
                class="input h-[140px] block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <label
                class="text-[#000b] md:text-[14px] text-[14px] text-center ps-[2px] font-bold  md:ps-1 md:pb-2 IN"
                for="username"
              >
                কোর্সের এর ছবি
              </label>

              <div class="relative px-2 mt-1">
                <label
                  title="Click to upload"
                  for="bookImage"
                  class="cursor-pointer flex justify-center h-[130px] items-center 
                   before:border-gray-400/60 hover:before:border-gray-300 group dark:before:bg-darker
                    dark:hover:before:border-gray-500 before:bg-gray-100 dark:before:border-gray-600 
                    before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed
                     before:transition-transform before:duration-300 hover:before:scale-105
                      active:duration-75 active:before:scale-95"
                >
                  <div class="w-[50px] mt-9 relative flex justify-center items-center">
                    <img
                      class="mx-auto h-12 w-12"
                      src="https://www.svgrepo.com/show/357902/image-upload.svg"
                      alt=""
                    />
                  </div>

                  <div class="relative top-[20px]">
                    <span class="block text-[14px] font-semibold relative text-blue-900 dark:text-black group-hover:text-blue-500">
                      {uploadeImages?.name
                        ? uploadeImages?.name?.slice(0, 16)
                        : "Upload a image"}
                    </span>
                    <span class=" block text-[12px] text-gray-500 dark:text-gray-400">
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
                  accept=".jpeg, .png, jpg"
                  class="bg-[#F3F4F6] mb-1 "
                />
              </div>
            </div>
          </div>
          <p className="text-center my-7 text-[#000] font-[600] uppercase py-2 bg-[#00000037]">
            All Class Module Content
          </p>

          <div class="grid grid-cols-1 gap-x-6 gap-y-4  sm:grid-cols-2 md:px-5 ">
            {/* ------ field number 1 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                ১ নাম্বার Module
              </label>

              <input
                name="module_1"
                id="username"
                type="text"
                placeholder="Module মেইন টপিক সমূহ.."
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
              <textarea
                name="module_P_1"
                id="username"
                type="text"
                placeholder="ক্লাসে কি কি থাকবে তা বননা.."
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 2 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                ২ নাম্বার Module
              </label>

              <input
                name="module_2"
                id="username"
                type="text"
                placeholder="Module মেইন টপিক সমূহ.."
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
              <textarea
                name="module_P_2"
                id="username"
                type="text"
                placeholder="ক্লাসে কি কি থাকবে তা বননা.."
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 3 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                ৩ নাম্বার Module
              </label>

              <input
                name="module_3"
                id="username"
                type="text"
                placeholder="Module মেইন টপিক সমূহ.."
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
              <textarea
                name="module_P_3"
                id="username"
                type="text"
                placeholder="ক্লাসে কি কি থাকবে তা বননা.."
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 4 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                ৪ নাম্বার Module
              </label>

              <input
                name="module_4"
                id="username"
                type="text"
                placeholder="Module মেইন টপিক সমূহ.."
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
              <textarea
                name="module_P_4"
                id="username"
                type="text"
                placeholder="ক্লাসে কি কি থাকবে তা বননা.."
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 5 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                ৫ নাম্বার Module
              </label>

              <input
                name="module_5"
                id="username"
                type="text"
                placeholder="Module মেইন টপিক সমূহ.."
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
              <textarea
                name="module_P_5"
                id="username"
                type="text"
                placeholder="ক্লাসে কি কি থাকবে তা বননা.."
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 6 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                ৬ নাম্বার Module
              </label>

              <input
                name="module_6"
                id="username"
                type="text"
                placeholder="Module মেইন টপিক সমূহ.."
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
              <textarea
                name="module_P_6"
                id="username"
                type="text"
                placeholder="ক্লাসে কি কি থাকবে তা বননা.."
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 7 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                ৭ নাম্বার Module
              </label>

              <input
                name="module_7"
                id="username"
                type="text"
                placeholder="Module মেইন টপিক সমূহ.."
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
              <textarea
                name="module_P_7"
                id="username"
                type="text"
                placeholder="ক্লাসে কি কি থাকবে তা বননা.."
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 8 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                ৮ নাম্বার Module
              </label>

              <input
                name="module_8"
                id="username"
                type="text"
                placeholder="Module মেইন টপিক সমূহ.."
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
              <textarea
                name="module_P_8"
                id="username"
                type="text"
                placeholder="ক্লাসে কি কি থাকবে তা বননা.."
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 9 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                ৯ নাম্বার Module
              </label>

              <input
                name="module_9"
                id="username"
                type="text"
                placeholder="Module মেইন টপিক সমূহ.."
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
              <textarea
                name="module_P_9"
                id="username"
                type="text"
                placeholder="ক্লাসে কি কি থাকবে তা বননা.."
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 10 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                ১০ নাম্বার Module
              </label>

              <input
                name="module_10"
                id="username"
                type="text"
                placeholder="Module মেইন টপিক সমূহ.."
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
              <textarea
                name="module_P_10"
                id="username"
                type="text"
                placeholder="ক্লাসে কি কি থাকবে তা বননা.."
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 10 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                ১১ নাম্বার Module
              </label>

              <input
                name="module_11"
                id="username"
                type="text"
                placeholder="Module মেইন টপিক সমূহ.."
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
              <textarea
                name="module_P_11"
                id="username"
                type="text"
                placeholder="ক্লাসে কি কি থাকবে তা বননা.."
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 10 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                ১2 নাম্বার Module
              </label>

              <input
                name="module_12"
                id="username"
                type="text"
                placeholder="Module মেইন টপিক সমূহ.."
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
              <textarea
                name="module_P_12"
                id="username"
                type="text"
                placeholder="ক্লাসে কি কি থাকবে তা বননা.."
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
          </div>

          <div class="flex justify-center mt-1">
            <button
              // onClick={() => disableButton("hidden")}
              type="submit"
              class={`my-5 px-12 flex justify-center bg-[#563A9F] text-gray-100 py-3  rounded-md tracking-wide
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
                    class="mr-2 animate-spin"
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
