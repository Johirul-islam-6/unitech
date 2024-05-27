"use client";
import React, { useEffect, useState } from "react";
import { NoticsCard } from "./NoticsCard";
import "./Notics.css";
import axios from "axios";
import { LoadingPage } from "../Loading/LoadingPage";
import Swal from "sweetalert2";

export const Notics = () => {
  // get all toper
  const [Loading, setLoading] = useState(true);
  const [allNotic, setallNotic] = useState();
  const [reload, setreload] = useState(false);

  useEffect(() => {
    // ------- academic courses--------
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://unitech-server.vercel.app/api/v1/notice`
        );
        setallNotic(result?.data?.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [reload]);

  // ----------- delete Toper book -------------

  async function deleteToper(id, name) {
    try {
      const response = await axios.delete(
        `https://unitech-server.vercel.app/api/v1/notice/${id}`
      );

      if (response?.data?.success) {
        Swal.fire({
          title: ` ${name}`,
          text: `Delete Complited`,
          icon: "success",
        });
      }
      setreload(true);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  }

  console.log(allNotic);
  return (
    <>
      {Loading ? (
        <div className="w-[100%] h-[100vh]">
          <LoadingPage content={"notic Broad"} />
        </div>
      ) : (
        <div className="notics-div overflow-hidden overflow-y-auto border-shadow">
          <div className="px-5 flex gap-x-2 gap-y-4 pb-16 flex-wrap justify-center items-center mt-5">
            <NoticsCard deleteToper={deleteToper} allNotic={allNotic} />
          </div>
        </div>
      )}
    </>
  );
};
