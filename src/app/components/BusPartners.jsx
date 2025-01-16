"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const BusPartners = () => {
  const partnerData = [
    {
      partnerIcon: "/images/silklines.png",
    },
    {
      partnerIcon: "/images/RT.png",
    },
    {
      partnerIcon: "/images/natco.png",
    },
    {
      partnerIcon: "/images/Rajpoot.png",
    },
    {
      partnerIcon: "/images/fmbt.png",
    },
    {
      partnerIcon: "/images/daewoo.png",
    },
  ];
  return (
    <div className="container">
      <div className="flex flex-col  gap-8  pb-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-black-16 font-inter ">
            Top Bus Partners
          </h1>
          <p className="text-lg font-regular  text-black-16  font-inter">
            Travel with the best Buses in Pakistan.
          </p>
        </div>

        <Marquee
          className=" flex justify-between custom-marquee"
          speed={70}
          pauseOnHover={true}
        >
          {partnerData.map((item, index) => (
            <div className="mx-[30px] md:mx-[70px]" key={index}>
              <img
                src={`${item.partnerIcon}`}
                className="object-fit w-full h-full "
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default BusPartners;
