import Image from "next/image";
import React from "react";
import userimage from "@/app/Assets/Dashboard/icon/Avatar.png";
export const UserTable = () => {
  return (
    <>
      <tbody>
        <tr className="border-b-2">
          <th class="flex gap-2 items-center px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap py-[2px] text-left text-[#393A3A] ">
            1.{" "}
            <Image
              width={30}
              height={30}
              className=" object-cover p-[2px]"
              src={userimage}
              alt=""
            />
            <h1>Robayath Hasan</h1>
          </th>
          <td class="px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap py-[2px] text-left text-[#393A3A] font-[600]">
            02722111218107
          </td>
          <td class="px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap py-[2px] text-left text-[#393A3A] font-[600]">
            1st semester
          </td>
          <td class="px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap py-[2px] text-left text-[#393A3A] font-[600]">
            <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
            Active
          </td>
        </tr>
      </tbody>
    </>
  );
};
