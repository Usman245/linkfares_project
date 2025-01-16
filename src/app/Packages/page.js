import React from "react";
import PacakgesFilterBanner from "../components/PacakgesFilterBanner";
import PackagesExplore from "../components/PackagesExplore";
import LinkFareAppSection from "../components/LinkFareAppSection";
import Newsletter from "../components/Newsletter";
import PackagesOverViewBanner from "../components/PackagesOverViewBanner";

const page = () => {
  return (
    <div>
      <PacakgesFilterBanner />
      <PackagesOverViewBanner />
      <PackagesExplore />
      <LinkFareAppSection />
      <Newsletter />
    </div>
  );
};

export default page;
