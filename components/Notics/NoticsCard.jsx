import Link from "next/link";
import React from "react";

export const NoticsCard = () => {
  return (
    <>
      <div className="flex justify-start items-center ">
        <div className="p-5 ">
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/1vMS151re4p8iRxN3EN-3oQFAbT-m37V5/view"
          >
            <h1 className="md:block hidden text-[16px] text-start cursor-pointer text-blue-800s hover:underline ">
              01. <span className="text-yellow">[ 02-01-2024 ]</span> Result
              Publish met consectetur adipisicing elit. Veniam, autem? Lorem
              ipsum, consectetur adipisicing elit..
            </h1>
            <h1 className=" md:hidden text-[16px] text-center cursor-pointer text-blue-800s hover:underline ">
              <span className="text-yellow">[ 02-01-2024 ]</span> Result Publish
              fdsdfsdfdf
            </h1>
          </Link>
        </div>
      </div>
      <hr className="" />
    </>
  );
};
