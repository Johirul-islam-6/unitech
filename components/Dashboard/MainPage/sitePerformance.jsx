import React from "react";
import "./MainPage.css";
export const sitePerformance = () => {
  return (
    <>
      <div className="all-box grid grid-cols-2 gap-5  md:grid-cols-4  md:justify-start justify-center items-center mt-5 pb-2 ">
        {/* ----box -01 ---- */}
        <div className="Impressions bg-[#72bce7] px-4 py-6 rounded-lg dashbord-box-shadow ">
          <p className="text-[20px] font-[700] text-[#0c0b15]">Impressions</p>
          <div className="flex items-center ">
            <h1 className="total-count-number text-[30px] md:text-[40px] text-[#0c0b15] ">
              79.1k
            </h1>
            <span className="text-[14px] font-[600] text-red-800 flex gap-1 md:mt-5 justify-end items-center ps-2">
              +11.02%{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.6823 8.41165L21 6L18.9297 14.4092L16.3471 11.9298L12.181 16.2694C12.0396 16.4167 11.8442 16.5 11.64 16.5C11.4358 16.5 11.2404 16.4167 11.099 16.2694L8.04 13.083L3.54104 17.7694C3.25419 18.0682 2.77941 18.0779 2.4806 17.791C2.18179 17.5042 2.1721 17.0294 2.45896 16.7306L7.49896 11.4806C7.64039 11.3333 7.83578 11.25 8.04 11.25C8.24422 11.25 8.43961 11.3333 8.58104 11.4806L11.64 14.667L15.265 10.891L12.6823 8.41165Z"
                  fill="#111212"
                />
              </svg>
            </span>
          </div>
        </div>
        {/* ----box -02 ---- */}
        <div className="Visitors bg-[#d7d7d7] px-4 py-6 rounded-lg dashbord-box-shadow ">
          <p className="text-[18px] font-[700] text-[#0c0b15] ">Visitors</p>
          <div className="flex items-center ">
            <h1 className="total-count-number text-[30px] md:text-[40px] text-[#0c0b15] ">
              79.1k
            </h1>
            <span className="text-[14px] font-[600] text-red-800 flex gap-1 md:mt-5 justify-end items-center ps-2">
              +11.02%{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.5194 5.45896C21.8182 5.74582 21.8279 6.22059 21.541 6.5194L16.501 11.7694C16.3596 11.9167 16.1642 12 15.96 12C15.7558 12 15.5604 11.9167 15.419 11.7694L12.36 8.58298L8.73503 12.359L11.3177 14.8383L3 17.25L5.07029 8.84084L7.65295 11.3202L11.819 6.9806C11.9604 6.83328 12.1558 6.75 12.36 6.75C12.5642 6.75 12.7596 6.83328 12.901 6.9806L15.96 10.167L20.459 5.4806C20.7458 5.18179 21.2206 5.1721 21.5194 5.45896Z"
                  fill="#1C1C1C"
                />
              </svg>
            </span>
          </div>
        </div>
        {/* ----box -03 ---- */}
        {/* <div className="Engaged bg-[#fef4e9] px-4 py-6 rounded-lg dashbord-box-shadow ">
              <p className="text-[18px] font-[700] text-[#0c0b15]">Engaged</p>
              <div className="flex items-center ">
                <h1 className="total-count-number text-[30px] md:text-[40px] text-[#0c0b15]">
                  15k
                </h1>
                <span className="text-[14px] font-[600] text-red-800 flex gap-1 md:mt-5 justify-end items-center ps-2">
                  +15.03%{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.6823 8.41165L21 6L18.9297 14.4092L16.3471 11.9298L12.181 16.2694C12.0396 16.4167 11.8442 16.5 11.64 16.5C11.4358 16.5 11.2404 16.4167 11.099 16.2694L8.04 13.083L3.54104 17.7694C3.25419 18.0682 2.77941 18.0779 2.4806 17.791C2.18179 17.5042 2.1721 17.0294 2.45896 16.7306L7.49896 11.4806C7.64039 11.3333 7.83578 11.25 8.04 11.25C8.24422 11.25 8.43961 11.3333 8.58104 11.4806L11.64 14.667L15.265 10.891L12.6823 8.41165Z"
                      fill="#111212"
                    />
                  </svg>
                </span>
              </div>
            </div> */}
        {/* ----box -05 ---- */}
        <div className="Enrolled bg-[#fef4e9] px-4 py-6 rounded-lg dashbord-box-shadow ">
          <p className="text-[18px] font-[700] text-[#0c0b15]">Enrolled</p>
          <div className="flex items-center ">
            <h1 className="total-count-number text-[30px] md:text-[40px] text-[#0c0b15]">
              90.2k
            </h1>
            <span className="text-[14px] font-[600] text-red-800 flex gap-1 md:mt-5 justify-end items-center ps-2">
              +45.03%{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.6823 8.41165L21 6L18.9297 14.4092L16.3471 11.9298L12.181 16.2694C12.0396 16.4167 11.8442 16.5 11.64 16.5C11.4358 16.5 11.2404 16.4167 11.099 16.2694L8.04 13.083L3.54104 17.7694C3.25419 18.0682 2.77941 18.0779 2.4806 17.791C2.18179 17.5042 2.1721 17.0294 2.45896 16.7306L7.49896 11.4806C7.64039 11.3333 7.83578 11.25 8.04 11.25C8.24422 11.25 8.43961 11.3333 8.58104 11.4806L11.64 14.667L15.265 10.891L12.6823 8.41165Z"
                  fill="#111212"
                />
              </svg>
            </span>
          </div>
        </div>
        {/* ----box -06 ---- */}
        <div className="Total Users bg-[#d7d7d7] px-4 py-6 rounded-lg dashbord-box-shadow ">
          <p className="text-[18px] font-[700] text-[#0c0b15]">Total Users</p>
          <div className="flex items-center ">
            <h1 className="total-count-number text-[30px] md:text-[40px] text-[#0c0b15]">
              22.2k
            </h1>
            <span className="text-[14px] font-[600] text-red-800 flex gap-1 md:mt-5 justify-end items-center ps-2">
              +60.03%{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.6823 8.41165L21 6L18.9297 14.4092L16.3471 11.9298L12.181 16.2694C12.0396 16.4167 11.8442 16.5 11.64 16.5C11.4358 16.5 11.2404 16.4167 11.099 16.2694L8.04 13.083L3.54104 17.7694C3.25419 18.0682 2.77941 18.0779 2.4806 17.791C2.18179 17.5042 2.1721 17.0294 2.45896 16.7306L7.49896 11.4806C7.64039 11.3333 7.83578 11.25 8.04 11.25C8.24422 11.25 8.43961 11.3333 8.58104 11.4806L11.64 14.667L15.265 10.891L12.6823 8.41165Z"
                  fill="#111212"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
