import React from 'react'
import CommonBanner from '@/components/CommonBanner'
import overview_banner from "@/assets/hero_banner/overview_banner.jpg";
import ContactUsSection from '@/components/ContactUs/ContactUsSection';
import "../about/about.css";

const page = () => {
  return (
    <>
    <CommonBanner
        bannerImageSrc={overview_banner}
        bannerImageAlt="Contact Banner"
        bannerTitle="Contact Us"
        id="Contact"
      />
      <ContactUsSection />
    </>
  )
}

export default page