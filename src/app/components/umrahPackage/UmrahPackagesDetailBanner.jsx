import React from "react";
import Image from "next/image";

const UmrahPackagesDetailBanner = ({
  title,
  para1,
  imgPath,
  days,
  startingPoint,
}) => {
  return (
    <div className="w-full">
      <h1
        className="
        text-green-600 font-medium font-poppins text-xl"
      >
        {title}
      </h1>
      <p className="text-[17px] text-[#646464] mt-2">{para1}</p>
      <p className=" text-[17px] text-[#646464] mt-2">
        {" "}
        We are best Value <span className="font-medium">{days} days</span>
        <span className="text-green-600"> Umrah Package from</span>{" "}
        <span className="font-medium">{startingPoint}</span> . Our package
        includes, Direct airline ticket, complete transportation, hotels,{" "}
        <span className="font-medium"> quick Umrah Visa processing </span> and
        great customer assitance in Saudi Arabia.{" "}
      </p>
      <Image
        src={imgPath}
        width={1280}
        height={400}
        layout="responsive"
        quality="100"
        alt=""
      />
    </div>
  );
};

export default UmrahPackagesDetailBanner;
