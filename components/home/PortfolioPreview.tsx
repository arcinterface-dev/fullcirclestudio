'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { portfolioData } from '@/lib/portfolio-data';
import { ArrowUpRight } from 'lucide-react';
import styles from './PortfolioPreview.module.scss';

export const PortfolioPreview = () => {
  return (
    <section className={styles.section} id="portfolio-preview">
      <Container>
        <div className={styles.header}>
          <SectionHeading>Our Blog</SectionHeading>
          <Link href="/portfolio" className={styles.viewMore}>
            View All <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className={styles.projectsGrid}>
          {portfolioData.map((project, index) => (
            <motion.div
              key={project.slug}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link href={`/portfolio/${project.slug}`}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.cardImage}
                  />
                  <div className={styles.overlay} />
                </div>
                <div className={styles.cardInfo}>
                  <p className={styles.category}>{project.category}</p>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
