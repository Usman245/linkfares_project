"use client";
import React, { useState, useEffect, useRef } from "react";
import HotelsFilterDrawer from "./HotelsFilterDrawer";
import HotelsListPage from "./HotelsListPage";
import DicoverMorePage from "./DicoverMorePage";

const HotelsDisplayPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const drawerRef = useRef(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="grid-cols-12 grid relative p-2">
      <div className="hidden lg:col-span-3 lg:block">
        <HotelsFilterDrawer />
      </div>
      <div className="col-span-12 lg:col-span-9">
        <div className="flex flex-col gap-3">
          <button
            className="p-2 rounded-lg text-white bg-green-600 w-max block lg:hidden"
            onClick={toggleDrawer}
          >
            Show Filter
          </button>
          <HotelsListPage />
          <DicoverMorePage />
        </div>
      </div>

      <div
        ref={drawerRef}
        className={`fixed top-0 left-0 z-40 h-screen p-6 overflow-y-auto transition-transform transform lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }  w-[80%]  md:w-[390px] h-[100vh] bg-white`}
      >
        <HotelsFilterDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default HotelsDisplayPage;
