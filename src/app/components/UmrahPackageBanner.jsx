import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";

const UmrahPackageBanner = () => {
  return (
    <div className="container flex lg:flex-row flex-col-reverse  gap-4 items-center justify-center py-4">
      <div className="lg:w-3/5 w-full">
        <h1 className="text-xl font-medium font-poppins text-green-600">
          Ummrah package from pakistan: A scared Journy of faith
        </h1>
        <p className="text-sm my-2 text-[#646464]">
          Welcome to our exclusive Umrah package from Pakistan, where we offer
          you a transformative and deeply spiritual pilgrimage experience to the
          blessed cities of Makkah and Madinah. Embark on a journey of a
          lifetime as you fulfill your spiritual obligations and seek blessings
          from the divine in the holiest sites of Islam
        </p>
        <ul className="flex flex-col  gap-2">
          <li className="flex items-center gap-2">
            <FaCheck className="w-5 h-5 text-green-600" />
            <span className="text-sm text-[#646464]">Visa Processing</span>
          </li>
          <li className="flex items-center gap-2">
            <FaCheck className="w-5 h-5 text-green-600" />
            <span className="text-sm text-[#646464]">
              Greater services at lowest cost
            </span>
          </li>
          <li className="flex items-center gap-2">
            <FaCheck className="w-5 h-5 text-green-600" />
            <span className="text-sm text-[#646464]">
              Comfortable hotels in Economy
            </span>
          </li>
          <li className="flex items-center gap-2">
            <FaCheck className="w-5 h-5 text-green-600" />
            <span className="text-sm text-[#646464]">
              Best customer support during your journey
            </span>
          </li>
          <li className="flex items-center gap-2">
            <FaCheck className="w-5 h-5 text-green-600" />
            <span className="text-sm text-[#646464]">
              Best customer support during your journey
            </span>
          </li>
          <li className="flex items-center gap-2">
            <FaCheck className="w-5 h-5 text-green-600" />
            <span className="text-sm text-[#646464]">
              Most of all — No false commitments!
            </span>
          </li>
        </ul>
        <p className="text-sm my-2 text-[#646464]">
          You can get your customized Umrah package in Economy or Star from our
          customer support team. Your required dates, duration and choice of
          stay and we will give you a best price.
        </p>
        <button className="text-white bg-green-600 rounded-[4px] cursor-pointer outline-none border-none py-2 px-4 mt-4">
          Make my own Umrah Package
        </button>
      </div>
      <Image
        src="/images/ummrahBannerBg.png"
        width={459}
        height={307}
        alt="image banner"
        className="lg:w-2/5 w-full"
      />
    </div>
  );
};

export default UmrahPackageBanner;
