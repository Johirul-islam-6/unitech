import React from "react";
import "./Banner2.css";
import Image from "next/image";
import banner from "@/app/Assets/Banner/website banner.jpg";
import { FaAngleDoubleRight } from "react-icons/fa";
import Link from "next/link";

export const Banner2 = () => {
  return (
    <>
      <div className="homeBanner flex flex-col-reverse md:grid gap-y-6  md:grid-cols-2 justify-center items-center p-8">
        <div className="">
          <h1 className="md:text-[55px] text-[30px] text-center md:text-start font-[600] SILIGURI ">
            দক্ষ হবো <span className="text-red-600">ইউনিটেক</span> এর সাথে..
          </h1>
          <a
            className="flex items-center justify-center mx-auto w-[90%]  mt-3 md:mt-0"
            href=""
          >
            <p>
              <FaAngleDoubleRight className="md:text-[40px] hidden md:block text-[20px] font-[600]  text-[#171354] me-2 mb-[10px]" />
            </p>

            <img
              className="hidden md:block"
              src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=50&duration=2500&pause=1000&color=FF8722&vCenter=true&random=false&width=780&height=120&lines=%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AB%E0%A6%BF%E0%A6%95+%E0%A6%A1%E0%A6%BF%E0%A6%9C%E0%A6%BE%E0%A6%87%E0%A6%A8;%E0%A6%93%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%AC+%E0%A6%A1%E0%A6%BF%E0%A6%9C%E0%A6%BE%E0%A6%87%E0%A6%A8;%E0%A6%85%E0%A6%9F%E0%A7%8B+%E0%A6%95%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A1;%E0%A6%A1%E0%A6%BF%E0%A6%9C%E0%A6%BF%E0%A6%9F%E0%A6%BE%E0%A6%B2+%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%95%E0%A7%87%E0%A6%9F%E0%A6%BF%E0%A6%82"
              alt="Typing SVG"
            />

            <img
              className="md:hidden block"
              src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=50&duration=2500&pause=1000&color=FF8722&center=true&vCenter=true&random=false&width=580&height=120&lines=%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AB%E0%A6%BF%E0%A6%95+%E0%A6%A1%E0%A6%BF%E0%A6%9C%E0%A6%BE%E0%A6%87%E0%A6%A8;%E0%A6%93%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%AC+%E0%A6%A1%E0%A6%BF%E0%A6%9C%E0%A6%BE%E0%A6%87%E0%A6%A8;%E0%A6%85%E0%A6%9F%E0%A7%8B+%E0%A6%95%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A1;%E0%A6%A1%E0%A6%BF%E0%A6%9C%E0%A6%BF%E0%A6%9F%E0%A6%BE%E0%A6%B2+%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%95%E0%A7%87%E0%A6%9F%E0%A6%BF%E0%A6%82"
              alt="Typing SVG"
            />
          </a>
          {/* ------------- button------------ */}
          <div className="flex justify-center items-center mt-5">
            <Link href={"/ourCourses"}>
              <button
                class="
        group
        p-5
        cursor-pointer 
        relative  
        text-xl 
        border-0 
        flex 
        items-center 
        justify-center
        h-[60px]
        rounded-lg
       bg-amber-500
       hover:bg-transparent
         text-[#ffffffb3]
         hover:text-[#000000b3]
         font-[600]
         w-[170px]  
         overflow-hidden   
         transition-all
         duration-100"
              >
                <span
                  class="
        group-hover:w-full
        absolute 
        left-0 
        h-full 
        w-5 
        border-y
        border-l
         border-red-500
           transition-all
         duration-500"
                ></span>

                <p
                  class="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
         duration-200"
                >
                  Our Courses
                </p>

                <span class="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">
                  Click Now
                </span>

                <span class="group-hover:w-full absolute right-0 h-full w-5  border-y border-r  border-red-500 transition-all duration-500"></span>
              </button>
            </Link>
          </div>
        </div>
        <div className="image flex justify-end">
          <Image
            width={650}
            className="rounded-[25px]"
            height={700}
            src={banner}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
