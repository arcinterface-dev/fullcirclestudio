'use client';

import React from 'react';
import Image from 'next/image';
import styles from './BrandName.module.scss';

export const BrandName = ({ withShadow = false }: { withShadow?: boolean }) => {
  return (
    <span className={`${styles.brand} ${withShadow ? styles.hasShadow : ''}`}>
      <Image 
        src="/images/fullcircle-logo.webp" 
        alt="Fullcircle Studio" 
        width={300}
        height={72}
        className="h-12 md:h-[60px] lg:h-[72px] w-auto" 
        style={{ objectFit: 'contain' }}
        priority
      />
    </span>
  );
};
