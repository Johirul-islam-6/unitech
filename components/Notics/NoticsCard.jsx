"use client";
import { useEffect, useState } from "react";
import "./Notics.css";
import Cookies from "js-cookie";
import Link from "next/link";

export const NoticsCard = ({ allNotic, deleteToper }) => {
  const [Loading, setLoading] = useState(true);
  const accessToken = Cookies.get("accessToken");
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    if (accessToken) {
      const getCookiesData = Cookies.get("CookieYouserData");
      const cookiesInfo = JSON.parse(getCookiesData);
      setUserInfo(cookiesInfo);
    }
    setLoading(false);
  }, [accessToken]);
  console.log(userInfo);
  return (
    <>
      {allNotic?.map((item, index) => (
        <div
          key={index}
          className="relative border-4 border-amber-700 md:px-0 article cursor-pointer rounded-lg"
        >
          <div className="absolute w-[100%] h-[100%] bg-[#0000008e] hover:bg-[#00000045]">
            {userInfo?.ruler === "superAdmin" && (
              <h1
                onClick={() => deleteToper(item?.id, item?._id)}
                className="text-[22px] z-30 absolute right-0 font-[900] text-red-600 pe-2 top-0"
              >
                x
              </h1>
            )}
            {userInfo?.studentRoll === "0000" ? (
              <div className="flex flex-col absolute bottom-0 px-2 py-3 justify-end items-start">
                <div className="d">
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-white">
                    আপনি আমাদের স্টুডেন্ট না ।
                  </h3>
                  <span className="text-amber-300 font-[800]">
                    তাই এক্সেস পাবেন না ।
                  </span>
                </div>
              </div>
            ) : (
              <>
                {accessToken ? (
                  <Link
                    rel="noopener noreferrer"
                    href={item.PdfLink}
                    aria-label={item.NoticTitle}
                    target="_blank"
                  >
                    <div className="flex flex-col absolute bottom-0 px-2 py-3 justify-end items-start">
                      <div className="d">
                        <h3 className="flex-1 SILIGURI underline py-2 text-lg font-semibold leading-snug text-white">
                          {item.NoticTitle}
                        </h3>
                        <span className="text-amber-300 font-[800]">
                          {item.CDate}
                        </span>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <Link href={"/login"}>
                    <div className="flex flex-col absolute bottom-0 px-2 py-3 justify-end items-start">
                      <div className="d">
                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-white">
                          আপনি আমাদের স্টুডেন্ট না ।
                        </h3>
                        <span className="text-amber-300 font-[800]">
                          তাই এক্সেস পাবেন না ।
                        </span>
                      </div>
                    </div>
                  </Link>
                )}
              </>
            )}
          </div>

          <img
            alt=""
            className="object-cover w-[400px] h-[300px] dark:bg-gray-500 rounded-lg"
            src={item.PdfImage}
          />
        </div>
      ))}
    </>
  );
};
