import React from "react";

export const LoadingPage = ({ content }) => {
  return (
    <div class="max-w-screen-xl flex mx-auto  min-h-screen items-center justify-center ">
      <div class="w-[15%] rounded overflow-hidden shadow-lg animate-pulse">
        <div class="h-48 bg-gray-300 flex justify-center items-center relative">
          <h1 className="text-amber-700 text-[30px] font-[900] absolute z-10">
            {content}
          </h1>
        </div>
      </div>
    </div>
  );
};
