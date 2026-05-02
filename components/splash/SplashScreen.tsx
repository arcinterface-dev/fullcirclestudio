'use client';

import React from 'react';
import { useSplash } from '@/providers/SplashProvider';
import { BrandAnimation } from './BrandAnimation';
import { CircleRevealCSS } from './CircleRevealCSS';
import styles from './SplashScreen.module.scss';

export const SplashScreen = () => {
  const { splashPhase, setSplashPhase, dismissSplash, splashDismissed } = useSplash();

  if (splashDismissed || splashPhase === 'done') return null;

  return (
    <>
      {splashPhase === 'brand' && (
        <>
          {/* Solid blocker covers homepage during brand animation */}
          <div className={styles.blocker} />
          <div className={styles.splashWrapper}>
            <BrandAnimation onComplete={() => setSplashPhase('reveal')} />
          </div>
        </>
      )}

      {splashPhase === 'reveal' && (
        /* No blocker here! The circle's box-shadow (100vmax) covers the screen.
           The circle's transparent interior reveals the homepage beneath. */
        <CircleRevealCSS onComplete={dismissSplash} />
      )}
    </>
  );
};
