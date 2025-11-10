import React from "react";
import reach_mail from "@/assets/about/icons/reach_mail.svg";
import reach_address from "@/assets/about/icons/reach_address.svg";
import reach_call from "@/assets/about/icons/reach_call.svg";
import Image from "next/image";

const ReachUs = () => {
  return (
    <section className=" px-8 lg:px-30 sm:px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-16 py-16">
          {/* Left Section - Cards */}
          <div className="flex flex-col gap-16">
            {/* Call Box */}
            <div className="relative reachus-call flex flex-col gap-2 p-8 w-full h-auto bg-[#F9F9F9]">
              <Image src={reach_call} alt="Reach Call" width={55.5} height={47} className="absolute -top-7 left-7" />
              <h2 className="text-[#242424] text-xl font-medium">
                Make a Call
              </h2>
              <p className="text-[#242424] text-base">+91 91500 88192</p>
            </div>

            {/* Email Box */}
            <div className="relative reachus-email flex flex-col gap-2 p-8 w-full h-auto bg-[#9EC4FF]">
              <Image src={reach_mail} alt="Reach Mail" width={55.5} height={47} className="absolute -top-7 left-7"/>
              <h2 className="text-[#242424] text-xl font-medium">Send Email</h2>
              <p className="text-[#242424] text-base">
                admin-coimbatore@equitasgurukul.org
              </p>
            </div>

            {/* Address Box */}
            <div className="relative reachus-address flex flex-col gap-2 p-8 w-full h-auto bg-[#F9F9F9]">
              <Image src={reach_address} alt="Reach Address" width={55.5} height={47} className="absolute -top-7 left-7"/>
              <h2 className="text-[#242424] text-xl font-medium">
                Our Branch Address
              </h2>
              <p className="text-[#242424] text-base leading-relaxed w-10/12">
                Equitas Gurukul Matriculation Hr. Sec. School, Survey No.
                744/3B, Phase II, CTO Colony, Madhukarai Main Road,
                Sundarapuram, Coimbatore – 641021.
              </p>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-[#F3F7FF] p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold text-[#00488B] mb-6">
              Reach Us
            </h2>
            <form className="flex flex-col gap-4" id="reachus-form">
              <input
                type="text"
                placeholder="Name"
                className="border border-[#D9D9D9] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="border border-[#D9D9D9] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-[#D9D9D9] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="border border-[#D9D9D9] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
              ></textarea>
              <button
                type="submit"
                className="bg-[#03284B] text-white rounded-lg py-2 mt-2 hover:bg-[#00398f] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReachUs;
