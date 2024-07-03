"use client";
import "./Banner.css";
import image1 from "@/app/Assets/Banner/banner1.png";
import BannerLImage from "@/app/Assets/Banner/bannerL1.png";
import image2 from "@/app/Assets/Banner/banner2.jpg";
import image3 from "@/app/Assets/Banner/banner3.jpg";
import image4 from "@/app/Assets/Banner/banner4.jpg";
import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";

export const Banner = () => {
  useEffect(() => {
    let cliecourseImage = document.querySelector(".clickImage");
    let nextBtn = document.querySelector(".next");
    let prevBtn = document.querySelector(".prev");
    let slider = document.querySelector(".slider");
    let sliderList = slider.querySelector(".list");
    let thumbnail = document.querySelector(".thumbnail");
    let thumbnailItems = thumbnail.querySelectorAll(".item");

    thumbnail.appendChild(thumbnailItems[0]);

    // Function for next button
    cliecourseImage.onclick = function () {
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

  //  ------------- total site visitor --------------------
  useEffect(() => {
    async function viewCount() {
      try {
        const response = await axios.patch(
          `https://api.unitechbangladesh.com/api/v1/siteView/view/66501be73b986cc58347cd43`
        );
        const result = response.data;

        // if get the data then save
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    viewCount();
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* ----------Banner image slider ----------- */}
      <div className="slider">
        <div className="list">
          <div className="item">
            <Image
              className="img-fluid"
              width={1200}
              height={800}
              src={image1}
              alt=""
            />

            <div className="slide_content ">
              <div className="title">দক্ষ হবো </div>
              <div className="type">ইউনিটেক এর সাথে</div>
              <div className="description py-5 text-justify">
                ডিপ্লোমা একাডেমিক সেমিস্টার কোর্সের মূল্যায়নের পরিপূর্ণ বিবরণ
                অনুসারে, এই প্রোগ্রামটি সম্পন্ন করার সময়ে ছাত্র-ছাত্রীদের
                বিভিন্ন বিষয়ে গভীর জ্ঞান এবং প্রোফেশনাল দক্ষতা অর্জন করার সুযোগ
                প্রদান করে।
              </div>
              <div className="button">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>

          <div className="item">
            <Image
              className="img-fluid"
              width={1200}
              height={800}
              src={image2}
              alt=""
            />

            <div className="slide_content ">
              <div className="title">দক্ষ হবো </div>
              <div className="type">ইউনিটেক এর সাথে</div>
              <div className="description py-5 text-justify">
                ডিপ্লোমা একাডেমিক সেমিস্টার কোর্সের মূল্যায়নের পরিপূর্ণ বিবরণ
                অনুসারে, এই প্রোগ্রামটি সম্পন্ন করার সময়ে ছাত্র-ছাত্রীদের
                বিভিন্ন বিষয়ে গভীর জ্ঞান এবং প্রোফেশনাল দক্ষতা অর্জন করার সুযোগ
                প্রদান করে।
              </div>
              <div className="button">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>

          <div className="item">
            <Image
              className="img-fluid"
              width={1200}
              height={800}
              src={image4}
              alt=""
            />
            <div className="slide_content ">
              <div className="title">দক্ষ হবো </div>
              <div className="type">ইউনিটেক এর সাথে</div>
              <div className="description py-5 text-justify">
                ডিপ্লোমা একাডেমিক সেমিস্টার কোর্সের মূল্যায়নের পরিপূর্ণ বিবরণ
                অনুসারে, এই প্রোগ্রামটি সম্পন্ন করার সময়ে ছাত্র-ছাত্রীদের
                বিভিন্ন বিষয়ে গভীর জ্ঞান এবং প্রোফেশনাল দক্ষতা অর্জন করার সুযোগ
                প্রদান করে।
              </div>
              <div className="button">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>

          <div className="item">
            <Image
              className="img-fluid"
              width={1200}
              height={800}
              src={image3}
              alt=""
            />

            <div className="slide_content ">
              <div className="title">দক্ষ হবো </div>
              <div className="type">ইউনিটেক এর সাথে</div>
              <div className="description py-5 text-justify">
                ডিপ্লোমা একাডেমিক সেমিস্টার কোর্সের মূল্যায়নের পরিপূর্ণ বিবরণ
                অনুসারে, এই প্রোগ্রামটি সম্পন্ন করার সময়ে ছাত্র-ছাত্রীদের
                বিভিন্ন বিষয়ে গভীর জ্ঞান এবং প্রোফেশনাল দক্ষতা অর্জন করার সুযোগ
                প্রদান করে।
              </div>
              <div className="button">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
        </div>

        <div className="thumbnail">
          <div className="item clickImage cursor-pointer">
            <Image width={600} height={400} src={image1} alt="" />
          </div>
          <div className="item clickImage cursor-pointer ">
            <Image width={600} height={400} src={image2} alt="" />
          </div>
          <div className="item clickImage cursor-pointer">
            <Image width={600} height={400} src={image3} alt="" />
          </div>
          <div className="item clickImage cursor-pointer">
            <Image width={600} height={400} src={image4} alt="" />
          </div>
        </div>

        <div className="nextPrevArrows">
          <button className="prev"> {"<"} </button>
          <button className="next"> {">"} </button>
        </div>
      </div>
    </div>
  );
};
