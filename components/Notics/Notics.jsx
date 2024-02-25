"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import { NoticsCard } from "./NoticsCard";
import "./Notics.css";

export default class Notics extends Component {
  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      dots: true,
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      beforeChange: function (currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function (currentSlide) {
        console.log("after change", currentSlide);
      },
    };
    return (
      <div className="notics-div overflow-y-auto   border-shadow">
        <Slider {...settings}>
          <NoticsCard />
          <NoticsCard />
          <NoticsCard />
          <NoticsCard />
          <NoticsCard />
          <NoticsCard />
          <NoticsCard />
          <NoticsCard />
          <NoticsCard />
          <NoticsCard />
          <NoticsCard />
        </Slider>
      </div>
    );
  }
}
