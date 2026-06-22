'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import styles from './BrandStory.module.scss';

export const BrandStory = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.headerContainer}>
          <motion.span 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            FOUNDER & PRINCIPAL DESIGNER
          </motion.span>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Mohammed Rafic
          </motion.h2>
        </div>

        <div className={styles.grid}>
          {/* Left Column: Image */}
          <motion.div
            className={styles.leftColumn}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.imageWrapper} style={{ position: 'relative', width: '100%', height: '100%', minHeight: '400px' }}>
              <Image
                src="/images/team/rafic.webp"
                alt="Mohammed Rafic - Founder & Principal Designer"
                className={styles.image}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </motion.div>

          {/* Right Column: Bio & Quote Card */}
          <motion.div
            className={styles.rightColumn}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className={styles.bioText}>
              <p className={styles.paragraph}>
                After working across startups, growing businesses, corporate environments, and building an interior design firm from the ground up with proven execution, I developed a clear understanding of how systems and clear communication improve project outcomes. I also observed key gaps in the industry—unclear coordination, inconsistent documentation, uncontrolled spending, compromised quality, and lack of transparency in timelines.
              </p>
              <p className={styles.paragraph}>
                My approach is structured, practical, and client-centric, rooted in empathy and informed decision-making. I focus on crafting functional, intentional, and well-executed spaces tailored to each client’s needs without making hole in their pocket.
              </p>
            </div>

            {/* Quote Card */}
            <div className={styles.quoteCard}>
              <span className={styles.quoteCardTitle}>A Note from the Founder...</span>
              <div className={styles.quoteContent}>
                <span className={styles.quoteMark}>&ldquo;</span>
                <p className={styles.quoteText}>
                  Through FullCircle Studio, we deliver a transparent and reliable design experience where quality, timelines, communication, and execution are equally prioritized.
                </p>
                <div className={styles.signatureContainer}>
                  <span className={styles.signature}>Mohammed Rafic</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
