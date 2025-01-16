import React from "react";
import HotelBanner from "../components/HotelBanner";
import CityHotelCards from "../components/CityHotelCards";
import FabulasHotelCard from "../components/FabulasHotelCard";
import FabulasHotels from "../components/FabulasHotels";
import FastFacts from "../components/FastFacts";

const page = () => {
  return (
    <div>
      <HotelBanner />
      <CityHotelCards />
      <FabulasHotels />
      <FastFacts />
    </div>
  );
};

export default page;
