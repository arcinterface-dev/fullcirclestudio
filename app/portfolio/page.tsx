import React from 'react';
import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { ProjectGrid } from '@/components/portfolio/ProjectGrid';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore our curated collection of cinematic interior design projects. Witness the transformation of spaces.',
};

export default function PortfolioPage() {
  return (
    <main>
      <PageHeader 
        title="Selected Works" 
        description="A showcase of our most defining projects. Each space is a unique narrative brought to life through meticulous design and craftsmanship."
      />
      <ProjectGrid />
      <CTASection />
    </main>
  );
}
