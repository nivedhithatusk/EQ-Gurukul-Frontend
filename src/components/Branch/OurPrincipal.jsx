"use client";
import React from "react";
import Image from "next/image";

const OurPrincipal = ({ id, title, image, imageAlt, name, steps }) => {
  return (
    <section
      id={id}
      className="relative flex justify-center items-center py-16 pb-20"
    >
      <div className="relative flex justify-center items-center mx-auto w-full ">
        {/* Background card */}
        <div className="relative ourprinciple-container rounded-[24px] shadow-lg flex flex-col md:flex-row items-center md:items-stretch w-full md:w-[90%] p-6 md:p-10 overflow-visible">
          {/* Left side: Image (centered vertically, overlapping top & bottom) */}
          <div className="relative w-full md:w-1/2 flex justify-center md:justify-start mb-35 md:mb-0">
            <div className="relative w-full max-w-[320px] md:max-w-none lg:absolute lg:-top-[25%] lg:-bottom-[25%]">
              <Image
                src={image}
                alt={imageAlt}
                className="object-cover rounded-lg w-full h-full object-center "
              />
              <div className="lg:-mt-20 md:-mt-20 sm:mt-10 m-3  text-gray-800 font-semibold principal_card px-2 lg:px-33 md:px-5 py-2 lg:py-4 md:py-2 lg:left-3 md:left-0 ">
                <span className="text-xl">
                  {name}
                </span>
              </div>
            </div>
          </div>

          {/* Right side: Text Section */}
          <div className="md:w-2/3 w-full flex flex-col justify-between relative z-20 md:ml-10">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-[#00488B] sm:text-center lg:text-left">
                {title}
              </h2>
              <ul className="space-y-3 text-base leading-relaxed list-disc list-inside ml-6">
                {steps.map((step, i) => (
                  <li key={i} className="opacity-90 list-outside">
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPrincipal;
