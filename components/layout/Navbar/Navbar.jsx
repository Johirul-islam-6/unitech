"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Card from "./Card";
// import Header from "./Header";
import Drawer from "./Drawer";
import Button from "./Button";
import "./Navbar.css";
import "./Responsive.css";
import Image from "next/image";

import logo from "@/app/Assets/Navbar/LOGO.png";
import profile from "@/app/Assets/Navbar/profile.svg";
import { FaLongArrowAltRight, FaRegUserCircle } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 1) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <div className={`${isFixed ? "fixed " : ""} navbar  border-2`}>
          <navbar className="flex items-center justify-between  max-w-screen-xl mx-auto  ">
            {/* <!-- logo --> */}
            <div className="md:w-3/12">
              <Link href="/" className="flex items-center">
                <div className="logo-bg ">
                  <Image
                    src={logo}
                    width={70}
                    height={40}
                    className=""
                    alt="Mr.Friends"
                  />
                </div>
              </Link>
            </div>

            {/* -----------------  All Link ---------------> */}
            <div className=" profile-container w-9/12 flex justify-end items-center">
              <ul className="all-link-container items-center hidden md:flex">
                <li className="link-text py-2 px-[3px] border-b-2 border-[#f6931e] border-opacity-0 hover:border-opacity-100 hover:text-[#f6931e] duration-300 cursor-pointer mx-[10px]">
                  <Link className="navar-text uppercase Navbar-font" href="/">
                    Home
                  </Link>
                </li>
                <li className="link-text py-2 px-[3px] border-b-2 border-[#f6931e] border-opacity-0 hover:border-opacity-100 hover:text-[#f6931e] duration-300 cursor-pointer mx-[10px]">
                  <Link
                    className="navar-text uppercase Navbar-font"
                    href="/notices"
                  >
                    Notices
                  </Link>
                </li>
                <li className="link-text py-2 px-[3px] border-b-2 border-[#f6931e] border-opacity-0 hover:border-opacity-100 hover:text-[#f6931e] duration-300 cursor-pointer mx-[10px]">
                  <Link
                    className="navar-text uppercase Navbar-font"
                    href="/ourCourses"
                  >
                    Our Courses
                  </Link>
                </li>

                <li className="link-text py-2 px-[3px] border-b-2 border-[#f6931e] border-opacity-0 hover:border-opacity-100 hover:text-[#f6931e] duration-300 cursor-pointer ms-3 me-5">
                  <Link
                    className="navar-text uppercase Navbar-font"
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="link-text wrapper met-3 ">
                  <Link
                    Link
                    className=" link-text text-center py-[6px] ARCHITECTURAL"
                    href="/"
                  >
                    <span className="flex items-center justify-center uppercase gap-1 ">
                      UNITECH ARCHITECTURAL
                    </span>
                  </Link>
                </li>
                <li className="link-text wrapper  ">
                  <Link
                    Link
                    className="login-button link-text text-center py-[6px]"
                    href="/registration"
                  >
                    <span className="flex items-center justify-center uppercase gap-1">
                      Login{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="14"
                        width="12"
                        viewBox="0 0 448 512"
                      >
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                      </svg>
                    </span>
                  </Link>
                </li>

                {/* <li className=" duration-300 cursor-pointer active ">
                  <div class=" group relative p-4 duration-300 cursor-pointer  ">
                    <button class="hover-menu color-a-tag flex items-center">
                      <Image
                        width={20}
                        height={9}
                        quality={100}
                        className=""
                        src={profile}
                        alt=""
                      />
                    </button>

                    <ul class="absolute right-[-30px] z-50 hidden py-1 mt-2  group-hover:flex dropdown-box border-2">
                      <div className="flex gap-x-10  ">
                        <ul className="w-[120px] ">
                          <li class="">
                            <Link
                              class="text-[14px]  py-1  block text-center  color-a-tag IBM "
                              href="/account"
                            >
                              Account
                            </Link>
                          </li>
                          <hr className="" />

                          <li class="">
                            <Link
                              class="text-[14px]  py-1  block text-center  color-a-tag IBM"
                              href="wishlists"
                            >
                              Wishlists
                            </Link>
                          </li>
                          <hr className="" />

                          <li class="">
                            <Link
                              class="text-[14px]  py-1  block text-center  color-a-tag IBM"
                              href=""
                            >
                              Logout
                            </Link>
                          </li>
                         
                        </ul>
                      </div>
                    </ul>
                  </div>
                </li> */}
              </ul>

              <div className="Menubar">
                {/* ------- open & close button ---- */}
                <Button setIsOpen={setIsOpen} isOpen={isOpen} />

                {/* ----- drower container body ------- */}
                <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                  <Card setIsOpen={setIsOpen} />
                </Drawer>
              </div>
            </div>
          </navbar>
        </div>
      </div>
    </>
  );
};
