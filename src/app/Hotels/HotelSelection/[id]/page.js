"use client";
import HotelsDisplayPage from "@/app/components/HotelsDisplayPage";
import HotelSelectionView from "@/app/components/HotelSelectionView";
import React from "react";

const HotelSelectionPage = () => {
  return (
    <div >
      <HotelSelectionView /> <HotelsDisplayPage />
    </div>
  );
};

export default HotelSelectionPage;
