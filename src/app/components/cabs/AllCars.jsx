"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaCaretLeft,
  FaInfoCircle,
  FaUserAlt,
} from "react-icons/fa";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { FaFan } from "react-icons/fa";
import { BsFillSuitcase2Fill } from "react-icons/bs";
import { MdAirplanemodeActive } from "react-icons/md";
import { TbManualGearboxFilled } from "react-icons/tb";
import { FaCaretRight } from "react-icons/fa6";
import Link from "next/link";

const AllCars = () => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const [pageNo, setPageNo] = useState(1);
  const dealsArr = [
    {
      imgPAth: "/images/car.png",
      title: "Compact",

      price: "17999",
    },
    {
      imgPAth: "/images/mini.png.png",
      title: "Mini",

      price: "7999",
    },
    {
      imgPAth: "/images/economy.png.png",
      title: "Economy",

      price: "17999",
    },
    {
      imgPAth: "/images/intermediate.png.png",
      title: "Itermediate",

      price: "20999",
    },
    {
      imgPAth: "/images/fullsize.png.png",
      title: "Fullsize",

      price: "14999",
    },
    {
      imgPAth: "/images/premium.png.png",
      title: "Premium",

      price: "25999",
    },
  ];
  const carData = [
    {
      id: 1,
      name: "Volkswagen Golf",
      type: "Compact",
      doors: "4-5 doors",
      seats: 5,
      luggage: 2,
      ac: true,
      transmission: "Manual",
      pickup: "Shuttle bus (LCY)",
      price: 6678,
      image: "/images/car.png",
    },
    {
      id: 2,
      name: "Toyota Corolla",
      type: "Sedan",
      doors: "4 doors",
      seats: 5,
      luggage: 3,
      ac: true,
      transmission: "Automatic",
      pickup: "Shuttle bus (LHR)",
      price: 7000,
      image: "/images/mini.png.png",
    },
    {
      id: 3,
      name: "Ford Focus",
      type: "Compact",
      doors: "4-5 doors",
      seats: 5,
      luggage: 2,
      ac: true,
      transmission: "Manual",
      pickup: "On-site (LGW)",
      price: 6500,
      image: "/images/economy.png.png",
    },
    {
      id: 4,
      name: "Honda Civic",
      type: "Sedan",
      doors: "4 doors",
      seats: 5,
      luggage: 3,
      ac: true,
      transmission: "Automatic",
      pickup: "Shuttle bus (LCY)",
      price: 6800,
      image: "/images/premium.png.png",
    },
    {
      id: 5,
      name: "Hyundai Elantra",
      type: "Sedan",
      doors: "4 doors",
      seats: 5,
      luggage: 3,
      ac: true,
      transmission: "Automatic",
      pickup: "On-site (STN)",
      price: 6900,
      image: "/images/fullsize.png.png",
    },
    {
      id: 6,
      name: "Nissan Versa",
      type: "Compact",
      doors: "4-5 doors",
      seats: 5,
      luggage: 2,
      ac: true,
      transmission: "Manual",
      pickup: "Shuttle bus (LGW)",
      price: 6200,
      image: "/images/intermediate.png.png",
    },
    {
      id: 7,
      name: "Chevrolet Malibu",
      type: "Sedan",
      doors: "4 doors",
      seats: 5,
      luggage: 3,
      ac: true,
      transmission: "Automatic",
      pickup: "On-site (LHR)",
      price: 7100,
      image: "/images/car.png",
    },
    {
      id: 8,
      name: "Mazda 3",
      type: "Compact",
      doors: "4-5 doors",
      seats: 5,
      luggage: 2,
      ac: true,
      transmission: "Manual",
      pickup: "Shuttle bus (STN)",
      price: 6400,
      image: "/images/intermediate.png.png",
    },
    {
      id: 9,
      name: "Kia Optima",
      type: "Sedan",
      doors: "4 doors",
      seats: 5,
      luggage: 3,
      ac: true,
      transmission: "Automatic",
      pickup: "On-site (LCY)",
      price: 7200,
      image: "/images/fullsize.png.png",
    },
    {
      id: 10,
      name: "Subaru Impreza",
      type: "Compact",
      doors: "4-5 doors",
      seats: 5,
      luggage: 2,
      ac: true,
      transmission: "Manual",
      pickup: "Shuttle bus (LHR)",
      price: 6300,
      image: "/images/premium.png.png",
    },
    // Duplicated data with updated IDs
    {
      id: 11,
      name: "Volkswagen Golf",
      type: "Compact",
      doors: "4-5 doors",
      seats: 5,
      luggage: 2,
      ac: true,
      transmission: "Manual",
      pickup: "Shuttle bus (LCY)",
      price: 6678,
      image: "/images/car.png",
    },
    {
      id: 12,
      name: "Toyota Corolla",
      type: "Sedan",
      doors: "4 doors",
      seats: 5,
      luggage: 3,
      ac: true,
      transmission: "Automatic",
      pickup: "Shuttle bus (LHR)",
      price: 7000,
      image: "/images/mini.png.png",
    },
    {
      id: 13,
      name: "Ford Focus",
      type: "Compact",
      doors: "4-5 doors",
      seats: 5,
      luggage: 2,
      ac: true,
      transmission: "Manual",
      pickup: "On-site (LGW)",
      price: 6500,
      image: "/images/economy.png.png",
    },
    {
      id: 14,
      name: "Honda Civic",
      type: "Sedan",
      doors: "4 doors",
      seats: 5,
      luggage: 3,
      ac: true,
      transmission: "Automatic",
      pickup: "Shuttle bus (LCY)",
      price: 6800,
      image: "/images/premium.png.png",
    },
    {
      id: 15,
      name: "Hyundai Elantra",
      type: "Sedan",
      doors: "4 doors",
      seats: 5,
      luggage: 3,
      ac: true,
      transmission: "Automatic",
      pickup: "On-site (STN)",
      price: 6900,
      image: "/images/fullsize.png.png",
    },
    {
      id: 16,
      name: "Nissan Versa",
      type: "Compact",
      doors: "4-5 doors",
      seats: 5,
      luggage: 2,
      ac: true,
      transmission: "Manual",
      pickup: "Shuttle bus (LGW)",
      price: 6200,
      image: "/images/intermediate.png.png",
    },
    {
      id: 17,
      name: "Chevrolet Malibu",
      type: "Sedan",
      doors: "4 doors",
      seats: 5,
      luggage: 3,
      ac: true,
      transmission: "Automatic",
      pickup: "On-site (LHR)",
      price: 7100,
      image: "/images/car.png",
    },
    {
      id: 18,
      name: "Mazda 3",
      type: "Compact",
      doors: "4-5 doors",
      seats: 5,
      luggage: 2,
      ac: true,
      transmission: "Manual",
      pickup: "Shuttle bus (STN)",
      price: 6400,
      image: "/images/intermediate.png.png",
    },
    {
      id: 19,
      name: "Kia Optima",
      type: "Sedan",
      doors: "4 doors",
      seats: 5,
      luggage: 3,
      ac: true,
      transmission: "Automatic",
      pickup: "On-site (LCY)",
      price: 7200,
      image: "/images/fullsize.png.png",
    },
    {
      id: 20,
      name: "Subaru Impreza",
      type: "Compact",
      doors: "4-5 doors",
      seats: 5,
      luggage: 2,
      ac: true,
      transmission: "Manual",
      pickup: "Shuttle bus (LHR)",
      price: 6300,
      image: "/images/premium.png.png",
    },
  ];

  let pageSize = 10;
  let totalITems = 50;
  let noOfPages = Math.ceil(totalITems / pageSize);
  return (
    <div className="">
      <div className="">
        <div className="flex justify-between items-center mt-2">
          <h1 className=""></h1>
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
        <div className="relative mt-3">
          <Swiper
            style={{ paddingBottom: "8px" }}
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
              250: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 3, spaceBetween: 15 },
              1280: { slidesPerView: 4, spaceBetween: 20 },
              1440: { slidesPerView: 5, spaceBetween: 25 },
            }}
          >
            {dealsArr.map((card, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col justify-between cursor-pointer bg-white w-[116px] h-[126px] rounded-xl"
                style={{
                  boxShadow: "0px 0px 0px 1px rgba(193, 199, 207, 1) inset",
                }}
              >
                <Image
                  src={card.imgPAth}
                  layout="responsive" // Makes the image take the full height and width of the container
                  // objectFit="cover"
                  quality={100} // Ensures high image quality
                  width={100}
                  height={66}
                  className=" p-4"
                />
                <h4 className="text-xl font-bold">{card.title}</h4>
                <p className="mb-2">from{card.price}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex sm:flex-row flex-col-reverse gap-2 justify-between mt-8 text-base font-medium text-black">
          <div>402 results out off 407</div>
          <div className="flex gap-1 items-center">
            <span>Sort By</span>{" "}
            <select
              name=""
              id=""
              className="border-2 px-2 border-[#C1C7CF] rounded py-1 outline-none"
            >
              <option value="recomended">Recomended</option>
              <option value="by-date">By date</option>
            </select>
            <FaInfoCircle className="w-6 h-6" />
          </div>
        </div>
        <div className="mt-6 gap-4">
          {carData.map((car) => (
            <Link 
            href={{
              pathname: '/Cabs/CarSelection/CarHires',
            }} 
            
              key={car.id}
              className="flex sm:flex-row flex-col justify-between items-center  border border-gray-300 rounded-lg shadow-md mb-4"
            >
              <div className="flex sm:flex-row flex-col-reverse gap-2 sm:w-[70%] w-full px-4 py-6 sm:border-r border-b sm:border-b-0 border-gray-300">
                <div className="sm:w-1/2 w-full">
                  <h2 className="text-2xl font-bold text-green-600">
                    {car.name}
                  </h2>
                  <p className="text-green-600 text-sm mt-2 font-normal ">{`or similar • ${car.doors} • ${car.type}`}</p>

                  <div className="flex">
                    <div className="grid grid-cols-3 mt-2 gap-4">
                      <span className="flex gap-2 p-2 justify-center items-center bg-[#EFF3F8] rounded">
                        <FaUserAlt className="w-4 h-4" />
                        {car.seats}
                      </span>
                      <span className="flex gap-2 p-2 justify-center items-center bg-[#EFF3F8] rounded">
                        <BsFillSuitcase2Fill className="w-4 h-4" />
                        {car.luggage}
                      </span>
                      <span className="flex gap-2 p-2 justify-center items-center bg-[#EFF3F8] rounded">
                        <FaFan className="w-4 h-4" />
                        {car.ac ? "AC" : "No AC"}
                      </span>
                      <span className="flex gap-2 p-2 min-w-[130px] justify-center items-center bg-[#EFF3F8] rounded">
                        <TbManualGearboxFilled className="w-4 h-4" />
                        {car.transmission}
                      </span>
                    </div>
                  </div>

                  <p className="text-green-600 mt-8 flex gap-2">
                    <span className="bg-black rotate-[37deg] rounded w-5 h-5 items-center justify-center flex">
                      <MdAirplanemodeActive className="text-white rotate-[323deg] w-4 h-4 " />
                    </span>
                    <span>Pick-up: {car.pickup}</span>
                  </p>
                </div>
                <div className="sm:w-1/2 w-full flex justify-center items-center">
                  <Image src={car.image} width={181} height={117} />
                </div>
              </div>

              <div className="sm:w-[30%] w-full  flex flex-col px-4 py-6 justify-between items-start">
                <p className="text-green-600 font-medium text-base mb-4">
                  4 deals form
                </p>
                <p className="text-green-600 font-semibold">
                  <span className="text-[30px] font-bold">RS{car.price}</span>{" "}
                  total
                </p>
                <p className="text-gray-500 text-base font-normal font-roboto flex gap-2 items-center">
                  <span>
                    <Image
                      src={"/images/cancellationsvg.png"}
                      width={16}
                      height={16}
                    />
                  </span>
                  Free cancellation
                </p>
                <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg w-full font-poppins cursor-pointer">
                  View deals
                </button>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center mt-8 gap-2">
          <button onClick={() => setPageNo(pageNo - 1)} disabled={pageNo === 1}>
            <FaCaretLeft className="w-4 h-4 text-gray-500" />
          </button>

          <span className="w-9 h-9 bg-green-600 rounded flex justify-center items-center text-white text-base font-bold">
            {pageNo}
          </span>
          <span
            className={`text-base font-bold cursor-pointer ${
              pageNo === pageNo - 1 ? "hidden" : "block"
            } `}
            onClick={() => setPageNo(pageNo + 1)}
          >
            {pageNo + 1}
          </span>
          <span
            className={`text-base font-bold cursor-pointer ${
              pageNo + 1 >= noOfPages ? "hidden" : "block"
            }`}
            onClick={() => setPageNo(pageNo + 2)}
          >
            {pageNo + 2}
          </span>
          <span
            className={`text-base font-bold ${
              pageNo + 2 >= noOfPages ? "hidden" : "block"
            }`}
          >
            ...
          </span>
          <span
            className={`text-base font-bold cursor-pointer ${
              pageNo + 3 >= noOfPages ? "hidden" : "block"
            }`}
            onClick={() => setPageNo(noOfPages)}
          >
            {noOfPages}
          </span>
          <button
            onClick={() => setPageNo(pageNo + 1)}
            disabled={pageNo >= noOfPages}
          >
            <FaCaretRight className="w-4 h-4 text-black cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllCars;
