'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
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
    title: 'Consultation',
    description:
      'We start by understanding your vision, requirements, and space. Through an initial discussion, we gather insights into your lifestyle and aesthetic preferences to lay a strong foundation for the project.',
    image: '/images/process/consultation.webp',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We begin with deep empathy—listening beyond the brief to understand people, purpose, timeline, and budget as one complete picture, translating it into clear, intentional design grounded in what is realistically achievable.',
    image: '/images/process/design.webp',
  },
  {
    number: '03',
    title: 'Detail',
    description:
      'We move into detailed documentation that works like a construction guide. Every dimension, material, and installation method is precisely defined so that the site team can build without confusion.',
    image: '/images/process/detail.webp',
  },
  {
    number: '04',
    title: 'Execute',
    description:
      'We execute through our in-house factory, where trained craftsmen work with GFC drawings to ensure high-quality output. We track every stage with clear documentation for full transparency and control.',
    image: '/images/process/execute.webp',
  },
  {
    number: '05',
    title: 'Styling',
    description:
      'We curate the final layer of personality. Through thoughtfully sourced furniture, art, and decor, we bring warmth and character, ensuring the space feels completely finished and uniquely yours.',
    image: '/images/process/styling.webp',
  },
  {
    number: '06',
    title: 'Delivery',
    description:
      'No blind promises—every schedule is built on actual scope and pace. We ensure smooth delivery with continuous tracking and a final handover support system, including aftercare guidance and product tips.',
    image: '/images/process/delivery.webp',
  },
];

const NUM_STEPS = steps.length; // 6
const LOCK_DURATION = 900; // ms cooldown between step transitions

// ── Arc configuration ──────────────────────────────────────────────
const RADIUS = 500;
const WHEEL_SIZE = RADIUS * 2; // 1000px

// Where each step sits on the circle (0° = 3-o'clock / right, positive = downward)
const STEP_ANGLES_DEG = [-75, -45, -15, 15, 45, 75];

