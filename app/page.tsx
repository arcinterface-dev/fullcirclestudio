import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { StorytellingSection } from '@/components/home/StorytellingSection';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { PortfolioPreview } from '@/components/home/PortfolioPreview';
import { CTASection } from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StorytellingSection />
      <ServicesPreview />
      <PortfolioPreview />
      <CTASection />
    </>
  );
}
