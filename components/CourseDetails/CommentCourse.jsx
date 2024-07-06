"use client";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Comment.css";
import studentProfile from "@/app/Assets/skill_courses_details/Review/image.png";
import stare from "@/app/Assets/skill_courses_details/Review/Star.png";
import dot from "@/app/Assets/skill_courses_details/Review/dot.png";
import Image from "next/image";
import axios from "axios";

const CommentCourse = ({ singleCourses }) => {
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

  const [loading, setLoading] = useState(true);
  const [review, setReview] = useState([]);
  const [filteredReview, setFilteredReview] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `https://api.unitechbangladesh.com/api/v1/review`
        );
        const reviews = result?.data?.data;
        setReview(reviews);

        // Assuming you want to filter reviews where a specific field meets a certain condition
        const filteredData = reviews.filter(
          (review) => review?.SBatch === singleCourses?.CCategory
        );
        setFilteredReview(filteredData);

        console.log("insite", filteredData);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [singleCourses?.CCategory]);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(filteredReview, review, "all ceta");

  return (
    <div className="course-Comment mt-10 md:mt-0">
      <h1 className="text-[25px] font-[600] text-[#1F1F1F] text-center">
        মন্তব্য
      </h1>
      <p className="text-[#1f1f1f9f] font-[600] text-[14px] text-center px-6 md:px-5 pt-1">
        আমাদের শিক্ষার্থীরা ইউনিটেক পরিবারের সদস্য, তাদের মন্তব্য আমাদের
        প্রেরণা।
      </p>
      <Slider {...settings}>
        {filteredReview?.map((student) => (
          <div className="md:p-5 p-1 mt-3" key={student.id}>
            <div className="academic-card md:mx-10 mx-3 px-4 pb-5 pt-3 rounded-lg py-2">
              <div>
                <div className="flex items-center gap-2 ps-2 pb-2">
                  <Image
                    width={50}
                    height={50}
                    className="rounded-full border-2 border-amber-700 object-cover p-[2px] md:w-[60px] md:h-[60px]"
                    src={student?.SImage}
                    alt=""
                  />
                  <div className="md:ps-4">
                    <h1 className="text-start text-[18px] SILIGURI text-[#1F1F1F] font-bold ">
                      {student?.SName}
                      <p className="text-[12px] text-amber-600"></p>
                    </h1>
                    <Image
                      className="w-[50px] h-[22px] mt-[5px]"
                      src={stare}
                      alt=""
                    />
                  </div>
                  <Image
                    className="w-[60px] h-[48px] ms-10 md:ms-14"
                    src={dot}
                    alt=""
                  />
                </div>
                <div className="bg-slate-500 h-[1px]"></div>
                <div className="flex justify-center mt-5 md:px-5">
                  <div>
                    <h1 className="font-bold text-[16px] text-[#000000a9] SILIGURI">
                      Course : {student?.SBatch}
                    </h1>
                    <p className="text-[14px] pt-2 pb-2 SILIGURI">
                      {student?.message && student.message.slice(0, 150)} ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CommentCourse;
