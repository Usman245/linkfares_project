import Image from "next/image";
import React from "react";
import { Progress } from "@nextui-org/react";
import "../../globals.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import {AiFillTag} from 'react-icons/ai'
import { FaHeart } from "react-icons/fa6";
const PopularCarRentalCompanies = () => {
  const companiesData = [
    {
      imgPath: "/images/663.png.png",
      rating: "4.6",
      totalReviews: "203 Reviews",
      carConditionRating: "4.9",
      easyCollection: "4.7",
      customerServiceRating: "4.2",
      carCleanisRating: "4",
    },
    {
        imgPath: "/images/253.png.png",
        rating: "3.8",
        totalReviews: "",
        carConditionRating: "4.6",
        easyCollection: "4.4",
        customerServiceRating: "4.7",
        carCleanisRating: "4.3",
      },
      {
        imgPath: "/images/691.png.png",
        rating: "4.9",
        totalReviews: "2,034 Reviews",
        carConditionRating: "4.2",
        easyCollection: "4.7",
        customerServiceRating: "4.2",
        carCleanisRating: "3.9",
      },
      {
        imgPath: "/images/673.png.png",
        rating: "4.5",
        totalReviews: "",
        carConditionRating: "4.4",
        easyCollection: "3.7",
        customerServiceRating: "4.8",
        carCleanisRating: "4.1",
      },
      {
        imgPath: "/images/650.png.png",
        rating: "4.3",
        totalReviews: "23 Reviews",
        carConditionRating: "4.9",
        easyCollection: "4.4",
        customerServiceRating: "4.8",
        carCleanisRating: "3.5",
      },
      {
        imgPath: "/images/672.png.png",
        rating: "3.7",
        totalReviews: "",
        carConditionRating: "4.9",
        easyCollection: "4.7",
        customerServiceRating: "4.2",
        carCleanisRating: "4",
      },
  ];
  return (
    <div className="container md:mt-16 mt-8">
      <h1 className=" text-[32px] font-bold font-poppins">
        Popular Car rental companies in London
      </h1>
      <div className="mt-4 grid xl:grid-cols-3 xl:gap-6 md:grid-cols-2 gap-4 grid-cols-1">
        {companiesData.map((e, index) => (
          <div
            key={index}
            className="rounded-xl bg-white px-4 py-4 flex flex-col"
            style={{ boxShadow: "0px 1px 3px 0px #25201F4D" }}
          >
            <div className="flex g ">
              <Image src={e.imgPath} width={92} height={52} objectFit="cover" />
              <div className="flex items-end gap-3 ml-8">
                <span className="text-base">
                  <span className="text-[44px] font-black">{e.rating}</span>/5
                </span>
                <span>
                  <p className="text-base font-bold">Good</p>
                  <span>{e.totalReviews}</span>
                </span>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-normal font-roboto">
                  Car Condition
                </span>
                <span className="text-[15.5px] font-bold font-roboto text-green-600 relative right-2">
                  {e.carConditionRating}
                  <span className="text-xs font-normal text-[#696261]">/5</span>
                </span>
              </div>
              <Progress
                color="success"
                size="md"
                aria-label="Loading..."
                value={(e.carConditionRating / 5) * 100}
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-normal font-roboto">
                  Car Cleanes
                </span>
                <span className="text-[15.5px] font-bold font-roboto text-green-600 relative right-2">
                  {e.carCleanisRating}
                  <span className="text-xs font-normal text-[#696261]">/5</span>
                </span>
              </div>
              <Progress
              size="md"
                color="success"
                aria-label="Loading..."
                value={(e.carCleanisRating / 5) * 100}
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-normal font-roboto">
                  Customer Services
                </span>
                <span className="text-[15.5px] font-bold font-roboto text-green-600 relative right-2">
                  {e.customerServiceRating}
                  <span className="text-xs font-normal text-[#696261]">/5</span>
                </span>
              </div>
              <Progress
              size="md"
              color="success"
                aria-label="Loading..."
                value={(e.customerServiceRating / 5) * 100}
                
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-normal font-roboto">
                  Easy Collection
                </span>
                <span className="text-[15.5px] font-bold font-roboto text-green-600 relative right-2">
                  {e.easyCollection}
                  <span className="text-xs font-normal text-[#696261]">/5</span>
                </span>
              </div>
              <Progress
              size="md"
                color="success"
                aria-label="Loading..."
                value={(e.easyCollection / 5) * 100}
              />
            </div>
            <hr className="bg-[#C1C7CF] h-[2px] mt-5" />
            <div className="flex justify-end mt-5">
                <Link href="#" className="text-green-600 text-base font-medium gap-1 flex cursor-pointer">View all<FaArrowRight className="w-6 h-6"/></Link>
            </div>
          </div>
        ))}
      </div>
      <div className="md:mt-24 mt-8">
        <h1 className="text-[32px] font-poppins font-bold ">
          Hiring a car in London: Fast Facts
        </h1>
        <p className="text-base mt-2 ">
          Everything you need to know to hit the road happy.
        </p>
        <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 gap-4 md:gap-0 grid-col-1 justify-between">
          <div className="flex flex-col gap-[2px]">
            <span className="">
              <FaHeart className="w-6 h-6" />
            </span>
            <h className="text-lg font-normal">Most car hire company</h>
            <span className="text-green-600 font-bold text-[
            20px]">
              Green Motion
            </span>
          </div>
          <div className="flex flex-col gap-[2px]">
            <span className="">
              <BiSolidLike className="w-6 h-6" />
            </span>
            <h className="text-lg font-normal">Most car hire </h>
            <span className="text-green-600 font-bold text-[
            20px]">
              Compact, SUV
            </span>
          </div>
          <div className="flex flex-col gap-[2px]">
            <span className="">
              <AiFillTag className="w-6 h-6" />
            </span>
            <h className="text-lg font-normal">Avarage daily price</h>
            <span className="text-black font-bold text-[
            20px]">
              Rs2699
            </span>
          </div>
          <div className="flex flex-col gap-[2px] md:mt-4">
            <span className="">
              <FaCalendarAlt className="w-6 h-6" />
            </span>
            <h className="text-lg font-normal">Best time to book</h>
            <span className="text-black font-bold text-[
            20px]">
              3 weeks before
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCarRentalCompanies;
