'use client';

import React from 'react';
import styles from './BrandName.module.scss';
import { BRAND } from '@/lib/constants';

export const BrandName = () => {
  return (
    <span className={styles.brand}>
      <span className={styles.name}>{BRAND.name}</span>
      <span className={styles.suffix}>{BRAND.suffix}</span>
      <span className={styles.dot}>.</span>
    </span>
  );
};
