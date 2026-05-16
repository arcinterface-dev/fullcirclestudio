import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { portfolioData } from '@/lib/portfolio-data';
import { CTASection } from '@/components/home/CTASection';
import styles from './ProjectDetail.module.scss';

// Pre-render all project routes at build time
export function generateStaticParams() {
  return portfolioData.map((project) => ({
    slug: project.slug,
  }));
}

// Dynamic metadata for each project
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = portfolioData.find((p) => p.slug === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | fullcircle studio`,
      description: project.description,
      images: [
        {
          url: project.imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = portfolioData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <div className={styles.hero}>
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className={styles.heroImage}
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
      </div>

      <section className={styles.content}>
        <Container>
          <div className={styles.header}>
            <span className={styles.category}>{project.category}</span>
            <h1 className={styles.title}>{project.title}<span className="text-accent-red">.</span></h1>
            
            <div className={styles.metaGrid}>
              {project.client && (
                <div>
                  <span className={styles.metaLabel}>Client</span>
                  <span className={styles.metaValue}>{project.client}</span>
                </div>
              )}
              {project.year && (
                <div>
                  <span className={styles.metaLabel}>Year</span>
                  <span className={styles.metaValue}>{project.year}</span>
                </div>
              )}
              <div>
                <span className={styles.metaLabel}>Category</span>
                <span className={styles.metaValue}>{project.category}</span>
              </div>
            </div>
          </div>

          <p className={styles.description}>{project.description}</p>

          {project.details && project.details.length > 0 && (
            <div className={styles.detailsList}>
              {project.details.map((detail, index) => (
                <div key={index} className={styles.detailItem}>
                  {detail}
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      <CTASection />
    </main>
  );
}
