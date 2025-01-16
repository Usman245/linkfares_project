"use client";
import React, { useEffect, useState } from "react";
import { PiCaretRightFill } from "react-icons/pi";
import { GrLocationPin } from "react-icons/gr";
import ReactStars from "react-rating-stars-component";
import { BsUpload } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { image, Select, SelectItem } from "@nextui-org/react";
import { FaRegClock } from "react-icons/fa";
import { LiaChildSolid } from "react-icons/lia";
import { FaBed } from "react-icons/fa";
import { MdPets } from "react-icons/md";
import { PiForkKnifeFill } from "react-icons/pi";
import { PiSealWarningBold } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaWifi } from "react-icons/fa";
import { TbParkingCircleFilled } from "react-icons/tb";
import { GiCoolSpices } from "react-icons/gi";
import { FaVanShuttle } from "react-icons/fa6";
import { FaFemale } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import Link from "next/link";


const hotelViewDetails = {
  cards: [
    {
      imx: "/images/master-card.1cb10f91.svg fill.png",
    },
    {
      imx: "/images/union-pay.e87eb351.svg.png",
    },
    {
      imx: "/images/visa.6d11d0bb.svg.png",
    },
    {
      imx: "/images/master-card.1cb10f91.svg fill.png",
    },
    {
      imx: "/images/union-pay.e87eb351.svg.png",
    },
    {
      imx: "/images/visa.6d11d0bb.svg.png",
    },
  ],
  amenities: [
    {
      icon: <FaWifi className="text-2xl" />,
      label: "WIFI",
    },
    {
      icon: <TbParkingCircleFilled className="text-2xl" />,
      label: "Parking",
    },
    {
      icon: <GiCoolSpices className="text-2xl" />,
      label: "Air conditioning",
    },
    {
      icon: <FaVanShuttle className="text-2xl" />,
      label: "Airport shuttle",
    },
    {
      icon: <FaFemale className="text-2xl" />,
      label: "Front desk 24 hour",
    },
    {
      icon: <IoFastFoodSharp className="text-2xl" />,
      label: "Restaurant",
    },
    {
      icon: <FaWifi className="text-2xl" />,
      label: "WIFI",
    },
    {
      icon: <TbParkingCircleFilled className="text-2xl" />,
      label: "Parking",
    },
    {
      icon: <GiCoolSpices className="text-2xl" />,
      label: "Air conditioning",
    },
    {
      icon: <FaVanShuttle className="text-2xl" />,
      label: "Airport shuttle",
    },
    {
      icon: <FaFemale className="text-2xl" />,
      label: "Front desk 24 hour",
    },
    {
      icon: <IoFastFoodSharp className="text-2xl" />,
      label: "Restaurant",
    },
  ],
};

