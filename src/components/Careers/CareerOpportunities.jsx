"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

const CareerOpportunities = () => {
  const [dropdowns, setDropdowns] = useState({
    experience: false,
    location: false,
    category: false,
  });

  const [selected, setSelected] = useState({
    experience: "Select Experience Level",
    location: "Select Location",
    category: "Select Category",
  });

  const experienceOptions = ["Fresher", "1-3 Years", "3-5 Years", "5+ Years"];
  const locationOptions = ["Chennai", "Coimbatore", "Madurai", "Bangalore"];
  const categoryOptions = [
    "Teaching",
    "Administration",
    "Finance",
    "Support Staff",
  ];

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSelect = (key, value) => {
    setSelected((prev) => ({
      ...prev,
      [key]: value,
    }));
    setDropdowns((prev) => ({
      ...prev,
      [key]: false,
    }));
  };

  return (
    <section className="py-16 px-4 lg:px-16 ellipse-background">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-[#00488B] text-center mb-10">
          Career Opportunities
        </h2>

        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-6xl mx-auto flex flex-col gap-8 justify-center items-center">
          {/* Search Bar */}
          <div className="flex justify-center relative w-full md:w-1/2 mx-auto">
            <input
              type="text"
              placeholder="Search for jobs..."
              className="w-full bg-[#E6E5E5] rounded-lg pl-4 pr-10 py-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#00488B]"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 17 17"
              fill="none"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#1C336A] cursor-pointer"
            >
              <g clipPath="url(#clip0_3248_182)">
                <path
                  d="M16.7676 14.699L13.4572 11.3887C13.3078 11.2393 13.1053 11.1562 12.8928 11.1562H12.3516C13.268 9.98418 13.8125 8.50996 13.8125 6.90625C13.8125 3.09121 10.7213 0 6.90625 0C3.09121 0 0 3.09121 0 6.90625C0 10.7213 3.09121 13.8125 6.90625 13.8125C8.50996 13.8125 9.98418 13.268 11.1562 12.3516V12.8928C11.1562 13.1053 11.2393 13.3078 11.3887 13.4572L14.699 16.7676C15.0111 17.0797 15.5158 17.0797 15.8246 16.7676L16.7643 15.8279C17.0764 15.5158 17.0764 15.0111 16.7676 14.699ZM6.90625 11.1562C4.55879 11.1562 2.65625 9.25703 2.65625 6.90625C2.65625 4.55879 4.55547 2.65625 6.90625 2.65625C9.25371 2.65625 11.1562 4.55547 11.1562 6.90625C11.1562 9.25371 9.25703 11.1562 6.90625 11.1562Z"
                  fill="#1C336A"
                />
              </g>
              <defs>
                <clipPath id="clip0_3248_182">
                  <rect width="17" height="17" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Dropdowns Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Experience Dropdown */}
            <Dropdown
              label="Experience Level"
              options={experienceOptions}
              value={selected.experience}
              open={dropdowns.experience}
              onToggle={() => toggleDropdown("experience")}
              onSelect={(val) => handleSelect("experience", val)}
            />

            {/* Location Dropdown */}
            <Dropdown
              label="Location"
              options={locationOptions}
              value={selected.location}
              open={dropdowns.location}
              onToggle={() => toggleDropdown("location")}
              onSelect={(val) => handleSelect("location", val)}
            />

            {/* Category Dropdown */}
            <Dropdown
              label="Categories"
              options={categoryOptions}
              value={selected.category}
              open={dropdowns.category}
              onToggle={() => toggleDropdown("category")}
              onSelect={(val) => handleSelect("category", val)}
            />

            {/* View Jobs Button */}
            <div className="flex lg:col-span-1 items-end md:col-span-3 justify-center md:justify-self-center">
              <button className="bg-[#00488B] text-white font-medium px-8 py-3 rounded-lg hover:bg-[#0066CC] transition w-full">
                View Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Dropdown = ({ label, options, value, open, onToggle, onSelect }) => (
  <div className="relative">
    <h3 className="text-black font-semibold mb-2">{label}</h3>
    <button
      type="button"
      onClick={onToggle}
      className="w-full border border-gray-300 rounded-lg px-4 py-2 text-left bg-white flex justify-between items-center hover:border-[#00488B] focus:outline-none focus:ring-2 focus:ring-[#00488B]"
    >
      <span>{value}</span>
      <svg
        className={`w-5 h-5 transition-transform duration-200 ${
          open ? "rotate-180" : ""
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    {open && (
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg"
      >
        {options.map((option) => (
          <li
            key={option}
            onClick={() => onSelect(option)}
            className={`px-4 py-2 cursor-pointer hover:bg-[#E8F0FE] ${
              value === option ? "bg-[#E8F0FE]" : ""
            }`}
          >
            {option}
          </li>
        ))}
      </motion.ul>
    )}
  </div>
);

export default CareerOpportunities;
