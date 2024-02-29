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
                className=" uppercase font-[600] text-[400] "
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
                src={Banners}
                alt=""
              />{" "}
              <Link
                className=" uppercase font-[600] text-[400] "
                href="/dashboard/banner"
              >
                Banners
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
                className=" uppercase font-[600] text-[400] "
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
                src={User}
                alt=""
              />{" "}
              <Link
                className=" uppercase font-[600] text-[400] "
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
                className=" uppercase font-[600] text-[400] "
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
                src={Announcement}
                alt=""
              />{" "}
              <Link
                className=" uppercase font-[600] text-[400] "
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
                src={Settings}
                alt=""
              />{" "}
              <Link
                className=" uppercase font-[600] text-[400] "
                href="/dashboard"
              >
                Settings
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
                className=" uppercase font-[600] text-[400] "
                href="/dashboard/Exit"
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
