'use client';

import React from 'react';
import styles from './SectionHeading.module.scss';

export const SectionHeading = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  const hasColor = /\btext-/.test(className);
  return (
    <h2 className={`${styles.heading} ${!hasColor ? 'text-jet-black' : ''} ${className}`}>
      {children}
      <span className={styles.underline} />
    </h2>
  );
};
