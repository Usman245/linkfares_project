"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import { FaBars } from "react-icons/fa";
// import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <nav className="bg-white border-gray-200  py-3  dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center container">
          <a href="/" className="flex items-center">
            <Image src="/images/Logo.png" width={148} height={48} />
          </a>
          <div className="flex items-center gap-5  lg:order-2 ">
            <div className="  p-[10px]  gap-[8px]  hidden sm:flex">
              <Link
                href="#"
                className={` text-black-2f  font-bold text-sm  font-roboto    `}
              >
                <Image src="/images/webfont.png" width={20} height={20} />
              </Link>

              <div className="inline-block h-full min-h-[1em] w-[1px] self-stretch bg-gray-e0 "></div>

              <Link
                href="#"
                className="text-black-2f  font-bold text-sm  font-roboto"
              >
                PKR
              </Link>
            </div>

            <Link href="/AuthPages/Login" className="">
              <button
                type="button"
                className="text-white bg-green-500 hover:bg-green-800 focus:outline-none   font-bold font-roboto rounded-full text-sm px-[16px] py-[10px] text-center  "
              >
                Sign in
              </button>
            </Link>
            {/* <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={toggleDrawer}
            >
              <span className="sr-only">Open main menu</span>
              <FaBars />
            </button> */}
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            {/* <ul className="flex flex-col  font-medium lg:flex-row lg:space-x-[47px] lg:mt-0">
              <li>
                <Link
                  href="#"
                  className="font-roboto  text-black-2f font-bold     "
                  aria-current="page"
                >
                  Our Sevices
                </Link>
              </li>
              <li>
                <Link
                  href="/Flights"
                  className="text-black-2f  font-bold text-sm  font-roboto"
                >
                  Flights
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black-2f  font-bold text-sm  font-roboto"
                >
                  Blog
                </Link>
              </li>
            </ul> */}
          </div>
        </div>

        <div>
          {/* Overlay */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-30"
              onClick={toggleDrawer}
            ></div>
          )}

          {/* Drawer */}
          <div
            id="drawer-navigation"
            className={`fixed top-0 left-0 z-40 h-screen p-6 overflow-y-auto transition-transform transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } bg-white w-64`}
            tabIndex="-1"
            aria-labelledby="drawer-navigation-label"
          >
            <div className="flex justify-between items-center">
              <Link href="https://flowbite.com" className="flex items-center">
                <Image src="/images/Logo.png" width={120} height={48} />
              </Link>

              {/* <button
                type="button"
                onClick={toggleDrawer}
                aria-controls="drawer-navigation"
              >
                <RxCross2 height={40} width={400} />
              </button> */}
            </div>

            {/* <div className="py-4 overflow-y-auto">
              <ul className="space-y-2 font-medium">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span className="ms-3  font-roboto  text-black-2f font-bold">
                      Services
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/Flights"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span className="ms-3  font-roboto  text-black-2f font-bold">
                      Flights
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span className="ms-3 font-roboto  text-black-2f font-bold">
                      Blog
                    </span>
                  </a>
                </li>
                <li>
                  <div className=" ms-3 flex  items-cente  gap-[8px]  flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <Link
                      href="#"
                      className={` text-black-2f  font-bold text-sm  font-roboto    `}
                    >
                      <Image src="/images/webfont.png" width={20} height={20} />
                    </Link>

                    <div className="inline-block h-full min-h-[1em] w-[1px] self-stretch bg-gray-e0 "></div>

                    <Link
                      href="#"
                      className="text-black-2f  font-bold text-sm  font-roboto"
                    >
                      USD
                    </Link>
                  </div>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
