import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#110028] text-white">
      <div className="mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <img
              src="/images/footer_logo.png"
              alt="Equitas Logo"
              className="mb-4 w-20"
            />
            <p className="text-md text-gray-300 leading-relaxed mb-2">
              Equitas Gurukul schools are in Coimbatore, Cuddalore,<br/> 
              Dindigul,Karur, Kumbakonam, Salem, Sivakasi & Trichy.<br/>
              The schools are managed by the Equitas Development <br/>  
              Initiatives Trust (EDIT) from Spencer Plaza in Chennai.
            </p>
          </div>

          {/* Campus List */}
          <div>
            <h4 className="font-semibold mb-4 text-xl">Our Campus</h4>
            <div className="grid grid-cols-2 gap-2 text-lg text-gray-300">
              <div className="flex flex-col gap-2">
                <Link href="/branch/coimbatore" className="">
                  Coimbatore
                </Link>
                <Link href="/branch/cuddalore">Cuddalore</Link>
                <Link href="/branch/dindigul">Dindigul</Link>
                <Link href="/branch/karur">Karur</Link>
              </div>
              <div className="flex flex-col gap-2">
                <Link href="/branch/sivakasi">Sivakasi</Link>
                <Link href="/branch/trichy">Trichy</Link>
                <Link href="/branch/kumbakonam">Kumbakonam</Link>
                <Link href="/branch/salem">Salem</Link>
              </div>
            </div>
          </div>

          {/* Academics Links */}
          <div>
            <h4 className="font-semibold mb-4 text-xl">Academics</h4>
            <div className="grid grid-cols-2 gap-2 text-lg text-gray-300">
              <div className="flex flex-col gap-2">
                <Link href="/about/overview">About Us</Link>
                <Link href="/gurukulworld/schoolinformation">Gurukul World</Link>
                <Link href="/admissions">Admissions</Link>
                <Link href="/contactus">Contact</Link>
              </div>
              <div className="flex flex-col gap-2">
                {/* <Link href="/gallery">Gallery</Link> */}
                <Link href="/alumni">Alumni Club</Link>
                <Link href="/careers">Careers</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 pt-6 text-center text-sm text-gray-400 justify-between items-start gap-2">
          <div className="flex md:justify-start items-start order-2 sm:order-1 md:order-2">
            <p>Copyright All Right Reserved 2025</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex md:justify-end items-start order-1 sm:order-2 md:order-1 ">
            <div className="flex gap-4 mt-12 md:mt-0 sm:mt-0">
              <a href="#" aria-label="Facebook">
                <svg
                  width="24"
                  height="24"
                  fill="white"
                  className="hover:fill-blue-500 transition-colors"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99h-2.54V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg
                  width="24"
                  height="24"
                  fill="white"
                  className="hover:fill-blue-400 transition-colors"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-9.5 14v-6H7v6h2.5zm-1.25-7.1c.83 0 1.25-.55 1.25-1.25S9.08 7.4 8.25 7.4 7 7.95 7 8.65 7.42 9.9 8.25 9.9zM17 17v-3.2c0-1.5-.5-2.3-1.76-2.3-.96 0-1.53.65-1.78 1.28h-.03v-1.1H11V17h2.5v-3.15c0-.8.15-1.6 1.17-1.6 1.02 0 1.03 1 1.03 1.65V17H17z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg
                  width="24"
                  height="24"
                  fill="white"
                  className="hover:fill-blue-300 transition-colors"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.26 4.26 0 001.88-2.34 8.53 8.53 0 01-2.7 1.03A4.24 4.24 0 0016.3 4a4.25 4.25 0 00-4.14 5.21A12.06 12.06 0 013 5.1a4.25 4.25 0 001.32 5.67 4.19 4.19 0 01-1.92-.53v.05a4.26 4.26 0 003.41 4.17c-.47.13-.97.2-1.48.2-.36 0-.72-.04-1.07-.1a4.26 4.26 0 003.97 2.96A8.51 8.51 0 012 19.54a12 12 0 006.5 1.91c7.8 0 12.07-6.46 12.07-12.07 0-.18-.01-.35-.02-.53A8.67 8.67 0 0024 5.56a8.42 8.42 0 01-2.54.7z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg
                  width="24"
                  height="24"
                  fill="white"
                  className="hover:fill-pink-500 transition-colors"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zM12 8a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4zm5-2a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
