'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import styles from './BrandStory.module.scss';

export const BrandStory = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.content}>
        <motion.div 
          className={styles.textContent}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className={styles.heading}>
            Spaces should feel right, not just look good.
          </h2>
          <p className={styles.paragraph}>
            FULLCIRCLE STUDIO. was built on a simple belief—spaces should feel right, not just look good. We approach design with responsibility, balancing aesthetics, practicality, and the real needs of the people who use the space every day.
          </p>
          <p className={styles.paragraph}>
            Our work brings together design, detailing, and execution under one circle—ensuring every stage of the project is handled with clarity and intention. We value honest processes and complete commitment from concept to completion. Because meaningful spaces are never created through shortcuts.<br /><br />
            <strong>NO CORNERS CUT.</strong>
          </p>
        </motion.div>

        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          {/* Using hero-sofa as placeholder for now */}
          <Image
            src="/images/process/design.webp"
            alt="fullcircle studio design process"
            fill
            className={styles.image}
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </motion.div>
      </Container>
    </section>
  );
};
