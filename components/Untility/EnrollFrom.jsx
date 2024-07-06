"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import Swal from "sweetalert2";

export const EnrollFrom = ({
  accessToken,
  userInfo,
  singleCourses,
  closeModalFunction,
  CCetagorys,
}) => {
  const [buttonHidden, setHidden] = useState(false);

  // Date genarate---
  const today = new Date();
  const padZero = (num) => {
    return num < 10 ? "0" + num : num;
  };

  // Format the date to DD/MM/YYYY
  const formattedDate = `${padZero(today.getDate())}/${padZero(
    today.getMonth() + 1
  )}/${today.getFullYear()}`;

  const handelEnrollDataSubmit = async (e) => {
    e.preventDefault();
    const message = e.target?.message?.value;

    const enrollData = {
      SName: userInfo?.name,
      SRoll: userInfo?.studentRoll,
      SEmail: userInfo?.email,
      SPhone: userInfo?.phone,
      SLocation: userInfo?.address,

      courseImage: singleCourses?.courseImage,
      CourseID: singleCourses?._id,
      CCetagory: CCetagorys,
      CName: singleCourses?.CName,
      CId: singleCourses?.CCode,
      CBatch: singleCourses?.CBatch ? singleCourses?.CBatch : "1 batch",
      CDuration: singleCourses?.CDuration,
      CPrice: singleCourses?.CPrice.toString(),
      status: "panding",
      message,
      CreateDate: formattedDate,
    };
    setHidden(true);
    try {
      const response = await axios.post(
        "https://api.unitechbangladesh.com/api/v1/enroll/create",
        enrollData,
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
          title: "খুব শীঘ্রই আমাদের টিম আপনার সাথে যোগাযোগ করবে । ",
          text: `ধন্যবাদ ${userInfo?.name}`,

          showConfirmButton: false,
          timer: 5000,
        });

        closeModalFunction(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);

      Swal.fire({
        title: `আপনি এলরেডি আজকে একটি এনরোল করে ফেলেছেন।`,
        text: `কালকে নতুন করে আবার বুকিং করতে পারবেন`,
        icon: "error",
      });
      setHidden(false);
    }

    setHidden(false);
  };

  return (
    <>
      {accessToken ? (
        <>
          <form
            onSubmit={handelEnrollDataSubmit}
            className="w-[100%] h-[auto] bg-[#00000087] absolute z-20 pb-10 SILIGURI"
          >
            <div className="bg-[#fff] md:w-[800px] mx-auto h-[auto] p-5 py-10 mt-5">
              <div className="flex justify-between relative ">
                <h1>
                  আপনি কি আমাদের প্রতিষ্ঠানে এই কোর্সটি করতে কি আগ্রহী{" "}
                  <span className="text-green-500 text-[12px] font-[800] border-2 rounded-full px-[2px] SILIGURI">
                    OnSite
                  </span>
                </h1>
                <button
                  onClick={() => closeModalFunction(false)}
                  className="text-[30px] font-[600] absolute hover:text-red-800 right-0 top-[-10px]"
                >
                  x
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-5 justify-center items-center mt-10">
                {/* ------ field number 01 ------- */}
                <div>
                  <input
                    required
                    id="username"
                    name="CName"
                    type="text"
                    defaultValue={userInfo?.name}
                    disabled
                    className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-3 px-3 w-full focus:outline-none mt-1"
                  />
                </div>
                {/* ------ field number 01 ------- */}
                <div>
                  <input
                    required
                    id="username"
                    name="CName"
                    type="text"
                    defaultValue={userInfo?.address}
                    className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-3 px-3 w-full focus:outline-none mt-1"
                  />
                </div>
                {/* ------ field number 01 ------- */}
                <div>
                  <input
                    required
                    id="username"
                    name="CName"
                    type="text"
                    defaultValue={userInfo?.email}
                    disabled
                    className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-3 px-3 w-full focus:outline-none mt-1"
                  />
                </div>
                {/* ------ field number 01 ------- */}
                <div>
                  <input
                    required
                    id="username"
                    name="CName"
                    type="text"
                    defaultValue={userInfo?.phone}
                    className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-3 px-3 w-full focus:outline-none mt-1"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5 justify-center items-center mt-10">
                {/* ------ field number 01 ------- */}
                <div>
                  <input
                    required
                    id="username"
                    name="CName"
                    type="text"
                    defaultValue={singleCourses.CCategory}
                    disabled
                    className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-3 px-3 w-full focus:outline-none mt-1"
                  />
                </div>
                {/* ------ field number 01 ------- */}
                <div>
                  <input
                    id="username"
                    name="CName"
                    type="text"
                    defaultValue={singleCourses?.CName}
                    disabled
                    className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-3 px-3 w-full focus:outline-none mt-1"
                  />
                </div>
                {/* ------ field number 01 ------- */}
                <div>
                  <input
                    required
                    id="username"
                    name="CName"
                    type="text"
                    defaultValue={singleCourses?.CCode}
                    disabled
                    className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-3 px-3 w-full focus:outline-none mt-1"
                  />
                </div>
                {/* ------ field number 01 ------- */}
                <div>
                  <input
                    required
                    id="username"
                    name="CName"
                    type="text"
                    defaultValue={"2 Batch"}
                    disabled
                    className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-3 px-3 w-full focus:outline-none mt-1"
                  />
                </div>
                {/* ------ field number 01 ------- */}
                <div>
                  <input
                    required
                    id="username"
                    name="CName"
                    type="text"
                    defaultValue={singleCourses?.CDuration}
                    disabled
                    className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-3 px-3 w-full focus:outline-none mt-1"
                  />
                </div>
                {/* ------ field number 01 ------- */}
                <div>
                  <input
                    required
                    id="username"
                    name="CName"
                    type="text"
                    defaultValue={singleCourses?.CPrice + " টাকা"}
                    disabled
                    className="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-3 px-3 w-full focus:outline-none mt-1"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5 justify-center items-center mt-5">
                <div className="mt-2">
                  <label
                    className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN text-center flex justify-center"
                    for="username"
                  >
                    আপনার মতামত টি লিখুন
                  </label>
                  <textarea
                    required
                    name="message"
                    id="message"
                    type="text"
                    placeholder="আপনার কোন প্রশ্ন থাকলে জানাতে পারেব এখানে...."
                    className="input h-[140px] block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
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
                  Confirm
                </button>
              </div>
            </div>
          </form>
        </>
      ) : (
        <>
          <div className="w-[100%] h-[auto] bg-[#00000087] absolute z-20 pb-10">
            <div className="bg-[#fff] md:w-[800px] mx-auto h-[60vh] p-5 py-10 mt-5">
              <div className="flex justify-between relative ">
                <h1>আপনি কোর্সটি করতে হলে লগইন করতে হবে</h1>
                <button
                  onClick={() => closeModalFunction(false)}
                  className="text-[30px] font-[600] absolute right-0 top-[-10px] "
                >
                  x
                </button>
              </div>

              <div className="flex justify-center items-center h-[100%]">
                <Link href={"/login"}>
                  {" "}
                  <button className="text-[18px] bg-amber-600 px-5 py-2 uppercase text-[#fffffff9] font-[600]">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
