'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { StorytellingVisual3D } from './StorytellingVisual3D';
import styles from './StorytellingSection.module.scss';

interface Step {
  number: string;
  title: string;
  description: string;
  image: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Design',
    description: 'We begin with deep empathy—listening beyond the brief to understand people, purpose, timeline, and budget as one complete picture, translating it into clear, intentional design grounded in what is realistically achievable.',
    image: '/images/process/design.webp'
  },
  {
    number: '02',
    title: 'Detail',
    description: 'We move into detailed documentation that works like a construction guide. Every dimension, material, and installation method is precisely defined so that the site team can build without confusion.',
    image: '/images/process/detail.webp'
  },
  {
    number: '03',
    title: 'Execute',
    description: 'We execute through our in-house factory, where trained craftsmen work with GFC drawings to ensure high-quality output. We track every stage with clear documentation for full transparency and control.',
    image: '/images/process/execute.webp'
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'No blind promises—every schedule is built on actual scope and pace. We ensure smooth delivery with continuous tracking and a final handover support system, including aftercare guidance and product tips.',
    image: '/images/process/delivery.webp'
  },
];

const StoryStep = ({ index, scrollYProgress }: { index: number; scrollYProgress: MotionValue<number> }) => {
  const stepStart = index / steps.length;
  const stepEnd = (index + 1) / steps.length;
  const isLast = index === steps.length - 1;

  const opacity = useTransform(
    scrollYProgress,
    [stepStart, stepStart + 0.1, stepEnd - 0.1, isLast ? 1.1 : stepEnd],
    [0, 1, 1, isLast ? 1 : 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [stepStart, stepStart + 0.1, stepEnd - 0.1, isLast ? 1.1 : stepEnd],
    [0.95, 1, 1, isLast ? 1 : 1.05]
  );

  const y = useTransform(
    scrollYProgress,
    [stepStart, stepStart + 0.1, stepEnd - 0.1, isLast ? 1.1 : stepEnd],
    [30, 0, 0, isLast ? 0 : -30]
  );

  const step = steps[index];

  return (
    <motion.div
      className={styles.step}
      style={{ opacity, scale, y }}
    >
      <div className={styles.stepContent}>
        <div className={styles.spacer} />
        <div className={styles.stepTextWrapper}>
          <span className={styles.stepNumber}>{step.number}</span>
          <div className={styles.stepText}>
            <h3 className={styles.stepTitle}>
              {step.title}<span className={styles.stepAccent}>.</span>
            </h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BackgroundImage = ({ index, progress, step }: { index: number; progress: MotionValue<number>; step: Step }) => {
  const stepStart = index / steps.length;
  const stepEnd = (index + 1) / steps.length;

  const opacity = useTransform(
    progress,
    [stepStart - 0.1, stepStart, stepEnd, stepEnd + 0.1],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      className={styles.bgImage}
      style={{
        backgroundImage: `url(${step.image})`,
        opacity
      }}
    />
  );
};

const BackgroundImages = ({ progress }: { progress: MotionValue<number> }) => {
  return (
    <div className={styles.bgContainer}>
      <div className={styles.bgStickyWrapper}>
        {steps.map((step, index) => (
          <BackgroundImage 
            key={index} 
            index={index} 
            progress={progress} 
            step={step} 
          />
        ))}
        <div className={styles.bgOverlay} />
      </div>
    </div>
  );
};


export const StorytellingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className={styles.section} ref={containerRef} id="process">
      <BackgroundImages progress={smoothProgress} />
      <StorytellingVisual3D />
      <div className={styles.stickyWrapper}>
        {steps.map((_, index) => (
          <StoryStep key={index} index={index} scrollYProgress={smoothProgress} />
        ))}
      </div>
    </section>
  );
};

