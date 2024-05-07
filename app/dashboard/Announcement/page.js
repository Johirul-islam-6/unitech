import React from "react";
import notic from "@/app/Assets/Dashboard/Notics board/notic.png";
import Image from "next/image";
const Announcement = () => {
  return (
    <>
      <div className="Notic-board">
        <div className="flex md:flex-row flex-col-reverse gap-5 items-center justify-center border-2">
          <h1 className="text-[30px] md:text-[50px] font-[700] Navbar-font">
            We’ll let you know <br /> the latest update here
          </h1>
          <Image width={300} height={300} src={notic} alt="" />
        </div>

        <div className="input-fild px-5 w-[100%] md:w-[80%] mx-auto block mt-5 bg-[#f9fafb] border-2 rounded-lg py-5">
          <div>
            <label
              for="price"
              className=" text-[18px] font-medium leading-6 text-gray-900 flex gap-2 items-center pb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 20.0002H21M16.5 3.50023C16.8978 3.1024 17.4374 2.87891 18 2.87891C18.2786 2.87891 18.5544 2.93378 18.8118 3.04038C19.0692 3.14699 19.303 3.30324 19.5 3.50023C19.697 3.69721 19.8532 3.93106 19.9598 4.18843C20.0665 4.4458 20.1213 4.72165 20.1213 5.00023C20.1213 5.2788 20.0665 5.55465 19.9598 5.81202C19.8532 6.06939 19.697 6.30324 19.5 6.50023L7 19.0002L3 20.0002L4 16.0002L16.5 3.50023Z"
                  stroke="#393A3A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
              Post an announcement
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="tex"
                name="price"
                id="price"
                className=" flex w-full rounded-md border-0 py-4 placeholder:text-[18px]  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5"
                placeholder="Notic Title"
              />
            </div>
          </div>
          {/* <!-- component --> */}
          <div className="w-full h-full flex justify-center bg-opacity-60 mt-5">
            <div>
              <label className="">
                <input
                  className="text-sm cursor-pointer w-36 hidden"
                  type="file"
                  multiple
                />
                <div className=" bg-white text-[#000000bd] font-[600] hover:text-amber-700 border-2 py-2 px-3 hover:border-amber-700 rounded-lg">
                  <svg
                    className="text-indigo-500  mx-auto "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p>image</p>
                </div>
              </label>
            </div>
            {/* ----icon---- */}
          </div>
          <button className="w-[100%] hover:bg-[#f89421d7] justify-center gap-2 font-[700] text-[18px] rounded-md mt-4 flex items-center text-center bg-[#F89521] py-4">
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
        </div>
      </div>
    </>
  );
};
export default Announcement;
