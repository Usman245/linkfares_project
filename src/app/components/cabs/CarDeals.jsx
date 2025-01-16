import React from "react";
import { IoMdInformationCircle } from "react-icons/io";
import Image from "next/image";
import { BsFillSuitcase2Fill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { AiFillTag } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import Link from "next/link";

const CarDeals = () => {
  const dealsArr = [
    {
      imgPAth: "/images/car.png",
      title: "Compact",
      passengers: "4",
      briefCase: "3",
      price: "17999",
      type: "4-5",
    },
  ];
  const carProviders = [
    { imgPath: "/images/663.png.png" },
    { imgPath: "/images/672.png.png" },
  ];
  const factsAboutCar = [
    {
      title: "Best deal found",
      icon: <AiFillTag className="w-6 h-6" />,
      desc: "Rs17,110 per day",
    },
    {
      title: "Cheapest provider",
      icon: <FaCarSide className="w-6 h-6" />,
      desc: "Hertz",
    },
    {
      title: "Highest rated provider",
      icon: <FaHeart className="w-6 h-6" />,
      desc: "Europcar",
    },
  ];
  return (
    <div className="container md:mt-24 mt-8 font-roboto">
      <h1 className="text-3xl font-bold my-2">
        Find the best car hire deals in Islamabad
      </h1>
      <p className="text-base text-[#161616]      font-normal ">
        Here are the most popular types of rental car you can pick up from a
        point near you in the next 30 days.
      </p>
      <div className="mt-8 flex flex-col ">
        <div className=" flex ">
          {dealsArr.map((e, index) => (
            <div
              className="w-[397px] h-[302px] rounded-lg bg-[#FFFFFF] 
"
              key={index}
              style={{ boxShadow: "0px 1px 3px 0px rgba(37, 32, 31, 0.3)" }}
            >
              <div className="h-1/2 justify-center items-center flex">
                <Image
                  src={e.imgPAth}
                  width={270}
                  height={270}
                  quality={90}
                  className="w-[240px] h-auto"
                />
              </div>
              <hr className="text-gray-500 h-1" />
              <div className="flex justify-between items-center px-6 py-2">
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
            </div>
          ))}
        </div>
        <Link
          href="/Cabs/Hirecar"
          className=" mt-4 text-[#0062E3] font-bold text-lg cursor-pointer flex items-center justify-center gap-1 hover:scale-105 transition-all ease-in-out "
        >
          View all
          <FaArrowRight className="w-6 h-4 text-[#0062E3] ml-2" />
        </Link>
      </div>
      <div className="px-4 py-2 rounded-lg mt-8 bg-[#EFF3F8] flex gap-2 items-start font-roboto">
        <IoMdInformationCircle className="w-6 h-6 text-gray-800" />
        <div className="text-base font-normal">
          <span className="font-medium">
            How did we find these car hire prices?
          </span>{" "}
          We looked at car hire rates over the next 30 days. The ones you see
          here are the cheapest we found for the most popular kinds of vehicle.
        </div>
      </div>
      <div className="md:mt-24 mt-8">
        <h1 className="text-3xl font-bold mt-2">
          The best car providers in Islamabad right now
        </h1>
        <div className="flex gap-4 mt-6 ">
          {carProviders.map((e, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <Image
                src={e.imgPath}
                objectFit="cover"
                quality={100}
                width={120}
                height={60}
                className="w-[120px] h-[60px]"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="md:mt-16 mt-8">
        <h1 className="text-3xl font-bold mt-2">Fast facts about Cars</h1>
        <p className="text-base mt-2 ">
          Everything you need to know to hit the road happy.
        </p>
        <div className="mt-4 flex md:flex-row flex-col gap-2 md:gap-0 justify-between">
          {factsAboutCar.map((e, index) => {
            return (
              <div key={index} className="flex flex-col gap-[2px]">
                <span className="">{e.icon}</span>
                <h className="text-lg font-normal">{e.title}</h>
                <span className="text-blue-500 font-medium">{e.desc}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CarDeals;
