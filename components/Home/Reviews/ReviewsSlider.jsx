"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";
import axios from "axios";
import "./ReviewCard.css";

const ReviewsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

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

  const [loading, setLoading] = useState(true);
  const [review, setreview] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `https://api.unitechbangladesh.com/api/v1/review`
        );
        setreview(result?.data?.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="md:px-10 ">
      <Slider {...settings}>
        {review.map((student, index) => (
          <div key={index} className="reviewCard-container ">
            <div className="reviewCard md:h-[310px] border-2 flex flex-col justify-center items-center px-5 py-2 pb-5">
              <div className="flex flex-col justify-center">
                <Image
                  width={0}
                  height={0}
                  className=""
                  src={student?.SImage}
                  alt=""
                />
                <Image
                  width={50}
                  height={50}
                  className="border-2 border-amber-700 w-[80px] h-[80px] flex object-cover p-[3px] justify-center mx-auto rounded-full"
                  src={student?.SImage}
                  objectFit="contain"
                  alt=""
                />
                <h1 className="text-center text-[16px] pt-1 font-[600] text-[#3e54a3]">
                  {student?.SName?.slice(0, 16)}
                </h1>
                <p className="text-[12px] text-[#00000090]">
                  {student?.SBatch}
                </p>
              </div>
              <span>
                <FaQuoteRight className="text-[25px] text-[#e28e11e6] mt-2" />
              </span>
              <h2 className="text-[16px] text-start SILIGURI mt-3 ">
                {student?.message.slice(0, 130)}...
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewsSlider;
