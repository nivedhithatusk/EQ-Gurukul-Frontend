import React from "react";
import home_banner from "@/assets/hero_banner/home_banner.jpg";

export default function HomeBanner() {
  return (
    <section className="relative h-screen" id="hero-banner">
      <div className="relative h-full">
        <img
          src={home_banner.src}
          alt="Students in classroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 md:pb-32">
          <h1 className="text-white text-5xl md:text-7xl lg:text-[92px] font-poly leading-tight text-center px-4 drop-shadow-2xl">
            Make the Change <br /> Happen
          </h1>
        </div>
      </div>
    </section>
  );
}