"use client";

import { Select, SelectItem } from "@nextui-org/react";
import React from "react";
import ReactStars from "react-rating-stars-component";
import { RxCross2 } from "react-icons/rx";
import { Slider } from "@nextui-org/react";
import { IoIosArrowForward } from "react-icons/io";
import { Accordion, AccordionItem, button } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa6";
import { color } from "framer-motion";
import Link from "next/link";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { usePaymentInputs, PaymentInputsWrapper } from "react-payment-inputs";
import images from "react-payment-inputs/images";
import HotelCheckOutComponent from "@/app/components/HotelCheckOutComponent";

const page = () => {
  return <HotelCheckOutComponent />;
};

export default page;
