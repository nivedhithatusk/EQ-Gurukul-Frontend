import React from "react";
import Image from "next/image";
import openhouse from "@/assets/gurukul_world/openhouse.svg";
import communication from "@/assets/gurukul_world/communication.svg";
import schooldiscipline from "@/assets/gurukul_world/schooldiscipline.svg";
import pta from "@/assets/gurukul_world/pta.svg";
import ptm from "@/assets/gurukul_world/ptm.svg";
import ourparents from "@/assets/gurukul_world/ourparents.svg";

const ParentEngagementOtherDetails = () => {
  return (
    <section className="">
      <div className=" py-16 px-4 md:px-8 lg:px-30">
        <div className="container mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            id="row1"
          >
            {/* Parent Teacher Association (PTA)*/}
            <div
              className="bg-[#EEF4FF] rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              id="parentteacherassociation"
            >
              <div className=" px-6 py-8">
                <div className="flex flex-row  gap-32">
                  <h3 className="text-3xl font-bold text-[#00488B]">
                    Parent Teacher Association (PTA)
                  </h3>
                  {/* <div className="flex justify-end pr-6 pb-4"> */}
                  <Image
                    src={pta}
                    alt="Parent Teacher Association (PTA)"
                    width={91}
                    height={91}
                    className=" justify-content-end object-cover"
                  />
                  {/* </div> */}
                </div>
                <div className="pt-6">
                  <ul className="list-disc list-inside ml-6 text-gray-800 leading-relaxed space-y-2 flex-1 text-lg">
                    <li className="list-outside">
                      Equitas Gurukul has a proactive PTA, whose members are
                      elected to serve for one year.
                    </li>
                    <li className="list-outside">
                      The Gurukul PTA works collaboratively with the school team
                      to ensure the smooth functioning of the school, in
                      alignment with its mission and vision.
                    </li>
                    <li className="list-outside">
                      The PTA members meet twice a term to discuss the
                      happenings and resolve any concerns faced by the students,
                      teachers or parents.
                    </li>
                    <li className="list-outside">
                      The PTA also supports school voluntary activities and
                      community service programs. 
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Parent Teacher Meetings (PTM)*/}
            <div
              className="bg-[#EEF4FF] rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              id="parentteachermeetings"
            >
              <div className=" px-6 py-8 ">
                <div className="flex flex-row  gap-32">
                  <h3 className="text-3xl font-bold text-[#00488B]">
                    Parent Teacher Meetings (PTM)
                  </h3>
                  <Image
                    src={ptm}
                    alt="Parent Teacher Meetings (PTM)"
                    width={91}
                    height={91}
                    className=" justify-content-end object-cover"
                  />
                </div>

                <div className="pt-6 pb-6">
                  <ul className="list-disc list-inside ml-6 text-gray-800 leading-relaxed space-y-2 flex-1 text-lg">
                    <li className="list-outside">
                      The School Principal conducts the parent orientations at
                      the start of every term and during the closure of the
                      academic year.
                    </li>
                    <li className="list-outside">
                      Open House shall be conducted after every mid-term and
                      term-end examination.
                    </li>
                    <li className="list-outside">
                      Principal shall inform parents about the PTM dates and
                      schedules through the school ERP portal.
                    </li>
                    <li className="list-outside">
                      Parents can submit their concerns, feedback and
                      suggestions during the PTMs.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Gurukul’s Expectations from Our Parents */}
          <div className="pt-16" id="row2">
            <div
              className="bg-[#EEF4FF] rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl 
              transition-shadow duration-300 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3"
              id="ourparents"
            >
              <div className=" px-12 py-8 col-span-2">
                <h3 className="text-3xl font-bold text-[#00488B]">
                  Gurukul’s Expectations from Our Parents
                </h3>
                <div className="pt-6">
                  <ul className="list-disc list-inside ml-6 text-gray-800 leading-relaxed space-y-2 flex-1 text-lg">
                    <li className="list-outside">
                      Provide healthy and nutritious food as per the suggested
                      Gurukul’s ‘My Plate Chart.’
                    </li>
                    <li className="list-outside">
                      Ensure regular attendance in school as every day counts.{" "}
                    </li>
                    <li className="list-outside">
                      Send their children in proper school uniforms, as per the
                      school’s schedule.{" "}
                    </li>
                    <li className="list-outside">
                      Attend all Parent-Teacher meetings and be aware of their
                      ward’s progress.{" "}
                    </li>
                    <li className="list-outside">
                      Support school administration by remitting school fees on
                      time.{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-end pr-6 col-span-1 ">
                <Image
                  src={ourparents}
                  alt="Gurukul’s Expectations from Our Parents"
                  width={476}
                  height={295}
                  className=" object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentEngagementOtherDetails;
