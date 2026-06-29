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
        width={360}
        height={86}
        className="h-[58px] md:h-[72px] lg:h-[86px] w-auto" 
        style={{ objectFit: 'contain' }}
        priority
      />
    </span>
  );
};
