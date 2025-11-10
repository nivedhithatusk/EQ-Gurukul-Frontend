import React from "react";
import Image from "next/image";

import admission_icon1 from "@/assets/admission/admission_icon1.svg";
import admission_icon2 from "@/assets/admission/admission_icon2.svg";
import admission_icon3 from "@/assets/admission/admission_icon3.svg";
import admission_icon4 from "@/assets/admission/admission_icon4.svg";

const NurturingSection = () => {
  const icons = [
    {
      img: admission_icon1,
      imgAlt: "Admission Icon 1",
      title: "Holistic Education",
      description: "Academic + Life Skills",
    },
    {
      img: admission_icon2,
      imgAlt: "Admission Icon 2",
      title: "Innovative Learning ",
      description: "Smart classrooms, digital labs",
    },
    {
      img: admission_icon3,
      imgAlt: "Admission Icon 3",
      title: "Inclusive Community",
      description: "RTE & Equal Opportunity",
    },
    {
      img: admission_icon4,
      imgAlt: "Admission Icon 4",
      title: "Modern Infrastructure",
      description: "Safe & sustainable campuses",
    },
  ];

  return (
    <section className="ellipse-background py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00488B] mb-6 leading-tight">
              Nurturing Tomorrow’s Changemakers
            </h2>
            <p className="text-base sm:text-lg text-black leading-relaxed">
              Empowering every child through holistic education, innovation,
              inclusion, and modern learning environments — where excellence
              meets empathy.
            </p>
          </div>
          <div></div>
        </div>

        {/* Icons Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16">
          {icons.map((icon) => (
            <div
              key={icon.title}
              className="grid grid-cols-[1fr_auto] items-center gap-6 border border-black rounded-2xl p-4 sm:p-6"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#00488B] mb-2 sm:mb-4">
                  {icon.title}
                </h3>
                <p className="text-base sm:text-lg text-black leading-relaxed">
                  {icon.description}
                </p>
              </div>
              <div className="flex justify-center sm:justify-end">
                <Image
                  src={icon.img}
                  alt={icon.imgAlt}
                  width={100}
                  height={100}
                  className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NurturingSection;
