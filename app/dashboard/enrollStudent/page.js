"use client";
import { EnrollCard } from "@/components/Dashboard/EnrollStudents/EnrollCard";
import { EnrollSearchbar } from "@/components/Dashboard/EnrollStudents/EnrollSearchbar";
import axios from "axios";
import React, { useEffect, useState } from "react";

const EnrollStudent = () => {
  const [Loading, setLoading] = useState(true);
  const [EnrollCourses, setEnrollCourses] = useState();
  const [searchingValue, setsearchingValue] = useState("");

  const inputSearchbarValue = (e) => {
    setsearchingValue(e);
  };

  useEffect(() => {
    // ------- all this user enroll courses courses--------
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://unitech-server.vercel.app/api/v1/enroll/?searchTerm=${searchingValue}&page=1&limit=1000&sort=createdAt&sortOrder=desc`
        );

        setEnrollCourses(result?.data?.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [searchingValue]);

  return (
    <div className="">
      <EnrollSearchbar inputSearchbarValue={inputSearchbarValue} />

      <div className="h-[75vh]  overflow-y-auto px-3">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-3">
          <EnrollCard EnrollCourses={EnrollCourses} />
        </div>
      </div>
    </div>
  );
};

export default EnrollStudent;
