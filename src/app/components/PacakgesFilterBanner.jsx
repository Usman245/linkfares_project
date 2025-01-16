"use client";
import React, { useState } from "react";
import { MdFlight } from "react-icons/md";
import { MdOutlineKingBed } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { FaBus } from "react-icons/fa6";
import { TbPackages } from "react-icons/tb";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";

const flighttabs = [
  {
    id: 1,
    name: "Flights",
    routePath: "/Flights",
    pic: <MdFlight color="white" style={{ transform: "rotate(50deg)" }} />,
  },
  {
    id: 2,
    name: "Hotels",
    routePath: "/Hotels",
    pic: <MdOutlineKingBed color="white" />,
  },
  {
    id: 3,
    name: "Car Hire",
    routePath: "/Cabs",
    pic: <FaCarSide color="white" />,
  },
  {
    id: 4,
    name: "Buses",
    routePath: "/Buses",
    pic: <FaBus color="white" />,
  },
  {
    id: 5,
    name: "Packages",
    routePath: "/Packages",
    pic: <TbPackages color="white" />,
  },
];

const PacakgesFilterBanner = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="bg-[url('/images/packagesbanner.png')] bg-green-600">
      <div className="container ">
        <div className="py-[120px] flex flex-col  gap-12 justify-center items-center ">
          <h1 className="font-semibold font-poppins  text-[32px] text-white text-center">
            Packages
          </h1>
          <div className="flex gap-2 flex-wrap  item-center justify-center">
            {flighttabs.map((item, index) => (
              <Link
                href={`${item.routePath}`}
                className={`flex gap-2 items-center  justify-center  py-[10px] px-4 rounded-[100px] border   border-gray-50   hover:bg-green-500 hover:border-opacity-0`}
                key={index}
              >
                <div>{item.pic}</div>

                <span className="font-roboto text-sm font-bold  text-white">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="w-full">
            <form className="w-full">
              <div className="grid  grid-cols-1 md:grid-cols-12 gap-2 w-full">
                <div className=" col-span-12 md:col-span-12 lg:col-span-11  w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-1  w-full ">
                    <div className="bg-white  rounded-lg lg:rounded-none  lg:rounded-l-lg p-2 flex lg:justify-center  w-full  relative e">
                      <div className="flex flex-col justify-center ">
                        <label className=" font-roboto text-sm font-bold ">
                          From
                        </label>
                        <input
                          type="text"
                          className="  w-full text-base  text-gray-71 "
                          placeholder="Enter Origin"
                        />
                      </div>

                      <div className="absolute right-[50%] bottom-[-40%] lg:right-[-6%]  lg:bottom-[15%] ">
                        <MdOutlineSwapHorizontalCircle
                          size={"40"}
                          color="#429C7D"
                          enableBackground={true}
                          className="bg-white rounded-full m-0 p-0  transform rotate-90  lg:rotate-0"
                        />
                      </div>
                    </div>

                    <div className="bg-white  rounded-lg lg:rounded-none  p-2 flex lg:justify-center">
                      <div className="flex flex-col justify-center ">
                        <label className=" font-roboto text-sm font-bold ">
                          From
                        </label>
                        <input
                          type="text"
                          className="  w-full text-base  text-gray-71 "
                          placeholder="Enter Origin"
                        />
                      </div>
                    </div>

                    <div className="bg-white rounded-lg lg:rounded-none   p-2 relative flex lg:justify-center">
                      <div className="flex flex-col  justify-center">
                        <label className=" font-roboto text-sm font-bold ">
                          Depart
                        </label>
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          className="   w-full text-base  text-gray-71 outline-none"
                        />
                      </div>
                    </div>
                    <div className="bg-white rounded-lg lg:rounded-none  p-2 flex lg:justify-center">
                      <div className="flex flex-col  justify-center">
                        <label className=" font-roboto text-sm font-bold ">
                          Return
                        </label>
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          className="   w-full text-base  text-gray-71 outline-none"
                        />
                      </div>
                    </div>

                    <div className="bg-white rounded-lg lg:rounded-none  lg:rounded-r-lg p-2 flex lg:justify-center">
                      <div className="flex flex-col  justify-center">
                        <label className=" font-roboto text-sm font-bold ">
                          Travellers and cabin class
                        </label>
                        <input
                          type="text"
                          className="  w-full text-base  text-gray-71 "
                          placeholder="Adult acconomy"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-12   md:col-span-12 lg:col-span-1">
                  {" "}
                  <Link href={"/Packages"}>
                    <button
                      className=" px-[14px] py-3 w-full font-roboto text-sm font-bold text-white bg-green-500 hover:bg-green-700 rounded-lg h-full"
                      type="submit"
                    >
                      Search
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PacakgesFilterBanner;
