"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import parent_teacher_meeting from "@/assets/schools/background/parent-teacher-meeting.png";

const dropdownData = [
  {
    title: "Parent Teacher Association (PTA)",
    content:
      "The PTA helps foster communication between parents and the school, playing a key role in supporting educational activities and decisions.",
  },
  {
    title: "Parent Teacher Meetings (PTM)",
    content:
      "PTMs are conducted regularly to update parents on student progress, school events, and personalized feedback.",
  },
  {
    title: "Gurukul’s Expectations from Our Parents",
    content:
      "We expect our parents to be actively involved in their child’s learning journey by attending meetings, participating in events, and maintaining open communication with teachers.",
  },
];

export default function ParentTeacherMeeting() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#00488B] py-4 leading-snug sm:leading-tight">
            Parent-Teacher Meeting at Equitas Gurukul Schools
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-black py-4 leading-relaxed">
            Gurukul PTMs enable the parents to know about all the happenings in
            the school and especially how their wards benefit from the learning
            in our schools.
          </p>

          {/* Dropdowns */}
          <div className="flex flex-col gap-4 w-full mt-4 sm:mt-6">
            {dropdownData.map((item, index) => (
              <div
                key={index}
                className="bg-[#5885DD] text-white rounded-lg overflow-hidden shadow-sm"
              >
                {/* Dropdown Header */}
                <button
                  onClick={() => toggleDropdown(index)}
                  className="w-full text-left py-3 sm:py-4 px-4 sm:px-6 flex justify-between items-center focus:outline-none"
                >
                  <span className="text-base sm:text-lg md:text-xl font-medium">
                    {item.title}
                  </span>
                  <motion.span
                    className="text-2xl font-bold"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {openIndex === index ? "−" : "+"}
                  </motion.span>
                </button>

                {/* Dropdown Content */}
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="bg-white text-black px-4 sm:px-6"
                    >
                      <div className="py-3 sm:py-4 text-sm sm:text-base md:text-lg leading-relaxed">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
          <div className="relative w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px]">
            <Image
              src={parent_teacher_meeting}
              alt="Parent Teacher Meeting"
              className="rounded-xl object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
