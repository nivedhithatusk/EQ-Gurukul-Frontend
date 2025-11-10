import React from "react";
import Image from "next/image";
import map from "@/assets/home/map.jpg";

export default function ContactSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Map/Location Side */}
          <div>
            <div className="bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={map}
                alt="School Location Map"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="bg-[#5885DD] text-white p-8 md:p-12 rounded-2xl lg:mx-0 w-auto lg:w-[30rem] ">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Us
            </h2>
            <form className="space-y-4 contact-form">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-2xl text-gray-900 focus:outline-none focus:ring-2"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 "
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 "
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2  resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}