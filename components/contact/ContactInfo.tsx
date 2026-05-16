'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BRAND } from '@/lib/constants';
import styles from './Contact.module.scss';

export const ContactInfo = () => {
  return (
    <motion.div
      className={styles.infoContainer}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={styles.infoBlock}>
        <span className={styles.infoLabel}>Studio Inquiries</span>
        <a href="mailto:mailus@fullcirclestudio.com" className={`${styles.infoText} ${styles.infoLink} block`}>
          mailus@fullcirclestudio.com
        </a>
      </div>

      <div className={styles.infoBlock}>
        <span className={styles.infoLabel}>WhatsApp Direct</span>
        <a
          href={`https://wa.me/${BRAND.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.infoText} ${styles.infoLink} block`}
        >
          +{BRAND.whatsappNumber}
        </a>
      </div>

      <div className={styles.infoBlock}>
        <span className={styles.infoLabel}>Office</span>
        <address className={`${styles.infoText} not-italic`}>
          Design District, Suite 402<br />
          Creative City, CC 10012
        </address>
      </div>

      <div className={styles.infoBlock}>
        <span className={styles.infoLabel}>Socials</span>
        <div className="space-x-6 mt-2">
          {Object.entries(BRAND.socials).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-granite-gray hover:text-accent-red transition-colors capitalize"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
