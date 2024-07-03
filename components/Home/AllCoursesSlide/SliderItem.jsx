"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Image.css";
import Computer from "@/app/Assets/All Courses Image/atachment/Computer.jpeg";
import Civil from "@/app/Assets/All Courses Image/atachment/Civil.jpeg";
import Architecture from "@/app/Assets/All Courses Image/atachment/architecture.jpeg";
import Image from "next/image";
import logo from "@/app/Assets/Navbar/LOGO.png";
import Swal from "sweetalert2";
import axios from "axios";

const SliderItem = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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

  const Courses = [
    {
      id: "2",
      title: "Industrial Attachment",
      department: "Architecture Technology",
      image: Architecture,
    },
    {
      id: "3",
      title: "Industrial Attachment",
      department: "Civil Technology",
      image: Civil,
    },
    {
      id: "1",
      title: "Industrial Attachment",
      department: "Computer Technology",
      image: Computer,
    },
    {
      id: "4",
      title: "Industrial Attachment",
      department: "Computer Technology",
      image: Computer,
    },
    {
      id: "6",
      title: "Industrial Attachment",
      department: "Civil Technology",
      image: Civil,
    },
    {
      id: "5",
      title: "Industrial Attachment",
      department: "Architecture Technology",
      image: Architecture,
    },
  ];

  const [ModalOpen, setModal] = useState(false);
  const [modelData, setModalData] = useState(false);

  const BookingAttachment = (data) => {
    setModal(true);
    setModalData(data);
  };

  const [ip, setIp] = useState("");

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await axios.get("https://api.ipify.org?format=json");
        setIp(response.data.ip);
      } catch (error) {
        console.error("Error fetching the IP address:", error);
      }
    };

    fetchIp();
  }, []);

  console.log(ip);
  // -----------submit data --------

  const [buttonHidden, setHidden] = useState(false);

  // Date genarate---
  const today = new Date();
  const padZero = (num) => {
    return num < 10 ? "0" + num : num;
  };

  // Format the date to DD/MM/YYYY
  const formattedDate = `${padZero(today.getDate())}/${padZero(
    today.getMonth() + 1
  )}/${today.getFullYear()}`;

  const handelDataSubmit = async (e) => {
    e.preventDefault();
    const name = e.target?.name?.value;
    const inistitute = e.target?.inistitute?.value;
    const department = e.target?.department?.value;
    const phone = e.target?.phone?.value;
    const todaydate = formattedDate.toString();
    const unique = ip + todaydate;

    const enrollData = {
      name,
      inistitute,
      department,
      phone,
      BookingDate: formattedDate,
      ip,
      unique,
    };
    setHidden(true);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/attachments/create",
        enrollData,
        {
          maxContentLength: 1000000000000,
        }
      );
      const result = response.data;

      // if get the data then save
      if (result?.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "খুব শীঘ্রই আমাদের টিম আপনার সাথে যোগাযোগ করবে । ",
          text: `ধন্যবাদ ।`,

          showConfirmButton: false,
          timer: 5000,
        });

        setModal(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);

      Swal.fire({
        title: ` কালকে নতুন করে Attachment বুকিং করবেন`,
        text: ` আজকের টা আপনি বুকিং করে ফেলেছেন।`,
        icon: "error",
      });
      setHidden(false);
    }

    setHidden(false);
  };

  return (
    <div className="md:px-10 mt-10 relative">
      {ModalOpen && (
        <>
          <div className=" absolute w-[100%] h-[100vh]  top-[-400px] z-10 flex rounded-lg items-center justify-center bg-[#0000004c]">
            <form
              className="bg-white p-6 rounded shadow-md w-full max-w-md "
              onSubmit={handelDataSubmit}
            >
              <div className="flex justify-center">
                <Image
                  width={100}
                  height={80}
                  src={logo}
                  className=" "
                  alt=""
                />
              </div>
              <h2 className="pt-3 text-[18px] text-center md:text-[20px]  text-[#030303d2] GT">
                Welcome Our Attachment✋
              </h2>
              <div className=" mt-5">
                <label className="block text-gray-500 GT text-[16px] font-[600]">
                  Student Name*
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1 block w-full p-2 border border-gray-200 rounded-md text-[16px] SILIGURI"
                  placeholder="student full name."
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-500 GT text-[16px] font-[600]">
                  Student inistitute*
                </label>
                <input
                  type="text"
                  name="inistitute"
                  required
                  className="mt-1 block w-full p-2 border border-gray-200 rounded-md text-[16px] SILIGURI"
                  placeholder="student inistitute name."
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-500 GT text-[16px] font-[600]">
                  Student Subject/Department*
                </label>
                <input
                  type="text"
                  name="department"
                  required
                  defaultValue={modelData?.department}
                  className="mt-1 block w-full p-2 border border-gray-200 rounded-md text-[16px] SILIGURI"
                  placeholder=" student department name."
                />
              </div>
              <div className="mt-3 mb-6">
                <label className="block text-gray-500 GT text-[16px] font-[600]">
                  Contact Number*
                </label>
                <input
                  type="text"
                  name="phone"
                  required
                  className="mt-1 block w-full p-2 border border-gray-200 rounded-md text-[16px] SILIGURI"
                  placeholder=" student phone number."
                />
              </div>
              <div className="flex  md:flex-row gap-4">
                <button
                  onClick={() => setModal(false)}
                  className="w-full bg-[#F99523] text-white p-2 rounded-md hover:bg-[#d6801f]"
                >
                  বাতিল করুন
                </button>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                  পাঠিয়ে দিন
                </button>
              </div>
            </form>
          </div>
        </>
      )}

      <Slider className="" {...settings}>
        {Courses.map((single) => (
          <div key={single?.id} className="card flex p-1">
            <div className="card-insite block border-2 rounded-md ">
              <div className="pb-2 flex justify-center items-center pt-1">
                <Image
                  width={280}
                  height={320}
                  className="rounded-lg p-1"
                  src={single?.image}
                  alt=""
                />
              </div>

              <div className="content ">
                <h2 className="course-title SILIGURI">{single?.title}</h2>
                <h2 className="text-[17px] SILIGU5I">{single?.department}</h2>

                <div onClick={() => BookingAttachment(single)}>
                  <button className="booking-btn SILIGURI">জয়েন করুন</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderItem;
