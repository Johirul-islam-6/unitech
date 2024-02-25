"use client";
import Image from "next/image";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import "./CourseCard.css";
import Link from "next/link";
export const CourseCard = ({ allCourses }) => {
  return (
    <>
      {allCourses?.map((course, index) => (
        <>
          <div
            key={course?.id}
            className="course-Card flex flex-col justify-center items-center p-5"
          >
            <Image
              width={80}
              height={1200}
              className="border-2 rounded-full"
              src={course?.icon}
              alt=""
            />
            <h1 className="course-name mt-2 text-[#101828] text-center text-[18px] font-[600] SILIGURI">
              {course?.name}
            </h1>
            <Link href={`/cetagorycourses/${course?.cetagory}`}>
              <button className="view-course-button2 SILIGURI">
                View Courses » <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </Link>
          </div>
        </>
      ))}
    </>
  );
};
