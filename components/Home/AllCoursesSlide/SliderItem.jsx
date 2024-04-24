"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "./Image.css";
import course1 from "@/app/Assets/স্পেশাল Courses/course1.jpg";
import Image from "next/image";
import Link from "next/link";

export default class SliderItem extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1250, // define breakpoint for lg screens
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 992, // define breakpoint for md screens
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768, // define breakpoint for sm screens
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 520, // define breakpoint for sm screens
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    const Courses = [
      {
        id: "1",
        title: "Industrial Attachment",
        department: "Computer Technology",
        image: course1,
      },
      {
        id: "2",
        title: "Industrial Attachment",
        department: "Architecture Technology",
        image: course1,
      },
      {
        id: "3",
        title: "Industrial Attachment",
        department: "Civil Technology",
        image: course1,
      },
      {
        id: "4",
        title: "Industrial Attachment",
        department: "Civil Technology",
        image: course1,
      },
      {
        id: "5",
        title: "Industrial Attachment",
        department: "Civil Technology",
        image: course1,
      },
    ];
    return (
      <div className="md:px-10 mt-10">
        <Slider className="" {...settings}>
          {Courses.map((single) => (
            <div key={single?.id} className="card flex p-1">
              <div className="card-insite block border-2 rounded-md ">
                <div className=" pb-2 flex justify-center items-center pt-1">
                  <Image
                    width={280}
                    height={320}
                    className="rounded-lg p-1"
                    src={single?.image}
                    alt=""
                  />
                </div>

                <div className="content ">
                  <h2 className="course-title SILIGURI">{single?.title}</h2>
                  <h2 className="text-[16px] SILIGURI">{single?.department}</h2>

                  <Link href={"/"}>
                    <button className="booking-btn SILIGURI">জয়েন করুন</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
