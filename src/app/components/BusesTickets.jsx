"use client";

import React, { useState } from "react";
import ReturnTicketCard from "./ReturnTicketCard";
import BusReturnTicketCard from "./BusReturnTicketCard";
const packagesData = [
  {
    id: 1,
    categoryname: "Best",
    packagePrice: "73,138",
    packageTime: "06 h 35 min (average)",
  },
  {
    id: 2,
    categoryname: "Cheap",
    packagePrice: "70,340",
    packageTime: "04 h 45 min (average)",
  },
  {
    id: 3,
    categoryname: "Fastest",
    packagePrice: "115,607",
    packageTime: "06 h 35 min (average)",
  },
];

const FlightsData = [
  {
    id: 1,
    flightType: "oneWay",
    airlineimg: "/images/daewoo.png",
    origintime: "07:30",
    originplace: "LHE",
    FlightDuration: "5h 50 min",
    destinationtime: "13:20",
    destinationlocation: "DXB",
    ticketPrice: "65,000",
    flightRating: 4,
  },
  {
    id: 2,
    flightType: "twoWay",
    airlineimg: "/images/daewoo.png",
    origintime: "09:15",
    originplace: "ISB",
    FlightDuration: "7h 20 min",
    destinationtime: "16:35",
    destinationlocation: "DOH",
    returnorigin: "DOH",
    returntime: "11:00",
    returndestination: "ISB",
    returnarrivaltime: "18:00",
    ticketPrice: "92,500",
    flightRating: 5,
  },
  {
    id: 3,
    flightType: "oneWay",
    airlineimg: "/images/daewoo.png",
    origintime: "12:10",
    originplace: "KHI",
    FlightDuration: "4h 45 min",
    destinationtime: "16:55",
    destinationlocation: "JED",
    ticketPrice: "40,300",
    flightRating: 3,
  },
  {
    id: 4,
    flightType: "twoWay",
    airlineimg: "/images/daewoo.png",
    origintime: "06:00",
    originplace: "LHE",
    FlightDuration: "6h 30 min",
    destinationtime: "12:30",
    destinationlocation: "DXB",
    returnorigin: "DXB",
    returntime: "08:00",
    returndestination: "LHE",
    returnarrivaltime: "14:30",
    ticketPrice: "80,000",
    flightRating: 4,
  },
  {
    id: 5,
    flightType: "oneWay",
    airlineimg: "/images/daewoo.png",
    origintime: "11:45",
    originplace: "ISB",
    FlightDuration: "4h 10 min",
    destinationtime: "15:55",
    destinationlocation: "JED",
    ticketPrice: "60,800",
    flightRating: 4,
  },
  {
    id: 6,
    flightType: "twoWay",
    airlineimg: "/images/daewoo.png",
    origintime: "14:20",
    originplace: "KHI",
    FlightDuration: "8h 25 min",
    destinationtime: "22:45",
    destinationlocation: "DOH",
    returnorigin: "DOH",
    returntime: "12:15",
    returndestination: "KHI",
    returnarrivaltime: "20:40",
    ticketPrice: "110,000",
    flightRating: 5,
  },
  {
    id: 7,
    flightType: "oneWay",
    airlineimg: "/images/daewoo.png",
    origintime: "04:50",
    originplace: "LHE",
    FlightDuration: "6h 15 min",
    destinationtime: "11:05",
    destinationlocation: "DXB",
    ticketPrice: "78,200",
    flightRating: 4,
  },
  {
    id: 8,
    flightType: "twoWay",
    airlineimg: "/images/daewoo.png",
    origintime: "15:30",
    originplace: "ISB",
    FlightDuration: "7h 10 min",
    destinationtime: "22:40",
    destinationlocation: "DXB",
    returnorigin: "DXB",
    returntime: "09:30",
    returndestination: "ISB",
    returnarrivaltime: "16:40",
    ticketPrice: "82,400",
    flightRating: 3,
  },
  {
    id: 9,
    flightType: "oneWay",
    airlineimg: "/images/daewoo.png",
    origintime: "10:25",
    originplace: "KHI",
    FlightDuration: "9h 5 min",
    destinationtime: "19:30",
    destinationlocation: "DOH",
    ticketPrice: "59,600",
    flightRating: 5,
  },
  {
    id: 10,
    flightType: "twoWay",
    airlineimg: "/images/daewoo.png",
    origintime: "13:15",
    originplace: "LHE",
    FlightDuration: "6h 30 min",
    destinationtime: "19:45",
    destinationlocation: "JED",
    returnorigin: "JED",
    returntime: "10:00",
    returndestination: "LHE",
    returnarrivaltime: "16:30",
    ticketPrice: "85,300",
    flightRating: 4,
  },
  {
    id: 11,
    flightType: "oneWay",
    airlineimg: "/images/daewoo.png",
    origintime: "18:40",
    originplace: "ISB",
    FlightDuration: "6h 20 min",
    destinationtime: "01:00",
    destinationlocation: "DXB",
    ticketPrice: "90,100",
    flightRating: 5,
  },
  {
    id: 12,
    flightType: "twoWay",
    airlineimg: "/images/daewoo.png",
    origintime: "16:10",
    originplace: "KHI",
    FlightDuration: "8h 40 min",
    destinationtime: "00:50",
    destinationlocation: "DOH",
    returnorigin: "DOH",
    returntime: "14:30",
    returndestination: "KHI",
    returnarrivaltime: "22:50",
    ticketPrice: "102,200",
    flightRating: 5,
  },
  {
    id: 13,
    flightType: "oneWay",
    airlineimg: "/images/daewoo.png",
    origintime: "19:25",
    originplace: "LHE",
    FlightDuration: "5h 50 min",
    destinationtime: "01:15",
    destinationlocation: "JED",
    ticketPrice: "72,600",
    flightRating: 3,
  },
  {
    id: 14,
    flightType: "twoWay",
    airlineimg: "/images/daewoo.png",
    origintime: "17:45",
    originplace: "ISB",
    FlightDuration: "6h 10 min",
    destinationtime: "23:55",
    destinationlocation: "DXB",
    returnorigin: "DXB",
    returntime: "07:25",
    returndestination: "ISB",
    returnarrivaltime: "13:35",
    ticketPrice: "93,400",
    flightRating: 4,
  },
  {
    id: 15,
    flightType: "oneWay",
    airlineimg: "/images/daewoo.png",
    origintime: "21:10",
    originplace: "KHI",
    FlightDuration: "8h 5 min",
    destinationtime: "05:15",
    destinationlocation: "DOH",
    ticketPrice: "65,500",
    flightRating: 4,
  },
  {
    id: 16,
    flightType: "twoWay",
    airlineimg: "/images/daewoo.png",
    origintime: "22:30",
    originplace: "LHE",
    FlightDuration: "6h 45 min",
    destinationtime: "05:15",
    destinationlocation: "JED",
    returnorigin: "JED",
    returntime: "14:00",
    returndestination: "LHE",
    returnarrivaltime: "20:45",
    ticketPrice: "87,800",
    flightRating: 3,
  },
  {
    id: 17,
    flightType: "oneWay",
    airlineimg: "/images/daewoo.png",
    origintime: "23:50",
    originplace: "ISB",
    FlightDuration: "6h 10 min",
    destinationtime: "06:00",
    destinationlocation: "DXB",
    ticketPrice: "95,100",
    flightRating: 5,
  },
  {
    id: 18,
    flightType: "twoWay",
    airlineimg: "/images/daewoo.png",
    origintime: "20:20",
    originplace: "KHI",
    FlightDuration: "8h 15 min",
    destinationtime: "04:35",
    destinationlocation: "DOH",
    returnorigin: "DOH",
    returntime: "11:20",
    returndestination: "KHI",
    returnarrivaltime: "19:35",
    ticketPrice: "112,600",
    flightRating: 5,
  },
  {
    id: 19,
    flightType: "oneWay",
    airlineimg: "/images/daewoo.png",
    origintime: "02:15",
    originplace: "LHE",
    FlightDuration: "5h 40 min",
    destinationtime: "07:55",
    destinationlocation: "JED",
    ticketPrice: "78,900",
    flightRating: 4,
  },
  {
    id: 20,
    flightType: "twoWay",
    airlineimg: "/images/daewoo.png",
    origintime: "00:45",
    originplace: "ISB",
    FlightDuration: "6h 25 min",
    destinationtime: "07:10",
    destinationlocation: "DXB",
    returnorigin: "DXB",
    returntime: "09:15",
    returndestination: "ISB",
    returnarrivaltime: "15:40",
    ticketPrice: "120,500",
    flightRating: 5,
  },
];

