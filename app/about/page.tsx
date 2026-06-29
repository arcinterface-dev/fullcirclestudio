import React from 'react';
import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { BrandStory } from '@/components/about/BrandStory';
import { MeetOurTeam } from '@/components/about/MeetOurTeam';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about fullcircle studio, our design philosophy, and our commitment to uncompromising quality.',
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="Our Mission"
        imageUrl="/images/about/our mission.jpg"
        description={`We do design with responsibility, balancing aesthetics, practicality, execution, by understanding the real needs of the people who use the space every day. For us, good design is not about unnecessary spending, visual gimmicks, or creating projects only for a showcase. It is about creating spaces that make sense emotionally, functionally, and financially.

We bring design, detailing, coordination, and execution together under one circle, so every stage of the project is handled with clarity and intention. We value honest processes, thoughtful decisions, and complete commitment from concept to completion.`}
      />
      <BrandStory />
      <MeetOurTeam />
      <CTASection />
    </main>
  );
}
