import React from "react";

const RewardsAndRecognitionsDetails = () => {
  const details = [
    {
      title: "Gurukul Academic Excellence Award",
      description:
        "The Gurukul Academic Excellence Award is presented to students who achieve academic excellence in the Class XII Board examinations. The award is presented during the Annual Gurukul Academic Excellence Award function.",
    },
    {
      title: "Gurukul Diligence Award",
      description:
        "The Gurukul Diligence Award is awarded in recognition of the student’s commitment and discipline to be present in school on all working days and secure 100% attendance for the academic year. This award is presented during the school’s Annual Day.",
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

export default RewardsAndRecognitionsDetails;
