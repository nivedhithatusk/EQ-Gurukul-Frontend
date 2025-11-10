import React from "react";
import Image from "next/image";
import awardcategories_icon from "@/assets/gurukul_world/awardcategories_icon.svg";
import parentengage2 from "@/assets/gurukul_world/parentengage2.svg";
import parentengage3 from "@/assets/gurukul_world/parentengage3.svg";
import parentengage4 from "@/assets/gurukul_world/parentengage4.svg";

const WhyParentEngageMatters = () => {
  const details = [
    {
      title: "Stronger home-school connection",
      icon: awardcategories_icon,
    },
    {
      title: "Transparent communication",
      icon: parentengage2,
    },
    {
      title: "Active support for student learning",
      icon: parentengage3,
    },
    {
      title: "Community events & volunteering",
      icon: parentengage4,
    },
  ];
  return (
    <section
      className="awardcategories_section"
      id="why_parent_engagement_matters"
    >
      <div className=" py-20 px-4 md:px-8 lg:px-40 ">
        <div className="container mx-auto text-black leading-tight ">
          <h2 className="text-2xl md:text-3xl sm:text-xl lg:text-5xl font-semibold text-center text-[#00488B]">
            Why Parent <br /> Engagement Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 my-12 mt-24 ">
            {details.map((data, index) => (
              <div
                className="bg-[#E1F0FF] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                key={index}
              >
                <div className="flex flex-row items-center gap-8 text-center justify-center">
                  <Image
                    src={data.icon}
                    alt="Why Parent Engage Matters"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                  <h3 className="text-lg font-semibold">{data.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyParentEngageMatters;
