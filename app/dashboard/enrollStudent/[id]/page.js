"use client";
import { LoadingPage } from "@/components/Loading/LoadingPage";
import { PageLoding } from "@/components/Loading/PageLoding";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const EnrollDetails = ({ course }) => {
  const router = useRouter();
  const { id } = useParams();
  const [Loading, setLoading] = useState(true);
  const [singleCourses, setSingleCourses] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://unitech-server.vercel.app/api/v1/enroll/${id}`
        );

        setSingleCourses(result?.data?.data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [id]);

  // ----------- delete courses book -------------

  async function DeleteEnroll(id, name) {
    try {
      const response = await axios.delete(
        `https://unitech-server.vercel.app/api/v1/enroll/${id}`
      );

      if (response?.data?.success) {
        Swal.fire({
          title: `${name}`,
          text: `Delete Complited`,
          icon: "success",
        });
        router.push("/dashboard/enrollStudent");
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  }

  return (
    <>
      {Loading ? (
        <PageLoding Loading={Loading} />
      ) : (
        <>
          <div class="flex text-black md:flex-row flex-col items-start justify-center md:justify-between px-2 my-2">
            {/* -------- imgae information ---- */}
            <div class="md:w-[40%] md:block">
              <img
                class="w-full h-[400px]"
                alt="image of a girl posing"
                src={singleCourses?.courseImage}
              />
              <div class="py-4 border-b border-t border-gray-200 flex items-center justify-between mt-2">
                <p class="text-base leading-4 text-[#000000a7] text-[10px] md:text-[20px] font-[600]">
                  Course Name :
                </p>
                <div class="flex items-center justify-center">
                  <p class="text-sm leading-none text-[#000000a7] font-[400] mr-3">
                    {singleCourses?.CName}
                  </p>
                </div>
              </div>
              <div class="py-4 border-b  border-gray-200 flex items-center justify-between mt-2">
                <p class="text-base leading-4 text-[#000000a7] text-[10px] md:text-[20px] font-[600]">
                  Course CBatch :
                </p>
                <div class="flex items-center justify-center">
                  <p class="text-sm leading-none text-[#000000a7] font-[400] mr-3">
                    {" "}
                    {singleCourses?.CBatch}
                  </p>
                </div>
              </div>
              <div class="py-4 border-b  border-gray-200 flex items-center justify-between mt-2">
                <p class="text-base leading-4 text-[#000000a7] text-[10px] md:text-[20px] font-[600]">
                  Course Duration :
                </p>
                <div class="flex items-center justify-center">
                  <p class="text-sm leading-none text-[#000000a7] font-[400] mr-3">
                    {singleCourses?.CDuration}
                  </p>
                </div>
              </div>
              <div class="py-4 border-b  border-gray-200 flex items-center justify-between mt-2">
                <p class="text-base leading-4 text-[#000000a7] text-[10px] md:text-[20px] font-[600]">
                  Course Price:
                </p>
                <div class="flex items-center justify-center">
                  <p class="text-sm leading-none text-[#000000a7] font-[400] mr-3">
                    {singleCourses?.CPrice}
                  </p>
                </div>
              </div>
            </div>

            <div class="md:w-[55%] md:mt-0 mt-6">
              <div class="py-4 border-b border-t border-gray-200 flex items-center justify-center">
                <p class="text-base leading-4 text-[#422525] text-center font-[600]">
                  {singleCourses?.CCetagory === "Academic"
                    ? "Academic Diploma Engineering"
                    : "Skill Development"}
                </p>
              </div>
              <button class=" dark:text-gray-900  text-base flex items-center justify-center leading-none text-white  w-full py-3 my-5 bg-gray-200 ">
                <svg
                  class="mr-3 text-white dark:text-gray-900"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.66699 4.83333V4.84166"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.333 11.5V11.5083"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Student Information
              </button>
              <div className="flex flex-wrap mt-2 gap-2 md:justify-start justify-center">
                <p className="bg-gray-200 text-[16px] font-[600] px-2 py-1 ">
                  {singleCourses?.SName}
                </p>
                <p className="bg-gray-200 text-[16px] font-[600] px-2 py-1 ">
                  {singleCourses?.SEmail}
                </p>
                <p className="bg-gray-200 text-[16px] font-[600] px-2 py-1 ">
                  {singleCourses?.SRoll}
                </p>
                <p className="bg-gray-200 text-[16px] font-[600] px-2 py-1 ">
                  {singleCourses?.SLocation}
                </p>
              </div>
              <div class="border-b border-t py-2 border-gray-200 my-5 mt-7 px-2">
                <div
                  data-menu
                  class="flex justify-between items-center cursor-pointer"
                >
                  <p class="text-base leading-4 text-[#000]">Contact number</p>
                  <button class="bg-amber-500 px-2 py-1 font-[600] text-[18px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded">
                    {singleCourses?.SPhone}
                  </button>
                </div>
              </div>
              <div>
                <p class=" text-base lg:leading-tight leading-normal text-gray-800 mt-7">
                  {singleCourses?.message}
                </p>
                <p class="text-base leading-4 mt-7 font-[600] text-amber-700">
                  Course Code: {singleCourses?.CId}
                </p>
              </div>
              <div>
                <button class="bg-amber-600 text-white text-[16px] font-[600]  focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-non w-full py-3  focus:outline-none mt-7 border-t border-b">
                  Student Enroll Panding
                </button>
                <button
                  onClick={() =>
                    DeleteEnroll(singleCourses?.id, singleCourses?.CName)
                  }
                  class="bg-red-700 hover:bg-red-500 text-white text-[16px] font-[600]  focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-non w-full py-3  focus:outline-none mt-2 border-t border-b"
                >
                  Cancel
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default EnrollDetails;
