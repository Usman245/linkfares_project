import React from "react";
import { Link } from "@nextui-org/react";
import { FaWhatsapp } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { Reem_Kufi } from "next/font/google";

const reemKufi = Reem_Kufi({
  subsets: ["latin"], // Choose subsets you need
  weight: ["400"], // Reem Kufi has one standard weight, so "400" is fine
  display: "swap", // Optional: this controls the font loading behavior
});

const PackagesDetailBanner = () => {
  return (
    <div className="reemKufi bg-[url('/images/packagesdetailbg.png')] bg-cover bg-center bg-no-repeat  flex justify-center items-center">
      <div className="container 2xl:py-14 xl:py-10 lg:py-8 md:py-6 sm:py-4 py-3 ">
        <h1 className=" text-[38px] xs:text-2xl leading-10 text-white font-normal font-reemkufi ">
          Maldives tour from Pakistan
        </h1>
        <p className="text-lg xs:text-base text-[#FFFFFF] font-normal font-roboto mt-3 leading-7 ">
          Maldives invites travellers to its stunning natural beauty, luxurious
          private island resorts, and vibrant marine life, ideal for relaxation
          and adventure. Enjoy crystal-clear waters, white sandy beaches, and
          various water sports. Committed to sustainability, many resorts engage
          in ecological preservation. Its rich cultural tapestry, exceptional
          hospitality, and privacy make it perfect for honeymooners and romantic
          getaways. With easy accessibility and a visa-free policy, the Maldives
          is a top hassle-free luxury destination.
        </p>
        <div className="flex flex-wrap items-start mt-3 gap-4">
          <Link
            href="#"
            className="flex justify-center items-center w-[244px] h-[48px] gap-2 rounded-[4px] shadow-none border border-white text-white hover:text-white py-2 px-4 cursor-pointer"
          >
            <FaWhatsapp className="text-white w-6 h-6" />
            <span className="text-lg font-normal font-reemkufi">
              Get in Touch
            </span>
          </Link>
          <Link className="flex justify-center items-center  gap-2 rounded-[4px] border border-white text-white py-2 px-2 cursor-pointer hover:text-white">
            <FaLink className="w-6 h-6" />
            <span className="text-lg font-normal font-reemkufi">
              View Destination guide
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackagesDetailBanner;
