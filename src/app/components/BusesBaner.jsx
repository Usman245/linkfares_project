"use client";
import React from "react";
import { RadioGroup, Radio, cn } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { DatePicker } from "@nextui-org/date-picker";
import { IoSearchOutline } from "react-icons/io5";
import { RiErrorWarningFill } from "react-icons/ri";
import Link from "next/link";

const BusesBaner = () => {
  return (
    <div className=" bg-green-600 ">
      <div className="container">
        <div className="py-5 flex flex-col gap-5">
          <div className="flex  flex flex-col justify-center gap-3 items-center">
            <h1 className="text-4xl font-poppins  text-white font-medium">
              {" "}
              Search for Bus
            </h1>
            <p className="text-xl font-regular font-poppins  text-white">
              Find the best deals for your bus travel
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <RadioGroup
                orientation="horizontal"
                color="#ffffff"
                classNames={{}}
              >
                <Radio
                  value="buenos-aires"
                  classNames={{
                    control:
                      "border-white group-data-[selected=true]:bg-white group-data-[selected=true]:border-white",
                    wrapper: "group-data-[selected=true]:border-white",
                    label: "text-white",
                  }}
                >
                  One Way
                </Radio>
                <Radio
                  value="sydney"
                  classNames={{
                    control:
                      "border-white group-data-[selected=true]:bg-white group-data-[selected=true]:border-white",
                    wrapper: "group-data-[selected=true]:border-white",
                    label: "text-white",
                  }}
                >
                  Round Trip
                </Radio>
              </RadioGroup>
            </div>

            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-12 gap-4">
                <div className=" col-span-12  lg:col-span-10 grid grid-cols-12 gap-4">
                  <div className="col-span-12  md:col-span-4">
                    <Input
                      type="email"
                      label="Email"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="col-span-12  md:col-span-4">
                    <Input
                      type="email"
                      label="Email"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className=" col-span-12  md:col-span-4">
                    <DatePicker label={"Date"} />
                  </div>
                </div>

                <div className=" col-span-12  lg:col-span-2">
                  <Link href={"Buses/BusesList"}>
                    <button className="flex gap-2 items-center justify-center rounded-lg py-2  px-3  h-full w-full bg-green-500">
                      <div className="text-white">
                        <IoSearchOutline />
                      </div>
                      <p className="text-lg font-regular font-inter text-white">
                        {" "}
                        Book Now
                      </p>
                    </button>
                  </Link>
                </div>
              </div>

              <div className="flex items-ceneter gap-3">
                <div className="flex justify-center items-center">
                  <RiErrorWarningFill color="white" />
                </div>

                <p className="font-regular text-lg  text-white  ">
                  LinkFares and get 2% Off on a return ticket
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusesBaner;
