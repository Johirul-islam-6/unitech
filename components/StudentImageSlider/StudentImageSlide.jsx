import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";

import s1 from "@/app/Assets/studentInfo/1.jpg";
import s2 from "@/app/Assets/studentInfo/autocad_class.jpg";
import s3 from "@/app/Assets/studentInfo/3.jpg";
import s4 from "@/app/Assets/studentInfo/4.jpg";
import s5 from "@/app/Assets/studentInfo/5.jpg";
import s6 from "@/app/Assets/studentInfo/6.jpg";
import s7 from "@/app/Assets/studentInfo/7.jpg";
import s8 from "@/app/Assets/studentInfo/2.jpg";

export default class StudentImageSlide extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       displayImage: image6,
  //     };
  //   }

  handleImageClick = (image) => {
    this.setState({ displayImage: image });
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
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
            slidesToShow: 2,
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
        image: s4,
      },
      {
        id: "5",
        image: s5,
      },
      {
        id: "6",
        image: s6,
      },
      {
        id: "7",
        image: s7,
      },
      {
        id: "8",
        image: s8,
      },
    ];

    return (
      <>
        {/* <div className="flex justify-center items-center p-2 rounded-md">
          <Image
            className="project-main-image border-4 rounded-md"
            src={this.state.displayImage}
            alt=""
          />
        </div> */}
        <div className="pb-5">
          <Slider {...settings}>
            {academicData?.map((data) => (
              <div key={data?.id}>
                <div className="p-3">
                  <div
                    onClick={() => this.handleImageClick(data.image)}
                    className="border-4"
                  >
                    <Image
                      className="object-cover project-image"
                      src={data?.image}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </>
    );
  }
}
