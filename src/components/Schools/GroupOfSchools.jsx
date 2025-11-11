"use client";

import React from "react";
import Image from "next/image";
import group_of_school_banner from "@/assets/schools/group_of_school_banner.png";

const GroupOfSchools = () => {
  return (
    <section className="bg-white">
      {/* Text Section */}
      <div className="groupofschools-container py-12 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32">
        <div className="container mx-auto">
          <div className="text-center lg:text-left xl:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#00488B] leading-tight">
              <span>Equitas Gurukul Group of</span>
              <span className="block mt-2 sm:mt-3">Schools</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl py-6 sm:py-8 text-[#333] leading-relaxed">
              Equitas Gurukul is an educational initiative by Equitas Development
              Initiatives Trust (EDIT). It enables first-generation learners from
              economically challenged backgrounds to receive quality holistic
              education with excellent infrastructure at affordable fees.
            </p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-30">
        <div className="container mx-auto">
          <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
            <Image
              src={group_of_school_banner}
              alt="group_of_school_banner"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupOfSchools;
