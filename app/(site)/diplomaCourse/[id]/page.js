"use client";
import StudentImageSlide from "@/components/StudentImageSlider/StudentImageSlide";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSquareFull, FaUserTie } from "react-icons/fa";

const DetailsCourse = () => {
  const { id } = useParams();

  const [academicCourses, setacademicCourses] = useState([]);
  // const [Loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const result = await axios.get(
  //         `https://unitech-server.vercel.app/api/v1/Academic-courses/${id}`
  //       );

  //       setSingelUser(result?.data?.data);

  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     setLoading(false);
  //   }

  //   fetchData();
  // }, [id]);

  const academicData = [
    {
      id: "1",
      durationTime: "6 months",
      totalClass: "140+",
      totalTest: "24+",
      totalExam: "6+",
      courseName: "১ম সেমিস্টার",
      perMonth: "প্রতি মাসে",
      taka: "১০০০",
      duration: "৬ মাস সেমিস্টার",
      total: "৬০০০",
      discription:
        "ডিপ্লোমা একাডেমিক সেমিস্টার কোর্সের মূল্যায়নের পরিপূর্ণ বিবরণ অনুসারে, এই প্রোগ্রামটি সম্পন্ন করার সময়ে ছাত্র-ছাত্রীদের বিভিন্ন বিষয়ে গভীর জ্ঞান এবং প্রোফেশনাল দক্ষতা অর্জন করার সুযোগ প্রদান করে। এই প্রোগ্রামে প্রত্যেকটি সেমিস্টারে শিক্ষার্থীদের উচ্চ মানের শিক্ষার্থি এবং উদ্ভাবনশীল শিক্ষকদের নির্দেশনায় নিজেকে পরিক্ষা করার সুযোগ দেওয়া হয়। এই কোর্সটি অন্ততঃ ত্রিস্থায়ী পরীক্ষায় অংশগ্রহণের পরিপ্রেক্ষিতে শিক্ষার্থীদের মূল্যায়ন করে, যা তাদেরকে পরবর্তী পর্যায়ে সঠিকভাবে কর্মক্ষমতা অর্জনে সাহায্য করে। এছাড়াও, এই প্রোগ্রামটি তাদেরকে ব্যক্তিগত এবং পেশাদার উন্নতির পথে পরিচিত করে তাদের পেশাদার ক্যারিয়ারের উজ্জ্বল পরিবর্তন করার জন্য একটি ভাল প্রস্তুত করে।",
    },
    {
      id: "2",
      durationTime: "6 months",
      totalClass: "135+",
      totalTest: "24+",
      totalExam: "6+",
      courseName: "২য় সেমিস্টার",
      perMonth: "প্রতি মাসে",
      taka: "১২০০",
      duration: "৬ মাসে সেমিস্টার",
      total: "৬০০০",
      discription:
        "ডিপ্লোমা একাডেমিক সেমিস্টার কোর্সের মূল্যায়নের পরিপূর্ণ বিবরণ অনুসারে, এই প্রোগ্রামটি সম্পন্ন করার সময়ে ছাত্র-ছাত্রীদের বিভিন্ন বিষয়ে গভীর জ্ঞান এবং প্রোফেশনাল দক্ষতা অর্জন করার সুযোগ প্রদান করে। এই প্রোগ্রামে প্রত্যেকটি সেমিস্টারে শিক্ষার্থীদের উচ্চ মানের শিক্ষার্থি এবং উদ্ভাবনশীল শিক্ষকদের নির্দেশনায় নিজেকে পরিক্ষা করার সুযোগ দেওয়া হয়। এই কোর্সটি অন্ততঃ ত্রিস্থায়ী পরীক্ষায় অংশগ্রহণের পরিপ্রেক্ষিতে শিক্ষার্থীদের মূল্যায়ন করে, যা তাদেরকে পরবর্তী পর্যায়ে সঠিকভাবে কর্মক্ষমতা অর্জনে সাহায্য করে। এছাড়াও, এই প্রোগ্রামটি তাদেরকে ব্যক্তিগত এবং পেশাদার উন্নতির পথে পরিচিত করে তাদের পেশাদার ক্যারিয়ারের উজ্জ্বল পরিবর্তন করার জন্য একটি ভাল প্রস্তুত করে।",
    },
    {
      id: "3",
      durationTime: "6 months",
      totalClass: "125+",
      totalTest: "20+",
      totalExam: "5+",
      courseName: "৩য় সেমিস্টার",
      perMonth: "প্রতি মাসে",
      taka: "১০০০",
      duration: "৬ মাসে সেমিস্টার",
      total: "৬০০০",
      discription:
        "ডিপ্লোমা একাডেমিক সেমিস্টার কোর্সের মূল্যায়নের পরিপূর্ণ বিবরণ অনুসারে, এই প্রোগ্রামটি সম্পন্ন করার সময়ে ছাত্র-ছাত্রীদের বিভিন্ন বিষয়ে গভীর জ্ঞান এবং প্রোফেশনাল দক্ষতা অর্জন করার সুযোগ প্রদান করে। এই প্রোগ্রামে প্রত্যেকটি সেমিস্টারে শিক্ষার্থীদের উচ্চ মানের শিক্ষার্থি এবং উদ্ভাবনশীল শিক্ষকদের নির্দেশনায় নিজেকে পরিক্ষা করার সুযোগ দেওয়া হয়। এই কোর্সটি অন্ততঃ ত্রিস্থায়ী পরীক্ষায় অংশগ্রহণের পরিপ্রেক্ষিতে শিক্ষার্থীদের মূল্যায়ন করে, যা তাদেরকে পরবর্তী পর্যায়ে সঠিকভাবে কর্মক্ষমতা অর্জনে সাহায্য করে। এছাড়াও, এই প্রোগ্রামটি তাদেরকে ব্যক্তিগত এবং পেশাদার উন্নতির পথে পরিচিত করে তাদের পেশাদার ক্যারিয়ারের উজ্জ্বল পরিবর্তন করার জন্য একটি ভাল প্রস্তুত করে।",
    },
    {
      id: "4",
      durationTime: "6 months",
      totalClass: "120+",
      totalTest: "24+",
      totalExam: "6+",
      courseName: "৪র্থ সেমিস্টার",
      perMonth: "প্রতি সাবটেজক্ট ",
      taka: "১৫০০",
      duration: "৬ মাসে মাত্র",
      total: "৬০০০",
      discription:
        "ডিপ্লোমা একাডেমিক সেমিস্টার কোর্সের মূল্যায়নের পরিপূর্ণ বিবরণ অনুসারে, এই প্রোগ্রামটি সম্পন্ন করার সময়ে ছাত্র-ছাত্রীদের বিভিন্ন বিষয়ে গভীর জ্ঞান এবং প্রোফেশনাল দক্ষতা অর্জন করার সুযোগ প্রদান করে। এই প্রোগ্রামে প্রত্যেকটি সেমিস্টারে শিক্ষার্থীদের উচ্চ মানের শিক্ষার্থি এবং উদ্ভাবনশীল শিক্ষকদের নির্দেশনায় নিজেকে পরিক্ষা করার সুযোগ দেওয়া হয়। এই কোর্সটি অন্ততঃ ত্রিস্থায়ী পরীক্ষায় অংশগ্রহণের পরিপ্রেক্ষিতে শিক্ষার্থীদের মূল্যায়ন করে, যা তাদেরকে পরবর্তী পর্যায়ে সঠিকভাবে কর্মক্ষমতা অর্জনে সাহায্য করে। এছাড়াও, এই প্রোগ্রামটি তাদেরকে ব্যক্তিগত এবং পেশাদার উন্নতির পথে পরিচিত করে তাদের পেশাদার ক্যারিয়ারের উজ্জ্বল পরিবর্তন করার জন্য একটি ভাল প্রস্তুত করে।",
    },
    {
      id: "5",
      durationTime: "6 months",
      totalClass: "120+",
      totalTest: "24+",
      totalExam: "5+",
      courseName: "৫ম সেমিস্টার",
      perMonth: "প্রতি সাবটেজক্ট",
      taka: "১৫০০",
      duration: "৬ মাসে মাত্র",
      total: "৬০০০",
      discription:
        "ডিপ্লোমা একাডেমিক সেমিস্টার কোর্সের মূল্যায়নের পরিপূর্ণ বিবরণ অনুসারে, এই প্রোগ্রামটি সম্পন্ন করার সময়ে ছাত্র-ছাত্রীদের বিভিন্ন বিষয়ে গভীর জ্ঞান এবং প্রোফেশনাল দক্ষতা অর্জন করার সুযোগ প্রদান করে। এই প্রোগ্রামে প্রত্যেকটি সেমিস্টারে শিক্ষার্থীদের উচ্চ মানের শিক্ষার্থি এবং উদ্ভাবনশীল শিক্ষকদের নির্দেশনায় নিজেকে পরিক্ষা করার সুযোগ দেওয়া হয়। এই কোর্সটি অন্ততঃ ত্রিস্থায়ী পরীক্ষায় অংশগ্রহণের পরিপ্রেক্ষিতে শিক্ষার্থীদের মূল্যায়ন করে, যা তাদেরকে পরবর্তী পর্যায়ে সঠিকভাবে কর্মক্ষমতা অর্জনে সাহায্য করে। এছাড়াও, এই প্রোগ্রামটি তাদেরকে ব্যক্তিগত এবং পেশাদার উন্নতির পথে পরিচিত করে তাদের পেশাদার ক্যারিয়ারের উজ্জ্বল পরিবর্তন করার জন্য একটি ভাল প্রস্তুত করে।",
    },
    {
      id: "6",
      durationTime: "6 months",
      totalClass: "120+",
      totalTest: "24+",
      totalExam: "6+",
      courseName: "৬ষ্ট সেমিস্টার",
      perMonth: "প্রতি সাবটেজক্ট ",
      taka: "১০০০",
      duration: "৬ মাসে মাত্র",
      total: "৬০০০",
      discription:
        "ডিপ্লোমা একাডেমিক সেমিস্টার কোর্সের মূল্যায়নের পরিপূর্ণ বিবরণ অনুসারে, এই প্রোগ্রামটি সম্পন্ন করার সময়ে ছাত্র-ছাত্রীদের বিভিন্ন বিষয়ে গভীর জ্ঞান এবং প্রোফেশনাল দক্ষতা অর্জন করার সুযোগ প্রদান করে। এই প্রোগ্রামে প্রত্যেকটি সেমিস্টারে শিক্ষার্থীদের উচ্চ মানের শিক্ষার্থি এবং উদ্ভাবনশীল শিক্ষকদের নির্দেশনায় নিজেকে পরিক্ষা করার সুযোগ দেওয়া হয়। এই কোর্সটি অন্ততঃ ত্রিস্থায়ী পরীক্ষায় অংশগ্রহণের পরিপ্রেক্ষিতে শিক্ষার্থীদের মূল্যায়ন করে, যা তাদেরকে পরবর্তী পর্যায়ে সঠিকভাবে কর্মক্ষমতা অর্জনে সাহায্য করে। এছাড়াও, এই প্রোগ্রামটি তাদেরকে ব্যক্তিগত এবং পেশাদার উন্নতির পথে পরিচিত করে তাদের পেশাদার ক্যারিয়ারের উজ্জ্বল পরিবর্তন করার জন্য একটি ভাল প্রস্তুত করে।",
    },
    {
      id: "7",
      durationTime: "6 months",
      totalClass: "122+",
      totalTest: "24+",
      totalExam: "6+",
      courseName: "৭ম সেমিস্টার",
      perMonth: "প্রতি সাবটেজক্ট ",
      taka: "১৫০০",
      duration: "৬ মাসে মাত্র",
      total: "৬০০০",
      discription:
        "ডিপ্লোমা একাডেমিক সেমিস্টার কোর্সের মূল্যায়নের পরিপূর্ণ বিবরণ অনুসারে, এই প্রোগ্রামটি সম্পন্ন করার সময়ে ছাত্র-ছাত্রীদের বিভিন্ন বিষয়ে গভীর জ্ঞান এবং প্রোফেশনাল দক্ষতা অর্জন করার সুযোগ প্রদান করে। এই প্রোগ্রামে প্রত্যেকটি সেমিস্টারে শিক্ষার্থীদের উচ্চ মানের শিক্ষার্থি এবং উদ্ভাবনশীল শিক্ষকদের নির্দেশনায় নিজেকে পরিক্ষা করার সুযোগ দেওয়া হয়। এই কোর্সটি অন্ততঃ ত্রিস্থায়ী পরীক্ষায় অংশগ্রহণের পরিপ্রেক্ষিতে শিক্ষার্থীদের মূল্যায়ন করে, যা তাদেরকে পরবর্তী পর্যায়ে সঠিকভাবে কর্মক্ষমতা অর্জনে সাহায্য করে। এছাড়াও, এই প্রোগ্রামটি তাদেরকে ব্যক্তিগত এবং পেশাদার উন্নতির পথে পরিচিত করে তাদের পেশাদার ক্যারিয়ারের উজ্জ্বল পরিবর্তন করার জন্য একটি ভাল প্রস্তুত করে।",
    },
    {
      id: "8",
      durationTime: "6 months",
      totalClass: "101+",
      totalTest: "15+",
      totalExam: "5+",
      courseName: "৮ম সেমিস্টার",
      perMonth: "ইন্ডাসট্রিয়াল এ্যাটাসমেন্ট",
      duration: "৬ মাসে মাত্র",
      taka: "১২০০০",
      total: "৬০০০",
      discription:
        "ডিপ্লোমা একাডেমিক সেমিস্টার কোর্সের মূল্যায়নের পরিপূর্ণ বিবরণ অনুসারে, এই প্রোগ্রামটি সম্পন্ন করার সময়ে ছাত্র-ছাত্রীদের বিভিন্ন বিষয়ে গভীর জ্ঞান এবং প্রোফেশনাল দক্ষতা অর্জন করার সুযোগ প্রদান করে। এই প্রোগ্রামে প্রত্যেকটি সেমিস্টারে শিক্ষার্থীদের উচ্চ মানের শিক্ষার্থি এবং উদ্ভাবনশীল শিক্ষকদের নির্দেশনায় নিজেকে পরিক্ষা করার সুযোগ দেওয়া হয়। এই কোর্সটি অন্ততঃ ত্রিস্থায়ী পরীক্ষায় অংশগ্রহণের পরিপ্রেক্ষিতে শিক্ষার্থীদের মূল্যায়ন করে, যা তাদেরকে পরবর্তী পর্যায়ে সঠিকভাবে কর্মক্ষমতা অর্জনে সাহায্য করে। এছাড়াও, এই প্রোগ্রামটি তাদেরকে ব্যক্তিগত এবং পেশাদার উন্নতির পথে পরিচিত করে তাদের পেশাদার ক্যারিয়ারের উজ্জ্বল পরিবর্তন করার জন্য একটি ভাল প্রস্তুত করে।",
    },
  ];

  const [academicCourse, setAcademicCourse] = useState(null);

  useEffect(() => {
    const course = academicData.find((course) => course.id === id);
    if (course) {
      setAcademicCourse(course);
    } else {
      // Handle case where course with given id is not found
      console.log("Course not found");
    }
  }, [id]);

  return (
    <>
      <div className=" max-w-screen-xl mx-auto">
        <div className="">
          <div className="flex flex-col-reverse md:grid grid-cols-2 gap-5 md:gap-x-10 justify-center items-center  py-10 h-[100%] ">
            <div className="container-text">
              <div className="">
                <h1 className="text-[20px] flex gap-2 items-center text-[#000000cd] md:text-[30px] font-bold md:text-start text-center SILIGURI">
                  <FaSquareFull className="text-[20px] ms-1 text-amber-600" />{" "}
                  {academicCourse?.courseName}
                  <span className="text-[18px] ps-2">
                    [{" Diploma Engineer "}]
                  </span>
                </h1>
                <div className="flex md:gap-5 gap-2 flex-wrap md:justify-start justify-center mt-5">
                  <div className="border-2 md:px-5 px-3 py-3 rounded-lg">
                    <p className="text-[14px] text-center text-slate-500">
                      Duration
                    </p>
                    <h1 className="text-[14px] text-center font-bold text-slate-800">
                      {" "}
                      {academicCourse?.durationTime}
                    </h1>
                  </div>
                  <div className="border-2 md:px-5 px-3 py-3 rounded-lg">
                    <p className="text-[14px] text-center text-slate-500">
                      Total Class
                    </p>
                    <h1 className="text-[14px] text-center font-bold text-slate-800">
                      {" "}
                      {academicCourse?.totalClass}
                    </h1>
                  </div>
                  <div className="border-2 md:px-5 px-3 py-3 rounded-lg">
                    <p className="text-[14px] text-center text-slate-500">
                      Class Test
                    </p>
                    <h1 className="text-[14px] text-center font-bold text-slate-800">
                      {" "}
                      {academicCourse?.totalTest}
                    </h1>
                  </div>
                  <div className="border-2 md:px-5 px-3 py-3 rounded-lg">
                    <p className="text-[14px] text-center text-slate-500">
                      Total Exams
                    </p>
                    <h1 className="text-[14px] text-center font-bold text-slate-800">
                      {" "}
                      {academicCourse?.totalExam}
                    </h1>
                  </div>
                  <div className="border-2 md:px-5 px-3 py-3 rounded-lg">
                    <p className="text-[14px] text-center text-slate-500">
                      Education tour
                    </p>
                    <h1 className="text-[14px] text-center font-bold text-slate-800">
                      {"One"}
                    </h1>
                  </div>
                </div>
                <p className="py-5  text-justify text-[17px] font-[400] SILIGURI">
                  {/* {academicCourses?.courseDescription} */} ডিপ্লোমা একাডেমিক
                  সেমিস্টার কোর্সের মূল্যায়নের পরিপূর্ণ বিবরণ অনুসারে, এই
                  প্রোগ্রামটি সম্পন্ন করার সময়ে ছাত্র-ছাত্রীদের বিভিন্ন বিষয়ে
                  গভীর জ্ঞান এবং প্রোফেশনাল দক্ষতা অর্জন করার সুযোগ প্রদান করে।
                  এই প্রোগ্রামে প্রত্যেকটি সেমিস্টারে শিক্ষার্থীদের উচ্চ মানের
                  শিক্ষার্থি এবং উদ্ভাবনশীল শিক্ষকদের নির্দেশনায় নিজেকে পরিক্ষা
                  করার সুযোগ দেওয়া হয়। এই কোর্সটি অন্ততঃ ত্রিস্থায়ী পরীক্ষায়
                  অংশগ্রহণের পরিপ্রেক্ষিতে শিক্ষার্থীদের মূল্যায়ন করে, যা
                  তাদেরকে পরবর্তী পর্যায়ে সঠিকভাবে কর্মক্ষমতা অর্জনে সাহায্য
                  করে। এছাড়াও, এই প্রোগ্রামটি তাদেরকে ব্যক্তিগত এবং পেশাদার
                  উন্নতির পথে পরিচিত করে তাদের পেশাদার ক্যারিয়ারের উজ্জ্বল
                  পরিবর্তন করার জন্য একটি ভাল প্রস্তুত করে।
                </p>
                <div className="flex md:justify-start gap-5 justify-center mt-2">
                  <div className="d">
                    <button className="SILIGURI px-6 py-4 bg-amber-600 hover:bg-amber-500 text-white text-[16px] font-[600] rounded-md">
                      Enroll Now
                    </button>
                    <p className="text-center text-[14px] flex text-[#788FB6] mt-2">
                      Enrolled{" "}
                      <span className="font-[600] flex ps-2 items-center gap-1">
                        <FaUserTie />
                        1,200{" "}
                      </span>{" "}
                    </p>
                  </div>

                  <div className="d">
                    <button className="SILIGURI px-6 py-4 bg-[#080D2A] hover:bg-[#151b3f] text-white text-[16px] font-[600] rounded-md">
                      Join Free Class
                    </button>
                    <p className="text-center text-[14px] flex text-[#788FB6] mt-2 justify-center">
                      Joining
                      <span className="font-[600] flex ps-2 items-center gap-1 justify-center text-center">
                        <FaUserTie />
                        5,200{" "}
                      </span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-video mx-auto flex justify-center w-[100%] md:h-[60dvh]">
              <iframe
                width="625"
                className="rounded-[20px] md:flex hidden"
                height="412"
                src="https://www.youtube.com/embed/E_AJBIDgYRw?si=L202IVsBkYPRWyZT"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <iframe
                width="425"
                className="rounded-[20px] md:hidden"
                height="300"
                src="https://www.youtube.com/embed/E_AJBIDgYRw?si=L202IVsBkYPRWyZT"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* --------------- studetn Image Slider ---------- */}
        <StudentImageSlide />
      </div>
    </>
  );
};

export default DetailsCourse;
