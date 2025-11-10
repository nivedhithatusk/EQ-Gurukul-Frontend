import React from 'react'
import CommonBanner from '@/components/CommonBanner'
import overview_banner from "@/assets/hero_banner/overview_banner.jpg";
import CareerOpportunities from '@/components/Careers/CareerOpportunities';
import '../../globals.css';
import LetsWorkTogether from '@/components/Careers/LetsWorkTogether';

const page = () => {
  return (
    <>
    <CommonBanner
        bannerImageSrc={overview_banner}
        bannerImageAlt="Careers Banner"
        bannerTitle="Careers"
        id="careers_banner"
      />
      <CareerOpportunities />
      <LetsWorkTogether />
    </>
  )
}

export default page