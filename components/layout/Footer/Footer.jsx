import "./Footer.css";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/Assets/Navbar/LOGO.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer mt-[10px] pb-2 overflow-hidden ">
      <div className=" mx-auto mt-5  flex flex-col">
        <div>
          <div className="md:mt-8">
            <div className="mx-auto w-full  ">
              <div className="grid grid-cols-2 gap-5 px-3 pt-6 lg:pt-8 md:grid-cols-4">
                {/* -------- col-1 ---------- */}
                <div
                  className="hidden md:flex mx-auto  items-center justify-center"
                  style={{
                    zIndex: "10",
                  }}
                >
                  <div className="">
                    <Image
                      width={180}
                      height={200}
                      className="mx-auto border-2 rounded-full border-amber-700"
                      src={logo}
                      alt=""
                    />
                    <p className="py-1 ">Stay connected with the community</p>
                    <span className="flex gap-3 text-[30px] justify-center items-center py-3">
                      <FaFacebook className="text-blue-700" />
                      <FaYoutube className="text-red-700 " />
                      <FaInstagram className="text-pink-700" />
                    </span>
                  </div>
                </div>
                {/* -------- col-2 ---------- */}
                <div className="mx-auto">
                  <h2 className="mb-6 text-[20px]  font-[600] leading-[14px] text-[#101828] SILIGURI uppercase">
                    Our Courses
                  </h2>
                  <ul className="text-[#9B9B9B] text-[11px] sm:text-sm font-light">
                    <li className="mb-4">
                      <Link
                        href="/cetagorycourses/graphic-desing"
                        className=" hover:underline SILIGURI"
                      >
                        Graphic Design
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href="/cetagorycourses/web-development"
                        className=" hover:underline SILIGURI"
                      >
                        Web Development
                      </Link>
                    </li>

                    <li className="mb-4">
                      <Link
                        href="/cetagorycourses/digital-marketing"
                        className=" hover:underline SILIGURI"
                      >
                        Digital Marketing
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href="/cetagorycourses/basic-computer"
                        className=" hover:underline SILIGURI"
                      >
                        Basic Computer
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href="/cetagorycourses/Autocad-basic-premium"
                        className=" hover:underline SILIGURI"
                      >
                        Autocad Basic & premium
                      </Link>
                    </li>
                    {/* <li className="mb-4">
                      <Link href="/" className=" hover:underline SILIGURI">
                        Autocad 3d
                      </Link>
                    </li> */}
                  </ul>
                </div>
                {/* -------- col-3 ---------- */}
                <div className="mx-auto">
                  <h2 className="mb-6 text-[20px]  font-[600] leading-[14px] text-[#101828] SILIGURI uppercase">
                    Contacts
                  </h2>
                  <ul className="text-[#9B9B9B] text-[11px] sm:text-sm font-light">
                    <li className="mb-4">
                      <Link
                        href="/"
                        className=" hover:underline SILIGURI flex gap-2 items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          width="16"
                          viewBox="0 0 512 512"
                        >
                          <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                        </svg>{" "}
                        eng.hanifmahamud@gmail.com
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href="/"
                        className=" hover:underline SILIGURI flex gap-2 items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          width="16"
                          viewBox="0 0 512 512"
                        >
                          <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" />
                        </svg>
                        01705100763 , 01830-330129
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href="/"
                        className=" hover:underline SILIGURI flex gap-2 items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          width="12"
                          viewBox="0 0 384 512"
                        >
                          <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                        </svg>
                        Mahbub Plaza (7th floor), Room No #704/B, 4/A Indira
                        Road, Farmgate Dhaka-1215.
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* -------- col-4 ---------- */}
                <div
                  className="mx-auto"
                  style={{
                    zIndex: "10",
                  }}
                >
                  <h2 className="mb-6 text-[20px]  font-[600] leading-[14px] text-[#101828] SILIGURI uppercase">
                    Company
                  </h2>
                  <ul className="text-[#9B9B9B] text-[11px] sm:text-sm font-light">
                    <li className="mb-4">
                      <Link href="/about" className=" hover:underline SILIGURI">
                        About Us
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="/" className=" hover:underline SILIGURI">
                        Refund Policy
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="/" className=" hover:underline SILIGURI">
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="/" className=" hover:underline SILIGURI">
                        Terms And Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* -------- col-1 ---------- */}
                <div
                  className="md:hidden flex mx-auto  items-center justify-center"
                  style={{
                    zIndex: "10",
                  }}
                >
                  <div className="">
                    <Image
                      width={160}
                      height={200}
                      className="mx-auto border-2 rounded-full border-amber-700"
                      src={logo}
                      alt=""
                    />
                    <p className="py-1 hidden">
                      Stay connected with the community
                    </p>
                    <span className="flex gap-3 text-[30px] justify-center items-center py-3">
                      <FaFacebook className="text-blue-700" />
                      <FaYoutube className="text-red-700 " />
                      <FaInstagram className="text-pink-700" />
                    </span>
                  </div>
                </div>
              </div>

              {/* ----------- logo --------- */}
              <div className="flex justify-end  relative bottom-64 md:bottom-16 right-36 ">
                <div className="relative mt-5 block md:flex justify-end bg-red-400 items-center ">
                  <div className="block">
                    <div className="gradient-rounded-div-bottom  lg:bottom-[-80px] lg:right-[-60px] rounded-blur"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center md:text-end px-5 ">
        Unitech Bangladesh ©{year}
      </p>
    </div>
  );
};

export default Footer;
