import icon1 from "@/app/Assets/SoftwareTools/webDevelopment/html.svg";
import icon2 from "@/app/Assets/SoftwareTools/webDevelopment/css.svg";
import icon3 from "@/app/Assets/SoftwareTools/webDevelopment/bootstrap.svg";
import icon4 from "@/app/Assets/SoftwareTools/webDevelopment/tailwind.svg";
import icon5 from "@/app/Assets/SoftwareTools/webDevelopment/javascript.svg";
import icon6 from "@/app/Assets/SoftwareTools/webDevelopment/react.svg";
import icon7 from "@/app/Assets/SoftwareTools/webDevelopment/figma.svg";

// ---

import icon8 from "@/app/Assets/SoftwareTools/webDevelopment/vscode.png";
import icon9 from "@/app/Assets/SoftwareTools/webDevelopment/github.png";
import icon10 from "@/app/Assets/SoftwareTools/webDevelopment/mongodb.png";
import icon11 from "@/app/Assets/SoftwareTools/webDevelopment/node.png";
import icon12 from "@/app/Assets/SoftwareTools/webDevelopment/postman.png";
import icon13 from "@/app/Assets/SoftwareTools/webDevelopment/netlfy.png";

import Image from "next/image";

export const WebDvelopment = () => {
  return (
    <div className="w-[100%] gap-3 justify-start p-6 flex flex-row flex-wrap bg-[#FAF9FD] mt-8 rounded-md">
      <div className="software-icon flex border-2 p-[4px] rounded-md shadow-xl border-[#0e0e0e1f] justify-start items-center">
        <Image className="w-[40px] h-[40px]" src={icon1} alt="" />
      </div>
      <div className="software-icon flex border-2 p-[4px] rounded-md shadow-xl border-[#0e0e0e1f] justify-start items-center">
        <Image className="w-[40px] h-[40px]" src={icon2} alt="" />
      </div>
      <div className="software-icon flex border-2 p-[4px] rounded-md shadow-xl border-[#0e0e0e1f] justify-start items-center">
        <Image className="w-[40px] h-[40px]" src={icon3} alt="" />
      </div>
      <div className="software-icon flex border-2 p-[4px] rounded-md shadow-xl border-[#0e0e0e1f] justify-start items-center">
        <Image className="w-[40px] h-[40px]" src={icon4} alt="" />
      </div>
      <div className="software-icon flex border-2 p-[4px] rounded-md shadow-xl border-[#0e0e0e1f] justify-start items-center">
        <Image className="w-[40px] h-[40px]" src={icon5} alt="" />
      </div>
      <div className="software-icon flex border-2 p-[4px] rounded-md shadow-xl border-[#0e0e0e1f] justify-start items-center">
        <Image className="w-[40px] h-[40px]" src={icon6} alt="" />
      </div>

      {/* ---png */}
      <div className="software-icon flex border-2 p-[4px] rounded-md shadow-xl border-[#0e0e0e1f] justify-start items-center">
        <Image className="w-[40px] h-[40px]" src={icon11} alt="" />
      </div>
      <div className="software-icon flex border-2 p-[4px] rounded-md shadow-xl border-[#0e0e0e1f] justify-start items-center">
        <Image className="w-[40px] h-[40px]" src={icon10} alt="" />
      </div>
      <div className="software-icon flex border-2 p-[4px] rounded-md shadow-xl border-[#0e0e0e1f] justify-start items-center">
        <Image className="w-[40px] h-[40px]" src={icon9} alt="" />
      </div>
      <div className="software-icon flex border-2 p-[4px] rounded-md shadow-xl border-[#0e0e0e1f] justify-start items-center">
        <Image className="w-[40px] h-[40px]" src={icon8} alt="" />
      </div>
      <div className="software-icon flex border-2 p-[4px] rounded-md shadow-xl border-[#0e0e0e1f] justify-start items-center">
        <Image className="w-[40px] h-[40px]" src={icon7} alt="" />
      </div>

      <div className="software-icon flex border-2 p-[4px] rounded-md shadow-xl border-[#0e0e0e1f] justify-start items-center">
        <Image className="w-[40px] h-[40px]" src={icon12} alt="" />
      </div>
      <div className="software-icon flex border-2 p-[4px] rounded-md shadow-xl border-[#0e0e0e1f] justify-start items-center">
        <Image className="w-[40px] h-[40px]" src={icon13} alt="" />
      </div>
    </div>
  );
};
