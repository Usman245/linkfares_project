import React from "react";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { FaBus } from "react-icons/fa6";
import { MdOutlineKingBed } from "react-icons/md";
import { IoIosSpeedometer } from "react-icons/io";

const overviewData = [
  {
    id: 1,
    rate: "77k+",
    ratetitle: "Flights Booked",
    pic: <RiFlightTakeoffFill color="#429C7D" size={24} />,
  },
  {
    id: 2,
    rate: "600k+",
    ratetitle: "Buses Booked",
    pic: <FaBus color="#429C7D" size={24} />,
  },

  {
    id: 3,
    rate: "80k+",
    ratetitle: "Hotels Booked",
    pic: <MdOutlineKingBed color="#429C7D" size={24} />,
  },
  {
    id: 4,
    rate: "40m+",
    ratetitle: "Kilometres traveled",
    pic: <IoIosSpeedometer color="#429C7D" size={24} />,
  },
];
const PackagesOverViewBanner = () => {
  return (
    <div className="bg-white">
      <div className="container">
        <div className="py-[72px] grid  gap-4  grid-cols-1  md:grid-cols-2 lg:grid-cols-4  ">
          {overviewData.map((item, index) => (
            <div className="flex items-center gap-2  " key={index}>
              <div>{item.pic}</div>
              <div className="flex flex-col gap-2 ">
                <p className="font-roboto text-4xl font-normal text-black">
                  {item.rate}
                </p>
                <p className="font-roboto text-xl font-normal text-black-26">
                  {item.ratetitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagesOverViewBanner;
