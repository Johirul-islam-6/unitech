"use client";
import "./Banner.css";
import image1 from "@/app/Assets/image/dow.jpg";
import image2 from "@/app/Assets/image/img2.jpg";
import image3 from "@/app/Assets/image/img3.jpg";
import image4 from "@/app/Assets/image/img4.jpg";
import Image from "next/image";
import { useEffect } from "react";

export const Banner = () => {
  useEffect(() => {
    let cliecImage = document.querySelector(".clickImage");
    let nextBtn = document.querySelector(".next");
    let prevBtn = document.querySelector(".prev");
    let slider = document.querySelector(".slider");
    let sliderList = slider.querySelector(".list");
    let thumbnail = document.querySelector(".thumbnail");
    let thumbnailItems = thumbnail.querySelectorAll(".item");

    thumbnail.appendChild(thumbnailItems[0]);

    // Function for next button
    cliecImage.onclick = function () {
      moveSlider("next");
    };

    // Function for next button
    nextBtn.onclick = function () {
      moveSlider("next");
    };

    // Function for prev button
    prevBtn.onclick = function () {
      moveSlider("prev");
    };

    // Function for automatic sliding
    let intervalId = setInterval(function () {
      moveSlider("next");
    }, 5000); // Slide every 2 seconds
    0;
    // Function to stop automatic sliding on button click
    function stopAutomaticSlide() {
      clearInterval(intervalId);
    }

    function moveSlider(direction) {
      let sliderItems = sliderList.querySelectorAll(".item");
      let thumbnailItems = document.querySelectorAll(".thumbnail .item");

      if (direction === "next") {
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add("next");
      } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider.classList.add("prev");
      }

      slider.addEventListener(
        "animationend",
        function () {
          if (direction === "next") {
            slider.classList.remove("next");
          } else {
            slider.classList.remove("prev");
          }
        },
        { once: true }
      );
    }

    // Clean up function to clear the interval when component unmounts or re-renders
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* ----------Banner image slider ----------- */}
      <div class="slider">
        <div class="list">
          <div class="item">
            <Image
              className="slide_image"
              width={1200}
              height={800}
              src={image1}
              alt=""
            />

            <div class="slide_content">
              <div class="title">একটাই লক্ষ্য </div>
              <div class="type">হতে হবে দক্ষ</div>
              <div class="description">
                ডিপ্লোমা একাডেমিক সেমিস্টার কোর্সের মূল্যায়নের পরিপূর্ণ বিবরণ
                অনুসারে, এই প্রোগ্রামটি সম্পন্ন করার সময়ে ছাত্র-ছাত্রীদের
                বিভিন্ন বিষয়ে গভীর জ্ঞান এবং প্রোফেশনাল দক্ষতা অর্জন করার সুযোগ
                প্রদান করে।
              </div>
              <div class="button">
                <button className="text-black rounded-md ">SEE MORE</button>
              </div>
            </div>
          </div>

          <div class="item">
            <Image width={1200} height={800} src={image2} alt="" />

            <div class="slide_content">
              <div class="title">দক্ষ হবো </div>
              <div class="type">ইউনিটেক এর সাথে</div>
              <div class="description text-justify">
                ডিপ্লোমা একাডেমিক সেমিস্টার কোর্সের মূল্যায়নের পরিপূর্ণ বিবরণ
                অনুসারে, এই প্রোগ্রামটি সম্পন্ন করার সময়ে ছাত্র-ছাত্রীদের
                বিভিন্ন বিষয়ে গভীর জ্ঞান এবং প্রোফেশনাল দক্ষতা অর্জন করার সুযোগ
                প্রদান করে।
              </div>
              <div class="button">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>

          <div class="item">
            <Image width={1200} height={800} src={image4} alt="" />

            <div class="slide_content">
              <div class="title">MAGIC SLIDER</div>
              <div class="type">PLANT</div>
              <div class="description">
                ডিপ্লোমা একাডেমিক সেমিস্টার কোর্সের মূল্যায়নের পরিপূর্ণ বিবরণ
                অনুসারে, এই প্রোগ্রামটি সম্পন্ন করার সময়ে ছাত্র-ছাত্রীদের
                বিভিন্ন বিষয়ে গভীর জ্ঞান এবং প্রোফেশনাল দক্ষতা অর্জন করার সুযোগ
                প্রদান করে।
              </div>
              <div class="button">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>

          <div class="item">
            <Image width={1200} height={800} src={image3} alt="" />

            <div class="slide_content">
              <div class="title">MAGIC SLIDER</div>
              <div class="type">NATURE</div>
              <div class="description">
                ডিপ্লোমা একাডেমিক সেমিস্টার কোর্সের মূল্যায়নের পরিপূর্ণ বিবরণ
                অনুসারে, এই প্রোগ্রামটি সম্পন্ন করার সময়ে ছাত্র-ছাত্রীদের
                বিভিন্ন বিষয়ে গভীর জ্ঞান এবং প্রোফেশনাল দক্ষতা অর্জন করার সুযোগ
                প্রদান করে।
              </div>
              <div class="button">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
        </div>

        <div class="thumbnail">
          <div class="item clickImage cursor-pointer">
            <Image width={600} height={400} src={image1} alt="" />
          </div>
          <div class="item clickImage cursor-pointer ">
            <Image width={600} height={400} src={image2} alt="" />
          </div>
          <div class="item clickImage cursor-pointer">
            <Image width={600} height={400} src={image3} alt="" />
          </div>
          <div class="item clickImage cursor-pointer">
            <Image width={600} height={400} src={image4} alt="" />
          </div>
        </div>

        <div class="nextPrevArrows">
          <button class="prev"> {"<"} </button>
          <button class="next"> {">"} </button>
        </div>
      </div>
    </div>
  );
};
