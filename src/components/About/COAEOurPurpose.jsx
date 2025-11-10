import React from "react";
import COAEourpurpose from "@/assets/about/COAEourpurpose.png";
import Image from "next/image";

const COAEOurPurpose = () => {
  return (
    <section
      className="goalandmission-container py-20 px-4 md:px-8 lg:px-30"
      id="coaeourpurpose"
    >
      <div className="container mx-auto text-[#00488B]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 leading-tight items-center justify-items-center">
          <div>
            <h2 className="text-5xl sm:text-5xl font-bold">Our Purpose</h2>
            <p className="text-xl py-8 text-black">
              To provide academic assistance to the principals and teachers of
              various Gurukul schools and enhance the quality of education
              imparted to the children, we ensure the implementation of a
              uniform curriculum across all Gurukuls. This ensures that all our
              children receive the same standard of high-quality holistic
              education.
            </p>
          </div>
          <div>
            <Image
              src={COAEourpurpose}
              alt="COAE Our Purpose"
              width={552}
              height={339}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default COAEOurPurpose;
