import React from "react";
import Image from "next/image";
import Link from "next/link";

const exploreData = [
  {
    id: 1,
    imgpath: "/images/explore.png",
    cardtitle: "Domestic Tour",
    linkurl: "/PackagesDetails",
  },
  {
    id: 2,
    imgpath: "/images/flights.png",
    cardtitle: "International Tour",
    linkurl: "/PackagesDetails",
  },
  {
    id: 3,
    imgpath: "/images/ummrahpkg.png",
    cardtitle: "Haji and Ummrah Package",
    linkurl: "/UmrahPackages",
  },
  {
    id: 4,
    imgpath: "/images/explore.png",
    cardtitle: "Customized Packages",
    linkurl: "/PackagesDetails",
  },
  {
    id: 5,
    imgpath: "/images/zayaratpkg.png",
    cardtitle: "Zayarat Packages",
    linkurl: "/UmrahPackages",
  },
  {
    id: 6,
    imgpath: "/images/bus.png",
    cardtitle: "Others Packages",
    linkurl: "/PackagesDetails",
  },
  {
    id: 7,
    imgpath: "/images/explore.png",
    cardtitle: "Domestic Tours",
    linkurl: "/PackagesDetails",
  },
  {
    id: 8,
    imgpath: "/images/flights.png",
    cardtitle: "International Tour",
    linkurl: "/PackagesDetails",
  },
  {
    id: 9,
    imgpath: "/images/ummrahpkg.png",
    cardtitle: "Haji and Ummrah Package",
    linkurl: "/UmrahPackages",
  },
];

const PackagesExplore = () => {
  return (
    <div className="bg-white">
      <div className="container">
        <div className="flex flex-col gap-[27px] pb-[124px]">
          <div className="flex flex-col justify-center items-center">
            <p className="font-poppins font-semiold text-[44px] text-black">
              Explore <span className="text-green-600">More</span>
            </p>
            <p className="text-base font-roboto text-center font-bold text-black-33">
              Every moment, every place, everything you need!
            </p>
          </div>

          <div className="relative">
            <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-5">
              {exploreData.map((item, index) => (
                <div
                  key={index}
                  className="relative rounded-lg w-[350px] h-[270px] overflow-hidden"
                >
                  <Link href={`/Packages${item.linkurl}`}>
                    <div className="rounded-lg w-full h-full">
                      <Image
                        src={item.imgpath}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/10 w-full h-full rounded-lg"></div>
                      <p className="font-poppins font-bold text-[22px] absolute bottom-[16px] text-white left-[16px]">
                        {item.cardtitle}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesExplore;
