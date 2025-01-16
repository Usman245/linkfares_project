import CarhireBanner from '@/app/components/cabs/CarhireBanner'
import Faq from '@/app/components/cabs/Faq'
import PopularCarRentalCompanies from '@/app/components/cabs/PopularCarRentalCompanies'
import React from 'react'
import CarHireTabs from '@/app/components/cabs/CarHireTabs'
import CarCollection from '@/app/components/cabs/CarCollection'
import ProcessForHireCars from '@/app/components/cabs/ProcessForHireCars'
import MapComponent from '@/app/components/cabs/Map'
import Newsletter from '@/app/components/Newsletter'

const page = () => {
  return (
    <div>
        <CarhireBanner/>
        <CarHireTabs/>
        <CarCollection/>
        <MapComponent/>
        <PopularCarRentalCompanies/>
        <ProcessForHireCars/>
        <Faq/>
        <Newsletter/>
    </div>
  )
}

export default page