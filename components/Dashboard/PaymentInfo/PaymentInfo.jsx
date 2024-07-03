"use client";
import React, { useEffect, useState } from "react";
import "./PaymentInfo.css";

import { PaymentInfoTable } from "./PaymentInfoTable";
import Swal from "sweetalert2";
import axios from "axios";
import { PageLoding } from "@/components/Loading/PageLoding";

export const PaymentInfo = ({ userInfo }) => {
  const [buttonHidden, setHidden] = useState(false);
  const [searchingValue, setSearchingValue] = useState("");
  const [Loading, setLoading] = useState(true);
  const [AllPaymentInfo, setAllPaymentInfo] = useState();
  const [reloades, setReload] = useState(false);

  // ---------- this date formate functions ----------
  function padZero(num) {
    return num < 10 ? `0${num}` : num;
  }
  const today = new Date();
  // Format the date to DD/MM/YYYY
  const formattedDate = `${padZero(today.getDate())}/${padZero(
    today.getMonth() + 1
  )}/${today.getFullYear()}`;

  // all departments
  const departmental = [
    "Academic Semester",
    "Web Design",
    "Web Development",
    "Graphic Design",
    "Digital Marketing",
    "Basic Computer",
    "Autocad premium",
    "Autocad 3d",
    "UX/UI Design",
    "Ai",
  ];

  // --------- cetagory feild value ------------------
  const FindDepartment = (cetagoryName) => {
    console.log(cetagoryName);
    setSearchingValue(cetagoryName);
  };

  const HandleSubmite = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const SName = formData.get("SName");
    const SRoll = formData.get("SRoll");
    const SCetagory = formData.get("SCetagory");
    const Cbatch = formData.get("Cbatch");
    const SPhone = formData.get("SPhone");
    const SEmail = formData.get("SEmail");
    const SFree = formData.get("SFree");
    const SPaid = formData.get("SPaid");

    // ----get object ---

    const PayInformation = {
      SName,
      SRoll,
      SCetagory,
      Cbatch,
      SPhone,
      SEmail,
      SFree,
      SPaid,
      CDate: formattedDate,
      updatePayment: "00/00/0000",
      PAdmin: userInfo?.email,
    };
    setHidden(true);

    try {
      const response = await axios.post(
        "https://api.unitechbangladesh.com/api/v1/payment/create",
        PayInformation,
        {
          maxContentLength: 1000000000000,
        }
      );
      const result = response.data;

      // if get the data then save
      if (result?.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${result?.message}`,
          text: "Thank you",
          showConfirmButton: false,
          timer: 2500,
        });
        setReload(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);

      Swal.fire({
        title: `${error?.response?.data?.errorMessages[0]?.message}`,
        text: ` Field : ${error?.response?.data?.errorMessages[0]?.path}`,
        icon: "error",
      });
      setHidden(false);
    }

    setHidden(false);
  };

  // --------------- get Filter Data --------------------

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://api.unitechbangladesh.com/api/v1/payment/?searchTerm=${searchingValue}&page=1&limit=100000&sort=createdAt&sortOrder=desc`
        );

        setAllPaymentInfo(result?.data?.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [reloades, searchingValue]);

  return (
    <>
      <PageLoding Loading={Loading} />
      <div className=" p-2">
        {/* --- user navbar-- */}
        <div className=" flex gap-5 justify-between items-center mt-2">
          <div className="w-[100%] lg:w-[75%]  md:w-[60%]  justify-between gap-2 md:gap-10 flex items-center md:px-3">
            <div className="flex gap-1 items-center">
              <h1 className="text-[18px] hidden md:flex font-[600] text-[#393A3A]">
                Course
              </h1>
              {/* ----drop down--- */}
              <input
                className="dark-light"
                type="checkbox"
                id="dark-light"
                name="dark-light"
              />
              {/* ----------- cetagory Name filtering ----------- */}
              <div className="menu-dropdown sec-center  pe-10 ps-2">
                <input
                  className="dropdown "
                  type="checkbox"
                  id="dropdown"
                  name="dropdown"
                />
                <label
                  className="for-dropdown flex items-center"
                  for="dropdown"
                >
                  All
                  <svg
                    className="uil"
                    xmlns="http://www.w3.org/2000/svg"
                    height="12"
                    width="10"
                    viewBox="0 0 512 512"
                  >
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                  </svg>
                </label>
                {/* ----- dropdown box ---- */}
                <div className="section-dropdown pt-2 whitespace-nowrap ">
                  {departmental?.map((singel, index) => (
                    <>
                      <a
                        onClick={() => FindDepartment(singel)}
                        key={index}
                        className="overView-a "
                        href="#"
                      >
                        {singel} <i className="uil uil-arrow-right"></i>
                      </a>
                    </>
                  ))}

                  <input
                    className="dropdown-sub"
                    type="checkbox"
                    id="dropdown-sub"
                    name="dropdown-sub"
                  />
                </div>
              </div>
            </div>
            <div className="md:hidden flex justify-end   items-center gap-2 cursor-pointer  w-[60%]">
              <div className="relative text-gray-600 focus-within:text-gray-400 flex  w-[100%]">
                <span className="absolute inset-y-0 right-0 flex items-center pl-2">
                  <button
                    type="submit"
                    className=" focus:outline-none focus:shadow-outline  py-[7px] px-[6px] "
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  onChange={(e) => setSearchingValue(e?.target?.value)}
                  type="search"
                  name="q"
                  className="block w-full py-2 px-4 bg-[#F6F6F6] rounded-mdocus:outline-4 outline-[#d46a14] border-[1px] GT"
                  placeholder="Student name, phone etc..."
                  autocomplete="off"
                />
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 cursor-pointer ">
              <h1 className="text-[#0984E3] text-[14px] font-[700] hidden md:flex">
                All {searchingValue === "0" ? " " : searchingValue} Student
              </h1>
            </div>
          </div>
          <div className="md:flex hidden justify-center  items-center gap-2 cursor-pointer  w-[23%]">
            <div className="relative text-gray-600 focus-within:text-gray-400 flex  w-[100%]">
              <span className="absolute inset-y-0 right-0 flex items-center pl-2">
                <button
                  type="submit"
                  className=" focus:outline-none focus:shadow-outline bg-amber-600 py-[7px] px-[6px] "
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </span>
              <input
                onChange={(e) => setSearchingValue(e?.target?.value)}
                type="search"
                name="q"
                className="block w-full py-2 px-4 bg-[#F6F6F6] rounded-mdocus:outline-4 outline-[#d46a14] border-[1px]   GT"
                placeholder="Student name, phone etc..."
                autocomplete="off"
              />
            </div>
          </div>
        </div>

        {/* ---- user Payment Card --- */}
        <div className="mt-5">
          <section className="py-1 flex md:flex-row flex-col justify-center md:justify-between gap-2">
            <div className="w-full xl:w-9/12 mb-12 xl:mb-0 ">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded pb-3">
                <div className="block w-full overflow-x-auto overflow-y-auto h-[75vh] pb-5">
                  <table className="items-center bg-transparent w-full border-2 ">
                    {/* -------- card title--------- */}
                    <thead>
                      <tr>
                        <th className="text-[14px] text-[#888888] px-6  align-middle border border-solid border-blueGray-100 py-3  uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                          S. Name
                        </th>
                        <th className="text-[14px] text-[#888888] px-6  align-middle border border-solid border-blueGray-100 py-3  uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                          Course
                        </th>
                        <th className="text-[14px] text-[#888888] px-6  align-middle border border-solid border-blueGray-100 py-3  uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                          Date
                        </th>
                        <th className="text-[14px] text-[#888888] px-6  align-middle border border-solid border-blueGray-100 py-3  uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                          Course Fee
                        </th>
                        <th className="text-[14px] text-[#888888] px-6  align-middle border border-solid border-blueGray-100 py-3  uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                          Paid
                        </th>
                        <th className="text-[14px] text-[#888888] px-6  align-middle border border-solid border-blueGray-100 py-3  uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                          Due
                        </th>
                      </tr>
                    </thead>

                    <PaymentInfoTable AllPaymentInfo={AllPaymentInfo} />
                  </table>
                </div>
              </div>
              {/* ---total price -- */}
              <div className="flex justify-end">
                <div className="flex flex-row gap-5 justify-end ">
                  <span className="box-price border-l-4 border-[#F89521] p-2">
                    <p>Total Amount</p>
                    <h1 className="text-[20px] font-[700]">Tk. 11,0950</h1>
                  </span>
                  <span className="box-price border-l-4 border-[##35BD95] p-2">
                    <p>Paid Amount</p>
                    <h1 className="text-[20px] font-[700]">Tk. 9,0950</h1>
                  </span>
                  <span className="box-price border-l-4 border-[##FF5C5C] p-2">
                    <p>Due Amount </p>
                    <h1 className="text-[20px] font-[700]">Tk. 9,0950</h1>
                  </span>
                </div>
              </div>
            </div>
            {/* ---- searching button ---- */}
            <form
              onSubmit={HandleSubmite}
              className=" px-3 py-1 bg-[#FFF] box-shdow-5 h-[500px] rounded-lg "
            >
              <div className="flex justify-between items-center">
                <h1 className="text-[18px] font-[700] py-3">Payment</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14.1755 4.22225C14.1766 2.99445 11.6731 2 8.58832 2C5.50357 2 3.00224 2.99557 3 4.22225M3 4.22225C3 5.45004 5.50133 6.44449 8.58832 6.44449C11.6753 6.44449 14.1766 5.45004 14.1766 4.22225L14.1766 12.8445M3 4.22225V17.5556C3.00112 18.7834 5.50245 19.7779 8.58832 19.7779C10.0849 19.7779 11.4361 19.5412 12.4387 19.1601M3.00112 8.66672C3.00112 9.89451 5.50245 10.889 8.58944 10.889C11.6764 10.889 14.1778 9.89451 14.1778 8.66672M12.5057 14.6946C11.4976 15.0891 10.115 15.3335 8.58832 15.3335C5.50245 15.3335 3.00112 14.3391 3.00112 13.1113M20.5272 13.4646C22.4909 15.4169 22.4909 18.5836 20.5272 20.5358C18.5635 22.4881 15.3781 22.4881 13.4144 20.5358C11.4507 18.5836 11.4507 15.4169 13.4144 13.4646C15.3781 11.5124 18.5635 11.5124 20.5272 13.4646Z"
                    stroke="#393A3A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              {/* ------------ Submit Data Fild --------- */}
              <div className="top-0 overflow-y-auto h-[400px] ">
                <div>
                  <label
                    for="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <input
                      type="text"
                      name="SName"
                      id="price"
                      className="block w-full rounded-md border-0 py-2 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Rasel Khan"
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <label
                    for="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Student Roll
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <input
                      type="text"
                      name="SRoll"
                      id="price"
                      className="block w-full rounded-md border-0 py-2 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="574206"
                    />
                  </div>
                </div>
                {/* ---courses--- */}

                <div className="mt-2">
                  <label
                    className="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                    for="passwordConfirmation"
                  >
                    Courses
                  </label>
                  <select
                    name="SCetagory"
                    className="input block border border-gray-300 focus:border-pitch-black  py-2 px-3 w-full focus:outline-none mt-1"
                  >
                    <option className="bg-[#E8F0FE]">select</option>
                    {departmental?.map((singel, index) => (
                      <>
                        <option>{singel}</option>
                      </>
                    ))}
                  </select>
                </div>

                {/* ---courses--- */}
                <div className="mt-3">
                  <label
                    for="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Course Batch S.L
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <input
                      type="text"
                      name="Cbatch"
                      id="price"
                      className="block w-full rounded-md border-0 py-2 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="batch-10"
                    />
                  </div>
                </div>
                {/* ---courses--- */}
                <div className="mt-3">
                  <label
                    for="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <input
                      type="text"
                      name="SPhone"
                      id="price"
                      className="block w-full rounded-md border-0 py-2 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="01824842336"
                    />
                  </div>
                </div>

                {/* ---courses--- */}
                <div className="mt-3">
                  <label
                    for="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <input
                      type="text"
                      name="SEmail"
                      id="price"
                      className="block w-full rounded-md border-0 py-2 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="ras@gamil.com"
                    />
                  </div>
                </div>

                {/* ---courses--- */}
                <div className="mt-3">
                  <label
                    for="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Course Free
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <input
                      type="text"
                      name="SFree"
                      id="price"
                      className="block w-full rounded-md border-0 py-2 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="15000"
                    />
                  </div>
                </div>

                {/* ---courses--- */}
                <div className="mt-3 ">
                  <label
                    for="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Paid
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <input
                      type="text"
                      name="SPaid"
                      id="price"
                      className="block w-full rounded-md border-0 py-2 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="5000"
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className={`py-3 px-2 bg-[#F89521] hover:bg-[#ce7b1c] hover:text-white w-full flex text-center rounded-md justify-center font-[700] text-[16px] mt-4  text-[#212121] ${
                  buttonHidden ? "disabled-button" : ""
                }`}
              >
                {buttonHidden && (
                  <>
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="mr-2 animate-spin"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                    </svg>
                  </>
                )}
                Submit
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};
