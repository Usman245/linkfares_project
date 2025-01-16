import React from "react";
import BusesFilter from "./BusesFilter";
import BusesTickets from "./BusesTickets";

const BusesDisplayPage = () => {
  return (
    <div className="container">
      <div className="py-[80px]">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-3">
            <BusesFilter />
          </div>
          <div className="col-span-12   lg:col-span-9">
            <BusesTickets />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusesDisplayPage;
