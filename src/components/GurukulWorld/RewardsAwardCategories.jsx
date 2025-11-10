import React from "react";
import Image from "next/image";
import awardcategories_icon from "@/assets/gurukul_world/awardcategories_icon.svg";

const RewardsAwardCategories = () => {
  const awardcategories = [
    {
      title: "Academic <br /> Excellence Award",
      description: "For guistanding academic performance",
      icon: awardcategories_icon,
    },
    {
      title: "Diligence Award <br />(100% Attendance)",
      description: "For consistent punctuality and dedication",
      icon: awardcategories_icon,
    },
    {
      title: "Student of the Year",
      description: "For exemplary contributions and character",
      icon: awardcategories_icon,
    },
    {
      title: "Scholarships",
      description: "For meritorious and financially deserving students",
      icon: awardcategories_icon,
    },
  ];
  return (
    <section className="awardcategories_section">
      <div className="schoolinfocontent-container py-20 px-4 md:px-8 lg:px-30">
        <div className="container mx-auto  text-[#00488B]">
          <h2 className="text-4xl sm:text-5xl font-bold text-center">
            Award Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 my-12 mt-24 ">
            {awardcategories.map((awardcategory, index) => (
              <div
                className="bg-[#E1F0FF] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                key={index}
              >
                <div className="flex flex-row items-center gap-8">
                  <Image
                    src={awardcategory.icon}
                    alt="Award Categories"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                  <h3
                    className="text-xl font-semibold"
                    dangerouslySetInnerHTML={{ __html: awardcategory.title }}
                  ></h3>
                </div>
                <p className="text-black mt-6 text-lg">
                  {awardcategory.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsAwardCategories;
