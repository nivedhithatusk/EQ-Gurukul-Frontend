import React from "react";
import "../gurukulworld.css";
import ParentEngagementContent from "@/components/GurukulWorld/ParentEngagementContent";
import WhyParentEngageMatters from "@/components/GurukulWorld/WhyParentEngageMatters";
import ParentEngagementTimeline from "@/components/GurukulWorld/ParentEngagementTimeline";
import ParentEngagementOtherDetails from "@/components/GurukulWorld/ParentEngagementOtherDetails";
import overview_banner from "@/assets/hero_banner/overview_banner.jpg";
import CommonBanner from "@/components/CommonBanner";

const ParentEngagementPage = () => {
  return (
    <>
      <CommonBanner
        bannerImageSrc={overview_banner}
        bannerImageAlt="Parent Engagement Banner"
        bannerTitle="Parent Engagement"
        id="parentengagement_banner"
      />
      <ParentEngagementContent />
      <WhyParentEngageMatters />
      <ParentEngagementTimeline />
      <ParentEngagementOtherDetails />
    </>
  );
};

export default ParentEngagementPage;
