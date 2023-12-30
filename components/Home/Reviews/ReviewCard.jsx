import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./ReviewCard.css";
import rasel from "@/app/Assets/Review/rasel.png";
import { FaQuoteRight } from "react-icons/fa";

export const ReviewCard = () => {
  return (
    <>
      <div class="card">
        <div className="reviewCard border-2 flex flex-col justify-center items-center p-5 ">
          <span>
            <FaQuoteRight className="text-[30px] text-[#00000080]" />
          </span>
          <h2 class="text-[16px] text-start SILIGURI mt-3">
            I highly recommend Frontend Mentor. Skip the search for project
            ideas and dive into ready-made challenges that help you level up as
            a developer.
          </h2>

          <div className="flex flex-col  justify-center  mt-2">
            <Image
              width={60}
              height={400}
              className="border-2 flex justify-center mx-auto rounded-full"
              src={rasel}
              alt=""
            />
            <h1 className="text-center text-[11px] font-[600] text-[#3e54a3]">
              Md.Rasel Khan
            </h1>
            <p className="text-[12px] text-[#00000090]">Software Engineer</p>
          </div>
        </div>
      </div>
    </>
  );
};