const BusesTickets = () => {
  const [activeTab, setActiveTab] = useState("Fastest");
  return (
    <div>
      <div className="flex flex-col  gap-[30px]">
        <div className="grid grid-cols-12  grid-flow-rows md:grid-flow-col md:grid-cols-3 ">
          {packagesData.map((item, index) => (
            <div
              className={`py-[20px] px-[45px] flex flex-col gap-[12px] drop-shadow-lg col-span-12   ${
                item.categoryname === "Best" ? "md:rounded-l-xl" : ""
              }     ${
                item.categoryname === "Fastest" ? "md:rounded-r-xl" : ""
              }     ${
                activeTab === item?.categoryname
                  ? "bg-green-600 text-white"
                  : "bg-white  text-gray-4B"
              }`}
              key={index}
              onClick={() => setActiveTab(item.categoryname)}
            >
              <p className={`text-lg  font-roboto font-medium `}>
                {item.categoryname}
              </p>
              <p className={`text-xl font-semibold   font-roboto `}>
                RS {item.packagePrice}
              </p>
              <p className={`text-base font-medium font-roboto font-regular `}>
                {item.packageTime}
              </p>
            </div>
          ))}
        </div>
        <BusReturnTicketCard FlightsData={FlightsData} />
      </div>
    </div>
  );
};

export default BusesTickets;
