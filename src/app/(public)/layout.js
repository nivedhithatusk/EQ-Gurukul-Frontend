"use client";
import React from "react";
import "../globals.css";
import Navbar from "../../components/Navbar/Nav";
import TopBar from "@/components/Navbar/TopBar";
import Footer from "@/components/Navbar/Footer";

export default function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
