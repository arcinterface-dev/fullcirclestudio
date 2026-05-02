'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { StorytellingVisual3D } from './StorytellingVisual3D';
import styles from './StorytellingSection.module.scss';

const steps = [
  {
    number: '01',
    title: 'Design',
    description: 'We begin by understanding your vision, lifestyle, and space. Our designers create mood boards and conceptual layouts tailored to your aesthetic.',
    image: '/images/process/design.jpg'
  },
  {
    number: '02',
    title: 'Detail',
    description: 'Every element is meticulously planned — from material palettes and furniture selections to lighting schemes and spatial flow.',
    image: '/images/process/detail.jpg'
  },
  {
    number: '03',
    title: 'Execute',
    description: 'Our skilled craftsmen and trusted partners bring the design to life with precision, quality, and attention to every detail.',
    image: '/images/process/execute.jpg'
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'We reveal your transformed space, styled and ready to live in. The full circle is complete — a space that feels truly yours.',
    image: '/images/process/delivery.jpg'
  },
];

const StoryStep = ({ index, scrollYProgress }: { index: number; scrollYProgress: any }) => {
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

const BackgroundImages = ({ progress }: { progress: any }) => {
  return (
    <div className={styles.bgContainer}>
      {steps.map((step, index) => {
        const stepStart = index / steps.length;
        const stepEnd = (index + 1) / steps.length;
        const isLast = index === steps.length - 1;

        const opacity = useTransform(
          progress,
          [stepStart - 0.1, stepStart, stepEnd, stepEnd + 0.1],
          [0, 1, 1, 0]
        );

        return (
          <motion.div
            key={index}
            className={styles.bgImage}
            style={{
              backgroundImage: `url(${step.image})`,
              opacity
            }}
          />
        );
      })}
      <div className={styles.bgOverlay} />
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
      <StorytellingVisual3D progress={smoothProgress} />
      <div className={styles.stickyWrapper}>
        {steps.map((_, index) => (
          <StoryStep key={index} index={index} scrollYProgress={smoothProgress} />
        ))}
      </div>
    </section>
  );
};
