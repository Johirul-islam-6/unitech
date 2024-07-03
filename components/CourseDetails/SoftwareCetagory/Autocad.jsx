import icon1 from "@/app/Assets/SoftwareTools/autoCad/1.png";
import icon2 from "@/app/Assets/SoftwareTools/autoCad/2.png";
import icon3 from "@/app/Assets/SoftwareTools/autoCad/3.png";
import icon4 from "@/app/Assets/SoftwareTools/autoCad/4.png";
import Image from "next/image";

export const Autocad = () => {
  return (
    <div className="w-[100%] justify-start p-6 grid grid-cols-1 gap-5 md:gap-y-8 md:grid-cols-2 bg-[#FAF9FD] mt-8 rounded-md">
      <div className="software-icon flex gap-2 justify-start items-center">
        <Image className="w-[50px] h-[50px]" src={icon1} alt="" />
        <p className="text-[19px] text-[#353535] font-[800]">AutoCAD </p>
      </div>
      <div className="software-icon flex gap-2 justify-start items-center">
        <Image className="w-[50px] h-[50px]" src={icon2} alt="" />
        <p className="text-[19px] text-[#353535] font-[800]">V-Ray</p>
      </div>
      <div className="software-icon flex gap-2 justify-start items-center">
        <Image className="w-[50px] h-[50px]" src={icon3} alt="" />
        <p className="text-[19px] text-[#353535] font-[800]">SketchUp</p>
      </div>
      <div className="software-icon flex gap-2 justify-start items-center">
        <Image className="w-[50px] h-[50px]" src={icon4} alt="" />
        <p className="text-[19px] text-[#353535] font-[800]">Adobe Photoshop</p>
      </div>
    </div>
  );
};
