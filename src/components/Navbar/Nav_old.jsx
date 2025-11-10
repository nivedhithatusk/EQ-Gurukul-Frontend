"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

const Nav = () => {
  const [navBg, setNavBg] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full h-[12vh] lg:h-[20vh] fixed transition-all ${
        isClient && navBg ? "bg-white shadow-md" : "fixed"
      } duration-200 z-[10000]`}
    >
      <div className="bg-[#03284b] w-full h-auto">
        
      </div>
      <div className="w-[92%] h-full flex mx-auto item-center justify-between">
        <div className="flex items-center lg:space-x-50 space-x-70 lg:mt-7">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-20 h-20 flex items-center justify-center flex-col">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={50}
                height={50}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>

          {/* NavBar Links */}
          <div className="hidden lg:flex items-center space-x-10 ">
            {NavLinks.map((link) => {
              return (
                <Link
                  key={link.id}
                  href={link.path}
                  className="text-base hover:text-blue-900 font-medium transition-all duration-200"
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* MobileMenu */}
          <div className="flex items-center space-x-4 lg:hidden">
            <HiBars3BottomRight className="w-8 h-8 cursor-pointer text-black " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
