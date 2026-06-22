'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import styles from './MeetOurTeam.module.scss';

interface TeamMember {
  name: string;
  role: string;
  linkedin?: string;
  image: string;
}

const designTeam: TeamMember[] = [
  {
    name: "Elena Rostova",
    role: "Interior Designer",
    linkedin: "https://www.linkedin.com/",
    image: "/images/team/placeholder-member.webp"
  },
  {
    name: "Alistair Vance",
    role: "Junior Architect",
    linkedin: "https://www.linkedin.com/",
    image: "/images/team/placeholder-member.webp"
  },
  {
    name: "Zara Hassan",
    role: "Interior Designer",
    linkedin: "https://www.linkedin.com/",
    image: "/images/team/placeholder-member.webp"
  }
];

const executionTeam: TeamMember[] = [
  {
    name: "Mateo Fernandez",
    role: "Principal Contractor - Civil & Wood Works",
    image: "/images/team/placeholder-member.webp"
  },
  {
    name: "Hiroshi Tanaka",
    role: "Principal Contractor - Project Coordinator",
    image: "/images/team/placeholder-member.webp"
  },
  {
    name: "Amara Okafor",
    role: "Principal Contractor - Project Coordinator",
    image: "/images/team/placeholder-member.webp"
  }
];

const executiveQualityTeam: TeamMember[] = [
  {
    name: "Jean-Pierre Laurent",
    role: "Head - Civil & Electrical Execution",
    image: "/images/team/placeholder-member.webp"
  },
  {
    name: "Sven Lindqvist",
    role: "Head - Carpentry & Painting Quality",
    image: "/images/team/placeholder-member.webp"
  },
  {
    name: "Gabriela Silva",
    role: "Head - Soft Furnishings & Detailing",
    image: "/images/team/placeholder-member.webp"
  }
];

export const MeetOurTeam = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section className={styles.section} id="meet-team">
      <Container>
        {/* Main Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Meet Our Team</h2>
          <div className={styles.introContainer}>
            <p className={styles.introText}>
              When you hire us, design, detailing, and execution capabilities are closely integrated under one roof. Our processes are designed to reduce cost and runtime significantly for you.
            </p>
            <p className={styles.introText}>
              As design and execution elements are closely tied, our design team works in sync with execution partners to give you a highly customized outcome. Our execution partners work with us hand in hand. Every detail from civil work to wooden detailing is closely monitored by designers, and execution happens as per drawing.
            </p>
            <p className={styles.introText}>
              As design team coordinates with execution partners, clients do not need to spend time in site coordination. We act as a single point of contact for the client throughout the lifecycle of execution.
            </p>
          </div>
        </div>

        {/* 1. Design Team */}
        <div className={styles.teamGroup}>
          <div className={styles.subheadingWrapper}>
            <span className={styles.subheadingLine} />
            <h3 className={styles.subheading}>Our Design Team</h3>
            <span className={styles.subheadingLine} />
          </div>
          
          <motion.div 
            className={styles.grid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {designTeam.map((member, index) => (
              <motion.div key={index} className={styles.memberCard} variants={itemVariants}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>
                <h4 className={styles.memberName}>{member.name}</h4>
                <p className={styles.memberRole}>{member.role}</p>
                {member.linkedin && (
                  <div className={styles.linkedinWrapper}>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkedinLink}
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 2. Execution Team */}
        <div className={styles.teamGroup}>
          <div className={styles.subheadingWrapper}>
            <span className={styles.subheadingLine} />
            <h3 className={styles.subheading}>Our Execution Team</h3>
            <span className={styles.subheadingLine} />
          </div>

          <motion.div 
            className={styles.grid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {executionTeam.map((member, index) => (
              <motion.div key={index} className={styles.memberCard} variants={itemVariants}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>
                <h4 className={styles.memberName}>{member.name}</h4>
                <p className={styles.memberRole}>{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 3. Executive Quality Team */}
        <div className={styles.teamGroup}>
          <motion.div 
            className={styles.grid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {executiveQualityTeam.map((member, index) => (
              <motion.div key={index} className={styles.memberCard} variants={itemVariants}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>
                <h4 className={styles.memberName}>{member.name}</h4>
                <p className={styles.memberRole}>{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
