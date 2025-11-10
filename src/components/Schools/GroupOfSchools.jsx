import React from "react";
import Image from "next/image";
import group_of_school_banner from "@/assets/schools/group_of_school_banner.png";

const GroupOfSchools = () => {
  return (
    <>
      <section className="">
        <div className="groupofschools-container py-16 px-4 md:px-8 lg:px-30">
          <div className="container mx-auto">
            <div className="">
              <h1 className="text-5xl font-bold text-[#00488B]">
                <span>Equitas Gurukul Group of</span>
                <span className="block mt-4">Schools</span>
              </h1>
              <p className="text-xl py-8">
                Equitas Gurukul is an educational initiative by Equitas
                Development Initiatives Trust (EDIT). It enables
                first-generation learners from economically challenged
                backgrounds to receive quality holistic education with excellent
                infrastructure at affordable fees.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="py-16 px-4 md:px-8 lg:px-30">
            <div className="container mx-auto">
              <Image
                src={group_of_school_banner}
                alt="group_of_school_banner"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GroupOfSchools;
