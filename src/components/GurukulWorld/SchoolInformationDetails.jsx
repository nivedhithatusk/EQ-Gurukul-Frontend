import React from "react";
import Image from "next/image";
import booksandcurriculum from "@/assets/gurukul_world/booksandcurriculum.svg";
import uniforms from "@/assets/gurukul_world/uniforms.svg";
import feepaymentandfinancials from "@/assets/gurukul_world/feepaymentandfinancials.svg";
import examination from "@/assets/gurukul_world/examination.svg";
import library from "@/assets/gurukul_world/library.svg";
import openhouse from "@/assets/gurukul_world/openhouse.svg";
import communication from "@/assets/gurukul_world/communication.svg";
import schooldiscipline from "@/assets/gurukul_world/schooldiscipline.svg";

const SchoolInformationDetails = () => {
  return (
    <section className="">
      <div className="py-16 px-4 md:px-8 lg:px-30">
        <div className="container mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            id="row1"
          >
            {/* Timings & Daily Schedule */}
            <div
              className="bg-[#EEF4FF] p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              id="timingsanddailyschedule"
            >
              <h3 className="text-3xl font-bold text-[#00488B]">
                Timings & Daily Schedule
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className=" py-6">
                  <h4 className="text-xl font-bold text-black">LKG & UKG</h4>
                  <p className="text-lg leading-relaxed mt-4 font-semibold">
                    Monday-Friday
                  </p>
                  <p className="text-lg leading-relaxed mt-2 ">
                    09:00 AM - 02:50 PM
                  </p>
                  <p className="text-lg leading-relaxed mt-4 font-semibold">
                    Saturday & Sunday
                  </p>
                  <p className="text-lg leading-relaxed mt-2 ">Holiday</p>
                  <p className="text-lg leading-relaxed mt-4 font-semibold">
                    Morning Prayer
                  </p>
                  <p className="text-lg leading-relaxed mt-2 ">Lunch Hours</p>
                </div>
                <div className=" py-6">
                  <h4 className="text-xl font-bold text-black">
                    Std. I To XII
                  </h4>
                  <p className="text-lg leading-relaxed mt-4 font-semibold">
                    Monday-Friday
                  </p>
                  <p className="text-lg leading-relaxed mt-2 ">
                    08:45 a.m. – 04:00 p.m.
                  </p>
                  <p className="text-lg leading-relaxed mt-4 font-semibold">
                    3rd & 5thSaturday
                  </p>
                  <p className="text-lg leading-relaxed mt-2 ">
                    08.45 a.m. – 03:45 p.m.
                  </p>
                  <p className="text-lg leading-relaxed mt-4 font-semibold">
                    NEWSPAPER Reading (Classes IV- VIII)
                  </p>
                  <p className="text-lg leading-relaxed mt-2 ">Office Hours</p>
                </div>
              </div>
            </div>

            {/* Books & Curriculum */}
            <div
              className="bg-[#EEF4FF] rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              id="booksandcurriculum"
            >
              <div className=" p-6 ">
                <h3 className="text-3xl font-bold text-[#00488B]">
                  Books & Curriculum
                </h3>
                <div className="pt-6">
                  <ul className="list-disc list-inside ml-6 text-gray-800 leading-relaxed space-y-2 flex-1 text-lg">
                    <li className="list-outside">
                      We follow textbooks published by the Tamil Nadu Government
                      for class I – XII.
                    </li>
                    <li className="list-outside">
                      The kindergarten curriculum has an international standard
                      thematic and integrated learning approach, honed with the
                      best pedagogies.
                    </li>
                    <li className="list-outside">
                      Notebooks and Textbooks are issued at the beginning of
                      each term for classes I-VII and for other classes in the
                      month of May-Every year
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-end pr-6">
                <Image
                  src={booksandcurriculum}
                  alt="Books & Curriculum"
                  width={234.087}
                  height={130.342}
                  className=" object-cover"
                />
              </div>
            </div>

            {/* Uniforms */}
            <div
              className="bg-[#EEF4FF] p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              id="uniforms"
            >
              <h3 className="text-3xl font-bold text-[#00488B]">Uniforms</h3>
              <div className="flex py-6">
                <Image
                  src={uniforms}
                  alt="Uniforms"
                  width={549}
                  height={472}
                  className="w-11/12 h-full object-cover"
                />
              </div>
              <ul className="list-disc list-inside ml-6 text-gray-800 leading-relaxed space-y-2 flex-1 text-lg">
                <li className="list-outside">
                  Equitas Gurukul students shall come to school in regular
                  school uniforms.
                </li>
                <li className="list-outside">
                  The uniform designs are different for Kindergarten, Primary,
                  Middle school, High school and Higher Secondary.
                </li>
                <li className="list-outside">
                  Students are required to wear sports uniforms once a week, on
                  working Saturdays and during sports activities.
                </li>
              </ul>
            </div>

            {/* Fee Payment & Financials */}
            <div
              className="bg-[#EEF4FF] rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              id="feepaymentandfinancials"
            >
              <div className=" p-6 ">
                <h3 className="text-3xl font-bold text-[#00488B]">
                  Fee Payment & Financials
                </h3>
                <div className="py-6">
                  <ul className="list-disc list-inside ml-6 text-gray-800 leading-relaxed space-y-2 flex-1 text-lg">
                    <li className="list-outside">
                      We follow textbooks published by the Tamil Nadu Government
                      for class I – XII.
                    </li>
                    <li className="list-outside">
                      The kindergarten curriculum has an international standard
                      thematic and integrated learning approach, honed with the
                      best pedagogies.
                    </li>
                    <li className="list-outside">
                      Notebooks and Textbooks are issued at the beginning of
                      each term for classes I-VII and for other classes in the
                      month of May-Every year
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-end pr-6 pt-4">
                <Image
                  src={feepaymentandfinancials}
                  alt="Fee Payment & Financials"
                  width={254}
                  height={135.914}
                  className=" object-cover"
                />
              </div>
            </div>

            {/* Examination*/}
            <div
              className="bg-[#EEF4FF] rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              id="examination"
            >
              <div className=" px-6 pt-6">
                <h3 className="text-3xl font-bold text-[#00488B]">
                  Examination
                </h3>
                <div className="pt-6">
                  <ul className="list-disc list-inside ml-6 text-gray-800 leading-relaxed space-y-2 flex-1 text-lg">
                    <li className="list-outside">
                      Mid-term and term-end examinations are the two formal
                      exams for a term.
                    </li>
                    <li className="list-outside">
                      Attendance is mandatory on all days of the exam.
                    </li>
                    <li className="list-outside">
                      Gurukul provides answer papers to students for mid-term
                      and term-end exams.
                    </li>
                    <li className="list-outside">
                      The exam timetable is sent out to students and parents
                      through the school portal.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-end pr-6 pb-2">
                <Image
                  src={examination}
                  alt="Examination"
                  width={176}
                  height={157}
                  className=" object-cover"
                />
              </div>
            </div>

            {/* Library*/}
            <div
              className="bg-[#EEF4FF] rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              id="library"
            >
              <div className=" px-6 pt-6 pb-3">
                <h3 className="text-3xl font-bold text-[#00488B]">Library</h3>
                <div className="pt-6">
                  <ul className="list-disc list-inside ml-6 text-gray-800 leading-relaxed space-y-2 flex-1 text-lg">
                    <li className="list-outside">
                      We follow textbooks published by the Tamil Nadu Government
                      for class I – XII.
                    </li>
                    <li className="list-outside">
                      The kindergarten curriculum has an international standard
                      thematic and integrated learning approach, honed with the
                      best pedagogies.
                    </li>
                    <li className="list-outside">
                      Notebooks and Textbooks are issued at the beginning of
                      each term for classes I-VII and for other classes in the
                      month of May-Every year
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-end pr-6">
                <Image
                  src={library}
                  alt="Library"
                  width={175.587}
                  height={148.636}
                  className=" object-cover"
                />
              </div>
            </div>

            {/* Open House*/}
            <div
              className="bg-[#EEF4FF] rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              id="openhouse"
            >
              <div className=" px-6 pt-6">
                <h3 className="text-3xl font-bold text-[#00488B]">
                  Open House
                </h3>
                <div className="pt-6">
                  <ul className="list-disc list-inside ml-6 text-gray-800 leading-relaxed space-y-2 flex-1 text-lg">
                    <li className="list-outside">
                      The results of mid-term and term-end exams will be shared
                      during the ‘Open House’. It will be conducted two weeks
                      after the completion of exams.
                    </li>
                    <li className="list-outside">
                      Answer scripts will be shown to the students and parents
                      for all the exams except term III.
                    </li>
                    <li className="list-outside">
                      Dates for the open house will be announced via mobile SMS
                      and student diary in the ERP portal.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-end pr-6 pb-4">
                <Image
                  src={openhouse}
                  alt="Open House"
                  width={202.375}
                  height={146.496}
                  className=" object-cover"
                />
              </div>
            </div>

            {/* Communication*/}
            <div
              className="bg-[#EEF4FF] rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              id="communication"
            >
              <div className=" px-6 pt-6 ">
                <h3 className="text-3xl font-bold text-[#00488B]">
                  Communication
                </h3>
                <div className="pt-6 pb-6">
                  <ul className="list-disc list-inside ml-6 text-gray-800 leading-relaxed space-y-2 flex-1 text-lg">
                    <li className="list-outside">
                      All communications are through the school ERP application.
                    </li>
                    <li className="list-outside">
                      The schools will issue circulars as and when necessary to
                      convey important messages and notifications.
                    </li>
                    <li className="list-outside">
                      PTMs are held regularly to share important information,
                      pertaining to both the school and the progress of the
                      students.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-end pr-6">
                <Image
                  src={communication}
                  alt="Communication"
                  width={334.743}
                  height={158.321}
                  className=" object-cover"
                />
              </div>
            </div>
          </div>

          {/* School Discipline */}
          <div className="pt-16" id="row2">
            <div
              className="bg-[#EEF4FF] rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl 
              transition-shadow duration-300 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3"
              id="schooldiscipline"
            >
              <div className=" p-6 col-span-2">
                <h3 className="text-3xl font-bold text-[#00488B]">
                  School Discipline
                </h3>
                <div className="pt-6">
                  <ul className="list-disc list-inside ml-6 text-gray-800 leading-relaxed space-y-2 flex-1 text-lg">
                    <li className="list-outside">
                      Gurukul students shall learn to be disciplined, so that
                      they may develop a sound personality.{" "}
                    </li>
                    <li className="list-outside">
                      Students establish Win-Win classroom rules and always
                      agree to follow them.{" "}
                    </li>
                    <li className="list-outside">
                      Students are recognized and rewarded for their good
                      discipline and conduct.{" "}
                    </li>
                    <li className="list-outside">
                      If the conduct or misbehaviour of students, such as
                      causing injury to peers or adults, damaging school
                      property, bullying, sexual abuse, defaming character, or
                      theft, occurs, the School Management views these as
                      serious offenses and takes suitable disciplinary action.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-end pr-6 col-span-1 py-16">
                <Image
                  src={schooldiscipline}
                  alt="School Discipline"
                  width={476}
                  height={300}
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

export default SchoolInformationDetails;
