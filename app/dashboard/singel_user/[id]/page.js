"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegDotCircle } from "react-icons/fa";
import "./Singel_user.css";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { ProfileCourses } from "@/components/Profile/ProfileCourses";
import Link from "next/link";
import Image from "next/image";

const SingelUsers = () => {
  const route = useRouter();
  const { id } = useParams();
  const [singelUser, setSingelUser] = useState();
  const [userInfo, setInfo] = useState();
  const [Loading, setLoading] = useState(true);
  const [Loading2, setLoading2] = useState(true);
  const [reload, setReloade] = useState(false);

  const [Loading4, setLoading4] = useState(true);
  const [EnrollCourses, setEnrollCourses] = useState();

  useEffect(() => {
    const getCookiesData = Cookies.get("CookieYouserData");
    const singelUser = JSON.parse(getCookiesData);
    setInfo(singelUser);

    //  ------------------ searching field -----------
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://api.unitechbangladesh.com/api/v1/users/${id}`
        );

        setSingelUser(result?.data?.data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [id, singelUser?.email, reload]);

  // --------------- delete a Book -----------------
  async function deleteUser(userId, name) {
    try {
      const response = await axios.delete(
        `https://api.unitechbangladesh.com/api/v1/users/${userId}`
      );

      if (response?.data?.success) {
        Swal.fire({
          title: `${name}`,
          text: `Deleted Successfully`,
          icon: "success",
        });
        setReloade(true);
      }
    } catch (error) {
      console.error("Error deleting book:", error);
      // Optionally, handle the error in a meaningful way
    }
    route.push("/dashboard/management");
  }

  // ============== Ruler update ===============
  async function RulerUpdate(id, text) {
    const rulerUpdateData = {
      ruler: text,
    };
    try {
      const response = await axios.patch(
        `https://api.unitechbangladesh.com/api/v1/users/${id}`,
        rulerUpdateData
      );

      if (response?.data?.success) {
        Swal.fire({
          title: "Success",
          text: "Updated Successfully",
          icon: "success",
        });
        setReloade(true);
      }
    } catch (error) {
      console.error("Error updating user:", error);
      // Optionally, handle the error in a meaningful way
    }
  }

  // ============ roll update =============
  const [rollField, setrollfield] = useState();

  const rollUpdate = async () => {
    const data = {
      studentRoll: rollField,
    };

    try {
      const response = await axios.patch(
        `https://api.unitechbangladesh.com/api/v1/users/roll/${singelUser?._id}`,
        data
      );
      console.log("roll==>", response.data?.message);
      toast.success(`${response.data?.message}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      console.error("Error updating user roll:");
      toast.warn(`${error?.response?.data?.message}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    console.log(rollField);
  };

  useEffect(() => {
    //  all enroll courses
    async function fetchData2() {
      try {
        const result = await axios.get(
          `https://api.unitechbangladesh.com/api/v1/enroll/?searchTerm=${singelUser?.email}&page=1&limit=1000&sort=createdAt&sortOrder=desc`
        );

        setEnrollCourses(result?.data?.data);
        setLoading4(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData2();
  }, [singelUser?.email]);

  return (
    <div className="overflow-auto h-[100vh]">
      <div className="flex flex-col justify-center items-center mt-5">
        <h3 className="text-[25px] font-[600] text-[#000]">
          {Loading ? (
            <>
              <div className="flex gap-2 pb-2">
                <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
              </div>
            </>
          ) : (
            <>{singelUser?.name}</>
          )}{" "}
        </h3>
        <span className="text-white text-[12px] font-bold md:text-center flex justify-center text-center">
          <p className=" bg-green-800 px-2 mt-2">
            {Loading ? (
              <>
                <div className="flex gap-2 pb-2">
                  <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                  <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                  <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                </div>
              </>
            ) : (
              <>{singelUser?.ruler}</>
            )}{" "}
          </p>
        </span>
        <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
        <div className="grid md:grid-cols-3 justify-center text-sm md:w-[80%] mx-auto mt-5">
          <div className="grid grid-cols-1">
            <div className="px-4 py-2 font-bold text-[#000]">
              Name :{" "}
              <span className="font-[400]">
                {Loading ? (
                  <>
                    <div className="flex gap-2 pb-2">
                      <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                    </div>
                  </>
                ) : (
                  <>{singelUser?.name}</>
                )}{" "}
              </span>
            </div>
            <div className="px-4 py-2 text-[#000] font-bold text-[16px] ">
              Roll :{" "}
              <span className="font-[400]">
                {Loading ? (
                  <>
                    <div className="flex gap-2 pb-2">
                      <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                    </div>
                  </>
                ) : (
                  <>{singelUser?.studentRoll}</>
                )}{" "}
              </span>{" "}
            </div>
          </div>

          <div className="grid grid-cols-1">
            <div className="px-4 py-2 text-[#000] font-bold text-[16px] ">
              Gender :{" "}
              <span className="font-[400]">
                {Loading ? (
                  <>
                    <div className="flex gap-2 pb-2">
                      <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                    </div>
                  </>
                ) : (
                  <>{singelUser?.gender}</>
                )}{" "}
              </span>{" "}
            </div>
            <div className="px-4 py-2 text-[#000] font-bold text-[16px] ">
              Join Date:{" "}
              <span className="font-[400]">
                {Loading ? (
                  <>
                    <div className="flex gap-2 pb-2">
                      <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                    </div>
                  </>
                ) : (
                  <>{singelUser?.joinginDate}</>
                )}{" "}
              </span>{" "}
            </div>
          </div>

          <div className="grid grid-cols-1">
            <div className="px-4 py-2 text-[#000] font-bold text-[16px] ">
              institute :{" "}
              <span className="font-[400]">
                {Loading ? (
                  <>
                    <div className="flex gap-2 pb-2">
                      <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                    </div>
                  </>
                ) : (
                  <>{singelUser?.institute}</>
                )}{" "}
              </span>{" "}
            </div>
            <div className="px-4 py-2 text-[#000] font-bold text-[16px] ">
              Department :{" "}
              <span className="font-[400]">
                {Loading ? (
                  <>
                    <div className="flex gap-2 pb-2">
                      <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                    </div>
                  </>
                ) : (
                  <>{singelUser?.department}</>
                )}{" "}
              </span>{" "}
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="px-4 py-2 text-[#000] font-bold text-[16px] ">
              Address:{" "}
              <span className="font-[400]">
                {Loading ? (
                  <>
                    <div className="flex gap-2 pb-2">
                      <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                    </div>
                  </>
                ) : (
                  <>{singelUser?.address}</>
                )}{" "}
              </span>{" "}
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="px-4 py-2 text-[#000] font-bold text-[16px] ">
              Email:{" "}
              <span className="font-[400]">
                {Loading ? (
                  <>
                    <div className="flex gap-2 pb-2">
                      <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                    </div>
                  </>
                ) : (
                  <>{singelUser?.email}</>
                )}{" "}
              </span>{" "}
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="px-4 py-2 text-[#000] font-bold text-[16px] ">
              Phone:{" "}
              <span className="font-[400]">
                {Loading ? (
                  <>
                    <div className="flex gap-2 pb-2">
                      <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div className="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                    </div>
                  </>
                ) : (
                  <>{singelUser?.phone}</>
                )}{" "}
              </span>{" "}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="pt-4 text-base  flex items-center justify-start lg:justify-start md:text-center text-center">
            <FaRegDotCircle className="me-2 text-[#F69823]" />
            <span className="font-bold pe-2"> Roll : </span>{" "}
            <span className="relative">
              <input
                onChange={(e) => setrollfield(e?.target?.value)}
                defaultValue={singelUser?.studentRoll}
                className="ps-1 border-[2px] "
                type="text"
              />
              <button
                onClick={rollUpdate}
                className="absolute right-[0px] border-[2px] bg-purple-600 px-[3px] text-white text-[12px]"
              >
                submit
              </button>
            </span>
          </p>
        </div>
        <div className="pt-12 pb-8 flex flex-wrap justify-center md:justify-start gap-2 ">
          <button
            onClick={() => RulerUpdate(singelUser?._id, "block")}
            className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full"
          >
            Block
          </button>
          {userInfo?.ruler === "superAdmin" && (
            <>
              <button
                onClick={() => RulerUpdate(singelUser?._id, "admin")}
                className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
              >
                Create Admin
              </button>
            </>
          )}
          {userInfo?.ruler === "superAdmin" && (
            <>
              <button
                onClick={() => RulerUpdate(singelUser?._id, "student")}
                className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded-full"
              >
                Student
              </button>
            </>
          )}
          {userInfo?.ruler === "superAdmin" && (
            <>
              <button
                onClick={() => RulerUpdate(singelUser?._id, "superAdmin")}
                className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
              >
                Super Admin
              </button>
            </>
          )}
        </div>
        <div className="flex flex-wrap justify-center md:justify-start ">
          {userInfo?.ruler === "superAdmin" && (
            <>
              <button
                onClick={() => deleteUser(singelUser?._id, singelUser?.name)}
                className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>

      {/*----------- enroll courses------------- */}
      <div className="mt-8">
        <div className=" flex justify-center">
          <div className="lg:mx-0 w-[80%] mx-auto pt-3 border-b-2 border-green-500 opacity-25"></div>
        </div>
        <h1 className="text-center text-[25px] font-[600]">
          All Enroll Courses
        </h1>
        <div className=" flex justify-center">
          <div className="lg:mx-0 w-[80%] mx-auto pt-3 border-b-2 border-green-500 opacity-25"></div>
        </div>

        {Loading4 ? (
          <>
            <div class="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-8  items-center justify-center mt-5">
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
          </>
        ) : (
          <div
            className={`grid gap-3 ${
              EnrollCourses?.length === 0 ? "md:grid-cols-1" : "md:grid-cols-3"
            } mt-3 px-1`}
          >
            {EnrollCourses?.length === 0 ? (
              <>
                <div className="h-[40vh] flex justify-center items-center">
                  <h1 className="text-center text-[20px] font-bold text-[#0000009f]">
                    No Enroll Course
                  </h1>
                </div>
              </>
            ) : (
              <>
                {EnrollCourses?.map((item, index) => (
                  <>
                    {item?.status === "success" ? (
                      <>
                        <div
                          key={index}
                          className="max-w-sm border-2 bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
                        >
                          <h3 className="mb-3 text-xl font-bold text-indigo-600">
                            {item?.CCetagory === "Skill"
                              ? "Skill Development"
                              : "Academic Course"}
                          </h3>

                          <div className="relative">
                            <Image
                              className="w-full rounded-xl"
                              src={item?.courseImage}
                              width={400}
                              height={400}
                              alt="Colors"
                            />
                            <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                              {item?.CDuration}
                            </p>
                          </div>
                          <h1 className="mt-4 text-gray-800 text-[25px] font-bold cursor-pointer">
                            {item?.CName}{" "}
                            <span className="ps-1 text-amber-700 text-[14px] font-[600]">
                              {item?.CBatch}
                            </span>
                          </h1>

                          <div className="my-4 mt-1">
                            <div className="flex space-x-1 items-center">
                              <p className="text-green-600 text-[18px] font-[600]">
                                {item?.status}
                              </p>
                            </div>
                            <div className="flex space-x-1 items-center">
                              <p>Price : {item?.CPrice}</p>
                            </div>
                            <div className="flex space-x-1 items-center">
                              <p>Roll : {item?.SRoll}</p>
                            </div>
                            <div className="flex space-x-1 items-center">
                              <p>Phone : {item?.SPhone}</p>
                            </div>
                            <div className="flex space-x-1 items-center">
                              <p>Email : {item?.SEmail}</p>
                            </div>
                            <div className="flex space-x-1 items-center">
                              <p>Enroll Request date : {item?.CreateDate}</p>
                            </div>

                            <Link
                              href={`${
                                item?.CCetagory === "Skill"
                                  ? `/dashboard/enrollStudent/${item?._id}`
                                  : `/dashboard/enrollStudent/${item?._id}`
                              }`}
                            >
                              <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
                                See Course
                              </button>
                            </Link>
                          </div>
                        </div>
                      </>
                    ) : null}
                  </>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SingelUsers;
