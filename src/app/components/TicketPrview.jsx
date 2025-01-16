import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoIosAirplane } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import Link from "next/link";

const TicketPrview = () => {
  return (
    <div className="container">
      <div className="pb-10 flex flex-col gap-6">
        <div className="flex gap-2 items-center">
          <p className="  text-[8px] xs:text-sm md:text-basefont-poppins font-medium text-green-600 ">
            Flights
          </p>
          <div className="flex items-center    text-[8px] xs:text-sm md:text-base  text-green-600">
            <MdOutlineKeyboardDoubleArrowRight />
          </div>

          <p className="  text-[8px] xs:text-sm md:text-base font-poppins font-medium text-green-600">
            LHR to DXB
          </p>
          <div className="flex items-center    text-[8px] xs:text-sm md:text-base text-green-600">
            <MdOutlineKeyboardDoubleArrowRight />
          </div>

          <p className="  text-[8px] xs:text-sm md:text-base font-poppins font-medium text-green-600">
            Best Category
          </p>

          <div className="flex items-center   text-[8px] xs:text-sm md:text-base text-green-600">
            <MdOutlineKeyboardDoubleArrowRight />
          </div>
          <p className="  text-[8px] xs:text-sm md:text-base font-poppins font-medium text-gray-4B">
            Checkout
          </p>
        </div>

        <div className="flex justify-center ">
          <div className=" p-14 rounded-2xl  bg-[url('/images/map.png')]    bg-no-repeat drop-shadow-xl rounded-2xl bg-white   ">
            <div className="flex flex-col gap-20">
              <div className="flex justify-center">
                <div className="flex flex-col gap-5">
                  <div className="flex   flex-col gap-2">
                    <p className="text-sm text-gray-4B font-roboto">30-10-24</p>
                    <div className="flex justify-between gap-3">
                      <p className="text-2xl md:text-3xl font-roboto font-medium text-gray-4B">
                        05:45
                      </p>

                      <div className="inline-flex items-center justify-center w-full relative ">
                        <hr className="hidden md:block  w-64  max-w-64  border-dashed border-1 border-green-6c dark:bg-gray-700" />
                        <span className="absolute px-3 font-medium text-6xl text-green-600 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                          <IoIosAirplane />
                        </span>
                        <span className="hidden md:block   absolute px-0 font-medium  text-2xl text-green-600  right-0 right-0 bg-white  dark:text-white dark:bg-gray-900">
                          <IoMdArrowDropright />
                        </span>

                        <span className="hidden md:block  absolute px-0 font-medium  text-2xl text-green-600  left-0 bg-white  dark:text-white dark:bg-gray-900">
                          <LuDot />
                        </span>
                      </div>

                      <p className="text-2xl md:text-3xl font-roboto font-medium text-gray-4B">
                        08:15
                      </p>
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="text-2xl md:text-3xl font-roboto font-medium text-green-600">
                        LHE
                      </p>
                      <p className="text-2xl md:text-3xl font-roboto font-medium text-green-600">
                        DXB
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <p className="text-sm font-roboto font-medium text-gray-4B max-w-[162px]">
                      Allama Iqbal International Airport, Lahore
                    </p>
                    <p className="text-sm font-roboto font-medium text-gray-4B max-w-[162 px]  text-end">
                      Dubai International Airport, UAE
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <p className="text-2xl md:text-4xl font-roboto  font-bold text-gray-4B  ">
                      Rs 78,135
                    </p>

                    <Link href={"checkout"}>
                      <button className=" px-3 text-sm   md:px-4 py-2 rounded-[20px] text-white bg-green-600 w-max flex justify-center items-center ">
                        Buy Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPrview;
