import React from "react";
import "../gurukulworld.css";
import RewardsAwardCategories from "@/components/GurukulWorld/RewardsAwardCategories";
import RewardsAwardsGallery from "@/components/GurukulWorld/RewardsAwardsGallery";
import RewardsAndRecognitionsDetails from "@/components/GurukulWorld/RewardsAndRecognitionsDetails";
import overview_banner from "@/assets/hero_banner/overview_banner.jpg";
import CommonBanner from "@/components/CommonBanner";

const RewardsAndRecognitionsPage = () => {
  return (
    <>
      <CommonBanner
        bannerImageSrc={overview_banner}
        bannerImageAlt="Rewards & Recognitions Banner"
        bannerTitle="Rewards & Recognitions"
        id="rewardsandrecognitions_banner"
      />
      <RewardsAwardCategories />
      <RewardsAwardsGallery />
      <RewardsAndRecognitionsDetails />
    </>
  );
};

export default RewardsAndRecognitionsPage;
