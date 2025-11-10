import React from "react";
import holisticeducation from "@/assets/about/holisticeducation.png";
import Image from "next/image";

const HolisticEducationContent = () => {
  return (
    <section
      className="goalandmission-container py-20 px-4 md:px-8 lg:px-30"
      id="holisticeducation"
    >
      <div className="container mx-auto text-[#00488B]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 leading-tight items-center justify-items-center">
          <div>
            <h2 className="text-5xl sm:text-5xl font-bold">
              Holistic Education
            </h2>
            <p className="text-lg py-8 text-black">
              The Gurukul holistic approach to education addresses the
              development of the person as a whole, extending beyond the
              boundaries of the classroom and transforming the learner at the
              levels of knowledge, attitude, and practice. This is achieved
              through an integrated set of learning experiences that address the
              student's needs in all four aspects of the self, namely – Body
              (Physical), Mind (Mental), Heart (Emotional/Social), and Spirit
              (Spiritual).
            </p>
          </div>
          <div>
            <Image
              src={holisticeducation}
              alt="Holistic Education"
              width={552}
              height={416}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolisticEducationContent;
