import React from "react";
import Image from "next/image";
import timeline1 from "@/assets/gurukul_world/timeline1.svg";
import timeline2 from "@/assets/gurukul_world/timeline2.svg";
import timeline3 from "@/assets/gurukul_world/timeline3.svg";
import timeline_horizontal from "@/assets/gurukul_world/timeline_horizontal.svg";

const ParentEngagementTimeline = () => {
  return (
    <section
      id="section-timeline"
      className="parentengagement_timeline_section px-4 md:px-8 lg:px-40 pb-16"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold text-[#00488B] leading-normal mb-16 md:mb-24">
          Engagement <br /> Timeline
        </h2>

        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start sm:gap-0 gap-20 text-center text-black relative">
        {/* Begin of Term */}
          <div className="relative flex flex-col items-center">
            <div className="mb-4">
              <Image
                src={timeline1}
                alt="Begin of term icon"
                width={40}
                height={32}
              />
            </div>
            <h3 className="font-bold text-lg md:text-xl mb-1">Begin of term</h3>
            <p className="text-base md:text-lg pt-4">
              Orientation &amp; Welcome Workshop
            </p>
          </div>

          {/* Connector */}
          <div className="hidden sm:block">
            <Image
              src={timeline_horizontal}
              alt="Timeline connector"
              width={280}
              height={4}
              className="pt-5.5"
            />
          </div>

          {/* Mid-term */}
          <div className="relative flex flex-col items-center">
            <div className="mb-4">
              <Image
                src={timeline2}
                alt="Mid-term icon"
                width={40}
                height={32}
              />
            </div>
            <h3 className="font-bold text-lg md:text-xl mb-1">Mid-term</h3>
            <p className="text-base md:text-lg pt-4">
              Parent-Teacher interaction &amp; feedback
            </p>
          </div>

          {/* Connector */}
          <div className="hidden sm:block">
            <Image
              src={timeline_horizontal}
              alt="Timeline connector"
              width={280}
              height={4}
              className="pt-5.5"
            />
          </div>

          {/* Term-end */}
          <div className="relative flex flex-col items-center">
            <div className="mb-4">
              <Image
                src={timeline3}
                alt="Term-end icon"
                width={40}
                height={32}
              />
            </div>
            <h3 className="font-bold text-lg md:text-xl mb-1">Term-end</h3>
            <p className="text-base md:text-lg pt-4">
              Student/Parent showcase &amp; review.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentEngagementTimeline;
