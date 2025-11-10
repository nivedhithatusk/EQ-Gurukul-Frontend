import React from "react";
import holisticeducationapproach from "@/assets/about/holisticeducationapproach.png";
import learn from "@/assets/about/learn.png";
import Image from "next/image";

const HolisticEducationApproach = () => {
  return (
    <section>
      <div className="container mx-auto py-10 ">
        <h2 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  text-[#00488B] text-center">
          The Gurukul Holistic Approach
        </h2>
        <p className="text-black text-lg leading-relaxed my-12 lg:px-50 px-10 text-center">
          The curriculum in the Gurukuls is designed in coherence with the
          National and State Educational policy. With structured learning
          experiences, the curriculum ensures that the character and personality
          of every learner are founded on the principles of peace, love and
          compassion, that in turn enhances their cognitive potential and
          grade-level academic achievements.
        </p>
      </div>
      <div className="holistic-approach-container">
        <div className="container mx-auto">
          <Image
            src={holisticeducationapproach}
            alt="Holistic Education Approach"
            width={1400}
            height={449}
            className="object-cover  items-center justify-self-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:py-20 lg:px-20 px-10 py-10">
            <div className="">
              <h3 className="text-5xl font-bold text-[#00488B] leading-tight mb-6">
                Gurukul students <br /> shall learn to
              </h3>
              <ul className="list-disc list-inside text-lg leading-tight space-y-2 pl-6">
                <li className="list-outside">
                  Respect and care for their body.
                </li>
                <li className="list-outside ">
                  Have in-depth core subject competency.
                </li>
                <li className="list-outside">
                  Develop 21st century skills – critical and logical thinking,
                  creativity, collaboration and communication skills.
                </li>
                <li className="list-outside">
                  Respect Nature and be one with it.
                </li>
                <li className="list-outside">
                  Learn life skills to enable them to know themselves, manage
                  their emotions, evade peer pressure, solve problems and
                  overcome situational challenges confidently.
                </li>
                <li className="list-outside">
                  Take ownership of their studies and life.
                </li>
                <li className="list-outside">
                  Be aligned to principles in thought, word and action.
                </li>
                <li className="list-outside">
                  Be compassionate and serve the community as members of one
                  family.
                </li>
              </ul>
            </div>
            <div className="py-10 items-center justify-center flex">
              <Image
                src={learn}
                alt="Holistic Education learn"
                width={552}
                height={416}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolisticEducationApproach;
