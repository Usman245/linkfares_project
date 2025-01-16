import FlightBanner from "@/app/components/FlightBanner";
import FlightHomeBanner from "@/app/components/FlightHomeBanner";
import FlightsDiplayPage from "@/app/components/FlightsDiplayPage";
import React from "react";

const page = () => {
  return (
    <div>
      <FlightHomeBanner />
      <FlightsDiplayPage />
      
    </div>
  );
};

export default page;
