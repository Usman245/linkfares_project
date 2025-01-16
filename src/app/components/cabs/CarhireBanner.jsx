import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";

const CarhireBanner = () => {
  return (
    <div className='relative flex justify-center items-center py-28 bg-cover bg-center bg-no-repeat bg-[url("/images/cabsbg.png")]'>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tl from-black to-transparent opacity-60"></div>

      <div className="container text-center relative z-10">
        <h1 className="text-4xl font-medium font-poppins text-white my-4">
        Car hire in London, United Kingdom
        </h1>
        <div className="my-2 bg-green-600 text-white py-6 px-6 rounded-md">
          <form
            action=""
            className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-center list-none justify-center font-roboto"
          >
            <li className="lg:w-1/2 w-full flex flex-col text-left">
              <label htmlFor="">Pickup location</label>
              <input
                type="text"
                placeholder="City airport station"
                className="px-2 py-2 h-12 text-black border-r border-r-gray-400 rounded-l-[4px] placeholder:text-black outline-none"
              />
            </li>
            <div className="lg:w-1/2 w-full sm:flex sm:gap-0  grid grid-cols-2 justify-center items-center">
              <li className="sm:w-[27%] w-full flex flex-col text-left">
                <label htmlFor="">PickUp date</label>
                <input
                  type="text"
                  placeholder="06/10/2024"
                  className="py-2 px-2 h-12 text-black placeholder:text-black outline-none border-r border-r-gray-400"
                />
              </li>
              <li className="sm:-[23%] w-full flex flex-col text-left">
                <label htmlFor="">Time</label>
                <select className="py-2 px-2 h-12 text-black outline-none border-r border-r-gray-400">
                  <option value="" disabled selected>
                    10am
                  </option>
                  <option value="10am">10am</option>
                  <option value="5pm">5pm</option>
                  <option value="3pm">3pm</option>
                  <option value="12pm">12pm</option>
                </select>
              </li>

              <li className="sm:w-[27%] w-full sm:mt-0 mt-4 flex flex-col text-left">
                <label htmlFor="">Dropoff Date</label>
                <input
                  type="text"
                  placeholder="28/12/2024"
                  className="py-2 px-2 h-12 text-black placeholder:text-black outline-none border-r border-r-gray-400"
                />
              </li>
              <li className="sm:w-[23%] w-full sm:mt-0 mt-4 flex flex-col text-left">
                <label htmlFor="">Time</label>
                <select className="py-2 px-2 h-12 text-black outline-none rounded-r-[4px]">
                  <option value="" disabled selected>
                    10am
                  </option>
                  <option value="10am">10am</option>
                  <option value="5pm">5pm</option>
                  <option value="3pm">3pm</option>
                  <option value="12pm">12pm</option>
                </select>
              </li>
            </div>
          </form>
          <div className="flex justify-between sm:flex-row flex-col items-center mt-2 mb-3 font-roboto">
            <div className="flex flex-col items-start list-none">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-6 h-6 rounded outline-none border-none checked:text-green-600 checked:border-none checked:ring-0"
                />
                <span className="text-base">Accept Terms</span>
              </label>
              <label className="flex items-center space-x-2 mt-1">
                <input
                  type="checkbox"
                  className="w-6 h-6 rounded outline-none border-none checked:text-green-600 checked:border-none checked:ring-0"
                />
                <span className="text-base">Driver aged between 25-50</span>
                <IoMdInformationCircle color="white" className="rounded-full w-6 h-6 text-black" />
              </label>
            </div>
            <div className="flex items-end top-3 relative">
              <button className="flex items-center justify-center py-2 px-4 gap-2 bg-green-500 rounded text-white text-lg font-normal cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
                Search
                <FaArrowRight color="white" size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarhireBanner;
