import React from "react";
import Image from "next/image";
import Link from "next/link";
import header_phone from "../../assets/header/header_phone.png";
import header_mail from "../../assets/header/header_mail.png";
import header_facebook from "../../assets/header/header_facebook.png";
import header_instagram from "../../assets/header/header_instagram.png";
import header_twitter from "../../assets/header/header_twitter.png";

const TopBar = () => {
  return (
    <div id="top-bar">
      {/* Top Bar */}
      <div className="bg-[#03284b] w-full text-white text-base lg:text-[16px]">
        <div className="flex justify-between items-center px-4 sm:px-10 py-2">
          <div className="flex flex-col sm:flex-row gap-6 lg:pl-[106px] pl-[0px]">
            <div className="flex sm:flex-row  gap-2">
              <Image
                src={header_phone}
                alt="phone"
                className="w-5 h-5 sm:w-5 sm:h-5"
              />
              <p className="text-sm sm:text-base">+91 91500 88469</p>
            </div>
            <div className="flex sm:flex-row gap-2">
              <Image
                src={header_mail}
                alt="mail"
                className="w-5 h-5 sm:w-5 sm:h-5"
              />
              <p className="text-sm sm:text-base">info@equitasgurukul.org</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2">
            <div className="flex sm:flex-row gap-4">
              <Image
                src={header_facebook}
                alt="facebook"
                className="w-5 h-5 sm:w-7 sm:h-7"
              />
              <Image
                src={header_instagram}
                alt="instagram"
                className="w-5 h-5 sm:w-7 sm:h-7"
              />
              <Image src={header_twitter} alt="twitter" className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <div>
              <a href="/admissions">
                <button className="bg-white text-[#03284b] px-3 py-1 rounded-md font-semibold text-sm">
                  Admissions
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
