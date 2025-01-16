"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { GoPlusCircle } from "react-icons/go";
import { GrSubtractCircle } from "react-icons/gr";

const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const questionsData = [
  {
    cquestion: "Why Bookme?",
    cans: `We are Pakistan's no.1 E-ticketing platform. We let you pre-book the best deals on your tickets for Movies, Bus Travel, Flights, Train journey and Events. You no longer have to stand in
lines and can purchase your tickets from the comfort of your ‘phones’ by using a variety of digital payment methods. Get your ticket confirmations instantly via SMS and Email.`,
  },
  {
    cquestion:
      "What information will I be able to see during my ticket purchase?",
    cans: `We are Pakistan's no.1 E-ticketing platform. We let you pre-book the best deals on your tickets for Movies, Bus Travel, Flights, Train journey and Events. You no longer have to stand in
lines and can purchase your tickets from the comfort of your ‘phones’ by using a variety of digital payment methods. Get your ticket confirmations instantly via SMS and Email.`,
  },

  {
    cquestion: "How do I know if my purchase was successful?",
    cans: `We are Pakistan's no.1 E-ticketing platform. We let you pre-book the best deals on your tickets for Movies, Bus Travel, Flights, Train journey and Events. You no longer have to stand in
lines and can purchase your tickets from the comfort of your ‘phones’ by using a variety of digital payment methods. Get your ticket confirmations instantly via SMS and Email.`,
  },

  {
    cquestion: "Can I choose my own seat?",
    cans: `We are Pakistan's no.1 E-ticketing platform. We let you pre-book the best deals on your tickets for Movies, Bus Travel, Flights, Train journey and Events. You no longer have to stand in
lines and can purchase your tickets from the comfort of your ‘phones’ by using a variety of digital payment methods. Get your ticket confirmations instantly via SMS and Email.`,
  },

  {
    cquestion: "How can I purchase E-Tickets once I have selected my seats?",
    cans: `We are Pakistan's no.1 E-ticketing platform. We let you pre-book the best deals on your tickets for Movies, Bus Travel, Flights, Train journey and Events. You no longer have to stand in
lines and can purchase your tickets from the comfort of your ‘phones’ by using a variety of digital payment methods. Get your ticket confirmations instantly via SMS and Email.`,
  },

  {
    cquestion:
      "If I have a query regarding my E- Ticket, who can I contact for assistance?",
    cans: `We are Pakistan's no.1 E-ticketing platform. We let you pre-book the best deals on your tickets for Movies, Bus Travel, Flights, Train journey and Events. You no longer have to stand in
lines and can purchase your tickets from the comfort of your ‘phones’ by using a variety of digital payment methods. Get your ticket confirmations instantly via SMS and Email.`,
  },

  {
    cquestion:
      "If I have a query regarding my E- Ticket, who can I contact for assistance?",
    cans: `We are Pakistan's no.1 E-ticketing platform. We let you pre-book the best deals on your tickets for Movies, Bus Travel, Flights, Train journey and Events. You no longer have to stand in
lines and can purchase your tickets from the comfort of your ‘phones’ by using a variety of digital payment methods. Get your ticket confirmations instantly via SMS and Email.`,
  },

  {
    cquestion: "What if I do not receive my confirmation email?",
    cans: `We are Pakistan's no.1 E-ticketing platform. We let you pre-book the best deals on your tickets for Movies, Bus Travel, Flights, Train journey and Events. You no longer have to stand in
lines and can purchase your tickets from the comfort of your ‘phones’ by using a variety of digital payment methods. Get your ticket confirmations instantly via SMS and Email.`,
  },

  {
    cquestion: "What are the requirements for booking a ticket?",
    cans: `We are Pakistan's no.1 E-ticketing platform. We let you pre-book the best deals on your tickets for Movies, Bus Travel, Flights, Train journey and Events. You no longer have to stand in
lines and can purchase your tickets from the comfort of your ‘phones’ by using a variety of digital payment methods. Get your ticket confirmations instantly via SMS and Email.`,
  },

  {
    cquestion: "What are the rewards for using Bookme?",
    cans: `We are Pakistan's no.1 E-ticketing platform. We let you pre-book the best deals on your tickets for Movies, Bus Travel, Flights, Train journey and Events. You no longer have to stand in
lines and can purchase your tickets from the comfort of your ‘phones’ by using a variety of digital payment methods. Get your ticket confirmations instantly via SMS and Email.`,
  },

  {
    cquestion: "What if I have forgotten my password?",
    cans: `We are Pakistan's no.1 E-ticketing platform. We let you pre-book the best deals on your tickets for Movies, Bus Travel, Flights, Train journey and Events. You no longer have to stand in
lines and can purchase your tickets from the comfort of your ‘phones’ by using a variety of digital payment methods. Get your ticket confirmations instantly via SMS and Email.`,
  },
];

const FrequentlyAskedQuestions = () => {
  return (
    <div className="container ">
      <div className="py-12 flex flex-col gap-6">
        <h2 className="text-lg font-bold font-inter text-black-16">
          Frequently Asked Questions
        </h2>

        <Accordion defaultExpandedKeys={["theme"]}>
          {questionsData.map((item, index) => (
            <AccordionItem
              key={`${index}`}
              aria-label="Theme"
              indicator={({ isOpen }) =>
                isOpen ? (
                  <GrSubtractCircle color="#12B76A" rotate={360} />
                ) : (
                  <GoPlusCircle color="#12B76A" />
                )
              }
              title={`${item.cquestion}`}
              classNames={{
                title: "text-lg font-bold ",
              }}
            >
              {`${item.cans}`}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
