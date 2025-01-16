import react from "react";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaCalendarAlt, FaCarAlt } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";

const ProcessForHireCars = () => {
  const process = [
    {
      svg: <FaCarAlt className="text-green-600 w-6 h-6" />,
      title: "Book now, cancel later",
      text: "We clearly highlight car and van hire options in London that have free cancellation. So you can bag the best deal with total flexibility to change your plans if you need to.",
    },
    {
        svg: <FaCarSide className="text-green-600 w-6 h-6" />,
        title: "Hire cars for a whole month",
        text: "Want to hire a car for almost a month? Often, car rental companies in London avoid costly admin inbetween pick-ups by hiring out cars for longer periods. So see if monthly car hire is cheaper than the three weeks you need it for by selecting 30 days. ",
      },
      {
        svg: <FaCalendarAlt className="text-green-600 w-6 h-6" />,
        title: "Book 3 weeks",
        text: "We crunched some numbers and found that most travellers bag the lowest daily rate when they book 3 weeks in advance. The cheapest month to hire a car in London is November.",
      },
      {
        svg: <BsFillFuelPumpFill className="text-green-600 w-6 h-6" />,
        title: "Compare fuel policies",
        text: "To save money on topping up the tank as you take off in London, look out for deals with a 'full to full' fuel policy, as opposed to a 'half-full to full' one.",
      },
      {
        svg: <MdOutlineAccessTime className="text-green-600 w-6 h-6" />,
        title: "Skip the queues",
        text: "We call out keyless pick-up when you search for cars with us. No keys to pick up, means no queues. Just turn up at your preferred London car hire location, hop in and hit the road.",
      },
  ];
  return (
    <div className=" container">
    <div className="
    md:mt-24 xl:w-3/5 lg:w-4/5 w-full flex flex-col justify-start">
    <h1 className="font-bold font-poppins text-[32px]">
        How to book a car in London
      </h1>
      <p className="font-roboto text-base mt-2">{`We’re frequently named as the most trusted travel search site out there. We scan hundreds of trusted travel
providers and put it all in one place, allowing you to instantly compare car hire rates and then book with no
fees. Here's how to get the most out of your London car rental search.`}</p>
      <div className="flex mt-4 flex-col">
      {process.map((e, index) => (
        <div key={index} className="flex gap-3 my-2 items-start">
          <span>{e.svg}</span>
          <span>
            <h4 className="text-[20px] font-bold font-poppins">{e.title}</h4>
            <p className="text-base font-normal mt-1 font-roboto">{e.text}</p>
          </span>
        </div>
      ))}
      </div>
    </div>
    </div>
  );
};

export default ProcessForHireCars;
