import React from "react";
import Image from "next/image";
import Link from "next/link";

const UmrahAllPackages = () => {
  const packages = [
    { imgPath: "/images/rabi_thb.png.png", title: "Dicove the Rabi Awal ..." ,linkPath:"/UmrahPackagesDetail" },
    { imgPath: "/images/lhe-thm-10d.jpg.png", title: "Welsome to 10 days ...",linkPath:"/UmrahPackagesDetails" },
    { imgPath: "/images/lhe-thm-15d.jpg.png", title: "Welsome to 15 days ...",linkPath:"/UmrahPackagesDetails" },
    {
      imgPath: "/images/khi-thm-21d.jpg.png",
      title: "21 days package krachi ...",linkPath:"/UmrahPackagesDetails"
    },
    {
      imgPath: "/images/khi-thm-10d.jpg.png",
      title: "10 days Umrah Package krachi ...",linkPath:"/UmrahPackagesDetails"
    },
    {
      imgPath: "/images/ramadan-umrah-packages-2024.jpg.png",
      title: "2024 Ramzan Umrah Package...",linkPath:"/UmrahPackagesDetails"
    },
    {
      imgPath: "/images/khi-thm-15d.jpg.png",
      title: "Welcome to 15 days Umrah Package...",linkPath:"/UmrahPackagesDetails"
    },
    {
      imgPath: "/images/isb-thm-10d.jpg.png",
      title: "Welcome to 10 days Umrah Package...",linkPath:"/UmrahPackagesDetails"
    },
    {
      imgPath: "/images/isb-thm-15d.jpg.png",
      title: "15 days Umrah Packages Package...",linkPath:"/UmrahPackagesDetails"
    },
    {
      imgPath: "/images/isb-thm-21d.jpg.png",
      title: "21 days Umrah Packages Package...",linkPath:"/UmrahPackagesDetails"
    },
  ];
  return (
    <div className="container py-4 text-center">
      <h1 className="text-2xl font-medium font-poppins mb-4">
        <span className="text-green-600">Current Umrah</span> Packages
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
        {packages.map((e, index) => (
          <Link href={`/Packages${e.linkPath}`} key={index} className="flex flex-col text-center">
            <Image
              src={e.imgPath}
              width={270}
              height={270}
              alt="Packages image"
              className=" w-[-webkit-fill-available] h-full"
            />
            <h1 className="text-lg font-medium">{e.title}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UmrahAllPackages;
