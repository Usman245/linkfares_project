"use client"
import PackagesDetailBanner from "@/app/components/PackagesDetailBanner"
import PackagesDetailCard from "@/app/components/PackagesDetailCard"
import PackagesDetailMiniBanner from "@/app/components/PackagesDetailMiniBanner"
import PackagesFilter from "@/app/components/PackagesFilters"


const page = () => {
    return (
        <div>
            <PackagesDetailBanner />
            <PackagesDetailMiniBanner />
            <div className="container w-full flex lg:flex-row flex-col justify-start gap-4">
                <PackagesFilter />

                <PackagesDetailCard />
            </div>
        </div>
    )
}

export default page