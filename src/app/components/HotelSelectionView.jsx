"use client";

import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { DatePicker } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

export const locations = [
  { key: "dubai", label: "Dubai" },
  { key: "jeddah", label: "Jeddah" },
  { key: "riyadh", label: "Riyadh" },
  { key: "makkah", label: "Makkah" },
  { key: "madinah", label: "Madinah" },
  { key: "doha", label: "Doha" },
  { key: "kuwait", label: "Kuwait" },
  { key: "muscat", label: "Muscat" },
  { key: "amman", label: "Amman" },
  { key: "cairo", label: "Cairo" },
  { key: "beirut", label: "Beirut" },
  { key: "manama", label: "Manama" },
  { key: "baghdad", label: "Baghdad" },
];

const HotelSelectionView = () => {
  return (
    <div className="py-5 bg-green-600">
      <div className="container ">
        <div className="grid grid-cols-12">
          {/* input */}
          <div className="grid grid-cols-10 col-span-12 lg:col-span-10 md:col-span-12">
            <div className="col-span-12 md:col-span-4 xl:mt-0 mt-4 border-r">
              <Select
                label="Favorite Animal"
                placeholder="Select an animal"
                className="w-full" // Set width to full
                variant="flat"
                radius="none" // Use the 'flat' variant to remove the border style
                css={{
                  // backgroundColor: "#fff", // Set background to transparent
                  border: "none", // Remove the border
                  boxShadow: "none", // Remove any shadow if applied
                }}
                classNames={{
                  label: "text-green-600 ", // Set label color to green-600
                  base: "bg-white border-none",
                  value:
                    " group-data-[has-value=true]:text-lg  group-data-[has-value=true]:text-green-600  group-data-[has-value=true]:font-bold ",
                  trigger: "bg-transparent", // Ensure base styles have no background or border
                }}
              >
                {locations.map((item) => (
                  <SelectItem
                    key={item.key}
                    classNames={{
                      label: "text-green-600 ", // Set label color to green-600
                      base: "bg-white border-none",
                      value:
                        " group-data-[has-value=true]:text-lg  group-data-[has-value=true]:text-green-600  group-data-[has-value=true]:font-bold ",
                      trigger: "bg-transparent", // Ensure base styles have no background or border
                    }}
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div className="col-span-12 md:col-span-2 xl:mt-0 mt-4 border-r">
              <DatePicker
                label="Birth date"
                className="w-full"
                radius="none"
                dateInputClassNames={{
                  segment: " text-green-600  font-bold",
                  innerWrapper: "text-green-600",
                  inputWrapper: "bg-white",
                  inputfield: "text-green-600 ",
                  value:
                    "group-data-[has-value=true]:text-lg  group-data-[has-value=true]:text-green-600  group-data-[has-value=true]:font-bold",
                }}
              />
            </div>
            <div className="col-span-12 md:col-span-2 xl:mt-0 mt-4 border-r">
              <DatePicker
                label="Birth date"
                className="w-full"
                radius="none"
                dateInputClassNames={{
                  segment: " text-green-600  font-bold",
                  base: "bg-white border-none",
                  innerWrapper: "text-green-600",
                  inputWrapper: "bg-white",
                  inputfield: "text-green-600 ",
                  value:
                    "group-data-[has-value=true]:text-lg  group-data-[has-value=true]:text-green-600  group-data-[has-value=true]:font-bold",
                }}
              />
            </div>
            <div className="col-span-12 md:col-span-2 xl:mt-0 mt-4">
              <Input
                type="text "
                label="Email"
                radius="none"
                placeholder="Enter your email"
                classNames={{
                  label: "text-green-600", // Set label color to green-600
                  base: "border-none",
                  inputWrapper: "bg-white",
                  input:
                    " group-data-[has-value=true]:text-lg  group-data-[has-value=true]:text-green-600  group-data-[has-value=true]:font-bold ",
                  trigger: "bg-white", // Ensure base styles have no background or border
                }}
              />
            </div>
          </div>
          {/* buttonn */}

          <div className="col-span-12 lg:col-span-2 md:col-span-12 mt-4 xl:mt-0 text-white font-semibold">
            <a
              className="flex justify-evenly items-center buttonss bg-[#429C7D] p-[16px] w-full rounded-tl-none rounded-bl-none rounded"
              href="#"
            >
              Search Hotels <GoArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSelectionView;
