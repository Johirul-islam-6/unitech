import React from "react";
import "./Loader.css";
export const LoadingPage = ({ content }) => {
  return (
    <div class="max-w-screen-xl loding-container flex mx-auto  min-h-screen items-center justify-center">
      {/* <div class="w-[15%] rounded overflow-hidden shadow-lg animate-pulse">
        <div class="h-48 bg-gray-300 flex justify-center items-center relative">
          <h1 className="text-amber-700 text-[30px] font-[900] absolute z-10">
            {content ? content : "loading"}
          </h1>
        </div>
      </div> */}

      <div className="bg-blue-500 ">
        <div class="wrapper">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="shadow"></div>
          <div class="shadow"></div>
          <div class="shadow"></div>
          <div className="pt-[80px] flex justify-center  ">
            <p className="text-center text-[#00000086] absolute uppercase font-[600] text-[18px]">
              {content ? content : "loading"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
