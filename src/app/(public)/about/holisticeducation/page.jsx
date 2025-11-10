import React from "react";
import CommonBanner from "@/components/CommonBanner";
import HolisticEducationContent from "@/components/About/HolisticEducationContent";
import HolisticEducationApproach from "@/components/About/HolisticEducationApproach";
import HolisticProgramsandActivities from "@/components/About/HolisticProgramsandActivities";
import overview_banner from "@/assets/hero_banner/overview_banner.jpg";
import "../about.css";

const page = () => {
  return (
    <>
      <CommonBanner
        bannerImageSrc={overview_banner}
        bannerImageAlt="Holistic Education Banner"
        bannerTitle="Holistic Education"
        id="holisticeducation_banner"
      />
      <HolisticEducationContent />
      <HolisticEducationApproach />
      <HolisticProgramsandActivities />
    </>
  );
};

export default page;
