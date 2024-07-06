"use client";
import { EnrollCard } from "@/components/Dashboard/EnrollStudents/EnrollCard";
import { EnrollSearchbar } from "@/components/Dashboard/EnrollStudents/EnrollSearchbar";
import { LoadingPage } from "@/components/Loading/LoadingPage";
import { PageLoding } from "@/components/Loading/PageLoding";
import axios from "axios";
import React, { useEffect, useState } from "react";

const EnrollStudent = () => {
  // Date genarate---
  const today = new Date();
  const padZero = (num) => {
    return num < 10 ? "0" + num : num;
  };

  // Format the date to DD/MM/YYYY
  const formattedDate = `${padZero(today.getDate())}/${padZero(
    today.getMonth() + 1
  )}/${today.getFullYear()}`;

  const [Loading, setLoading] = useState(true);
  const [EnrollCourses, setEnrollCourses] = useState();
  const [searchingValue, setsearchingValue] = useState(formattedDate);

  useEffect(() => {
    // ------- all this user enroll courses courses--------
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://api.unitechbangladesh.com/api/v1/enroll/?searchTerm=${searchingValue}&page=1&limit=1000&sort=createdAt&sortOrder=desc`
        );

        setEnrollCourses(result?.data?.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [searchingValue]);

  const inputSearchbarValue = (e) => {
    setLoading(true);
    setsearchingValue(e);
  };

  return (
    <div className="">
      <EnrollSearchbar inputSearchbarValue={inputSearchbarValue} />

      <div className="h-[75vh]  overflow-y-auto px-3">
        {Loading && <LoadingPage />}

        <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-3">
          <EnrollCard EnrollCourses={EnrollCourses} />
        </div>
      </div>
    </div>
  );
};

export default EnrollStudent;
