import Link from "next/link";
import React from "react";

export default function AcademicAchievements() {
  return (
    <section className="achievements-section px-4 md:px-8 lg:px-32">
      <div className="max-w-7xl flex flex-col h-full">
        {/* Left Side - Centered Vertically, Left Aligned */}
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-[#00488b] text-[clamp(28px,4vw,52px)] font-semibold leading-tight mb-4">
            Our Academic <br /> Achievements
          </h2>
          <p className="text-[#808080] text-[clamp(16px,2.5vw,32px)] mb-8">
            (2023–2024)
          </p>

          <div className="flex gap-4">
            <Link href="#hero-banner">
              <button className="bg-blue-950 text-white px-8 py-3 rounded-2xl font-semibold cursor-pointer">
                Class XII
              </button>
            </Link>
            <Link href="#hero-banner">
              <button className="text-gray-600 px-8 py-3 rounded-2xl border border-gray-600 font-semibold cursor-pointer">
                Class X
              </button>
            </Link>
          </div>
        </div>

        {/* Right side can go here later */}
        <div className="md:w-1/2" />
      </div>
    </section>
  );
}
