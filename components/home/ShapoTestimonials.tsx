'use client';

import React, { useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './ShapoTestimonials.module.scss';

export const ShapoTestimonials = () => {
  useEffect(() => {
    // Dynamically append the Shapo embed script on mount
    const script = document.createElement('script');
    script.id = 'shapo-embed-js';
    script.src = 'https://cdn.shapo.io/js/embed.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script on unmount to prevent multiple script tags
      const existingScript = document.getElementById('shapo-embed-js');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section className={styles.section} id="testimonials">
      <Container>
        <div className="mb-12 text-center md:text-left">
          <SectionHeading>Client Testimonials</SectionHeading>
          <p className="text-granite-gray mt-4 text-lg font-light">
            What our clients say about their experience with us
          </p>
        </div>
        <div className={styles.widgetContainer}>
          <svg
            className={styles.quoteIcon}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.918-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.918-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <div id="shapo-widget-4aa380356a20e2c59285"></div>
        </div>
      </Container>
    </section>
  );
};
