"use client";
import React, { useState } from "react";
import { CiCircleQuestion } from "react-icons/ci";
import { ReactCountryFlag } from "react-country-flag";
import { FiUser } from "react-icons/fi";
import { Button, Modal, useDisclosure } from "@nextui-org/react";
import Modals from "../components/Modal";

export const Page = () => {
    const [openMenu, setOpenMenu] = useState("pd");
    const [isEditing, setIsEditing] = useState(false);
    const [language, setLanguage] = useState("English");
    const [isCurrencyEditing, setCurrencyEditing] = useState(false);
    const [currency, setCurrency] = useState("$");
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [userNameEditing, setUserNameEditing]=useState(false);
    const [isPhoneEditing, setPhoneEditing] = useState(false);
    const [isNationalityEditing, setNationalityEditing] = useState(false);
    const [isDateOfBirthEditing, setDateOfBirth] = useState(false);
    const [isCountryEditing, setCountryEditing] = useState(false);
    const handleLanguageEditClick = () => {
        setIsEditing(true);
    };

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
        setIsEditing(false);
    };

    const currencyOptions = [
        { name: "US Dollar", symbol: "$" },
        { name: "Euro", symbol: "€" },
        { name: "British Pound", symbol: "£" },
        { name: "Japanese Yen", symbol: "¥" },
        { name: "Canadian Dollar", symbol: "C$" },
        { name: "Australian Dollar", symbol: "A$" },
        { name: "Swiss Franc", symbol: "CHF" },
        { name: "Chinese Yuan", symbol: "¥" },
        { name: "Indian Rupee", symbol: "₹" },
        { name: "South Korean Won", symbol: "₩" },
    ];

    const handleCurrencyEditClick = () => {
        setCurrencyEditing(true);
    };

    const handleCurrencyChange = (event) => {
        const selectedCurrency = currencyOptions.find(
            (option) => option.name === event.target.value
        );
        setCurrency(selectedCurrency.symbol);
        setCurrencyEditing(false);
    };

    const user = {
        firstName: "Haddi",
        lastName: "Ahmad",
    };

    return (
        <div className="container">
            <div className="flex flex-col lg:flex-row gap-10 my-10 w-full ">
                <div
                    className="flex flex-col lg:w-[32%] md:w-1/2 h-max rounded-[10px] border border-[#F2F4F7]"
                    style={{
                        boxShadow:
                            "0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814",
                    }}
                >
                    <div
                        className={`${openMenu === "pd"
                                ? "bg-green-600 text-white"
                                : "bg-white text-[#101828]"
                            } flex gap-2 text-[20px] font-roboto font-normal w-full rounded-t-[10px] border-b border-gray-300 items-center py-4 px-4 cursor-pointer`}
                        onClick={() => setOpenMenu("pd")}
                    >
                        <FiUser className="w-5 h-5" /> Personal Details
                    </div>

                    <div
                        className={`${openMenu === "pr"
                                ? "bg-green-600 text-white"
                                : "bg-white text-[#101828]"
                            } flex gap-2 text-[20px] font-roboto font-normal w-full border-b border-gray-300 items-center py-4 px-4 cursor-pointer`}
                        onClick={() => setOpenMenu("pr")}
                    >
                        <FiUser className="w-5 h-5" /> Preferences
                    </div>

                    <div
                        className={`${openMenu === "ss"
                                ? "bg-green-600 text-white"
                                : "bg-white text-[#101828]"
                            } flex gap-2 text-[20px] font-roboto font-normal w-full border-b border-gray-300 items-center py-4 px-4 cursor-pointer`}
                        onClick={() => setOpenMenu("ss")}
                    >
                        <FiUser className="w-5 h-5" /> Security Settings
                    </div>

                    <div
                        className={`${openMenu === "pm"
                                ? "bg-green-600 text-white"
                                : "bg-white text-[#101828]"
                            } flex gap-2 text-[20px] font-roboto font-normal w-full border-b border-gray-300 items-center py-4 px-4 cursor-pointer`}
                        onClick={() => setOpenMenu("pm")}
                    >
                        <FiUser className="w-5 h-5" /> Payment Method
                    </div>

                    <div
                        className={`${openMenu === "ps"
                                ? "bg-green-600 text-white"
                                : "bg-white text-[#101828]"
                            } flex gap-2 text-[20px] font-roboto font-normal w-full items-center py-4 px-4 cursor-pointer rounded-b-[10px]`}
                        onClick={() => setOpenMenu("ps")}
                    >
                        <FiUser className="w-5 h-5" /> Payment Setting
                    </div>
                </div>

                <div className="lg:w-[68%] w-full font-poppins">
                    {openMenu === "pd" && (
                        <div>
                            <h1 className="text-[32px] font-poppins font-bold">
                                Personal details
                            </h1>
                            <p className="mt-1 text-[16px] leading-6 font-poppins font-normal">
                                Update your info and find how its used
                            </p>
                            <div className="mt-8 flex sm:flex-row flex-col justify-between gap-4">
                                <label className="text-base font-medium flex flex-col sm:w-[50%] w-full">
                                    First Name
                                    <div className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 flex justify-between items-center">
                                        <input
                                            type="text"
                                            className="w-1/2 border-none outline-none text-gray-500"
                                            value={user.firstName}
                                        />
                                        <CiCircleQuestion className="w-6 h-6 text-gray-700" />
                                    </div>
                                </label>
                                <label className="text-base font-medium flex flex-col sm:w-[50%] w-full">
                                    Last Name
                                    <div className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 flex justify-between items-center">
                                        <input
                                            type="text"
                                            className="sm:w-1/2 w-full border-none outline-none text-gray-500"
                                            value={user.lastName}
                                        />
                                        <CiCircleQuestion className="w-6 h-6 text-gray-700" />
                                    </div>
                                </label>
                            </div>
                            <hr className="text-gray-300 mt-8" />
                            <div className="mt-6 flex sm:flex-row sm:gap-0 gap-4 items-start flex-col justify-between sm:items-center">
                                <div className="text-base font-medium ">
                                    Choose a display name
                                </div>
                                {userNameEditing ? (
                                <div className={`border border-gray-400 p-2 rounded outline-none`}>
                                <input className="border-none outline-none" type='text' value="haddi@_us4500"/>
                                <button className="text-green-600 cursor-pointer text-base font-medium" onClick={() => setUserNameEditing(false)}>
                                    Add</button>
                                </div>
                                ) : (
                                    <div className="text-[#34405480] text-base">haddi@_us4500</div> 
                                )}
                                  <button className="text-green-600 cursor-pointer text-base font-medium" onClick={()=>setUserNameEditing(true)}>
                                    Edit
                                </button>
                            </div>
                            <hr className="text-gray-300 mt-8" />
                            <div className="mt-6 flex justify-between sm:items-center items-start flex-col sm:flex-row gap-4 sm:gap-0">
                                <div className="text-base font-medium ">Phone No</div>
                                <div
                                    className={`border border-gray-400 p-2 rounded outline-none ${isPhoneEditing ? "block" : "hidden"
                                        }`}
                                >
                                    <input
                                        type="text"
                                        placeholder="enter your phone"
                                        className="border-none outline-none"
                                    />
                                    <button
                                        className="text-green-600 cursor-pointer text-base font-medium"
                                        onClick={() => setPhoneEditing(false)}
                                    >
                                        Add
                                    </button>
                                </div>
                                <button
                                    className="text-green-600 cursor-pointer text-base font-medium"
                                    onClick={() => setPhoneEditing(true)}
                                >
                                    Add
                                </button>
                            </div>
                            <hr className="text-gray-300 mt-8" />
                            <div className="mt-6 flex justify-between sm:items-center items-start flex-col sm:flex-row gap-4 sm:gap-0">
                                <div className="text-base font-medium ">Nationality</div>
                                <div
                                    className={`border border-gray-400 p-2 rounded outline-none ${isNationalityEditing ? "block" : "hidden"
                                        }`}
                                >
                                    <input
                                        className="border-none outline-none"
                                        type="text"
                                        placeholder="Your nationality"
                                    />
                                    <button
                                        className="text-green-600 cursor-pointer text-base font-medium"
                                        onClick={() => setNationalityEditing(false)}
                                    >
                                        Add
                                    </button>
                                </div>
                                <button
                                    className="text-green-600 cursor-pointer text-base font-medium"
                                    onClick={() => setNationalityEditing(true)}
                                >
                                    Add
                                </button>
                            </div>
                            <hr className="text-gray-300 mt-8" />
                            <div className="mt-6 flex justify-between  sm:items-center items-start flex-col sm:flex-row gap-4 sm:gap-0">
                                <div className="text-base font-medium ">Date of Birth</div>
                                <div
                                    className={`border border-gray-400 p-2 rounded outline-none ${isDateOfBirthEditing ? "block" : "hidden"
                                        }`}
                                >
                                    <input className="border-none outline-none" type="date" />
                                    <button
                                        className="text-green-600 cursor-pointer text-base font-medium"
                                        onClick={() => setDateOfBirth(false)}
                                    >
                                        Add
                                    </button>
                                </div>
                                <button
                                    className="text-green-600 cursor-pointer text-base font-medium"
                                    onClick={() => setDateOfBirth(true)}
                                >
                                    Add
                                </button>
                            </div>
                            <hr className="text-gray-300 mt-8" />
                            <div className="mt-6 flex justify-between sm:items-center items-start flex-col sm:flex-row gap-4 sm:gap-0">
                                <div className="text-base font-medium ">City of Residency</div>
                                <div
                                    className={`border border-gray-400 p-2 rounded outline-none ${isCountryEditing ? "block" : "hidden"
                                        }`}
                                >
                                    <input
                                        className="border-none outline-none"
                                        type="text"
                                        placeholder="Your country"
                                    />
                                    <button
                                        className="text-green-600 cursor-pointer text-base font-medium"
                                        onClick={() => setCountryEditing(false)}
                                    >
                                        Add
                                    </button>
                                </div>
                                <button
                                    className="text-green-600 cursor-pointer text-base font-medium"
                                    onClick={() => setCountryEditing(true)}
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    )}
                    {openMenu === "pr" && (
                        <div>
                            <h1 className="text-[32px] font-poppins font-bold">
                                Preferences
                            </h1>
                            <p className="mt-1 text-base leading-6 font-poppins font-normal">
                                Change your language, currency and accessibility requirements.
                            </p>
                            <div className="mt-10 flex justify-between sm:items-center items-start sm:flex-row flex-col sm:gap-0 gap-4">
                                <div className="text-base font-medium ">Currency</div>
                                {isCurrencyEditing ? (
                                    <select
                                        onChange={handleCurrencyChange}
                                        className="text-gray-500 text-lg border rounded px-2 py-1"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Select Currency
                                        </option>
                                        {currencyOptions.map((option) => (
                                            <option key={option.symbol} value={option.name}>
                                                {option.symbol} - {option.name}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <div className="text-[#34405480] text-lg">{currency}</div>
                                )}

                                <button
                                    className="text-green-600 cursor-pointer text-base font-medium"
                                    onClick={handleCurrencyEditClick}
                                >
                                    Edit
                                </button>
                            </div>
                            <hr className="text-gray-300 mt-8" />
                            <div className="mt-6 flex justify-between sm:items-center items-start sm:flex-row flex-col sm:gap-0 gap-4">
                                <div className="text-base font-medium ">Language</div>
                                {isEditing ? (
                                    <select
                                        value={language}
                                        onChange={handleLanguageChange}
                                        className="text-gray-500 text-lg border rounded px-2 py-1"
                                    >
                                        <option value="English">
                                            <ReactCountryFlag countryCode="US" svg className="mr-2" />
                                            English
                                        </option>
                                        <option value="Spanish">
                                            <ReactCountryFlag countryCode="ES" svg className="mr-2" />
                                            Spanish
                                        </option>
                                        <option value="French">
                                            <ReactCountryFlag countryCode="FR" svg className="mr-2" />
                                            French
                                        </option>
                                        <option value="German">
                                            <ReactCountryFlag countryCode="DE" svg className="mr-2" />
                                            German
                                        </option>
                                        <option value="Chinese">
                                            <ReactCountryFlag countryCode="CN" svg className="mr-2" />
                                            Chinese
                                        </option>
                                        <option value="Japanese">
                                            <ReactCountryFlag countryCode="JP" svg className="mr-2" />
                                            Japanese
                                        </option>
                                    </select>
                                ) : (
                                    <div className="text-[#34405480] text-lg flex items-center">
                                        {language === "English" && (
                                            <>
                                                <ReactCountryFlag
                                                    countryCode="US"
                                                    svg
                                                    className="mr-2"
                                                />
                                                English
                                            </>
                                        )}
                                        {language === "Spanish" && (
                                            <>
                                                <ReactCountryFlag
                                                    countryCode="ES"
                                                    svg
                                                    className="mr-2"
                                                />
                                                Spanish
                                            </>
                                        )}
                                        {language === "French" && (
                                            <>
                                                <ReactCountryFlag
                                                    countryCode="FR"
                                                    svg
                                                    className="mr-2"
                                                />
                                                French
                                            </>
                                        )}
                                        {language === "German" && (
                                            <>
                                                <ReactCountryFlag
                                                    countryCode="DE"
                                                    svg
                                                    className="mr-2"
                                                />
                                                German
                                            </>
                                        )}
                                        {language === "Chinese" && (
                                            <>
                                                <ReactCountryFlag
                                                    countryCode="CN"
                                                    svg
                                                    className="mr-2"
                                                />
                                                Chinese
                                            </>
                                        )}
                                        {language === "Japanese" && (
                                            <>
                                                <ReactCountryFlag
                                                    countryCode="JP"
                                                    svg
                                                    className="mr-2"
                                                />
                                                Japanese
                                            </>
                                        )}
                                    </div>
                                )}

                                <button
                                    className="text-green-600 cursor-pointer text-base font-medium"
                                    onClick={handleLanguageEditClick}
                                >
                                    Edit
                                </button>
                            </div>
                            <hr className="text-gray-300 mt-8" />
                        </div>
                    )}
                    {openMenu === "ss" && (
                        <div>
                            <h1 className="text-[32px] font-poppins font-bold">
                                Preferences
                            </h1>
                            <p className="mt-1 text-base font-poppins font-normal">
                                Change your language, currency and accessibility requirements.
                            </p>
                            <div className="mt-10 flex justify-between items-start md:flex-row flex-col md:gap-0 gap-4">
                                <div className="text-base font-medium md:w-[33%] ">
                                    Password
                                </div>
                                <div className="text-[#34405480] text-base md:w-[33%]">
                                    Reset your password regularly to keep your account secure
                                </div>
                                <div className="text-green-600 cursor-pointer text-base font-medium md:w-[33%] justify-end flex">
                                    <button>Reset</button>
                                </div>
                            </div>
                            <hr className="text-gray-300 mt-8" />
                            <div className="mt-6 flex justify-between items-start  md:flex-row flex-col md:gap-0 gap-4">
                                <div className="text-base font-medium font-poppins md:w-1/3">
                                    Two factor authentication
                                </div>
                                <div className="text-[#34405480] text-base font-poppins md:w-1/3 text-start">
                                    Increase the security of account{" "}
                                </div>
                                <div className="text-green-600 cursor-pointer text-base font-medium md:w-1/3 flex justify-end">
                                    <button>Setup</button>
                                </div>
                            </div>
                            <hr className="text-gray-300 mt-8" />
                            <div className="mt-6 flex justify-between items-start  md:flex-row flex-col md:gap-0 gap-4">
                                <div className="text-base font-medium md:w-1/3">
                                    Sign out your acocunt
                                </div>
                                <div className="text-[#34405480] text-base font-poppins md:w-1/3">
                                    Selecting Sign out will sign you out from all devices
                                </div>
                                <div className="text-green-600 cursor-pointer text-base font-medium md:w-1/3 flex justify-end ">
                                    <button>Sign out</button>
                                </div>
                            </div>
                            <hr className="text-gray-300 mt-8" />
                            <div className="mt-6 flex justify-between items-start  md:flex-row flex-col md:gap-0 gap-4">
                                <div className="text-base font-medium md:w-1/3">
                                    Remove your account
                                </div>
                                <div className="text-[#34405480] text-base font-poppins md:w-1/3">
                                    Permanently delete your account
                                </div>
                                <div className="text-red-600 cursor-pointer text-base font-medium md:w-1/3 flex justify-end">
                                    <button>Delete</button>
                                </div>
                            </div>
                            <hr className="text-gray-300 mt-8" />
                        </div>
                    )}
                    {openMenu === "pm" && (
                        <div>
                            <h1 className="text-[32px] font-poppins font-bold">
                                Payment methods
                            </h1>
                            <p className="mt-2  text-base font-poppins font-normal text-[#2D2D2D]">
                                Securely add or remove payment methods to make it easier when
                                you book.
                            </p>
                            <div className="mt-8 flex justify-between sm:items-center sm:flex-row flex-col sm:gap-0 gap-4">
                                <div className="text-base font-medium ">Payment Cards</div>
                                <div className="text-[#34405480] text-base font-poppins font-normal">
                                    Pay with new card
                                </div>
                                <button
                                    onClick={onOpen}
                                    className="text-green-600 cursor-pointer text-base font-medium bg-transparent border-none outline-none flex"
                                >
                                    Add
                                </button>
                            </div>
                            <hr className="text-gray-300 mt-8" />
                            <Modals isOpen={isOpen} onOpenChange={onOpenChange} />
                        </div>
                    )}
                    {openMenu === "ps" && (
                        <div>
                            <h1 className="text-[32px] font-poppins font-bold">
                                Privacy Settings
                            </h1>
                            <p className="mt-2  text-base font-poppins font-normal text-[#2D2D2D]">
                                Exercise your privacy rights and control how your data is used.
                            </p>
                            <div className="mt-8 flex justify-between items-start sm:items-center sm:flex-row flex-col sm:gap-0 gap-4">
                                <div className="text-base font-medium ">Privacy Settings</div>
                                <div
                                    className="text-base font-poppins font-normal md:w-[35%]"
                                    style={{
                                        color: "#34405480",
                                    }}
                                >
                                    Select Manage to change your privacy settings and exercise
                                </div>
                                <button className="text-green-600 cursor-pointer text-base font-medium bg-transparent border-none outline-none flex">
                                    Manage
                                </button>
                            </div>
                            <hr className="text-gray-300 mt-8" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Page;
