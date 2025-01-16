"use client";
import React, { useRef, useState } from "react";
import { MdOutlineCheckBox } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { Tabs, Tab, Chip } from "@nextui-org/react";
import RecommendedCard from "@/app/components/RecommendedCard";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Link from "next/link";
const RecommendedData = [
  {
    rtitle: "Popular Hotel",
    rrating: 5,
    rdistance: "3.74 km from hotel",
    rreviews: 256,
    rrent: "23007",
    rtype: "a night",
    rimg: "/images/MarcoPolo.png",
    popular: true,
    nearby: false,
  },

  {
    rtitle: "NearBy Hotel",
    rrating: 5,
    rdistance: "3.74 km from hotel",
    rreviews: 256,
    rrent: "23007",
    rtype: "a night",
    rimg: "/images/MarcoPolo.png",
    popular: false,
    nearby: true,
  },
  {
    rtitle: "Popular Luxry Hotel",
    rrating: 5,
    rdistance: "3.74 km from hotel",
    rreviews: 256,
    rrent: "23007",
    rtype: "a night",
    rimg: "/images/MarcoPolo.png",
    popular: true,
    nearby: false,
  },
  {
    rtitle: "nesr Luxry Hotel",
    rrating: 5,
    rdistance: "3.74 km from hotel",
    rreviews: 256,
    rrent: "23007",
    rtype: "a night",
    rimg: "/images/MarcoPolo.png",
    popular: false,
    nearby: true,
  },
  {
    rtitle: "popular Luxry Hotel",
    rrating: 5,
    rdistance: "3.74 km from hotel",
    rreviews: 256,
    rrent: "23007",
    rtype: "a night",
    rimg: "/images/MarcoPolo.png",
    popular: true,
    nearby: false,
  },
  {
    rtitle: "both Luxry Hotel",
    rrating: 5,
    rdistance: "3.74 km from hotel",
    rreviews: 256,
    rrent: "23007",
    rtype: "a night",
    rimg: "/images/MarcoPolo.png",
    popular: true,
    nearby: true,
  },
];

