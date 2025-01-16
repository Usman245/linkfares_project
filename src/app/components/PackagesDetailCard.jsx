import React from "react";
import { Link } from "@nextui-org/react";
import { IoMdFitness, IoMdStar } from "react-icons/io";
import { GiMeal } from "react-icons/gi";
import { BiPlus } from "react-icons/bi";
import { FaUmbrellaBeach } from "react-icons/fa6";

const PackagesDetailCard = () => {
  const cards = [
    {
      title: "Explore modern luxury and adventure at Nova Maldives.",
      rating: 5,
      actualPrice: "",
      discountedPrice: 6347634,
      night: "5 Nights",
      description: "One single bed room",
    },
    {
      title: "Relax in paradise at Maldives Island Resort.",
      rating: 4,
      actualPrice: 7000000,
      discountedPrice: 6300000,
      night: "4 Nights",
      description: "Deluxe ocean-view suite with private pool",
    },
    {
      title: "Sunset Villa Maldives: Your Ultimate Retreat.",
      rating: 5,
      actualPrice: 6500000,
      discountedPrice: 5800000,
      night: "3 Nights",
      description: "Private villa with sunset views and jacuzzi",
    },
    {
      title: "Luxuriate in the heart of Maldives at Sea Star Resort.",
      rating: 4,
      actualPrice: 6800000,
      discountedPrice: 6000000,
      night: "6 Nights",
      description: "Overwater bungalow with king-size bed",
    },
    {
      title: "The Coral Bay Resort: Exclusive Maldives Experience.",
      rating: 5,
      actualPrice: 7100000,
      discountedPrice: 6700000,
      night: "7 Nights",
      description: "Beachfront suite with infinity pool access",
    },
    {
      title: "Experience elegance at Ocean Breeze Maldives.",
      rating: 3,
      actualPrice: 6000000,
      discountedPrice: 5300000,
      night: "5 Nights",
      description: "Standard double room with ocean view",
    },
    {
      title: "Blue Lagoon Paradise: Maldives’ Hidden Gem.",
      rating: 4,
      actualPrice: 6900000,
      discountedPrice: 6500000,
      night: "4 Nights",
      description: "Villa with private garden and outdoor bath",
    },
    {
      title: "Enjoy comfort and class at Pearl Sands Resort.",
      rating: 3,
      actualPrice: 5000000,
      discountedPrice: 4700000,
      night: "6 Nights",
      description: "Luxury tent with garden view",
    },
    {
      title: "The Crystal Bay Resort: Tropical Luxury in Maldives.",
      rating: 5,
      actualPrice: 7500000,
      discountedPrice: 7000000,
      night: "5 Nights",
      description: "Suite with private balcony and ocean access",
    },
    {
      title: "Whispering Waves: A Cozy Maldives Getaway.",
      rating: 3,
      actualPrice: 5600000,
      discountedPrice: 5000000,
      night: "3 Nights",
      description: "Single room near the beach",
    },
    {
      title: "Sunrise Haven: Your Luxurious Maldives Escape.",
      rating: 5,
      actualPrice: 7200000,
      discountedPrice: 6800000,
      night: "5 Nights",
      description: "Private suite with sunrise view",
    },
    {
      title: "Coral Retreat: Serenity in Maldives.",
      rating: 4,
      actualPrice: 6100000,
      discountedPrice: 5800000,
      night: "4 Nights",
      description: "Family room with direct beach access",
    },
    {
      title: "Manta Cove: A Unique Island Experience.",
      rating: 5,
      actualPrice: 7700000,
      discountedPrice: 7300000,
      night: "6 Nights",
      description: "Overwater villa with lagoon view",
    },
    {
      title: "Sea Whisperer Maldives: Perfect Escape for Couples.",
      rating: 4,
      actualPrice: 6700000,
      discountedPrice: 6300000,
      night: "5 Nights",
      description: "Double room with balcony and sea view",
    },
    {
      title: "Island Dreams: Exclusive Luxury in Maldives.",
      rating: 5,
      actualPrice: 7900000,
      discountedPrice: 7400000,
      night: "7 Nights",
      description: "Penthouse suite with private terrace",
    },
    {
      title: "Sand & Sky Retreat: Maldives All-Inclusive Stay.",
      rating: 3,
      actualPrice: 5500000,
      discountedPrice: 5200000,
      night: "4 Nights",
      description: "Standard room with garden view",
    },
    {
      title: "Lagoon Oasis: A Scenic Hideaway in Maldives.",
      rating: 4,
      actualPrice: 6400000,
      discountedPrice: 6100000,
      night: "5 Nights",
      description: "Suite with pool and ocean views",
    },
    {
      title: "Paradise Nest: Maldives’ Hidden Treasure.",
      rating: 5,
      actualPrice: 7300000,
      discountedPrice: 6900000,
      night: "6 Nights",
      description: "Overwater villa with direct lagoon access",
    },
    {
      title: "Island Bliss: Luxury at Its Best in Maldives.",
      rating: 4,
      actualPrice: 6200000,
      discountedPrice: 5900000,
      night: "4 Nights",
      description: "Standard double room near the beach",
    },
    {
      title: "The Pearl of Maldives: A High-End Retreat.",
      rating: 5,
      actualPrice: 7800000,
      discountedPrice: 7400000,
      night: "5 Nights",
      description: "VIP suite with private beach access",
    },
  ];

  return (
    <div className="lg:w-4/6 w-full mb-4 font-poppins">
      <div className="flex flex-col gap-4 w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex justify-end gap-2 py-2 px-4 bg-white rounded-lg border border-[#D9D9D9]"
          >
            <div className="xl:w-3/5 w-full">
              <h1 className="text-2xl font-bold font-reemkufi">{card.title}</h1>
              <div className="flex items-center mt-2 ">
                {card.rating} <IoMdStar className="text-yellow-500" /> Hotel
              </div>
              <div className="flex flex-wrap gap-2 my-2">
                <div className=" flex items-center gap-3 py-1 px-2 bg-[#E7EEF5] rounded-[4px]">
                  <GiMeal className="text-green-600 w-4 h-4" />
                  <div className="text-green-600 2xl:text-base 2xl:font-medium xl:font-medium font-normal text-sm ">
                    Breakfast included
                  </div>
                </div>
                <div className=" flex items-center gap-3 py-1 px-2 bg-[#E7EEF5] rounded-[4px]">
                  <FaUmbrellaBeach className="text-green-600 w-4 h-4" />
                  <div className="text-green-600 2xl:text-base 2xl:font-medium xl:font-medium font-normal text-sm ">
                    Private Beach
                  </div>
                </div>
                <div className=" flex items-center gap-3 py-1 px-2 bg-[#E7EEF5] rounded-[4px]">
                  <IoMdFitness className="text-green-600 w-4 h-4" />
                  <div className="text-green-600 2xl:text-base 2xl:font-medium xl:font-medium font-normal text-sm ">
                    Fitness Gym
                  </div>
                </div>
                <div className="bg-green-600 p-2 flex justify-center items-center rounded-[4px]">
                  <BiPlus className="text-white w-4 h-4 cursor-pointer" />
                </div>
              </div>
              <hr className="border-t-2 border-[#F0F0F0]" />
              <div className="flex sm:flex-row flex-col w-full justify-between items-center xs:items-start mt-2">
                <div>
                  <div className="text-xs text-red-600 line-through">
                    PKR {card.actualPrice}
                  </div>
                  <div className=" text-base font-medium ">
                    PKR {card.discountedPrice}
                  </div>
                  <div className="text-gray-600 text-xs">
                    {card.description}
                  </div>
                </div>
                <div className="flex flex-col justify-end xs:justify-start xs:text-left lg:text-right">
                  <div className="text-base font-medium font-reemkufi">
                    {card.night}
                  </div>
                  <Link href="/Packages/UmrahPackagesDetails/"
                    className="bg-green-600 text-white text-lg font-normal py-1 px-4 mt-1 cursor-pointer rounded-[4px]
                  "
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesDetailCard;
