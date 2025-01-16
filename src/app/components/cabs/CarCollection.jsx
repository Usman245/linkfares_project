"use client";
import { useState } from "react";
import Image from "next/image";
import { FaUserAlt, FaHeart } from "react-icons/fa";
import { BsFillSuitcase2Fill } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import Link from "next/link";


const CarCollection = () => {
  const dealsArr = [
    {
      imgPAth: "/images/car.png",
      title: "Compact",
      passengers: "4",
      briefCase: "3",
      price: "17999",
      type: "4-5",
    },
    {
      imgPAth: "/images/mini.png.png",
      title: "Mini",
      passengers: "2",
      briefCase: "2",
      price: "7999",
      type: "4-5",
    },
    {
      imgPAth: "/images/economy.png.png",
      title: "Economy",
      passengers: "4",
      briefCase: "3",
      price: "17999",
      type: "4-5",
    },
    {
      imgPAth: "/images/intermediate.png.png",
      title: "Itermediate",
      passengers: "6",
      briefCase: "3",
      price: "20999",
      type: "4-5",
    },
    {
      imgPAth: "/images/fullsize.png.png",
      title: "Fullsize",
      passengers: "4",
      briefCase: "3",
      price: "14999",
      type: "4-5",
    },
    {
      imgPAth: "/images/premium.png.png",
      title: "Premium",
      passengers: "4",
      briefCase: "3",
      price: "25999",
      type: "4-5",
    },
    {
      imgPAth: "/images/mini.png.png",
      title: "Mini",
      passengers: "2",
      briefCase: "2",
      price: "7999",
      type: "4-5",
    },
    {
      imgPAth: "/images/economy.png.png",
      title: "Economy",
      passengers: "4",
      briefCase: "3",
      price: "17999",
      type: "4-5",
    },
    {
      imgPAth: "/images/intermediate.png.png",
      title: "Itermediate",
      passengers: "6",
      briefCase: "3",
      price: "20999",
      type: "4-5",
    },
  ];
  const [showMore, setShowMore] = useState(false);
  const visibleCars = showMore ? dealsArr : dealsArr.slice(0, 6);
  return (
    <div className="container md:mt-24 mt-8">
      <h1 className="text-[32px] font-bold text-[#020202] font-poppins">
        Find cheap cars in london
      </h1>
      <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
        {visibleCars.map((e, index) => (
          <Link href='/Cabs/CarSelection'
            className=" rounded-lg bg-[#FFFFFF] cursor-pointer
"
            key={index}
            style={{
              boxShadow: "0px 1px 3px 0px rgba(37, 32, 31, 0.3)",
              height: "max-content",
            }}
          >
            <div className="h-[68%] py-[18px] justify-center items-center flex">
              <Image
                src={e.imgPAth}
                width={200}
                objectFit="cover"
                height={200}
                quality={100}
                className="w-[231px] h-[151px] "
              />
            </div>
            <hr className="text-gray-500 h-1" />
            <div className="flex justify-between items-center px-6 py-4 h-[32%]">
              <div className="flex flex-col gap-1">
                <h1 className="text-xl font-bold ">{e.title}</h1>
                <p className="text-base font-normal">
                  {e.type} <span className="font-medium">Doors</span>
                </p>
                <div className="flex gap-2 items-center">
                  <div className="flex items-center gap-2 py-1 px-2  rounded bg-[#EFF3F8]">
                    <FaUserAlt className="w-4 h-4" />
                    <span>{e.briefCase} </span>
                  </div>
                  <div className="flex items-center gap-2 py-1 px-2  rounded bg-[#EFF3F8]">
                    <BsFillSuitcase2Fill className="w-4 h-4" />
                    <span>{e.briefCase} </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-[1px] text-base">
                <div>From</div>
                <div className="font-bold text-xl">RS{e.price}</div>
                <div>Per day</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="text-[#00AA6C] px-4 py-2 cursor-pointer font-poppins font-bold text-lg flex items-center gap-2 "
          onClick={() => {
            if (!showMore) {
              setShowMore(true);
            } else {
              setShowMore(false);
            }
          }}
        >
          {showMore ? "View less deals" : "View all deals"}
          <FaArrowDown className="w-4 h-4" />
        </button>
      </div>
      <div className="px-4 py-2 rounded-medium md:mt-8 mt-4 bg-[#EFF3F8] flex gap-2 justify-start items-center font-roboto">
        <IoMdInformationCircle className="w-6 h-6 text-gray-800" />
        <div className="text-base font-normal">
          These are the lowest London car hire prices we found over the next 30
          days and are subject to change.
        </div>
      </div>
    
    </div>
  );
};
export default CarCollection;
