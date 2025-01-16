"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const exploreData = [
  {
    id: 1,
    imgpath: "/images/explore.png",
    cardtitle: "Explore Everywhere",
  },
  {
    id: 2,
    imgpath: "/images/flights.png",
    cardtitle: "Flights",
  },
  {
    id: 3,
    imgpath: "/images/bus.png",
    cardtitle: "Bus",
  },
  {
    id: 4,
    imgpath: "/images/Hotel.png",
    cardtitle: "Hotels",
  },
  {
    id: 4,
    imgpath: "/images/Hotel.png",
    cardtitle: "Hotels",
  },

  {
    id: 4,
    imgpath: "/images/Hotel.png",
    cardtitle: "Hotels",
  },
];

const ExploreMore = () => {
  return (
    <div className="bg-white">
      <div className="container">
        <div className="flex flex-col gap-[27px]  pb-[124px]">
          <div className="flex  flex-col justify-center items-center">
            <p className="font-poppins font-semiold text-[44px] text-black">
              Explore <span className="text-green-600">More</span>
            </p>
            <p className="text-base font-roboto text-center font-bold  text-black-33">
              Every moment, every place, everything you need!
            </p>
          </div>

          <div className="relative">
            <Swiper
              spaceBetween={20}
              loop
              autoplay
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3, // 3 slides for screens 1024px and up
                },
                1440: {
                  slidesPerView: 4,
                },
              }}
              className="mySwiper"
            >
              {exploreData.map((item, index) => (
                <SwiperSlide key={index} className="rounded-lg">
                  {" "}
                  <Link href="#" className="  ">
                    <div className="rounded-lg">
                      <Image
                        src={item.imgpath}
                        width={270}
                        height={270}
                        alt=""
                        layout="responsive"
                        className="rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/10 w-full rounded-lg"></div>
                      <p className="font-poppins font-bold text-[22px] absolute bottom-[16px] text-white left-[16px] ">
                        {item.cardtitle}
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;
