import React from "react";
import Link from "next/link";
import approachsection_banner from "@/assets/home/approachsection_banner.jpg";
import Image from "next/image";

export default function ApproachSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#00488B] mb-6 d-inline-block leading-[60px]">
              Equitas <br />
              Gurukul Group <br />
              of Schools
            </h2>
            <p className="text-black text-lg leading-relaxed mb-6">
              Equitas Gurukul is an educational initiative by Equitas
              Development Initiatives Trust (EDIT). It enables first- generation
              learners from economically challenged backgrounds to receive
              quality holistic education with excellent infrastructure at
              affordable fees.
            </p>
            <Link
              href="#hero-banner"
              className="inline-block bg-[#0082FA] text-white px-8 py-3 rounded-2xl"
            >
              Learn More
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src={approachsection_banner}
              alt="School Building"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Holistic Approach Cards */}
        {/* <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Towards A holistic Approach
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"> */}
        {/* Card 1 */}
        {/* <div className="bg-yellow-100 p-6 rounded-lg">
              <img
                src="/images/outdoor.jpg"
                alt="Outdoor Activities"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🎨</span>
                </div>
                <h4 className="font-semibold text-gray-900">Outdoor Activities</h4>
              </div>
            </div> */}

        {/* Card 2 */}
        {/* <div className="bg-purple-100 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🎵</span>
                </div>
                <h4 className="font-semibold text-gray-900">Extra Curricular</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Music, dance, arts, and sports programs to develop well-rounded individuals.
              </p>
            </div> */}

        {/* Card 3 */}
        {/* <div className="bg-teal-100 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🏆</span>
                </div>
                <h4 className="font-semibold text-gray-900">Life Skills</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Building confidence, leadership, and critical thinking abilities.
              </p>
            </div> */}

        {/* Card 4 */}
        {/* <div className="bg-blue-100 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">📚</span>
                </div>
                <h4 className="font-semibold text-gray-900">Value Education</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Instilling moral values and ethics for responsible citizenship.
              </p>
            </div> 
          </div>
        </div>*/}
      </div>
    </section>
  );
}
