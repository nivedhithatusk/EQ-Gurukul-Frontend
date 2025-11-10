"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import parent_teacher_meeting from "@/assets/schools/background/parent-teacher-meeting.png";
import Image from "next/image";

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

const ParentTeacherMeeting = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-30">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col items-center justify-center pr-40">
          <h2 className="text-5xl font-medium text-[#00488B] py-8 leading-16">
            Parent-Teacher Meeting at Equitas Gurukul Schools
          </h2>
          <p className="text-lg py-8 text-black">
            Gurukul PTMs enable the parents to know about all the happenings in
            the school and especially how their wards benefit from the learning
            in our schools.
          </p>

          <div className="flex flex-col gap-4 w-full">
            {dropdownData.map((item, index) => (
              <div key={index} className="bg-[#5885DD] text-white rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="w-full text-left py-2 px-4 flex justify-between items-center focus:outline-none"
                >
                  {item.title}
                  <motion.span
                    className="text-xl"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {openIndex === index ? "−" : "+"}
                  </motion.span>
                </button>

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
                      className="bg-white text-black px-4"
                    >
                      <div className="py-4">{item.content}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Image
            src={parent_teacher_meeting}
            alt="parent_teacher_meeting"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default ParentTeacherMeeting;
