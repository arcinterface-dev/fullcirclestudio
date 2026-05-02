'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './BrandAnimation.module.scss';
import { BRAND } from '@/lib/constants';

const AnimatedLogo = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 0.5 + i * 0.3;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.5 }
        }
      };
    }
  };

  return (
    <motion.svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      initial="hidden"
      animate="visible"
      className="text-jet-black"
    >
      <motion.circle
        cx="60"
        cy="60"
        r="40"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        variants={draw}
        custom={0}
      />
      <motion.path
        d="M 10 50 Q 60 90 110 50"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        variants={draw}
        custom={1}
      />
      <motion.circle
        cx="40"
        cy="62"
        r="3"
        fill="currentColor"
        variants={draw}
        custom={2}
      />
      <motion.circle
        cx="80"
        cy="68"
        r="4"
        fill="currentColor"
        stroke="#f5f5f5"
        strokeWidth="1"
        variants={draw}
        custom={2}
      />
    </motion.svg>
  );
};

export const BrandAnimation = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: 2.5, duration: 0.5, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      <div className={styles.logoContainer}>
         <AnimatedLogo />
      </div>
      <div className={styles.textContainer}>
        <motion.span
          className={styles.name}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {BRAND.name}
        </motion.span>
        
        <motion.span
          className={styles.suffix}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          {BRAND.suffix}
        </motion.span>
        
        <motion.span
          className={styles.dot}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.0, type: "spring", stiffness: 300, damping: 15 }}
        >
          .
        </motion.span>
      </div>
    </motion.div>
  );
};
