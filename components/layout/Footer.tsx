'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { BrandName } from '@/components/ui/BrandName';
import { BRAND } from '@/lib/constants';
import styles from './Footer.module.scss';

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.content}>
        <div>
          <BrandName />
        </div>

        <div className={styles.socials}>
          <a href={BRAND.socials.instagram} target="_blank" rel="noreferrer" className={styles.link} aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href={BRAND.socials.facebook} target="_blank" rel="noreferrer" className={styles.link} aria-label="Facebook">
            <FacebookIcon />
          </a>
          <a href={BRAND.socials.linkedin} target="_blank" rel="noreferrer" className={styles.link} aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
        </div>
      </Container>

      <Container>
        <p className={`${styles.copy} mt-12 text-center`}>
          © {new Date().getFullYear()} {BRAND.name}{BRAND.suffix}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};
