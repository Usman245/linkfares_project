"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosAirplane } from "react-icons/io";
import { GrFormNextLink } from "react-icons/gr";
import { Slider } from "@nextui-org/react";
import ReactStars from "react-rating-stars-component";
import Link from "next/link";
const BusReturnTicketCard = ({ FlightsData }) => {
  const [visibleRecords, setVisibleRecords] = useState(5); // State for visible records

  const toggleVisibleRecords = () => {
    // Toggle between showing all records and only 5 records
    if (visibleRecords === 5) {
      setVisibleRecords(FlightsData.length); // Show all records
    } else {
      setVisibleRecords(5); // Show only 5 records
    }
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        {FlightsData.slice(0, visibleRecords).map((item, index) =>
          item.flightType === "oneWay" ? (
            <div
              className="p-[24px] sm:p-[37px] bg-white drop-shadow-xl rounded-2xl flex flex-col gap-2"
              key={index}
            >
              <div className="grid grid-cols-12">
                <div className="col-span-12 sm:col-span-3 flex justify-center  xs:justify-start xs:items-end">
                  <div>
                    <Image
                      src={item.airlineimg}
                      width={113}
                      height={56}
                      alt="Airline"
                    />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-6 flex sm:justify-center">
                  <div className="flex flex-col md:flex-row gap-3 justify-center sm:items-center w-full">
                    <div className="flex items-start justify-between sm:flex-col gap-2">
                      <p className="text-xl xl:text-[32px] font-medium text-gray-4B">
                        {item.origintime}
                      </p>
                      <p className="font-medium text-base text-gray-4B">
                        {item.originplace}
                      </p>
                    </div>

                    <div className="flex flex-row-reverse justify-center sm:justify-end items-center md:flex-col gap-1">
                      <p className="text-lg font-regular text-gray-4B">
                        {item.FlightDuration}
                      </p>
                      <div className="flex flex-col md:flex-row items-center">
                        <hr className="sm:h-[60px] sm:w-[0.5px] md:h-0.5 md:w-[90px] xl:w-[172px] border-t-0 bg-gray-4B" />
                        <IoIosAirplane
                          color="#4B4B4B"
                          className="rotate-90 md:rotate-0"
                        />
                      </div>
                    </div>

                    <div className="flex flex-row items-start justify-between sm:flex-col gap-2">
                      <p className="text-xl xl:text-[32px] font-medium text-gray-4B">
                        {item.destinationtime}
                      </p>
                      <p className="font-medium text-base text-gray-4B">
                        {item.destinationlocation}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-3 col-span-12 flex justify-end py-2 sm:py-0">
                  <div className="flex flex-wrap justify-center flex-row-reverse items-center xs:justify-between sm:flex-col gap-2 sm:justify-end w-full">
                    <p className="text-2xl xl:text-3xl text-gray-4B font-poppins font-semibold">
                      {item.ticketPrice}
                    </p>

                    <Link href={`BusesView/${item.id}`}>
                      <button className="px-[25px] py-[10px] xl:py-[13px] xl:px-[45px] flex gap-1 justify-center items-center bg-green-600 rounded-[25px] w-full xs:w-max">
                        <p className="text-base font-poppins text-white">
                          Select
                        </p>
                        <GrFormNextLink color="white" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-1 items-center">
                <p className="text-lg font-regular text-gray-4B font-poppins">
                  {item.flightRating}/5
                </p>
                <ReactStars
                  count={5} // Total stars
                  value={item.flightRating} // Current rating
                  size={24}
                  activeColor="#FFA033"
                  edit={false} // Prevent editing
                />

                <Slider
                  aria-label="Player progress"
                  color="foreground"
                  size="sm"
                  hideThumb={true}
                  isDisabled={true}
                  defaultValue={20}
                  className="max-w-md border-s-foreground-none"
                  classNames={{
                    filler: "bg-green-600",
                  }}
                />
              </div>
            </div>
          ) : (
            <div
              className="p-[24px] sm:p-[37px] bg-white drop-shadow-xl rounded-2xl flex flex-col gap-2"
              key={index}
            >
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-12">
                  <div className="col-span-12 sm:col-span-3 flex justify-center xs:justify-start xs:items-end">
                    <div>
                      <Image
                        src={item.airlineimg}
                        width={113}
                        height={56}
                        alt="Airline"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-6 flex sm:justify-center">
                    <div className="flex flex-col md:flex-row gap-3 justify-center sm:items-center w-full">
                      <div className="flex items-start justify-between sm:flex-col gap-2">
                        <p className="text-xl xl:text-[32px] font-medium text-gray-4B">
                          {item.origintime}
                        </p>
                        <p className="font-medium text-base text-gray-4B">
                          {item.originplace}
                        </p>
                      </div>

                      <div className="flex flex-row-reverse justify-center sm:justify-end items-center md:flex-col gap-1">
                        <p className="text-lg font-regular text-gray-4B">
                          {item.FlightDuration}
                        </p>
                        <div className="flex flex-col md:flex-row items-center">
                          <hr className="sm:h-[60px] sm:w-[0.5px] md:h-0.5 md:w-[90px] xl:w-[172px] border-t-0 bg-gray-4B" />
                          <IoIosAirplane
                            color="#4B4B4B"
                            className="rotate-90 md:rotate-0"
                          />
                        </div>
                      </div>

                      <div className="flex flex-row items-start justify-between sm:flex-col gap-2">
                        <p className="text-xl xl:text-[32px] font-medium text-gray-4B">
                          {item.destinationtime}
                        </p>
                        <p className="font-medium text-base text-gray-4B">
                          {item.destinationlocation}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-3 col-span-12 flex justify-end py-2 sm:py-0"></div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-12 sm:col-span-3 flex justify-center xs:justify-start xs:items-end">
                    <Image
                      src={item.airlineimg}
                      width={113}
                      height={56}
                      alt="Airline"
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-6 flex sm:justify-center">
                    <div className="flex flex-col md:flex-row gap-3 justify-center sm:items-center w-full">
                      <div className="flex items-start justify-between sm:flex-col gap-2">
                        <p className="text-xl xl:text-[32px] font-medium text-gray-4B">
                          {item.returnarrivaltime}
                        </p>
                        <p className="font-medium text-base text-gray-4B">
                          {item.returndestination}
                        </p>
                      </div>

                      <div className="flex flex-row-reverse justify-center sm:justify-end items-center md:flex-col gap-1">
                        <p className="text-lg font-regular text-gray-4B">
                          {item.FlightDuration}
                        </p>
                        <div className="flex flex-col md:flex-row items-center">
                          <hr className="sm:h-[60px] sm:w-[0.5px] md:h-0.5 md:w-[90px] xl:w-[172px] border-t-0 bg-gray-4B" />
                          <IoIosAirplane
                            color="#4B4B4B"
                            className="rotate-[270deg] md:rotate-180"
                          />
                        </div>
                      </div>

                      <div className="flex flex-row items-start justify-between sm:flex-col gap-2">
                        <p className="text-xl xl:text-[32px] font-medium text-gray-4B">
                          {item.returntime}
                        </p>
                        <p className="font-medium text-base text-gray-4B">
                          {item.returnorigin}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-3 col-span-12 flex justify-end py-2 sm:py-0">
                    <div className="flex flex-wrap justify-center flex-row-reverse items-center xs:justify-between sm:flex-col gap-2 sm:justify-end w-full">
                      <p className="text-2xl xl:text-3xl text-gray-4B font-poppins font-semibold">
                        {item.ticketPrice}
                      </p>

                      <Link href={`BusesView/${item.id}`}>
                        <button className="px-[25px] py-[10px] xl:py-[13px] xl:px-[45px] flex gap-1 justify-center items-center bg-green-600 rounded-[25px] w-full xs:w-max">
                          <p className="text-base font-poppins text-white">
                            Select
                          </p>
                          <GrFormNextLink color="white" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-1 items-center">
                  <p className="text-lg font-regular text-gray-4B font-poppins">
                    {item.flightRating}/5
                  </p>
                  <ReactStars
                    count={5}
                    value={item.flightRating}
                    size={24}
                    activeColor="#FFA033"
                    edit={false}
                  />

                  <Slider
                    aria-label="Player progress"
                    color="foreground"
                    size="sm"
                    hideThumb={true}
                    isDisabled={true}
                    defaultValue={20}
                    className="max-w-md border-s-foreground-none"
                    classNames={{
                      filler: "bg-green-600",
                    }}
                  />
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <div className="flex justify-center  ">
        <button
          className="py-[18px] px-[40px] rounded-[55px] bg-gray-87 text-white  text-lg font-semibold"
          onClick={toggleVisibleRecords}
        >
          {visibleRecords === 5 ? "SHOW MORE RESULTS" : "SEE LESS RESULTS"}
        </button>
      </div>
    </div>
  );
};

export default BusReturnTicketCard;
