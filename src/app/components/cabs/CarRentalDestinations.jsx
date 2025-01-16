"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaAngleLeft, FaAngleRight, FaCaretRight } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa6";
import { AiFillTag } from "react-icons/ai";
import { IoMdInformationCircle } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { FaCalculator } from "react-icons/fa";
import { Tabs, Tab } from "@nextui-org/tabs";
import "../../globals.css";
import { carRental } from '../../../redux/features/carRental'
import { useDispatch, useSelector } from "react-redux";


const CarRentalDestinations = () => {
  const variants = ["underlined"];
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((state) => state.rentCar);

  useEffect(() => {
    dispatch(carRental());
  }, [dispatch]);

 
  
  const navItem = [
    "Car hire deals from Rs17,110",
    "The best Islamabad car hire providers",
    "Fast facts",
    "How to find the best deal",
    "FAQs",
  ];

  const cards = [
    {
      id: 1,
      title: "Car hire in Istanbul",
      content: "Most popular car type: Economy",
      imgPath: "/images/istanbulcard.png",
      price: "9999",
    },
    {
      id: 2,
      title: "Car hire in Dubai",
      content: "Most popular car type: Intermediate",
      imgPath: "/images/dubaicard.png",
      price: "4499",
    }
  ];

  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(navItem.length - 1); // Default to the last item (FAQs)

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-12 h-12 text-gray-200 animate-spin fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto">
      <div className="flex gap-2 items-center font-roboto my-8">
        <Link href="#" className="text-blue-600">
          Home
        </Link>
        <span>
          <FaCaretRight color="gray" />
        </span>
        <Link href="#" className="text-gray-800">
          Car hire
        </Link>
      </div>

      <div className="my-4 flex md:flex-row flex-col gap-4 list-none justify-between font-roboto">
        <li className="flex gap-2 items-start">
          <FaCarSide className="w-6 h-6" />
          <span className="text-base font-semibold">
            Search for cheap car rental in seconds anywhere in the world
          </span>
        </li>
        <li className="flex gap-2 items-start">
          <FaCalculator className="w-6 h-6" />
          <span className="text-base font-semibold">
            Compare deals from trusted car hire providers in one place
          </span>
        </li>
        <li className="flex gap-2 items-start">
          <AiFillTag size={25} />
          <span className="text-base font-semibold">
            Rent a car with a flexible booking policy or free cancellation
          </span>
        </li>
      </div>
      <div
        className="md:mt-24  mt-8 bg-white overflow-hidden"
        style={{ boxShadow: "0px 1.33px 4px 0px rgba(0, 0, 0, 0.25)" }}
      >
        {variants.map((variant) => (
          <Tabs
            key={variant}
            variant={variant}
            color="primary"
            aria-label="Tabs variants"
            className="overflow-x-auto flex"
            style={{
              overflowY: "scroll",
              msOverflowStyle: "none", // IE and Edge
              scrollbarWidth: "none", // Firefox
            }}
          >
            {navItem.map((e, index) => (
              <Tab
                key={e}
                title={e}
                className="text-base cursor-pointer py-5 px-6"
              />
            ))}
          </Tabs>
        ))}
      </div>
      <div className="md:mt-24 mt-8 font-roboto">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Popular car rental destination</h1>
          <div className="flex gap-2 items-center">
            <button
              ref={prevButtonRef}
              className="bg-[#E0E4E9] text-black rounded p-2 w-8 h-8"
            >
              <FaAngleLeft />
            </button>
            <button
              ref={nextButtonRef}
              className="bg-[#E0E4E9] text-black rounded p-2 w-8 h-8"
            >
              <FaAngleRight />
            </button>
          </div>
        </div>

        <div className="relative mt-4">
          <Swiper
            className="py-5"
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            navigation={{
              prevEl: prevButtonRef.current,
              nextEl: nextButtonRef.current,
            }}
            onSwiper={(swiper) => {
              swiper.params.navigation.prevEl = prevButtonRef.current;
              swiper.params.navigation.nextEl = nextButtonRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              250: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 15 },
              1280: { slidesPerView: 3, spaceBetween: 20 },
              1440: { slidesPerView: 4, spaceBetween: 25 },
            }}
          >
            {data.map((card) => (
              <SwiperSlide
                key={card.id}
                className="flex justify-center bg-white rounded-b-lg h-full w-full max-w-sm flex-col min-h-[360px]" // Adjust min height as needed
                style={{ boxShadow: "0px 1px 3px 0px #25201F4D" }}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={card.imgPath}
                    layout="fill" // Makes the image take the full height and width of the container
                    objectFit="cover"
                    quality={100} // Ensures high image quality
                    className="h-[171px]"
                    alt={card.title}
                  />
                </div>
                <div className="p-4 flex  justify-between gap-4">
                  <div className="text-start">
                    <h2 className="text-lg font-bold mb-1">{card.title}</h2>
                    <p className="text-gray-700 text-sm">{card.content}</p>
                  </div>
                  <div className="flex flex-col items-end justify-start  text-sm">
                    <div>From</div>
                    <div className="font-bold text-lg">RS{card.price}</div>
                    <div>Per day</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="px-4 py-2 rounded-lg md:mt-8 mt-4 bg-[#EFF3F8] flex gap-2 justify-start items-center font-roboto">
          <IoMdInformationCircle className="w-6 h-6 text-gray-800" />
          <div className="text-base font-normal">
            These are estimated prices to help you choose from a large number of
            options. Each is an average based on the lowest{" "}
            <span className="font-medium">car rental</span> prices found for
            each destination over the last 15 days.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRentalDestinations;
