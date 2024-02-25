import Image from "next/image";
import React from "react";
import userimage from "@/app/Assets/Dashboard/icon/Avatar.png";
export const PaymentInfoTable = () => {
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
            Web development
          </td>
          <td class="px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap py-[2px] text-left text-[#54c7f5] font-[600]">
            12-05-2024
          </td>
          <td class="px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap py-[2px] text-left text-[#393A3A] font-[600]">
            Tk. 10,000
          </td>
          <td class="px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap py-[2px] text-left text-[#393A3A] font-[600]">
            Tk. 8,000
          </td>
          <td class="px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap py-[2px] text-left text-[#393A3A] font-[600]">
            Tk. 2,000
          </td>
        </tr>
      </tbody>
    </>
  );
};
