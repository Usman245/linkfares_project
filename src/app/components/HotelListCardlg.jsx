import React from "react";
import { FaRegHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { PiWarningCircleFill } from "react-icons/pi";
import Link from "next/link";

const HotelListCardlg = ({ hotels }) => {
  return (
    <div className="grid  grid-cols-12 rounded-2xl  drop-shadow-lg bg-white">
      <div className="  col-span-12 lg:col-span-3">
        <img
          src={hotels?.hotelimg}
          className=" object-fill lg:rounded-l-lg  w-full lg:h-full  h-[200px]  "
        />
      </div>
      <div className="col-span-12  lg:col-span-6">
        <div className="p-2 ">
          <div className="flex flex-col  gap-[56px]">
            <div>
              <div className=" flex gap-2  justify-between items-start pb-3 ">
                <h3 className="text-xl font-bold  text-black-16 leading-0">
                  {hotels.hoteltitle}
                </h3>

                <div>
                  <FaRegHeart size={24} />
                </div>
              </div>

              <div>
                <ReactStars
                  count={5}
                  // onChange={ratingChange}
                  value={hotels.hotelrating}
                  size={24}
                  activeColor="#FFA033"
                />
              </div>
              <p className="text-lg font-regular text-black-16  pb-[12px]">
                {hotels.hotellocation}
              </p>

              <div className="flex gap-1 items-center">
                <p className="text-sm font-semibold ">5.0</p>
                <div>
                  <ReactStars
                    count={5}
                    // onChange={ratingChange}
                    emptyIcon={<FaRegCircle color="#12B76A" />}
                    filledIcon={<FaCircle color="#12B76A" />}
                    value={hotels.hotelrating}
                    size={14}
                    activeColor="#FFA033"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-xs font-regular text-gray-4B">
                    {hotels.hotelreviews}
                  </p>
                  <p className="text-xs font-regular text-gray-4B">Reviews</p>
                </div>
              </div>

              <div className=" pt-3">
                {hotels.badgeinfo && (
                  <div className="p-2 rounded-xl  flex items-center gap-2 bg-gray-F8 w-max">
                    <div>
                      <BiSolidLike />
                    </div>
                    <p className="text-sm  text-black-16 font-regular ">
                      Location
                    </p>
                    <p className="text-sm  text-black-16 font-regular">4.5/5</p>
                  </div>
                )}
              </div>
            </div>

            <div
              className={`grid   gap-3  grid-cols-1   lg:${
                hotels.hotelpackages.length === 1
                  ? "grid-cols-1"
                  : hotels.hotelpackages.length === 2
                  ? "grid-cols-2"
                  : "grid-cols-3"
              }`}
            >
              {hotels.hotelpackages.map((item, index) => (
                <div className="flex-col gap-3" key={index}>
                  <div className="flex gap-2 items-center">
                    <p className="text-lg font-regular text-black-16">
                      {item.pacakgetitle}
                    </p>
                    <div>
                      <FaExternalLinkAlt />
                    </div>
                  </div>
                  <p className="text-lg font-bold  text-black-16 ">
                    RS {item.packagePrice}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12   lg:col-span-3  ">
        <div className="p-2  relative  h-full flex flex-col   justify-between">
          <div className=" flex flex-col gap-3">
            <button className="py-2 px-2 rounded-lg  flex justify-center items-center bg-green-600 text-white w-max flex items-center gap-2   ">
              <BiSolidLike color="#ffffff" />
              <p>Great Price</p>
            </button>

            <div className="flex flex-col gap-2 font-roboto justify-center  ">
              {hotels.alertmessage && (
                <p className="text-lg font-regular font-roboto  text-pink-66 max-w-[160px]  inline-block   ruby ">
                  Cheapest provider by Rs 6,578{" "}
                  <span>
                    <PiWarningCircleFill color="#626971" size={24} />
                  </span>
                </p>
              )}

              {hotels.alertoffer && (
                <p className="text-lg font-regular font-roboto text-gray-69">
                  Offers may differ
                </p>
              )}

              <h2 className="text-xl font-bold">{hotels.hotelPrice}</h2>
              <p>{hotels.hoteltype}</p>
            </div>
          </div>

          <div
            className="
            mb-2  bottom-0    right-[8px]  w-full "
          >
            <Link href={"/Hotels/HotelCart"}>
              <button className="py-2 px-2 rounded-lg  flex justify-center items-center bg-green-600 text-white w-full ">
                Go to Site
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelListCardlg;
