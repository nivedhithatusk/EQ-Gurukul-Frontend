import React from 'react'
import CommonBanner from '@/components/CommonBanner'
import overview_banner from "@/assets/hero_banner/overview_banner.jpg";
import NurturingSection from '@/components/Admissions/NurturingSection';
import AdmissionCategories from '@/components/Admissions/AdmissionCategories';
import AdmissionProcess from '@/components/Admissions/AdmissionProcess';
import EnquiryForm from '@/components/Admissions/EnquiryForm';

const page = () => {
  return (
    <>
    <CommonBanner
        bannerImageSrc={overview_banner}
        bannerImageAlt="Admissions Banner"
        bannerTitle="Admissions"
        id="admissions_banner"
      />
      <NurturingSection />
      <AdmissionCategories />
      <AdmissionProcess />
      <EnquiryForm />
    </>
  )
}

export default page