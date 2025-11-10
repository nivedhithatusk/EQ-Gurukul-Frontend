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
      {/* Background image only for the top section */}
      <div className="strongfoundation-section absolute top-0 left-0 w-full h-[700px] lg:h-[700px] md:h-[380px] z-0"></div>

      {/* Content */}
      <div className="relative z-10 py-32 px-8 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="px-36 py-4 justify-content-center items-center text-center">
            <h2 className="text-5xl font-bold text-[#00488B] leading-16">
              Building a Strong Foundation with the Tamil Nadu State Board
              Curriculum
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-20 pt-20">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="strongfoundation-card bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Image part overlaps background */}
                <div className="relative h-[400px] md:h-[300px] lg:h-[400px]">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text part — no background */}
                <div className="p-10 bg-white">
                  <h3 className="text-2xl font-semibold text-[#178F57] mb-3">
                    {facility.title}
                  </h3>
                  <ul className="list-disc list-inside text-[#545454] text-lg">
                    <li>{facility.points[0]}</li>
                    <li>{facility.points[1]}</li>
                    <li>{facility.points[2]}</li>
                    <li>{facility.points[3]}</li>
                    <li>{facility.points[4]}</li>
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
