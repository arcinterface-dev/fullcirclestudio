'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSplash } from '@/providers/SplashProvider';
import { CircleMenuOverlay } from './CircleMenuOverlay';
import styles from './CircleMenu.module.scss';

export const CircleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { splashPhase, splashDismissed } = useSplash();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Only show menu button if splash is done or dismissed
  const showMenu = mounted && (splashDismissed || splashPhase === 'done');

  const [sbWidth, setSbWidth] = useState(0);

  const toggleMenu = () => {
    const width = window.innerWidth - document.documentElement.clientWidth;
    setSbWidth(width);
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);

    if (newIsOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${width}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  };

  const isDesktop = typeof window !== 'undefined' ? window.innerWidth >= 768 : false;

  return (
    <>
      <AnimatePresence>
        {showMenu && (
          <motion.button
            className={styles.menuButton}
            onClick={toggleMenu}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
            }}
            style={{
              '--button-right': isOpen 
                ? `calc(${isDesktop ? '2.5rem' : '1.5rem'} + ${sbWidth}px)` 
                : (isDesktop ? '2.5rem' : '1.5rem')
            } as any}
            exit={{ opacity: 0 }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <div className={`${styles.dotContainer} ${isOpen ? styles.open : ''}`}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
      <CircleMenuOverlay isOpen={isOpen} onClose={toggleMenu} />
    </>
  );
};
