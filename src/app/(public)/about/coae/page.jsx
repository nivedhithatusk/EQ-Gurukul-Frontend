import React from "react";
import "../about.css";
import overview_banner from "@/assets/hero_banner/overview_banner.jpg";

import CommonBanner from "@/components/CommonBanner";
import COAEOurPurpose from "@/components/About/COAEOurPurpose";
import COAEKeyFunction from "@/components/About/COAEKeyFunction";

const page = () => {
  return (
    <>
      <CommonBanner
        bannerImageSrc={overview_banner}
        bannerImageAlt="COAE Banner"
        bannerTitle="Centre of Academic Excellence (CoAE)"
        id="coae_banner"
      />
      <COAEOurPurpose />
      <COAEKeyFunction />
    </>
  );
};

export default page;
