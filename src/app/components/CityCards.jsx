"use client";

import Link from "next/link";
import React from "react";
import ReactStars from "react-rating-stars-component";

const CityCards = ({ hotel }) => {
  return (
    <Link href={`/Hotels/ViewHotel/${hotel._id}`}>
      <div className="flex flex-col rounded-lg bg-white drop-shadow-lg">
        <div className="h-[115px] w-full">
          <img
            src="/images/pchotel.png"
            className="w-full object-fill rounded-top-lg h-full"
            alt={hotel.hoteltitle}
          />
        </div>
        <div className="flex flex-col p-3">
          <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-between sm:items-start gap-2">
            <div className="flex-col flex">
              <p className="text-xl font-roboto text-black-16 font-bold">
                {hotel.hoteltitle}
              </p>
              <p className="text-lg font-regular font-roboto text-black-16">
                {hotel.locationtite}
              </p>
              <div className="flex gap-2 items-center">
                <p className="text-lg font-regular text-black-16">
                  {hotel.hrating}
                </p>
                <p className="text-xl font-medium text-black-16">
                  {hotel.servicetype}
                </p>
                <p className="text-lg font-regular text-gray-69">
                  <span className="mr-2">{hotel.totalreview}</span>
                  reviews
                </p>
              </div>
            </div>
            <div className="flex">
              <ReactStars
                count={5}
                value={parseFloat(hotel.hrating)}
                size={24}
                activeColor="#F55D42"
                classNames={"custom-star"}
              />
            </div>
          </div>
        </div>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="flex flex-col justify-center items-center sm:justify-end sm:items-end gap-2 p-3 rounded-b-lg drop-shadow-lg bg-white">
          <p className="text-xl font-bold font-roboto">Rs{hotel.price}</p>
          <p className="text-lg text-gray-69 font-regular">{hotel.renttype}</p>
        </div>
      </div>
    </Link>
  );
};

export default CityCards;
