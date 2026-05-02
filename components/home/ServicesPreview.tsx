'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { servicesData } from '@/lib/services-data';
import { ArrowUpRight, Home, Building, Armchair, MessageSquare } from 'lucide-react';
import styles from './ServicesPreview.module.scss';

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home size={28} />,
  Building: <Building size={28} />,
  Sofa: <Armchair size={28} />,
  MessageSquare: <MessageSquare size={28} />,
};

export const ServicesPreview = () => {
  return (
    <section className={styles.section} id="services-preview">
      <Container>
        <div className={styles.header}>
          <SectionHeading>Our Services</SectionHeading>
        </div>
        <div className={styles.servicesGrid}>
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>
                {iconMap[service.icon || 'Home']}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <div className={styles.arrow}>
                <ArrowUpRight size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
