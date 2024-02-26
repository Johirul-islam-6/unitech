import Link from "next/link";
import React from "react";

export default function Card({ setIsOpen, accessToken, isClient }) {
  return (
    <div className="  rounded-md px-4 max-w-sm w-full mx-auto">
      <ul className=" block">
        <li className="link-text py-2 px-[3px] border-b-2 border-[#f6931e] border-opacity-0 hover:border-opacity-100 hover:text-[#f6931e] duration-300 cursor-pointer mx-[10px]">
          <Link
            onClick={() => setIsOpen(false)}
            className="navar-text uppercase Navbar-font"
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="link-text py-2 px-[3px] border-b-2 border-[#f6931e] border-opacity-0 hover:border-opacity-100 hover:text-[#f6931e] duration-300 cursor-pointer mx-[10px]">
          <Link
            onClick={() => setIsOpen(false)}
            className="navar-text uppercase Navbar-font"
            href="/notices"
          >
            Notices
          </Link>
        </li>
        <li className="link-text py-2 px-[3px] border-b-2 border-[#f6931e] border-opacity-0 hover:border-opacity-100 hover:text-[#f6931e] duration-300 cursor-pointer mx-[10px]">
          <Link
            onClick={() => setIsOpen(false)}
            className="navar-text uppercase Navbar-font"
            href="/ourCourses"
          >
            Our Courses
          </Link>
        </li>

        <li className="link-text py-2 px-[3px] border-b-2 border-[#f6931e] border-opacity-0 hover:border-opacity-100 hover:text-[#f6931e] duration-300 cursor-pointer ms-3 me-5">
          <Link
            onClick={() => setIsOpen(false)}
            className="navar-text uppercase Navbar-font"
            href="/about"
          >
            About
          </Link>
        </li>
        <li className="link-text wrapper met-3 ">
          <Link
            onClick={() => setIsOpen(false)}
            Link
            className=" link-text text-center py-[6px] ARCHITECTURAL"
            href="/unitech-architctural"
          >
            <span className="flex items-center justify-center uppercase gap-1 ">
              UNITECH ARCHITECTURAL
            </span>
          </Link>
        </li>
        {isClient && !accessToken && (
          <li className="link-text wrapper mt-3 ">
            <Link
              onClick={() => setIsOpen(false)}
              Link
              className="login-button link-text text-center py-[6px]"
              href="/login"
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
        )}
        {isClient && accessToken && (
          <li className="link-text wrapper  mt-3">
            <Link
              onClick={() => setIsOpen(false)}
              Link
              className="login-button bg-white border-2 rounded-lg link-text text-center py-[6px]"
              href="/profile"
            >
              <span className="flex items-center justify-center uppercase gap-1">
                <div class="">
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
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
