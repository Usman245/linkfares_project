"use client";
import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { TbCheckbox } from "react-icons/tb";
import { Slider } from "@nextui-org/react";

const stopData = [
  {
    id: 1,
    ctitle: "Direct",
    csuubtitle: "from 14,183 kč",
  },
  {
    id: 2,
    ctitle: "1 Stop",
    csuubtitle: "from 14,183 kč",
  },
  {
    id: 3,
    ctitle: "Direct",
    csuubtitle: "from 14,183 kč",
  },
];

const BusesFilter = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [timeRange, setTimeRange] = useState([0, 12]);
  const [hoursRange, setHoursRange] = useState([0, 46]);

  const formatTime = (value) => {
    const hours = value % 24; // Convert value to 24-hour format
    const isAM = hours < 12;
    const displayHours = hours % 12 || 12; // Convert to 12-hour format (show 12 instead of 0)
    const period = isAM ? "AM" : "PM";

    return `${displayHours}:00 ${period}`;
  };

  const formatHours = (hours) => `${hours} hours`;

  const handleSliderChange = (value) => {
    setHoursRange(value); // Update both start and end hours
  };

  const handleCheckboxChange = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the checked state based on the id
    }));
  };
  return (
    <div>
      <div className="flex flex-col gap-[15px] ">
        <div className="flex flex-col gap-[17px] ">
          <div className="flex  flex-col   gap-2 lg:gap-[15px]">
            <p className="font-poppins  text-lg text-gray-4B  font-medium">
              Stops
            </p>
            <div className="flex lg:flex-col gap-2">
              {stopData.map((item, index) => (
                <div className="flex items-center gap-2" key={index}>
                  <div>
                    <input
                      type="checkbox"
                      id={`checkbox-${item.id}`}
                      className="hidden peer"
                      checked={checkedItems[item.id] || false} // Use the id to track state
                      onChange={() => handleCheckboxChange(item.id)} // Handle change
                    />

                    <label
                      htmlFor={`checkbox-${item.id}`}
                      className="cursor-pointer peer-checked:text-green-600 p-2 relative"
                    >
                      <TbCheckbox size={24} />
                    </label>
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className="text-lg font-regular font-roboto">
                      {item.ctitle}
                    </p>
                    <p className="text-sm font-regular font-roboto">
                      {item.csuubtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="my-[24px] h-0.5 border-t-0 bg-gray-D9 " />

        <div className="flex flex-col gap-[16px] ">
          <p className="font-poppins  text-[20px] text-gray-4B  font-medium">
            Departure times
          </p>

          <div className="flex flex-col gap-[32px]">
            <div className="flex flex-col  gap-[12px]">
              <p className="text-[16px] font-medium font-roboto text-gray-4B">
                Return
              </p>

              <Slider
                label={` ${formatTime(timeRange[0])} - ${formatTime(
                  timeRange[1]
                )}`}
                step={1} // Step by 1 hour
                minValue={0} // Start at 12:00 AM (0 hours)
                maxValue={23} // End at 11:00 PM (23 hours)
                defaultValue={[0, 12]} // Default range from 12:00 AM to 12:00 PM
                onChange={setTimeRange} // Update time range as the slider moves
                className="max-w-md"
                color="#12B76A"
                classNames={{
                  filler: "bg-green-600",
                  thumb: "bg-green-600",
                  label: "text-lg",
                  defaultValue: "text-lg text-gray-4B font-roboto font-bold",
                  value: "text-lg text-gray-4B font-roboto font-bold",
                }}
                range
              />
            </div>
          </div>
          <div className="flex flex-col  gap-[12px]">
            <p className="text-[16px] font-medium font-roboto text-gray-4B">
              Outbound
            </p>

            <Slider
              label={` ${formatTime(timeRange[0])} - ${formatTime(
                timeRange[1]
              )}`}
              step={1} // Step by 1 hour
              minValue={0} // Start at 12:00 AM (0 hours)
              maxValue={23} // End at 11:00 PM (23 hours)
              defaultValue={[0, 12]} // Default range from 12:00 AM to 12:00 PM
              onChange={setTimeRange} // Update time range as the slider moves
              className="max-w-md"
              color="#12B76A"
              classNames={{
                filler: "bg-green-600",
                thumb: "bg-green-600",
                label: "text-lg",
                defaultValue: "text-lg text-gray-4B font-roboto font-bold",
                value: "text-lg text-gray-4B font-roboto font-bold",
              }}
              range // Enable range selection
            />
          </div>
        </div>

        <hr className="my-[24px] h-0.5 border-t-0 bg-gray-D9 " />

        <div className="flex flex-col gap-[16px] ">
          <p className="font-poppins  text-[20px] text-gray-4B  font-medium">
            Trip Duration
          </p>

          <div className="flex flex-col gap-[32px]"></div>
          <div className="flex flex-col  ">
            <Slider
              label={`${formatHours(hoursRange[0])} - ${formatHours(
                hoursRange[1]
              )}`}
              step={1} // Step by 1 hour
              minValue={0} // Minimum value is 7 hours
              maxValue={46} // Maximum value is 46 hours
              defaultValue={[hoursRange[0], hoursRange[1]]} // Default range: 7 hours to 46 hours
              onChange={handleSliderChange} // Update the hoursRange dynamically
              className="max-w-md"
              color="#12B76A"
              classNames={{
                filler: "bg-green-600",
                thumb: "bg-green-600",
                label: "text-lg",
                defaultValue: "text-lg text-gray-4B font-roboto font-bold",
                value: "text-lg text-gray-4B font-roboto font-bold",
                width: "w-full box-shadow-none",
              }}
              range // Enable range selection
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusesFilter;
