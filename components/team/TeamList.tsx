'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { teamData } from '@/lib/team-data';
import styles from './TeamList.module.scss';

export const TeamList = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.list}>
          {teamData.map((member, index) => (
            <motion.div
              key={member.slug}
              className={styles.memberRow}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {/* Profile Image & Quote Column */}
              <div className={styles.imageCol}>
                <div className={styles.imageContainer}>
                  <div className={styles.borderOffset} />
                  <div className={styles.imageWrapper}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className={styles.image}
                    />
                  </div>
                </div>
                
                {member.linkedin && (
                  <div className={styles.linkedinWrapper} style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkedinLink} style={{ color: '#d54e5e', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span style={{ borderBottom: '1px solid currentColor', lineHeight: 1, paddingBottom: '2px', display: 'inline-block' }}>Connect on LinkedIn</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Profile Details (Name, Role, Full Bio) */}
              <div className={styles.detailsCol}>
                <div className={styles.nameWrapper}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <span className={styles.nameAccent} />
                </div>
                <p className={styles.role}>{member.role}</p>
                <div className={styles.bio}>
                  {member.bio.map((paragraph, pIndex) => (
                    <p key={pIndex} className={pIndex > 0 ? "mt-4" : ""}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
