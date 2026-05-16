'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import styles from './CTASection.module.scss';

export const CTASection = () => {
  return (
    <section className={styles.section} id="cta">
      <Container>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className={styles.title}>
            Ready To Work<span className={styles.accent}>?</span>
          </h2>
          <p className={styles.description}>
            Let&apos;s create something extraordinary together. Reach out to discuss your next project
            and see how we can transform your space.
          </p>
          <div className={styles.ctaGroup}>
            <a href="/contact" className={styles.ctaButton}>Book Now</a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
