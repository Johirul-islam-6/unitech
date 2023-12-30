"use client";
import Slider from "react-slick";
import React, { Component, lazy } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s1 from "@/app/Assets/studentInfo/একাডেমিক ক্লাস চলাকালীন.jpg";
import s2 from "@/app/Assets/studentInfo/অটোক্যাড ক্লাস চলাকালীন.jpg";
import s3 from "@/app/Assets/studentInfo/প্রস্তুতিমূলক পরীক্ষা চলাকালীন সময়.jpg";
import s4 from "@/app/Assets/studentInfo/বার্ষিক শিক্ষা সফর ২০-২১.jpg";
import s5 from "@/app/Assets/studentInfo/ম্যাথমেটিক্স ক্লাস চলাকালীন.jpg";
import s6 from "@/app/Assets/studentInfo/শিক্ষার্থীদের নিয়ে ক্যারিয়ার মিটআপ.jpg";
import s7 from "@/app/Assets/studentInfo/সার্টিফিকেট প্রদানের সময়.jpg";
import s8 from "@/app/Assets/studentInfo/একাডেমিক পরিক্ষা  চলাকালীন.jpg";
import Image from "next/image";

export default class GallarySlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      pauseOnHover: false,

      responsive: [
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
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
        image: s1,
      },
      {
        id: "2",
        image: s2,
      },
      {
        id: "3",
        image: s3,
      },
      {
        id: "4",
        image: s5,
      },
      {
        id: "5",
        image: s6,
      },
      {
        id: "6",
        image: s7,
      },
      {
        id: "7",
        image: s8,
      },
    ];

    return (
      <div className="">
        <Slider {...settings}>
          {academicData?.map((student) => (
            <div className="md:p-1 p-2 " key={student.id}>
              <div className="border-4">
                <Image
                  width={400}
                  height={40}
                  className=""
                  src={student.image}
                  alt=""
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
