import Notics from "@/components/Notics/Notics";
import React from "react";
import "../../globals.css";

const notices = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="notics-broad">
          <h1 className="text-center text-[1.7rem] md:text-[2rem] font-[600] py-2 pt-5 SILIGURI uppercase ">
            you Are welcome Our{" "}
            <span className="text-yellow">Notics Broad</span>
          </h1>
          <div className="flex justify-center items-center mt-5">
            <Notics />
          </div>
        </div>
      </div>
    </>
  );
};

export default notices;
