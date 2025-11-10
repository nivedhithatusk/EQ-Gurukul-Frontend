import React from "react";
import parentengagement from "@/assets/gurukul_world/parentengagement.png";
import Image from "next/image";

const ParentEngagementContent = () => {
  return (
    <section className="schoolinfocontent-container py-20 px-4 md:px-8 lg:px-30">
      <div className="container mx-auto text-[#00488B]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 leading-tight items-center">
          <div>
            <h2 className="text-5xl sm:text-5xl font-bold ">
              Parent Engagement & Community
            </h2>
            <p className="text-xl py-8 text-black">
              Gurukul PTMs enable the parents to know about all the happenings
              in the school and especially how their wards benefit from the
              learning in our schools.
            </p>
          </div>
          <div>
            <Image src={parentengagement} alt="Parent Engagement Content" width={557} height={430} className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentEngagementContent;
