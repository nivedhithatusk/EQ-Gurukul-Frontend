"use client";

import React from "react";
import Image from "next/image";
import gallery1 from "@/assets/branch/gallery1.png";
import gallery2 from "@/assets/branch/gallery2.png";
import gallery3 from "@/assets/branch/gallery3.png";
import gallery4 from "@/assets/branch/gallery4.png";
import "@/app/globals.css";

const BranchGallery = ({ id }) => {
  const images = [gallery1, gallery2, gallery3, gallery4];

  return (
    <section id={id} className="lg:py-12 py-8">
      <div className="overflow-hidden w-full" id="gallery-images">
        {/* Row 1 - Left to Right */}
        <div
          className="flex flex-row whitespace-nowrap group relative"
          id="gallery-images-1"
        >
          <div className="animate-marquee-ltr group-hover:[animation-play-state:paused] flex items-center">
            {[...images, ...images].map((img, i) => (
              <div key={`ltr-${i}`} className="mx-4 flex-shrink-0">
                <Image
                  src={img}
                  alt={`gallery-${i}`}
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-lg object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div
          className="flex flex-row whitespace-nowrap group relative pt-12"
          id="gallery-images-2"
        >
          <div className="animate-marquee-rtl group-hover:[animation-play-state:paused] flex items-center">
            {[...images, ...images].map((img, i) => (
              <div key={`rtl-${i}`} className="mx-4 flex-shrink-0">
                <Image
                  src={img}
                  alt={`gallery-${i}`}
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-lg object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchGallery;
