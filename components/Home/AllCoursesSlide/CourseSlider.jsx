import Image from "next/image";
import "./CourseSlider.css";
import SliderItem from "./SliderItem";
import line from "@/app/Assets/untility/line.svg";

export const CourseSlider = () => {
  return (
    <>
      <div className="diploma-engineer py-[10px] ">
        <div className="mt-20">
          <div className="flex  justify-between items-center md:px-10">
            <h1 className="text-start text-[1.4rem] md:text-[2rem] font-[600]  SILIGURI ">
              স্পেশাল কোর্স
            </h1>
            <div className="line-image border-2"></div>
            <h1 className="text-start see-all-btn cursor-pointer  text-[1rem] md:text-[1rem] font-[600] rounded-md SILIGURI">
              See all
            </h1>
          </div>
          <SliderItem />
        </div>
      </div>
    </>
  );
};
