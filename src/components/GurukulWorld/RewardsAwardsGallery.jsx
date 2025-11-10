import React from "react";
import Image from "next/image";
import awardsgallery1 from "@/assets/gurukul_world/awardsgallery1.png";
import awardsgallery2 from "@/assets/gurukul_world/awardsgallery2.png";
import awardsgallery3 from "@/assets/gurukul_world/awardsgallery3.png";
import awardsgallery4 from "@/assets/gurukul_world/awardsgallery4.png";
import awardsgallery5 from "@/assets/gurukul_world/awardsgallery5.png";

const RewardsAwardsGallery = () => {
  const awardsgallery = [
    {
      image: awardsgallery1,
      alt: "Awards Gallery 1",
    },
    {
      image: awardsgallery2,
      alt: "Awards Gallery 2",
    },
    {
      image: awardsgallery3,
      alt: "Awards Gallery 3",
    },
    {
      image: awardsgallery4,
      alt: "Awards Gallery 4",
    },

    {
      image: awardsgallery5,
      alt: "Awards Gallery 5",
    },
  ];
  return (
    <section className="">
      <div className=" px-4 md:px-8 lg:px-30">
        <div className="container mx-auto text-[#00488B]">
          <h2 className="text-4xl sm:text-5xl font-bold">Awards Gallery</h2>
          <div
            className="flex flex-row whitespace-nowrap group relative pt-20 pb-12"
            id="gallery-images-2"
          >
            <div className="animate-marquee-rtl group-hover:[animation-play-state:paused] flex items-center">
              {[...awardsgallery, ...awardsgallery].map((img, i) => (
                <div key={`rtl-${i}`} className="mx-4 flex-shrink-0">
                  <Image
                    src={img.image}
                    alt={img.alt}
                    width={264}
                    height={204}
                    className="rounded-2xl shadow-lg object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsAwardsGallery;
