/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './TeamSection.module.scss';

const member = {
  name: 'Elena Rostova',
  role: 'Principal Architect & Founder',
  bio: 'With over 15 years of experience in high-end residential and commercial architecture, Elena leads FullCircle Studio with a vision for sustainable, emotionally resonant design. Her approach combines technical precision with a deep understanding of how spaces influence human behavior.',
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
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
              <p>{member.bio}</p>
              <p className="mt-4">
                Elena believes that great design is not just about aesthetics, but about creating environments that empower and inspire the people who inhabit them.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
