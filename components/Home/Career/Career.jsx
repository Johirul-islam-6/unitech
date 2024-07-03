"use client";
import React from "react";
import web from "@/app/Assets/career/Web design & Development.png";
import graphic from "@/app/Assets/career/Graphic Design.png";
import marketing from "@/app/Assets/career/Digital Marketing.png";
import computer from "@/app/Assets/career/Basic Computer.png";
import autocad from "@/app/Assets/career/Autocad Basic & premium.png";
import autocad3D from "@/app/Assets/career/Autocad 3d.png";
import video from "@/app/Assets/career/videoIcon.webp";
import "./Career.css";
import { CourseCard } from "./CourseCard";

export const Career = () => {
  const allCourses = [
    {
      id: "1",
      cetagory: "web-development",
      name: "Web Development",
      icon: web,
      price: "",
      duration: "",
      description: "",
    },
    {
      id: "2",
      cetagory: "Graphic-desing",
      name: "graphic-desing",
      icon: graphic,
      price: "",
      duration: "",
      description: "",
    },

    {
      id: "4",
      cetagory: "basic-computer",
      name: "Basic Computer",
      icon: computer,
      price: "",
      duration: "",
      description: "",
    },
    {
      id: "5",
      cetagory: "Autocad-basic-premium",
      name: "Autocad Basic & premium",
      icon: autocad,
      price: "",
      duration: "",
      description: "",
    },
    {
      id: "6",
      cetagory: "autocad",
      name: "Autocad 3d",
      icon: autocad3D,
      price: "",
      duration: "",
      description: "",
    },

    {
      id: "7",
      cetagory: "digital-marketing",
      name: "Digital Marketing",
      icon: marketing,
      price: "",
      duration: "",
      description: "",
    },
    {
      id: "3",
      cetagory: "ux-ui-design",
      name: "ux/ui-design",
      icon: graphic,
      price: "",
      duration: "",
      description: "",
    },
    {
      id: "8",
      cetagory: "video-editing",
      name: "Video Editing",
      icon: video,
      price: "",
      duration: "",
      description: "",
    },
  ];

  return (
    <>
      <div className="career py-16">
        <div className=" justify-center items-center max-w-screen-xl mx-auto">
          <div className="career-text-div justify-center  ">
            <div className="career-text ">
              <h1 className="text-center text-white SILIGURI">
                ক্যারিয়ার গোল সেট করুন
                <p className="career-paragrap SILIGURI">
                  নিচের অপশন গুলো থেকে আপনার গোল সিলেক্ট করে শেখা শুরু করুন
                </p>
              </h1>
            </div>
          </div>
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-3 items-center justify-around ">
            <CourseCard allCourses={allCourses} />
          </div>
        </div>
      </div>
    </>
  );
};
