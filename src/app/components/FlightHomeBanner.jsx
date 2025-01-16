import React from "react";

const FlightHomeBanner = () => {
  return (
    <div className="pb-[60px]">
      <div className="bg-[url('/images/flighlandscape.png')] bg-no-repeat bg-cover    bg-blend-color-black">
         <div className="py-[101px] pb-[48px]">
          <div className="flex justify-center ">
            <p className="text-32px font-poppins font-semibold text-white   ">
              Find <span className="text-green-600">Flights</span>
            </p>
          </div>

          <div className="py-[16px]   bg-green-600 flex justify-center    ">
            <p className="text-base font-medium font-poppins text-white ">
              {" "}
              Searching Results: Pakistan to Dubai
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightHomeBanner;
