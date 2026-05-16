'use client';

import { motion } from 'framer-motion';
import styles from './HeroSection.module.scss';

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: "110%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1], // Sophisticated editorial ease
      }
    },
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bgWrapper}>
        <div className={styles.bgOverlay} />
        <img 
          src="/images/hero/hero-banner.webp" 
          alt="FullCircle Studio Hero Banner" 
          className={styles.bgImage}
        />
      </div>
      <div className={styles.refinedLayout}>
        <div className={styles.leftContent}>
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="block overflow-hidden pb-1">
              <motion.span variants={itemVariants} className={styles.line1}>We believe design</motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span variants={itemVariants} className={styles.line2}>is not about spending more.</motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span variants={itemVariants} className={styles.line3}>It is about <span className={styles.spendingRight}>spending right.</span></motion.span>
            </span>
          </motion.h1>
        </div>
        
        <motion.div 
          className={styles.bottomContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
        >
          <p className={styles.infoText}>
            Designing with responsibility.<br/>
            Executing with a vision.
          </p>
          <a href="/contact?feeling=true" className={styles.feelingButton}>
            GET MY FEELING
          </a>
        </motion.div>
      </div>
    </section>
  );
};
