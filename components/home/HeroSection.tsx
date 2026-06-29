'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroSection.module.scss';

export const HeroSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.8,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: "140%", opacity: 0 },
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
        <Image
          src="/images/hero/hero1.png"
          alt="FullCircle Studio Hero Banner"
          fill
          priority
          className={styles.bgImage}
        />
      </div>
      <div className={styles.refinedLayout}>
        <div className={styles.leftContent}>
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={styles.titleContainer}
          >
            {/* Line 1 */}
            <span className={styles.lineWrapper}>
              <motion.span variants={itemVariants} className={styles.line1}>
                We believe design
              </motion.span>
            </span>

            {/* Line 2 */}
            <span className={styles.lineWrapper}>
              <motion.span variants={itemVariants} className={styles.line2}>
                <span className={styles.accentUnderline}>is not about</span> spending more.
              </motion.span>
            </span>

            {/* Line 3 */}
            <span className={styles.lineWrapper}>
              <motion.span variants={itemVariants} className={styles.line3}>
                <span className={styles.line3Prefix}>It&apos;s about</span>
                <span className={styles.line3Suffix}>spending right.</span>
              </motion.span>
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
            Let&apos;s discover <br /> your perfect space
          </p>
          <Link href="/contact?feeling=true" className={styles.feelingButton}>
            GET MY FEELING
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
