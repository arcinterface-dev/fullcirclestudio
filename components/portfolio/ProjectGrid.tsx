'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { portfolioData } from '@/lib/portfolio-data';
import styles from './ProjectGrid.module.scss';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export const ProjectGrid = () => {
  return (
    <section className={styles.section}>
      <Container>
        <motion.div 
          className={styles.gridContainer}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {portfolioData.map((project) => (
            <motion.div key={project.slug} variants={cardVariants}>
              <Link href={`/portfolio/${project.slug}`} className={`group ${styles.card}`}>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className={styles.overlay} />
                <div className={styles.content}>
                  <span className={styles.category}>{project.category}</span>
                  <h3 className={styles.title}>{project.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
