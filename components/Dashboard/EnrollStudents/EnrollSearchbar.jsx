"use client";
import React, { useEffect, useState } from "react";

export const EnrollSearchbar = ({ inputSearchbarValue }) => {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 200) {
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

  // Date genarate---
  const today = new Date();
  const padZero = (num) => {
    return num < 10 ? "0" + num : num;
  };

  // Format the date to DD/MM/YYYY
  const formattedDate = `${padZero(today.getDate())}/${padZero(
    today.getMonth() + 1
  )}/${today.getFullYear()}`;

  const options = [
    { value: formattedDate, name: "আজকে" },
    { value: "Academic", name: "একাডেমিক" },
    { value: "Skill", name: "স্কিল কোস" },
    { value: "", name: "সকল কোস" },
  ];

  return (
    <>
      <div
        className={`${
          isFixed ? "search-fixed  bg-white w-full py-4 px-2" : ""
        } flex mx-auto  justify-between items-center   mb-2 border-t-2 border-b-2  py-3`}
      >
        <div className="flex gap-2 md:ms-2">
          <select
            onChange={(e) => inputSearchbarValue(e?.target?.value)}
            id="pricingType"
            name="pricingType"
            class="py-[8px] md:py-[5px] md:px-[5px] border-2 border-[#563A9F] focus:outline-none focus:border-[#563A9F] text-[#563A9F] md:text-[16px] text-[10px] rounded "
          >
            {options?.map((item, index) => (
              <>
                <option key={index} value={item?.value}>
                  {item?.name}
                </option>
              </>
            ))}
          </select>
        </div>

        <div class="flex space-x-4 md:me-5">
          <div class="relative flex ">
            <input
              onChange={(e) => inputSearchbarValue(e?.target?.value)}
              type="text"
              name="q"
              class="w-full border outline-[#563A9F] placeholder-[#573a9f92] border-[#0000003a] h-12 shadow p-4 rounded-full"
              placeholder="searching anything..."
            />
            <button className="absolute right-4 top-[15px]">
              <svg
                width="18"
                hanging="18"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#949494"
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
