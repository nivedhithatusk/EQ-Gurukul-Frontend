"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import card1 from "@/assets/admission/admission_card1.svg";

const AdmissionCategories = () => {
  const admissionCategories = [
    {
      title: "Pre-Primary (LKG–UKG)",
      image: card1,
      link: "#enquiry-form",
    },
    {
      title: "Primary (I–V)",
      image: card1,
      link: "#enquiry-form",
    },
    {
      title: "Middle School (VI–VIII)",
      image: card1,
      link: "#enquiry-form",
    },
    {
      title: "Higher Secondary (XI–XII)",
      image: card1,
      link: "#enquiry-form",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
      <div className="container mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00488B] mb-8 sm:mb-10 text-center md:text-left">
          Admission Categories
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {admissionCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ rotateY: 90, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl p-4 sm:p-6 border border-[#8B8B8B] shadow-lg bg-white flex flex-col"
            >
              <div>
                <Image
                  src={category.image}
                  alt={category.title}
                  width={242}
                  height={162}
                  className="object-cover rounded-xl w-full h-auto"
                />
                <h3 className="text-xl sm:text-2xl font-bold my-4 text-center md:text-left">
                  {category.title}
                </h3>
              </div>
              <div className="mt-auto pt-2 sm:pt-4">
                <Link
                  href={category.link}
                  className="text-[#0082FA] underline underline-offset-2 text-sm sm:text-base font-semibold block text-center md:text-left"
                >
                  Apply Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionCategories;
