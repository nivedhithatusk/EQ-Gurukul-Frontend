import Image from "next/image";
import React from "react";

const AcademicsAndCurriculum = ({
  id,
  four_images,
  two_cards,
  three_cards,
}) => {
  return (
    <section className="mt-20 AcademicsAndCurriculum_container" id={id}>
      <div className="container mx-auto py-16 px-4 sm:px-0 md:px-0 lg:px-16">
        <h1 className="text-5xl font-bold text-[#00488B] text-center">
          Academics & Curriculum
        </h1>
        {/* Desktop Grid (Normal 4 Columns) */}
        <div className="hidden md:grid grid-cols-4 gap-12 items-center py-16">
          {four_images.map((image, index) => {
            const imgSrc = Object.values(image)[0];
            const imgAlt = Object.values(image)[1];
            return (
              <Image
                key={index}
                src={imgSrc}
                alt={imgAlt}
                className="w-full h-auto rounded-lg"
              />
            );
          })}
        </div>

        {/* Mobile Marquee (Auto scroll right → left) */}
        <div className="relative md:hidden overflow-hidden py-16">
          <div className="flex animate-marquee space-x-6">
            {four_images.concat(four_images).map((image, index) => {
              const imgSrc = Object.values(image)[0];
              const imgAlt = Object.values(image)[1];
              return (
                <div key={index} className="flex-shrink-0 w-48">
                  <Image src={imgSrc} alt={imgAlt} className="w-full h-auto " />
                </div>
              );
            })}
          </div>
        </div>

        {/* 2 Column Cards */}
        <div className="grid grid-cols-1 gap-12 items-stretch mt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
          {two_cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-[#3D3AAD] border-1 h-full flex flex-col"
            >
              <h3
                className="text-2xl font-bold text-[#00488B] mb-4"
                dangerouslySetInnerHTML={{ __html: card.title }}
              />
              <ul className=" list-inside text-gray-800 leading-relaxed space-y-2 flex-1">
                {card.steps.map((step, ids) => (
                  <li key={ids} dangerouslySetInnerHTML={{ __html: step }} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 3 Column Cards */}
        <div className="grid grid-cols-1 gap-12 items-stretch mt-12 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
          {three_cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-[#3D3AAD] border-1 h-full flex flex-col"
            >
              <h3
                className="text-2xl font-bold text-[#00488B] mb-4"
                dangerouslySetInnerHTML={{ __html: card.title }}
              />

              <ul className=" list-inside text-gray-800 leading-relaxed space-y-2 flex-1">
                {card.steps.map((step, ids) => (
                  <li key={ids} dangerouslySetInnerHTML={{ __html: step }} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicsAndCurriculum;
