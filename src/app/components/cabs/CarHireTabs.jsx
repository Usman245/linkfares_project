'use client'
import React from 'react';
import Link from "next/link";
import { FaCarSide, FaCaretRight } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa6";
import { Tabs, Tab } from '@nextui-org/tabs';
import { AiFillTag } from 'react-icons/ai';

const CarHireTabs = () => {
    const variants = ["underlined"];

    const navItems = [
      "Car hire deals from Rs3,982",
      "London map",
      "Top London providers",
      "How to get the best deal",
      "FAQs",
    ];

    return (
        <div className="container">
            <div className="flex gap-2 items-center font-roboto my-8">
                <Link href="#" className="text-green-600">
                    Home
                </Link>
                <span>
                    <FaCaretRight color="gray" />
                </span>
                <Link href="#" className="text-green-600">
                    Car hire
                </Link>
                <span>
                    <FaCaretRight color="gray" />
                </span>
                <Link href="#" className="text-green-600">
                    United Kingdom
                </Link>
                <span>
                    <FaCaretRight color="gray" />
                </span>
                <Link href="#" className="text-gray-800">
                    London
                </Link>
            </div>

            <div className="my-4 flex md:flex-row flex-col gap-4 list-none justify-between font-roboto">
                <li className="flex gap-2 items-start">
                    <FaCarSide size={25} className="w-6 h-6" />
                    <span className="text-base font-semibold">
                        Search for cheap car rental in seconds anywhere in the world
                    </span>
                </li>
                <li className="flex gap-2 items-start">
                    <FaCalculator size={25} className="w-6 h-6" />
                    <span className="text-base font-semibold">
                        Compare deals from trusted car hire providers in one place
                    </span>
                </li>
                <li className="flex gap-2 items-start">
                    <AiFillTag size={25} />
                    <span className="text-base font-semibold">
                        Rent a car with a flexible booking policy or free cancellation
                    </span>
                </li>
            </div>

            <div
                className="md:mt-24 mt-8 bg-white overflow-hidden"
                style={{ boxShadow: "0px 1.33px 4px 0px rgba(0, 0, 0, 0.25)" }}
            >
                <Tabs
                    variant="underlined"
                    color="primary"
                    aria-label="Tabs for car hire options"
                    className="overflow-x-auto flex"
                    style={{
                        overflowY: "scroll",
                        msOverflowStyle: "none",
                        scrollbarWidth: "none",
                    }}
                >
                    {navItems.map((item, index) => (
                        <Tab
                            key={index}
                            title={item}
                            className="text-base cursor-pointer py-5 px-6"
                        />
                    ))}
                </Tabs>
            </div>
        </div>
    );
};

export default CarHireTabs;
