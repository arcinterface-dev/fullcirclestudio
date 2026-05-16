import React from 'react';
import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { ServiceGrid } from '@/components/services/ServiceGrid';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive interior design services from residential transformations to commercial aesthetic overhauls.',
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader 
        title="Our Expertise" 
        description="We offer a comprehensive suite of interior design services, each tailored to elevate your living or working environment."
      />
      <ServiceGrid />
      <CTASection />
    </main>
  );
}
