import Link from 'next/link';
import React from 'react';

const SideButtons = () => {
  return (
    <div className="w-full mt-5 font-poppins">
      <button className="font-bold text-base text-black rounded cursor-pointer border border-[#DCDCDC] w-full py-2 transition-transform duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg">
        PKR 195000
      </button>
      <Link href="/Packages/Checkout" className="bg-green-600 text-lg text-white rounded mt-4 cursor-pointer w-full flex py-2 justify-center transition-transform duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg">
        Book Now
      </Link>
      <button className="mt-4 rounded text-lg font-normal w-full bg-gradient-to-t from-[#DCDCDC] to-[#F0F0F0] py-2 transition-transform duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg">
        View all Umrah
      </button>
    </div>
  );
};

export default SideButtons;
