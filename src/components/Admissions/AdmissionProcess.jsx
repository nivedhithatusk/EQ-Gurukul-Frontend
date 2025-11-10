import React from "react";

const AdmissionProcess = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
      <div className="container mx-auto">
        {/* Top Two-Column Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-[#EEF4FF] p-6 sm:p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#00488B]">
              Admissions
            </h2>
            <ul className="text-black text-base sm:text-lg leading-relaxed space-y-2 list-disc list-inside ml-4 sm:ml-6 py-4">
              <li className="list-outside">
                Every year the school will announce that the registrations for
                admission are open to classes LKG to Std VI from January
                onwards, through school assembly and word of mouth.
              </li>
              <li className="list-outside">
                Our schools offer 25% seats in LKG under the Right To Education
                Act (RTE). Eligible students can apply through the Government
                RTE portal as per Government norms.
              </li>
            </ul>
          </div>

          <div className="bg-[#EEF4FF] p-6 sm:p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#00488B]">
              Intergurukul Transfers
            </h2>
            <ul className="text-black text-base sm:text-lg leading-relaxed space-y-2 list-disc list-inside ml-4 sm:ml-6 py-4">
              <li className="list-outside">
                Gurukul students can seek admission/transfer in other locations
                subject to availability of seats.
              </li>
            </ul>
          </div>
        </div>

        {/* Registration & Admission Section */}
        <div className="bg-[#EEF4FF] p-6 sm:p-8 rounded-2xl shadow-lg mt-10 sm:mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#00488B]">
            Registration & Admission For XI STD
          </h2>

          <ul className="text-black text-base sm:text-lg leading-relaxed space-y-2 list-disc list-inside ml-4 sm:ml-6 py-4">
            <li className="list-outside">
              All Gurukuls admit students into class XI.
            </li>
            <li className="list-outside">Groups for Std. XI & XII</li>
            <li className="list-outside">
              <span className="font-bold">Group I:</span> Tamil, English,
              Physics, Chemistry, Mathematics & Computer Science
            </li>
            <li className="list-outside">
              <span className="font-bold">Group II:</span> Tamil, English,
              Physics, Chemistry, Mathematics & Biology
            </li>
            <li className="list-outside">
              <span className="font-bold">Group III:</span> Tamil, English,
              Commerce, Accountancy, Economics & Computer Applications
            </li>
            <li className="list-outside">
              <span className="font-bold">Group IV:</span> Tamil, English,
              Commerce, Accountancy, Economics & Business Mathematics
            </li>
          </ul>

          <p className="text-black text-base sm:text-lg font-bold mt-4">
            Procedure
          </p>

          <ul className="text-black text-base sm:text-lg leading-relaxed space-y-2 list-disc list-inside ml-4 sm:ml-6 py-4">
            <li className="list-outside">
              The following documents are required to register and select the
              group for class XI.
            </li>
            <ul className="list-disc list-inside space-y-2 ml-6">
              <li className="list-outside">
                Provisional mark sheet attested by the Principal (Original mark
                sheet to be handed over to the school once received)
              </li>
              <li className="list-outside">Birth Certificate</li>
              <li className="list-outside">
                Passport Size Photographs – 2 Nos.
              </li>
            </ul>
            <li>
              Subject groups and their fee details will be informed to the
              parents at the time of registration.
            </li>
            <li className="list-outside">
              Parents will pay their annual fees and confirm their admission by
              producing the following documents and filling in the admission
              form.
            </li>
            <ul className="list-disc list-inside space-y-2 ml-6">
              <li className="list-outside">
                Community Certificate (if applicable)
              </li>
              <li className="list-outside">Photo of the E-Aadhar card.</li>
              <li className="list-outside">
                Transfer certificate with EMIS No. (applicable for Gurukul
                Students) and SSLC mark sheet.
              </li>
              <li className="list-outside">
                The transfer certificates issued by the schools affiliated with
                other boards are to be countersigned by the regional office of
                the concerned boards.
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;
