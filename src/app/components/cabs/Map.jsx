import React from "react";
import Image from "next/image";

const MapComponent = () => {
  return (
    <div className="container md:mmt-24 mt-8">
      <h1 className="text-[32px] font-poppins font-bold">
        Select your London pick-up location
      </h1>
      <p className="text-base font-roboto font-normal mt-1">
        There are 190 car hire locations in London. Choose the cheapest or
        easiest now.
      </p>
      <Image
        src={"/images/maps.png"}
        layout="responsive"
        objectFit="cover"
        quality={100}
        width={1000}
        height={400}
        className="mt-4 rounded-lg w-full h-auto"
      />
    </div>
  );
};

export default MapComponent;
