import React from "react";
import Link from "next/link";
import Image from "next/image";
import mind from "@/assets/home/icons/mind.svg";
import spirit from "@/assets/home/icons/spirit.svg";
import heart from "@/assets/home/icons/heart.svg";
import body from "@/assets/home/icons/body.svg";
import body_banner from "@/assets/home/body_banner.jpg";
import WhatSetsUsApart from "./WhatSetsUsApart";

export default function GurukulHolisticApproach() {
  const pillars = [
    {
      title: "Body",
      subtitle: "Fitness, Health, and Wellness",
      link: "/body",
      bgColor: "bg-[#FDC65F]",
      image: body_banner,
      icon: body,
      iconAlt: "Body",
      textColor: "text-[#B77700]",
    },
    {
      title: "Mind",
      subtitle: "Knowledge, Understanding, Application, and Skill",
      link: "/mind",
      bgColor: "bg-[#F2B7D4]",
      image: body_banner,
      icon: mind,
      iconAlt: "Mind",
      textColor: "text-[#4B0123]",
    },
    {
      title: "Spirit",
      subtitle: "Mindfulness, Responsibility, and Service",
      link: "/spirit",
      bgColor: "bg-[#3D3AAD]",
      image: body_banner,
      icon: spirit,
      iconAlt: "Spirit",
      textColor: "text-white",
    },
    {
      title: "Heart",
      subtitle: "Compassion, Kindness, and Teamwork",
      link: "/heart",
      bgColor: "bg-[#8CEDBC]",
      image: body_banner,
      icon: heart,
      iconAlt: "Heart",
      textColor: "text-black",
    },
  ];

  return (
    <section className="relative rounded-2xl py-24 px-4 md:px-8 lg:px-32 bg-[#F5F2EB] overflow-hidden holistic-approach">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: Title */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#00488B] leading-tight">
              Gurukul's Holistic Approach
            </h2>
          </div>

          {/* Right: Description */}
          <div>
            <p className="text-black leading-relaxed text-lg">
              Equitas Gurukul paves the way for inspiring travelogues, where
              students traverse a comprehensive journey from the age of 3 to 23.
              It helps quench the learners' thirst for knowledge while
              simultaneously preparing them with necessary life skills. We help
              learners identify their interests and aptitudes to enable them to
              set the right career goals through consistent ambition fuelling,
              career guidance, and counselling, starting from middle school.
            </p>
          </div>
        </div>

        {/* Four Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 my-5">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`h-[350px] ${pillar.bgColor} ${
                pillar.textColor || "text-white"
              } rounded-2xl p-6 relative overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer`}
            >
              {/* Background Image - Hidden by default, visible on hover */}
              {pillar.image && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Icon - Visible by default, hidden on hover */}
              {pillar.icon && (
                <div className="absolute top-4 left-4 bg-opacity-20 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300 z-10">
                  <Image
                    src={pillar.icon}
                    alt={pillar.iconAlt}
                    className="object-contain"
                  />
                </div>
              )}

              {/* Content */}
              <div
                className={`flex flex-col justify-end relative z-10 top-[180px] group-hover:text-white ${
                  pillar.textColor || "text-white"
                } `}
              >
                <h3 className={`text-2xl font-bold mb-2 `}>{pillar.title}</h3>
                <p className={`text-sm mb-4 md:text-xs lg:text-sm `}>
                  {pillar.subtitle}
                </p>
              </div>
              <div
                className={`absolute bottom-4 group-hover:text-white ${
                  pillar.textColor || "text-white"
                } `}
              >
                <Link
                  href={pillar.link}
                  className={`text-sm font-medium inline-flex items-center gap-1hover:gap-2 transition-all hover:underline`}
                >
                  Know more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <WhatSetsUsApart />
    </section>
  );
}
