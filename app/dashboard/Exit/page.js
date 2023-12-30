import Link from "next/link";
import React from "react";

const Exit = () => {
  return (
    <>
      <div className="flex h-[90vh] items-center mt-5">
        <div className=" w-[200px] md:w-[500px] mx-auto flex justify-center rounded-md bg-[#f2dff8] border-2 p-5 items-center">
          <div>
            <h2 className="text-[25px] font-bold text-[#000000ae]">
              Do you want to exit?
            </h2>
            <div className="flex gap-3 justify-center items-center mt-4">
              <button className="px-10 py-2 bg-white text-black border-2 font-[600] rounded-lg">
                No
              </button>
              <Link href={"/"}>
                <button className="px-10 py-2  bg-[#FF5C5C] text-black border-2 font-[600] rounded-lg">
                  Yes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exit;
