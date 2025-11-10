"use client";
import React from "react";
import "../about.css";
import overview_banner from "@/assets/hero_banner/overview_banner.jpg";
import GoalandMission from "@/components/About/OverviewGoalandMission";
import OurTrustees from "@/components/About/OverviewOurTrustees";
import OurStakeholders from "@/components/About/OverviewOurStakeholders";
import ReachUs from "@/components/About/OverviewReachUs";
import CommonBanner from "@/components/CommonBanner";

export default function OverviewPage() {
  return (
    <>
      <CommonBanner
        bannerImageSrc={overview_banner}
        bannerImageAlt="Overview Banner"
        bannerTitle="About Us"
        id="aboutus"
      />
      <GoalandMission />
      <OurTrustees />
      <OurStakeholders />
      <ReachUs />
    </>
  );
}
