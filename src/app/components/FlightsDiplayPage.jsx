import React from "react";
import FlightFilter from "./FlightFilter";
import FlightsTickets from "./FlightsTickets";

const FlightsDiplayPage = () => {
  return (
    <div className="container">
      <div className="py-[80px]">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-3">
            <FlightFilter />
          </div>
          <div className="col-span-12   lg:col-span-9">
            <FlightsTickets />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightsDiplayPage;
