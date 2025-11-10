import React from "react";
import GroupOfSchools from "@/components/Schools/GroupOfSchools";
import SchoolBranches from "@/components/Schools/SchoolBranches";
import "./schools.css";
import ParentTeacherMeeting from "@/components/Schools/ParentTeacherMeeting";
import StrongFoundation from "@/components/Schools/StrongFoundation";
import CommonBanner from "@/components/CommonBanner";
import schools_banner from "@/assets/hero_banner/schools_banner.jpg";

const SchoolPage = () => {
  return (
    <>
      <CommonBanner
        bannerImageSrc={schools_banner}
        bannerImageAlt="School Banner"
        bannerTitle="Equitas Gurukul Schools"
        id="schoolbanner"
      />
      <GroupOfSchools />
      <SchoolBranches />
      <ParentTeacherMeeting />
      <StrongFoundation />
    </>
  );
};

export default SchoolPage;
