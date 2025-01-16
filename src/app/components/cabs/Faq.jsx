"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Can I hire a van in London?",
    answer:
      "Yes, you can hire vans in London from various car rental agencies.",
  },
  {
    question: "How much does it cost to rent an economy car in London?",
    answer:
      "The cost to rent an economy car in London starts from around £20 per day, but prices vary by season and availability.",
  },
  {
    question: "Can under 25s hire cars in London?",
    answer:
      "Yes, but there may be additional fees for drivers under 25, depending on the rental agency.",
  },
  {
    question: "Is it worth renting a car in London?",
    answer:
      "It depends on your travel needs. Public transport is extensive, but a car can be useful for trips outside the city.",
  },
  {
    question: "How much does it cost to hire a car in London?",
    answer:
      "Hiring a car in London typically costs between £20-£70 per day, depending on the car type and rental duration.",
  },
  {
    question: "What is the cheapest car to rent in London?",
    answer:
      "The cheapest cars are usually compact or economy models, starting from around £15-£20 per day.",
  },
  {
    question: "What's the cheapest month to rent a car in London?",
    answer:
      "Typically, January and February are the cheapest months to rent a car in London.",
  },
  {
    question: "I have young children. Can you hire car seats in London?",
    answer:
      "Yes, most car rental agencies offer child car seats as an add-on when booking.",
  },
  {
    question: "Can I book a one-way car hire in London?",
    answer:
      "Yes, one-way rentals are available, but additional fees may apply.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   <div className="container">
     <div className=" xl:w-3/5 lg:w-4/5 w-full md:mt-16 mt-8 md:mb-52 mb-80">
      <h2 className="text-[32px] font-poppins font-bold mb-4 ">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300 py-4 font-roboto">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h4 className="text-lg font-bold">{faq.question}</h4>
            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openIndex === index && (
            <p className="text-gray-700 mt-2">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
   </div>
  );
};

export default Faq;
