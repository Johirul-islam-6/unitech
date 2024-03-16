"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegDotCircle } from "react-icons/fa";
import "./Singel_user.css";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const SingelUsers = () => {
  const { id } = useParams();
  const [singelUser, setSingelUser] = useState();
  const [userInfo, setInfo] = useState();
  const [createdbookUser, setCreatedbookUser] = useState("");
  const [Loading, setLoading] = useState(true);
  const [Loading2, setLoading2] = useState(true);
  const [reload, setReloade] = useState(false);

  useEffect(() => {
    const getCookiesData = Cookies.get("CookieYouserData");
    const singelUser = JSON.parse(getCookiesData);
    setInfo(singelUser);

    //  ------------------ searching field -----------
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://unitech-server.vercel.app/api/v1/users/${id}`
        );

        setSingelUser(result?.data?.data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();

    // ------------ get 3 book lisht -----------
    async function fetchData2() {
      try {
        const result = await axios.get(
          `https://unitech-server.vercel.app/api/v1/books/?searchTerm=${singelUser?.email}&page=1&limit=5&sort=createdAt&sortOrder=desc`
        );

        setCreatedbookUser(result?.data?.data);
        setLoading2(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData2();
  }, [id, singelUser?.email, reload]);

  // --------------- delete a Book -----------------
  async function deleteBook(bookId, name) {
    try {
      const response = await axios.delete(
        `https://unitech-server.vercel.app/api/v1/books/${bookId}`
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
  }

  // ============== Ruler update ===============
  async function RulerUpdate(id, text) {
    const rulerUpdateData = {
      ruler: text,
    };
    try {
      const response = await axios.patch(
        `https://unitech-server.vercel.app/api/v1/users/${id}`,
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
        `http://localhost:8080/api/v1/users/roll/${singelUser?._id}`,
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

  return (
    <div className="overflow-auto h-[100vh]">
      <div className="flex flex-col justify-center items-center mt-5">
        <h3 className="text-[25px] font-[600] text-[#000]">
          {Loading ? (
            <>
              <div class="flex gap-2 pb-2">
                <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
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
                <div class="flex gap-2 pb-2">
                  <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                  <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                  <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                </div>
              </>
            ) : (
              <>{singelUser?.ruler}</>
            )}{" "}
          </p>
        </span>
        <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
        <div class="grid md:grid-cols-3 justify-center text-sm md:w-[80%] mx-auto mt-5">
          <div class="grid grid-cols-1">
            <div class="px-4 py-2 font-bold text-[#000]">
              Name :{" "}
              <span className="font-[400]">
                {Loading ? (
                  <>
                    <div class="flex gap-2 pb-2">
                      <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                    </div>
                  </>
                ) : (
                  <>{singelUser?.name}</>
                )}{" "}
              </span>
            </div>
            <div class="px-4 py-2 text-[#000] font-bold text-[16px] ">
              Roll :{" "}
              <span className="font-[400]">
                {Loading ? (
                  <>
                    <div class="flex gap-2 pb-2">
                      <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                    </div>
                  </>
                ) : (
                  <>{singelUser?.studentRoll}</>
                )}{" "}
              </span>{" "}
            </div>
          </div>

          <div class="grid grid-cols-1">
            <div class="px-4 py-2 text-[#000] font-bold text-[16px] ">
              Gender :{" "}
              <span className="font-[400]">
                {Loading ? (
                  <>
                    <div class="flex gap-2 pb-2">
                      <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                    </div>
                  </>
                ) : (
                  <>{singelUser?.gender}</>
                )}{" "}
              </span>{" "}
            </div>
            <div class="px-4 py-2 text-[#000] font-bold text-[16px] ">
              Join Date:{" "}
              <span className="font-[400]">
                {Loading ? (
                  <>
                    <div class="flex gap-2 pb-2">
                      <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                    </div>
                  </>
                ) : (
                  <>{singelUser?.joinginDate}</>
                )}{" "}
              </span>{" "}
            </div>
          </div>

          <div class="grid grid-cols-1">
            <div class="px-4 py-2 text-[#000] font-bold text-[16px] ">
              institute :{" "}
              <span className="font-[400]">
                {Loading ? (
                  <>
                    <div class="flex gap-2 pb-2">
                      <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                    </div>
                  </>
                ) : (
                  <>{singelUser?.institute}</>
                )}{" "}
              </span>{" "}
            </div>
            <div class="px-4 py-2 text-[#000] font-bold text-[16px] ">
              Department :{" "}
              <span className="font-[400]">
                {Loading ? (
                  <>
                    <div class="flex gap-2 pb-2">
                      <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                    </div>
                  </>
                ) : (
                  <>{singelUser?.department}</>
                )}{" "}
              </span>{" "}
            </div>
          </div>
          <div class="grid grid-cols-1">
            <div class="px-4 py-2 text-[#000] font-bold text-[16px] ">
              Address:{" "}
              <span className="font-[400]">
                {Loading ? (
                  <>
                    <div class="flex gap-2 pb-2">
                      <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                    </div>
                  </>
                ) : (
                  <>{singelUser?.address}</>
                )}{" "}
              </span>{" "}
            </div>
          </div>
          <div class="grid grid-cols-1">
            <div class="px-4 py-2 text-[#000] font-bold text-[16px] ">
              Email:{" "}
              <span className="font-[400]">
                {Loading ? (
                  <>
                    <div class="flex gap-2 pb-2">
                      <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                    </div>
                  </>
                ) : (
                  <>{singelUser?.email}</>
                )}{" "}
              </span>{" "}
            </div>
          </div>
          <div class="grid grid-cols-1">
            <div class="px-4 py-2 text-[#000] font-bold text-[16px] ">
              Phone:{" "}
              <span className="font-[400]">
                {Loading ? (
                  <>
                    <div class="flex gap-2 pb-2">
                      <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                      <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
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
          <p class="pt-4 text-base  flex items-center justify-start lg:justify-start md:text-center text-center">
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
        <div class="pt-12 pb-8 flex flex-wrap justify-center md:justify-start gap-2 ">
          <button
            onClick={() => RulerUpdate(singelUser?._id, "block")}
            class="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full"
          >
            Block
          </button>
          {userInfo?.ruler === "superAdmin" && (
            <>
              <button
                onClick={() => RulerUpdate(singelUser?._id, "admin")}
                class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
              >
                Create Admin
              </button>
            </>
          )}
          {userInfo?.ruler === "superAdmin" && (
            <>
              <button
                onClick={() => RulerUpdate(singelUser?._id, "student")}
                class="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded-full"
              >
                Student
              </button>
            </>
          )}
          {userInfo?.ruler === "superAdmin" && (
            <>
              <button
                onClick={() => RulerUpdate(singelUser?._id, "superAdmin")}
                class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
              >
                Super Admin
              </button>
            </>
          )}
        </div>
      </div>
      <div className="mt-20">
        <div className="   py-8 mt-10 singel-user md:ms-5">
          {Loading2 && (
            <>
              <h1 className="text-[18px] font-[600] md:text-center text-black text-center">
                Loading
              </h1>
            </>
          )}
          <h1 class="text-2xl font-bold lg:pt-0 md:text-center text-center">
            {" "}
            Total Enroll Courses
          </h1>
          <div className="pb-5 flex justify-center">
            <div class="lg:mx-0 w-[80%] mx-auto pt-3 border-b-2 border-green-500 opacity-25"></div>
          </div>
          <div className="d">
            <div className="md:px-3 items-center gap-3 grid md:grid-cols-4">
              {/* {Array.isArray(createdbookUser) &&
                createdbookUser.map((book) => (
                  <>
                    <div
                      key={book?.id}
                      className=" overflow-hidden bg-[#fff] rounded-md border-2"
                    >
                      <div className=" relative">
                        <div className="bg-[#0000007b] w-[100%] h-[100%]  absolute rounded-t-md"></div>
                        <Image
                          width={1424}
                          height={450}
                          className="rounded-t-md  w-[100%] h-[350px]"
                          src={book?.bookImage}
                          alt=""
                        />
                        <div className="flex bg-[#0000001e] justify-between w-[100%] px-2 absolute top-0 text-[#fff]   py-2  md:text-center text-center">
                          <button
                            onClick={() =>
                              deleteBook(book?._id, book?.bookName)
                            }
                            className="text-[12px] md:text-[12px] bg-red-800 hover:bg-red-500 text-white px-[10px] py-[3px] rounded-sm"
                          >
                            Delete
                          </button>
                          <Link href={`/detailsBook/${book?._id}`}>
                            <button className="text-[12px] md:text-[14px] bg-green-700 hover:bg-green-600 text-white px-[10px] py-[3px] rounded-sm">
                              view
                            </button>
                          </Link>
                        </div>
                        <h1 className="flex bg-[#000000a2]  w-[100%] justify-center absolute bottom-0 text-[#fff] text-[18px] md:text-[25px] font-[700] py-2  md:text-center text-center">
                          {book?.bookName}
                        </h1>
                      </div>
                    </div>
                  </>
                ))} */}
              <div className="div bg-slate-300 w-[100%] h-[320px]"></div>
              <div className="div bg-slate-300 w-[100%] h-[320px]"></div>
              <div className="div bg-slate-300 w-[100%] h-[320px]"></div>
              <div className="div bg-slate-300 w-[100%] h-[320px]"></div>
              <div className="div bg-slate-300 w-[100%] h-[320px]"></div>
              <div className="div bg-slate-300 w-[100%] h-[320px]"></div>
              <div className="div bg-slate-300 w-[100%] h-[320px]"></div>
              <div className="div bg-slate-300 w-[100%] h-[320px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingelUsers;
