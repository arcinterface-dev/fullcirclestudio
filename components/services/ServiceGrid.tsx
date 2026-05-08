'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Home, Building, Sofa, MessageSquare, LucideIcon } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { servicesData } from '@/lib/services-data';
import styles from './ServiceGrid.module.scss';

const IconMap: Record<string, LucideIcon> = {
  Home,
  Building,
  Sofa,
  MessageSquare
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const ServiceGrid = () => {
  return (
    <section className={styles.section}>
      <Container>
        <motion.div 
          className={styles.gridContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {servicesData.map((service) => {
            const Icon = service.icon && IconMap[service.icon] ? IconMap[service.icon] : null;
            return (
              <motion.div key={service.id} className={styles.card} variants={cardVariants}>
                {Icon && (
                  <div className={styles.iconWrapper}>
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                )}
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};
