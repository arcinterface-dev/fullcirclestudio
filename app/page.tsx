import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { StorytellingSection } from '@/components/home/StorytellingSection';
import { TeamSection } from '@/components/home/TeamSection';
import { PortfolioPreview } from '@/components/home/PortfolioPreview';
import { AboutUsSection } from '@/components/home/AboutUsSection';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { CTASection } from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StorytellingSection />
      <TeamSection />
      <PortfolioPreview />
      <AboutUsSection />
      <ServicesPreview />
      <CTASection />
    </>
  );
}
