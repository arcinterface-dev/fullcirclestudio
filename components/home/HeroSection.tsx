'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { BrandName } from '@/components/ui/BrandName';
import { BRAND } from '@/lib/constants';
import { HeroVisual3D } from './HeroVisual3D';
import styles from './HeroSection.module.scss';

export const HeroSection = () => {
  return (
    <section className={styles.hero} id="hero">
      <Container className={styles.content}>
        <motion.div
          className={styles.textBlock}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.brandWrapper}>
            <div className={styles.brandContainer}>
              <BrandName />
            </div>
            <motion.div
              className={styles.heroTagline}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 1.2,
                    staggerChildren: 0.04,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              {BRAND.tagline.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 5 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <h1 className={styles.mainTitle}>
            Transform Your Space<span className={styles.accent}>.</span>
            <br />
            Elevate Your Life
          </h1>

          <p className={styles.description}>
            We specialize in creating unique and functional interiors tailored to your needs.
            Whether you desire a cozy home retreat or a sophisticated office space, our team
            of expert designers will bring your vision to life.
          </p>

          <div className={styles.ctaGroup}>
            <a href="/contact" className={styles.ctaButton}>Get Started</a>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <p className={styles.statNumber}>10k+</p>
                <p className={styles.statLabel}>Happy Customers</p>
              </div>
              <div className={styles.statItem}>
                <p className={styles.statNumber}>500+</p>
                <p className={styles.statLabel}>Projects</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>

      <motion.div
        className={styles.sofaWrapper}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: 0, ease: "easeInOut" }}
      >
        <Image
          src="/images/hero/hero-sofa.png"
          alt="Designer sofa by fullcircle studio"
          width={400}
          height={300}
          className={styles.heroSofa}
          priority
        />
      </motion.div>

      <motion.div
        className={styles.visualBlock}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <HeroVisual3D />
        <div className={styles.visualAura} />
      </motion.div>
    </section>
  );
};
