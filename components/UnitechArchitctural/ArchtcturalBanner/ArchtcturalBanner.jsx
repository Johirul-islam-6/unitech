"use client";
import React from "react";
import "./Archtctural.css";
import ArchtcturalSlider from "./ArchtcturalSlider";
import Image from "next/image";
import Banner from "@/app/Assets/Archtctural landing page/Banner.png";
export const ArchtcturalBanner = () => {
  return (
    <>
      <div className="">
        <div className="flex w-[100%] justify-center">
          <Image width={1280} src={Banner} alt="" />
        </div>

        <div className="grid  grid-cols-1 justify-center items-center gap-twnty mt-20">
          <div>
            <h1 className="md:text-[35px] text-[25px]  font-[700]  ">
              <span className="text-[#F8931F]">About Us</span>
            </h1>
            <p className="text-[#707275] text-[18px] text-justify font-[400] pt-3">
              Unitech Architectural is an engineering firm that designs
              beautiful and quality complete buildings at low cost. Our
              engineering team always try their best to provide a good design.
              Our organization always strives to design the best for the sake of
              the country and nation.
            </p>
          </div>
          <div className="">
            <h1 className="md:text-[35px] text-[25px] text-[#000000] font-[700] ">
              Our <span className="text-[#030303d6]">Milestone</span>
            </h1>
            <p className="text-[#707275] text-[18px] text-justify font-[400] pt-3">
              Unitech Architectural is a trusted place for thousands of people
              in Bangladesh. We have designed over a hundred buildings in the
              last five years. We give our knowledge.
            </p>
          </div>
        </div>
        <ArchtcturalSlider />
      </div>
    </>
  );
};
