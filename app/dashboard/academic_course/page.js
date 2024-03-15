"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
//mamunbooks.com/
// resellbook.store
const AcademicCourses = ({
  userInfo,
  closeModal,
  createdBookInfo,
  createdBook,
}) => {
  const router = useRouter();
  // const [disable, disableButton] = useState(null);
  const [cetagorybook, setCetagory] = useState();
  const [cetagorybook2, setCetagory2] = useState();
  const [postImage, setPostImage] = useState();
  const [buttonHidden, setHidden] = useState(false);

  const publication = ["হক প্রকাশনী", "এস আর প্রকাশনী", "অন্যান্য"];
  const departmental = ["কারিগরি", "জেনারেল", "মেডিকেল", "অন্যান্য"];
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
  const technical = [
    {
      naem: "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
      shorcut: "CST",
    },
    {
      naem: "সিভিল টেকনোলজি",
      shorcut: "CT",
    },
    {
      naem: "ইলেকট্রিক্যাল টেকনোলজি",
      shorcut: "ET",
    },
    {
      naem: "মেকানিক্যাল টেকনোলজি",
      shorcut: "MT",
    },
    {
      naem: "ইলেকট্রনিক্স টেকনোলজি",
      shorcut: "ETT",
    },
    {
      naem: "ইলেকট্রোমেডিক্যাল টেকনোলজি",
      shorcut: "EMT",
    },
    {
      naem: "পাওয়ার টেকনোলজি",
      shorcut: "PT",
    },
    ,
  ];
  const genaral = [
    {
      naem: " সাইন্স",
      shorcut: "science",
    },
    {
      naem: "কমার্স",
      shorcut: "commerce",
    },
    {
      naem: "আর্টস",
      shorcut: "arts",
    },
    {
      naem: "অন্যান্য",
      shorcut: "other",
    },

    ,
  ];
  const Medical = [
    {
      naem: "Psychology",
      shorcut: "psychology",
    },
    {
      naem: "Sociology",
      shorcut: "sociology",
    },
    {
      naem: "Microbiology",
      shorcut: "microbiology",
    },
    {
      naem: "Epidemiology",
      shorcut: "epidemiology",
    },
    {
      naem: "Pharmacology",
      shorcut: "pharmacology",
    },
    {
      naem: "Genetics",
      shorcut: "genetics",
    },
    {
      naem: "Human anatomy",
      shorcut: "human-anatomy",
    },
    {
      naem: "Psychophysiology",
      shorcut: "psychophysiology",
    },
    {
      naem: "Others",
      shorcut: "other",
    },

    ,
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
    // const bookImage = formData.get("bookImage") ;
    const bookImage = postImage;
    const subjectCode = formData.get("subjectCode"); // Assuming you set the "name" attribute for the select as "institute"
    const publication = formData.get("publication");
    const department = formData.get("department");
    const mejorSubject = formData.get("mejor-subject");
    const semester = formData.get("semester");
    const phone = formData.get("phone");
    const buyPrice = formData.get("buy-price");
    const sellPrice = formData.get("sell-price");
    const email = userInfo?.email;
    const location = formData.get("location");
    const discription = formData.get("discription");
    const userId = userInfo?.id;
    const status = "panding";

    if (publication === "select") {
      return alert("Please select publication Cetagory !");
    }
    if (department === "select") {
      return alert("Please select department Cetagory !");
    }
    if (mejorSubject === "select") {
      return alert("Please select mejor Subject Cetagory !");
    }
    if (semester === "select") {
      return alert("Please select semester Cetagory !");
    }

    const bookData = {
      userId,
      courseName,
      bookImage,
      subjectCode,
      publication,
      department,
      mejorSubject,
      semester,
      phone,
      buyPrice,
      sellPrice,
      email,
      location,
      discription,
      status,
    };
    setHidden(true);
    console.log("madarchod", bookData);
    if (createdBookInfo?.length >= 3) {
      return Swal.fire({
        title: `আপনি সর্বোচ্চ ৩ টি বই পাবলিশ করার ‍Store পাবেন।`,
        text: ` ৩ টি বই এর মধ্যে থেকে ১ টি বই ডিলিট করতে হবে । ডিলিট করার পর অন্য ১টি বই যুক্ত করা যাবে ।`,
        icon: "error",
      });
    }
    try {
      const response = await axios.post(
        "https://unitech-server.vercel.app/api/v1/books/create-book",
        bookData,
        {
          maxContentLength: 1000000000,
        }
      );
      const result = response.data;

      console.log(result, "laste");

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
        createdBook(true);
        closeModal(false);
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
                placeholder="প্রথম সেমিস্টার"
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 02 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                কোর্সের এর ছবি
              </label>

              <div class="relative px-2 mt-1">
                <label
                  title="Click to upload"
                  for="bookImage"
                  class="cursor-pointer flex h-[20px] items-center 
                   before:border-gray-400/60 hover:before:border-gray-300 group dark:before:bg-darker
                    dark:hover:before:border-gray-500 before:bg-gray-100 dark:before:border-gray-600 
                    before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed
                     before:transition-transform before:duration-300 hover:before:scale-105
                      active:duration-75 active:before:scale-95"
                >
                  <div class="w-[50px] mt-9 relative flex justify-center items-center">
                    <img
                      class="w-[30px]"
                      src="https://www.svgrepo.com/show/485545/upload-cicle.svg"
                      alt="file upload icon"
                      width="512"
                      height="512"
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

              {/* ///// */}
            </div>
            {/* ------ field number 03 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                তারিখ
              </label>
              <input
                required
                defaultValue={formattedDate}
                id="username"
                type="text"
                name="subjectCode"
                placeholder="৬৬৬৬"
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 04 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="phone"
              >
                ডিপার্টমেন্ট
              </label>

              <select
                name="department"
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
            {/* ------ field number 06 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="phone"
              >
                মেজর বিষয়
              </label>

              <select
                name="mejor-subject"
                class="input block border border-gray-300 focus:border-pitch-black  py-2 px-3 w-full focus:outline-none mt-1"
              >
                <option className="bg-[#E8F0FE]">select</option>
                {cetagorybook === "কারিগরি" && (
                  <>
                    {technical?.map((item, index) => (
                      <>
                        <option key={index} className="">
                          {item?.naem}
                        </option>
                      </>
                    ))}
                  </>
                )}
                {cetagorybook === "জেনারেল" && (
                  <>
                    {genaral?.map((item, index) => (
                      <>
                        <option key={index} className="">
                          {item?.naem}
                        </option>{" "}
                      </>
                    ))}
                  </>
                )}
                {cetagorybook === "মেডিকেল" && (
                  <>
                    {Medical?.map((item, index) => (
                      <>
                        <option key={index} className="">
                          {item?.naem}
                        </option>{" "}
                      </>
                    ))}
                  </>
                )}
              </select>
            </div>

            {/* ------ field number 05 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="phone"
              >
                পাবলিকেশন
              </label>

              <select
                name="publication"
                class="input block border border-gray-300 focus:border-pitch-black  py-2 px-3 w-full focus:outline-none mt-1"
              >
                <option className="bg-[#E8F0FE]">select</option>
                {publication?.map((item, index) => (
                  <>
                    <option key={index} className="">
                      {item}
                    </option>{" "}
                  </>
                ))}
              </select>
            </div>

            {/* ------ field number 05 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="phone"
              >
                সেমিষ্টার বই
              </label>

              <select
                required
                name="semester"
                onChange={(e) => setCetagory2(e.target.value)}
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
            {/* ------ field number 08 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="phone"
              >
                সঠিক ফোন নাম্বার
              </label>
              <input
                defaultValue={userInfo?.phone}
                required
                id="phone"
                name="phone"
                placeholder="01824842XXX"
                type="phone"
                class="input block border border-gray-300 placeholder:font-normal text-[16px] focus:border-pitch-black  py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 09 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                ক্রয় মূল্য
              </label>
              <input
                required
                name="buy-price"
                id="username"
                type="text"
                placeholder="Enter Your Full Name"
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>

            {/* ------ field number 10 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                কোর্সের মূল্য
              </label>
              <input
                required
                id="username"
                name="sell-price"
                type="text"
                placeholder="Enter Your Full Name"
                class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            {/* ------ field number 11 ------- */}
            <div>
              <label class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN">
                ঠিকানা
              </label>
              <input
                id="location"
                name="location"
                placeholder="যেমন: মাসকান্দা, টেকনিক্যাল মোড়"
                type="text"
                class="input block border border-gray-300 placeholder:font-normal text-[16px] focus:border-pitch-black  py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
          </div>

          {/* ---- Book Details ----- */}
          <div className="md:px-5 mt-8">
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
              class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
            />
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
