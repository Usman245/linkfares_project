"use client";

import React from "react";
import { Avatar } from "@nextui-org/react";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const reviewData = [
  {
    rname: "Leo",
    rimg: "https://i.pravatar.cc/150?u=a042581f4e29026024d",

    rdesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    rrating: 3,
  },
  {
    rname: "Leo",
    rimg: "https://i.pravatar.cc/150?u=a042581f4e29026024d",

    rdesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    rrating: 2,
  },
  {
    rname: "Leo",
    rimg: "https://i.pravatar.cc/150?u=a042581f4e29026024d",

    rdesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    rrating: 2,
  },
  {
    rname: "Leo",
    rimg: "https://i.pravatar.cc/150?u=a042581f4e29026024d",

    rdesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    rrating: 2,
  },
  {
    rname: "Leo",
    rimg: "https://i.pravatar.cc/150?u=a042581f4e29026024d",

    rdesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    rrating: 2,
  },
  {
    rname: "Leo",
    rimg: "https://i.pravatar.cc/150?u=a042581f4e29026024d",

    rdesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    rrating: 2,
  },
];

const ReviewSection = () => {
  const [rating, setRating] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="bg-white">
      <div className="container pb-[150px]">
        <div className="flex flex-col gap-[27px] ">
          <div className="flex    justify-center items-center">
            <p className="font-poppins font-semiold text-[44px] text-black">
              What our <span className="text-green-600">Clients Says</span>
            </p>
          </div>

          <div className="my-custom-slider ">
            <Swiper
              spaceBetween={20}
              // slidesPerView={3}
              centeredSlides={true}
              roundLengths={true}
              loop={true}
              loopAdditionalSlides={30}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Keep track of active slide
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
                  slidesPerView: 3,
                },
              }}
            >
              {reviewData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`py-[29px] px-[17px] rounded-lg m-3 h-full ${
                      index === activeIndex ? "bg-green-600" : "bg-green-f2"
                    }`}
                  >
                    <div className="flex justify-between">
                      <div className="flex gap-2 items-center">
                        <Avatar src={item.rimg} />
                        <p
                          className={`text-lg font-bold font-poppins  ${
                            index === activeIndex ? "text-white" : "text-black"
                          } `}
                        >
                          {item.rname}
                        </p>
                      </div>

                      <div className="flex relative">
                        {/* <Rating initialValue={item.rrating} readonly /> */}
                        <ReactStars
                          count={5}
                          // onChange={ratingChange}
                          value={2}
                          size={24}
                          activeColor="#FFA033"
                        />
                      </div>
                    </div>

                    <p
                      className={`text-lg font-roboto font-bold  mt-[19px] flex justify-center ${
                        index === activeIndex ? "text-white" : "text-black"
                      }`}
                    >
                      It was a very good experience
                    </p>

                    <p
                      className={`text-xs font-roboto font-bold text-black mt-[19px] flex justify-center text-center  ${
                        index === activeIndex ? "text-white" : "text-black"
                      }`}
                    >
                      {item.rdesc}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
