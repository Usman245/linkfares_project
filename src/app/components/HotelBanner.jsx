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
// import {DatePicker} from "@nextui-org/date-picker";
import { GoArrowRight } from "react-icons/go";

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
    routePath: "Buses",
    pic: <FaBus color="white" />,
  },
  {
    id: 5,
    name: "Packages",
    routePath: "/Packages",
    pic: <TbPackages color="white" />,
  },
];

const HotelBanner = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="relative bg-[url('/images/hotel-bg.jpg')] bg-center bg-no-repeat bg-cover bg-blend-darken py-[100px] text-center">
      <div className="container">
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
        <h1 className="my-[40px] text-4xl font-semibold text-white">
          Find the right <span className="text-green-600">hotel today</span>
        </h1>
        <div className="w-full bg-green-600 p-10 xs:p-7 rounded">
          <form>
            <div className="grid grid-cols-12">
              <div className="xl:col-span-10 lg:col-span-12 xs:col-span-12 col-span-12 grid grid-cols-12">
                <div className="destinations col-span-12 xl:col-span-5">
                  <label className="text-white flex justify-start mb-2 font-semibold">
                    Where do you want to stay?
                  </label>
                  <input
                    className="xl:border-r w-full xs:rounded p-3 text-gray-71 lg:rounded-tl lg:rounded-bl lg:rounded-tr-none lg:rounded-br-none outline-none"
                    type="text"
                    placeholder="Enter destination or hotel name"
                  />
                </div>

                <div className="Check_in col-span-12 xs:mt-0 xl:col-span-2">
                  <label className="text-white flex justify-start mb-2 font-semibold">
                    Check in
                  </label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="xl:border-r w-full p-3 text-base xs:rounded lg:rounded-none text-gray-71 outline-none"
                  />
                </div>

                <div className="Check_out col-span-12 xs:mt-0 xl:col-span-2">
                  <label className="text-white flex justify-start mb-2 font-semibold">
                    Check in
                  </label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="xl:border-r w-full p-3 text-base xs:rounded lg:rounded-none text-gray-71 outline-none"
                  />
                </div>

                <div className="sel_booking col-span-12 xs:mt-0 xl:col-span-3">
                  <label className="text-white flex justify-start mb-2 font-semibold">
                    Guests and rooms
                  </label>
                  <select
                    id="countries"
                    class="xs:rounded lg:rounded-tl-none lg:rounded-bl-none lg:rounded-tr lg:rounded-br rounded text-gray-71 bg-white text-gray-900 text-sm py-[14.5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
              </div>

              {/* buttonn */}
              <div className="xl:col-span-2 lg:col-span-12 xs:col-span-12 col-span-12 mt-4 flex items-end xl:ml-5 lg:ml-0 xs:ml-0">
                <Link
                  className="flex justify-evenly items-center text-white font-semibold buttonss bg-[#429C7D] p-3 w-full  rounded"
                  href="/Hotels/HotelSelection/123"
                >
                  Search Hotels <GoArrowRight />
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HotelBanner;
