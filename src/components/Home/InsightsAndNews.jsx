import React from "react";
import Image from "next/image";
import insight1 from "@/assets/home/Insights1.jpg";
import insight2 from "@/assets/home/Insights2.jpg";
import Link from "next/link";

export default function InsightsAndNews() {
  const facilities = [
    {
      image: insight1,
      date: "JUNE 6, 2016",
      description: "ADMISSION, STUDENT",
      title: "The Forum hosts a discussion with Niall Ferguson",
      link: "#",
    },
    {
      image: insight2,
      date: "JUNE 6, 2016",
      description: "HOT, UPDATES",
      title: "Can Biology and Chemistry work to save the world?",
      link: "#",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image only for the top section */}
      <div className="insights-section absolute top-0 left-0 w-full h-[700px] lg:h-[700px] md:h-[380px] z-0"></div>

      {/* Content */}
      <div className="relative z-10 py-32 px-8 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div>
              <p className="text-gray-500 uppercase tracking-wide pb-2">
                Our Latest News
              </p>
              <h2 className="text-4xl font-bold text-[#00488B] leading-tight">
                Visit Our Insights and <br /> latest news
              </h2>
            </div>
            <div className="mt-6 md:mt-0 self-end">
              <Link href="#hero-banner"><button className="cursor-pointer text-gray-700 font-semibold hover:underline">
                VISIT OUR BLOG →
              </button></Link>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden"
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
                  <div className="flex justify-between text-sm text-gray-500 mb-3">
                    <span className="text-gray-400">{facility.date}</span>
                    <span className="text-gray-600">
                      {facility.description}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {facility.title}
                  </h3>
                  <a
                    href={facility.link}
                    className="text-sm font-medium text-gray-600 hover:underline"
                  >
                    READ MORE
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
