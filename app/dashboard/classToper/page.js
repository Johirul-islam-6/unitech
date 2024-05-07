"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
//mamunbooks.com/
// resellbook.store
const ClassToper = () => {
  const router = useRouter();
  const [buttonHidden, setHidden] = useState(false);
  const [cetagorybook, setCetagory] = useState();
  const [postImage, setPostImage] = useState();
  const [reloades, setReload] = useState(false);
  const semester = [
    "১ম সেমিস্টার",
    "২য় সেমিস্টার",
    "৩য় সেমিস্টার",
    "৪র্থ সেমিস্টার",
    "৫ম সেমিস্টার",
    "৬ষ্ঠ সেমিস্টার",
    "৭ম সেমিস্টার",
    "৮ম সেমিস্টার",
    "অন্যান্য",
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

  const HandleSubmite = async (e) => {
    e.preventDefault();
    setHidden(true);
    const formData = new FormData(e.target);
    const CName = formData.get("CName");
    const CCategory = formData.get("cetagory");
    const CDepartment = formData.get("CDepartment");
    const CSession = formData.get("CSession");
    const ToperImage = postImage;

    if (CCategory === "select") {
      return alert("Please select cetagoryCourse Cetagory !");
    }

    const studentInformation = {
      CName,
      CCategory,
      CDepartment,
      CSession,
      ToperImage,
    };
    setHidden(true);

    try {
      const response = await axios.post(
        "https://unitech-server.vercel.app/api/v1/toper/create",
        studentInformation,
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
        setReload(true);
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
    setReload(true);
  };

  // ----------- image converted base64 ----------
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

  // get all toper
  const [Loading, setLoading] = useState(true);
  const [allToper, setAllToper] = useState();

  useEffect(() => {
    // ------- academic courses--------
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://unitech-server.vercel.app/api/v1/toper`
        );
        setAllToper(result?.data?.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [reloades]);

  // ----------- delete Toper book -------------

  async function deleteToper(id, name) {
    console.log(id, "idddd");
    try {
      const response = await axios.delete(
        `https://unitech-server.vercel.app/api/v1/toper/${id}`
      );

      if (response?.data?.success) {
        Swal.fire({
          title: ` ${name}`,
          text: `Delete Complited`,
          icon: "success",
        });
        setReload(true);
      }
      setReload(true);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  }

  return (
    <div className="h-[100vh] overflow-auto">
      <div className="mt-5 Academic-Courses px-2 md:mx-10 pt-8 rounded-lg">
        <h1 className="uppercase text-center text-[28px] font-[700] text-[#151d30] ">
          Create A Semester Toper
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
                পরীক্ষার্থীর নাম
              </label>
              <input
                required
                id="username"
                name="CName"
                type="text"
                placeholder="মো: রাসেল খান"
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>

            {/* ------ field number 04 ------- */}
            <div className="">
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="phone"
              >
                পরীক্ষার্থীর সেমিস্টার
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

            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                পরীক্ষার্থীর ডিপার্টমেন্ট
              </label>
              <input
                required
                id="username"
                name="CDepartment"
                type="text"
                placeholder="কম্পিউটার ডিপার্টমেন্ট"
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
            <div>
              <label
                className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="username"
              >
                সেশন
              </label>
              <input
                required
                id="username"
                name="CSession"
                type="text"
                placeholder="২০২৪"
                className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
              />
            </div>
          </div>

          {/* ---- Courses Details ----- */}
          <div className="flex justify-center items-center mt-5">
            <div className="flex flex-col justify-center items-center">
              <div className="relative px-2">
                <label
                  title="Click to upload"
                  for="bookImage"
                  className="cursor-pointer flex justify-center h-[40px] items-center 
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

      <div className="display-toper list pb-10 pt-1">
        {Loading && (
          <>
            <div class=" hidden max-w-screen-xl md:px-10 mx-auto md:grid md:grid-cols-4 gap-8  items-center justify-center mt-5">
              <div class="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
                <div class="h-48 bg-gray-300"></div>
                <div class="px-6 py-4">
                  <div class="h-6 bg-gray-300 mb-2"></div>
                  <div class="h-4 bg-gray-300 w-2/3"></div>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <div class="h-4 bg-gray-300 w-1/4 mb-2"></div>
                  <div class="h-4 bg-gray-300 w-1/2"></div>
                </div>
              </div>
              <div class="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
                <div class="h-48 bg-gray-300"></div>
                <div class="px-6 py-4">
                  <div class="h-6 bg-gray-300 mb-2"></div>
                  <div class="h-4 bg-gray-300 w-2/3"></div>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <div class="h-4 bg-gray-300 w-1/4 mb-2"></div>
                  <div class="h-4 bg-gray-300 w-1/2"></div>
                </div>
              </div>

              <div class="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
                <div class="h-48 bg-gray-300"></div>
                <div class="px-6 py-4">
                  <div class="h-6 bg-gray-300 mb-2"></div>
                  <div class="h-4 bg-gray-300 w-2/3"></div>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <div class="h-4 bg-gray-300 w-1/4 mb-2"></div>
                  <div class="h-4 bg-gray-300 w-1/2"></div>
                </div>
              </div>

              <div class="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
                <div class="h-48 bg-gray-300"></div>
                <div class="px-6 py-4">
                  <div class="h-6 bg-gray-300 mb-2"></div>
                  <div class="h-4 bg-gray-300 w-2/3"></div>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <div class="h-4 bg-gray-300 w-1/4 mb-2"></div>
                  <div class="h-4 bg-gray-300 w-1/2"></div>
                </div>
              </div>
            </div>
            <div className="md:hidden flex justify-center items-center">
              <div class="w-[100%] px-5 rounded overflow-hidden shadow-lg animate-pulse">
                <div class="h-48 bg-gray-300"></div>
                <div class="px-6 py-4">
                  <div class="h-6 bg-gray-300 mb-2"></div>
                  <div class="h-4 bg-gray-300 w-2/3"></div>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <div class="h-4 bg-gray-300 w-1/4 mb-2"></div>
                  <div class="h-4 bg-gray-300 w-1/2"></div>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="grid md:grid-cols-4 gap-x-6 gap-y-4  sm:grid-cols-2 md:px-10 px-2 mt-10">
          {/* ------ field number 01 ------- */}
          {allToper?.map((singel, index) => (
            <>
              <div key={index} className="border-4 relative overflow-hidden">
                <div className=" absolute w-[100%] h-[100%] bg-[#00000086]">
                  <button
                    onClick={() => deleteToper(singel?._id)}
                    className="absolute bg-red-700 p-1 text-[12px] right-0 text-[#ffffff] cursor-pointer"
                  >
                    delete
                  </button>
                  <div className="flex flex-col justify-end items-center h-[100%] w-[100%] pb-2">
                    <h1 className="text-white text-[16px] font-[600] text-start">
                      {singel?.CName}
                    </h1>
                    <h1 className="text-white text-[14px] font-[600] ">
                      {singel?.CDepartment}
                    </h1>
                    <h1 className="text-white text-[14px] font-[600] ">
                      {singel?.CCategory}
                    </h1>
                    <h1 className="text-white text-[12px] font-[600] ">
                      {singel?.CSession}
                    </h1>
                  </div>
                </div>
                <Image
                  width={60}
                  height={60}
                  className="w-[100%] h-[300px]"
                  src={singel?.ToperImage}
                  alt=""
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ClassToper;

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
