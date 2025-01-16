import React from "react";
import FabulasHotelCard from "./FabulasHotelCard";
import Link from "next/link";

const FabulasHotels = () => {
  let fabuloushoteldata = [
    {
      locationtitle: "United Kingdom", // corrected key

      price: "20,561",
      renttype: "a Night",
      hotellocation: "London",
      hotelpic: "/images/london.png",
    },

    {
      locationtitle: "Saudi Arabia", // corrected key

      price: "20,561",
      renttype: "a Night",
      hotellocation: "Jeddah",
      hotelpic: "/images/jeddah.png",
    },

    {
      locationtitle: "United Arab Emirates", // corrected key

      price: "20,561",
      renttype: "a Night",
      hotellocation: "Jeddah",
      hotelpic: "/images/dubai.png",
    },

    {
      locationtitle: "United Arab Emirates", // corrected key

      price: "20,561",
      renttype: "a Night",
      hotellocation: "Jeddah",
      hotelpic: "/images/dubai.png",
    },

    {
      locationtitle: "United Arab Emirates", // corrected key

      price: "20,561",
      renttype: "a Night",
      hotellocation: "Jeddah",
      hotelpic: "/images/dubai.png",
    },

    {
      locationtitle: "United Arab Emirates", // corrected key

      price: "20,561",
      renttype: "a Night",
      hotellocation: "Jeddah",
      hotelpic: "/images/dubai.png",
    },
  ];
  return (
    <div className="container">
      <Link href={"/Hotels/HotelSelection/123"}>
        <div className="py-10 flex flex-col gap-5">
          <div className="flex flex-col justify-center gap-2 items-center">
            <p className="text-3xl font-semibold text-black font-poppins">
              Hotels for <span className="text-green-600">fab city breaks</span>
            </p>
            <p className="text-lg font-roboto">
              The key to a great city break? A perfectly-placed base. Check out
              the best city centre hotels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {fabuloushoteldata.map((hotel, index) => (
              <FabulasHotelCard key={index} hotel={hotel} />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FabulasHotels;
