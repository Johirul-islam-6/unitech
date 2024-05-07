"use client";
import React, { useEffect, useState } from "react";
import "./Profile.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";
const Profile = () => {
  const navigate = useRouter();
  const [Loading, setLoading] = useState(false);
  const [Loding3, setLoding3] = useState(true);

  const accessToken = Cookies.get("accessToken");
  const [cookiesInfo, setCookiesInfo] = useState();

  const [refreshbook, setrefresh] = useState(false);

  const [UserInformation, setUserInformation] = useState([]);

  const createdBook = (e) => {
    if (e) {
      setrefresh(e);
    }
  };

  useEffect(() => {
    setLoading(true);
    if (!accessToken) {
      return navigate.push("/login");
    }
    if (accessToken) {
      const getCookiesData = Cookies.get("CookieYouserData");
      const cookiesInfos = JSON.parse(getCookiesData);
      setCookiesInfo(cookiesInfos);
    }

    // ------- user admin checking-----
    if (cookiesInfo?.email) {
      async function fetchData2() {
        try {
          const result = await axios.get(
            `https://unitech-server.vercel.app/api/v1/users/?searchTerm=${cookiesInfo?.email}&page=1&limit=100000&sort=createdAt&sortOrder=desc`
          );

          setUserInformation(result?.data?.data);

          setLoding3(false);
        } catch (error) {
          console.log(error);
          setLoding3(false);
        }
      }
      fetchData2();
    }
    if (!accessToken) {
      setTimeout(() => {
        setrefresh(false);
      }, 5000);
    }
  }, [refreshbook, accessToken, cookiesInfo?.email, navigate]);

  const logout = () => {
    setrefresh(true);
    Cookies.remove("CookieYouserData");
    Cookies.remove("accessToken");
    setTimeout(() => {
      window.location.reload();
      navigate.push("/");
      setrefresh(false);
    }, 1000);
  };

  const closeModal = (e) => {
    setModal1(e);
  };
  // ======== when User block ======
  if (UserInformation[0]?.ruler === "block") {
    return (
      <>
        <div className="flex justify-center items-center h-[100vh] ">
          <h1 className="text-center text-red-700 text-[25px] font-[600]">
            Sorry Your account is Suspended!
          </h1>
        </div>
      </>
    );
  }

  // ========== user admin access =====
  if (UserInformation[0]?.ruler) {
    if (UserInformation[0]?.ruler === cookiesInfo?.ruler) {
    } else {
      Cookies.remove("CookieYouserData");
      Cookies.remove("accessToken");
      window.location.reload();
    }
  }

  if (!Loading) {
    return (
      <>
        <div className="w-[100%] flex h-[100vh] justify-center items-center">
          <div className="relative flex justify-center items-center">
            <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
            <img
              src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
              className="rounded-full h-28 w-28"
            />
          </div>
        </div>
      </>
    );
  }

  const today = new Date();

  // Pad single-digit day and month values with a leading zero
  const padZero = (num) => {
    return num < 10 ? "0" + num : num;
  };

  // Format the date to DD/MM/YYYY
  const formattedDate = `${padZero(today.getDate())}/${padZero(
    today.getMonth() + 1
  )}/${today.getFullYear()}`;

  return (
    <>
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div className="absolute top-0 w-full h-full bg-center bg-cover background-profile">
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            // style="transform: translateZ(0px)"
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>

        <section className="relative py-16 bg-blueGray-200">
          {/* ---- old --- */}
          <div className="container mx-auto px-1 md:px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-[120px]">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="absolute top-[-100px] p-10 border-2 rounded-md bg-white profile-shadow lg:order-2 flex justify-center">
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="80"
                        width="80"
                        viewBox="0 0 448 512"
                      >
                        <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0"></div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1"></div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal md:pt-2 text-blueGray-700 ">
                    {cookiesInfo?.name}
                  </h3>
                  <div className="text-[18px] leading-normal mt-2 text-amber-700 font-bold  ">
                    <h1 className="flex justify-center gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="22"
                        width="22"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="#c17c06"
                          d="M186.1 343.3c-9.7 9.7-9.7 25.3 0 34.9 9.7 9.7 25.3 9.7 34.9 0L378.2 221.1c19.3-19.3 50.6-19.3 69.9 0s19.3 50.6 0 69.9L294 445.1c19.3 19.3 50.5 19.3 69.8 0l0 0 119.3-119.2c38.6-38.6 38.6-101.1 0-139.7-38.6-38.6-101.2-38.6-139.7 0l-157.2 157.2zm244.5-104.8c-9.7-9.7-25.3-9.7-34.9 0l-157.2 157.2c-19.3 19.3-50.5 19.3-69.8 .1l-.1-.1c-9.6-9.6-25.3-9.7-34.9 0l0 0c-9.7 9.6-9.7 25.3 0 34.9l0 0c38.6 38.6 101.1 38.6 139.7 0l157.2-157.2c9.7-9.7 9.7-25.3 0-34.9zm-262 87.3l157.2-157.2c9.6-9.7 9.6-25.3 0-34.9-9.6-9.6-25.3-9.6-34.9 0L133.7 290.9c-19.3 19.3-50.6 19.3-69.9 0l0 0c-19.3-19.3-19.3-50.5 0-69.8l0 0L218 66.9c-19.3-19.3-50.6-19.3-69.9 0l0 0L28.9 186.1c-38.6 38.6-38.6 101.1 0 139.7 38.6 38.6 101.1 38.6 139.7 0zm-87.3-52.4c9.6 9.6 25.3 9.6 34.9 0l157.2-157.2c19.3-19.3 50.6-19.3 69.8 0l0 0c9.7 9.7 25.3 9.7 34.9 0 9.7-9.7 9.7-25.3 0-34.9-38.6-38.6-101.1-38.6-139.7 0L81.3 238.5c-9.7 9.6-9.7 25.3 0 34.9h0z"
                        />
                      </svg>
                      {cookiesInfo?.ruler}
                    </h1>
                  </div>
                </div>
              </div>

              {/* ---user profile--- */}
              <div className="text-gray-700 mt-8">
                <div className="grid md:grid-cols-3 justify-center text-sm md:w-[80%] mx-auto">
                  <div className="grid grid-cols-1">
                    <div className="px-4 py-2 font-bold text-[#000]">
                      Name :{" "}
                      <span className="font-[400]">{cookiesInfo?.name}</span>
                    </div>
                    <div className="px-4 py-2 font-semibold">
                      Roll :{" "}
                      <span className="font-[400]">
                        {cookiesInfo?.studentRoll}
                      </span>{" "}
                    </div>
                  </div>

                  <div className="grid grid-cols-1">
                    <div className="px-4 py-2 font-semibold">
                      Gender :{" "}
                      <span className="font-[400]">{cookiesInfo?.gender}</span>{" "}
                    </div>
                    <div className="px-4 py-2 font-semibold">
                      Join Date:{" "}
                      <span className="font-[400]">
                        {cookiesInfo?.joinginDate}
                      </span>{" "}
                    </div>
                  </div>

                  <div className="grid grid-cols-1">
                    <div className="px-4 py-2 font-semibold">
                      institute :{" "}
                      <span className="font-[400]">
                        {cookiesInfo?.institute}
                      </span>{" "}
                    </div>
                    <div className="px-4 py-2 font-semibold">
                      Contact No :{" "}
                      <span className="font-[400]">
                        {cookiesInfo?.department}
                      </span>{" "}
                    </div>
                  </div>
                  <div className="grid grid-cols-1">
                    <div className="px-4 py-2 font-semibold">
                      Address:{" "}
                      <span className="font-[400]">{cookiesInfo?.address}</span>{" "}
                    </div>
                  </div>
                  <div className="grid grid-cols-1">
                    <div className="px-4 py-2 font-semibold">
                      Email:{" "}
                      <span className="font-[400]">{cookiesInfo?.email}</span>{" "}
                    </div>
                  </div>
                  <div className="grid grid-cols-1">
                    <div className="px-4 py-2 font-semibold">
                      Phone:{" "}
                      <span className="font-[400]">{cookiesInfo?.phone}</span>{" "}
                    </div>
                  </div>
                </div>
                <div className="mt-16 pb-10">
                  <h1 className="mb-2 mt-5 text-blueGray-600 gap-3 flex-wrap flex justify-center items-centertext-start">
                    {cookiesInfo?.ruler === "admin" && (
                      <>
                        <Link href={`/dashboard`}>
                          <button className="px-5 py-[10px] rounded-md  text-[14px] font-[500] hover:bg-[#272727] bg-[#000] text-white">
                            Admin profile
                          </button>
                        </Link>
                      </>
                    )}
                    {cookiesInfo?.ruler === "superAdmin" && (
                      <>
                        <Link href={`/dashboard`}>
                          <button className="px-5 py-[10px] rounded-md  text-[14px] font-[500] hover:bg-[#272727] bg-[#000] text-white">
                            Admin profile
                          </button>
                        </Link>
                      </>
                    )}
                    {cookiesInfo?.ruler === "student" && (
                      <>
                        <Link href={`/dashboard`}>
                          <button className="px-5 py-[10px] rounded-md  text-[14px] font-[500] hover:bg-[#272727] bg-[#000] text-white">
                            Student profile
                          </button>
                        </Link>
                      </>
                    )}

                    <button
                      onClick={logout}
                      className="px-5 py-[8px]  text-[14px] rounded-md font-[500] hover:bg-[#da2020] bg-[#ae1919] text-white logout"
                    >
                      logout
                    </button>
                    <button className="px-5 py-[8px]  text-[14px] rounded-md  font-[500] hover:bg-[#272727] bg-[#000] text-white">
                      Edite profile
                    </button>
                  </h1>
                </div>
              </div>
            </div>
            {/* <!-- About Section --> */}
          </div>

          {/* ------- all courses ----- */}

          {/* <div className="py-10 bg-gradient-to-tr from-[#ededed] to-white flex flex-col justify-center items-center">
            <div className="pb-5 ">
              <h1 className="pt-5 text-[18px] md:text-[22px] font-[600] uppercase">
                All enroll Courses
              </h1>
              <div className="w-[80px] h-[5px] bg-blue-600 mx-auto mt-2"></div>
            </div>
            <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
              <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                <h3 className="mb-3 text-xl font-bold text-indigo-600">
                  Diploma Engineer
                </h3>
                <div className="relative">
                  <img
                    className="w-full rounded-xl"
                    src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt="Colors"
                  />
                  <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                    6th months
                  </p>
                </div>
                <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
                  5th Semester Academic Courses.
                </h1>
                <div className="my-4">
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <p>1:34:23 Minutes</p>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <p>3 Parts</p>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </span>
                    <p>Vanilla JS</p>
                  </div>
                  <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
                    See Lesson
                  </button>
                </div>
              </div>
              <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                <h3 className="mb-3 text-xl font-bold text-indigo-600">
                  Web Development
                </h3>
                <div className="relative">
                  <img
                    className="w-full rounded-xl"
                    src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    alt="Colors"
                  />
                  <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                    4th Months
                  </p>
                
                </div>
                <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
                  Front-End Web Designer
                </h1>
                <div className="my-4">
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <p>1:34:23 Minutes</p>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <p>3 Parts</p>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </span>
                    <p>TypeScript</p>
                  </div>
                  <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
                    See Lesson
                  </button>
                </div>
              </div>
              <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                <h3 className="mb-3 text-xl font-bold text-indigo-600">
                  Graphic Designer
                </h3>
                <div className="relative">
                  <img
                    className="w-full rounded-xl"
                    src="https://images.unsplash.com/photo-1561835491-ed2567d96913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    alt="Colors"
                  />
                  <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                    6th Months
                  </p>
                </div>
                <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
                  Professional Graphic Designer
                </h1>
                <div className="my-4">
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <p>1:34:23 Minutes</p>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <p>3 Parts</p>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </span>
                    <p>Vanilla JS</p>
                  </div>
                  <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
                    See Lesson
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </section>

        {/* ------------ all courses ---------- */}
      </main>
    </>
  );
};

export default Profile;
