import React from "react";
import Image from "next/image";

export default function CommonBanner({ bannerImageSrc, bannerImageAlt, bannerTitle, id }) {
  return (
    <section className="relative" id={id}>
      <Image
        src={bannerImageSrc}
        alt={bannerImageAlt}
        className="w-full object-cover pt-8"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-4 pb-24">
        <h1 className="text-white drop-shadow-lg font-poly text-[50px] leading-tight">
          {bannerTitle}
        </h1> 
      </div>
    </section>
  );
}
