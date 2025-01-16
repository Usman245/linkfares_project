import React from "react";
import { FaHotel } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineKingBed } from "react-icons/md";
const factsdata = [
  {
    cardpic: <FaHotel />,
    carddesc: "Hotel brands to choose from",
    cardcountdesc: "60+",
  },

  {
    cardpic: <FaLocationDot />,
    carddesc: "Hotel destinations to explore",
    cardcountdesc: "5000+",
  },

  {
    cardpic: <MdOutlineKingBed />,
    carddesc: "Hotel destinations to explore",
    cardcountdesc: "3.2M+",
  },
];

const FastFacts = () => {
  return (
    <div className="container">
      <div className="pb-20 pt-10 flex flex-col gap-10">
        <div className="flex flex-col justify-center gap-2 items-center">
          <p className="text-3xl font-semibold text-black font-poppins">
            Fast <span className="text-green-600">facts</span>
          </p>
          <p className="text-lg font-roboto">
            {
              "Sleep easy, armed with the stuff that's good to know before you go."
            }
          </p>
        </div>

        <div className="grid grid-cols-3 ">
          {factsdata.map((item, index) => (
            <div className="flex flex-col gap-3" key={index}>
              <div>{item.cardpic}</div>
              <p className="text-xl font-regular text-black-16">
                {" "}
                {item.carddesc}
              </p>
              <p className="text-xl font-bold text-black-16">
                {item.cardcountdesc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FastFacts;
