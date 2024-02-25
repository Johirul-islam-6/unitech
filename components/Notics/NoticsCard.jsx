import Image from "next/image";
import Link from "next/link";
import React from "react";
import notic from "@/app/Assets/untility/notic.jpg";
export const NoticsCard = () => {
  return (
    <>
      <div className="flex justify-start items-center  border-2 mt-1 px-5">
        <div className="p-2 ">
          <Link
            target="_blank"
            href="https://docs.google.com/viewerng/viewer?url=https://www.duet.ac.bd/storage/notice/2024/Jan/2024-01-24_aykr-ritarner-prmanp_1706087532_191.pdf"
          >
            <div className="flex gap-3 items-center">
              <div className="block">
                <p className="text-[14px] font-bold text-amber-700 bg-date">
                  21 JAN
                </p>
                <p className="text-[14px] font-bold bg-2024 text-center">
                  2024
                </p>
              </div>
              <div>
                <h1 className="md:block hidden text-[16px] text-start cursor-pointer text-blue-800s hover:underline ">
                  <span className="text-yellow"></span> টেক্সটাইল ইঞ্জিনিয়ারিং
                  বিভাগের পোস্টগ্রাজুয়েট প্রোগ্রামের কোর্স অফার এবং
                  ক্লাশরুটিন...
                </h1>
                <div className="flex gap-2  items-center">
                  <svg
                    width="15"
                    height="15"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#ddae03"
                      d="M0 96C0 60.7 28.7 32 64 32H196.1c19.1 0 37.4 7.6 50.9 21.1L289.9 96H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H286.6c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7H64z"
                    />
                  </svg>
                  <p className="text-[14px] text-amber-700">
                    {" "}
                    Academic Notices
                  </p>
                </div>

                <h1 className="md:hidden block text-[16px] text-start cursor-pointer text-blue-800s hover:underline ">
                  <span className="text-yellow">[ 02-01-2024 ]</span> Police
                  Movement Pass Apply Link more...
                </h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <hr className="" />
    </>
  );
};
