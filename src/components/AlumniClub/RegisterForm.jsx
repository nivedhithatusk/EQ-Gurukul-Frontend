import React from "react";

const RegisterForm = () => {
  return (
    <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
      <div
        className="bg-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-md border border-[#00000040]"
        id="register-form"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#00488B] mb-8">
          Enquiry Gurukul Alumni - Register Here
        </h2>

        <form className="flex flex-col gap-6" id="reachus-form">
          {/* Name & Phone */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="name" className="font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="border border-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
              />
            </div>

            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="phone" className="font-medium">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Phone"
                className="border border-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
              />
            </div>
          </div>

          {/* Gender & DOB */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="gender" className="font-medium">
                Gender
              </label>
              <select
                id="gender"
                className="border border-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="dob" className="font-medium">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                className="border border-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
              />
            </div>
          </div>

          {/* Marital Status & Mobile */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="maritalstatus" className="font-medium">
                Marital Status
              </label>
              <select
                id="maritalstatus"
                className="border border-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
              >
                <option value="married">Married</option>
                <option value="unmarried">Unmarried</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="mobilenumber" className="font-medium">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobilenumber"
                placeholder="Mobile Number"
                className="border border-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
              />
            </div>
          </div>

          {/* Email & Batch */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="border border-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
              />
            </div>

            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="batch" className="font-medium">
                Batch
              </label>
              <input
                type="text"
                id="batch"
                placeholder="Batch"
                className="border border-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
              />
            </div>
          </div>

          {/* Last Class & Leaving Year */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="lastclass" className="font-medium">
                Last Class
              </label>
              <select
                id="lastclass"
                className="border border-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
              >
                <option value="2020">X</option>
                <option value="2020">XII</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="lastclassyear" className="font-medium">
                Year of leaving School
              </label>
              <input
                type="date"
                id="lastclassyear"
                className="border border-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
              />
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-2">
            <label htmlFor="address" className="font-medium">
              Present Address
            </label>
            <textarea
              id="address"
              placeholder="Address"
              rows={4}
              className="border border-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-[#03284B] text-white rounded-lg py-2 mt-4 w-full hover:bg-[#00488B] transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;
