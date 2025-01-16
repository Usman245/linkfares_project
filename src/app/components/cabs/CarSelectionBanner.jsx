import React from 'react'
import { FaSearch } from 'react-icons/fa'

const CarSelectionBanner = () => {
  return (
    <div className='bg-green-600 py-8'>
<div className="container">
    <div className="flex gap-4 font-poppins">
        <button className='w-[48px] h-[40px] rounded-lg bg-[#00AA6C] flex justify-center items-center'>
            <FaSearch className='w-5 h-5 text-white'/>
        </button>
        <div className=" text-white">
            <h1 className="font-poppins text-base ">London</h1>
            <span>04/10/2024, 10:00 - 05/10/2024, 10:00</span>
        </div>
    </div>
</div>
    </div>
  )
}

export default CarSelectionBanner