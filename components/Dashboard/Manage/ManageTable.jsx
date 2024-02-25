import Image from "next/image";
import React from "react";
import userimage from "@/app/Assets/Dashboard/icon/Avatar.png";
export const ManageTable = () => {
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
            Tk. 1,000
          </td>
          <td class="px-6  align-middle  text-[14px] whitespace-nowrap py-[2px] text-left text-[#ffffff] font-[600]">
            <button className="border-2 px-2 py-1 rounded-md bg-green-700 text-white">
              {" "}
              UNBLOCK
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};
