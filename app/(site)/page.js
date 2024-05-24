import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AchieveCourses } from "@/components/Home/AchieveCourses/AchieveCourses";
import { Career } from "@/components/Home/Career/Career";
import { CourseSlider } from "@/components/Home/AllCoursesSlide/CourseSlider";
import { StudentInfo } from "@/components/Home/StudentInfo/StudentInfo";
import "./globals.css";
import { Reviews } from "@/components/Home/Reviews/Reviews";
import { UnitechArchitectural } from "@/components/Home/UnitechArchitectural/UnitechArchitectural";
import { Banner } from "@/components/Home/Banner/Banner";
import CompnaySlier from "@/components/Home/semesterTopersSlider/CompnaySlier";

export default function Home() {
  return (
    <>
      {/* <div className="w-[100%] bg-amber-200"> */}
      <div className=" mt-2 md:mt-1">
        <Banner />
      </div>
      {/* </div> */}
      <div className="mt-[2px]">
        <Career />
      </div>
      <div className="max-w-screen-xl mx-auto mt-5">
        <StudentInfo />
        <CompnaySlier />
        <AchieveCourses />
        <Reviews />
        <UnitechArchitectural />
        <CourseSlider />
      </div>
    </>
  );
}
