import Image from "next/image";
import React from "react";
import userimage from "@/app/Assets/Dashboard/icon/Avatar.png";
import Link from "next/link";
export const PaymentInfoTable = ({ AllPaymentInfo }) => {
  return (
    <>
      {AllPaymentInfo &&
        Array.isArray(AllPaymentInfo) &&
        AllPaymentInfo.map((single, index) => (
          <>
            <tbody className="" key={index}>
              <tr
                className={`border-b-2 bg-green-200 ${
                  single?.SFree === single?.SPaid ? "bg-[#89e9ab]" : "bg-white"
                }`}
              >
                <th className="flex gap-2 items-center px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap py-[2px] text-left text-[#393A3A] ">
                  {index + 1}
                  <Image
                    width={30}
                    height={30}
                    className=" object-cover p-[2px]"
                    src={userimage}
                    alt=""
                  />
                  <Link href={`/dashboard/paymentDetails/${single?._id}`}>
                    <h1>{single?.SName}</h1>
                  </Link>
                </th>
                <td className="px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap py-[2px] text-left text-[#393A3A] font-[600]">
                  <Link href={`/dashboard/paymentDetails/${single?._id}`}>
                    {" "}
                    {single?.SCetagory}
                  </Link>
                </td>
                <td className="px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap py-[2px] text-left text-[#54c7f5] font-[400]">
                  <Link href={`/dashboard/paymentDetails/${single?._id}`}>
                    {" "}
                    {single?.CDate}
                  </Link>
                </td>
                <td className="px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap py-[2px] text-left text-[#2340b3] font-[600]">
                  <span className="text-[12px] font-[600] text-[#393A3A] ps-[2px]">
                    ৳
                  </span>
                  <Link href={`/dashboard/paymentDetails/${single?._id}`}>
                    {" "}
                    {single?.SFree}{" "}
                  </Link>
                </td>
                <td className="px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap py-[2px] text-left text-[#219825] font-[600]">
                  <span className="text-[12px] font-[600] text-[#393A3A] ps-[2px]">
                    ৳
                  </span>
                  <Link href={`/dashboard/paymentDetails/${single?._id}`}>
                    {" "}
                    {single?.SPaid}
                  </Link>
                </td>
                <td className="px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap py-[2px] text-left text-[#c72828] font-[600]">
                  <span className="text-[12px] font-[600] text-[#393A3A] ps-[2px]">
                    ৳
                  </span>
                  <Link href={`/dashboard/paymentDetails/${single?._id}`}>
                    {" "}
                    {single?.SFree - single?.SPaid}{" "}
                  </Link>
                </td>
              </tr>
            </tbody>
          </>
        ))}
    </>
  );
};
