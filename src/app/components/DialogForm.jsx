"use client";
import React, { useState } from "react";
import {
  FaFacebook,
  FaGoogle,
  FaApple,
  FaAngleLeft,
  FaCheck,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";

const DialogForm = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  return (
    <div>
      <div className="flex justify-center items-start  py-10 bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md font-poppins">
          {/* Back arrow icon */}
          <Link href="/AuthPages/Signup" className="text-gray-600 ">
            <FaAngleLeft className="w-4 h-4" />
          </Link>

          {/* Logo and Title */}
          <div className="flex flex-col items-start mb-6 mt-6">
            <Link href="/" className="flex gap-2 items-center">
              <span className="flex justify-center items-center w-12 h-12 rounded-full bg-green-600">
                <Image
                  src={"/images/Vector.png"}
                  objectFit="cover"
                  width={25}
                  height={20}
                  alt="logo"
                />
              </span>
              <div className="text-xl font-bold">
                Link<span className="text-green-600">Fares</span>
              </div>
            </Link>

            <h2 className="text-2xl font-bold text-center mt-4">
              Get the <span className="text-green-600">full experience</span>
            </h2>
            <p className="text-sm font-medium mt-2">
              Track prices, make trip planning easier and enjoy faster booking.
            </p>
          </div>

          {/* Sign-in Buttons */}
          <div className="space-y-4 mb-6">
            <button className="w-full py-3 bg-[#E0E4E9]  font-medium rounded-md">
              Continue with email
            </button>
            <button className="w-full py-3 bg-[#E0E4E9] font-medium rounded-md flex items-center justify-center gap-2">
              <FaFacebook className="text-blue-600 w-5 h-5" /> Facebook
            </button>
            <button className="w-full py-3 bg-[#E0E4E9] font-medium rounded-md flex items-center justify-center gap-2">
              <FcGoogle className="w-5 h-5" /> Google
            </button>
            <button className="w-full py-3 bg-[#E0E4E9] font-medium rounded-md flex items-center justify-center gap-2">
              <FaApple className="text-black w-5 h-5" /> Apple
            </button>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center mb-6">
            {/* Hidden Checkbox */}
            <input
              type="checkbox"
              id="customCheckbox"
              checked={checked}
              onChange={handleCheckboxChange}
              className="hidden"
            />

            {/* Custom Checkbox */}
            <div
              onClick={handleCheckboxChange}
              className={`w-5 h-5 flex items-center justify-center rounded border-gray-600 cursor-pointer ${
                checked ? "bg-green-600 border-none" : "bg-white border"
              }`}
            >
              {checked && <FaCheck className="text-white text-xs" />}
            </div>

            {/* Label */}
            <label
              htmlFor="customCheckbox"
              className="ml-2 font-medium text-sm cursor-pointer"
            >
              Remember me
            </label>
          </div>

          {/* Terms and Policy */}
          <p className="text-sm text-gray-800 font-medium">
            By continuing you agree to our{" "}
            <a href="#" className="text-blue-500 underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500 underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default DialogForm;
