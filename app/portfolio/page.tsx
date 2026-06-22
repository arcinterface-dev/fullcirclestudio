import React from 'react';
import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { DesignerGallery } from '@/components/portfolio/DesignerGallery';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore our curated collection of cinematic interior design projects. Witness the transformation of spaces.',
};

export default function PortfolioPage() {
  return (
    <main>
      <PageHeader
        title="Let's explore our designer's work"
        description="Selected works presented here reflect the design experience and creative portfolio of our designers."
      />
      <DesignerGallery />
      <CTASection />
    </main>
  );
}
