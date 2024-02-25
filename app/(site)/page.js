import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AchieveCourses } from "@/components/Home/AchieveCourses/AchieveCourses";
import { Banner } from "@/components/Home/Banner/Banner";
import { Career } from "@/components/Home/Career/Career";
import { CourseSlider } from "@/components/Home/AllCoursesSlide/CourseSlider";
import { StudentInfo } from "@/components/Home/StudentInfo/StudentInfo";

import { Reviews } from "@/components/Home/Reviews/Reviews";
import { UnitechArchitectural } from "@/components/Home/UnitechArchitectural/UnitechArchitectural";

export default function Home() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-2 md:mt-1">
        <Banner />
      </div>
      <div className="mt-5">
        <Career />
      </div>
      <div className="max-w-screen-xl mx-auto mt-5">
        <StudentInfo />
        <AchieveCourses />
        <Reviews />
        <UnitechArchitectural />
        <CourseSlider />
      </div>
    </>
  );
}
