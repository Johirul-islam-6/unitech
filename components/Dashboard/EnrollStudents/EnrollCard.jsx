import React from "react";
import "./Enroll.css";
import Link from "next/link";
export const EnrollCard = ({ EnrollCourses }) => {
  return (
    <>
      {EnrollCourses?.map((item, index) => (
        <>
          <Link href={`/dashboard/enrollStudent/${item?._id}`}>
            <div
              key={index}
              class="py-4 md:py-0 items-center justify-center rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-enroll-card hover:rounded-2xl"
            >
              <img
                class="mx-auto  block md:w-[200px] h-[180px] rounded-lg md:ps-4"
                alt="art cover"
                loading="lazy"
                src={item?.courseImage}
              />
              <div class="sm:w-8/12 pl-0 p-5">
                <div class="space-y-2">
                  <div class="space-y-2">
                    <h4 class="text-[16px] font-semibold text-cyan-900 text-justify">
                      {item?.CName}
                      <span className="text-[12px] ps-2 text-amber-700 font-[600]">
                        ( {item?.CBatch}){" "}
                      </span>
                    </h4>
                  </div>
                  <div class="flex flex-col">
                    <span className="flex gap-1 items-center uppercase">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          width="16"
                          viewBox="0 0 448 512"
                        >
                          <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                        </svg>
                      </div>
                      <span class="text-sm">{item?.SName}🔥</span>
                    </span>

                    <p class="text-[14px] pt-1">Email :{item?.SEmail}</p>
                    <p class="text-[14px] pt-1">{item?.SPhone}</p>
                    <p class="text-[12px] pt-1">Price : {item?.CPrice} টাকা</p>
                  </div>
                  <div class="flex items-center space-x-4 justify-between">
                    <div class="text-grey-500 flex flex-row space-x-1  my-4">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <p class="text-xs">{item?.CreateDate}</p>
                    </div>
                    <div class="flex flex-row space-x-1">
                      <div class="bg-green-500 font-bold shadow-lg shadow- shadow-green-600 text-white cursor-pointer px-3 text-center justify-center items-center py-2 rounded flex space-x-2 flex-row">
                        <span>See Details</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </>
      ))}
    </>
  );
};
