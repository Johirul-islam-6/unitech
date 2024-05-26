import React from "react";
import "./DbLayout.css";
import Image from "next/image";
import notification from "@/app/Assets/Dashboard/icon/bell.png";
import Avatar from "@/app/Assets/Dashboard/icon/Avatar.png";
import searchIcon from "@/app/Assets/Dashboard/icon/Search.svg";
import { FaAlignLeft, FaAlignRight } from "react-icons/fa";

export const TopDBLayout = ({ userInfo }) => {
  console.log(userInfo);
  return (
    <>
      <div className="top-dashboard-main border-b-2 border-t-2 ">
        <div className="w-[60%]  justify-start hidden md:flex">
          <input
            type="search"
            name="serch"
            placeholder="Search anything.."
            className="bg-[#f6f6f6] w-[100%] flex justify-start  h-10 px-8 text-[17px]  focus:outline-4 outline-[#d46a14] border-[1px]  mx-auto GT"
          />
          <button className="absolute top-[8px] mt-3 ms-2">
            <Image
              width={20}
              height={20}
              className=""
              src={searchIcon}
              alt=""
            />
          </button>
        </div>
        <div className="md:hidden flex justify-center items-center border-2 rounded-lg px-3">
          <FaAlignLeft />
        </div>
        <div className="flex gap-2 items-center justify-evenly pe-2">
          <div className="block pe-1">
            <h1 className="text-end text-[#5f5f5f] text-[14px] font-bold  SILIGURI">
              {userInfo?.name}
            </h1>
            <p className="text-[#d28e2e] text-[12px] font-bold text-end">
              {userInfo?.ruler}
            </p>
          </div>
          <span className="flex border-2 h-[40px] w-[40px] items-center justify-center uppercase gap-1">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 448 512"
              >
                <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
              </svg>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};
