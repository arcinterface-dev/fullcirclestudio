'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from './Container';
import styles from './PageHeader.module.scss';

interface PageHeaderProps {
  title: string;
  description?: string;
  imageUrl?: string;
}

export const PageHeader = ({ title, description, imageUrl }: PageHeaderProps) => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={imageUrl ? styles.grid : ''}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={imageUrl ? styles.textContent : ''}
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

          {imageUrl && (
            <motion.div
              className={styles.imageCol}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={imageUrl}
                  alt={`${title} Header Image`}
                  fill
                  className={styles.image}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </motion.div>
          )}
        </div>
      </Container>
      <div className={styles.line} />
    </header>
  );
};
