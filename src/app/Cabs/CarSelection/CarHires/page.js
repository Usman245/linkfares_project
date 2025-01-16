'use client'
import React from 'react'
import { FaAngleRight, FaCaretRight } from 'react-icons/fa6'
import Link from 'next/link'
import { FaUserAlt, FaFan } from 'react-icons/fa'
import {
  BsFillSuitcase2Fill
} from 'react-icons/bs'
import { TbManualGearboxFilled } from 'react-icons/tb'
import { MdAirplanemodeActive } from 'react-icons/md'
import Image from 'next/image'
import Newsletter from '@/app/components/Newsletter'
const page = () => {
  const car = {
    id: 3,
    name: "Ford Focus",
    type: "Compact",
    doors: "4-5 doors",
    seats: 5,
    luggage: 2,
    ac: true,
    transmission: "Manual",
    pickup: "On-site (LGW)",
    price: 6500,
    image: "/images/economy.png.png",
  }
  return (
    <div>
      <div className={`banner flex flex-col pt-16 pb-12  bg-[url('/images/carhiresbg.png')] bg-cover justify-center items-center`}>
        <h1 className='text-white text-[32px] font-poppins font-semibold'>Car <span className='text-green-600'>Hires</span></h1>
        <div className='font-poppins mt-4 text-white text-[16px] text-center w-full py-6 bg-green-600 font-medium'>
          Searching Results: {car.name}
        </div>
      </div>
      <div className='container'>
        <div className='flex lg:px-8 md:px-4  items-center '>
          <div className="my-8 flex justify-start items-center gap-1 text-green-600 font-poppins text-base font-medium">
            <span>Car hire</span>
            <div className='flex '>
              <FaAngleRight className='w-4 h-4' />
              <FaAngleRight className='w-4 h-4' />
            </div>
            <span className=''>{car.name}</span>
            <div className='flex '>
              <FaAngleRight className='w-4 h-4' />
              <FaAngleRight className='w-4 h-4' />
            </div>
            <span className='text-gray-500'>Checkout</span>
          </div>
        </div>
        <div className='flex lg:px-16 md:px-4 items-center mb-80'>
          <div
            className="flex w-full md:flex-row flex-col justify-between items-center  border border-gray-300 rounded-lg shadow-md mb-4 "
          >
            <div className="flex md:flex-row flex-col-reverse gap-2 md:w-[70%] w-full px-4 py-6 md:border-r border-b md:border-b-0 border-gray-300">
              <div className="md:w-1/2 w-full">
                <h2 className="text-2xl font-bold text-green-600">
                  {car.name}
                </h2>
                <p className="text-green-600 text-sm mt-2 font-normal ">{`or similar • ${car.doors} • ${car.type}`}</p>

                <div className="flex">
                  <div className="grid grid-cols-3 mt-2 gap-4">
                    <span className="flex gap-2 p-2 justify-center items-center bg-[#EFF3F8] rounded">
                      <FaUserAlt className="w-4 h-4" />
                      {car.seats}
                    </span>
                    <span className="flex gap-2 p-2 justify-center items-center bg-[#EFF3F8] rounded">
                      <BsFillSuitcase2Fill className="w-4 h-4" />
                      {car.luggage}
                    </span>
                    <span className="flex gap-2 p-2 justify-center items-center bg-[#EFF3F8] rounded">
                      <FaFan className="w-4 h-4" />
                      {car.ac ? "AC" : "No AC"}
                    </span>
                    <span className="flex gap-2 p-2 min-w-[130px] justify-center items-center bg-[#EFF3F8] rounded">
                      <TbManualGearboxFilled className="w-4 h-4" />
                      {car.transmission}
                    </span>
                  </div>
                </div>

                <p className="text-green-600 mt-8 flex gap-2">
                  <span className="bg-black rotate-[37deg] rounded w-5 h-5 items-center justify-center flex">
                    <MdAirplanemodeActive className="text-white rotate-[323deg] w-4 h-4 " />
                  </span>
                  <span>Pick-up: {car.pickup}</span>
                </p>
              </div>
              <div className="md:w-1/2 w-full flex justify-center items-center">
                <Image src={car.image} width={181} height={117} />
              </div>
            </div>

            <div className="md:w-[30%] w-full  flex flex-col px-4 py-6 justify-between items-start">
              <p className="text-green-600 font-medium text-base mb-4">
                4 deals form
              </p>
              <p className="text-green-600 font-semibold">
                <span className="text-[30px] font-bold">RS{car.price}</span>{" "}
                total
              </p>
              <p className="text-gray-500 mt-2 text-base font-normal font-roboto flex gap-2 items-center">
                <span>
                  <Image
                    src={"/images/cancellationsvg.png"}
                    width={16}
                    height={16}
                  />
                </span>
                Free cancellation
              </p>
              <Link href='/Cabs/CheckOut' className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg w-full font-poppins cursor-pointer flex justify-center items-center">
                Ckeck out
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Newsletter/>
    </div>
  )
}

export default page