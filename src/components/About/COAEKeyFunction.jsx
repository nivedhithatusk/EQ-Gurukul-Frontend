import React from "react";

const COAEKeyFunction = () => {
  const details = [
    {
      title: "Provide instructional support to teachers through Approach Notes",
      description:
        "The CoAE trains all teachers in preparing clear lesson plans, which are the lifeline of every teacher for the effective translation of the curriculum. Teachers are supported with teaching ideas, concept mapping, subject integration, and innovative teaching methodologies, all of which make a class productive and engaging.",
    },
    {
      title: "Academic Performance Analysis Support",
      description:
        "The Centre supports schools by conducting result analysis on students' academic performance and baseline and end-line assessments on English language proficiency for both students and teachers to study their progression over the academic year.",
    },
    {
      title: "Gurukul Student of the Year Award",
      description:
        "This Gurukul Student of the Year award is presented to all outstanding students during the school’s Annual Day in recognition of their excellence in academics and co-curricular activities.",
    },
    {
      title: "Scholarships",
      description:
        "Equitas Gurukul offers Merit Scholarships to students who have passed the class X and XI Board exams with high distinction. The scholarships are awarded in the form of tuition fee concessions from 50% to up to 100% for the next academic year, namely class XI or XII. This policy is reviewed every year.",
    },
  ];
  return (
    <section className="py-20 px-4 md:px-8 lg:px-30">
      <div className="container mx-auto">
        <h2 className="text-5xl sm:text-5xl font-bold text-center text-[#00488B] mb-20">
          CoAE Key Functions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {details.map((detail, index) => (
            <div
              key={index}
              className="bg-[#EEF4FF] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-3xl font-bold text-[#00488B]">
                {detail.title}
              </h3>
              <p className="text-black text-lg leading-relaxed mt-12">
                {detail.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default COAEKeyFunction;
