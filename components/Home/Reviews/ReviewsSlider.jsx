"use client";
import Slider from "react-slick";
import "./ReviewCard.css";
import { ReviewCard } from "./ReviewCard";
import React, { Component } from "react";

export default class ReviewsSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: false,

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
    return (
      <div className="md:px-10 ">
        <Slider {...settings}>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </Slider>
      </div>
    );
  }
}
