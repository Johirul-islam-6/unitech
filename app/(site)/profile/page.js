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
            `https://unitech-server.vercel.app/api/v1/users/?searchTerm=${cookiesInfo?.email}&page=1&limit=5&sort=createdAt&sortOrder=desc`
          );

          setUserInformation(result?.data?.data);

          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
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
    Cookies.remove("CookieYouserData");
    Cookies.remove("accessToken");
    window.location.reload();
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
          <div class="relative flex justify-center items-center">
            <div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
            <img
              src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
              class="rounded-full h-28 w-28"
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

  console.log(cookiesInfo?.ruler);

  return (
    <>
      <main class="profile-page">
        <section class="relative block h-500-px">
          <div class="absolute top-0 w-full h-full bg-center bg-cover background-profile">
            <span
              id="blackOverlay"
              class="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            // style="transform: translateZ(0px)"
          >
            <svg
              class="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                class="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>

        <section class="relative py-16 bg-blueGray-200">
          <div class="container mx-auto px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-[120px]">
              <div class="px-6">
                <div class="flex flex-wrap justify-center">
                  <div class="absolute top-[-100px] p-10 border-2 rounded-md bg-white profile-shadow lg:order-2 flex justify-center">
                    <div class="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="100"
                        width="100"
                        viewBox="0 0 448 512"
                      >
                        <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                      </svg>
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div class="py-6 px-3 mt-32 sm:mt-0"></div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4 lg:order-1"></div>
                </div>
                <div class="text-center mt-12">
                  <h3 class="text-4xl font-semibold leading-normal pt-2 text-blueGray-700 ">
                    {cookiesInfo?.name}
                  </h3>
                  <div class="text-[18px] leading-normal mt-2 text-amber-700 font-bold  ">
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
                      Unitech Student <br /> Roll- {cookiesInfo?.studentRoll}
                    </h1>
                  </div>
                  <div class="mb-2 text-blueGray-600 mt-10">
                    <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    <span className="font-bold">Gender -:- </span>{" "}
                    {cookiesInfo?.gender}
                  </div>

                  <div class="mb-2 text-blueGray-600 ">
                    <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    <span className="font-bold">Joining date -:- </span>{" "}
                    {cookiesInfo?.joinginDate}
                  </div>
                  <div class="mb-2 text-blueGray-600 ">
                    <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    <span className="font-bold">Phone number -:- </span>{" "}
                    {cookiesInfo?.phone}
                  </div>
                  <div class="mb-2 text-blueGray-600 ">
                    <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    <span className="font-bold">Email -:- </span>{" "}
                    {cookiesInfo?.email}
                  </div>
                  <div class="mb-2 text-blueGray-600">
                    <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    <span className="font-bold"> institute -:- </span>{" "}
                    {cookiesInfo?.institute}
                  </div>
                  <div class="mb-2 text-blueGray-600">
                    <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    <span className="font-bold"> Department -:- </span>
                    {cookiesInfo?.department}
                  </div>
                  <div class="mb-2 text-blueGray-600">
                    <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    <span className="font-bold"> Present Address -:- </span>
                    {cookiesInfo?.address}
                  </div>
                  <div class="mb-2 mt-5 text-blueGray-600 gap-3 flex-wrap flex justify-center items-center">
                    {cookiesInfo?.ruler === "admin" && (
                      <>
                        <Link href={`/dashboard`}>
                          <button className="px-5 py-[8px] rounded-md  text-[14px] font-[500] hover:bg-[#272727] bg-[#000] text-white">
                            Admin profile
                          </button>
                        </Link>
                      </>
                    )}
                    {cookiesInfo?.ruler === "superAdmin" && (
                      <>
                        <Link href={`/dashboard`}>
                          <button className="px-5 py-[8px] rounded-md  text-[14px] font-[500] hover:bg-[#272727] bg-[#000] text-white">
                            Admin profile
                          </button>
                        </Link>
                      </>
                    )}

                    <button className="px-5 py-[8px]  text-[14px] rounded-md  font-[500] hover:bg-[#272727] bg-[#000] text-white">
                      Edite profile
                    </button>
                  </div>
                </div>
                <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div class="flex flex-wrap justify-center">
                    <div class="w-full lg:w-9/12 px-4">
                      <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>

                      <div class=" flex justify-center">
                        <Link href="/">
                          <button
                            onClick={() => logout()}
                            className="login-button text-black font-[600]  hover:text-white"
                          >
                            {" "}
                            <span className="relative z-[1000]">Log Out</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Profile;
