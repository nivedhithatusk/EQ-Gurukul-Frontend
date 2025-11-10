import React from "react";
import alumniclub from "@/assets/alumni_club/alumniclub.png";
import Image from "next/image";
import Link from "next/link";

const AlumniClubContent = () => {
  return (
    <section className="ellipse-background py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-bold text-[#00488B]">
              Equitas Gurukul Alumni Club (EGAC)
            </h2>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed mt-4 text-black">
              Equitas Gurukul is a place of learning where teachers and students
              form an extended family. Insights from a study conducted in August
              2019, while updating the progress of our alumni students from 2017
              and 2018, emphasized the need for a proper system to keep in touch
              with them and guide them as required. Many students were
              struggling to complete courses due to economic reasons or other
              learning challenges. Additionally, as most of our alumni were
              first-generation learners, they lacked appropriate counselling and
              guidance to help them decide on colleges or courses.
            </p>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed my-4 text-[#5885DD]">
              Currently, we have 976 alumni members.
            </p>

            <Link href="#alumniclub_banner">
              <button className="cursor-pointer bg-[#0082FA] text-white text-sm sm:text-base px-6 sm:px-8 py-2 rounded-xl transition hover:bg-[#006fde]">
                Read More
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src={alumniclub}
              alt="Alumni Club Banner"
              width={547}
              height={454}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniClubContent;
