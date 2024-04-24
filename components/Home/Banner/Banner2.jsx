import React from "react";
import "./Banner.css";
import Image from "next/image";
import banner from "@/app/Assets/Banner/website banner.jpg";
import {
  FaAngleDoubleRight,
  FaArrowCircleRight,
  FaArrowsAltV,
  FaLongArrowAltRight,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import Link from "next/link";
// https://keen-slider.io/examples#examples
export const Banner = () => {
  return (
    <>
      <div className="banner flex flex-col-reverse md:grid gap-y-6  md:grid-cols-2 justify-center items-center p-8">
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
          <div className="link-text wrapper mt-5 flex justify-center md:justify-start">
            <Link
              className="apply-button link-text text-center py-[16px]"
              href=""
            >
              <span className="flex items-center justify-center uppercase">
                Apply Now <FaAngleDoubleRight className="ps-[3px]" />
              </span>
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
