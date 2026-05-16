import React from 'react';
import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { FAQAccordion } from '@/components/faq/FAQAccordion';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about fullcircle studio, our design process, and what you can expect.',
};

export default function FAQPage() {
  return (
    <main>
      <PageHeader 
        title="Common Queries" 
        description="Answers to the most frequent questions we receive about our process, timelines, and design philosophy."
      />
      <FAQAccordion />
      <CTASection />
    </main>
  );
}
