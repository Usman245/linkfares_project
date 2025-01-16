import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoIosAirplane } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import Link from "next/link";
import BusesHomeBanner from "@/app/components/BusesHomeBanner";
import BusTicketView from "@/app/components/BusTicketView";

const page = () => {
  return (
    <div>
      <BusesHomeBanner />
      <BusTicketView />
    </div>
  );
};

export default page;
