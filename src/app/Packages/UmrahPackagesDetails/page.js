import UmrahPackagesDetailBanner from '@/app/components/umrahPackage/UmrahPackagesDetailBanner'
import React from 'react'
import UmrahPackageDetail from '@/app/components/umrahPackage/UmrahPackageDetail'
import SideButtons from '@/app/components/umrahPackage/SideButtons'

const page = () => {
    return (
        <div className="container flex lg:flex-row flex-col w-full my-4">
            <div className='w-full lg:w-4/5'>
                <UmrahPackagesDetailBanner title="Welcom to 21 Days Umrah Package From Lahore" para1="Embark on a sacred and comprehensive pilgrimage experience with our 21 days Umrah package departing from Lahore 2024. Designed to provide you with an immersive and spiritually fulfilling journey, this package combines convenience, comfort, and devotion to ensure a memorable pilgrimage." imgPath="/images/lahoreimg.png" days="21" startingPoint="Lahore" />
                <UmrahPackageDetail />
            </div>
            <div className='lg:w-1/5 w-full'>
                <SideButtons />
            </div>
        </div>
    )
}

export default page