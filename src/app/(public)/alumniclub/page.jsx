import React from "react";
import CommonBanner from "@/components/CommonBanner";
import overview_banner from "@/assets/hero_banner/overview_banner.jpg";
import AlumniClubContent from "@/components/AlumniClub/AlumniClubContent";
import AlumniClubBenefits from "@/components/AlumniClub/AlumniClubBenefits";
import RegisterForm from "@/components/AlumniClub/RegisterForm";

const page = () => {
  return (
    <>
      <CommonBanner
        bannerImageSrc={overview_banner}
        bannerImageAlt="Alumni Club Banner"
        bannerTitle="Alumni Club"
        id="alumniclub_banner"
      />
      <AlumniClubContent />
      <AlumniClubBenefits />
      <RegisterForm />
    </>
  );
};

export default page;
