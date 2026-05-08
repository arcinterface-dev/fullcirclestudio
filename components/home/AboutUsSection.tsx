'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './AboutUsSection.module.scss';

export const AboutUsSection = () => {
  return (
    <section className={styles.section} id="about-us">
      <Container>
        <div className={styles.grid}>
          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading>About Us</SectionHeading>
            <p className={styles.description}>
              At FullCircle Studio, we believe that the spaces we inhabit shape the lives we lead. Founded on the principles of neo-classical elegance and modern minimalism, our studio transcends traditional interior design. We curate experiences, blending timeless aesthetics with uncompromising functionality.
            </p>
            <p className={styles.description}>
              Our multi-disciplinary team of architects, designers, and artisans work collaboratively to transform visions into tangible realities. From the initial conceptual sketches to the final curated object placement, we obsess over every detail to ensure the final result is nothing short of perfection.
            </p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>12+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>85</span>
                <span className={styles.statLabel}>Projects Completed</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>14</span>
                <span className={styles.statLabel}>Design Awards</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.imageContent}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.imageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                alt="Our Studio" 
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.imageOverlay}></div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
