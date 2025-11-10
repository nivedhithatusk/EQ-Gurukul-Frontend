"use client";

import React from "react";
import programs from "@/assets/branch/coimbatore/programs.png";
import Image from "next/image";

const Programs = ({ id }) => {
  return (
    <section
      id={id}
      className="py-8 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-48 bg-white"
    >
      <div className="container mx-auto">
        {/* Title */}
        <h2
          className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
            font-bold text-[#00488B] text-center 
            max-w-[90%] lg:max-w-5xl xl:max-w-7xl mx-auto leading-snug
          "
        >
          Futuristic Curriculum and Academic Programs in Equitas Gurukul -
          Coimbatore
        </h2>

        {/* Grid Section */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 
            gap-8 sm:gap-10 md:gap-12 xl:gap-16 
            items-center py-10 sm:py-12 md:py-16
          "
        >
          {[
            "Join us for Yoga Day at Gurukul Academy—connect and relax!",
            "Public speaking at Gurukul School, ensuring kids communicate and articulate",
            "⁠Activity based learning at Gurukul School",
            "⁠Well rounded sports curriculum for expert guidance at every sport",
          ].map((text, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center justify-center rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300"
            >
              <Image
                src={programs}
                alt={`Program ${i + 1}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              <p
                className="
                  absolute bottom-4 sm:bottom-6 md:bottom-10 left-3 sm:left-5 
                  text-white font-semibold 
                  text-sm sm:text-base md:text-lg lg:text-2xl 
                  pr-4 sm:pr-8 md:pr-20 lg:pr-40
                  drop-shadow-md
                "
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
