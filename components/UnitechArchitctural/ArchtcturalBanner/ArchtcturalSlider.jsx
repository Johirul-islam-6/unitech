import React, { Component } from "react";
import Slider from "react-slick";
import "./Archtctural.css";
import ar1 from "@/app/Assets/Archtctural landing page/ar.jpg";
import phone from "@/app/Assets/Archtctural landing page/phone.jpg";
import Image from "next/image";

export default class ArchtcturalSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };

    const academicData = [
      {
        id: "1",
        name: "Plane your home in",
      },
      {
        id: "2",
        name: "2Plane your home in",
      },
    ];

    return (
      <div className="archtcturalSlider border-2 h-[auto] md:h-[auto] py-12  bg-[#fbfdf2] px-5 md:px-12  rounded-md mt-20">
        <Slider {...settings}>
          {academicData?.map((data) => (
            <div key={data?.id}>
              <div className="flex  items-center ">
                <div className="flex cursor-pointer flex-col md:flex-row gap-x-16  items-center bg-[#FFF] w-[100%]">
                  <Image
                    width={400}
                    height={400}
                    className="object-cover rounded-md"
                    src={ar1}
                    alt=""
                  />
                  <div className="contain-text  w-[100%] px-3 pt-5 md:pt-0">
                    <h1 className="text-[30px] font-[600]">
                      Plane your home in <br className="hidden md:flex" /> safe
                      hands
                    </h1>
                    <p className="text-[18px] font-[400] py-2">Only at</p>
                    <div className="flex items-center justify-between py-2">
                      <p className="text-[#AEAEAE]">Per floor</p>
                      <h1 className="text-[25px] font-[600]">BDT 5000/-</h1>
                    </div>
                    <div className="flex justify-center md:justify-start mt-2 items-center">
                      <Image
                        width={400}
                        className="object-cover"
                        src={phone}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
