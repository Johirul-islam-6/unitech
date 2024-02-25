import React from "react";
import architectural from "@/app/Assets/untility/architectural.jpg";
import Image from "next/image";
export const UnitechArchitectural = () => {
  return (
    <>
      <div>
        <div className="flex flex-col-reverse md:grid grid-cols-1  md:grid-cols-2 gap-5 p-5  md:px-10 mt-20 py-10 bg-[#F9F9FA] justify-center rounded-lg items-center border-2">
          <div className="context">
            <h1 className="text-[30px] md:text-[35px] font-bold SILIGURI">
              UNITECH ARCHITECTURAL
            </h1>
            <p className="text-[18px] py-3 SILIGURI ">
              <span className="font-[600]">
                বাড়ির প্ল্যান, রাজউক প্ল্যান, সয়েল টেস্ট ও ইন্টেরিয়র ডিজাইন করা
                হয়।
              </span>
              <span className="text-[16px]  font-[200]">
                <br className="" />
                আমাদের সেবাসমুহঃ
                <br className="" />
                ‣ আর্কিটেকচারাল ড্রয়িং
                <br className="" />
                ‣ রাজউক এগ্লোবাল ড্রয়িং
                <br className="" />
                ‣ ষ্ট্যাকচ্যারাল ড্রয়িং
                <br className="" />‣ ইলেকট্রিক্যাল ড্রয়িং
              </span>
            </p>
            <div className="flex justify-center md:justify-start my-5 SILIGURI">
              <button className="py-4 px-12 bg-[#FFCD33] text-black rounded-md font-bold text-[16px]">
                বিস্তারিত দেখি
              </button>
            </div>
          </div>
          <div className="flex justify-end">
            <Image
              width={550}
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
