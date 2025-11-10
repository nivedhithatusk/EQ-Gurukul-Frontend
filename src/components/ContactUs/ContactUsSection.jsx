"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import reach_mail from "@/assets/about/icons/reach_mail.svg";
import reach_address from "@/assets/about/icons/reach_address.svg";
import reach_call from "@/assets/about/icons/reach_call.svg";
import Image from "next/image";

const ContactUsSection = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Parent");

  const options = ["Parent", "Teacher", "Donar", "Well-wisher"];

  const handleSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const addressData = [
    {
      name: "Equitas Gurukul - Coimbatore",
      phone: "+91 9150088192",
      emailid: "admin-coimbatore@equitasgurukul.org",
    },
    {
      name: "Equitas Gurukul - Cuddalore",
      phone: "+91 9150088190",
      emailid: "admin-cuddalore@equitasgurukul.org",
    },
    {
      name: "Equitas Gurukul - Dindigul",
      phone: "+91 9150088187",
      emailid: "admin-dindigul@equitasgurukul.org",
    },
    {
      name: "Equitas Gurukul - Karur",
      phone: "+91 9150088182",
      emailid: "admin-karur@equitasgurukul.org",
    },
    {
      name: "Equitas Gurukul - Kumbakonam",
      phone: "+91 9150088203",
      emailid: "admin-kumbakonam@equitasgurukul.org",
    },
    {
      name: "Equitas Gurukul - Salem",
      phone: "+91 9150088197",
      emailid: "admin-salem@equitasgurukul.org",
    },
    {
      name: "Equitas Gurukul - Sivakasi",
      phone: "+91 9150088206",
      emailid: "admin-sivakasi@equitasgurukul.org",
    },
    {
      name: "Equitas Gurukul - Trichy",
      phone: "+91 9150088195",
      emailid: "admin-trichy@equitasgurukul.org",
    },
  ];

  return (
    <>
      <section className="ellipse-background">
        <div className="container mx-auto">
          <div className="px-8 lg:px-30 sm:px-4 md:px-8 py-16">
            <h1 className="text-5xl font-bold text-[#00488B] text-center">
              We are at your Service!
            </h1>
            <p className="text-xl text-center py-4">
              For any queries, reach out to us
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-16 py-16">
              {/* Left Section */}
              <div className="flex flex-col gap-16">
                {/* Call */}
                <div className="relative reachus-call flex flex-col gap-2 p-8 w-full bg-[#F9F9F9] rounded-xl">
                  <Image
                    src={reach_call}
                    alt="Reach Call"
                    width={55.5}
                    height={47}
                    className="absolute -top-7 left-7"
                  />
                  <h2 className="text-[#242424] text-xl font-medium">
                    Make a Call
                  </h2>
                  <p className="text-[#242424] text-base">+91 91500 88192</p>
                </div>

                {/* Email */}
                <div className="relative reachus-email flex flex-col gap-2 p-8 w-full bg-[#9EC4FF] rounded-xl">
                  <Image
                    src={reach_mail}
                    alt="Reach Mail"
                    width={55.5}
                    height={47}
                    className="absolute -top-7 left-7"
                  />
                  <h2 className="text-[#242424] text-xl font-medium">
                    Send Email
                  </h2>
                  <p className="text-[#242424] text-base">
                    admin-coimbatore@equitasgurukul.org
                  </p>
                </div>

                {/* Address */}
                <div className="relative reachus-address flex flex-col gap-2 p-8 w-full bg-[#F9F9F9] rounded-xl">
                  <Image
                    src={reach_address}
                    alt="Reach Address"
                    width={55.5}
                    height={47}
                    className="absolute -top-7 left-7"
                  />
                  <p className="text-[#242424] text-base leading-relaxed w-10/12">
                    Equitas Development Initiatives Trust Phase II, 6th Floor,
                    610, Spencer Plaza, No. 769, Anna Salai, Chennai - 600 002.
                  </p>
                </div>
              </div>

              {/* Right Section - Form */}
              <div className="bg-[#F3F7FF] p-8 rounded-2xl shadow-sm">
                <h2 className="text-2xl font-semibold text-[#00488B] mb-6">
                  We are on a meaningful learning journey and are happy to
                  receive your feedback and suggestions.
                </h2>
                <form className="flex flex-col gap-4" id="reachus-form">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border border-[#D9D9D9] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="border border-[#D9D9D9] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="border border-[#D9D9D9] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
                  />

                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full border border-[#D9D9D9] rounded-lg px-4 py-2 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
                    >
                      <span>{selectedOption}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>

                    {dropdownOpen && (
                      <ul className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                        {options.map((option) => (
                          <li
                            key={option}
                            onClick={() => handleSelect(option)}
                            className={`px-4 py-2 text-gray-700 cursor-pointer transition hover:bg-[#E8F0FE] ${
                              selectedOption === option ? "bg-[#E8F0FE]" : ""
                            }`}
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="border border-[#D9D9D9] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
                  ></textarea>

                  <button
                    type="submit"
                    className="bg-[#03284B] text-white rounded-lg py-2 mt-2 hover:bg-[#00398f] transition"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="address_table">
        <div className="container mx-auto px-8 lg:px-30 sm:px-4 md:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <thead className="bg-[#03284B] text-white">
                <tr>
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">Phone Number</th>
                  <th className="py-3 px-6 text-left">Address</th>
                </tr>
              </thead>
              <tbody>
                {addressData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`border-t border-gray-200 hover:bg-[#F3F7FF] transition`}
                  >
                    <td className="py-3 px-6">{row.name}</td>
                    <td className="py-3 px-6">{row.phone}</td>
                    <td className="py-3 px-6">{row.emailid}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactUsSection;
