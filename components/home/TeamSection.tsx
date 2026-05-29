/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './TeamSection.module.scss';

const member = {
  name: 'Rafic',
  role: 'Founder & Principal Designer',
  bio: [
    "After working across early-stage startups, growing businesses, and corporate environments for years, I began to understand how strong systems and clear communication can completely change the outcome of a project. At the same time, I also saw where the design and construction sector often falls short — gaps in coordination, unclear documentation, uncontrolled spending, compromised quality, and timelines that drift without transparency.",
    "My approach is centered around creating spaces through a process that is organized, practical, and client-focused. I believe good design is not just about aesthetics, but about making the right decisions at the right stage — through proper planning, technical clarity, material understanding, and streamlined execution.",
    "I strongly value empathy in the design process. Every client has different priorities, budgets, and lifestyles, and the process should adapt accordingly. The goal is to help clients spend wisely while creating spaces that feel intentional, functional, and long-lasting.",
    "Through Full Circle Studio, I aim to build a more transparent and reliable design experience where quality, timelines, communication, and execution are given equal importance."
  ],
  image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
};

export const TeamSection = () => {
  return (
    <section className={styles.section} id="team">
      <Container>
        <div className={styles.header}>
          <SectionHeading>The Visionary</SectionHeading>
        </div>
        
        <div className={styles.profileLayout}>
          <motion.div
            className={styles.imageCol}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.imageContainer}>
              <div className={styles.borderOffset} />
              <div className={styles.imageWrapper}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className={styles.image}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.detailsCol}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.nameWrapper}>
              <h3 className={styles.name}>{member.name}</h3>
              <span className={styles.nameAccent} />
            </div>
            <p className={styles.role}>{member.role}</p>
            <div className={styles.bio}>
              {member.bio.map((paragraph, index) => (
                <p key={index} className={index > 0 ? "mt-4" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
