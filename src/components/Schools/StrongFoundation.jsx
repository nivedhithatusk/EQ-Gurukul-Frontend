"use client";

import React from "react";
import Image from "next/image";
import card1 from "@/assets/schools/card1.jpg";
import card2 from "@/assets/schools/card2.jpg";

export default function StrongFoundation() {
  const facilities = [
    {
      image: card1,
      title: "Kindergarten Curriculum",
      points: [
        "Conceptual Learning through play",
        "Literacy & Numeracy foundation",
        "Thematic, experiential activities",
        "Motor skill & social development",
        "Environmental awareness",
      ],
    },
    {
      image: card2,
      title: "Primary Curriculum (Classes I – V)",
      points: [
        "Literacy & Language Skills (English & Tamil)",
        "Mathematics",
        "Environmental Science",
        "Regional culture & values",
        "Creative arts & physical education",
      ],
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image section */}
      <div className="strongfoundation-section absolute top-0 left-0 w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[700px] z-0"></div>

      {/* Content */}
      <div className="relative z-10 py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="px-2 sm:px-8 md:px-16 lg:px-24 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#00488B] leading-snug sm:leading-tight">
              Building a Strong Foundation with the Tamil Nadu State Board
              Curriculum
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 md:gap-16 lg:gap-20 pt-10 sm:pt-14 md:pt-20">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="strongfoundation-card bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Image section */}
                <div className="relative h-[220px] sm:h-[260px] md:h-[300px] lg:h-[380px] xl:h-[420px]">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text section */}
                <div className="p-6 sm:p-8 md:p-10 bg-white">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#178F57] mb-3">
                    {facility.title}
                  </h3>
                  <ul className="list-disc list-inside text-[#545454] text-base sm:text-lg space-y-1.5 sm:space-y-2">
                    {facility.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
