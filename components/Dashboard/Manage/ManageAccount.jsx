"use client";
import React, { useEffect, useState } from "react";
import userimage from "@/app/Assets/Dashboard/icon/Avatar.png";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import "./Manage.css";

export const ManageAccount = () => {
  const [allUser, setUser] = useState([]);
  const [searchingValue, setSearchingValue] = useState("");
  const [Loading, setLoading] = useState(true);
  const [relader, setReload] = useState(false);

  const reloadButton = (e) => {
    setReload(e);
  };

  useEffect(() => {
    //  ------------------ searching field -----------
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://unitech-server.vercel.app/api/v1/users/?searchTerm=${searchingValue}&page=1&limit=10000000&sort=createdAt&sortOrder=desc`
        );

        setUser(result?.data?.data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();

    // if (ResultBooks) {
    //   const pendingBooks = ResultBooks.filter(
    //     (item) => item?.status !== "success"
    //   );
    //   const result = pendingBooks;
    //   setPendingBook(result);
    // }
  }, [searchingValue]);

  return (
    <>
      <div className="  p-2">
        {/* --- user navbar-- */}
        <div className=" flex gap-5 justify-between items-center mt-2">
          <div className="w-[100%]   justify-between gap-2 md:gap-10 flex items-center md:px-3">
            <div className="flex gap-1 items-center">
              <h1 className="text-[18px] hidden md:flex font-[600] text-[#393A3A]">
                Roll
              </h1>
              {/* ----drop down--- */}
              <input
                className="dark-light"
                type="checkbox"
                id="dark-light"
                name="dark-light"
              />

              <div className="menu-dropdown sec-center whitespace-nowrap  pe-10 ps-2">
                <input
                  className="dropdown "
                  type="checkbox"
                  id="dropdown"
                  name="dropdown"
                />
                <label
                  onClick={() => setSearchingValue(" ")}
                  className="for-dropdown flex items-center"
                  for="dropdown"
                >
                  All
                  <svg
                    className="uil"
                    xmlns="http://www.w3.org/2000/svg"
                    height="12"
                    width="10"
                    viewBox="0 0 512 512"
                  >
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                  </svg>
                </label>
                {/* ----- dropdown box ---- */}
                <div className="section-dropdown px-5">
                  <a
                    onClick={() => setSearchingValue("student")}
                    className="overView-a"
                    href="#"
                  >
                    student <i className="uil uil-arrow-right"></i>
                  </a>
                  <input
                    className="dropdown-sub"
                    type="checkbox"
                    id="dropdown-sub"
                    name="dropdown-sub"
                  />

                  <a
                    onClick={() => setSearchingValue("superAdmin")}
                    className="overView-a"
                    href="#"
                  >
                    superAdmin <i className="uil uil-arrow-right"></i>
                  </a>
                  <a
                    onClick={() => setSearchingValue("admin")}
                    className="overView-a"
                    href="#"
                  >
                    admin <i className="uil uil-arrow-right"></i>
                  </a>

                  <a
                    onClick={() => setSearchingValue("block")}
                    className="overView-a"
                    href="#"
                  >
                    block <i className="uil uil-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* ---- search bar --- */}
            <div className="md:flex  justify-center  items-center gap-2 cursor-pointer  md:w-[23%]">
              <div className="relative text-gray-600 focus-within:text-gray-400 flex  w-[100%]">
                <span className="absolute inset-y-0 right-0 flex items-center pl-2">
                  <button
                    type="submit"
                    className=" focus:outline-none focus:shadow-outline bg-amber-600 py-[7px] px-[6px] "
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  onChange={(e) => setSearchingValue(e?.target?.value)}
                  type="search"
                  name="search"
                  id="search"
                  className="block w-full py-[8px] px-4 bg-[#F6F6F6] text-[17px] rounded-mdocus:outline-4 outline-[#d46a14] border-[1px] GT"
                  placeholder="search anythis..."
                  autocomplete="off"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ---- user Card --- */}
        <div className="mt-5 ">
          {Loading && (
            <div className="h-screen w-[100%] bg-white flex justify-center mt-40">
              <img
                className="h-16 w-16"
                src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
                alt=""
              />
            </div>
          )}
          <section className="py-1 flex md:flex-row flex-col justify-center md:justify-between gap-2">
            <div className="w-full  mb-12 xl:mb-0 ">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded pb-3">
                <div className="block w-full overflow-x-auto overflow-y-auto h-[75vh] pb-5">
                  <table className="items-center bg-transparent w-full border-2 ">
                    <thead className="border-b-2 ">
                      <tr>
                        <th className="text-[14px] text-[#888888] px-6  align-middle border border-solid border-blueGray-100 py-3  uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                          Student Name
                        </th>
                        <th className="text-[14px] text-[#888888] px-6  align-middle border border-solid border-blueGray-100 py-3  uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                          Email
                        </th>
                        <th className="text-[14px] text-[#888888] px-6  align-middle border border-solid border-blueGray-100 py-3  uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                          Role
                        </th>
                        <th className="text-[14px] text-[#888888] px-6  align-middle text-center border border-solid border-blueGray-100 py-3  uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                          Gender
                        </th>
                        {/* <th className="text-[14px] text-[#888888] px-6  align-middle border border-solid border-blueGray-100 py-3  uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left"></th> */}
                      </tr>
                    </thead>

                    {/* --------------- body---------- */}

                    <tbody>
                      {allUser?.map((user, index) => (
                        <>
                          <tr className="border-b-2 hover:bg-[#e1b42f8a] mt-2  cursor-pointer">
                            <th className="flex gap-2 items-center px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap py-[2px] text-left text-[#393A3A] ">
                              {index + 1}
                              <Image
                                width={30}
                                height={30}
                                className=" object-cover p-[2px]"
                                src={userimage}
                                alt=""
                              />
                              <h1>{user?.name}</h1>
                            </th>
                            <td className="px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap py-[2px] text-left text-[#393A3A] font-[600]">
                              {user?.email}
                            </td>
                            <td className="px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap py-[2px] text-left text-[#393A3A] font-[600]">
                              {user?.ruler}
                            </td>
                            <td className="px-6 text-center align-middle  text-[14px] whitespace-nowrap py-[2px]  text-[#000000] font-[600]">
                              {user?.gender}
                            </td>
                            <td className="p-3 px-5 flex justify-end">
                              <Link
                                href={`/dashboard/singel_user/${user?._id}`}
                              >
                                <button
                                  type="button"
                                  className="mr-3 text-sm view-button-user hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                >
                                  view
                                </button>
                              </Link>
                            </td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
