import React from "react";
import "../gurukulworld.css";
import AcademicsProgrammeOverview from "@/components/GurukulWorld/AcademicsProgrammeOverview";
import AcademicsAndAssessmentsPattern from "@/components/GurukulWorld/AcademicsAndAssessmentsPattern";
import overview_banner from "@/assets/hero_banner/overview_banner.jpg";
import CommonBanner from "@/components/CommonBanner";

const AcademicsAndAssessmentsPage = () => {
  return (
    <>
      <CommonBanner
        bannerImageSrc={overview_banner}
        bannerImageAlt="Academics & Assessments Banner"
        bannerTitle="Academics & Assessments"
        id="academicsandassessments_banner"
      />
      <AcademicsProgrammeOverview />
      <AcademicsAndAssessmentsPattern />
    </>
  );
};

export default AcademicsAndAssessmentsPage;