const Page = () => {
  const swiperRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Nearb");

  const filteredData = RecommendedData.filter((hotel) =>
    activeTab === "Nearby" ? hotel.nearby === true : hotel.popular === true
  );

  console.log(activeTab, "Current Tab");
  return (
    <div className="container ">
      <div className="py-20">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl font-semibold font-poppins text-gray-71">
              Your <span className="text-green-600">Cart</span>
            </h2>

            <div className="flex flex-col gap-4 ">
              <div className="flex items-center  gap-2">
                <div className="text-green-600 ">
                  <MdOutlineCheckBox />
                </div>
                <h4 className="text-lg font-medium text-green-600 font-medium font-poppins">
                  Cart
                </h4>
              </div>
              <div className=" p-8 md:p-16 rounded-xl  bg-blue-0D   flex flex-col gap-6">
                <div className="grid grid-cols-12 gap-6">
                  <div className=" col-span-12  md:col-span-8">
                    <div className="p-6 rounded-xl bg-white drop-shadow-xl relative ">
                      <div className="flex flex-col  gap-2">
                        <div className="h-[270px] w-full">
                          <img
                            src="/images/cartimg.png"
                            className="object-fill h-full w-full"
                          />
                        </div>

                        <div className="flex flex-col">
                          <div className="flex  flex-col  md:flex-row   justify-between items-center pb-4">
                            <p className="text-xl font-semibold text-black-16 font-poppins">
                              {" "}
                              Hotel Excesior Karachi
                            </p>
                            <p className="text-green-600 font-semibold text-xl ">
                              PKR 18,571
                            </p>
                          </div>

                          <div className="flex  flex-col  justify-center  items-center md:items-start md:justify-start  md:flex-row  gap-2 pb-3 ">
                            <div className="flex  items-baseline ">
                              <p className="text-[45px] font-extrabold font-Roboto text-green-600  ">
                                4.3
                              </p>
                              <p className="text-lg font-regular text-gray-71 ">
                                /5
                              </p>
                            </div>
                            <div className="flex flex-col gap-2">
                              <p className="text-xl text-black16 font-poppins ">
                                Very Good{" "}
                              </p>
                              <p className="text-lg font-regular text-gray-71 ">
                                41 Review
                              </p>
                            </div>
                          </div>

                          <div className="grid   grid-cols-1 md:grid-cols-2 pb-4 gap-2">
                            <ul className="flex flex-col gap-2 ">
                              <li className="">
                                <div className="flex gap-1 items-center">
                                  <div className="text-xs">
                                    <GoDotFill />
                                  </div>
                                  <p className="text-sm font-regular text-black">
                                    {" "}
                                    1 Large double bed  and 1 futon bed
                                  </p>
                                </div>
                              </li>
                              <li className="">
                                <div className="flex gap-1 items-center">
                                  <div className="text-xs">
                                    <GoDotFill />
                                  </div>
                                  <p className="text-sm font-regular text-black">
                                    {" "}
                                    Bedroom 2: 2 single beds
                                  </p>
                                </div>
                              </li>
                              <li className="">
                                <div className="flex gap-1 items-center">
                                  <div className="text-xs">
                                    <GoDotFill />
                                  </div>
                                  <p className="text-sm font-regular text-black">
                                    {" "}
                                    Cot available on request
                                  </p>
                                </div>
                              </li>
                            </ul>

                            <ul className="flex flex-col gap-2 ">
                              <li className="">
                                <div className="flex gap-1 items-center">
                                  <div className="text-xs">
                                    <GoDotFill />
                                  </div>
                                  <p className="text-sm font-regular text-black">
                                    {" "}
                                    Air Conditioning
                                  </p>
                                </div>
                              </li>
                              <li className="">
                                <div className="flex gap-1 items-center">
                                  <div className="text-xs">
                                    <GoDotFill />
                                  </div>
                                  <p className="text-sm font-regular text-black">
                                    {" "}
                                    Flat-Screen Tv
                                  </p>
                                </div>
                              </li>
                              <li className="">
                                <div className="flex gap-1 items-center">
                                  <div className="text-xs">
                                    <GoDotFill />
                                  </div>
                                  <p className="text-sm font-regular text-black">
                                    {" "}
                                    Free Wifi
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <p className="text-sm text-black-16 font-regular">
                              After staying in several hotels in Saddar, we
                              finally settled in Hotel Excelsior because it was
                              fully booked until that date. The hotel was
                              amazing, the cleanliness, the breakfast had both
                              Pakistani Breakfast and Continental breakfast
                              also. The stay was very comfortable and the
                              service was amazing as…
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className=" absolute top-[-20px] right-[-10px]">
                        {" "}
                        <div className="p-3 flex justify-center items-center  text-white rounded-full bg-green-600">
                          <RxCross2 />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" col-span-12 md:col-span-4">
                    <div className="p-4 bg-white drop-shadow-xl rounded-xl">
                      <div className="flex flex-col">
                        <h4 className="text-xl text-gray-69 font-inter font-regular ">
                          {" "}
                          Payment Details
                        </h4>
                        <hr class="h-px my-2 bg-gray-EB border-0 "></hr>
                        <div className="flex flex-col gap-2">
                          <div className="flex justify-between items-center">
                            <p className="text-lg font-regular text-gray-69 font-inter ">
                              Order
                            </p>
                            <p className="text-lg font-regular text-gray-69 font-inter ">
                              PKR 18,571
                            </p>
                          </div>
                          <div className="flex justify-between items-center">
                            <p className="text-lg font-regular text-gray-69 font-inter ">
                              Tax
                            </p>
                            <p className="text-lg font-regular text-gray-69 font-inter ">
                              5%
                            </p>
                          </div>
                        </div>
                        <hr class="h-px my-2 bg-gray-EB border-0 "></hr>
                        <div className="flex justify-between items-center">
                          <p className="text-lg font-semibold text-gray-69 font-inter ">
                            Total
                          </p>
                          <p className="text-lg font-semibold text-gray-69 font-inter ">
                            PKR 19,501
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <Link href={"/Hotels/HotelCheckout"}>
                    <button className="py-4 px-4 w-full md:w-max md:px-[100px] bg-green-600 text-white font-inter text-lg  rounded-lg">
                      Go For Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className=" text-2xl font-medium font-poppins  text-black-16 ">
              Other Recommended Hotel
            </h2>

            <div className="flex flex-col gap-6">
              <Tabs
                aria-label="Options"
                color="primary"
                variant="underlined"
                // onChange={(key) => setActiveTab(key)}
                selectedKey={activeTab}
                onSelectionChange={setActiveTab}
                classNames={{
                  tabList:
                    "gap-6 w-full relative rounded-none p-4  border-divider  flex gap-8 items-center",
                  cursor: "w-full bg-green-600",
                  tab: "max-w-fit px-0 h-12",
                  tabContent: "group-data-[selected=true]:text-green-600",
                }}
              >
                <Tab
                  key="Nearby"
                  title={
                    <div className="flex items-center space-x-2">
                      <span>Near to Hotel</span>
                    </div>
                  }
                />
                <Tab
                  key="toppopular"
                  title={
                    <div className="flex items-center space-x-2">
                      <span>Most Popular Hotel</span>
                    </div>
                  }
                />
              </Tabs>

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
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                      },

                      1280: {
                        slidesPerView: 3,
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
                    {filteredData.map((hotel, index) => (
                      <SwiperSlide key={index}>
                        <RecommendedCard hotel={hotel} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
