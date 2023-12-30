import React from "react";
import architectural from "@/app/Assets/untility/architectural.jpg";
import Image from "next/image";
export const UnitechArchitectural = () => {
  return (
    <>
      <div>
        <div className="flex flex-col-reverse md:grid grid-cols-1  md:grid-cols-2 gap-5 p-5  md:px-10 mt-20 bg-[#F9F9FA] justify-center rounded-lg items-center border-2">
          <div className="context">
            <h1 className="text-[30px] md:text-[35px] font-bold SILIGURI">
              Unitech Architecture
            </h1>
            <p className="text-[18px] py-3 SILIGURI">
              জয়েন করুন আমাদের কর্পোরেট স্কিলস ট্রেইনিং প্রোগ্রামে, ট্রেইনিং নিন
              দেশ সেরা ইন্ডাস্ট্রি এক্সপার্টদের থেকে আর সাজিয়ে নিন আপনার টিমকে
              নতুনভাবে।{" "}
            </p>
            <div className="flex justify-center md:justify-start my-5 SILIGURI">
              <button className="py-4 px-12 bg-[#FFCD33] text-black font-bold text-[16px]">
                বিস্তারিত দেখি
              </button>
            </div>
          </div>
          <div className="flex justify-end">
            <Image
              width={500}
              height={500}
              src={architectural}
              className="rounded-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
