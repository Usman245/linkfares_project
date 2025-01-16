import React from "react";
import { Avatar } from "@nextui-org/react";

const WhyUseLinKFare = () => {
  const helpsData = [
    {
      ctitle: "More For Less",
      csubtitle: `We offer e-tickets with exceptional discounted
deals across the country`,
      cicon: "/images/moreforless.png",
    },
    {
      ctitle: "Lowest Fares",
      csubtitle: "We provide affordable tickets to save up to 50%",
      cicon: "/images/lowestfare.png",
    },

    {
      ctitle: "Discover",
      csubtitle: `We make travelling easy across Pakistan by
providing easy e-ticket`,
      cicon: "/images/discover.png",
    },
  ];
  return (
    <div className="bg-green-600 py-12  mb-16">
      <div className="container">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-white font-inter ">
              Top Bus Partners
            </h1>
            <p className="text-lg font-regular  text-white font-inter">
              Travel with the best Buses in Pakistan.
            </p>
          </div>

          <div className="py-6  grid  grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-3">
            {helpsData.map((items, index) => (
              <div
                className="flex items-center  p-3 border border-light-C rounded-lg drop-shadow-xl gap-3"
                key={index}
              >
                <div className="">
                  <Avatar
                    src={`${items.cicon}`}
                    className="w-20 h-20 text-large"
                  />
                </div>
                <div className="flex flex flex-col  gap-2">
                  <p className=" text-xl font-medium  text-white">
                    {items.ctitle}
                  </p>
                  <p className="text-sm font-regular text-blue-54 text-white ">
                    {items.csubtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUseLinKFare;
