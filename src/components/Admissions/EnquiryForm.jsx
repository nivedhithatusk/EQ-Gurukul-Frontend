"use client";

import React, { useState } from "react";
import reach_mail from "@/assets/about/icons/reach_mail.svg";
import reach_address from "@/assets/about/icons/reach_address.svg";
import reach_call from "@/assets/about/icons/reach_call.svg";
import admission from "@/assets/admission/admission.png";
import Image from "next/image";

const EnquiryForm = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState("LKG");
  const [dropdownOpenPlace, setDropdownOpenPlace] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState("Coimbatore");

  const options = [
    "LKG",
    "UKG",
    "Class I",
    "Class II",
    "Class III",
    "Class IV",
    "Class V",
    "Class VI",
    "Class VII",
    "Class VIII",
    "Class IX",
    "Class X",
    "Class XI",
    "Class XII",
  ];

  const optionsPlace = [
    "Coimbatore",
    "Cuddalore",
    "Dindigul",
    "Karur",
    "Kumbakonam",
    "Salem",
    "Sivakasi",
    "Trichy",
  ];

  const handleSelect = (option) => {
    setSelectedClass(option);
    setDropdownOpen(false);
  };

  const handleSelectPlace = (option) => {
    setSelectedPlace(option);
    setDropdownOpenPlace(false);
  };

  return (
    <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 py-8 md:py-12">
          {/* Left Section - Form */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md" id="enquiry-form">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#00488B] mb-6">
              Enquiry Form
            </h2>

            <form className="flex flex-col gap-4" id="reachus-form">
              {/* Name */}
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="border border-[#D9D9D9] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
              />

              {/* Phone */}
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                placeholder="Phone"
                className="border border-[#D9D9D9] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
              />

              {/* Email */}
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="border border-[#D9D9D9] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
              />

              {/* Address */}
              <label htmlFor="address">Address</label>
              <textarea
                placeholder="Address"
                rows={4}
                className="border border-[#D9D9D9] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
              ></textarea>

              {/* DOB */}
              <label htmlFor="dateofbirth">Date of Birth</label>
              <input
                type="date"
                className="border border-[#D9D9D9] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
              />

              {/* Class Dropdown */}
              <label>Seeking Admission for Class</label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full border border-[#D9D9D9] rounded-lg px-4 py-2 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
                >
                  <span>{selectedClass}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {dropdownOpen && (
                  <ul className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                    {options.map((option) => (
                      <li
                        key={option}
                        onClick={() => handleSelect(option)}
                        className={`px-4 py-2 text-gray-700 cursor-pointer hover:bg-[#E8F0FE] ${
                          selectedClass === option ? "bg-[#E8F0FE]" : ""
                        }`}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Place Dropdown */}
              <label>Seeking Admission at</label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setDropdownOpenPlace(!dropdownOpenPlace)}
                  className="w-full border border-[#D9D9D9] rounded-lg px-4 py-2 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
                >
                  <span>{selectedPlace}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      dropdownOpenPlace ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {dropdownOpenPlace && (
                  <ul className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                    {optionsPlace.map((option) => (
                      <li
                        key={option}
                        onClick={() => handleSelectPlace(option)}
                        className={`px-4 py-2 text-gray-700 cursor-pointer hover:bg-[#E8F0FE] ${
                          selectedPlace === option ? "bg-[#E8F0FE]" : ""
                        }`}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* School Name */}
              <label>Name of Current School</label>
              <input
                type="text"
                placeholder="Name of Current School"
                className="border border-[#D9D9D9] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
              />

              {/* Message */}
              <label>Message</label>
              <textarea
                placeholder="Message"
                rows={4}
                className="border border-[#D9D9D9] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
              ></textarea>

              {/* Submit */}
              <button
                type="submit"
                className="bg-[#03284B] text-white rounded-lg py-2 mt-2 hover:bg-[#00398f] transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-10 sm:gap-12">
            {/* Call */}
            <div className="relative reachus-call flex flex-col gap-2 p-6 sm:p-8 bg-[#F9F9F9] rounded-xl">
              <Image
                src={reach_call}
                alt="Reach Call"
                width={50}
                height={50}
                className="absolute -top-7 left-7"
              />
              <h2 className="text-[#242424] text-lg sm:text-xl font-medium">
                Make a Call
              </h2>
              <p className="text-[#242424] text-base">+91 91500 88192</p>
            </div>

            {/* Email */}
            <div className="relative reachus-email flex flex-col gap-2 p-6 sm:p-8 bg-[#9EC4FF] rounded-xl">
              <Image
                src={reach_mail}
                alt="Reach Mail"
                width={50}
                height={50}
                className="absolute -top-7 left-7"
              />
              <h2 className="text-[#242424] text-lg sm:text-xl font-medium">
                Send Email
              </h2>
              <p className="text-[#242424] text-base">
                info@equitasgurukul.org
              </p>
            </div>

            {/* Address */}
            <div className="relative reachus-address flex flex-col gap-2 p-6 sm:p-8 bg-[#F9F9F9] rounded-xl">
              <Image
                src={reach_address}
                alt="Reach Address"
                width={50}
                height={50}
                className="absolute -top-7 left-7"
              />
              <p className="text-[#242424] text-base leading-relaxed w-10/12">
                Equitas Development Initiatives Trust Phase II, 6th Floor,
                610, Spencer Plaza, No. 769, Anna Salai, Chennai - 600 002
              </p>
            </div>

            {/* Image */}
            <div className="w-full">
              <Image
                src={admission}
                alt="Enquiry Form"
                width={552}
                height={535}
                className="rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
