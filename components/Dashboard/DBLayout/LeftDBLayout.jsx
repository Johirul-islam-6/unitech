import Link from "next/link";
import React from "react";

import Dashboard from "@/app/Assets/Dashboard/icon/leftsite-container/Dashboard.png";
import Banners from "@/app/Assets/Dashboard/icon/leftsite-container/Banners.png";
import User from "@/app/Assets/Dashboard/icon/leftsite-container/User.png";
import Manage from "@/app/Assets/Dashboard/icon/leftsite-container/Manage.png";
import Payment from "@/app/Assets/Dashboard/icon/leftsite-container/Payment.png";
import Announcement from "@/app/Assets/Dashboard/icon/leftsite-container/Announcement.png";
import Settings from "@/app/Assets/Dashboard/icon/leftsite-container/Settings.png";
import exit from "@/app/Assets/Dashboard/icon/leftsite-container/exit.png";
import logo from "@/app/Assets/Dashboard/icon/logo.png";
import Image from "next/image";

export const LeftDBLayout = () => {
  return (
    <>
      <div className="left-site-container border-r-2">
        <div className="flex items-center pt-2 ps-2">
          <Image
            width={0}
            height={0}
            className="object-cover"
            src={logo}
            alt=""
          />
        </div>
        <div className="flex justify-start items-center  mt-[11px] ">
          <ul className="w-[100%] ">
            <li className="link-text py-[12px] items-center px-2 border-b-2 border-t-2 w-[100%] hover:bg-[#c0bfbf] text-[#464646]  hover:text-white flex gap-2  duration-300 cursor-pointer">
              <Image
                width={20}
                height={15}
                className="w-[22px] h-[22px]"
                src={Dashboard}
                alt=""
              />{" "}
              <Link
                className=" uppercase font-[600] flex w-[100%] text-[400] "
                href="/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li className="link-text py-[12px] items-center px-2 border-b-2 w-[100%] hover:bg-[#c0bfbf] text-[#464646]  hover:text-white flex gap-2  duration-300 cursor-pointer">
              <Image
                width={20}
                height={15}
                className="w-[25px] h-[25px]"
                src={Settings}
                alt=""
              />{" "}
              <Link
                className=" uppercase font-[600] flex w-[100%] text-[400] "
                href="/dashboard/classToper"
              >
                Class Toper
              </Link>
            </li>
            <li className="link-text py-[12px] items-center px-2 border-b-2 w-[100%] hover:bg-[#c0bfbf] text-[#464646]  hover:text-white flex gap-2  duration-300 cursor-pointer">
              <Image
                width={20}
                height={15}
                className="w-[25px] h-[25px]"
                src={Announcement}
                alt=""
              />{" "}
              <Link
                className=" uppercase font-[600] flex w-[100%] text-[400] "
                href="/dashboard/review"
              >
                Review write
              </Link>
            </li>
            <li className="link-text py-[12px] items-center px-2 border-b-2 w-[100%] hover:bg-[#c0bfbf] text-[#464646]  hover:text-white flex gap-2  duration-300 cursor-pointer">
              <Image
                width={20}
                height={15}
                className="w-[25px] h-[25px]"
                src={Announcement}
                alt=""
              />{" "}
              <Link
                className=" uppercase font-[600] flex w-[100%] text-[400] "
                href="/dashboard/Announcement"
              >
                Announcement
              </Link>
            </li>
            <li className="link-text py-[12px] items-center px-2 border-b-2 w-[100%] hover:bg-[#c0bfbf] text-[#464646]  hover:text-white flex gap-2  duration-300 cursor-pointer">
              <Image
                width={20}
                height={15}
                className="w-[25px] h-[25px]"
                src={Announcement}
                alt=""
              />{" "}
              <Link
                className=" uppercase font-[600] flex w-[100%] text-[400] "
                href="/dashboard/attachmentenroll"
              >
                Attachmentenroll
              </Link>
            </li>
            <li className="link-text py-[12px] items-center px-2 border-b-2 w-[100%] hover:bg-[#c0bfbf] text-[#464646]  hover:text-white flex gap-2  duration-300 cursor-pointer">
              <Image
                width={20}
                height={15}
                className="w-[25px] h-[25px]"
                src={Announcement}
                alt=""
              />{" "}
              <Link
                className=" uppercase font-[600] flex w-[100%] text-[400] "
                href="/dashboard/enrollStudent"
              >
                Enroll Student
              </Link>
            </li>
            <li className="link-text py-[12px] items-center px-2 border-b-2 w-[100%] hover:bg-[#c0bfbf] text-[#464646]  hover:text-white flex gap-2  duration-300 cursor-pointer">
              <div className="group relative cursor-pointer ">
                <div className="flex gap-[6px] items-center justify-between  ">
                  <Image
                    width={20}
                    height={15}
                    className="w-[25px] h-[25px]"
                    src={Banners}
                    alt=""
                  />{" "}
                  <Link
                    href={""}
                    className="menu-hover uppercase font-[600] text-[400]"
                    onClick=""
                  >
                    Create Courses
                  </Link>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </div>

                <div className="invisible w-[280px] absolute  z-50 flex flex-col bg-[#fff] py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                  <Link
                    href={"/dashboard/academic_course"}
                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black hover:underline "
                  >
                    + Academic Course
                  </Link>
                  <Link
                    href={"/dashboard/skillBase_course"}
                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black hover:underline"
                  >
                    + Skill Course
                  </Link>
                </div>
              </div>
            </li>
            <li className="link-text py-[12px] items-center px-2 border-b-2 w-[100%] hover:bg-[#c0bfbf] text-[#464646]  hover:text-white flex gap-2  duration-300 cursor-pointer">
              <Image
                width={20}
                height={15}
                className="w-[25px] h-[25px]"
                src={User}
                alt=""
              />{" "}
              <Link
                className=" uppercase font-[600] flex w-[100%] text-[400] "
                href="/dashboard/ourStudent"
              >
                Our Student
              </Link>
            </li>
            <li className="link-text py-[12px] items-center px-2 border-b-2 w-[100%] hover:bg-[#c0bfbf] text-[#464646]  hover:text-white flex gap-2  duration-300 cursor-pointer">
              <Image
                width={20}
                height={15}
                className="w-[25px] h-[25px]"
                src={Payment}
                alt=""
              />{" "}
              <Link
                className=" uppercase font-[600] flex w-[100%] text-[400] "
                href="/dashboard/infoPayment"
              >
                Payment Info
              </Link>
            </li>
            <li className="link-text py-[12px] items-center px-2 border-b-2 w-[100%] hover:bg-[#c0bfbf] text-[#464646]  hover:text-white flex gap-2  duration-300 cursor-pointer">
              <Image
                width={20}
                height={15}
                className="w-[25px] h-[25px]"
                src={Manage}
                alt=""
              />{" "}
              <Link
                className=" uppercase font-[600] flex w-[100%] text-[400] "
                href="/dashboard/management"
              >
                Manage Account
              </Link>
            </li>

            <li className="link-text py-[12px] items-center px-2 border-b-2 w-[100%] hover:bg-[#c0bfbf] text-[#464646]  hover:text-white flex gap-2  duration-300 cursor-pointer">
              <Image
                width={20}
                height={15}
                className="w-[25px] h-[25px]"
                src={exit}
                alt=""
              />{" "}
              <Link
                className=" uppercase font-[600] flex w-[100%] text-[400] "
                href="/"
              >
                Exit
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
