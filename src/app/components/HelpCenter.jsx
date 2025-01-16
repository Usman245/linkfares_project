import React from "react";
import { Avatar } from "@nextui-org/react";

const helpsData = [
  {
    ctitle: "Download LinkFares App",
    csubtitle: "Find the best deals on our mobile app",
    cicon: "/images/DownloadApp.png",
  },
  {
    ctitle: "Help Center",
    csubtitle: "Connect with our support team",
    cicon: "/images/headphone.png",
  },

  {
    ctitle: "Manage Bookings",
    csubtitle: "View and manage your bookings",
    cicon: "/images/managebooking.png",
  },
];

const HelpCenter = () => {
  return (
    <div className="">
      <div className="container">
        <div className="py-6  grid  grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-3">
          {helpsData.map((items, index) => (
            <div
              className="flex items-center  p-3 border border-light-C rounded-lg drop-shadow-xl gap-3"
              key={index}
            >
              <div className="">
                <Avatar
                  src={`${items.cicon}`}
                  className="w-20 h-20 text-large"
                />
              </div>
              <div className="flex flex flex-col  gap-2">
                <p className="text text-xl font-medium  text-black-16">
                  {items.ctitle}
                </p>
                <p className="text-sm font-regular text-blue-54 ">
                  {items.csubtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
