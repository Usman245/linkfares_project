import React from "react";
import ReactStars from "react-rating-stars-component";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { FaRegCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

const RecommendedCard = ({ hotel }) => {
  return (
    <div className="flex flex-col rounded-t-2xl w-full mb-[50px]">
      <div className="h-[180px] rounded-t-3xl relative w-full">
        <img
          src={`${hotel.rimg}`}
          className="object-fill
           rounded-t-3xl h-full w-full"
        />

        <div className="flex flex-col gap-2 absolute left-[20px] bottom-[20px] z-50">
          <ReactStars
            count={5}
            // onChange={ratingChange}
            value={hotel.rrating}
            size={24}
            activeColor="#FFA033"
          />

          <h4 className="text-lg font-regular text-white  font-bold  font-roboto">
            {hotel.rtitle}
          </h4>
        </div>

        <div class="absolute bottom-0 w-full h-full bg-gradient-to-t from-[#16161699] to-[#16161600] transition-opacity duration-300"></div>
      </div>

      <div className="  p-[20px] bg-white drop-shadow-xl rounded-b-2xl">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <div>
              <FaLocationDot />
            </div>
            <p className="text-lg font-regular text-black-16">
              {hotel.rdistance}
            </p>
          </div>

          <div className="flex items-start  justify-between">
            <div className="flex gap-3 ">
              <div className="">
                <p className="text-lg font-bold text-black-16 font-roboto">
                  {hotel.rrating}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <ReactStars
                  count={5}
                  // onChange={ratingChange}
                  emptyIcon={<FaRegCircle color="#12B76A" />}
                  filledIcon={<FaCircle color="#12B76A" />}
                  value={hotel.rrating}
                  size={17}
                  activeColor="#FFA033"
                />
                <p className="text-lg font-roboto text-gray-71">
                  {hotel.rreviews} Reviews
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-2xl font-bold">Rs {hotel.rrent}</p>
              <p className="text-lg font-roboto text-gray-71">{hotel.rtype}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedCard;
