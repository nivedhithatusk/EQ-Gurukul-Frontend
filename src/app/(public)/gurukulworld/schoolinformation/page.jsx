import React from "react";
import "../gurukulworld.css";
import SchoolInformationContent from "@/components/GurukulWorld/SchoolInformationContent";
import SchoolInformationDetails from "@/components/GurukulWorld/SchoolInformationDetails";
import overview_banner from "@/assets/hero_banner/overview_banner.jpg";
import CommonBanner from "@/components/CommonBanner";

const SchoolInformationPage = () => {
  return (
    <>
      <CommonBanner
        bannerImageSrc={overview_banner}
        bannerImageAlt="School Information Banner"
        bannerTitle="School Information"
        id="schoolinformation_banner"
      />
      <SchoolInformationContent />
      <SchoolInformationDetails />
    </>
  );
};

export default SchoolInformationPage;
