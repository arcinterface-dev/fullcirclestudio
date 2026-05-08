'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './TeamSection.module.scss';

const teamMembers = [
  {
    name: 'Elena Rostova',
    role: 'Principal Architect',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Marcus Chen',
    role: 'Lead Interior Designer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Senior 3D Visualizer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'David Alistair',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
  },
];

export const TeamSection = () => {
  return (
    <section className={styles.section} id="team">
      <Container>
        <div className={styles.header}>
          <SectionHeading>Our Team</SectionHeading>
        </div>
        <div className={styles.grid}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className={`${styles.card} group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.imageContainer}>
                <div className={styles.borderOffset} />
                <div className={styles.imageWrapper}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className={styles.image}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={styles.nameWrapper}>
                <h3 className={styles.name}>{member.name}</h3>
                <span className={styles.nameAccent} />
              </div>
              <p className={styles.role}>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
