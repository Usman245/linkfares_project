import React, { useRef } from "react";
import { Avatar } from "@nextui-org/react";
import HotelSwiperCard from "./HotelSwiperCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const DicoverMorePage = () => {
  const swiperRef = useRef(null);
  return (
    <div className="p-4 rounded-xl drop-shadow-xl   bg-white">
      {" "}
      <div className="flex flex-col  gap-3">
        <div className="flex  gap-3 items-center">
          <Avatar
            src="/images/questionicon.png"
            className="w-20 h-20 flex justify-center items-center"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-black-16 font-roboto">
              Discover more hotels recommended by
            </h2>
            <div className="flex gap-2 items-center  flex-wrap ">
              <button className="p-3 rounded-lg text-lg font-regular text-black flex justify-center items-center  border border-gray-CF">
                Families
              </button>

              <button className="p-3 rounded-lg text-lg font-regular text-black flex justify-center items-center border border-gray-CF">
                Business travellers
              </button>

              <button className="p-3 rounded-lg text-lg font-regular text-white flex justify-center items-center bg-green-600   border border-gray-CF">
                Couples
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-end gap-3">
            <button
              className="p-2 flex justify-center items-center bg-gray-E9 text-black-16 rounded-lg"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <IoIosArrowBack />
            </button>

            <button
              className="p-2 flex justify-center items-center bg-gray-E9 text-black-16 rounded-lg"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <IoIosArrowForward />
            </button>
          </div>
          <div className="relative">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              // slidesPerView={"auto"}

              breakpoints={{
                640: {
                  slidesPerView: 1, // Small screens
                },
                768: {
                  slidesPerView: 2, // Medium screens
                },

                1280: {
                  slidesPerView: "auto", // Extra large screens
                },
              }}
              spaceBetween={20}
              loop
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="hotelswiper"
            >
              <SwiperSlide>
                <HotelSwiperCard />
              </SwiperSlide>

              <SwiperSlide>
                <HotelSwiperCard />
              </SwiperSlide>

              <SwiperSlide>
                <HotelSwiperCard />
              </SwiperSlide>

              <SwiperSlide>
                <HotelSwiperCard />
              </SwiperSlide>

              <SwiperSlide>
                <HotelSwiperCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DicoverMorePage;
