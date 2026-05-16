'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import styles from './PageHeader.module.scss';

interface PageHeaderProps {
  title: string;
  description?: string;
}

export const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <header className={styles.header}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className={styles.title}>
            {title}<span className={styles.accent}>.</span>
          </h1>
          {description && (
            <motion.p 
              className={styles.description}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </Container>
      <div className={styles.line} />
    </header>
  );
};
