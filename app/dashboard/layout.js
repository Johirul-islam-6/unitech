"use client";
import { TopDBLayout } from "@/components/Dashboard/DBLayout/TopDBLayout";
import "./Dashboard.css";
import { LeftDBLayout } from "@/components/Dashboard/DBLayout/LeftDBLayout";
import { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
export default function RootLayout({ children }) {
  const route = useRouter();
  const [Loading, setLoading] = useState(true);
  const accessToken = Cookies.get("accessToken");
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    if (!accessToken) {
      route.push("/login");
    }
    if (accessToken) {
      const getCookiesData = Cookies.get("CookieYouserData");
      const cookiesInfo = JSON.parse(getCookiesData);
      setUserInfo(cookiesInfo);
    }
    setLoading(false);
  }, [accessToken]);

  return (
    <html lang="en">
      <body className={``}>
        <ToastContainer />
        {Loading && (
          <>
            <div className="absolute w-[100%] bg-white h-[140vh] z-[1000]">
              <div className="flex space-x-2 justify-center items-center bg-white h-screen  ">
                <span className="sr-only">Loading...</span>
                <div className="h-8 w-8 bg-[#563A9F] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="h-8 w-8 bg-[#563A9F] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="h-8 w-8 bg-[#563A9F] rounded-full animate-bounce"></div>
              </div>
            </div>
          </>
        )}

        {userInfo?.ruler === "student" ? (
          <>
            <div className="d">
              <div className="h-screen w-screen bg-[#ffffffd1] flex justify-center items-center gap-5">
                <div className="relative inline-flex  group">
                  <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                  <a
                    href="#"
                    title="Get quote now"
                    className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                  >
                    You are not admin
                  </a>
                </div>
                <div className="relative inline-flex  group">
                  <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                  <a
                    href="#"
                    title="Get quote now"
                    className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                  >
                    Go
                  </a>
                </div>
                <div className="relative inline-flex  group">
                  <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                  <Link
                    href="/"
                    title="Get quote now"
                    className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                  >
                    Back Home
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex d-max-w-screen-xl mx-auto">
              <div className="dashboard-left-container md:block hidden border-r-2 border-l-2 ">
                <LeftDBLayout />
              </div>
              <div className="dashboard-body border-t-2 border-b-2 ">
                <TopDBLayout />
                {children}
              </div>
            </div>
          </>
        )}
      </body>
    </html>
  );
}
