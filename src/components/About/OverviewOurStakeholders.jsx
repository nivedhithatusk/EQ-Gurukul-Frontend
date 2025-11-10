import Image from "next/image";
import React from "react";
import doublequotes from "@/assets/about/icons/doublequotes.svg";
import stakeholders_banner from "@/assets/about/stakeholders_banner.jpg";
import Link from "next/link";

const OurStakeholders = () => {
  return (
    <>
      <section className=" px-8 lg:px-30 sm:px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold bg-[linear-gradient(137deg,_#06409B_0%,_#901D25_41.02%)] text-center bg-clip-text text-transparent">
            Hear from our Stakeholders!
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-16 py-16">
            <div className="stakeholder-card justify-center items-center bg-[#F1F1F1] rounded-xl p-6">
              <Image
                src={doublequotes}
                alt="Stakeholder 1"
                width={32}
                height={28}
              />
              <p className="text-lg text-black pt-4 ">
                “We are exceptionally pleased with the wide range of activities
                organized by the school, which cater to the physical, social,
                and intellectual development of the children. As a parent, I
                always feel welcomed."
              </p>
              <p className="text-md italic pt-4 text-[#36428B] font-bold">
                Aruna SivakumarM/o Sruthi, VIII & Abay, IV Cuddalore Gurukul
              </p>
            </div>
            <div className="stakeholder-card justify-center items-center bg-[#F1F1F1] rounded-xl p-6">
              <Image
                src={doublequotes}
                alt="Stakeholder 1"
                width={32}
                height={28}
              />
              <p className="text-lg text-black pt-4 ">
                “Our daughter has been studying in this school for eight years.
                She is an all-rounder. The students are adeptly trained in time
                management skills and are instilled with discipline. The
                school's student-centric approach ensures promising futures for
                its students. ”
              </p>
              <p className="text-md italic pt-4 text-[#36428B] font-bold">
                S. MuralitharanF/o M. Shivani, VI A, Trichy Gurukul
              </p>
            </div>
            <div className="stakeholder-card justify-center items-center bg-[#F1F1F1] rounded-xl p-6">
              <Image
                src={doublequotes}
                alt="Stakeholder 1"
                width={32}
                height={28}
              />
              <p className="text-lg text-black pt-4 ">
                “My daughter has been studying in the school since kindergarten.
                We’re very happy with the school’s infrastructure and education
                system. The teachers’ attentive care towards the children is
                very reassuring that our children are in the right hands.”
              </p>
              <p className="text-md italic pt-4 text-[#36428B] font-bold">
                Mr. Ramesh BabuFather of Ms. Preethi - 7th Std.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 px-4 md:px-8 lg:px-8">
        <div className="relative ">
          <Image
            src={stakeholders_banner}
            alt="Stakeholders Banner"
            width={1000}
            height={1000}
            className="w-full h-full object-contain"
          />
          <div className="flex justify-around absolute inset-0 px-4">
            <div className="text-center justify-center items-center"></div>
            <div className="content-center">
              <h1 className="text-white text-2xl sm:text-3xl md:text-[40px] lg:text-[52px] font-semibold leading-snug md:leading-normal">
                Be part of our <br />
                mission to Inspire <br /> Young Minds!
              </h1>
              <Link href="#aboutus">
                <button className="cursor-pointer bg-white text-[#03284B] text-sm sm:text-base md:text-lg px-8 py-2 rounded-lg mt-8">
                  Join with Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurStakeholders;
