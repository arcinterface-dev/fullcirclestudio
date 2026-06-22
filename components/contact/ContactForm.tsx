'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { BRAND } from '@/lib/constants';
import styles from './Contact.module.scss';

export const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    location: '',
    carpetArea: '',
    propertyType: '',
    bedrooms: '',
    budget: '',
    message: ''
  });

  const propertyTypes = ['Apartment', 'Villa / Independent House', 'Renovation', 'Commercial'];
  const bedroomsOptions = ['1', '2', '3', '4', '5+'];
  const budgetOptions = ['6 to 10 Lakhs', '10 to 15 Lakhs', '15 to 20 Lakhs', 'Above 25 Lakhs'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value = e.target.value;
    
    // Only allow numbers, spaces, and + for mobile
    if (e.target.id === 'mobile') {
      value = value.replace(/[^\d\s+]/g, '');
    }

    setFormData({
      ...formData,
      [e.target.id]: value
    });
  };

  const handlePillSelect = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const nextStep = () => {
    if (step === 1) {
      if (!formData.name || !formData.mobile || !formData.location) {
        alert('Please fill all fields to proceed.');
        return;
      }
    } else if (step === 2) {
      if (!formData.propertyType || !formData.carpetArea || !formData.bedrooms) {
        alert('Please fill all fields to proceed.');
        return;
      }
    }
    setStep(prev => prev + 1);
  };

  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      nextStep();
      return;
    }
    
    if (!formData.budget) {
      alert('Please select an expected budget range.');
      return;
    }
    
    // Construct a beautifully formatted WhatsApp message
    const message = encodeURIComponent(
      `*New Studio Inquiry*\n\n` +
      `*Personal Details*\n` +
      `Name: ${formData.name}\n` +
      `Mobile: ${formData.mobile}\n` +
      `Location: ${formData.location}\n\n` +
      `*Project Details*\n` +
      `Type: ${formData.propertyType}\n` +
      `Carpet Area: ${formData.carpetArea} sq.ft\n` +
      `Bedrooms: ${formData.bedrooms}\n` +
      `Budget: ${formData.budget}\n\n` +
      `*Message:*\n${formData.message || 'No additional message.'}`
    );

    // Trigger WhatsApp redirection
    window.open(`https://wa.me/${BRAND.whatsappNumber}?text=${message}`, '_blank');
  };

  const renderStep1 = () => (
    <motion.div
      key="step1"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className={styles.form}
    >
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
        <label htmlFor="mobile" className={styles.label}>Mobile Number</label>
        <input 
          type="tel" 
          id="mobile" 
          className={styles.input} 
          required 
          placeholder="+91 98765 43210"
          value={formData.mobile}
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="location" className={styles.label}>Location</label>
        <input 
          type="text" 
          id="location" 
          className={styles.input} 
          required 
          placeholder="e.g. Adyar, Chennai"
          value={formData.location}
          onChange={handleChange}
        />
      </div>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      key="step2"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className={styles.form}
    >
      <div className="mb-2">
        <span className={styles.pillGroupLabel}>Property Type</span>
        <div className={styles.pillGroup}>
          {propertyTypes.map(type => (
            <button
              type="button"
              key={type}
              className={`${styles.pill} ${formData.propertyType === type ? styles.pillActive : ''}`}
              onClick={() => handlePillSelect('propertyType', type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="carpetArea" className={styles.label}>Carpet Area (sq.ft)</label>
        <input 
          type="number" 
          id="carpetArea" 
          className={styles.input} 
          required 
          placeholder="e.g. 1500"
          value={formData.carpetArea}
          onChange={handleChange}
        />
      </div>

      <div className="mt-2">
        <span className={styles.pillGroupLabel}>No. of Bedrooms</span>
        <div className={styles.pillGroup}>
          {bedroomsOptions.map(bed => (
            <button
              type="button"
              key={bed}
              className={`${styles.pill} ${formData.bedrooms === bed ? styles.pillActive : ''}`}
              onClick={() => handlePillSelect('bedrooms', bed)}
            >
              {bed}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      key="step3"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className={styles.form}
    >
      <div className="mb-4">
        <span className={styles.pillGroupLabel}>Expected Budget Range</span>
        <div className={styles.pillGroup}>
          {budgetOptions.map(budget => (
            <button
              type="button"
              key={budget}
              className={`${styles.pill} ${formData.budget === budget ? styles.pillActive : ''}`}
              onClick={() => handlePillSelect('budget', budget)}
            >
              {budget}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="message" className={styles.label}>Message (Optional)</label>
        <textarea 
          id="message" 
          className={styles.textarea} 
          placeholder="Tell us more about your vision..."
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
    </motion.div>
  );

  return (
    <motion.div 
      className={styles.formContainer}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    >
      {/* Progress Bar */}
      <div className={styles.progressContainer}>
        <div className={styles.progressHeader}>
          <span className={styles.progressText}>Step {step} of 3</span>
          <span className={styles.progressStepName}>
            {step === 1 ? 'Personal Details' : step === 2 ? 'Property Details' : 'Budget & Final'}
          </span>
        </div>
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill} 
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Form Steps */}
      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className={styles.navButtons}>
          {step > 1 ? (
            <button 
              key="back-btn"
              type="button" 
              className={styles.secondaryButton} 
              onClick={prevStep}
            >
              Back
            </button>
          ) : (
            <div key="spacer"></div> // Spacer to keep Next button on the right
          )}

          {step < 3 && (
            <button 
              key="next-btn"
              type="button" 
              className={`${styles.submitButton} !w-auto !py-3.5 !px-10`} 
              onClick={nextStep}
            >
              Next Step
            </button>
          )}
          
          {step === 3 && (
            <button 
              key="submit-btn"
              type="submit" 
              className={`${styles.submitButton} !w-auto !py-3.5 !px-6 flex items-center justify-center gap-3`}
            >
              <MessageCircle size={20} />
              Send
            </button>
          )}
        </div>
        
        {step === 3 && (
          <p className="text-xs text-granite-gray text-center mt-6">
            You will be redirected to WhatsApp to securely send your inquiry.
          </p>
        )}
      </form>
    </motion.div>
  );
};
