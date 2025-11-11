import React from "react";
import HomeBanner from "@/components/Home/HomeBanner";
import GurukulHolisticApproach from "@/components/Home/GurukulHolisticApproach";
import AcademicAchievements from "@/components/Home/AcademicAchievements";
import KindergartenSection from "@/components/Home/KindergartenSection";
import InsightsAndNews from "@/components/Home/InsightsAndNews";
import EventsSection from "@/components/Home/EventsSection";
import ContactSection from "@/components/Home/ContactSection";
import ApproachSection from "@/components/Home/ApproachSection";
import "./home.css";
import HomeFooter from "@/components/Home/HomeFooter";
import BranchData from "@/constant/BranchData";
import OurAcademic from "@/components/Branch/OurAcademic";

export default function Home() {
  return (
    <main className="w-full">
      <HomeBanner />
      <ApproachSection />
      <GurukulHolisticApproach />
      {/* <AcademicAchievements /> */}
      <OurAcademic id="home"/>
      <KindergartenSection />
      <InsightsAndNews />
      <EventsSection />
      <ContactSection />
      <HomeFooter />
    </main>
  );
}
