"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
//mamunbooks.com/
// resellbook.store
const SkillBaseCourse = ({
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
        "https://resell-book-store-server.vercel.app/api/v1/books/create-book",
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
            {/* ------ field number 02 ------- */}
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
                name="crouse-free"
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
            {/* ------ field number 03 ------- */}
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
            {/* ------ field number 04 ------- */}
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
            {/* ------ field number 02 ------- */}
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
            {/* ------ field number 02 ------- */}
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
            {/* ------ field number 02 ------- */}
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
            {/* ------ field number 02 ------- */}
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

              {/* <div class="relative px-2 mt-1">
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
              </div> */}
              <div
                class="w-[400px] mx-auto relative border-2 border-gray-300 border-dashed rounded-lg p-6"
                id="dropzone"
              >
                <input
                  type="file"
                  class="absolute inset-0 w-full h-full opacity-0 z-50"
                />
                <div class="text-center">
                  <img
                    class="mx-auto h-12 w-12"
                    src="https://www.svgrepo.com/show/357902/image-upload.svg"
                    alt=""
                  />

                  <h3 class="mt-2 text-sm font-medium text-gray-900">
                    <label for="file-upload" class="relative cursor-pointer">
                      <span>Drag and drop</span>
                      <span class="text-indigo-600"> or browse</span>
                      <span>to upload</span>
                      <input
                        onChange={(e) => handelFileImageUpload(e)}
                        hidden=""
                        type="file"
                        name="bookImage"
                        id="bookImage"
                        accept=".jpeg, .png, jpg"
                        class="sr-only"
                      />
                    </label>
                  </h3>
                  <p class="mt-1 text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>

                <img src="" class="mt-4 mx-auto max-h-40 hidden" id="preview" />
              </div>

              {/* ///// */}
            </div>
          </div>
          <p className="text-center my-7 text-[#000] font-[600] uppercase py-2 bg-[#00000037]">
            All Class Module Content
          </p>

          <div class="grid grid-cols-1 gap-x-6 gap-y-4  sm:grid-cols-2 md:px-5 ">
            {/* ------ field number 09 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                এক নম্বর ক্লাস
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
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                এক নম্বর ক্লাস
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
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                এক নম্বর ক্লাস
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
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                এক নম্বর ক্লাস
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
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                এক নম্বর ক্লাস
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
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                এক নম্বর ক্লাস
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
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                এক নম্বর ক্লাস
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
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                এক নম্বর ক্লাস
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
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                এক নম্বর ক্লাস
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
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                এক নম্বর ক্লাস
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
