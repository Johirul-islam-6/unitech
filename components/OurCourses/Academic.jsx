import React from "react";
import AcademicSlider from "./AcademicSlider";

export const Academic = () => {
  return (
    <>
      <h1 className="text-center text-[1.7rem] md:text-[2rem] font-[600] pt-5 SILIGURI mt-5">
        ডিপ্লোমা একাডেমিক কোর্স
      </h1>
      <p className="text-center text-[16px] font-semibold SILIGURI py-1 text-[#667085] ">
        শুধু পলিটেকনিকে ছাত্রছাত্রীদের জন্য
      </p>
      <div className="AcademicSlidess mt-5">
        <AcademicSlider />
      </div>
    </>
  );
};
