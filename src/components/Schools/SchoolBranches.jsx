"use client";
import React, { useState } from "react";
import Image from "next/image";
import schoolBranchesData from "@/constant/schoolBranchesData";
import { motion } from "framer-motion";

const SchoolBranches = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredBranches =
    activeFilter === "All"
      ? schoolBranchesData
      : schoolBranchesData.filter((b) =>
          b.title.toLowerCase().includes(activeFilter.toLowerCase())
        );

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.97, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <section className="schoolbranches-container">
      <div className=" py-16 px-4 md:px-8 lg:px-30">
        <div className="container mx-auto">
          {/* Heading */}
          <div className="text-5xl font-bold text-[#00488B] text-center">
            <h1>Explore the Best Schools in </h1>
            <h1 className="block mt-8">Equitas Gurukul</h1>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center my-12">
            {[
              "All",
              "Coimbatore",
              "Cuddalore",
              "Dindigul",
              "Karur",
              "Salem",
              "Sivakasi",
              "Trichy",
              "Kumbakonam",
            ].map((branch) => (
              <motion.button
                key={branch}
                onClick={() => setActiveFilter(branch)}
                whileTap={{ scale: 0.97 }}
                className={`cursor-pointer rounded-xl text-[#848484] border border-[#848484] px-8 py-2 m-2 text-base font-medium transition-all duration-200 ${
                  activeFilter === branch
                    ? "bg-[#00488B] text-white shadow-md"
                    : "bg-transparent hover:bg-[#00488B]/10"
                }`}
              >
                {branch}
              </motion.button>
            ))}
          </div>

          {/* Cards */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-self-center"
          >
            {filteredBranches.map((branch, index) => (
              <motion.div
                key={branch.id}
                className="schoolbranches-card p-5 flex flex-col justify-between"
                id={branch.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.25)",
                }}
              >
                <div>
                  <Image
                    src={branch.image}
                    alt={branch.title}
                    className="w-full h-auto object-cover"
                  />
                  <h2 className="text-2xl font-bold my-5">{branch.title}</h2>
                  <p className="text-md my-4">{branch.description}</p>

                  <div className="bg-white p-4 rounded-md schoolbranches-small-card my-8 justify-between">
                    <div className="text-sm font-medium flex flex-col gap-2">
                      <p>Transport: {branch.transport}</p>
                      <p>Admissions: {branch.admissions}</p>
                    </div>
                    <div className="after:block after:bg-[#178F57] after:w-px after:h-20 after:mx-auto after:my-2"></div>
                    <div className="text-sm font-medium flex flex-col gap-2">
                      <p>Kindergarten: {branch.kindergarten}</p>
                      <p>Classes: {branch.classes}</p>
                      <p>Assembly: {branch.assembly}</p>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{
                    scale: 1.04,
                    backgroundColor: "#006CD3",
                    boxShadow: "0 0 12px rgba(0,130,250,0.4)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#0082FA] text-white px-4 py-2 rounded-2xl w-full cursor-pointer mt-auto"
                  onClick={() => (window.location.href = branch.buttonLink)}
                >
                  Know More
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SchoolBranches;