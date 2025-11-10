"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import mind from "@/assets/home/icons/mind.svg";
import spirit from "@/assets/home/icons/spirit.svg";
import heart from "@/assets/home/icons/heart.svg";
import body from "@/assets/home/icons/body.svg";
import body_sideimg from "@/assets/about/body_sideimg.png";

const HolisticProgramsandActivities = () => {
  const programsData = [
    {
      id: 1,
      title_heading: "Body",
      title_paragraph: "Fitness, Health, and Wellness",
      title_image: body,
      heading: "Fitness, Health and Wellness",
      subtitle: "Gurukul Activities for Physical Development",
      side_image: body_sideimg,
      points1: [
        "The Physical Education Curriculum teaches students to respect and care for their bodies by developing flexibility, endurance, and strength, along with emphasizing the importance of proper nourishment, recreation, rest, and sleep.",
      ],
      points2: [
        "Games Taught: Football, basketball, kabaddi, kho-kho, cricket, volleyball, throwball and athletics.",
        "Yoga for flexibility, composure and concentration.",
        "After-school sports: Silambam, Karate, Judo, Volleyball, Throwball, and Athletics.",
        "Health card for physical wellness",
        "Clinical assessment/ health check-up",
        "‘My plate chart’ for good health and nutrition.",
        "Wellness Wednesdays",
      ],
    },
    {
      id: 2,
      title_heading: "Mind",
      title_paragraph: "Knowledge, Understanding, Application, and Skill",
      title_image: mind,
      heading: "Knowledge, Understanding, Application, and Skill",
      subtitle: "Gurukul Activities for Mind Development",
      side_image: body_sideimg,
      points1: [
        "This involves the acquisition of in-depth knowledge and skills in core subjects, required to achieve one’s educational academic goals and establish careers.",
      ],
      points2: [
        "Teaching matched to meet students’ learning styles.",
        "Tech-enabled classes.",
        "Engaging all students through experiential learning, project and research learning, field visits and seminars.",
        "Continuous evaluation, analysis and bridging of learning gaps.",
        "LSE/ TTT for building right attitude and aptitude through structured curriculum.",
      ],
    },
    {
      id: 3,
      title_heading: "Heart",
      title_paragraph: "Compassion, Kindness, and Teamwork",
      title_image: heart,
      heading: "Compassion, Kindness, and Teamwork",
      subtitle: "Gurukul Activities for Social & Emotional Development",
      side_image: body_sideimg,
      points1: [
        "Gurukuls aim to imbibe humanity, tolerance for fellow humans, and values such as respect, love, empathy, interdependence, teamwork, win-win systems, and a positive attitude in all our children.",
        "We train children to believe in the law of abundance by helping them find their niche. We help children develop their emotional quotient through activities that aid in managing stress, managing emotions, and resisting peer pressure.",
      ],
      points2: [
        "The Gurukul assembly is a life science period.",
        "Career clubs, no-books days, project days, and the celebration of national and internationally significant days provide opportunities for collaboration.",
        "Co-scholastic learning like music, dance and arts & crafts help children to express themselves.",
        "Talent fiestas, sports days and annual days develop social and emotional competencies.",
        "Festival celebrations reinforce secularism, unity and equality.",
      ],
    },
    {
      id: 4,
      title_heading: "Spirit",
      title_paragraph: "Mindfulness, Responsibility, and Service",
      title_image: spirit,
      heading: "Mindfulness, Responsibility, and Service",
      subtitle: "Gurukul Activities for Spiritual Development",
      side_image: body_sideimg,
      points1: [
        "Being mindful of every thought, word, and action is the key to creativity and responsibility. At Gurukul, we endeavour to continuously reinforce the art of living mindfully at work and play.",
        "Teachers plan their lessons to engage children in thinking beyond the concept, connecting it to the learner’s life, thereby making learning a mindful activity focused on bringing about behavioural change.",
      ],
      points2: [
        "Daily assembly activities for character and personality development – Thirukural, value education through skits, mimes, talks, and discussions on current happenings.",
        "Yoga for achieving inner peace.",
        "Rules of life are learnt through sports and games.",
        "Confidence-building activities like talent hunts and events.",
        "Expose children to community service activities like Scouts and Guides, Junior Red Cross, Road Safety Patrol, and NCC.",
        "Create social responsibility by engaging children in medical camps, health and sanitation campaigns and rallies.",
      ],
    },
  ];

  const [selected, setSelected] = useState(1);
  const activeData = programsData.find((p) => p.id === selected);

  return (
    <section className="py-20 px-4 md:px-8 lg:px-30">
      <div className="container mx-auto">
        <h2 className="text-5xl sm:text-5xl font-bold text-[#00488B] ">
          Programs & Activities
        </h2>

        {/* === Selector Cards Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {programsData.map((prog) => (
            <motion.div
              key={prog.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelected(prog.id)}
              className={`cursor-pointer transition-all duration-300 rounded-xl p-6 grid grid-cols-[64px_1fr] gap-4 items-start ${
                selected === prog.id
                  ? "bg-[#A2C2FF] shadow-lg"
                  : "bg-[#EEE] text-black"
              }`}
            >
              <div className="flex justify-center items-start">
                <Image
                  src={prog.title_image}
                  alt={prog.title_heading}
                  width={64}
                  height={64}
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
              </div>
              <div>
                <p className="text-2xl font-bold text-black mb-1">
                  {prog.title_heading}
                </p>
                <p className="text-xl md:text-base opacity-90 leading-snug">
                  {prog.title_paragraph}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* === Animated Program Details === */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeData.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-[#EEF4FF] rounded-xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 items-center"
          >
            {/* Left Column: Text Content */}
            <div>
              {/* points1 heading */}
              <h3 className="font-bold text-[#00488B] text-2xl md:text-3xl mb-4">
                {activeData.heading}
              </h3>

              {/* points1 content */}
              <ul className="text-black text-base md:text-lg leading-relaxed space-y-2 list-disc list-inside ml-6 mb-8">
                {activeData.points1.map((point, i) => (
                  <li key={i} className="opacity-90 list-outside">
                    {point}
                  </li>
                ))}
              </ul>

              {/* points2 heading */}
              {activeData.points2 && (
                <>
                  <h4 className="font-bold text-[#00488B] text-2xl md:text-3xl mb-4">
                    {activeData.subtitle}
                  </h4>
                  <ul className="text-black text-base md:text-lg leading-relaxed space-y-2 list-disc list-inside ml-6">
                    {activeData.points2.map((p, i) => (
                      <li key={i} className="opacity-90 list-outside">
                        {p}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Right Column: Full Height Image */}
            <div className="flex justify-center md:justify-end h-full">
              <Image
                src={activeData.side_image}
                alt={activeData.title_heading}
                width={392}
                height={546}
                className="object-contain md:object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HolisticProgramsandActivities;