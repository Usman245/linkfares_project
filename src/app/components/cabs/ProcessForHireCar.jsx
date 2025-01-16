import React from "react";
import Image from "next/image";
import { FaCar, FaCarSide, FaTruckField } from "react-icons/fa6";
import {
  FaCalendarAlt,
  FaChargingStation,
  FaHandHoldingUsd,
  FaMapPin,
} from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { CiMap, CiMapPin } from "react-icons/ci";
import Link from "next/link";

const ProcessForHireCar = () => {
  const process = [
    {
      title: "Step 1: Search",
      icon: "/images/pfch1.png",
      desc: "Enter your location and see what's available. From family friendly SUVs to luxury convertibles, youllget a great price on every type of hire car.",
    },
    {
      title: "Step 2: Compare",
      icon: "/images/pfch2.png",
      desc: "Compare rental cars on fuel policy, mileage,provider rating, flexible booking, cleanliness,customer service and more.",
    },
    {
      title: "Step 3: Book",
      icon: "/images/pfch3.png",
      desc: "We compare car rental prices on 100s of sites foryou, so once you've found your ride, you'll beredirected to book with the provider, with no extra fees.",
    },
  ];
  return (
    <div className="container md:mt-16 mt-8 font-roboto">
      <div className="flex flex-col justify-center items-center bg-[#EFF3F8] rounded-xl py-12 px-6 text-center">
        <h1 className="font-bold my-2 text-2xl ">
          Booking car hire in three simple Steps
        </h1>
        <div className="flex lg:flex-row flex-col  justify-between gap-12 mt-4">
          {process.map((item, index) => (
            <div
              className="flex justify-center gap-[2px] items-center flex-col"
              key={index}
            >
              <Image src={item.icon} width={170} height={170} />
              <h3 className="font-medium text-xl">{item.title}</h3>
              <p className="font-normal text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="md:mt-16 mt-8 sm:mb-64 mb-80">
        <h1 className="text-2xl font-semibold ">
          How to find the best car hire deal
        </h1>
        <p className="text-base font-normal mt-2">
          {`         We are frequently named as the most trusted travel search site out
          there. We're free to use, and well do the hard work for you by
          searching hundreds of car hire companies, allowing you to instantly
          compare prices and then book. Here's how to get the most out of your
          car rental search.`}
        </p>
        <div className="mt-6 flex md:flex-row flex-col justify-between gap-5 text-[#161616]">
          <div className="flex flex-col gap-4 md:w-1/2 w-full">
            <div className="flex items-start gap-2">
              <FaCarSide className="w-12 h-12 relative bottom-[12px]" />
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-bold">Book now, cancel later</h4>
                <p className="text-[15px] font-normal">
                  There are many car and van hire options with flexible booking
                  policies and{" "}
                  <span className="font-semibold">Free cancelation</span>. So
                  you can bag the best deal with total flexibility to change
                  your plans last-minute if you need to.
                  <Link href="#" className="text-[#0062E3] cursor-pointer">
                    Find a flexible car hire.
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex items-start j gap-2 ">
              <BsFillFuelPumpFill className="w-6 h-6 relative " />
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-bold">Compare fuel policies</h4>
                <p className="text-[15px] font-normal">
                  To save money on topping up the tank before you take off, look
                  out for deals with a{" "}
                  <span className="font-semibold">{`'full to full'`}</span> fuel
                  tank policy.
                  <Link href="#" className="text-[#0062E3] cursor-pointer">
                    Explore fuel Prices.
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex items-start  gap-2 ">
              <FaCalendarAlt className="w-10 h-10 relative bottom-[6px]" />
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-bold">
                  Hire cars for a whole month
                </h4>
                <p className="text-[15px] font-normal">
                  Want to rent a car for almost a month? Often, car rental
                  companies avoid costly admin in between pick-ups by hiring out
                  cars for longer periods. So see if monthly car rental is
                  cheaper than the three weeks you need it for by selecting 30
                  days.
                  <Link href="#" className="text-[#0062E3] cursor-pointer">
                    Try it now.
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:w-1/2 w-full">
            <div className="flex items-start gap-2">
              <FaHandHoldingUsd className="w-14 h-14 relative bottom-[14px]" />
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-bold"> Skip the queues</h4>
                <p className="text-[15px] font-normal">
                  We call out keyless or{" "}
                  <span className="font-semibold">self-service pick-up</span>{" "}
                  when you search with us. No keys to pick up or paperwork to
                  fill in means no queues. Just turn up at your preferred car
                  hire location, hop in and hit the road.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <FaChargingStation className="w-16 h-12 relative bottom-[8px]" />
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-bold">Go greener</h4>
                <p className="text-[15px] font-normal">
                  Limit your impact on this beautiful planet while you explore
                  it. Filter by electric vehicles, which will be charged up and
                  ready to go when you pick them up, meaning no worries about
                  fuel policies, either.
                </p>
              </div>
            </div>
            <div className="flex items-start  gap-2">
              <FaMapPin
                fill="black"
                className="w-8 h-8 relative bottom-[2px] text-black"
              />
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-bold">Look further afield</h4>
                <p className="text-[15px] font-normal">
                  {`   If you're on a budget, it's often cheaper to hop on public
                  transport to a car rental`}{" "}
                  <span className="font-semibold">pick-up location</span> a
                  little further away.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessForHireCar;
