import React from "react";
import Image from "next/image";
import academicchat from "@/assets/home/icons/academic-chat.svg";
import news from "@/assets/home/icons/news.svg";
import student from "@/assets/home/icons/student.svg";
import tuition from "@/assets/home/icons/tuition.svg";
import core from "@/assets/home/icons/core.svg";

export default function WhatSetsUsApart() {
  const features = [
    {
      title: "Centralised Academic Support - CoAE",
      description: "Unified guidance for every learner",
      icon: academicchat,
      iconAlt: "Academic Chat",
      bgColor: "bg-white",
    },
    {
      title: "Owning our Learners from the Age of 3 to 23",
      description: "Nurturing growth from start to success.",
      icon: student,
      iconAlt: "student",
      bgColor: "bg-white",
    },
    {
      title: "Affordable Tuition Fees",
      description: "Quality education within your reach.",
      icon: tuition,
      iconAlt: "Tuition",
      bgColor: "bg-white",
    },
    {
      title: "Individual Attentive Care",
      description: "Personal focus for every student.",
      icon: news,
      iconAlt: "News",
      bgColor: "bg-white",
    },
    {
      title: "Core Values",
      description: "Integrity, excellence, respect, commitment.",
      icon: core,
      iconAlt: "Core",
      bgColor: "bg-white",
    },
  ];

  return (
    <section className="relative py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title with dashed lines */}
        <div className="flex items-center justify-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#00488B] px-8 mx-4">
            What Sets us Apart?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {/* Centralised Academic Support */}
            <div className="wa-card bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col min-h-[14rem]">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Image
                  src={features[0].icon}
                  alt={features[0].iconAlt}
                  width={56}
                  height={56}
                />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2 leading-snug flex flex-grow items-end">
                {features[0].title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                {features[0].description}
              </p>
            </div>

            {/* Individual Attentive Care */}
            <div className="wa-card bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col min-h-[14rem]">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Image
                  src={features[3].icon}
                  alt={features[3].iconAlt}
                  width={56}
                  height={56}
                />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2 leading-snug flex flex-grow items-end">
                {features[3].title}
              </h4>
              <p className="text-sm text-gray-600 flex-grow ">
                {features[3].description}
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <div className="wa-card bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <div className="rounded-lg flex mb-6 pt-8">
                <Image
                  src={features[1].icon}
                  alt={features[1].iconAlt}
                  width={200}
                  height={240}
                  className="w-24 h-auto md:w-36 lg:w-40"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 leading-snug flex flex-grow items-end">
                {features[1].title}
              </h4>
              <p className="text-base text-gray-600 leading-relaxed flex-grow">
                {features[1].description}
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            {/* Affordable Tuition Fees */}
            <div className="wa-card bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col min-h-[14rem]">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Image
                  src={features[2].icon}
                  alt={features[2].iconAlt}
                  width={56}
                  height={56}
                />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2 leading-snug flex flex-grow items-end">
                {features[2].title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                {features[2].description}
              </p>
            </div>

            {/* Core Values */}
            <div className="wa-card bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col min-h-[14rem]">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Image
                  src={features[4].icon}
                  alt={features[4].iconAlt}
                  width={56}
                  height={56}
                />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2 leading-snug flex flex-grow items-end">
                {features[4].title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                {features[4].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
