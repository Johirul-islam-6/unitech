import { DashbordMain } from "@/components/Dashboard/MainPage/DashbordMain";
import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="p-2 overflow-auto h-[100vh]">
        <DashbordMain />
      </div>
    </>
  );
};
export default Dashboard;
