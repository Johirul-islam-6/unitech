"use client";
import { LoadingPage } from "@/components/Loading/LoadingPage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "@/app/Assets/Navbar/LOGO.png";
import Image from "next/image";
import Swal from "sweetalert2";

const AttachmentStudent = () => {
  // Date genarate---
  const today = new Date();
  const padZero = (num) => {
    return num < 10 ? "0" + num : num;
  };

  // Format the date to DD/MM/YYYY
  const formattedDate = `${padZero(today.getDate())}/${padZero(
    today.getMonth() + 1
  )}/${today.getFullYear()}`;

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

  // ----------------------enroll scroling navbar stop --------------

  const [Loading, setLoading] = useState(true);
  const [EnrollCourses, setEnrollCourses] = useState();
  const [searchingValue, setsearchingValue] = useState(formattedDate);

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    // ------- all this user enroll courses courses--------
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://api.unitechbangladesh.com/api/v1/attachments/?searchTerm=&page=${searchingValue}1&limit=1000&sort=createdAt&sortOrder=desc`
        );

        setEnrollCourses(result?.data?.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [searchingValue, refresh]);

  const inputSearchbarValue = (e) => {
    setLoading(true);
    setsearchingValue(e);
  };

  const options = [
    { value: formattedDate, name: "আজকে" },
    { value: "", name: "সকল কোস" },
  ];

  // ----------- delete courses book -------------

  async function DeleteAttachmnet(id, name) {
    try {
      const response = await axios.delete(
        `https://api.unitechbangladesh.com/api/v1/attachments/${id}`
      );

      if (response?.data?.success) {
        Swal.fire({
          title: `${name}`,
          text: `Delete Complited`,
          icon: "success",
        });
        router.push("/dashboard/attachmentenroll");
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }

    setRefresh(true);
  }

  return (
    <div className="">
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
      {/* ---------------- main body----------- */}
      <div className="h-[75vh]  overflow-y-auto px-3">
        {Loading && <LoadingPage />}

        <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-3">
          {EnrollCourses?.map((item, index) => (
            <>
              <div
                key={index}
                class="py-4 md:py-0 border-t-2 items-center shadow-xl justify-center rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-enroll-card hover:rounded-2xl"
              >
                <Image
                  width={0}
                  height={0}
                  class="mx-auto block md:w-[100px] h-[100px] shadow-lg"
                  alt="art cover"
                  loading="lazy"
                  src={logo}
                />
                <div class="sm:w-8/12 pl-0 p-5">
                  <div class="space-y-2">
                    <div class="space-y-2">
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
                        <span class="text-[16px] font-semibold text-cyan-900 text-justify">
                          {item?.name}🔥
                        </span>
                      </span>
                    </div>
                    <div class="flex flex-col">
                      <p class="text-[16px] pt-1">
                        institute : {item?.inistitute}
                      </p>
                      <p class="text-[16px] pt-1">
                        department : {item?.department}
                      </p>
                      <p class="text-[14px] pt-1">{item?.phone}</p>
                      <p class="text-[12px] pt-1">Device IP : {item?.ip}</p>
                      <p class="text-[14px] pt-1 font-bold text-gray-800">
                        Date : {item?.BookingDate}
                      </p>

                      <div className="flex justify-end ">
                        <button
                          onClick={() =>
                            DeleteAttachmnet(item?._id, item?.name)
                          }
                          className="px-3 py-[2px] hover:bg-red-600 bg-red-700 text-white font-bold border-none"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttachmentStudent;