// ── Background image layer ─────────────────────────────────────────
function BgImage({
  step,
  index,
  progress,
}: {
  step: Step;
  index: number;
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(
    progress,
    [index - 1, index, index + 1],
    [0, 1, 0],
  );

  return (
    <motion.div
      className={styles.bgImage}
      style={{ backgroundImage: `url(${step.image})`, opacity }}
    />
  );
}

// ── Single step node on the arc ────────────────────────────────────
function StepNode({
  step,
  index,
  wheelRotation,
  onDotClick,
}: {
  step: Step;
  index: number;
  wheelRotation: MotionValue<number>;
  onDotClick: () => void;
}) {
  const angleDeg = STEP_ANGLES_DEG[index];
  const rad = (angleDeg * Math.PI) / 180;

  // Place the node on the circle perimeter
  const left = RADIUS + RADIUS * Math.cos(rad);
  const top = RADIUS + RADIUS * Math.sin(rad);

  // Counter-rotate the ENTIRE node so it stays perfectly horizontal
  const nodeRotation = useTransform(wheelRotation, (r: number) => -r);

  // The text only shows when this step is very close to the active center (0°)
  const textOpacity = useTransform(wheelRotation, (r: number) => {
    const eff = Math.abs(angleDeg + r);
    // 1 at 0°, fades to 0 at 12°
    return Math.max(0, 1 - eff / 12);
  });

  // The dot remains visible but fades slightly when inactive
  const dotOpacity = useTransform(wheelRotation, (r: number) => {
    const eff = Math.abs(angleDeg + r);
    return eff < 10 ? 1 : 0.3;
  });

  const dotScale = useTransform(wheelRotation, (r: number) => {
    const eff = Math.abs(angleDeg + r);
    return eff < 8 ? 1.5 : 0.8;
  });

  // Shift text slightly depending on opacity for a smooth enter/exit effect
  const textY = useTransform(textOpacity, (op: number) => {
    return (1 - op) * 20; // moves down slightly as it fades out
  });

  // Disable pointer events when text is invisible so it doesn't block dot clicks
  const pointerEvents = useTransform(textOpacity, (op: number) => (op > 0.5 ? 'auto' : 'none'));

  return (
    <motion.div
      className={styles.stepNode}
      style={{
        left,
        top,
        x: 0,
        y: 0,
        rotate: nodeRotation,
        transformOrigin: "0px 0px"
      }}
    >
      <div className={styles.dotContainer} onClick={onDotClick} style={{ cursor: 'pointer' }}>
        <motion.div className={styles.stepDot} style={{ scale: dotScale, opacity: dotOpacity }} />
      </div>
      <div className={styles.textBlockWrapper}>
        <motion.div
          className={styles.stepTextBlock}
          style={{ opacity: textOpacity, y: textY, pointerEvents }}
        >
          <span className={styles.partLabel}>{step.number}</span>
          <h3 className={styles.stepTitle}>
            {step.title}
            <span className={styles.stepAccent}>.</span>
          </h3>
          <p className={styles.stepDescription}>{step.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}


// ── Main component ─────────────────────────────────────────────────
export const StorytellingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isLockedRef = useRef(false);
  const touchStartYRef = useRef(0);

  // ── Scroll logic ───────────────────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Map continuous scroll to a discrete step (0 to 5)
  const activeStep = useTransform(scrollYProgress, (p: number) => {
    return Math.min(5, Math.max(0, Math.round(p * 5)));
  });

  // Smoothly animate when the discrete step changes
  const smoothStep = useSpring(activeStep, {
    stiffness: 70,
    damping: 20,
    mass: 1,
    restDelta: 0.001,
  });

  // Map the animated step (0-5) to wheel rotation
  // Step 0 -> 75°, Step 1 -> 45°, Step 2 -> 15°, Step 3 -> -15°, Step 4 -> -45°, Step 5 -> -75°
  const wheelRotation = useTransform(smoothStep, [0, 1, 2, 3, 4, 5], [75, 45, 15, -15, -45, -75]);

  // ── Helper: get section geometry ────────────────────────────────────
  const getSectionInfo = useCallback(() => {
    const el = containerRef.current;
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    const sectionHeight = el.offsetHeight;
    // Each step occupies an equal slice of the section minus one viewport
    // (last step starts when sticky wrapper unsticks)
    const stepHeight = (sectionHeight - window.innerHeight) / (NUM_STEPS - 1);
    return { sectionTop, sectionHeight, stepHeight, rect };
  }, []);

  // ── Helper: figure out which step boundary we're closest to ─────────
  const getCurrentStep = useCallback(() => {
    const info = getSectionInfo();
    if (!info) return 0;
    const scrolled = window.scrollY - info.sectionTop;
    return Math.min(NUM_STEPS - 1, Math.max(0, Math.round(scrolled / info.stepHeight)));
  }, [getSectionInfo]);

  // ── Helper: is the section currently "pinned" (sticky wrapper active)? ──
  const isSectionActive = useCallback(() => {
    const info = getSectionInfo();
    if (!info) return false;
    const { rect } = info;
    // Section is active when its top is at or above the viewport top
    // AND its bottom is at or below the viewport bottom
    return rect.top <= 2 && rect.bottom >= window.innerHeight - 2;
  }, [getSectionInfo]);

  // ── Scroll to a specific step ───────────────────────────────────────
  const scrollToStep = useCallback((index: number) => {
    const info = getSectionInfo();
    if (!info) return;
    const targetY = info.sectionTop + index * info.stepHeight;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  }, [getSectionInfo]);

  // ── Scroll hijacking effect ─────────────────────────────────────────
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isSectionActive()) return;

      const currentStep = getCurrentStep();
      const dir = Math.sign(e.deltaY);

      // At the first step scrolling up, or last step scrolling down → let page scroll normally
      if (currentStep === 0 && dir < 0) return;
      if (currentStep === NUM_STEPS - 1 && dir > 0) return;

      // Otherwise, hijack the scroll
      e.preventDefault();

      if (isLockedRef.current) return;
      isLockedRef.current = true;

      const targetStep = Math.min(NUM_STEPS - 1, Math.max(0, currentStep + dir));
      scrollToStep(targetStep);

      setTimeout(() => {
        isLockedRef.current = false;
      }, LOCK_DURATION);
    };

    // ── Touch support ──────────────────────────────────────────────────
    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isSectionActive()) return;

      const deltaY = touchStartYRef.current - e.touches[0].clientY;
      // Only trigger after a meaningful swipe (30px threshold)
      if (Math.abs(deltaY) < 30) return;

      const currentStep = getCurrentStep();
      const dir = deltaY > 0 ? 1 : -1;

      if (currentStep === 0 && dir < 0) return;
      if (currentStep === NUM_STEPS - 1 && dir > 0) return;

      e.preventDefault();

      if (isLockedRef.current) return;
      isLockedRef.current = true;

      // Reset touch start so we don't re-trigger on the same gesture
      touchStartYRef.current = e.touches[0].clientY;

      const targetStep = Math.min(NUM_STEPS - 1, Math.max(0, currentStep + dir));
      scrollToStep(targetStep);

      setTimeout(() => {
        isLockedRef.current = false;
      }, LOCK_DURATION);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isSectionActive, getCurrentStep, scrollToStep]);

  return (
    <section ref={containerRef} className={styles.section} id="process">
      <div className={styles.stickyWrapper}>
        {/* Background images */}
        <div className={styles.bgContainer}>
          {steps.map((step, i) => (
            <BgImage key={i} step={step} index={i} progress={smoothStep} />
          ))}
          <div className={styles.bgOverlay} />
        </div>

        {/* Arc viewport */}
        <div className={styles.arcViewport}>
          <div className={styles.arcPositioner}>
            <motion.div
              className={styles.arcWheel}
              style={{ rotate: wheelRotation }}
            >
              {/* Circle line */}
              <svg
                className={styles.arcSvg}
                width={WHEEL_SIZE}
                height={WHEEL_SIZE}
                viewBox={`0 0 ${WHEEL_SIZE} ${WHEEL_SIZE}`}
              >
                <circle
                  cx={RADIUS}
                  cy={RADIUS}
                  r={RADIUS - 1}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>

              {/* Steps on the arc */}
              {steps.map((step, i) => (
                <StepNode
                  key={i}
                  step={step}
                  index={i}
                  wheelRotation={wheelRotation}
                  onDotClick={() => scrollToStep(i)}
                />
              ))}

              {/* Decorative dot on the opposite (left) side of the arc */}
              <div
                className={styles.decorativeDot}
                style={{ left: 0, top: RADIUS }}
              />
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  );
};
