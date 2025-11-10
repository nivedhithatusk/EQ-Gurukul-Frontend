import React from "react";
import Image from "next/image";
import events1 from "@/assets/home/events1.jpg";
import events2 from "@/assets/home/events2.jpg";
import events3 from "@/assets/home/events3.jpg";
import Link from "next/link";

export default function EventsSection() {
  const facilities = [
    {
      image: events1,
      date: "7 January 2020",
      title: "Reunion Event : Kingster’s Alumni Golf Tour",
      link: "#",
    },
    {
      image: events2,
      date: "1 January 2020",
      title: "Kingster’s Alumni Hot Air Ballon Trip in Turkey",
      link: "#",
    },
    {
      image: events3,
      date: "17 December 2019",
      description: "HOT, UPDATES",
      title: "Fintech & Key Investment Conference",
      link: "#",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image only for the top section */}
      <div className="events-section absolute top-0 left-0 w-full h-[700px] lg:h-[700px] md:h-[380px] z-0"></div>

      {/* Content */}
      <div className="relative z-10 py-32 px-8 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div>
              <h2 className="text-4xl font-bold text-[#00488B] leading-tight">
                Latest Events
              </h2>
            </div>
            <div className="mt-6 md:mt-0 self-end">
              <Link href="#hero-banner"><button className="cursor-pointer text-gray-700 font-semibold hover:underline">
                VIEW ALL EVENTS →
              </button></Link>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {facility.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
