/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import styles from './AboutUsSection.module.scss';

export const AboutUsSection = () => {
  return (
    <section className={styles.section} id="philosophy">
      <Container>
        {/* Title Section */}
        <motion.div
          className={styles.titleContainer}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            Design with Responsibility.<br />
            <span className={styles.accentText}>Deliver with Vision.</span>
          </h2>
        </motion.div>

        {/* 3-Column Grid */}
        <div className={styles.grid}>
          {/* Column 1: Left-side designed space image */}
          <motion.div
            className={styles.leftColumn}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src="/images/about/our mission.jpg"
                alt="FullCircle Studio Interior"
                className={styles.image}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </motion.div>

          {/* Column 2: Center-side content */}
          <motion.div
            className={styles.centerColumn}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className={`${styles.description} ${styles.introSentence}`}>
              <strong>fullcircle studio</strong> is a Chennai-based architecture and interior design studio that works across luxury residential and commercial spaces.
            </p>
            <p className={styles.description}>
              Our journey began with the idea of designing responsibly. A space should not be created just to impress, follow trends, or exist for portfolios. It should feel meaningful, function honestly, and serve the people who live within it. That belief shaped the way we work — with responsibility in every decision, clarity in every detail, and intention in every stage of execution.
            </p>

            <div className={styles.principlesContainer}>
              <p className={styles.principlesHeading}>
                Over time, that mindset became our strongest principles:
              </p>
              <ul className={styles.principlesList}>
                <li>No compromises in quality</li>
                <li>No compromises in timelines</li>
                <li>No compromises in terms</li>
              </ul>
            </div>

            <p className={styles.shortcutsText}>
              Because meaningful spaces are never built through shortcuts.
            </p>

            <p className={styles.noCorners}>&quot;NO CORNER CUTS.&quot;</p>

            <div className={styles.buttonWrapper}>
              <Link href="/about" className={styles.redirectButton}>
                Know More About Us
              </Link>
            </div>
          </motion.div>

          {/* Column 3: Right-side founder card */}
          <motion.div
            className={styles.rightColumn}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className={styles.founderCard}>
              <div className={styles.founderImageWrapper}>
                <Image
                  src="/images/team/rafic.webp"
                  alt="Mohammed Rafic - Founder & Principal Designer"
                  className={styles.founderImage}
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>
              <div className={styles.founderInfo}>
                <h3 className={styles.founderName}>Mohammed Rafic</h3>
                <p className={styles.founderRole}>Founder & Principal Designer</p>
                <div className={styles.linkedinWrapper}>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkedinLink}
                    aria-label="Connect on LinkedIn"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
