'use client';

import React from 'react';
import styles from './Container.module.scss';

export const Container = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};
