import { Academic } from "@/components/OurCourses/Academic";
import { AllCoursesss } from "@/components/OurCourses/AllCoursesss";
import "./ourCourses.css";
const OurCourses = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="courses-banner w-[100%] rounded-md h-[50vh] bg-slate-300 mt-2 text-center flex items-center justify-center text-[20px]">
          Our Courses
        </div>
        <Academic />
        <div className="border-t-2 my-20">
          <h1 className="text-center text-[1.7rem] md:text-[2rem] font-[600] py-5 SILIGURI my-5 mt-10">
            স্কিল ডেভেলপমেন্ট কোর্সেস
          </h1>
          <div className="grid grid-cols-1 px-5 md:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-5 md:gap-3 justify-center items-center">
            <AllCoursesss />
            <AllCoursesss />
            <AllCoursesss />
            <AllCoursesss />
            <AllCoursesss />
            <AllCoursesss />
            <AllCoursesss />
            <AllCoursesss />
            <AllCoursesss />
            <AllCoursesss />
            <AllCoursesss />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCourses;
