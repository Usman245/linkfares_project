import Link from "next/link";
import React from "react";

const FabulasHotelCard = ({ hotel }) => {
  return (
    <Link href={"/Hotels/HotelSelection/123"}>
      <div className="flex flex-col rounded-lg bg-white drop-shadow-lg   rounded-t-lg   ">
        <div className="h-[190px] w-full rounded-t-lg ">
          <img
            src={hotel?.hotelpic}
            className="w-full object-fill  rounded-t-lg h-full"
            alt={hotel?.hotelpic}
          />
        </div>
        <div className="flex flex-col p-3">
          <div className="flex  flex-col sm:flex-row    sm:justify-between  gap-2">
            <div className="flex-col  items-center sm:items-start flex gap-2">
              <p className="text-xl font-roboto text-black-16 font-bold">
                {hotel?.hotellocation}
              </p>
              <p className="text-lg font-regular font-roboto text-black-16">
                {hotel?.locationtitle}
              </p>
            </div>

            <div className="flex  flex-col justify-center items-center  sm:justify-end sm:items-end gap-2 rounded-b-lg ">
              <p className="text-lg font-regular font-roboto text-gray-69">
                Rs{hotel?.price}
              </p>
              <p className="text-2xl font-bold font-roboto">Rs{hotel?.price}</p>
              <p className="text-lg text-gray-69 font-regular">
                {hotel?.renttype}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FabulasHotelCard;