const ViewHotelView = ({ hotelData }) => {

  const [seeMore, setSeeMore] = useState(false);
  const toggleSeeMore = () => {
    setSeeMore((prev) => !prev);
  };
  const DisplayCard = seeMore
    ? hotelViewDetails.cards
    : hotelViewDetails.cards.slice(0, 3);

  const [amenities, setAmenities] = useState(false);
  const toggleAmenetis = () => {
    setAmenities((prev) => !prev);
  };
  const Amenities = amenities
    ? hotelViewDetails.amenities
    : hotelViewDetails.amenities.slice(0, 6);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div>
        <div className="hero py-5">
          <div className="container">
            <div className="inner_hero flex flex-col gap-5">
              <div className="breadcrup">
                <ul className="flex flex-wrap gap-2 items-center">
                  <li className="text-[#12B76A]">Home</li>
                  <li>
                    <PiCaretRightFill className="text-[#cccccc]" />
                  </li>
                  <li className="text-[#12B76A]">Hotel</li>
                  <li>
                    <PiCaretRightFill className="text-[#cccccc]" />
                  </li>
                  <li className="text-[#12B76A]">Pakitan</li>
                  <li>
                    <PiCaretRightFill className="text-[#cccccc]" />
                  </li>
                  <li className="text-[#12B76A]">Karachi</li>
                  <li>
                    <PiCaretRightFill className="text-[#cccccc]" />
                  </li>
                  <li className="text-[#626971]">Hotel excior Karachi</li>
                </ul>
              </div>
              <div className="title_text grid items-center grid-cols-12 gap-3">
                <div className="inner_text md:col-span-10 col-span-12 flex flex-col gap-3 order-2 md:order-none">
                  <h1 className="lg:text-5xl md:text-4xl sm:text-2xl xs:lg font-semibold flex items-center gap-3">
                    {hotelData.hoteltitle}
                    {/* karachi pakistan */}
                    <ReactStars
                      count={5}
                      // onChange={ratingChanged}
                      value={4}
                      size={30}
                      activeColor="#F55D42"
                    />
                  </h1>
                  <p className="flex items-center gap-2 text-sm md:text-base">
                    <GrLocationPin className="text-2xl text-[#626971]" /> Plot
                    SB-21, Sarwar Shaheed Rd، opposite Atrium Mall،, Karachi,
                    75600, Pakistan
                  </p>
                </div>
                <div className="inner_icons md:col-span-2 col-span-12 flex justify-end gap-5 order-1 md:order-none">
                  <BsUpload className="text-2xl text-[#010913]" />
                  <FaRegHeart className="text-2xl text-[#010913]" />
                </div>
              </div>
              <div className="review_text grid items-center gap-5 grid-cols-12">
                <div className="rev flex gap-4 md:col-span-3 col-span-12">
                  <div className="rev_rating text-sm">
                    <span className="text-4xl font-bold">4.3</span>/5
                  </div>
                  <div className="rev_rating_text">
                    <p className="font-semibold">Very Good</p>
                    <p className="text-[#626971]">41 Reviews</p>
                  </div>
                </div>
                <div className="rev_text md:col-span-9 col-span-12">
                  <p className="shadow-md p-3 rounded-2xl text-sm">
                    {`         After staying in several hotels in Saddar, we finally
                      settled in Hotel Excelsior because it was fully booked
                      until that date. The hotel was amazing, the cleanliness,
                      the breakfast had both Pakistani Breakfast and Continental
                      breakfast also. The stay was very comfortable and the
                      service was amazing as…`}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery grid md:grid-cols-2 gap-1 mt-5 h-full">
            <div className="galleryP1">
              <img
                className="h-full w-full object-cover"
                src="/images/heros1.png"
                alt="hotel"
              />
            </div>
            <div className="galleryP2 grid grid-cols-12 gap-1">
              <div className="col-span-7 flex flex-col gap-1">
                <div className="singImage h-3/6">
                  <img
                    className="h-full w-full object-cover"
                    src="/images/heros2.png"
                    alt="hotel"
                  />
                </div>

                <div className="doubleImage h-3/6 flex gap-1">
                  <div className="inImag1">
                    <img
                      className="h-full w-full object-cover"
                      src="/images/heros-3.png"
                      alt="hotel"
                    />
                  </div>
                  <div className="inImag2">
                    <img
                      className="h-full w-full object-cover"
                      src="/images/heros-4.png"
                      alt="hotel"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-5 flex flex-col gap-1">
                <div className="inImag1 h-2/5">
                  <img
                    className="h-full w-full object-cover"
                    src="/images/heros-3.png"
                    alt="hotel"
                  />
                </div>
                <div className="inImag2c h-3/5">
                  <img
                    className="h-full w-full object-cover"
                    src="/images/heros-4.png"
                    alt="hotel"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* hotel Detail */}
        <div className="hotelDetail py-5">
          <div className="container">
            <div className="bg-[#EFF3F8] p-5 rounded flex flex-col gap-5">
              <div className="button grid grid-cols-12 gap-3 items-center">
                <div className="col-span-7 grid grid-cols-2 gap-3">
                  <div className="range">
                    <Select
                      // size={size}
                      radius={"none"}
                      classNames={{
                        trigger: "bg-white p-[21px] min-h-0 h-0 border-2",
                      }}
                      label="Select an animal"
                      className="max-w-xs"
                    ></Select>
                  </div>
                  <div className="selection">
                    <Select
                      // size={size}
                      radius={"none"}
                      classNames={{
                        trigger: "bg-white p-[21px] min-h-0 h-0 border-2",
                      }}
                      label="Select an animal"
                      className="max-w-xs"
                    ></Select>
                  </div>
                </div>
                <div className="col-span-5">
                  <button className="bg-[#12B76A] py-[10px] px-[130px] rounded text-[#fff] w-max">
                    Search rooms and rates
                  </button>
                </div>
              </div>

              <div className="button_text">
                <div className="button flex flex-wrap items-center gap-3">
                  <h5 className="font-semibold">Filter by :</h5>
                  <button className="border-2 w-max px-3 py-2 rounded-xl border">
                    Free cancellation
                  </button>
                  <button className="border-2 w-max px-3 py-2 rounded-xl border">
                    Breakfast included
                  </button>
                  <button className="border-2 w-max px-3 py-2 rounded-xl border">
                    Pay on arrival
                  </button>
                </div>
              </div>
              <div className="detail_card flex flex-col gap-3">
                <p>Price per night including taxes and fees</p>
                <div className="card grid grid-cols-12 gap-5 rounded-lg bg-[#fff] p-5">
                  <div className="lg:col-span-3 col-span-12">
                    <img
                      className="h-full w-full object-cover rounded-lg"
                      src="/images/heros-4.png"
                      alt="hotel"
                    />
                  </div>
                  <div className="lg:col-span-6 col-span-12 flex flex-col gap-2">
                    <div className="first">
                      <h6 className="font-semibold text-2xl text-[#434343]">
                        Delux Room
                      </h6>
                      <p>2.2 km from Shahrah-e-Faisal</p>
                      <ul className="text-xs list-disc ml-3">
                        <li>Non-refundable , Breakfast Included</li>
                      </ul>
                    </div>
                    <div className="second flex flex-col gap-3">
                      <h6 className="font-semibold text-[#434343]">
                        Comfort Room
                      </h6>
                      <ul className="text-xs flex flex-col gap-1 list-disc ml-3">
                        <li>1x King Size Bed</li>
                        <li>1x Bathroom</li>
                        <li>Cot available on request</li>
                      </ul>
                      <div className="flex flex-wrap gap-3">
                        <button className="border border-[#12b76a] text-[#12b76a] py-2 px-5 w-max rounded-3xl text-xs">
                          #Hotdeal
                        </button>
                        <button className="border border-[#12b76a] text-[#12b76a] py-2 px-5 w-max rounded-3xl text-xs">
                          #Popular
                        </button>
                        <button className="border border-[#12b76a] text-[#12b76a] py-2 px-5 w-max rounded-3xl text-xs">
                          #Bestmatch
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-3 col-span-12 flex justify-between lg:flex-col md:flex-row gap-8 items-end">
                    <div className="flex flex-col">
                      <h6 className="font-semibold md:text-2xl text-lg text-[#434343]">
                        Rs : 20000
                      </h6>
                      <div className="flex flex-col md:flex-row items-center md:gap-2 gap-0">
                        <span>5/5</span>
                        <ReactStars
                          count={5}
                          // onChange={ratingChanged}
                          value={4}
                          size={20}
                          activeColor="#F55D42"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>3 nights, 2 guest</p>
                      <Link
                        href={"/Hotels/HotelCart"}
                        className="bg-[#12B76A] py-2 px-3 rounded text-[#fff] w-max"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* timing  */}
        <div className="timing">
          <div className="container">
            <div className="flex flex-col gap-4">
              <div className="title">
                <h1 className="md:text-4xl text-2xl font-semibold">
                  Check in and check out
                </h1>
              </div>
              <div className="time grid grid-cols-2 gap-16">
                <div className="flex items-center md:gap-24 gap-4">
                  <FaRegClock className="md:text-5xl text-3xl text-[#444560] font-bold" />
                  <div className="flex flex-col gap-2">
                    <h4 className="md:text-2xl sm:text-lg xs:text-sm">
                      Check in from:
                    </h4>
                    <p className="md:text-lg sm:text-sm xs:text-xs font-bold">
                      14:00
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="md:text-2xl sm:text-lg xs:text-sm">
                    Check out before:
                  </h4>
                  <p className="md:text-lg sm:text-sm xs:text-xs font-bold">
                    14:00
                  </p>
                </div>
              </div>
              <div className="title">
                <h1 className="md:text-4xl text-2xl font-semibold">
                  Good to know
                </h1>
              </div>
              <div className="bg-[#EFF3F8] p-5 rounded">
                <div className="grid grid-cols-12 gap-2 border-b-2 border-[#C1C7CF] py-3">
                  <div className="md:col-span-5 col-span-12 flex gap-2">
                    <LiaChildSolid className="text-2xl text-[#12B76A]" />
                    <h3 className="md:text-lg text-sm font-semibold">
                      Children
                    </h3>
                  </div>
                  <div className="md:col-span-7 col-span-12">
                    <p className="md:text-sm text-xs">
                      Children are welcome at this hotel.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-2 border-b-2 border-[#C1C7CF] py-3">
                  <div className="md:col-span-5 col-span-12 flex gap-3">
                    <FaBed className="text-2xl text-[#12B76A]" />
                    <h3 className="md:text-lg text-sm font-semibold">
                      Additional beds
                    </h3>
                  </div>
                  <div className="md:col-span-7 col-span-12">
                    <p className="md:text-sm text-xs">
                      Cribs cannot be added. Children 5 years old and over can
                      use extra beds for an additional charge of PKR 2200.0.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-2 border-b-2 border-[#C1C7CF] py-3">
                  <div className="md:col-span-5 col-span-12 flex gap-2">
                    <FaBed className="text-2xl text-[#12B76A]" />
                    <h3 className="md:text-lg text-sm font-semibold">
                      Available beds
                    </h3>
                  </div>
                  <div className="md:col-span-7 col-span-12 flex flex-col gap-5">
                    <div className="grid grid-cols-12 md:gap-12 gap-1">
                      <div className="flex gap-4 md:col-span-3 col-span-12">
                        <span className="text-xs">Free</span>{" "}
                        <strong className="text-sm">
                          From 5 to 5 years old
                        </strong>
                      </div>
                      <div className="md:col-span-9 col-span-12">
                        <p className="md:text-sm text-xs">
                          For each room, 1 child can use existing beds for free.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 md:gap-12 gap-1">
                      <div className="flex gap-4 md:col-span-3 col-span-12">
                        <span className="text-xs">Pay</span>{" "}
                        <strong className="text-sm">
                          From 6 to 17 years old
                        </strong>
                      </div>
                      <div className="md:col-span-9 col-span-12">
                        <p className="md:text-sm text-xs">
                          For each room, 1 child can use existing beds for an
                          additional charge of PKR 1500.0.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-2 border-b-2 border-[#C1C7CF] py-3">
                  <div className="md:col-span-5 col-span-12 flex gap-3">
                    <MdPets className="text-2xl text-[#12B76A]" />
                    <h3 className="md:text-lg text-sm font-semibold">Pets</h3>
                  </div>
                  <div className="md:col-span-7 col-span-12">
                    <p className="md:text-sm text-xs">Pets are not allowed.</p>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-2 border-b-2 border-[#C1C7CF] py-3">
                  <div className="md:col-span-5 col-span-12 flex gap-3">
                    <PiForkKnifeFill className="text-2xl text-[#12B76A]" />
                    <h3 className="md:text-lg text-sm font-semibold">
                      Breakfast
                    </h3>
                  </div>
                  <div className="md:col-span-7 col-span-12 flex flex-col gap-2">
                    <p className="md:text-sm text-xs">
                      Children are welcome at this hotel.
                    </p>
                    <div className="grid grid-cols-12 py-2 border-b-1 text-sm">
                      <div className="md:col-span-3 col-span-12">
                        {" "}
                        <strong>Breakfast menu</strong>
                      </div>
                      <div className="md:col-span-9 col-span-12">
                        <p>Buffet.</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 py-2 border-b-1 text-sm">
                      <div className="md:col-span-3 col-span-12">
                        {" "}
                        <strong>Breakfast options</strong>
                      </div>
                      <div className="md:col-span-9 col-span-12">
                        <p>Continental breakfast.</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 py-2 border-b-1 text-sm">
                      <div className="md:col-span-3 col-span-12">
                        {" "}
                        <strong>Breakfast price</strong>
                      </div>
                      <div className="md:col-span-9 col-span-12">
                        <p>Rs 1,833 /person</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-2 border-b-2 border-[#C1C7CF] py-3">
                  <div className="md:col-span-5 col-span-12 flex gap-3">
                    <PiSealWarningBold className="text-2xl text-[#12B76A]" />
                    <h3 className="md:text-lg text-sm font-semibold">
                      Important information from the hotel
                    </h3>
                  </div>
                  <div className="md:col-span-7 col-span-12">
                    <p className="md:text-sm text-xs">
                      Visitors of the guests are not permitted to stay in or
                      enter the guest rooms.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-2 border-b-2 border-[#C1C7CF] py-3">
                  <div className="md:col-span-5 col-span-12 flex gap-3">
                    <FaRegBuilding className="text-2xl text-[#12B76A]" />
                    <h3 className="md:text-lg text-sm font-semibold">
                      Important information about the city
                    </h3>
                  </div>
                  <div className="md:col-span-7 col-span-12">
                    <p className="md:text-sm text-xs">
                      According to local regulations, foreign guests entering
                      Pakistan are required to report their purpose of visit and
                      itinerary to the local police. Some areas may have
                      temporary control measures or closures. It is necessary to
                      have security guard and bulletproof vehicles for travel.
                      Please contact the hotel in advance to confirm the
                      relevant arrangements.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-2 py-3">
                  <div className="md:col-span-5 col-span-12 flex gap-3">
                    <MdOutlinePayments className="text-2xl text-[#12B76A]" />
                    <h3 className="md:text-lg text-sm font-semibold">
                      Accepted payment methods
                    </h3>
                  </div>
                  <div className="md:col-span-7 col-span-12">
                    <p className="md:text-sm text-xs">
                      The hotel accepts the following payment methods:
                    </p>
                    <div className="card flex flex-wrap gap-2">
                      <ul className="card flex flex-wrap items-center gap-2">
                        {DisplayCard.map((items, index) => (
                          <li key={index}>
                            <img src={items.imx} alt="master" />
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={toggleSeeMore}
                        className="md:text-lg text-xs text-semibold flex items-center gap-1"
                      >
                        {seeMore ? "See Less" : "See More"}{" "}
                        <IoMdArrowDropdown />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* amenities */}
        <div className="amenities  py-5">
          <div className="container">
            <div className="flex flex-col gap-4">
              <div className="title">
                <h1 className="md:text-4xl text-2xl font-semibold">
                  Amenities
                </h1>
              </div>
              <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4">
                {Amenities.map((items, index) => (
                  <div
                    key={index}
                    className="bg-[#EFF3F8] rounded-lg h-40 flex flex-col justify-center gap-2 items-center"
                  >
                    {items.icon}
                    <p className="md:text-sm text-xs">{items.label}</p>
                  </div>
                ))}
                <button
                  onClick={toggleAmenetis}
                  className="md:text-sm text-xs font-extrabold py-2 bg-[#E0E4E9] rounded-lg"
                >
                  {amenities ? "Less All Amenities" : "See All Amenities"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewHotelView;
