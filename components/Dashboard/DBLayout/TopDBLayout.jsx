import React from "react";
import "./DbLayout.css";
import Image from "next/image";
import notification from "@/app/Assets/Dashboard/icon/bell.png";
import Avatar from "@/app/Assets/Dashboard/icon/Avatar.png";
import searchIcon from "@/app/Assets/Dashboard/icon/Search.svg";
import { FaAlignLeft, FaAlignRight } from "react-icons/fa";

export const TopDBLayout = () => {
  return (
    <>
      <div className="top-dashboard-main border-b-2 border-t-2 ">
        <div class="w-[60%]  justify-start hidden md:flex">
          <input
            type="search"
            name="serch"
            placeholder="Search anything.."
            class="bg-[#f6f6f6] w-[100%] flex justify-start  h-10 px-8 text-[17px]  focus:outline-4 outline-[#d46a14] border-[1px]  mx-auto GT"
          />
          <button class="absolute top-[8px] mt-3 ms-2">
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
          {/* <Image
            width={0}
            height={0}
            className="w-[25px] h-[25px]  md:me-4 cursor-pointer"
            src={notification}
            alt=""
          /> */}
          <div className="block pe-1">
            <h1 className="text-end text-[#5f5f5f] text-[14px] font-bold  SILIGURI">
              Richardo Mathew
            </h1>
            <p className="text-[#d28e2e] text-[12px] font-bold text-end">
              admin
            </p>
          </div>
          <Image
            width={0}
            height={0}
            className="w-[35px] h-[35px] border-2 rounded-full border-green-700 cursor-pointer object-cover"
            src={Avatar}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
