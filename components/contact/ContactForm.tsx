'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { BRAND } from '@/lib/constants';
import styles from './Contact.module.scss';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiry: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct a beautifully formatted WhatsApp message
    const message = encodeURIComponent(
      `*New Studio Inquiry*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Inquiry Type:* ${formData.inquiry}\n\n` +
      `*Message:*\n${formData.message}`
    );

    // Trigger WhatsApp redirection (works on mobile app and desktop web)
    window.open(`https://wa.me/${BRAND.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.div 
      className={styles.formContainer}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    >
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input 
            type="text" 
            id="name" 
            className={styles.input} 
            required 
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input 
            type="email" 
            id="email" 
            className={styles.input} 
            required 
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="inquiry" className={styles.label}>Inquiry Type</label>
          <select 
            id="inquiry" 
            className={styles.input} 
            required 
            value={formData.inquiry}
            onChange={handleChange}
          >
            <option value="" disabled>Select an option</option>
            <option value="Residential Design">Residential Design</option>
            <option value="Commercial Design">Commercial Design</option>
            <option value="Consultation">Consultation</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea 
            id="message" 
            className={styles.textarea} 
            required 
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className={`${styles.submitButton} flex items-center justify-center gap-3`}>
          <MessageCircle size={20} />
          Send via WhatsApp
        </button>
        <p className="text-xs text-granite-gray text-center mt-4">
          You will be redirected to WhatsApp to securely send your inquiry.
        </p>
      </form>
    </motion.div>
  );
};
