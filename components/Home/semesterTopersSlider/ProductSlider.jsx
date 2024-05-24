"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

import { useEffect, useState } from "react";
import axios from "axios";

const ProductSlider = () => {
  const [Loading, setLoading] = useState(true);
  const [allToper, setAllToper] = useState("");

  useEffect(() => {
    // ------- academic courses--------
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://unitech-server.vercel.app/api/v1/toper`
        );
        setAllToper(result?.data?.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {Loading && (
        <>
          <div class="hidden mx-auto md:grid md:grid-cols-4 gap-8  items-center justify-center mt-5">
            <div class="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
              <div class="h-48 bg-gray-300"></div>
              <div class="px-6 py-4">
                <div class="h-6 bg-gray-300 mb-2"></div>
                <div class="h-4 bg-gray-300 w-2/3"></div>
              </div>
              <div class="px-6 pt-4 pb-2">
                <div class="h-4 bg-gray-300 w-1/4 mb-2"></div>
                <div class="h-4 bg-gray-300 w-1/2"></div>
              </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
              <div class="h-48 bg-gray-300"></div>
              <div class="px-6 py-4">
                <div class="h-6 bg-gray-300 mb-2"></div>
                <div class="h-4 bg-gray-300 w-2/3"></div>
              </div>
              <div class="px-6 pt-4 pb-2">
                <div class="h-4 bg-gray-300 w-1/4 mb-2"></div>
                <div class="h-4 bg-gray-300 w-1/2"></div>
              </div>
            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
              <div class="h-48 bg-gray-300"></div>
              <div class="px-6 py-4">
                <div class="h-6 bg-gray-300 mb-2"></div>
                <div class="h-4 bg-gray-300 w-2/3"></div>
              </div>
              <div class="px-6 pt-4 pb-2">
                <div class="h-4 bg-gray-300 w-1/4 mb-2"></div>
                <div class="h-4 bg-gray-300 w-1/2"></div>
              </div>
            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
              <div class="h-48 bg-gray-300"></div>
              <div class="px-6 py-4">
                <div class="h-6 bg-gray-300 mb-2"></div>
                <div class="h-4 bg-gray-300 w-2/3"></div>
              </div>
              <div class="px-6 pt-4 pb-2">
                <div class="h-4 bg-gray-300 w-1/4 mb-2"></div>
                <div class="h-4 bg-gray-300 w-1/2"></div>
              </div>
            </div>
          </div>
          <div className="md:hidden flex justify-center items-center">
            <div class="w-[100%] px-5 rounded overflow-hidden shadow-lg animate-pulse">
              <div class="h-48 bg-gray-300"></div>
              <div class="px-6 py-4">
                <div class="h-6 bg-gray-300 mb-2"></div>
                <div class="h-4 bg-gray-300 w-2/3"></div>
              </div>
              <div class="px-6 pt-4 pb-2">
                <div class="h-4 bg-gray-300 w-1/4 mb-2"></div>
                <div class="h-4 bg-gray-300 w-1/2"></div>
              </div>
            </div>
          </div>
        </>
      )}
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        speed={5000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        loop={true}
        breakpoints={{
          420: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1160: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1650: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          2000: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {allToper &&
          Array.isArray(allToper) &&
          allToper.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#fff] relative border-t-2 border-b-2 border-[#48444189] top-student-box-shadow  overflow-hidden rounded-lg flex flex-col gap-1 items-center justify-center mt-8 pb-4">
                <div className="toper-box">
                  <p className="text-[#ffffff] text-[12px] md:text-[18px] font-[900] absolute bg-[#e87432] right-[5px] top-[5px] p-1">
                    {/* {item?.CSession} */} ১ম
                  </p>
                  <Image
                    src={item?.ToperImage}
                    alt="Picture of product"
                    width={0}
                    height={0}
                    objectFit="cover"
                    className="toper-box object-cover p-1 rounded-lg border-2  "
                  />
                </div>
                <p className="text-[#000000d2] text-[16px] font-bold">
                  {item?.CName}
                </p>
                <p className=" text-[14px] text-[#292929d2] py-1">
                  {item?.CDepartment}
                </p>
                <p className=" text-[#e87e04d2] text-[12px] font-bold">
                  {item?.CCategory}
                </p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default ProductSlider;
