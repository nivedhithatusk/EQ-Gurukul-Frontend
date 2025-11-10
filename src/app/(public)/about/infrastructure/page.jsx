import React from "react";
import "../about.css";
import overview_banner from "@/assets/hero_banner/overview_banner.jpg";
import CommonBanner from "@/components/CommonBanner";
import FacilityInfrastructureShowcase from "@/components/About/FacilityInfrastructureShowcase";

const page = () => {
  return (
    <>
      <CommonBanner
        bannerImageSrc={overview_banner}
        bannerImageAlt="Infrastructure Banner"
        bannerTitle="Infrastructure"
        id="infrastructure_banner"
      />
      <FacilityInfrastructureShowcase />
    </>
  );
};

export default page;
