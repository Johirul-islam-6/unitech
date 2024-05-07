"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Comment.css";
import studentProfile from "@/app/Assets/skill_courses_details/Review/image.png";
import stare from "@/app/Assets/skill_courses_details/Review/Star.png";
import dot from "@/app/Assets/skill_courses_details/Review/dot.png";
import Image from "next/image";

export default class CommentCourse extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,

      responsive: [
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    const academicData = [
      {
        id: "1",
        name: "Rasel Khan",
        profile: "প্রতি মাসে",
        date: "01/12/2023",
        batch: "02",
        message:
          "This the best institute i ever seen.I love the environment .All our mam & sir are so much friendly & helpfull.Thank you Creative It uttara branch.  example using the slice method to limit the length",
      },
      {
        id: "2",
        name: "Rasel Khan",
        profile: "প্রতি মাসে",
        date: "01/12/2023",
        batch: "02",
        message:
          "I love the environment .All our mam & sir are so much friendly & helpfull.Thank you Creative It uttara branch.",
      },
      {
        id: "3",
        name: "Rasel Khan",
        profile: "প্রতি মাসে",
        date: "01/12/2023",
        batch: "02",
        message:
          "This the best institute i ever seen.I love the environment .All our mam & sir are so much friendly & helpfull.Thank you Creative It uttara branch.",
      },
      {
        id: "4",
        name: "Rasel Khan",
        profile: "প্রতি মাসে",
        date: "01/12/2023",
        batch: "02",
        message:
          "This the best institute i ever seen.I love the environment .All our mam & sir are so much friendly & helpfull.Thank you Creative It uttara branch.",
      },
      {
        id: "5",
        name: "Rasel Khan",
        profile: "প্রতি মাসে",
        date: "01/12/2023",
        batch: "02",
        message:
          "This the best institute i ever seen.I love the environment .All our mam & sir are so much friendly & helpfull.Thank you Creative It uttara branch.",
      },
    ];

    return (
      <div className="course-Comment">
        <h1 className="text-[30px] font-[600] text-[#1F1F1F]  text-center">
          মন্তব্য
        </h1>
        <p className="text-[#1F1F1F] font-[400] text-[14px] pt-2 text-center md:px-5">
          আমরা বিশ্বাস করি আমাদের প্রতিটি শিক্ষার্থী ইউনিটেক বাংলাদেশ পরিবারের
          সদস্য। তাই শিক্ষার্থীদের যেকোনো গঠনমূলক মন্তব্য আমাদের ভুল-ত্রুটি
          শুধরে সামনে এগিয়ে চলার পথে প্রেরণা যোগায়।
        </p>
        <Slider {...settings}>
          {academicData?.map((student) => (
            <div className="md:p-5 p-1 mt-3" key={student.id}>
              <div className="academic-card md:mx-10 mx-3 px-4 pb-5 pt-3 rounded-lg  py-2">
                <div>
                  <div className="flex items-center gap-2 ps-2 pb-2">
                    <Image
                      width={90}
                      height={90}
                      className="rounded-full"
                      src={studentProfile}
                      alt=""
                    />
                    <div className="d">
                      <h1 className="text-start text-[18px] SILIGURI text-[#1F1F1F] font-bold ">
                        Arifuzz
                        <p className="text-[12px] text-amber-600">student</p>
                      </h1>

                      <Image
                        className="w-[50px] h-[22px] mt-[5px]"
                        src={stare}
                        alt=""
                      />
                    </div>

                    <Image
                      className="w-[80px] h-[58px] ms-10 md:ms-14 "
                      src={dot}
                      alt=""
                    />
                  </div>

                  <div className="bg-slate-500 h-[1px]"></div>
                  <div className="flex justify-center mt-5">
                    <div>
                      <h1 className="font-bold text-[18px] ">
                        A Professional Website that Turly Cares
                      </h1>{" "}
                      <p className="text-[14px] pt-3 SILIGURI ">
                        {student?.message && student.message.slice(0, 150)}
                        more..
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* <div className="flex gap-2 justify-center my-10">
          <button className="px-[16px] py-[12px] bg-[#040714] text-white uppercase rounded-md text-[16px] flex items-center gap-1">
            Write A Review
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
            >
              <path
                fill="#f5f5f5"
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
              />
            </svg>
          </button>
        </div> */}
      </div>
    );
  }
}
