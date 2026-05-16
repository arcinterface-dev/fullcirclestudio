import React from 'react';
import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import styles from '@/components/contact/Contact.module.scss';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with fullcircle studio to discuss your next interior design or architectural visualization project.',
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader 
        title="Start a Conversation" 
        description="Whether you have a specific project in mind or just want to explore possibilities, we're ready to listen."
      />
      
      <section className={styles.section}>
        <Container>
          <div className={styles.gridContainer}>
            <ContactInfo />
            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
