"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoChevronDown } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { NavLinks } from "@/constant/constant";
import TopBar from "./TopBar";

const Nav = () => {
  const [navBg, setNavBg] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  const pathname = usePathname();

  useEffect(() => {
    // Navbar background scroll effect
    const handleScroll = () => setNavBg(window.scrollY >= 90);
    window.addEventListener("scroll", handleScroll);
  
    // Close mobile menu when resizing to desktop
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setMobileSubmenu(null);
      }
    };
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  const isActive = (path) => pathname === path;

  const handleMobileSubmenu = (id) => {
    setMobileSubmenu(mobileSubmenu === id ? null : id);
  };

  const handleMobileClose = () => {
    setMobileOpen(false);
    setMobileSubmenu(null);
  };

  const firstHalf = NavLinks.slice(0, 4);
  const secondHalf = NavLinks.slice(4);
  const activeStyle =
    "px-4 py-2 flex justify-center items-center gap-2 rounded-[20px] bg-white/30 transition-all duration-200";

  return (
    <div
      className={`w-full fixed z-[10000] transition-all duration-300 ${
        navBg ? "bg-white shadow-md text-black" : "bg-transparent text-white"
      }`}
    >
      <TopBar />

      {/* ===== DESKTOP NAV ===== */}
      <div className="hidden lg:flex items-center justify-between text-[16px] font-medium py-3 relative max-w-[1400px] mx-auto w-full px-8">
        {/* Left Menus */}
        <div className="flex items-center justify-end flex-1 gap-8">
          {firstHalf.map((link) => {
            const isParentActive =
              isActive(link.path) ||
              link.submenu?.some((sub) => isActive(sub.path));
            return (
              <div
                key={link.id}
                className="relative group"
                onMouseEnter={() => setOpenSubmenu(link.id)}
                onMouseLeave={() => setOpenSubmenu(null)}
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
                  {link.submenu && <IoChevronDown className="text-sm mt-[2px]" />}
                </Link>
                {link.submenu && openSubmenu === link.id && (
                  <div className="absolute left-0 top-full bg-white text-black mt-1 shadow-lg rounded-lg w-56 py-2 z-[9999] border border-gray-200">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.id}
                        href={sub.path}
                        className={`block px-4 py-2 ${
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
        <div className="flex-shrink-0 mx-8">
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={90}
              height={90}
              className="object-contain rounded-full bg-white p-1 shadow-md"
              priority
            />
          </Link>
        </div>

        {/* Right Menus */}
        <div className="flex items-center justify-start flex-1 gap-8">
          {secondHalf.map((link) => {
            const isParentActive =
              isActive(link.path) ||
              link.submenu?.some((sub) => isActive(sub.path));
            return (
              <div
                key={link.id}
                className="relative group"
                onMouseEnter={() => setOpenSubmenu(link.id)}
                onMouseLeave={() => setOpenSubmenu(null)}
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
                  {link.submenu && <IoChevronDown className="text-sm mt-[2px]" />}
                </Link>
                {link.submenu && openSubmenu === link.id && (
                  <div className="absolute left-0 top-full bg-white text-black mt-1 shadow-lg rounded-lg w-56 py-2 z-[9999] border border-gray-200">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.id}
                        href={sub.path}
                        className={`block px-4 py-2 hover:bg-gray-100 ${
                          isActive(sub.path)
                            ? "bg-[#03284b] text-white rounded-md"
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

      {/* ===== MOBILE NAV ===== */}
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

        {/* Hamburger button */}
        <HiBars3BottomRight
          className={`${navBg ? "text-black" : "text-white"} w-8 h-8 cursor-pointer`}
          onClick={() => setMobileOpen(true)}
        />
      </div>

      {/* ===== MOBILE MENU SLIDE ===== */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 sm:w-80 bg-white text-black shadow-2xl transform transition-transform duration-300 z-[99999] ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <span className="font-semibold text-lg text-[#00488B]">Menu</span>
          <IoClose
            className="text-2xl cursor-pointer text-[#00488B]"
            onClick={handleMobileClose}
          />
        </div>

        {/* Menu List */}
        <div className="flex flex-col p-4 gap-2 overflow-y-auto max-h-[calc(100vh-80px)]">
          {NavLinks.map((link) => (
            <div key={link.id}>
              {link.submenu ? (
                <>
                  <button
                    onClick={() => handleMobileSubmenu(link.id)}
                    className="w-full flex justify-between items-center py-3 px-2 font-medium text-left hover:text-[#00488B]"
                  >
                    {link.name}
                    <IoChevronDown
                      className={`transition-transform duration-200 ${
                        mobileSubmenu === link.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {/* Submenu */}
                  {mobileSubmenu === link.id && (
                    <div className="pl-4 flex flex-col border-l border-gray-300">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.id}
                          href={sub.path}
                          onClick={handleMobileClose}
                          className={`py-2 text-sm hover:text-[#00488B] ${
                            isActive(sub.path)
                              ? "text-[#00488B] font-semibold"
                              : "text-gray-700"
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.path}
                  onClick={handleMobileClose}
                  className={`block py-3 px-2 font-medium hover:text-[#00488B] ${
                    isActive(link.path) ? "text-[#00488B]" : "text-gray-800"
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[99998]"
          onClick={handleMobileClose}
        ></div>
      )}
    </div>
  );
};

export default Nav;
