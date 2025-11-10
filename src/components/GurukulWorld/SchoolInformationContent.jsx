import React from "react";
import Image from "next/image";
import schoolinfocontent_banner from "@/assets/gurukul_world/schoolinfocontent_banner.png";

const SchoolInformationContent = () => {
  return (
    <section className="">
      <div className="schoolinfocontent-container py-16 px-4 md:px-8 lg:px-30">
        <div className="container mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#00488B]">School Information</h2>
            <p className="text-xl leading-relaxed mt-4">Essential details you need – timings, uniforms, fees, conduct</p>
            <Image src={schoolinfocontent_banner} alt="School Information Banner" width={500} height={500} className="w-full h-full object-cover mt-10" />
        </div>
      </div>
    </section>
  );
};

export default SchoolInformationContent;
