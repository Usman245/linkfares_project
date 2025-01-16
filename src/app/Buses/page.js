import React from "react";
import BusesBaner from "../components/BusesBaner";
import HelpCenter from "../components/HelpCenter";
import BusPartners from "../components/BusPartners";
import WhyUseLinKFare from "../components/WhyUseLinKFare";
import LinkFareAppSection from "../components/LinkFareAppSection";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";

const page = () => {
  return (
    <div>
      <BusesBaner />
      <HelpCenter />
      <BusPartners />
      <WhyUseLinKFare />
      <FrequentlyAskedQuestions />
      <LinkFareAppSection />
    </div>
  );
};

export default page;
