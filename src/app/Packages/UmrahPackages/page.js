import Newsletter from '@/app/components/Newsletter'
import UmrahAllPackages from '@/app/components/UmrahAllPackages'
import UmrahPackageBanner from '@/app/components/UmrahPackageBanner'
import UmrahPackagesAbout from '@/app/components/UmrahPackagesAbout'
import React from 'react'

const page = () => {
    return (
        <div >
            <UmrahPackageBanner />
            <UmrahAllPackages />
            <UmrahPackagesAbout />
            <div className="xl:mt-52 lg:mt-56 mt-72"><Newsletter /></div>
        </div>
    )
}

export default page