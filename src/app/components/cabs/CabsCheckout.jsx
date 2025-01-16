"use client";
import Image from "next/image";
import { Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { RxCross2 } from "react-icons/rx";
import { Slider } from "@nextui-org/react";
import { IoIosArrowForward } from "react-icons/io";
import { Accordion, AccordionItem, button } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa6";
import { color } from "framer-motion";
import Link from "next/link";
import { useDisclosure } from "@nextui-org/react";
import Modals from "../../components/Modal";
import { Button } from "@nextui-org/react";
import { FaUserAlt, FaFan } from "react-icons/fa";
import { BsFillSuitcase2Fill } from "react-icons/bs";
import { TbManualGearboxFilled } from "react-icons/tb";
import { MdAirplanemodeActive } from "react-icons/md";

function maskCreditCardNumber(cardNumber) {
  const cardNumberStr = cardNumber.toString();
  const maskedNumber =
    cardNumberStr.slice(0, -4).replace(/\d/g, "*") + cardNumberStr.slice(-4);
  return maskedNumber.replace(/(.{4})/g, "$1 ");
}
const options = [
  { key: "yes", label: "Yes" },
  { key: "no", label: "No" },
];

const CabsCheckout = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const cards = [
    {
      logoPath: "/images/mastercard.png",
      bank: "Allied Bank",
      cardNo: "4444111111111111",
    },
    {
      logoPath: "/images/visa.png",
      bank: "Mezan Bank",
      cardNo: "4444111111111111",
    },
  ];

  const car = {
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
  };
  return (
    <div>
      <div className="container">
        <div className="py-10">
          <div className="grid grid-cols-1 xl:grid-cols-2   gap-4">
            <div className="flex flex-col gap-5">
              <div className="flex gap-2 items-center">
                <div className="flex gap-1 items-center">
                  <div className="w-4 h-4 border-2 border-green-300  rounded-[10px]">
                    <input
                      type="checkbox"
                      id="checkout"
                      className="hidden peer"
                      checked
                    />

                    <label
                      for="checkout"
                      className="flex items-center justify-center  bg-gray-200  w-full h-full    border-2  rounded rounded-[50%] border   border-white cursor-pointer peer-checked:bg-green-600 peer-checked:border-geen-600  p-1  relative "
                    ></label>
                  </div>

                  <p className="text-sm text-green-300"> cart</p>
                </div>

                <div className="flex gap-1 items-center">
                  <div className="w-4 h-4 border-2 border-green-600  rounded-[10px]">
                    <input type="checkbox" id="phone" className="hidden peer" />

                    <label
                      for="phone"
                      className="flex items-center justify-center  bg-gray-200  w-full h-full    border-2  rounded rounded-[50%] border   border-white cursor-pointer peer-checked:bg-green-600 peer-checked:border-geen-600  p-1  relative "
                    ></label>
                  </div>

                  <p className="text-sm text-green-600"> Checkout</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="font-inter font-semibold text-3xl">
                  Payment Method
                </p>

                <Accordion className="accordian-wrapper  flex flex-col gap-3">
                  <AccordionItem
                    key="1"
                    aria-label="JazzCash/Easypaisa"
                    title={
                      <div className="flex justify-between items-center ">
                        <p className="text-gray-69 text-xl font-regular">
                          JazzCash/Easypaisa
                        </p>
                        {/* <div className="text-gray-69">
                        <IoIosArrowForward />
                      </div> */}
                      </div>
                    }
                    className=""
                  >
                    <div className="flex flex-col gap-2 p-3 border border-2 rounded-[12px]">
                      <p className="text-lg font-regular text-gray-69">
                        JazzCash/EasyPaisa
                      </p>

                      <div className="p-3 border border-2 rounded-[12px]">
                        <div className="grid grid-cols-12 gap-2 items-center">
                          <div className="col-span-12 md:col-span-4 flex gap-2 items-center">
                            <Image
                              width={50}
                              height={30}
                              src="/images/easypeisaicon.png"
                              alt="EasyPaisa"
                            />
                            <p className="text-lg text-gray-69 font-regular">
                              Easy Paisa
                            </p>
                          </div>
                          <div className="col-span-12 md:col-span-5 text-lg text-gray-69 font-regular md:text-center">
                            4444111111111111
                          </div>
                          <div className="col-span-12 md:col-span-3 flex md:justify-end md:items-end">
                            <div className="w-6 h-6 border-2 border-green-600 rounded-full">
                              <input
                                type="checkbox"
                                id="grow1"
                                className="hidden peer"
                              />
                              <label
                                htmlFor="grow1"
                                className="flex items-center justify-center bg-gray-200 w-full h-full border-2 rounded-full cursor-pointer peer-checked:bg-green-600 peer-checked:border-geen-600 p-2"
                              ></label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 border border-2 rounded-[12px]">
                        <div className="grid grid-cols-12 gap-2 items-center">
                          <div className="col-span-12 md:col-span-4 flex gap-2 items-center">
                            <Image
                              width={50}
                              height={30}
                              src="/images/jazzlogo.png"
                              alt="JazzCash"
                            />
                            <p className="text-lg text-gray-69 font-regular">
                              Jazz Cash
                            </p>
                          </div>
                          <div className="col-span-12 md:col-span-5 text-lg text-gray-69 font-regular md:text-center">
                            4444111111111111
                          </div>
                          <div className="col-span-12 md:col-span-3 flex md:justify-end md:items-end">
                            <div className="w-6 h-6 border-2 border-green-600 rounded-full">
                              <input
                                type="checkbox"
                                id="grow2"
                                className="hidden peer"
                              />
                              <label
                                htmlFor="grow2"
                                className="flex items-center justify-center bg-gray-200 w-full h-full border-2 rounded-full cursor-pointer peer-checked:bg-green-600 peer-checked:border-geen-600 p-2"
                              ></label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionItem>

                  <AccordionItem
                    key="2"
                    aria-label="Debit Card"
                    title={
                      <div className="flex justify-between items-center ">
                        <p className="text-gray-69 text-xl font-regular">
                          Debit Card
                        </p>
                        {/* <div className="text-gray-69">
                        <IoIosArrowForward />
                      </div> */}
                      </div>
                    }
                  >
                    <div className="flex flex-col gap-2 p-3 border border-2 rounded-[12px]">
                      <p className="text-lg font-regular text-gray-69">
                        Debit Card
                      </p>
                      {cards.map((e, index) => (
                        <div
                          className="p-3 border border-2 rounded-[12px]"
                          key={index}
                        >
                          <div className="grid grid-cols-12 gap-2 items-center">
                            <div className="col-span-12 md:col-span-4 flex gap-2 items-center">
                              <Image
                                width={50}
                                height={30}
                                src={e.logoPath}
                                alt="Mastercard"
                              />
                              <p className="text-lg text-gray-69 font-regular">
                                {e.bank}
                              </p>
                            </div>
                            <div className="col-span-12 md:col-span-5 text-lg text-gray-69 font-regular md:text-center">
                              {maskCreditCardNumber(e.cardNo)}
                            </div>
                            <div className="col-span-12 md:col-span-3 flex md:justify-end md:items-end">
                              <div className="w-6 h-6 border-2 border-green-600 rounded-full">
                                <input
                                  type="checkbox"
                                  id="grow3"
                                  className="hidden peer"
                                />
                                <label
                                  htmlFor="grow3"
                                  className="flex items-center justify-center bg-gray-200 w-full h-full border-2 rounded-full cursor-pointer peer-checked:bg-green-600 peer-checked:border-geen-600 p-2"
                                ></label>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      <Button
                        onPress={onOpen}
                        className="bg-transparent flex items-center justify-start outline-none"
                      >
                        <div className=" p-2 rounded-full flex justify-center items-center  bg-green-100  text-gray-6">
                          <FaPlus />
                        </div>
                        <p className="text-lg font-regular text-gray-69">
                          Add New Cards
                        </p>
                      </Button>
                      <Modals isOpen={isOpen} onOpenChange={onOpenChange} />
                    </div>
                  </AccordionItem>
                </Accordion>

                <button className="flex gap-2 items-center justify-center p-2 border-2 rounded-[12px]">
                  <div className=" p-2 rounded-full flex justify-center items-center  bg-green-100  text-gray-6">
                    <FaPlus />
                  </div>
                  <p className="text-lg font-regular text-gray-69">
                    Add New Methods
                  </p>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-3 py-10 px-8  bg-blue-0D  rounded-[30px]">
              <div className="p-3 bg-white rounded-[20px]  relative">
                <div className="flex sm:flex-row flex-col w-full justify-between items-center  border border-gray-300 rounded-lg shadow-md mb-4 ">
                  <div className="flex sm:flex-row flex-col-reverse  gap-2 sm:w-[70%] w-full px-2 py-2 sm:border-r border-r-0 border-b sm:border-b-0  border-gray-300">
                    <div className="sm:w-1/2 w-full ">
                      <h2 className="text-xl font-bold text-green-600">
                        {car.name}
                      </h2>
                      <p className="text-green-600 text-sm mt-2 font-normal ">{`or similar • ${car.doors} • ${car.type}`}</p>

                      <div className="flex">
                        <div className="grid grid-cols-3 mt-2 gap-2 text-sm">
                          <span className="flex gap-1 p-1 justify-center items-center bg-[#EFF3F8] rounded">
                            <FaUserAlt className="w-3 h-3" />
                            {car.seats}
                          </span>
                          <span className="flex gap-1 p-1 justify-center items-center bg-[#EFF3F8] rounded">
                            <BsFillSuitcase2Fill className="w-3 h-3" />
                            {car.luggage}
                          </span>
                          <span className="flex gap-1 p-1 justify-center items-center bg-[#EFF3F8] rounded">
                            <FaFan className="w-3 h-3" />
                            {car.ac ? "AC" : "No AC"}
                          </span>
                          <span className="flex gap-1 p-1 min-w-[130px] justify-center items-center bg-[#EFF3F8] rounded">
                            <TbManualGearboxFilled className="w-3 h-3" />
                            {car.transmission}
                          </span>
                        </div>
                      </div>

                      <p className="text-green-600 mt-4 flex gap-2 items-center">
                        <Image
                          src={"/images/shuttle.png"}
                          width={16}
                          height={16}
                          objectFit="cover"
                          className="w-4 h-4"
                        />
                        <span>Pick-up: {car.pickup}</span>
                      </p>
                    </div>
                    <div className="sm:w-1/2 w-full flex justify-center items-center">
                      <Image src={car.image} width={130} height={75} />
                    </div>
                  </div>

                  <div className="sm:w-[30%] w-full  flex flex-col px-2 py-2 justify-between items-start">
                    <p className="text-green-600 font-medium text-base mb-4">
                      4 deals form
                    </p>
                    <p className="text-green-600 font-semibold">
                      <span className="text-xl font-bold">RS{car.price}</span>{" "}
                      total
                    </p>
                    <p className="text-gray-500 mt-2 text-sm font-normal font-roboto flex gap-2 items-center">
                      <span>
                        <Image
                          src={"/images/cancellationsvg.png"}
                          width={12}
                          height={12}
                        />
                      </span>
                      Free cancellation
                    </p>
                    <button className="mt-4 px-2 py-2 bg-green-600 text-white rounded-lg w-full font-poppins cursor-pointer text-sm flex justify-center items-center">
                      View deals
                    </button>
                  </div>
                </div>

                <div className="absolute top-[-20px] right-[-10px]">
                  <div className="p-3 rounded-full flex justify-center items-center bg-green-600 w-max">
                    <RxCross2 color="white" />
                  </div>
                </div>
              </div>

              <div className="p-3 flex justify-between items-center  rounded-[20px]  bg-white">
                <p className="text-xl text-gray-69">Promo</p>
                <p className="text-xl text-green-600 font-regular relative after:content-[''] after:block after:w-full after:border-b-2 after:border-green-600 after:border-dashed after:mt-2">
                  Add Code
                </p>
              </div>

              <div className="p-3 bg-white rounded-[20px] ">
                <div className="flex flex-col  ">
                  <p className="text-2xl font-inter text-gray-69">
                    Payment Details
                  </p>

                  <div>
                    <hr class="h-px my-4 bg-gray-EB border-0 " />

                    <div className="flex flex-col gap-3 ">
                      <div className="flex justify-between items-center ">
                        <p className="text-xl text-gray-69 font-regular ">
                          Order
                        </p>
                        <p className="text-xl text-gray-69 font-regular ">
                          PKR 6500
                        </p>
                      </div>
                      <div className="flex justify-between items-center ">
                        <p className="text-xl text-gray-69 font-regular ">
                          Tax
                        </p>
                        <p className="text-xl text-gray-69 font-regular ">5%</p>
                      </div>
                    </div>
                    <hr class="h-px my-4 bg-gray-EB border-0 " />

                    <div className="flex justify-between items-center ">
                      <p className="text-xl text-gray-69 font-semibold ">
                        Total
                      </p>
                      <p className="text-xl text-gray-69 font-semibold ">
                        PKR 6825
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-white rounded-[20px] ">
                <div className="flex flex-col sm:flex-row  justify-between gap-2 sm:items-center">
                  <p className="text-xl text-gray-69  ">Notes</p>
                  <Select
                    label="Notified Via Email"
                    className="max-w-xs  bg-none"
                    variant="bordered"
                  >
                    {options.map((item) => (
                      <SelectItem key={item.key}>{item.label}</SelectItem>
                    ))}
                  </Select>
                </div>
              </div>

              <Link href={"/"}>
                <button className="p-3 rounded-[10px] flex justify-center items-center w-full bg-green-600">
                  <p className="text-sm font-medium text-white "> Pay Now</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabsCheckout;
