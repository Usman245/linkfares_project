import React from "react";

const Newsletter = () => {
  return (
    <div className="container">
      <div className=" relative  mt-[20vh]  sm:mt-[10vh]">
        <div className="absolute bottom-[-137px]  left-0 w-full">
          <div className="bg-green-f2 py-[43px]  px-[30px] lg:px-[250px] rounded-xl ">
            <div className="flex flex-col gap-[45px]">
              <div className="flex    justify-center items-center">
                <p className="font-poppins font-semiold text-[44px] text-green-11">
                  Subscribe <span className="text-green-600">Newsletter</span>
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-base font-bold  font-roboto">
                  Grab the latest Deal
                </p>
                <div className="flex  flex-col lg:flex-row  lg:justify-between items-center gap-2">
                  <input
                    className="py-[20px] px-[16px]  bg-white  text-base font-roboto font-bold rounded-lg  w-full  outline-none"
                    placeholder="Your Email Here "
                  ></input>
                  <button className="py-[20px] px-[20px] rounded-lg text-sm font-roboto text-white bg-green-600  w-full lg:w-max ">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
