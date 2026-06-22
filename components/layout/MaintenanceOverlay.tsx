'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Construction } from 'lucide-react';
import styles from './MaintenanceOverlay.module.scss';
import { BrandName } from '@/components/ui/BrandName';

export const MaintenanceOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.content}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <BrandName />
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Construction className="w-12 h-12 mb-6 mx-auto text-accent-red" strokeWidth={1.5} />
            </motion.div>

            <motion.h1
              className={styles.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Under Maintenance
            </motion.h1>

            <motion.p
              className={styles.description}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Our digital home is currently under construction. We are updating our site content for legal compliance. The following is a demonstration with placeholder data.
            </motion.p>

            <motion.button
              className={styles.button}
              onClick={handleDismiss}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              View Work in Progress
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
