"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaCheck, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/features/signIn";


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const successLogin = await dispatch(signIn({ email, password }));
    setEmail("");
    setPassword("");
  }

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  return (
    <div>
      <div className="flex min-h-screen font-poppins">
        {/* Left Side (Form) */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center py-16 px-8 lg:px-20">
          <h1 className="text-[32px] font-bold ">Welcom back</h1>
          <p className="text-sm font-medium mt-1 mb-8">
            Enter your Credentials to access your account
          </p>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-medium mt-2">Email address</label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border text-gray-700 border-[#D9D9D9] p-[10px] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label className="block text-black font-medium mt-4">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border text-gray-700 border-[#D9D9D9] p-[10px] rounded-[12px]  focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

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
                className={`w-5 h-5 flex items-center justify-center rounded border-gray-600 cursor-pointer ${checked ? "bg-green-600 border-none" : "bg-white border"
                  }`}
              >
                {checked && <FaCheck className="text-white text-xs" />}
              </div>

              {/* Label */}
              <label
                htmlFor="customCheckbox"
                className="ml-2 font-medium text-sm cursor-pointer"
              >
                I agree terms <span className=" underline">terms & policy</span>
              </label>
            </div>

            <button className="w-full bg-green-600 text-white p-[10px] rounded-xl mt-2 font-semibold hover:bg-green-700">
              Login
            </button>
          </form>

          <div className="flex items-center mt-12 mb-20">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 font-medium">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex gap-4 mb-4 sm:flex-row flex-col items-center">
            <button className="flex items-center justify-center w-full border border-[#D9D9D9] py-2 px-2 whitespace-nowrap hover:bg-gray-100 font-medium rounded-[10px]">
              <FcGoogle className="mr-1 w-6 h-6" /> Sign in with Google
            </button>
            <button className="flex items-center justify-center w-full border border-[#D9D9D9] py-2 px-2 whitespace-nowrap  hover:bg-gray-100 font-medium rounded-[10px]">
              <FaApple className="mr-1 w-6 h-6" /> Sign in with Apple
            </button>
          </div>

          <p className="text-center font-medium">
            Do not have an account?{" "}
            <Link
              href="/AuthPages/Signup"
              className="text-green-600 font-semibold"
            >
              Sign Up
            </Link>
          </p>
        </div>

        {/* Right Side (Image) */}
        <div className="hidden lg:flex lg:w-1/2 bg-cover bg-center relative ">
          <Image
            src="/images/signupbg.png" // Replace with your image path
            alt="Signup Background"
            objectFit="cover"
            layout="fill"
            quality={100}
            className="w-full h-full rounded-l-[45px]"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
