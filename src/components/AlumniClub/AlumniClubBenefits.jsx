"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

import alumnisuccess1 from "@/assets/alumni_club/alumnisuccess1.png";
import stories from "@/assets/alumni_club/stories.svg";

const AlumniClubBenefits = () => {
  const [current, setCurrent] = useState(0);

  const successStories = [
    {
      id: 1,
      image: alumnisuccess1,
      description: [
        "Ms. N. Sneha of Equitas Gurukul – Salem Gurukul has done extremely well for herself, as she now works with Nielson IQ.",
        "A graduate in BBA with an honours diploma in Computer Applications, Sneha today draws an annual CTC of 3.6 lakhs, making it a game-changer for their family.",
        "She makes us and her parents proud. It is very heartening to hear that she is the first graduate in her family. Her father works as a collection agent in a finance company.",
      ],
    },
    {
      id: 2,
      image: alumnisuccess1,
      description: [
        "Mr. R. Karthik from Trichy Gurukul completed his B.Com and is now working at TCS as an Associate Analyst.",
        "He has broken barriers as a first-generation graduate and supports his family financially.",
      ],
    },
    {
      id: 3,
      image: alumnisuccess1,
      description: [
        "Ms. Priya from Dindigul Gurukul has completed her MBA and now runs her own startup in E-commerce, empowering local women artisans.",
      ],
    },
  ];

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % successStories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [successStories.length]);

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
      <div className="container mx-auto">
        {/* Top Two-Column Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-[#EEF4FF] p-6 sm:p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#00488B]">
              Key Activities of the Alumni Club
            </h2>
            <ul className="text-black text-base sm:text-lg leading-relaxed space-y-2 list-disc list-inside ml-4 sm:ml-6 py-4">
              <li>
                To provide counselling, guidance and required assistance to all
                our students for the right choice of UG course and colleges.
              </li>
              <li>
                Conduct quarterly orientations to enhance employability skills.
              </li>
              <li>Guide Alumni to pursue good PG courses.</li>
              <li>
                To guide Alumni to good job fairs for placement, after they
                complete their UG or PG.
              </li>
              <li>
                To guide Alumni aspiring for government jobs to study for public
                service examinations.
              </li>
            </ul>
          </div>

          <div className="bg-[#EEF4FF] p-6 sm:p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#00488B]">
              Fructification of Equitas Gurukul Mission
            </h2>
            <ul className="text-black text-base sm:text-lg leading-relaxed space-y-2 list-disc list-inside ml-4 sm:ml-6 py-4">
              <li>
                The year 2022 has been a milestone year for Equitas Gurukul, as
                our alumni batches of 2017 and 2018 have successfully completed
                their UG courses. Around 20 alumni have been successfully placed
                in careers and have started to support their families
                financially.
              </li>
            </ul>
          </div>
        </div>

        {/* Alumni Success Stories */}
        <div className="mt-10" id="alumnisuccessstories">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00488B] py-6">
            Alumni Success Stories
          </h2>

          {/* Outer wrapper allows image to overflow */}
          <div className="relative">
            {/* Card */}
            <div className="bg-[#EEF4FF] rounded-2xl shadow-lg p-6 sm:p-8 relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={successStories[current].id}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12 items-center"
                >
                  <div className="col-span-1 flex justify-center">
                    <Image
                      src={successStories[current].image}
                      alt="Alumni Success"
                      width={258}
                      height={274}
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="col-span-3">
                    <ul className="text-black text-base sm:text-lg leading-relaxed space-y-2 list-disc list-inside ml-4 sm:ml-6 py-4">
                      {successStories[current].description.map((d, i) => (
                        <li key={i} className="list-outside">{d}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {successStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === current ? "bg-[#00488B] w-6" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            <Image
              src={stories}
              alt="stories"
              width={99}
              height={99}
              className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 object-contain z-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniClubBenefits;
