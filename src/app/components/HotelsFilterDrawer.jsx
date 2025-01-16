"use client";

import React, { useState } from "react";
import { TbFilterDown } from "react-icons/tb";
import { MdOutlineKingBed } from "react-icons/md";
import { Checkbox } from "@nextui-org/checkbox";
import ReactStars from "react-rating-stars-component";
import { MdAirportShuttle } from "react-icons/md";
import { TbParkingCircleFilled } from "react-icons/tb";
import { IoIosFitness } from "react-icons/io";
import { MdOutlinePool } from "react-icons/md";
import { BiSolidSpa } from "react-icons/bi";
import { FaWifi } from "react-icons/fa";
const HotelsFilterDrawer = ({ isOpen, setIsOpen }) => {
  const [tagShowAll, setTagShowAll] = useState(3);
  const [tagShowAllSingle, setTagShowAllSingle] = useState(1);
  // const [isOpen, SetIsOpen] = useState(false);

  const toggleBtn = () => {
    setIsOpen(!isOpen);
  };

  const HoterFilter = {
    BookPOM: [
      {
        tagValue: false,
        tagTitle: "Free Cancellation",
        tagCount: 752,
      },
      {
        tagValue: false,
        tagTitle: "Pay on Arrival",
        tagCount: 75,
      },
    ],
    Price: [
      {
        tagValue: false,
        tagTitle: "Rs 0 - Rs 44,200",
        tagCount: 32,
      },
      {
        tagValue: false,
        tagTitle: "Rs 0 - Rs 42,200",
        tagCount: 328,
      },
      {
        tagValue: false,
        tagTitle: "Rs 0 - Rs 40,200",
        tagCount: 321,
      },
      {
        tagValue: false,
        tagTitle: "Rs 0 - Rs 38,200",
        tagCount: 320,
      },
    ],
    StarRating: [
      {
        tagValue: false,
        tagTitle: "5 Start",
        starRating: 5,
        tagCount: 32,
      },
      {
        tagValue: false,
        tagTitle: "4 Start",
        starRating: 4,
        tagCount: 32,
      },
      {
        tagValue: false,
        tagTitle: "3 Start",
        starRating: 3,
        tagCount: 32,
      },
      {
        tagValue: false,
        tagTitle: "2 Start",
        starRating: 2,
        tagCount: 32,
      },
      {
        tagValue: false,
        tagTitle: "1 Start",
        starRating: 1,
        tagCount: 32,
      },
    ],
    AccomoDation: [
      {
        tagValue: false,
        tagTitle: "HoteL",
        tagCount: 22,
      },
      {
        tagValue: false,
        tagTitle: "Apartment",
        tagCount: 32,
      },
      {
        tagValue: false,
        tagTitle: "Resort",
        tagCount: 32,
      },
      {
        tagValue: false,
        tagTitle: "Holiday rentals",
        tagCount: 32,
      },
      {
        tagValue: false,
        tagTitle: "Hostel",
        tagCount: 32,
      },
      {
        tagValue: false,
        tagTitle: "Guest House",
        tagCount: 2,
      },
    ],
    Cancellation: [
      {
        tagValue: false,
        tagTitle: "Free Consaltation",
        tagCount: 22,
      },
      {
        tagValue: false,
        tagTitle: "Non Refundable",
        tagCount: 32,
      },
    ],
    MealPlan: [
      {
        tagValue: false,
        tagTitle: "Breakfast Included",
        tagCount: 22,
      },
      {
        tagValue: false,
        tagTitle: "Meals Not Included",
        tagCount: 32,
      },
    ],
    GuestRating: [
      {
        tagValue: false,
        tagTitle: "Exellent",
        rates: 5.1,
        tagCount: 22,
      },
      {
        tagValue: false,
        tagTitle: "Very Good",
        rates: 4.2,
        tagCount: 22,
      },
      {
        tagValue: false,
        tagTitle: "Good",
        rates: 3.5,
        tagCount: 22,
      },
      {
        tagValue: false,
        tagTitle: "satisfactory",
        rates: 2.8,
        tagCount: 22,
      },
    ],
    Deals: [
      {
        tagValue: false,
        tagTitle: "Show Discount",
        tagCount: 22,
      },
    ],
    Amerities: [
      {
        tagValue: false,
        tagTitle: "Wifi",
        icon: <FaWifi />,
        tagCount: 22,
      },
      {
        tagValue: false,
        tagTitle: "Airport Shuttle",
        icon: <MdAirportShuttle />,
        tagCount: 22,
      },
      {
        tagValue: false,
        tagTitle: "Parking",
        icon: <TbParkingCircleFilled />,
        tagCount: 22,
      },
      {
        tagValue: false,
        tagTitle: "Fitness Center",
        icon: <IoIosFitness />,
        tagCount: 22,
      },
      {
        tagValue: false,
        tagTitle: "Pool",
        icon: <MdOutlinePool />,
        tagCount: 22,
      },
      {
        tagValue: false,
        tagTitle: "Spa",
        icon: <BiSolidSpa />,
        tagCount: 22,
      },
    ],
    PapularWith: [
      {
        tagValue: false,
        tagTitle: "Business Travelers",
        tagCount: 22,
      },
      {
        tagValue: false,
        tagTitle: "Families",
        tagCount: 22,
      },
      {
        tagValue: false,
        tagTitle: "Couples",
        tagCount: 22,
      },
      {
        tagValue: false,
        tagTitle: "Solo Travelers",
        tagCount: 22,
      },
    ],
    HotelChains: [
      {
        tagValue: false,
        tagTitle: "Accor Hotels",
        tagCount: 22,
      },
      {
        tagValue: false,
        tagTitle: "Inter-Continental Hotels Group",
        tagCount: 22,
      },
      {
        tagValue: false,
        tagTitle: "Hilton",
        tagCount: 22,
      },
      {
        tagValue: false,
        tagTitle: "MILLENNIUM & COPTHORNE Hotels",
        tagCount: 22,
      },
      {
        tagValue: false,
        tagTitle: "Marriott International",
        tagCount: 22,
      },
      {
        tagValue: false,
        tagTitle: "Jumerah Group",
        tagCount: 22,
      },
    ],
    Neightbourhoods: [
      {
        tagValue: false,
        tagTitle: "Daira",
        tagCount: 22,
      },
      {
        tagValue: false,
        tagTitle: "Jumeirah",
        tagCount: 22,
      },
      {
        tagValue: false,
        tagTitle: "Bur Dubai",
        tagCount: 22,
      },
      {
        tagValue: false,
        tagTitle: "Al Barsha",
        tagCount: 22,
      },
      {
        tagValue: false,
        tagTitle: "Za'abeel",
        tagCount: 22,
      },
      {
        tagValue: false,
        tagTitle: "Mushrif",
        tagCount: 22,
      },
    ],
  };

  return (
    <div className="xl:h-full overflow-y-scroll shadow-lg p-4  w-full">
      <div className="flex  items-center gap-2 ">
        <div className=" text-green-600">
          <TbFilterDown />
        </div>
        <p onClick={toggleBtn} className="text-xs font-bold  text-green-600">
          Hide Filters
        </p>
      </div>
      <hr class="h-px my-3 bg-gray-2B border-0 " />

      <div className="flex flex-col">
        <div className="flex flex-col gap-8">
          {/* Book With Peace of Mind */}
          <diV className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <MdOutlineKingBed />
              <h6 className="text-base font-bold text-black">
                Book With Peace of Mind
              </h6>
            </div>

            {HoterFilter.BookPOM?.map((items, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex  items-center gap-1">
                  <div>
                    <Checkbox
                      checked={items.tagValue}
                      color="primary"
                    ></Checkbox>
                  </div>
                  <p className="text-xs text-black-16 font-regular">
                    {items.tagTitle}
                  </p>
                </div>

                <p className="text-xs font-regular text-gray-2B">
                  {items.tagCount}
                </p>
              </div>
            ))}

            {/* <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">
                  Pay on Arrival
                </p>
              </div>

              <p className="text-xs font-regular text-gray-2B">228</p>
            </div> */}
          </diV>

          {/* price */}
          <diV className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <MdOutlineKingBed />
              <h6 className="text-base font-bold text-black">Price</h6>
            </div>
            {HoterFilter.Price?.map((items, index) => (
              <div
                kay={index}
                className="flex justify-between items-center"
                key={index}
              >
                <div className="flex  items-center gap-1">
                  <div>
                    <Checkbox
                      checked={items.tagValue}
                      color="primary"
                    ></Checkbox>
                  </div>
                  <p className="text-xs text-black-16 font-regular">
                    {items.tagTitle}
                  </p>
                </div>

                <p className="text-xs font-regular text-gray-2B">
                  {items.tagCount}
                </p>
              </div>
            ))}
          </diV>

          {/* start rating */}
          <diV className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <MdOutlineKingBed />
              <h6 className="text-base font-bold text-black">Star Rating</h6>
            </div>

            {HoterFilter.StarRating?.map((items, index) => (
              <div key={index} className="grid grid-cols-12 gap-1 items-center">
                <div className="flex items-center gap-1 col-span-5">
                  <div>
                    <Checkbox
                      checked={items.tagValue}
                      color="primary"
                    ></Checkbox>
                  </div>
                  <p className="text-xs font-regular text-black-16 text-nowrap flex items-center justify-between gap-2">
                    {items.tagTitle}
                  </p>
                </div>

                <div className=" col-span-4">
                  <ReactStars
                    count={5}
                    // onChange={ratingChange}
                    value={items.starRating}
                    size={24}
                    activeColor="#FFA033"
                  />
                </div>

                <div className="col-span-3 text-end">
                  <p className="text-xs font-regular text-gray-2B">
                    {items.tagCount}
                  </p>
                </div>
              </div>
            ))}
          </diV>

          {/* accomodation type */}
          <diV className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h6 className="text-base font-bold text-black">
                AccomoDation Type
              </h6>
            </div>

            {HoterFilter.AccomoDation?.map((items, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex  items-center gap-1">
                  <div>
                    <Checkbox
                      checked={items.tagValue}
                      color="primary"
                    ></Checkbox>
                  </div>
                  <p className="text-xs font-regular text-black-16">
                    {items.tagTitle}
                  </p>
                </div>

                <p className="text-xs font-regular text-gray-2B">
                  {items.tagCount}
                </p>
              </div>
            ))}

            <button className="text-blue-400 flex justify-start">
              See More
            </button>
          </diV>

          {/* Cancellation policy */}
          <diV className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h6 className="text-base font-bold text-black">
                Cancellation policy
              </h6>
            </div>

            {HoterFilter.Cancellation?.map((items, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex  items-center gap-1">
                  <div>
                    <Checkbox
                      checked={items.tagValue}
                      color="primary"
                    ></Checkbox>
                  </div>
                  <p className="text-xs font-regular text-black-16">
                    {items.tagTitle}
                  </p>
                </div>
                <p className="text-xs font-regular text-gray-2B">
                  {items.tagCount}
                </p>
              </div>
            ))}
          </diV>

          {/* meal plan */}
          <diV className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h6 className="text-base font-bold text-black">Meal Plan</h6>
            </div>
            {HoterFilter.MealPlan?.map((items, index) => (
              <div className="flex justify-between items-center" key={index}>
                <div className="flex  items-center gap-1">
                  <div>
                    <Checkbox
                      checked={items.tagValue}
                      color="primary"
                    ></Checkbox>
                  </div>
                  <p className="text-xs font-regular text-black-16">
                    {items.tagTitle}
                  </p>
                </div>
                <p className="text-xs font-regular text-gray-2B">
                  {items.tagCount}
                </p>
              </div>
            ))}
          </diV>

          {/* Guest Rating */}
          <diV className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h6 className="text-base font-bold text-black">Guest Rating</h6>
            </div>

            {HoterFilter.GuestRating?.map((items, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex  items-center gap-1">
                  <div>
                    <Checkbox checked={index} color="primary"></Checkbox>
                  </div>
                  <p className="text-xs font-regular text-black-16 flex items-center gap-2">
                    <span className="font-bold">{items.rates}+</span>
                    {items.tagTitle}
                  </p>
                </div>
                <p className="text-xs font-regular text-gray-2B">
                  {items.tagCount}
                </p>
              </div>
            ))}
          </diV>

          {/* Deals */}
          <diV className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h6 className="text-base font-bold text-black">Deals</h6>
            </div>

            {HoterFilter.Deals?.map((items, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex  items-center gap-1">
                  <div>
                    <Checkbox
                      checked={items.tagValue}
                      color="primary"
                    ></Checkbox>
                  </div>
                  <p className="text-xs font-regular text-black-16">
                    {items.tagTitle}
                  </p>
                </div>
                <p className="text-xs font-regular text-gray-2B">
                  {items.tagCount}
                </p>
              </div>
            ))}
          </diV>

          {/* Amerities */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h6 className="text-base font-bold text-black">Amerities</h6>
            </div>

            {HoterFilter.Amerities.slice(0, tagShowAll)?.map((items, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <div>
                    <Checkbox checked={items.tagValue} color="primary" />
                  </div>
                  <p className="text-xs font-regular text-black-16 flex items-center gap-2">
                    {items.icon}
                    {items.tagTitle}
                  </p>
                </div>
                <p className="text-xs font-regular text-gray-2B">
                  {items.tagCount}
                </p>
              </div>
            ))}

            <button
              onClick={() =>
                setTagShowAll(
                  tagShowAll === 3 ? HoterFilter.Amerities.length : 3
                )
              }
              className="text-blue-400 flex justify-start"
            >
              {tagShowAll === 3 ? "Show More" : "Show Less"}
            </button>
          </div>

          {/* Papular with */}
          <diV className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h6 className="text-base font-bold text-black">Papular with</h6>
            </div>

            {HoterFilter.PapularWith?.map((items, index) => (
              <div className="flex justify-between items-center" key={index}>
                <div className="flex  items-center gap-1">
                  <div>
                    <Checkbox
                      checked={items.tagValue}
                      color="primary"
                    ></Checkbox>
                  </div>
                  <p className="text-xs font-regular text-black-16">
                    {items.tagTitle}
                  </p>
                </div>
                <p className="text-xs font-regular text-gray-2B">
                  {items.tagCount}
                </p>
              </div>
            ))}
          </diV>

          {/* hotel chains */}
          <diV className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h6 className="text-base font-bold text-black">Hotel Chains</h6>
            </div>

            {HoterFilter.HotelChains?.map((items, index) => (
              <div className="flex justify-between items-center" key={index}>
                <div className="flex  items-center gap-1">
                  <div>
                    <Checkbox
                      checked={items.tagValue}
                      color="primary"
                    ></Checkbox>
                  </div>
                  <p className="text-xs font-regular text-black-16">
                    {items.tagTitle}
                  </p>
                </div>
                <p className="text-xs font-regular text-gray-2B">
                  {items.tagCount}
                </p>
              </div>
            ))}

            <button className="text-blue-400 flex justify-start">
              See More
            </button>
          </diV>

          {/* neightbourhoods */}
          <diV className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h6 className="text-base font-bold text-black">
                Neightbourhoods
              </h6>
            </div>

            {HoterFilter.MealPlan.slice(0, tagShowAllSingle)?.map(
              (items, index) => (
                <div className="flex justify-between items-center" key={index}>
                  <div className="flex  items-center gap-1">
                    <div>
                      <Checkbox
                        checked={items.tagValue}
                        color="primary"
                      ></Checkbox>
                    </div>
                    <p className="text-xs font-regular text-black-16">
                      {items.tagTitle}
                    </p>
                  </div>
                  <p className="text-xs font-regular text-gray-2B">
                    {items.tagCount}
                  </p>
                </div>
              )
            )}

            <button
              onClick={() =>
                setTagShowAllSingle(
                  tagShowAllSingle === 1 ? HoterFilter.Amerities.length : 1
                )
              }
              className="text-blue-400 flex justify-start"
            >
              {tagShowAll === 1 ? "see more" : "see less"}
            </button>
          </diV>
        </div>
      </div>
    </div>
  );
};

export default HotelsFilterDrawer;
