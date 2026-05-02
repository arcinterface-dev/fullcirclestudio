'use client';

import React from 'react';
import styles from './SectionHeading.module.scss';

export const SectionHeading = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <h2 className={`${styles.heading} ${className}`}>
      {children}
      <span className={styles.underline} />
    </h2>
  );
};
