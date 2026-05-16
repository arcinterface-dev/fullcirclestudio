import React from 'react';
import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { BrandStory } from '@/components/about/BrandStory';
import { ValuesSection } from '@/components/about/ValuesSection';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about fullcircle studio, our cinematic design philosophy, and our commitment to uncompromising quality.',
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader 
        title="Our Story" 
        description="We are a collective of designers and architects dedicated to crafting spaces with narrative depth and uncompromising precision."
      />
      <BrandStory />
      <ValuesSection />
      <CTASection />
    </main>
  );
}
