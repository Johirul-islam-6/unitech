import Image from "next/image";
import React from "react";
import "./Achieve.css";
import img1 from "@/app/Assets/AchieveCourses/1.png";
import img2 from "@/app/Assets/AchieveCourses/2.png";
import img3 from "@/app/Assets/AchieveCourses/3.png";
import img4 from "@/app/Assets/AchieveCourses/4.png";
import img5 from "@/app/Assets/AchieveCourses/5.png";
import img6 from "@/app/Assets/AchieveCourses/6.png";
import coding from "@/app/Assets/AchieveCourses/post-1.jpg";
import skill from "@/app/Assets/AchieveCourses/post-2.jpg";
import Link from "next/link";

export const AchieveCourses = () => {
  const StudentInfo = [
    {
      id: "1",
      title: "ইন্ডাস্ট্রি ফোকাসড লাইভ কোর্সেস",
      paragrap:
        "জয়েন করুন গাইডলাইন সমৃদ্ধ ইন্ডাস্ট্রি ফোকাসড লাইভ কোর্সে, শুরু করুন আপনার ক্যারিয়ারের জার্নি।",
      image: img1,
    },
    {
      id: "2",
      title: "ইন্টারেকটিভ লাইভ ক্লাস",
      paragrap:
        "ইন্ডাস্ট্রি এক্সপার্টদের সাথে নিয়মিত লাইভ ক্লাস, কনসেপচুয়াল ক্লাস আর সাপোর্ট ক্লাসে স্কিল ডেভেলপমেন্ট এখন হবে একদম পরিপুর্ন।",
      image: img2,
    },
    {
      id: "3",
      title: "মডিউল ভিত্তিক স্টাডি প্ল্যান",
      paragrap:
        "কুইজ, এসাইনমেন্ট আর লাইভ এক্সাম দিয়ে সাজানো মডিউলভিত্তিক গোছানো স্টাডিপ্ল্যানের সাথে ছিটকে পড়ার কোনো চান্সই নেই।",
      image: img3,
    },
    {
      id: "4",
      title: "রিয়েলটাইম প্রোগ্রেস ট্র্যাকিং",
      paragrap:
        "ট্র্যাক করুন আপনার প্রোগ্রেস রিয়েল টাইম, দেখে নিন লিডার বোর্ডে আপনার পজিশন আর কম্পিটিশনে এগিয়ে যান সবার থেকে।",
      image: img4,
    },
    {
      id: "5",
      title: "শিখুন ইন্ডাস্ট্রি এক্সপার্টদের থেকে লাইভে",
      paragrap:
        "স্কিল ডেভেলপ করুন ইন্ডাস্ট্রির সেরা এক্সপার্টদের সাথে, প্রশ্ন করুন আর শিখে নিন সরাসরি, লাইভে।  ",
      image: img5,
    },
    {
      id: "6",
      title: "ইন্টেন্সিভ জব প্লেসমেন্ট সাপোর্ট",
      paragrap:
        "কোর্স কমপ্লিটে পাচ্ছেন জব প্লেসমেন্ট টিমের থেকে লাইফটাইম সিভি, প্রোফাইল বিল্ড এবং জব এপ্লিকেশনসহ ইন্টেন্সিভ জব প্লেসমেন্ট সাপোর্ট। ",
      image: img6,
    },
  ];

  return (
    <>
      <div>
        <div className="mt-20">
          <h1 className="text-center text-[1.7rem] md:text-[2rem] font-[600] pt-5 SILIGURI">
            কি কি পাচ্ছেন লাইভ কোর্সে
          </h1>
          <h1 className="text-center achieveParagraph SILIGURI">
            দেখে নিন কি কি পাচ্ছেন ইউনিটেক লাইভ কোর্সে জয়েন করলে
          </h1>

          <div className="flex flex-col  gap-5 mt-10 grid-achiveve">
            {StudentInfo?.map((course, index) => (
              <>
                <div
                  key={course?.id}
                  className="AchieveCard border-2 flex flex-col justify-center items-center p-8 px-5 rounded-lg duration-300"
                >
                  <div className="image overflow-hidden">
                    <Image
                      width={100}
                      height={100}
                      className=" student-info-image"
                      src={course?.image}
                      alt=""
                    />
                  </div>
                  <h1 className="course-name mt-4 text-[#101828] text-center text-[18px] font-[600] SILIGURI">
                    {course?.title}
                  </h1>
                  <p className="SILIGURI text-center py-2 text-[#1d2939] text-[16px] ">
                    {course?.paragrap}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- coding knolodge ------ */}

      <div className="grid justify-center grid-cols-1 md:grid-cols-2  gap-8  mt-20">
        {/* ----------coding card-------- */}
        <div class=" border-2 card-box rounded-lg p-5">
          <div class="">
            <h1 class="text-center coding-title SILIGURI">
              আপনার শুরুটা হোক <br className="hidden md:flex" />
              গাইডলাইনের সঠিক <br className="hidden md:flex" />
              মাধ্যমে!
            </h1>
            <p class="text-center sub-title SILIGURI pt-5 ">
              আমাদের প্রতিষ্ঠানের একটাই লক্ষ্য শিক্ষার্থীদের হতে হবে দক্ষ, তাই
              লক্ষ্য হোক দক্ষ হওয়া।
            </p>

            <div className="flex justify-center my-8">
              <Link href={"/ourCourses"}>
                <button className="coding-btn uppercase">VIEW COURSE</button>
              </Link>
            </div>
          </div>
          <Image
            className="object-cover border-2 rounded-lg p-2 coding-image"
            width={1200}
            height={400}
            src={coding}
            alt=""
          />
        </div>
        {/* ----------Skill card-------- */}
        <div class=" border-2 card-box rounded-lg p-5">
          <div class="">
            <h1 class="text-center   coding-title SILIGURI">
              প্রযুক্তির যুগে নিজেকে <br className="hidden md:flex" /> এগিয়ে
              রাখতে স্কিল <br className="hidden md:flex" />
              তৈরি করুন
            </h1>
            <p class="text-center sub-title SILIGURI pt-5 ">
              ইউনিক এক্সপার্ট টিম এর সাথে নিজে দক্ষ করে গড়ে তুলুন। একটাই লক্ষ্য
              হতে হবে দক্ষ।
            </p>

            <div className="flex justify-center my-8">
              <Link href={"/ourCourses"}>
                <button className="coding-btn uppercase">VIEW COURSE</button>
              </Link>
            </div>
          </div>
          <Image
            className="object-cover border-2 rounded-lg p-2 coding-image"
            width={1200}
            height={400}
            src={skill}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
