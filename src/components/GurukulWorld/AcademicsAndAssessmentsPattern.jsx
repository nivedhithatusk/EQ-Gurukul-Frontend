import React from "react";
import Image from "next/image";
import arrow from "@/assets/gurukul_world/arrow.svg";

const AcademicsAndAssessmentsPattern = () => {
  return (
    <section className="pattern_section py-8 mb-16">
      <div className="container mx-auto">
        {/* <div className="flex flex-col items-center justify-center text-center py-16 px-4 md:px-8 lg:px-30">
          <h2 className="text-5xl font-bold text-[#00488B]">
            Gurukul Assessment Pattern
          </h2>
          <p className="text-xl py-8 lg:px-60">
            All Gurukuls implement the Continuous and Comprehensive Evaluation
            (CCE) assessment model as guided by the Tamil Nadu State Education
            Department for classes I – VII.
          </p>
        </div> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-20 items-center justify-center px-4 md:px-8 lg:px-30" id="pattern_terms">
            <div className="text-center items-center justify-center">
                <h2 className="text-xl font-bold py-2">Term 1</h2>
                <p className="text-lg py-4">(June–Sept)</p>
                <div className="bg-[#BDE5FF] rounded-bl-2xl rounded-l-2xl p-4 my-4">
                <p>Formative Assessment (FA a)</p>
                </div>
            </div>
            <div className="text-center items-center justify-center">
                <h2 className="text-xl font-bold py-2">Term 2</h2>
                <p className="text-lg py-4">(Oct–Dec)</p>
                <div className="bg-[#BDE5FF] p-4 my-4">
                <p>Formative Assessment (FA b)</p>
                </div>
            </div>
            <div className="text-center items-center justify-center">
                <h2 className="text-xl font-bold py-2">Term 3</h2>
                <p className="text-lg py-4">(Jan–April)</p>
                <div className="bg-[#FFDE77] rounded-br-2xl rounded-r-2xl p-4 my-4">
                <p>Summative Assessment</p>
                </div>
            </div>
            </div> */}

        <h2 class=" font-bold text-[#00488B] text-3xl md:text-4xl lg:text-5xl text-center mb-4">
          Gurukul Assessment Pattern
        </h2>
        <p class=" text-black text-base md:text-lg max-w-4xl mx-auto my-12 text-center">
          All Gurukuls implement the Continuous and Comprehensive Evaluation
          (CCE) assessment model as guided by the Tamil Nadu State Education
          Department for classes I – VII.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-y-4">
          <div className="text-center">
            <p className="font-bold text-xl py-2">Term 1</p>
            <p className="text-lg py-2">(June–Sept)</p>
            <div className="bg-[#BDE5FF] rounded-xl md:rounded-l-xl md:rounded-r-none p-4 flex items-center justify-center h-24 w-56 my-4">
              <p className=" text-black text-center">
                Formative
                <br />
                Assessment (FA a)
              </p>
            </div>
          </div>
          <Image
            src={arrow}
            alt="arrow"
            width={96}
            height={96}
            className="w-24 h-auto rotate-90 md:rotate-0 self-center mt-0 md:mt-20 mx-4 sm:none"
          />
          <div className="text-center">
            <p className="font-bold text-xl py-2">Term 2</p>
            <p className="text-lg py-2">(Oct–Dec)</p>
            <div className="bg-[#BDE5FF] rounded-xl md:rounded-none p-4 flex items-center justify-center h-24 w-56 my-4">
              <p className=" text-black text-center">
                Formative Assessment
                <br />
                (FA b)
              </p>
            </div>
          </div>
          <Image
            src={arrow}
            alt="arrow"
            width={96}
            height={96}
            className="w-24 h-auto rotate-90 md:rotate-0 self-center mt-0 md:mt-20 mx-4 sm:none"
          />
          <div className="text-center">
            <p className="font-bold text-xl py-2">Term 3</p>
            <p className="text-lg py-2">(Jan–April)</p>
            <div className="bg-[#FFDE77] rounded-xl md:rounded-r-xl md:rounded-l-none p-4 flex items-center justify-center h-24 w-56 my-4">
              <p className=" text-black text-center">
                Summative
                <br />
                Assessment
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#EEF4FF] rounded-xl p-8 mt-12 max-w-5xl mx-auto text-center">
          <ul className=" text-black text-base md:text-lg space-y-4 list-disc list-inside">
            <li>
              The term-end exams shall be in September, December and April.
            </li>
            <li>
              The co-scholastic areas assessed are physical education, life
              skills, attitudes and values, and health and wellness education.
            </li>
            <li>
              The school conducts orientations for parents every term to create
              awareness for happy and healthy learning by encouraging rather
              than comparing.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AcademicsAndAssessmentsPattern;
