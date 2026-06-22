import React from 'react';
import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { TeamList } from '@/components/team/TeamList';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the visionaries, designers, and execution team at Full Circle Studio.',
};

export default function TeamPage() {
  return (
    <main>
      <PageHeader 
        title="Our Team" 
        description="The planners, designers, and craftsmen bringing order and visual harmony to design and execution."
      />
      <TeamList />
      <CTASection />
    </main>
  );
}
