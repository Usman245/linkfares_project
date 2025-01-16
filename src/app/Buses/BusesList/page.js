import BusesDisplayPage from "@/app/components/BusesDisplayPage";
import BusesHomeBanner from "@/app/components/BusesHomeBanner";
import React from "react";

const page = () => {
  return (
    <div>
      <BusesHomeBanner />
      <BusesDisplayPage />
    </div>
  );
};

export default page;
