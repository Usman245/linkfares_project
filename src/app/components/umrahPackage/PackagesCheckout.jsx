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
import Modals from "../Modal";
import { Button } from "@nextui-org/react";

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

const CheckoutCard = () => {
  const {isOpen, onOpen, onOpenChange } = useDisclosure();
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


  return (
    <div className="container">
      <div className="py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2   gap-4">
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
                    {cards.map((e,index)=>(
                      <div className="p-3 border border-2 rounded-[12px]" key={index}>
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

                    <Button onPress={onOpen} className="bg-transparent flex items-center justify-start outline-none"
                    >
                      <div className=" p-2 rounded-full flex justify-center items-center  bg-green-100  text-gray-6">
                        <FaPlus />
                      </div>
                      <p className="text-lg font-regular text-gray-69">
                        Add New Cards
                      </p>
                    </Button>
                    <Modals isOpen={isOpen} onOpenChange={onOpenChange}/>
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
              <div className="flex flex-col gap-5">
                <div className="flex flex-col  sm:flex-row  items-center gap-[30px]">
                  <div>
                    {" "}
                    <img
                      // height={30}
                      src={"/images/ummrahBannerBg.png"}
                      alt=""
                      className=" w-40 h-32"
                    />
                  </div>

                  <div className="flex justify-center sm:justify-start flex-col gap-3">
                    <div className="flex flex-col gap-2">
                      <p className="text-xl text-gray-4B font-semibold">
                        Umrah 21 Days Packages
                      </p>
                      <p className="text-lg font-medium text-gray-2B"></p>
                    </div>

                    <p className="text-3xl font-semibold  text-green-600">
                      PKR 195,000
                    </p>
                  </div>
                </div>

                <div className="flex  flex-col  sm:flex-row  items-center gap-2">
                  <p className="text-lg  ">5/5</p>
                  <div className=" ">
                    {/* <Rating initialValue={item.rrating} readonly /> */}
                    <ReactStars
                      count={5}
                      // onChange={ratingChange}
                      value={5}
                      size={30}
                      activeColor="#FFA033"
                    />
                  </div>

                  <div className="w-[50%]">
                    <Slider
                      aria-label="Player progress "
                      color="foreground"
                      size="sm"
                      hideThumb={true}
                      isDisabled={true}
                      defaultValue={20}
                      className="max-w-sm border-s-foreground-none"
                      classNames={{
                        filler: "bg-green-600",
                      }}
                    />
                  </div>
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
                        PKR 195,000
                      </p>
                    </div>
                    <div className="flex justify-between items-center ">
                      <p className="text-xl text-gray-69 font-regular ">Tax</p>
                      <p className="text-xl text-gray-69 font-regular ">0</p>
                    </div>
                  </div>
                  <hr class="h-px my-4 bg-gray-EB border-0 " />

                  <div className="flex justify-between items-center ">
                    <p className="text-xl text-gray-69 font-semibold ">Total</p>
                    <p className="text-xl text-gray-69 font-semibold ">
                      PKR 195,000
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
  );
};

export default CheckoutCard;
