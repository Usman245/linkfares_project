'use client'
import AllCars from '@/app/components/cabs/AllCars'
import CarSelectionBanner from '@/app/components/cabs/CarSelectionBanner'
import Filters from '@/app/components/cabs/CarSelectionFilters'
import CarSelectionMap from '@/app/components/cabs/CarSelectionMap'
import Newsletter from '@/app/components/Newsletter'
import React, { useState } from 'react'

const page = () => {
  
  return (
    <div className=' '>
      <CarSelectionBanner />
      <div className='flex lg:flex-row flex-col md:mt-24 mt-8 container'>
        <div className='lg:w-[27%] w-full'>
          <Filters />
        </div>
        <div className='lg:w-[73%] w-full mb-80 '>
          <CarSelectionMap />
          <AllCars />
        </div>
      </div>
      <Newsletter/>
    </div>
  )
}

export default page