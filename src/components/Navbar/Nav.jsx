"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoChevronDown } from "react-icons/io5";
import { NavLinks } from "@/constant/constant";
import TopBar from "./TopBar";

const Nav = () => {
  const [navBg, setNavBg] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setNavBg(window.scrollY >= 90);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (id) => {
    clearTimeout(window.submenuTimeout);
    setOpenSubmenu(id);
  };

  const handleMouseLeave = () => {
    window.submenuTimeout = setTimeout(() => setOpenSubmenu(null), 200);
  };

  const isActive = (path) => pathname === path; // exact match

  const firstHalf = NavLinks.slice(0, 4);
  const secondHalf = NavLinks.slice(4);

  const activeStyle = `px-4 py-2 flex justify-center items-center gap-2 rounded-[20px] bg-white/30 transition-all duration-200`;

  return (
    <div
      className={`w-full fixed z-[10000] transition-all duration-300 ${
        navBg ? "bg-white shadow-md text-black" : "bg-transparent text-white"
      }`}
    >
      <TopBar />

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-center gap-8 text-[16px] font-medium py-3 relative">
        {/* Left Section */}
        <div className="flex items-center gap-8">
          {firstHalf.map((link) => {
            const isParentActive =
              isActive(link.path) ||
              link.submenu?.some((sub) => isActive(sub.path));

            return (
              <div
                key={link.id}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(link.id)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.path || "#"}
                  className={`flex items-center gap-1 transition-colors duration-200 ${
                    isParentActive
                      ? `${activeStyle} ${
                          navBg ? "text-[#03284b]" : "text-white"
                        }`
                      : "hover:underline"
                  }`}
                >
                  {link.name}
                  {link.submenu && (
                    <IoChevronDown className="text-sm mt-[2px]" />
                  )}
                </Link>

                {/* Dropdown */}
                {link.submenu && openSubmenu === link.id && (
                  <div
                    className="absolute left-0 top-full bg-white text-black mt-1 shadow-lg rounded-lg w-56 py-2 z-[9999] border border-gray-200"
                    onMouseEnter={() => clearTimeout(window.submenuTimeout)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.id}
                        href={sub.path}
                        className={`block px-4 py-2  ${
                          isActive(sub.path)
                            ? "bg-[#03284b] text-white rounded-md hover:bg-[#03284be7]"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Center Logo */}
        <div className="w-20 h-20 flex items-center justify-center">
          <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="object-contain rounded-full bg-white p-1 shadow-md"
            priority
          />
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-8">
          {secondHalf.map((link) => {
            const isParentActive =
              isActive(link.path) ||
              link.submenu?.some((sub) => isActive(sub.path));

            return (
              <div
                key={link.id}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(link.id)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.path || "#"}
                  className={`flex items-center gap-1 transition-colors duration-200 ${
                    isParentActive
                      ? `${activeStyle} ${
                          navBg ? "text-[#03284b]" : "text-white"
                        }`
                      : "hover:underline"
                  }`}
                >
                  {link.name}
                  {link.submenu && (
                    <IoChevronDown className="text-sm mt-[2px]" />
                  )}
                </Link>

                {/* Dropdown */}
                {link.submenu && openSubmenu === link.id && (
                  <div
                    className="absolute left-0 top-full bg-white text-black mt-1 shadow-lg rounded-lg w-56 py-2 z-[9999] border border-gray-200"
                    onMouseEnter={() => clearTimeout(window.submenuTimeout)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.id}
                        href={sub.path}
                        className={`block px-4 py-2 hover:bg-gray-100 hover:text-black ${
                          isActive(sub.path)
                            ? "bg-[#03284b] text-white rounded-md hover:text-black"
                            : ""
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex lg:hidden w-full justify-between items-center px-4 py-3">
        <div className="w-14 h-14 flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={56}
            height={56}
            className="object-contain rounded-full bg-white p-1 shadow-md"
            priority
          />
        </div>
        <HiBars3BottomRight
          className={`${navBg ? "text-black" : "text-white"} w-8 h-8`}
        />
      </div>
    </div>
  );
};

export default Nav;
