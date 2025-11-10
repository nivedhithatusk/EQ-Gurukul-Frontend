import React from "react";
import BranchData from "@/constant/BranchData";
import AboutEquitasGurukul from "@/components/Branch/AboutEquitasGurukul";
import OurPrincipal from "@/components/Branch/OurPrincipal";
import "./branch.css";
import AcademicsAndCurriculum from "@/components/Branch/AcademicsAndCurriculum";
import OurAcademic from "@/components/Branch/OurAcademic";
import Programs from "@/components/Branch/Programs";
import HolisticApproach from "@/components/Branch/HolisticApproach";
import BranchGallery from "@/components/Branch/BranchGallery";
import ReachUs from "@/components/Branch/ReachUs";
import CommonBanner from "@/components/CommonBanner";

export default async function BranchPage({ params }) {
  const { slug } = await params;
  const content = BranchData[slug];

  if (!content) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold">Branch Not Found</h1>
        <p>No content found for "{slug}".</p>
      </div>
    );
  }

  const id = content.id;
  const banner = content.branch_banner;
  const about = content.about_equitas_gurukul;
  const our_principle = content.our_principle;
  const academics_and_curriculum = content.academics_and_curriculum;

  return (
    <>
      <CommonBanner
        bannerImageSrc={banner.bannerImage}
        bannerImageAlt={banner.bannerImageAlt}
        bannerTitle={banner.bannerTitle}
        id={id}
      />
      <AboutEquitasGurukul
        id={id}
        title={about.title}
        description={about.description}
        image={about.image}
        imageAlt={about.imageAlt}
        steps={about.steps}
      />
      <OurPrincipal
        id={id}
        title={our_principle.title}
        image={our_principle.image}
        imageAlt={our_principle.imageAlt}
        name={our_principle.name}
        steps={our_principle.steps}
      />
      <AcademicsAndCurriculum
        id={id}
        four_images={academics_and_curriculum.four_images}
        two_cards={academics_and_curriculum.two_cards}
        three_cards={academics_and_curriculum.three_cards}
      />
      <OurAcademic id={id} />
      <Programs id={id} />
      <HolisticApproach id={id} />
      <BranchGallery id={id} />
      <ReachUs id={id} />
    </>
  );
}