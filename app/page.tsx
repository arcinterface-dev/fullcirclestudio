import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { StorytellingSection } from '@/components/home/StorytellingSection';
import { PortfolioPreview } from '@/components/home/PortfolioPreview';
import { AboutUsSection } from '@/components/home/AboutUsSection';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { ShapoTestimonials } from '@/components/home/ShapoTestimonials';
import { CTASection } from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <StorytellingSection />
      <PortfolioPreview />
      <ShapoTestimonials />
      <ServicesPreview />
      <CTASection />
    </>
  );
}
