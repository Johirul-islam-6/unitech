import React from "react";
import organization from "@/app/Assets/Archtctural landing page/organization.png";
import ISO from "@/app/Assets/Archtctural landing page/ISO.png";
import Image from "next/image";
export const ArchitcturalOrganization = () => {
  return (
    <>
      <div className="mt-20">
        {/* -------- organization ------ */}
        <div className="flex flex-col-reverse md:grid grid-cols-2 gap-x-10 items-center justify-center ">
          <div className="text-container">
            <p className="text-[#F80100] text-[14px] font-[600] py-5">
              Successfully 5 Year s
            </p>
            <h1 className="text-[25px] md:text-[35px] font-[600] text-[#000]">
              World-Renowned IT Expert Making Organization
            </h1>
            <p className="text-[#707275] text-[16px] font-[400] pt-5">
              Creative IT has been working with a vision to create IT experts
              for the past 14 years. In a fast pacing world, where every sector
              relies on technology, you need to develop IT skills to secure a
              better future. With the utmost dedication, we have been able to
              make more than 50,000 IT experts who are currently working in
              different sectors.
            </p>
          </div>
          <div className="flex md:justify-end justify-center">
            <Image
              width={550}
              height={500}
              className="object-cover"
              src={organization}
              alt=""
            />
          </div>
        </div>
        {/* -------success student box ---- */}
        <div className="flex flex-wrap md:grid grid-cols-6 justify-center items-center gap-5  my-20">
          {/* ----box-- */}
          <div className="py-10 px-3 rounded-md bg-[#FAF9FD]">
            <h1 className="text-[25px] text-[#F7941F] font-bold text-center">
              546+
            </h1>
            <p className="text-[16px] font-bold text-center pt-1">
              Successful Students
            </p>
          </div>
          <div className="py-10 px-3 rounded-md bg-[#FAF9FD]">
            <h1 className="text-[25px] text-[#F7941F] font-bold text-center">
              280+
            </h1>
            <p className="text-[16px] font-bold text-center pt-1">
              Expert Freelancers
            </p>
          </div>
          <div className="py-10 px-3 rounded-md bg-[#FAF9FD]">
            <h1 className="text-[25px] text-[#F7941F] font-bold text-center">
              180+
            </h1>
            <p className="text-[16px] font-bold text-center pt-1">
              Skilled Job Holders
            </p>
          </div>
          <div className="py-10 px-3 rounded-md bg-[#FAF9FD]">
            <h1 className="text-[25px] text-[#F7941F] font-bold text-center">
              500+
            </h1>
            <p className="text-[16px] font-bold text-center pt-1">
              Industry expert
            </p>
          </div>
          <div className="py-10 px-3 rounded-md bg-[#FAF9FD]">
            <h1 className="text-[25px] text-[#F7941F] font-bold text-center">
              91+
            </h1>
            <p className="text-[16px] font-bold text-center pt-1">
              Success Ratio
            </p>
          </div>
          <div className="py-10 px-3 rounded-md bg-[#FAF9FD]">
            <h1 className="text-[25px] text-[#F7941F] font-bold text-center">
              700+
            </h1>
            <p className="text-[16px] font-bold text-center pt-1">Companies</p>
          </div>
        </div>
        {/* -------- organization ------ */}
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center justify-center mt-20">
          <div className="flex md:justify-start justify-center  md:w-[50%] ">
            <Image
              width={450}
              height={300}
              className="object-cover border-2 border-[#00000067] rounded-md"
              src={ISO}
              alt=""
            />
          </div>
          <div className="text-container w-[100%] ">
            <h1 className="text-[25px] md:text-[40px] font-[600] text-[#000]">
              One of the DNCC Certified IT
              <br className="hidden md:block" /> Institutes in Dhaka
            </h1>
            <p className="text-[#707275] text-[18px] font-[400] pt-5">
              In a groundbreaking development of 2024, Unitech Bangladesh
              proudly attained official certification from the Dhaka North City
              Corporation (DNCC), underscoring its unwavering dedication to
              operational excellence and adherence to rigorous standards. This
              prestigious recognition serves as a testament to Unitech s
              commitment to delivering high-quality services and products. The
              certification from DNCC solidifies Unitech s position as a
              reliable and responsible entity within the business landscape,
              paving the way for continued growth and positive contributions to
              the community
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
