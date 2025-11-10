import Image from "next/image";
import React from "react";
import youngmind_banner from "@/assets/home/youngmind_banner.jpg";
import Link from "next/link";

export default function KindergartenSection() {
  return (
    <section className="py-32 px-8 md:px-16 lg:px-32 mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
        {/* Left: Title */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
            Join us in Enlightening <br /> Young Minds!
          </h2>
          <div className="mt-8">
          <Link href="#hero-banner"><button className="cursor-pointer inline-block border border-black text-black px-15 py-2 rounded-2xl ">Join Us</button></Link>
        </div>
        </div>

        {/* Right: Description */}
        <div>
          <p className="text-black leading-relaxed text-xl">
            Our students are the children of front-line workers and community
            helpers who serve our community and make our world a better place to
            live in. At Equitas Gurukul, we believe that 'education is not a
            privilege, but a fundamental right' and should enable everyone to
            channel their inner potential the right way and achieve their
            dreams, regardless of their economic background.
          </p>
        </div>

        
      </div>
      <div>
        <Image
          src={youngmind_banner}
          alt="Kindergarten Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
