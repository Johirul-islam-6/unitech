import React, { Component } from "react";
import Slider from "react-slick";
import "./Project.css";
import image1 from "@/app/Assets/Archtctural landing page/project/1.jpeg";
import image2 from "@/app/Assets/Archtctural landing page/project/2.jpeg";
import image3 from "@/app/Assets/Archtctural landing page/project/3.jpeg";
import image4 from "@/app/Assets/Archtctural landing page/project/4.jpeg";
import image5 from "@/app/Assets/Archtctural landing page/project/5.jpeg";
import image6 from "@/app/Assets/Archtctural landing page/project/6.png";
import Image from "next/image";

export default class ProjectSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayImage: image6,
    };
  }

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
        image: image1,
      },
      {
        id: "2",
        image: image2,
      },
      {
        id: "3",
        image: image3,
      },
      {
        id: "4",
        image: image4,
      },
      {
        id: "5",
        image: image5,
      },
    ];

    return (
      <>
        <div className="flex justify-center items-center p-2 rounded-md">
          <Image
            className="project-main-image border-4 rounded-md"
            src={this.state.displayImage}
            alt=""
          />
        </div>
        <div className=" mt-3">
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
