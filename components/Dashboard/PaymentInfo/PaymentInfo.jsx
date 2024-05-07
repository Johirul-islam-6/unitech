import React from "react";
import "./PaymentInfo.css";

import { PaymentInfoTable } from "./PaymentInfoTable";

export const PaymentInfo = ({ userInfo }) => {
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

  function padZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  // Get today's date
  const today = new Date();
  // Format the date to DD/MM/YYYY
  const formattedDate = `${padZero(today.getDate())}/${padZero(
    today.getMonth() + 1
  )}/${today.getFullYear()}`;

  const FindDepartment = (cetagoryName) => {
    console.log(cetagoryName);
  };

  console.log(formattedDate);
  return (
    <>
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
                  type="search"
                  name="q"
                  className="block w-full py-2 px-4 bg-[#F6F6F6] rounded-mdocus:outline-4 outline-[#d46a14] border-[1px] GT"
                  placeholder="Student name, phone etc..."
                  autocomplete="off"
                />
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 cursor-pointer ">
              <h1 className="text-[#0984E3] font-[700] hidden md:flex">
                Download the list (PDF)
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.29 17.29L13 18.59V13C13 12.7348 12.8947 12.4804 12.7071 12.2929C12.5196 12.1054 12.2652 12 12 12C11.7348 12 11.4804 12.1054 11.2929 12.2929C11.1054 12.4804 11 12.7348 11 13V18.59L9.71001 17.29C9.61677 17.1968 9.50608 17.1228 9.38426 17.0724C9.26244 17.0219 9.13187 16.9959 9.00001 16.9959C8.86815 16.9959 8.73758 17.0219 8.61576 17.0724C8.49394 17.1228 8.38325 17.1968 8.29001 17.29C8.19677 17.3833 8.12281 17.4939 8.07235 17.6158C8.02189 17.7376 7.99592 17.8682 7.99592 18C7.99592 18.1319 8.02189 18.2624 8.07235 18.3843C8.12281 18.5061 8.19677 18.6168 8.29001 18.71L11.29 21.71C11.3851 21.8011 11.4973 21.8724 11.62 21.92C11.7397 21.9729 11.8691 22.0002 12 22.0002C12.1309 22.0002 12.2603 21.9729 12.38 21.92C12.5028 21.8724 12.6149 21.8011 12.71 21.71L15.71 18.71C15.8983 18.5217 16.0041 18.2663 16.0041 18C16.0041 17.7337 15.8983 17.4783 15.71 17.29C15.5217 17.1017 15.2663 16.9959 15 16.9959C14.7337 16.9959 14.4783 17.1017 14.29 17.29ZM18.42 6.22002C17.809 4.81602 16.7545 3.65109 15.4181 2.90374C14.0817 2.15639 12.5371 1.86785 11.021 2.08233C9.50489 2.2968 8.10094 3.00247 7.02427 4.09119C5.9476 5.17991 5.2576 6.59163 5.06001 8.11002C4.1066 8.33834 3.27023 8.90885 2.70975 9.71321C2.14927 10.5176 1.9037 11.4997 2.01968 12.4732C2.13566 13.4467 2.60511 14.3437 3.33888 14.9939C4.07265 15.644 5.01964 16.0021 6.00001 16C6.26523 16 6.51958 15.8947 6.70712 15.7071C6.89466 15.5196 7.00001 15.2652 7.00001 15C7.00001 14.7348 6.89466 14.4804 6.70712 14.2929C6.51958 14.1054 6.26523 14 6.00001 14C5.46958 14 4.96087 13.7893 4.5858 13.4142C4.21073 13.0392 4.00001 12.5304 4.00001 12C4.00001 11.4696 4.21073 10.9609 4.5858 10.5858C4.96087 10.2107 5.46958 10 6.00001 10C6.26523 10 6.51958 9.89466 6.70712 9.70712C6.89466 9.51959 7.00001 9.26523 7.00001 9.00002C7.00257 7.81729 7.4243 6.67377 8.19028 5.7726C8.95627 4.87143 10.0169 4.27097 11.1838 4.07789C12.3506 3.88481 13.5481 4.11162 14.5636 4.71803C15.579 5.32443 16.3466 6.27116 16.73 7.39002C16.7872 7.56186 16.8899 7.71495 17.0273 7.83295C17.1647 7.95095 17.3315 8.02943 17.51 8.06002C18.1761 8.18589 18.7799 8.53362 19.223 9.04655C19.6662 9.55948 19.9226 10.2074 19.9504 10.8847C19.9782 11.5619 19.7759 12.2287 19.3763 12.7762C18.9767 13.3238 18.4035 13.7199 17.75 13.9C17.6226 13.9328 17.503 13.9904 17.3978 14.0695C17.2927 14.1486 17.2042 14.2476 17.1373 14.3609C17.0705 14.4742 17.0266 14.5995 17.0082 14.7298C16.9898 14.86 16.9972 14.9926 17.03 15.12C17.0628 15.2474 17.1204 15.3671 17.1995 15.4722C17.2786 15.5773 17.3776 15.6658 17.4909 15.7327C17.6042 15.7995 17.7295 15.8434 17.8598 15.8619C17.99 15.8803 18.1226 15.8728 18.25 15.84C19.3024 15.5619 20.2353 14.948 20.907 14.0915C21.5787 13.235 21.9526 12.1826 21.9718 11.0943C21.9911 10.0059 21.6546 8.94106 21.0136 8.06134C20.3725 7.18161 19.4619 6.53511 18.42 6.22002Z"
                  fill="#0984E3"
                />
              </svg>
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
                type="search"
                name="q"
                className="block w-full py-2 px-4 bg-[#F6F6F6] rounded-mdocus:outline-4 outline-[#d46a14] border-[1px]   GT"
                placeholder="Student name, phone etc..."
                autocomplete="off"
              />
            </div>
          </div>
        </div>

        {/* ---- user Card --- */}
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

                    <PaymentInfoTable />
                    <PaymentInfoTable />
                    <PaymentInfoTable />
                    <PaymentInfoTable />
                    <PaymentInfoTable />
                    <PaymentInfoTable />
                    <PaymentInfoTable />
                    <PaymentInfoTable />
                    <PaymentInfoTable />
                    <PaymentInfoTable />
                    <PaymentInfoTable />
                    <PaymentInfoTable />
                    <PaymentInfoTable />
                  </table>
                </div>
              </div>
              {/* ---total price -- */}
              <thead className="flex justify-end">
                <tr className="flex flex-row gap-5 justify-end ">
                  <div className="box-price border-l-4 border-[#F89521] p-2">
                    <p>Total Amount</p>
                    <h1 className="text-[20px] font-[700]">Tk. 11,0950</h1>
                  </div>
                  <div className="box-price border-l-4 border-[##35BD95] p-2">
                    <p>Paid Amount</p>
                    <h1 className="text-[20px] font-[700]">Tk. 9,0950</h1>
                  </div>
                  <div className="box-price border-l-4 border-[##FF5C5C] p-2">
                    <p>Due Amount </p>
                    <h1 className="text-[20px] font-[700]">Tk. 9,0950</h1>
                  </div>
                </tr>
              </thead>
            </div>
            {/* ---- searching button ---- */}
            <div className=" px-3 py-1 bg-[#FFF] box-shdow-5 h-[500px] rounded-lg ">
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
                      name="Sroll"
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
                  <select className="input block border border-gray-300 focus:border-pitch-black  py-2 px-3 w-full focus:outline-none mt-1">
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
                    Date
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <input
                      defaultValue={formattedDate}
                      type="text"
                      name="SDate"
                      id="price"
                      className="block w-full rounded-md border-0 py-2 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      disabled
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
                      name="CFree"
                      id="price"
                      className="block w-full rounded-md border-0 py-2 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="15000"
                    />
                  </div>
                </div>

                {/* ---courses--- */}
                <div className="mt-3">
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
                      name="CPaid"
                      id="price"
                      className="block w-full rounded-md border-0 py-2 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="5000"
                    />
                  </div>
                </div>
              </div>
              <button className="py-3 px-2 bg-[#F89521] w-full flex text-center rounded-md justify-center font-[700] text-[16px] mt-4 text-[#212121]">
                Submit
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
