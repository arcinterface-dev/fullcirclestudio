'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './ValuesSection.module.scss';

const values = [
  {
    title: "Meticulous Craft",
    description: "Every joint, every seam, and every finish is scrutinized. We believe that true luxury lies in the unseen details that stand the test of time."
  },
  {
    title: "Cinematic Vision",
    description: "We don't just fill rooms; we design atmospheres. Lighting, texture, and spatial flow are orchestrated to create a mood that resonates with your lifestyle."
  },
  {
    title: "Uncompromising Quality",
    description: "No corner cuts. From the initial 3D visualization to the final handover, our standard of excellence remains unwavering. We source only the finest materials."
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const ValuesSection = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className="mb-12">
          <SectionHeading className="text-white-smoke">Our Core Values</SectionHeading>
          <p className="text-ash-gray mt-4 text-lg font-light">What drives our studio</p>
        </div>
        
        <motion.div 
          className={styles.gridContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {values.map((value, index) => (
            <motion.div key={index} className={styles.valueCard} variants={itemVariants}>
              <span className={styles.valueNumber}>0{index + 1}.</span>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDesc}>{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
