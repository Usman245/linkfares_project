import React from 'react'
import CabsHomePageBanner from '../components/cabs/CabsHomePageBanner'
import CarRentalDestinations from '../components/cabs/CarRentalDestinations'
import CarDeals from '../components/cabs/CarDeals'
import ProcessForHireCar from '../components/cabs/ProcessForHireCar'
import Newsletter from '../components/Newsletter'

const page = () => {
  return (
    <div className=' '>
        <CabsHomePageBanner/>
        <CarRentalDestinations/>
        <CarDeals/>
        <ProcessForHireCar/>
        <Newsletter/>
    </div>
  )
}

export default page