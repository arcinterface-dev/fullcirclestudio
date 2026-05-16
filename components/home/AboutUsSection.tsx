/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './AboutUsSection.module.scss';

export const AboutUsSection = () => {
  return (
    <section className={styles.section} id="philosophy">
      <Container>
        <div className={styles.grid}>
          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading>Our Vision</SectionHeading>
            <p className={styles.description}>
              Our journey began with a vision to bridge creativity and execution under one circle—where ideas, detailing, project management, and craftsmanship work together seamlessly. From concept to completion, we focus on delivering environments that are refined, functional, and emotionally engaging.
            </p>
            <p className={styles.description}>
              We are building more than interiors. We are creating a platform where design professionals, skilled vendors, and clients come together to shape meaningful spaces without compromises. <br /><br />
              <strong>NO CORNERS CUT.</strong>
            </p>
            
            <a href="/about" className={styles.redirectButton}>
              Learn More About Us
            </a>
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
