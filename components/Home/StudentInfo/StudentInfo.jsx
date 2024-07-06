import React from "react";
import "./StudentInfo.css";

import s1 from "@/app/Assets/studentInfo/1.jpg";
import s2 from "@/app/Assets/studentInfo/autocad_class.jpg";
import s3 from "@/app/Assets/studentInfo/3.jpg";
import s4 from "@/app/Assets/studentInfo/4.jpg";
import s5 from "@/app/Assets/studentInfo/5.jpg";
import s6 from "@/app/Assets/studentInfo/6.jpg";
import s7 from "@/app/Assets/studentInfo/7.jpg";
import s8 from "@/app/Assets/studentInfo/2.jpg";
import Link from "next/link";
import Image from "next/image";

export const StudentInfo = () => {
  const StudentInfo = [
    {
      id: "1",
      title: "একাডেমিক ক্লাস চলাকালীন শিক্ষার্থী।",
      image: s1,
    },
    {
      id: "2",
      title: "অটোক্যাড ক্লাস চলাকালীন শিক্ষার্থী।",
      image: s2,
    },
    {
      id: "3",
      title: "ইন্ডাস্ট্রিয়াল এটাচমেন্টের শিক্ষার্থী।",
      image: s3,
    },
    {
      id: "4",
      title: "বার্ষিক শিক্ষা সফর ২০-২১ শিক্ষার্থী।",
      image: s4,
    },
    {
      id: "5",
      title: "ম্যাথমেটিক্স ক্লাস চলাকালীন শিক্ষার্থী।",
      image: s5,
    },
    {
      id: "6",
      title: "শিক্ষার্থীদের নিয়ে ক্যারিয়ার মিটআপ ",
      image: s6,
    },
    {
      id: "7",
      title: "সার্টিফিকেট প্রদানের সময় শিক্ষার্থী।",
      image: s7,
    },
    {
      id: "8",
      title: "একাডেমিক পরিক্ষা চলাকালীন ",
      image: s8,
    },
  ];

  return (
    <>
      <div>
        <div className="mt-20">
          <h1 className="text-center text-[1.7rem] md:text-[2rem] font-[600] py-5 SILIGURI">
            কোর্স চলাকালীন শিক্ষার্থীদের নিয়ে কিছু মুহূর্ত
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-3">
            {StudentInfo?.map((course, index) => (
              <>
                <div
                  key={course?.id}
                  className="border-2 student-info-card flex flex-col justify-center items-center p-1 md:p-2 "
                >
                  <div className="image h-[160px] md:h-[200px] overflow-hidden">
                    <Image
                      width={0}
                      height={0}
                      className="border-2 h-[100%] object-cover student-info-image"
                      src={course?.image}
                      alt=""
                    />
                  </div>
                  <h1 className="course-name mt-2 text-[#101828] text-center text-[16px] font-[600] SILIGURI">
                    {course?.title}
                  </h1>
                </div>
              </>
            ))}
          </div>

          <div className="flex justify-center my-8">
            <Link href={"/"}>
              <button className="px-8 py-2 text-[18px] font-[600] bg-[#FFCD33] hover:text-white rounded-sm hover:bg-[#ebbb2b] SILIGURI">
                Gallery »
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
