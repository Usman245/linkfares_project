import React from "react";
import ReactStars from "react-rating-stars-component";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";

const HotelSwiperCard = () => {
  return (
    <div className="flex flex-col rounded-t-2xl w-full">
      <div className="h-[180px] rounded-t-3xl relative w-full">
        <img
          src="/images/MarcoPolo.png"
          className="object-fill
           rounded-t-3xl h-full w-full"
        />

        <div className="flex flex-col gap-2 absolute left-[20px] bottom-[20px] z-50">
          <ReactStars
            count={5}
            // onChange={ratingChange}
            value={4}
            size={24}
            activeColor="#FFA033"
          />

          <h4 className="text-lg font-regular text-white  font-bold  font-roboto">
            Canal Central Hotel Business Bay
          </h4>
        </div>

        <div class="absolute bottom-0 w-full h-full bg-gradient-to-t from-[#16161699] to-[#16161600] transition-opacity duration-300"></div>
      </div>

      <div className="  p-[20px] bg-white">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <div>
              <FaLocationDot />
            </div>
            <p className="text-lg font-regular text-black-16">
              10.37 km from city centre
            </p>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-3 ">
              <div className="">
                <p className="text-lg font-bold text-black-16 font-roboto">
                  4.1<span className="font-regular  text-gray-71">/5</span>
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-xl font-bold font-roboto">Very Good</p>
                <p className="text-lg font-roboto text-gray-71">41 Reviews</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-2xl font-bold">Rs 21,540</p>
              <p className="text-lg font-roboto text-gray-71">a Night</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-[40px] rounded-b-xl bg-green-8A">
        <div className="flex gap-2  items-center justify-center">
          <div className="text-white">
            <AiFillLike />
          </div>
          <p className="text-lg font-medium text-white ">
            Recommended by 23 couple travellers 
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotelSwiperCard;
