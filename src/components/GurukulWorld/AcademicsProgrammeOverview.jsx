"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import programmeoverview from "@/assets/gurukul_world/programmeoverview.svg";
import programmeoverview_card from "@/assets/gurukul_world/programmeoverview_card.svg";

const classData = [
  {
    id: 1,
    title: "Kindergarten (LKG & UKG)",
    heading: "Kindergarten: LKG & UKG",
    subtitle: "Learning through their natural experiences",
    points: [
      "Thematic lesson plans that integrate learning through reading, writing and arithmetic, along with personal, social and emotional development skills, incorporating arts and play.",
      "A typical kindergarten day consists of circle time, morning assembly, focused play learning – for literacy and numeracy, free play – sand and water play, clay molding, play dough, storytelling, games, rhymes, and art.",
      "They learn and develop well in good learning environments and establish a good connection between school and home.",
      "Activity and play-based learning are mapped to the needs of the child.",
    ],
    principles: [
      "Every child is unique.",
      "Children learn through positive relationships.",
      "They learn and develop well in good learning environments and establish a good connection between school and home.",
      "Activity and play-based learning are mapped to the needs of the child.",
    ],
  },
  {
    id: 2,
    title: "Class I – Class II",
    heading: "Class I – II",
    points: [
      "Children learn English, Tamil, Hindi, Math, EVS, Computer Science, and Physical Education.",
      "Students are provided with opportunity for Playing, Learning and Creative Expression.",
      "Students are engaged with different learning styles, benefiting Visual, Auditory and Kinesthetic learners.",
    ],
  },
  {
    id: 3,
    title: "Class III – IV",
    heading: "Class III – IV",
    points: [
      "Children in this block learn English, Tamil, Maths, Science, Social Science, Computer Science and Physical Education as their main subjects.",
      "The co-scholastic activities are music, dance, communicative English, yoga, arts and crafts, life skill education and transcendental meditation.",
      "Concept clarity is provided with visual, aural and kinesthetic (activity-based) teaching methods.",
      "Students are oriented periodically on health and hygiene practices and personal safety – good touch and bad touch, as outlined by the POCSO act.",
    ],
  },
  {
    id: 4,
    title: "Class V – VIII",
    heading: "Class V – VIII",
    points: [
      "Concept clarity is provided by in-depth learning in knowledge, understanding and application.",
      "Innovative teaching methods that involve the whole class interaction.",
      "Subject integration and flip class models are used to make learning more relevant to students.",
      "Research and project-based approaches promote sustained learning.",
      "Along with core subjects, the children are also being taught life skill education, yoga, communicative English and physical education.",
      "Awareness sessions for protection of children from sexual abuse at home and at school (POCSO act).",
    ],
  },
  {
    id: 5,
    title: "Class IX – XII",
    heading: "Class IX – XII",
    points: [
      "Innovative teaching methods that include peer-learning, project-based learning, case studies, research methodologies, flipped class models and multimedia presentations ensure interest and engagement of the senior students.",
      "Goal-setting is a key activity for students of this block.",
      "Competent, well-experienced and result-oriented teachers deliver lessons.",
      "Gifted students and progressive learners are imparted appropriate special coaching.",
      "Recreational activities through games, library periods and yoga classes.",
      "School provides the students with healthy snacks, milk or tea during special classes.",
      "Special programs on gender sensitivity, personal hygiene, sex education and the POCSO act are periodically conducted to ensure that students are safe and healthy at all times.",
    ],
  },
];

const AcademicsProgrammeOverview = () => {
  const [selected, setSelected] = useState(1);
  const activeData = classData.find((c) => c.id === selected);

  return (
    <section>
      <div className="programmeoverview_section py-16 px-4 md:px-8 lg:px-30">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#00488B]">
            Programme Overview
          </h2>

          {/* Class Selector Boxes */}
          <div
            className="flex flex-wrap justify-center my-12 gap-8"
            id="class_section"
          >
            {classData.map((cls) => (
              <motion.div
                key={cls.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelected(cls.id)}
                className={`cursor-pointer transition-all duration-300 rounded-xl px-10 py-4 text-center flex flex-col justify-center items-center ${
                  selected === cls.id
                    ? "bg-[#A2C2FF] shadow-lg"
                    : "bg-[#EEE] text-black"
                }`}
              >
                <Image
                  src={programmeoverview}
                  alt={cls.title}
                  width={64}
                  height={64}
                  className="h-16 md:h-20 w-auto mb-3"
                />
                <p className="text-base md:text-lg leading-tight">
                  {cls.title}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Animated Class Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeData.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              id="class_section_details"
              className="bg-[#EEF4FF] rounded-xl p-6 md:p-10 lg:p-12 flex flex-col md:flex-row items-start gap-8 mt-20"
            >
              <div className="w-full md:w-2/3 lg:w-3/4">
                <h3 className="font-bold text-[#00488B] text-2xl md:text-3xl mb-8">
                  {activeData.heading}
                </h3>

                {/* Kindergarten has subtitle and two lists */}
                {activeData.subtitle ? (
                  <>
                    <p className="font-bold text-black text-lg mb-4">
                      {activeData.subtitle}
                    </p>
                    <ul className="text-black text-base md:text-lg leading-relaxed space-y-2 list-disc list-inside ml-6">
                      {activeData.points.map((point, i) => (
                        <li key={i} className="opacity-90 list-outside">
                          {point}
                        </li>
                      ))}
                    </ul>
                    <h4 className="font-bold text-black text-lg mb-4 mt-8">
                      Our Guiding Principles
                    </h4>
                    <ul className="text-black text-base md:text-lg leading-relaxed space-y-2 list-disc list-inside ml-6">
                      {activeData.principles.map((p, i) => (
                        <li key={i} className="opacity-90 list-outside">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  // Other classes only have bullet points
                  <ul className="text-black text-base md:text-lg leading-relaxed space-y-2 list-disc list-inside ml-6">
                    {activeData.points.map((point, i) => (
                      <li key={i} className="opacity-90 list-outside">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="w-full md:w-1/3 lg:w-1/4 flex justify-center md:justify-end self-end">
                <Image
                  src={programmeoverview_card}
                  alt="Illustration"
                  width={128}
                  height={128}
                  className="w-32 h-auto"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AcademicsProgrammeOverview;
