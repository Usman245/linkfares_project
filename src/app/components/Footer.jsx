import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-green-600">
        <div className="pt-[100px] pb-[65px]  container">
          <div className="flex flex-col gap-8">
            <div className="grid  gap-y-10 grid-cols-1 lg:grid-cols-2">
              <div className="grid gap-y-10  grid-cols-2">
                <div className="flex flex-col gap-y-9 ">
                  <Image src="/images/footerlogo.png" width={148} height={48} alt="" />

                  <div className="font-roboto font-bold text-sm py-[11px] px-[16px] hidden sm:block  text-white  bg-green-400 rounded-lg text-center w-max">
                    Pakistan . English (UK) . RS PKR
                  </div>
                </div>

                <div className="flex lg:justify-end">
                  <ul className="flex flex-col gap-y-4">
                    <li className="font-roboto font-bold text-sm text-white">
                      <Link href="#">Help</Link>
                    </li>

                    <li className="font-roboto font-bold text-sm text-white">
                      <Link href="#">Privacy Setting</Link>
                    </li>

                    <li className="font-roboto font-bold text-sm text-white">
                      <Link href="#">Login</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid   gap-10 grid-cols-2  ">
                <div className="flex  lg:justify-end">
                  <ul className="flex flex-col gap-y-4">
                    <li className="font-roboto font-bold text-sm text-white">
                      <Link href="#">Cookie Policy</Link>
                    </li>

                    <li className="font-roboto font-bold text-sm text-white">
                      <Link href="#">Privacy Policy</Link>
                    </li>

                    <li className="font-roboto font-bold text-sm text-white">
                      <Link href="#">Terms of Service</Link>
                    </li>

                    <li className="font-roboto font-bold text-sm text-white">
                      <Link href="#">Company Detail</Link>
                    </li>
                  </ul>
                </div>

                <div className=" flex flex-col lg:justify-end gap-5">
                  <ul className="flex flex-col gap-y-4">
                    <li className="font-roboto font-bold text-sm text-white">
                      <Link href="#">Explore</Link>
                    </li>

                    <li className="font-roboto font-bold text-sm text-white">
                      <Link href="#">Company</Link>
                    </li>

                    <li className="font-roboto font-bold text-sm text-white">
                      <Link href="#">Partners</Link>
                    </li>

                    <li className="font-roboto font-bold text-sm text-white">
                      <Link href="#">Trips</Link>
                    </li>

                    <li className="font-roboto font-bold text-sm text-white">
                      <Link href="#">International Sites</Link>
                    </li>
                  </ul>
                  <ul className="flex gap-2">
                    <li><Link href="#"><FaInstagram className="text-white text-lg" /></Link></li>
                    <li><Link href="#"><FaFacebookSquare className="text-white text-lg" /></Link></li>
                    <li><Link href="#"><FaXTwitter className="text-white text-lg" /></Link></li>
                    <li><Link href="#"><FaLinkedinIn className="text-white text-lg" /></Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex justify-center  block sm:hidden">
              <div className="font-roboto font-bold text-sm py-[11px] px-[16px]  text-white  bg-green-400 rounded-lg text-center w-max">
                Pakistan . English (UK) . RS PKR
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-f2">
        <div className="container py-4">
          <div className="flex justify-center ">
            <div className="  sm:w-[450px] grid   grid-flow-col    	grid-auto-columns gap-1 items-center  ">
              <div>
                <Image
                  src="/images/nortonlogo.png"
                  width={50}
                  height={30}
                  quality={100}
                />
              </div>
              <div>
                <Image src="/images/jazzcas.png" width={24} height={24} />
              </div>
              <div>
                <Image src="/images/easypeisa.png" width={32} height={24} />
              </div>
              <div>
                <Image src="/images/hbl.png" width={47} height={24} />
              </div>
              <div>
                <Image src="/images/mastercard.png" width={36} height={24} />
              </div>
              <div>
                <Image src="/images/paypak.png" width={43} height={24} />
              </div>
              <div>
                <Image src="/images/visa.png" width={74} height={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-600">
        <div className="container py-4">
          <div className="flex justify-center font-roboto text-sm font-bold  text-white">
            Copyright @Link Fares 2023
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
