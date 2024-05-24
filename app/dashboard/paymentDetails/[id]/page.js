"use client";
import { PageLoding } from "@/components/Loading/PageLoding";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const PaymentDetails = () => {
  const { id } = useParams();
  const [Loading, setLoading] = useState(true);
  const [singleCourses, setSingleCourses] = useState();
  const [NewPaid, setNewPaid] = useState("000");
  const [getDataLoad, setDataLoad] = useState(false);
  // ---------- this date formate functions ----------
  function padZero(num) {
    return num < 10 ? `0${num}` : num;
  }
  const today = new Date();
  // Format the date to DD/MM/YYYY
  const formattedDate = `${padZero(today.getDate())}/${padZero(
    today.getMonth() + 1
  )}/${today.getFullYear()}`;

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://unitech-server.vercel.app/api/v1/payment/${id}`
        );

        setSingleCourses(result?.data?.data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [id, getDataLoad]);

  // ========== deposit upate ===========
  const [openModal, setModal] = useState(false);
  const [updatePaymentInfo, setupdatePaymentInfo] = useState(false);
  const DepositeUdate = (even) => {
    even.preventDefault();
    setModal(true);
  };

  const SubmitPaymentData = async () => {
    const depositUpdate = {
      newDeposite: Number(singleCourses?.SPaid) + Number(NewPaid),
      updatePayment: formattedDate,
    };

    try {
      const response = await axios.patch(
        `https://unitech-server.vercel.app/api/v1/payment/${id}`,
        depositUpdate,
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
        setModal(false);
        setDataLoad(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);

      Swal.fire({
        title: `${error?.response?.data?.errorMessages[0]?.message}`,
        text: ` Field : ${error?.response?.data?.errorMessages[0]?.path}`,
        icon: "error",
      });
      // setHidden(false);
    }
  };

  return (
    <>
      <PageLoding Loading={Loading} />
      {openModal && (
        <>
          <div className="h-[100vh] absolute w-[100%] bg-[#0000007a]">
            <div className="w-[100%] flex justify-center items-center">
              <div className="md:w-[40%] py-10 flex flex-col justify-center items-center mx-auto  mt-5 bg-white md:h-[70vh]">
                <p className="text-center mb-2 px-3 py-1 text-[14px] bg-amber-600 text-white">
                  {formattedDate}
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 w-[100%] md:px-10 px-3">
                  {/* <!-- Card --> */}
                  <div class="flex w-[100%] items-center p-4 rounded-lg shadow-xs bg-gray-800">
                    <div class="p-3 mr-4 text-orange-500  rounded-full dark:text-orange-100 bg-orange-500">
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                      </svg>
                    </div>
                    <div>
                      <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                        Course Free
                      </p>
                      <p class="text-[18px] font-semibold text-gray-700 dark:text-gray-200">
                        {singleCourses?.SFree}
                      </p>
                    </div>
                  </div>
                  {/* <!-- Card --> */}
                  <div class="flex   items-center p-4 rounded-lg shadow-xs bg-gray-800">
                    <div class="p-3 mr-4 text-orange-500  rounded-full dark:text-orange-100 bg-orange-500">
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                      </svg>
                    </div>
                    <div>
                      <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                        Old Deposite
                      </p>
                      <p class="text-[18px] font-semibold text-gray-700 dark:text-gray-200">
                        {singleCourses?.SPaid}
                      </p>
                    </div>
                  </div>
                  {/* <!-- Card --> */}
                  <div class="flex  items-center p-4 rounded-lg shadow-xs bg-gray-800">
                    <div class="p-3 mr-4 text-orange-500  rounded-full dark:text-orange-100 bg-orange-500">
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                      </svg>
                    </div>
                    <div>
                      <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                        New Deposite
                      </p>
                      <p class="text-[18px] font-semibold text-gray-700 dark:text-gray-200">
                        {NewPaid}
                      </p>
                    </div>
                  </div>
                  {/* <!-- Card --> */}
                  <div class="flex  items-center p-4 rounded-lg shadow-xs bg-gray-800">
                    <div class="p-3 mr-4 text-orange-500  rounded-full dark:text-orange-100 bg-orange-500">
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                      </svg>
                    </div>
                    <div>
                      <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                        Total Paid
                      </p>
                      <p class="text-[18px] font-semibold text-gray-700 dark:text-gray-200">
                        <span className="text-blue-500">
                          {Number(singleCourses?.SPaid) + Number(NewPaid)}{" "}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Card --> */}
                <div class="flex mt-3 items-center p-4 rounded-lg shadow-xs bg-gray-800">
                  <div>
                    <p class="mb-2 text-[16px] text-center font-medium text-gray-600 dark:text-gray-400">
                      {" "}
                      সর্বমোট বাকি{" "}
                    </p>
                    <p class="text-[18px] font-semibold text-gray-700 dark:text-gray-200">
                      <span className=" text-center">
                        {singleCourses?.SFree} -{" "}
                        <span className="text-green-500">
                          {" "}
                          {Number(singleCourses?.SPaid) +
                            Number(NewPaid)} ={" "}
                          <span className="text-red-600">
                            {Number(singleCourses?.SFree) -
                              Number(singleCourses?.SPaid) -
                              Number(NewPaid)}
                          </span>{" "}
                          {/* <span className="text-[9px] text-red-600">বাকি আছে</span> */}
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 justify-center items-center mt-5">
                  <button
                    onClick={() => setModal(false)}
                    class="flex  justify-center items-center bg-gray-400 hover:bg-red-600 focus:outline-none focus:shadow-outline-blue text-white py-3 px-6 rounded-md transition duration-300 gap-2"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={SubmitPaymentData}
                    class="flex  justify-center items-center bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue text-white py-3 px-6 rounded-md transition duration-300 gap-2"
                  >
                    {" "}
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="d mx-5">
        <h1 className="text-[18px] font-[600] pt-3">
          {" "}
          Student Name :{" "}
          <span className="text-amber-600 font-[900]">
            {" "}
            {singleCourses?.SName}
          </span>
        </h1>

        {/* <!-- This is an example component --> */}
        <div class="py-5">
          <main class="h-full overflow-y-auto">
            <div class="container  mx-auto grid">
              {/* <!-- Cards --> */}
              <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                {/* <!-- Card --> */}
                <div class="flex items-center p-4  rounded-lg shadow-xs bg-gray-800">
                  <div class="p-3 mr-4 text-orange-500  rounded-full dark:text-orange-100 bg-orange-500">
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                      Student Roll
                    </p>
                    <p class="text-[18px] font-semibold text-gray-700 dark:text-gray-200">
                      {singleCourses?.SRoll}
                    </p>
                  </div>
                </div>
                {/* <!-- Card --> */}
                <div class="flex items-center p-4  rounded-lg shadow-xs bg-gray-800">
                  <div class="p-3 mr-4 text-green-500  rounded-full dark:text-green-100 bg-green-500">
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                      Course Name
                    </p>
                    <p class="text-[16px] font-semibold text-gray-700 dark:text-gray-200">
                      {singleCourses?.SCetagory}
                    </p>
                  </div>
                </div>
                {/* <!-- Card --> */}
                <div class="flex items-center p-4 rounded-lg shadow-xs bg-gray-800">
                  <div class="p-3 mr-4 text-teal-500 rounded-full dark:text-teal-100 bg-teal-500">
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                      My Tutorials
                    </p>
                    <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                      376
                    </p>
                  </div>
                </div>
                {/* <!-- Card --> */}
                <div class="flex items-center p-4  rounded-lg shadow-xs bg-gray-800">
                  <div class="p-3 mr-4 text-blue-500  rounded-full dark:text-blue-100 bg-blue-500">
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                      Student Phone
                    </p>
                    <p class="text-[16px] font-semibold text-gray-700 dark:text-gray-200">
                      {singleCourses?.SPhone}
                    </p>
                  </div>
                </div>
                {/* <!-- Card --> */}
                <div class="flex items-center p-4  rounded-lg shadow-xs bg-gray-800">
                  <div class="p-3 mr-4 text-blue-500  rounded-full dark:text-blue-100 bg-blue-500">
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                      Student Email
                    </p>
                    <p class="text-[16px] font-semibold text-gray-700 dark:text-gray-200">
                      {singleCourses?.SEmail}
                    </p>
                  </div>
                </div>
                {/* <!-- Card --> */}
                <div class="flex items-center p-4  rounded-lg shadow-xs bg-gray-800">
                  <div class="p-3 mr-4 text-blue-500  rounded-full dark:text-blue-100 bg-blue-500">
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                      Course Free
                    </p>
                    <p class="text-[16px] font-semibold text-gray-700 dark:text-gray-200">
                      {singleCourses?.SFree}
                    </p>
                  </div>
                </div>
                {/* <!-- Card --> */}
                <div class="flex items-center p-4  rounded-lg shadow-xs bg-gray-800">
                  <div class="p-3 mr-4 text-blue-500  rounded-full dark:text-blue-100 bg-blue-500">
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="mb-2 text-sm font-medium  text-green-600">
                      Course Paid
                    </p>
                    <p class="text-[16px] font-semibold text-green-600">
                      {singleCourses?.SPaid}
                    </p>
                  </div>
                </div>
                {/* <!-- Card --> */}
                <div class="flex items-center p-4  rounded-lg shadow-xs bg-gray-800">
                  <div class="p-3 mr-4 text-blue-500  rounded-full dark:text-blue-100 bg-blue-500">
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="mb-2 text-sm font-medium text-red-600 ">
                      Course Due
                    </p>
                    <p class="text-[16px] font-semibold  text-red-600">
                      {singleCourses?.SFree - singleCourses?.SPaid}
                    </p>
                  </div>
                </div>
                {/* <!-- Card --> */}
                <div class="flex items-center p-4  rounded-lg shadow-xs bg-gray-800">
                  <div class="p-3 mr-4 text-blue-500  rounded-full dark:text-blue-100 bg-blue-500">
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                      Deposit Date
                    </p>
                    <p class="text-[16px] font-semibold text-gray-700 dark:text-gray-200">
                      {singleCourses?.CDate}
                    </p>
                  </div>
                </div>
                {/* <!-- Card --> */}
                <div class="flex items-center p-4  rounded-lg shadow-xs bg-gray-800">
                  <div class="p-3 mr-4 text-blue-500  rounded-full dark:text-blue-100 bg-blue-500">
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                      Last Payment
                    </p>
                    <p class="text-[16px] font-semibold text-gray-700 dark:text-gray-200">
                      {singleCourses?.updatePayment}
                    </p>
                  </div>
                </div>
                {/* <!-- Card --> */}
                <div class="flex items-center p-4  rounded-lg shadow-xs bg-gray-800">
                  <div class="p-3 mr-4 text-blue-500  rounded-full dark:text-blue-100 bg-blue-500">
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                      Deposit Admin
                    </p>
                    <p class="text-[10px] font-semibold text-gray-700 dark:text-gray-200">
                      {singleCourses?.PAdmin}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div class="bg-gray-100 h-[auto] flex  justify-center py-5">
          <div class="max-w-md w-full bg-white px-8 py-5 rounded-lg shadow-md">
            <form onSubmit={DepositeUdate}>
              {/* <!-- Post Content Section --> */}
              <div class="mb-6">
                <label
                  for="postContent"
                  class="block text-gray-700 text-[18px] text-center font-bold "
                >
                  New Paid{" "}
                </label>
                <div className="w-[60px] h-[4px] bg-[#3B82F6] mx-auto mb-3"></div>
                <h1 className="mb-2  mt-1 flex items-center text-[14px] font-[900]">
                  মোট টাকা :{" "}
                  <span className="ps-3 text-center">
                    {singleCourses?.SFree} -{" "}
                    <span className="text-green-500">
                      {" "}
                      {Number(singleCourses?.SPaid) + Number(NewPaid)} ={" "}
                      <span className="text-red-600">
                        {Number(singleCourses?.SFree) -
                          Number(singleCourses?.SPaid) -
                          Number(NewPaid)}
                      </span>{" "}
                      {/* <span className="text-[9px] text-red-600">বাকি আছে</span> */}
                    </span>
                  </span>
                </h1>
                <h1 className="mb-2  mt-1 flex items-center text-[14px] font-[900]">
                  জমা টাকা :{" "}
                  <span className="ps-3 text-center text-green-500">
                    {Number(singleCourses?.SPaid)} +{" "}
                    <span className="text-blue-500"> {+Number(NewPaid)}</span> ={" "}
                    {Number(singleCourses?.SPaid) + Number(NewPaid)}
                  </span>
                </h1>
                <input
                  onChange={(event) => setNewPaid(event.target.value)}
                  id="postContent"
                  name="postContent"
                  class="w-full border-2 text-blue-500 font-[600] rounded-md px-4 py-3 leading-5 transition duration-150 ease-in-out sm:text-sm
                   sm:leading-5 resize-none focus:outline-none focus:border-blue-500"
                  placeholder="5000 Tk"
                />
              </div>

              <div class="flex items-center justify-between">
                <button
                  type="submit"
                  class="flex justify-center items-center bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue text-white py-2 px-4 rounded-md transition duration-300 gap-2"
                >
                  {" "}
                  Submit
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    id="send"
                    fill="#fff"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentDetails;
