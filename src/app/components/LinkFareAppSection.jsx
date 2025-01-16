import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import Image from "next/image";

const LinkFareAppSection = () => {
  return (
    <div className="bg-white ">
      <div className="container ">
        <div className="grid lg:grid-cols-2  grid-cols-1  gap-[60px]   lg:gap-[120px] pb-[150px]">
          <div className="flex flex-col ">
            <h2 className="font-poppins font-bold  text-2xl lg:text-[44px]  text-center  lg:text-start ">
              Get <span className="text-black-33">Link</span>
              <span className="text-green-600">Fares</span> App{" "}
            </h2>
            <p className="text-base font-bold text-black mt-[12px]">
              We will send you a link, open it on your phone to download the
              app.
            </p>

            <div className="flex gap-[50px] items-center  mt-[36px]">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 border-2 border-green-600 rounded-full">
                  <input type="checkbox" id="phone" className="hidden peer" />

                  <label
                    for="phone"
                    className="flex items-center justify-center  bg-gray-200  w-full h-full    border-2  rounded rounded-[50%] border   border-white cursor-pointer peer-checked:bg-green-600 peer-checked:border-geen-600  p-2  relative "
                  ></label>
                </div>

                <span className="text-2xl font-roboto font-bold">Phone</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 border-2 border-green-600 rounded-full">
                  <input type="checkbox" id="email" className="hidden peer" />

                  <label
                    for="email"
                    className="flex items-center justify-center  bg-gray-200  w-full h-full    border-2  rounded rounded-[50%] border   border-white cursor-pointer peer-checked:bg-green-600 peer-checked:border-geen-600  p-2  relative "
                  ></label>
                </div>

                <span className="text-2xl font-roboto font-bold ">Email</span>
              </div>
            </div>

            <div className="grid grid-cols-12  gap-4 items-center  mt-[52px]">
              <div className="col-span-12  lg:col-span-7">
                <input
                  className="   py-[22px] px-[23px] text-xl font-bold font-roboto border border-gray-56 rounded-lg   outline-none w-full "
                  type="tel"
                  placeholder="Your Phone Number"
                ></input>
              </div>

              <div className="col-span-12 lg:col-span-5">
                <button className="w-full bg-green-6A  py-[23px] px-[52px] rounded-lg bg-green-500 hover:bg-green-800  text-xl font-bold  font-roboto text-[28px] text-white">
                  {" "}
                  Share Link
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-[52px]">
              <p className="text-[30px font-bold font-roboto text-gray-56">
                Download App From
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <button className="py-5 rounded-lg px-2 w-full flex justify-center  items-center gap-2 bg-black  hover:bg-green-800">
                  <div>
                    <IoLogoGooglePlaystore color="white" size={40} />
                  </div>
                  <div className="flex flex-col gap-1 justify-start items-start">
                    <p className="text-xs font-inter text-white ">Get it on </p>
                    <p className="text-white text-xl font-bold  font-inter ">
                      Google Play
                    </p>
                  </div>
                </button>
                <button className="py-5 rounded-lg px-2 w-full flex justify-center  items-center gap-2 bg-black  hover:bg-green-800">
                  <div>
                    <FaApple color="white" size={40} />
                  </div>
                  <div className="flex flex-col gap-1 justify-start items-start">
                    <p className="text-xs font-inter text-white ">
                      Download on the{" "}
                    </p>
                    <p className="text-white text-xl font-bold  font-inter ">
                      Apple Store
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full  flex justify-center  items-center   lg:order-none order-first">
            <Image
              src="/images/linkapp.png"
              width={500}
              height={500}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkFareAppSection;
