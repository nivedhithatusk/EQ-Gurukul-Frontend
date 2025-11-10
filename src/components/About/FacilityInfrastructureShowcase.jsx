"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import facility from "@/assets/about/facility.png";

const FacilityInfrastructureShowcase = () => {
  const facilities = [
    {
      id: 1,
      title: "Infrastructure",
      description:
        "Our Gurukuls are designed with best-in-class infrastructure as per the regulatory norms of the Tamil Nadu State Education Department, providing a safe and conducive environment for happy learning.",
      image: [facility, facility, facility],
      points: [""],
    },
    {
      id: 2,
      title: "Classrooms",
      description:
        "Gurukul classrooms are built in adherence to the Tamil Nadu Government’s norms.",
      image: [facility, facility],
      points: [
        "Spacious, sunlit and well-ventilated rooms suitable for group activities and individual desk work.",
        "Good learning environment with display boards, wide chalkboards, bookshelves and school bag racks.",
      ],
    },
    {
      id: 3,
      title: "Science Labs",
      description:
        "Teaching science at Gurukul is through experiential learning methods.",
      image: [facility, facility],
      points: [
        "Well-equipped separate labs for Physics, Chemistry and Biology.",
        "Students conduct experiments individually and learn from them.",
        "Ergonomically designed in bright colours, as per lab safety norms.",
      ],
    },
    {
      id: 4,
      title: "Computer Science Lab",
      description:
        "Our computer labs enable our students to touch base with the tech world.",
      image: [facility, facility],
      points: [
        "Full-fledged computer lab with internet and LAN connection.",
        "Each lab has 32 computer systems with licensed versions of computer applications and software.",
        "The labs enable students to compile and run coded programs, as per their academic curriculum.",
        "Supports learners in their research projects and examination preparation.",
      ],
    },
    {
      id: 5,
      title: "Maths Lab",
      description:
        "Learning Math in Gurukuls is made fun and easy for students.",
      image: [facility, facility],
      points: [
        "Individual Math kits allow children to learn abstract concepts.",
        "Algebraic identities, addition and subtraction through grouping of tens, and more are easily learnt using Maths kits and activities.",
      ],
    },
    {
      id: 6,
      title: "Restrooms",
      description:
        "Health and hygiene are the primary physical needs of students and staff.",
      image: [facility, facility],
      points: [
        "Clean and sanitised washrooms.",
        "Separate facilities for girls and boys on each floor with continuous water supply.",
        "Girls’ restrooms equipped with incinerators for proper sanitary waste disposal.",
      ],
    },
    {
      id: 7,
      title: "Library",
      description:
        "The Gurukul library is a treasure house of books, periodicals, and encyclopaedias.",
      image: [facility, facility],
      points: [
        "Includes popular children’s and educational book series.",
        "Updated annually with new books and materials.",
        "A great recreational space for all readers.",
      ],
    },
    {
      id: 8,
      title: "Digital Classrooms",
      description: "Education through audio-visuals helps accelerate learning.",
      image: [facility, facility],
      points: [
        "Students learn through simulations, case studies and real-life instances of concept applications.",
        "Enhances clarity and reasoning in varied contexts.",
      ],
    },
    {
      id: 9,
      title: "Play Area and Playground",
      description:
        "Physical fitness is the foundation on which all learning is developed.",
      image: [facility, facility],
      points: [
        "Playgrounds with safe, level ground and modern equipment.",
        "Dedicated basketball and volleyball courts.",
        "Special kindergarten play area for motor skills development.",
      ],
    },
    {
      id: 10,
      title: "Auditorium",
      description: "All the world’s a stage and we are merely players.",
      image: [facility, facility],
      points: [
        "A vast open auditorium encouraging young talent to perform and grow.",
      ],
    },
    {
      id: 11,
      title: "STEM LAB",
      description: "Spacious and well-equipped STEM labs on campus.",
      image: [facility, facility],
      points: [
        "Ignites passion for science, technology, engineering, and math.",
        "Fosters hands-on learning and critical problem-solving.",
      ],
    },
    {
      id: 12,
      title: "Language Lab",
      description:
        "Augmenting English language proficiency through immersive tools.",
      image: [facility, facility],
      points: [
        "Modern, tech-enabled lab for interactive learning.",
        "Individual stations offering immersive experiences.",
        "Tools for tracking and improving student progress.",
      ],
    },
    {
      id: 13,
      title: "Safety & Security",
      description: "Crucial components of child safety protocols include:",
      image: [facility, facility],
      points: [
        "Proactive emergency measures and secure environments.",
        "CCTV surveillance in key areas.",
        "Fire extinguishers on every floor.",
        "Trained security guards working round the clock.",
      ],
    },
  ];

  const [selected, setSelected] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const activeFacility = facilities.find((f) => f.id === selected);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % activeFacility.image.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeFacility.image.length]);

  const handlePrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? activeFacility.image.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % activeFacility.image.length);
  };

  return (
    <section className="goalandmission-container py-16 px-4 md:px-8 lg:px-30">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-[#00488B] ">
          Facility Showcase
        </h2>

        {/* === Selector Cards Grid === */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-12 ">
          {facilities.map((facility) => (
            <motion.div
              key={facility.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelected(facility.id)}
              className={`cursor-pointer transition-all duration-300 rounded-3xl px-6 py-3 text-center font-semibold capitalize ${
                selected === facility.id
                  ? "bg-[#A2C2FF] text-black shadow-md border border-[#D6D6D6]"
                  : "bg-[#F2F2F2] text-[#8B8B8B] hover:bg-[#eeebeb] border border-[#8B8B8B]"
              }`}
            >
              {facility.title}
            </motion.div>
          ))}
        </div>

        {/* === Animated Details Section === */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFacility.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-[#EEF4FF] rounded-xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 items-center facilityinfrastructure-section"
          >
            {/* === Left Side: Text === */}
            <div>
              <h3 className="font-bold text-[#00488B] text-2xl md:text-3xl mb-4">
                {activeFacility.title}
              </h3>

              <p className="text-black text-base md:text-lg leading-relaxed mb-6">
                {activeFacility.description}
              </p>

              {activeFacility.points && activeFacility.points.length > 0 && (
                <ul className="text-black text-base md:text-lg leading-relaxed space-y-2 list-disc list-inside ml-6">
                  {activeFacility.points.map(
                    (point, i) =>
                      point && (
                        <li key={i} className="opacity-90 list-outside">
                          {point}
                        </li>
                      )
                  )}
                </ul>
              )}
            </div>

            {/* === Right Side: Sliding Image === */}
            <div className="flex flex-col items-center md:items-end h-full">
              <div className="relative flex justify-center h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="inset-0"
                  >
                    <Image
                      src={
                        activeFacility.image[currentImage] ||
                        activeFacility.image[0]
                      }
                      alt={activeFacility.title}
                      width={392}
                      height={546}
                      className="object-contain md:object-cover rounded-lg shadow-md h-full"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* === Dotted Navigation Below Image === */}
              <div className="flex items-center justify-center gap-4 mt-6 md:pr-40 lg:pr-40">
                {activeFacility.image.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                      index === currentImage
                        ? "bg-[#00488B] scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FacilityInfrastructureShowcase;
