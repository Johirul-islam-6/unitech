"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";
import { FaQuoteRight } from "react-icons/fa";
import Image from "next/image";
const Review = () => {
  const route = useRouter();
  const [Loading2, setLoading2] = useState(true);
  const accessToken = Cookies.get("accessToken");
  const [userInfo, setUserInfo] = useState("");

  const [reloades, setReload] = useState(false);
  const [buttonHidden, setHidden] = useState(false);
  const [postImage, setPostImage] = useState();

  useEffect(() => {
    if (accessToken) {
      const getCookiesData = Cookies.get("CookieYouserData");
      const cookiesInfo = JSON.parse(getCookiesData);
      setUserInfo(cookiesInfo);
    }
    setLoading2(false);
  }, [accessToken]);

  // Date genarate---
  const today = new Date();
  const padZero = (num) => {
    return num < 10 ? "0" + num : num;
  };

  // Format the date to DD/MM/YYYY
  const formattedDate = `${padZero(today.getDate())}/${padZero(
    today.getMonth() + 1
  )}/${today.getFullYear()}`;

  // ------------- submit button --------------
  const HandleSubmite = async (e) => {
    e.preventDefault();
    setHidden(true);
    const formData = new FormData(e.target);
    const SName = formData.get("SName");
    const SImage = postImage;
    const SBatch = formData.get("SBatch");
    const message = formData.get("message");

    const NoticInformation = {
      SName,
      SImage,
      SBatch,
      message,
    };
    setHidden(true);

    try {
      const response = await axios.post(
        "https://api.unitechbangladesh.com/api/v1/review/create-review",
        NoticInformation,
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

  // ----- get delete review ---------

  const [Loading, setLoading] = useState(true);
  const [review, setreview] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `https://api.unitechbangladesh.com/api/v1/review`
        );
        setreview(result?.data?.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [reloades]);

  // ----------- delete Toper book -------------

  async function deleteToper(id, name) {
    try {
      const response = await axios.delete(
        `https://api.unitechbangladesh.com/api/v1/review/${id}`
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
    <div className="overflow-y-auto h-[90vh]">
      <div className="Notic-board">
        <div className="flex md:flex-row flex-col-reverse gap-5 items-center justify-center border-2">
          <h1 className="text-[20px] md:text-[30px] font-[600]  py-5">
            Review A Student form
          </h1>
        </div>

        <form
          onSubmit={HandleSubmite}
          className="input-fild px-5 w-[100%] md:w-[80%] mx-auto block mt-5 bg-[#f9fafb] border-2 rounded-lg py-5"
        >
          <div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3 justify-center items-center">
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="tex"
                  name="SName"
                  id="name"
                  className=" flex w-full rounded-md border-0 py-4 placeholder:text-[18px]  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5"
                  placeholder="Student Name"
                />
              </div>

              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="tex"
                  name="SBatch"
                  id="price"
                  className=" flex w-full rounded-md border-0 py-4 placeholder:text-[18px]  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5"
                  placeholder="Student identity"
                />
              </div>
            </div>
          </div>
          {/* <!-- component --> */}

          <div className="w-full h-full flex justify-center bg-opacity-60 mt-5">
            {/* ---- Courses Image ----- */}
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
            {/* ----icon---- */}
          </div>
          {/* --------------- message field --------------- */}
          <div className="mt-8">
            <textarea
              className=" flex w-full rounded-md border-0 py-4 placeholder:text-[18px]  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5"
              placeholder="Write a Student Message"
              name="message"
              id=""
              rows={5}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-[100%] hover:bg-[#f89421d7] justify-center gap-2 font-[700] text-[18px] rounded-md mt-4 flex items-center text-center bg-[#F89521] py-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13.3248 10.6752L5.44059 18.5594M6.29145 12.8375L2.42965 11.9253C2.00478 11.825 1.85535 11.2975 2.16313 10.9886L5.23428 7.91744C5.44059 7.71113 5.72049 7.59292 6.01378 7.59069L9.47635 7.56059M13.8377 3.59842C16.4149 5.35591 18.6441 7.58512 20.4016 10.1623M11.1614 17.7085L12.0736 21.5703C12.1739 21.9952 12.7014 22.1447 13.0103 21.8369L16.0814 18.7657C16.2878 18.5594 16.406 18.2795 16.4082 17.9862L16.4383 14.5236M21.0629 8.35012L21.9639 4.01438C22.2093 2.83454 21.1655 1.79075 19.9856 2.03608L15.6499 2.93713C14.373 3.20254 13.2021 3.83483 12.281 4.75707L8.72362 8.31332C7.36647 9.67047 6.48326 11.4302 6.20447 13.3293L6.19221 13.4107C6.01601 14.6229 6.42193 15.8462 7.28729 16.7127C8.15266 17.5781 9.3771 17.984 10.5893 17.8067L10.6707 17.7944C12.5698 17.5167 14.3295 16.6324 15.6867 15.2753L19.2429 11.719C20.1652 10.7979 20.7975 9.62698 21.0629 8.35012Z"
                stroke="#212121"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{" "}
            Post
          </button>
        </form>
      </div>

      <div className="get mt-5 md:px-10">
        <h1 className="text-[28px] font-[400] text-center pb-3 pt-1">
          All Review List
        </h1>
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
        <div className="grid  gap-2 gap-y-4 justify-center items-start md:grid-cols-3">
          {review.map((student, index) => (
            <div key={index} className="reviewCard-container relative">
              <div className="reviewCard md:h-[360px] border-2 flex flex-col justify-center items-center px-5 py-2 pb-5">
                <div className="flex flex-col justify-center">
                  <Image
                    width={0}
                    height={0}
                    className="border-2 border-amber-700 w-[90px] h-[90px] flex justify-center mx-auto rounded-full"
                    src={student?.SImage}
                    objectFit="contain"
                    alt=""
                  />
                  <h1 className="text-center text-[16px] pt-1 font-[600] text-[#3e54a3]">
                    {student?.SName?.slice(0, 16)}
                  </h1>
                  <p className="text-[12px] text-[#00000090]">
                    {student?.SBatch}
                  </p>
                </div>
                <span>
                  <FaQuoteRight className="text-[25px] text-[#e28e11e6] mt-2" />
                </span>
                <h2 className="text-[16px] text-start SILIGURI mt-3 md:px-2">
                  {student?.message.slice(0, 130)}...
                </h2>

                <button
                  onClick={() => deleteToper(student?._id, student?.SName)}
                  className=" bg-red-700 px-5 py-1 rounded-sm shadow-lg mt-[20px] text-[14px] right-0 text-[#ffffff] cursor-pointer"
                >
                  delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Review;

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
