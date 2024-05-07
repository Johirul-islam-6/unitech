"use client";
import { PaymentInfo } from "@/components/Dashboard/PaymentInfo/PaymentInfo";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

const InfoPayment = () => {
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
    <>
      <PaymentInfo userInfo={userInfo} />
    </>
  );
};
export default InfoPayment;
