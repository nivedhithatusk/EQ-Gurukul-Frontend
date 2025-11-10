"use client";
import React from "react";

const ReachUs = ({ id }) => {
  return (
    <section
      id={id}
      className="reachus-container mr-6 relative flex items-center py-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-32 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-stretch min-h-[650px] lg:min-h-[750px] xl:min-h-[850px]">
          {/* Left Column */}
          <div className="flex flex-col justify-center pl-4 sm:pl-10 md:pl-16 lg:pl-20 text-[#242424] space-y-6">
            {/* Call Box */}
            <div id="call-box">
              <div className="flex items-center gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 22C19.8978 22 20.2794 21.842 20.5607 21.5607C20.842 21.2794 21 20.8978 21 20.5V17C21 16.6022 20.842 16.2206 20.5607 15.9393C20.2794 15.658 19.8978 15.5 19.5 15.5C18.33 15.5 17.18 15.32 16.08 14.95C15.817 14.867 15.5363 14.8576 15.2683 14.9228C15.0004 14.988 14.7554 15.1254 14.56 15.32L13.12 16.76C10.6322 15.4024 8.58758 13.3578 7.23 10.87L8.66 9.44C9.07 9.05 9.22 8.47 9.04 7.91C8.68 6.82 8.5 5.67 8.5 4.5C8.5 4.10218 8.34196 3.72064 8.06066 3.43934C7.77936 3.15804 7.39782 3 7 3H3.5C3.10218 3 2.72064 3.15804 2.43934 3.43934C2.15804 3.72064 2 4.10218 2 4.5C2 14.15 9.85 22 19.5 22ZM3.5 4H7C7.13261 4 7.25979 4.05268 7.35355 4.14645C7.44732 4.24021 7.5 4.36739 7.5 4.5C7.5 5.78 7.7 7.03 8.09 8.22C8.14 8.36 8.13 8.56 7.97 8.72L6 10.68C7.65 13.91 10.07 16.33 13.31 18L15.26 16.03C15.4 15.89 15.59 15.85 15.77 15.9C16.97 16.3 18.22 16.5 19.5 16.5C19.6326 16.5 19.7598 16.5527 19.8536 16.6464C19.9473 16.7402 20 16.8674 20 17V20.5C20 20.6326 19.9473 20.7598 19.8536 20.8536C19.7598 20.9473 19.6326 21 19.5 21C10.4 21 3 13.6 3 4.5C3 4.36739 3.05268 4.24021 3.14645 4.14645C3.24021 4.05268 3.36739 4 3.5 4Z"
                    fill="#3D3AAD"
                  />
                </svg>

                <h2 className="text-2xl font-semibold">Make a Call</h2>
              </div>
              <p className="text-lg leading-relaxed mt-2 pl-8">
                +91 91500 88192
              </p>
            </div>

            {/* Email Box */}
            <div id="email-box" className="mt-4">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    d="M4.616 19C4.15533 19 3.771 18.846 3.463 18.538C3.155 18.23 3.00067 17.8453 3 17.384V6.616C3 6.15533 3.15433 5.771 3.463 5.463C3.77167 5.155 4.15567 5.00067 4.615 5H19.385C19.845 5 20.229 5.15433 20.537 5.463C20.845 5.77167 20.9993 6.156 21 6.616V17.385C21 17.845 20.8457 18.2293 20.537 18.538C20.2283 18.8467 19.8443 19.0007 19.385 19H4.616ZM12 12.116L4 6.885V17.385C4 17.5643 4.05767 17.7117 4.173 17.827C4.28833 17.9423 4.436 18 4.616 18H19.385C19.5643 18 19.7117 17.9423 19.827 17.827C19.9423 17.7117 20 17.564 20 17.384V6.884L12 12.116ZM12 11L19.692 6H4.308L12 11Z"
                    fill="#3D3AAD"
                  />
                </svg>
                <h2 className="text-2xl font-semibold">Send Email</h2>
              </div>
              <p className="text-lg leading-relaxed mt-2 pl-8 break-all">
                admin-Coimbatore@equitasgurukul.org
              </p>
            </div>

            {/* Address Box */}
            <div id="address-box" className="mt-4 mb-4">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    d="M12.5598 20.82C12.3966 20.9372 12.2007 21.0003 11.9998 21.0003C11.7988 21.0003 11.603 20.9372 11.4398 20.82C6.61078 17.378 1.48578 10.298 6.66678 5.182C8.08912 3.78285 10.0046 2.99912 11.9998 3C13.9998 3 15.9188 3.785 17.3328 5.181C22.5138 10.297 17.3888 17.376 12.5598 20.82Z"
                    stroke="#3D3AAD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 12C12.5304 12 13.0391 11.7893 13.4142 11.4142C13.7893 11.0391 14 10.5304 14 10C14 9.46957 13.7893 8.96086 13.4142 8.58579C13.0391 8.21071 12.5304 8 12 8C11.4696 8 10.9609 8.21071 10.5858 8.58579C10.2107 8.96086 10 9.46957 10 10C10 10.5304 10.2107 11.0391 10.5858 11.4142C10.9609 11.7893 11.4696 12 12 12Z"
                    stroke="#3D3AAD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h2 className="text-2xl font-semibold">Our Branch Address</h2>
              </div>
              <p className="text-lg leading-relaxed mt-2 pl-8">
                Equitas Gurukul Matriculation Hr. Sec. School, Survey No.
                744/3B, Phase II, CTO Colony, Madhukarai Main Road,
                Sundarapuram, Coimbatore – 641021.
              </p>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col justify-center w-full h-full">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#00488B]">
              Reach Us
            </h2>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-6 sm:gap-8 mt-10 sm:mt-14"
            >
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-md border border-[#000] focus:outline-none focus:ring-2 focus:ring-[#efeaea]"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 rounded-md border border-[#000] focus:outline-none focus:ring-2 focus:ring-[#efeaea]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-md border border-[#000] focus:outline-none focus:ring-2 focus:ring-[#efeaea]"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-3 rounded-md border border-[#000] focus:outline-none focus:ring-2 focus:ring-[#efeaea]"
              />
              <button
                type="submit"
                className="cursor-pointer w-full p-3 rounded-md bg-[#03284B] hover:ring-2 hover:ring-[#00398f] text-white"
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
