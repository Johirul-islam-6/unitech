"use client";
import Slider from "react-slick";
import React, { Component, lazy } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s1 from "@/app/Assets/studentInfo/1.jpg";
import s2 from "@/app/Assets/studentInfo/autocad_class.jpg";
import s3 from "@/app/Assets/studentInfo/3.jpg";
import s4 from "@/app/Assets/studentInfo/4.jpg";
import s5 from "@/app/Assets/studentInfo/5.jpg";
import s6 from "@/app/Assets/studentInfo/6.jpg";
import s7 from "@/app/Assets/studentInfo/7.jpg";
import s8 from "@/app/Assets/studentInfo/2.jpg";
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
              <div className="border-4 h-[260px]">
                <Image
                  width={0}
                  height={0}
                  className="h-[100%]"
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
