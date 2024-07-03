import React from "react";
import "./about.css";
import leftsiteImage from "@/app/Assets/about/bannerleft.png";
import seminer from "@/app/Assets/about/seminer.png";
import team from "@/app/Assets/about/team.png";
import person1 from "@/app/Assets/about/rasel.png";
import person2 from "@/app/Assets/about/Nirob.png";
import company from "@/app/Assets/about/aboutHeader.png";
import aboutG from "@/app/Assets/about/aboutG.png";
import grows from "@/app/Assets/about/growth.png";
import mission from "@/app/Assets/about/Illustration.png";
import help from "@/app/Assets/about/help.png";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="about ">
        {/* ----------about banner part start ---------- */}
        <div className="about-banner  relative flex justify-center items-center">
          <div className="grid w-[100%] gap-y-10 md:gap-y-0 items-center justify-center md:grid-cols-2 ">
            <div className="headingText flex flex-col items-center md:items-start md:ps-36 pt-12 md:pt-0">
              <h1 className="about-heading text-center md:text-start">
                আমরাই প্রথম <br className="hidden md:block" /> আমরাই সেরা
              </h1>
              <p className="about-smalltext text-center md:text-start ">
                দক্ষ বাংলাদেশ গরব মোড়া
              </p>
            </div>

            <div className="leftSiteImage justify-center items-end  flex md:justify-end">
              <Image
                className="hidden md:flex"
                width={600}
                height={600}
                src={leftsiteImage}
                alt=""
              />
              <Image
                className="flex md:hidden  h-[45vh]"
                width={400}
                height={400}
                src={leftsiteImage}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-3">
          {/* ------- company details -------- */}
          <div>
            <div className="about-container mt-20">
              {/* ------ about -company ---- */}
              <div className="flex flex-col-reverse md:grid grid-cols-2 justify-center items-center gap-10">
                <div className="text-container p-2">
                  <h1 className="text-[30px] font-[600]">
                    Who <span className="text-amber-600">We</span> Are
                  </h1>
                  <p className="text-[16px] font-[400] mt-4">
                    Founded in 2019, Unitech Bangladesh has established itself
                    as a premier IT training center and architecture consultancy
                    firm. Our mission is to support businesses worldwide by
                    offering tailored digital solutions. Having served numerous
                    prestigious companies from the USA, UK, and other countries,
                    we have built a broad base of satisfied clients!
                  </p>
                </div>

                <div className="flex justify-end">
                  <Image
                    width={500}
                    height={400}
                    className="object-cover rounded-lg"
                    src={company}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* ------ about -why  ---- */}
            <div className="flex  flex-col md:grid grid-cols-2 justify-center items-center gap-5 mt-20">
              <div className="flex justify-start">
                <Image
                  width={450}
                  height={400}
                  className="object-cover"
                  src={team}
                  alt=""
                />
              </div>

              <div className="text-container p-2">
                <h1 className="text-[30px] font-[600]">
                  Why <span className="text-amber-600">Unitech</span>
                </h1>
                <p className="text-[16px] font-[400] mt-4">
                  Unitech Bangladesh, founded in 2019, excels in IT training and
                  architectural consultancy. We offer tailored digital
                  solutions, comprehensive training programs, and have a proven
                  track record with global clients from the USA, UK, and beyond.
                  Our commitment to innovation, quality, and client satisfaction
                  makes us the ideal partner for your business success. Choose
                  Unitech for reliable expertise.
                </p>
              </div>
            </div>
            {/* ------ about -why  ---- */}
            <div className="flex flex-col-reverse md:grid grid-cols-2 justify-center items-center gap-5 mt-20">
              <div className="text-container p-2">
                <h1 className="text-[30px] font-[600]">
                  Unitech <span className="text-amber-600">Growth</span>
                </h1>
                <p className="text-[16px] font-[400] mt-4">
                  Unitech Bangladesh has experienced significant growth since
                  2015, with over 300 students trained and 80+ architecture
                  projects planned. Our expert IT team delivers exceptional
                  training and consultancy services, ensuring quality and
                  innovation. Choose Unitech for proven success and expertise in
                  IT and architecture.
                </p>
              </div>
              <div className="flex justify-end">
                <Image
                  width={450}
                  height={400}
                  className="object-cover"
                  src={grows}
                  alt=""
                />
              </div>
            </div>
            {/* ------ about -why  ---- */}
            <div className="flex flex-col md:grid grid-cols-2 justify-center items-center gap-5 mt-20">
              <div className="flex justify-start">
                <Image
                  width={300}
                  height={400}
                  className="object-cover"
                  src={mission}
                  alt=""
                />
              </div>

              <div className="text-container p-2">
                <h1 className="text-[30px] font-[600]">
                  Our <span className="text-amber-600">Mission</span>
                </h1>
                <p className="text-[16px] font-[400] mt-4">
                  At Unitech Bangladesh, our mission is to spread the light of
                  technical education and contribute to building a more
                  efficient Bangladesh. We strive to empower individuals and
                  businesses with the skills and knowledge needed to excel in
                  the digital age, fostering growth and innovation across the
                  nation.
                </p>
              </div>
            </div>
          </div>
          <div className="about-gallary mt-16 md:mt-28">
            <Image width={1400} height={1200} src={aboutG} alt="" />
          </div>
        </div>
        {/* ----------Free Seminer- ---------- */}

        <div className="free-Seminer bg-[#F6F5F5] mt-20 py-20 px-3">
          <div className="grid items-center justify-center gap-10 md:grid-cols-2 max-w-screen-xl mx-auto">
            <div className="leftSiteSemenre">
              <div className="text-conterinr">
                <h1 className="font-[700] text-[#000] text-[28px] SILIGURI">
                  ফ্রি সেমিনারের সময়সূচী
                </h1>
                <p className="font-[400] text-[#000] text-[16px] line-hight SILIGURI pt-2">
                  কোন কোর্সে ভর্তি হবেন, সেই কোর্সে কাজের সুযোগ কেমন? অথবা নিজের
                  পোর্টফোলিও নিয়ে চিন্তিত, কোথাও জবের অফার আসছে না? আপনার মনে
                  এমন অসংখ্য প্রশ্ন রয়েছে নিশ্চয়ই?আমাদের সেমিনারগুলোতে অংশ নিয়ে
                  ইন্ড্রাষ্ট্রি এক্সপার্ট মেন্টরের কাছ থেকে কোর্স বিষয়ক যেকোনো
                  পরামর্শ নিতে পারেন ।{" "}
                </p>
              </div>

              {/* -----Oriantion class date box---- */}

              <div className="time-box mt-5  p-5 border-2 border-l-8 border-gray-700 rounded-lg flex gap-5 flex-row justify-center items-center">
                <div className="w-[40%]">
                  <h1 className="text-gray-800 text-[14px] md:text-[16px] font-[600]">
                    15 August, 2024{" "}
                  </h1>
                  <p className="text-gray-800 text-[14px] md:text-[16px] font-[600] pt-2">
                    বৃহস্পতিবার
                  </p>
                </div>
                <div className="w-[100%] border-l-2 border-gray-600 flex flex-col md:flex-row gap-3 justify-between">
                  <div className="flex justify-center flex-col ps-2 md:ps-5">
                    <h1 className="text-gray-800 text-[14px] md:text-[16px] font-[600] text-center">
                      ডিজিটাল মার্কেটিং এর খুটি-নাটি
                    </h1>
                    <p className="text-gray-800 text-[14px] md:text-[16px] font-[600] text-center">
                      সময়: সকাল ০৯টা - ১২টা
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <button className="w-[100px] mx-auto h-[40px]  rounded-lg text-[12px] bg-gray-700 hover:bg-gray-600 text-white ">
                      জয়েন করুন{" "}
                    </button>
                  </div>
                </div>
              </div>
              {/* ---------box2------- */}
              <div className="time-box mt-5  p-5 border-2 border-l-8 border-gray-700 rounded-lg flex gap-5 flex-row justify-center items-center">
                <div className="w-[40%]">
                  <h1 className="text-gray-800 text-[14px] md:text-[16px] font-[600]">
                    16 December, 2024
                  </h1>
                  <p className="text-gray-800 text-[14px] md:text-[16px] font-[600] pt-2">
                    সোমবার
                  </p>
                </div>
                <div className="w-[100%] border-l-2 border-gray-600 flex flex-col md:flex-row gap-3 justify-between">
                  <div className="flex justify-center flex-col ps-2 md:ps-5">
                    <h1 className="text-gray-800 text-[14px] md:text-[16px] font-[600] text-center">
                      পোর্টফোলিও রিভিও – গ্রাফিক ডিজাইন
                    </h1>
                    <p className="text-gray-800 text-[14px] md:text-[16px] font-[600] text-center">
                      সময়: সকাল ০৯টা - ১২টা
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <button className="w-[100px] mx-auto h-[40px]  rounded-lg text-[12px] bg-gray-700 hover:bg-gray-600 text-white ">
                      জয়েন করুন{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="rightSiteSemenre flex justify-end items-center h-[100%] ">
              <Image width={500} height={600} src={seminer} alt="" />
            </div>
          </div>
        </div>

        {/* ---------development---- */}
        <div className="teamInfo  px-3">
          <div className="person2  rounded-md ">
            <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:grid grid-cols-2 justify-center items-center gap-10">
              <div className="text-container p-2 md:ps-10">
                <p className="text-white">Designed By</p>
                <h1 className="text-[25px] text-[#FFE500] font-[600] SILIGURI ">
                  Md Amir Hamza Nirob
                </h1>
                <p className="text-[16px] text-[#FFF] font-[400] mt-4 Navbar-font text-justify">
                  Professional graphic designer with expertise in Photoshop,
                  Illustrator, and Figma. With three years of experience, he
                  excels in creating stunning visual designs and user
                  interfaces. Nirob is proficiency in these tools allows him to
                  deliver high-quality, creative solutions, making him a
                  valuable asset to any design team.
                </p>
              </div>

              <div className="flex justify-end">
                <Image
                  width={300}
                  height={300}
                  className="object-cover rounded-lg"
                  src={person2}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="person1 mt-2">
            <div className="max-w-screen-xl mx-auto flex flex-col md:grid grid-cols-2 justify-center items-center gap-10">
              <div className="flex justify-start">
                <Image
                  width={250}
                  height={300}
                  className="object-cover rounded-lg"
                  src={person1}
                  alt=""
                />
              </div>
              <div className="text-container p-2">
                <p className="text-[#000000b3]">Development By</p>
                <h1 className="text-[25px] text-[#2828f0] font-[700] SILIGURI ">
                  Md Johirul Islam ( Rasel )
                </h1>
                <p className="text-[16px] text-[#000000b3] font-[400] mt-2 Navbar-font text-justify">
                  Professional full Stack web developer and an expert in MERN
                  Stack Developer. With extensive experience, he builds dynamic,
                  high-performance web applications. His skills in server-side
                  solutions and interactive interfaces, combined with a
                  commitment to modern trends, make him an invaluable asset to
                  any development team.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-screen-xl mx-auto flex flex-col md:grid grid-cols-2 w-[100%] justify-center items-center gap-5 mt-20 mb-10">
            <div className="text-container p-2 ">
              <h1 className="text-[20px] font-[600]">
                Let Us Help You Accelerate{" "}
                <span className="text-amber-600">
                  Your Digital Transformation
                </span>
              </h1>
              <p className="text-[16px] font-[400] mt-5">
                Leave a positive footprint by devoting our human resources,
                technologies and expertise to deliver top-of-the-line digital
                products, thereby contributing to the success of modern
                businesses around the globe.
              </p>
            </div>
            <div className="flex justify-end">
              <Image
                width={420}
                height={400}
                className="object-cover"
                src={help}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
