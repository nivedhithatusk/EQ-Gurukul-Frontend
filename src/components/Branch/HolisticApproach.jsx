"use client";

import React from "react";
import Image from "next/image";
import holisticapproach from "@/assets/branch/coimbatore/holisticapproach.png";
import holisticapproach1 from "@/assets/branch/coimbatore/holisticapproach1.png";
import holisticapproach2 from "@/assets/branch/coimbatore/holisticapproach2.png";
import holisticapproach3 from "@/assets/branch/coimbatore/holisticapproach3.png";
import "@/app/globals.css";

const HolisticApproach = ({ id }) => {
  const stories = [
    {
      img: holisticapproach1,
      title:
        "Recent Success Stories: Supporting Students In Achieving Their Goals",
      text: "Here are recent success stories highlighting how our team has strategically supported students",
    },
    {
      img: holisticapproach2,
      title:
        "Recent Success Stories: Supporting Students In Achieving Their Goals",
      text: "Here are recent success stories highlighting how our team has strategically supported students",
    },
    {
      img: holisticapproach3,
      title: "Find A Coach Who Inspires.",
      text: "Here are recent success stories highlighting how our team has strategically supported students",
    },
  ];

  return (
    <section
      className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-48 py-8 md:py-12"
      id={id}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-12">
          {/* Left Side */}
          <div className="flex flex-col relative leading-tight">
            <h1 className="text-[#00488B] text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
              Gurukul's Holistic Approach to Education
            </h1>

            <Image
              src={holisticapproach}
              alt="Holistic Approach"
              width={500}
              height={500}
              className="w-full h-auto object-cover pt-6 md:pt-10 pb-4 md:pb-6"
            />

            <h3 className="text-[#22263E] text-lg sm:text-xl md:text-2xl">
              Recent Success Stories: Supporting Students in Achieving Their
              Goals
            </h3>

            <p className="text-[#4E5269] text-sm sm:text-base md:text-lg py-2 leading-relaxed">
              We share a few of our recent successes — how our team strategized,
              advocated, and delivered results that truly made a difference for
              our clients.
            </p>

            <a href="#" className="text-black underline py-2 font-bold text-sm sm:text-base">
              Read More
            </a>
          </div>

          {/* Right Side - Continuous Marquee */}
          <div
            id="success-stories"
            className="relative h-[400px] sm:h-[480px] md:h-[520px] lg:h-[570px] xl:h-[650px] overflow-hidden group"
          >
            <div className="animate-marquee-vertical group-hover:[animation-play-state:paused] flex flex-col">
              {/* Original Set */}
              {stories.map((story, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6"
                >
                  <div className="col-span-1">
                    <Image
                      src={story.img}
                      alt="Holistic Approach"
                      width={300}
                      height={200}
                      className="object-cover rounded-lg shadow-md w-full h-auto"
                    />
                  </div>
                  <div className="col-span-2">
                    <h4 className="text-[#22263E] text-sm sm:text-base md:text-lg">
                      {story.title}
                    </h4>
                    <p className="text-[#4E5269] text-xs sm:text-sm md:text-base py-2">
                      {story.text}
                    </p>
                    <a
                      href="#"
                      className="text-black underline pt-2 pb-2 underline-offset-2 font-medium text-xs sm:text-sm md:text-base"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}

              {/* Duplicate Set for Seamless Loop */}
              {stories.map((story, index) => (
                <div
                  key={`dup-${index}`}
                  className="grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6"
                >
                  <div className="col-span-1">
                    <Image
                      src={story.img}
                      alt="Holistic Approach"
                      width={300}
                      height={200}
                      className="object-cover rounded-lg shadow-md w-full h-auto"
                    />
                  </div>
                  <div className="col-span-2">
                    <h4 className="text-[#22263E] text-sm sm:text-base md:text-lg">
                      {story.title}
                    </h4>
                    <p className="text-[#4E5269] text-xs sm:text-sm md:text-base py-2">
                      {story.text}
                    </p>
                    <a
                      href="#"
                      className="text-black underline pt-2 pb-2 underline-offset-2 font-medium text-xs sm:text-sm md:text-base"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolisticApproach;
