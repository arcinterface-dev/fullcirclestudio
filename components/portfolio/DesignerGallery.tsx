'use client';

import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { designersData, Designer, DesignerPdf } from '@/lib/designers-data';
import styles from './DesignerGallery.module.scss';

/* ── Detect mobile for PDF fallback ──────────────── */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

/* ── Sub-components ──────────────────────────────── */

const PdfIcon = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const FolderIcon = ({ size = 48, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

/* ── PDF Viewer Modal ────────────────────────────── */

interface PdfViewerModalProps {
  pdf: DesignerPdf;
  designerName: string;
  onClose: () => void;
}

const PdfViewerModal = ({ pdf, designerName, onClose }: PdfViewerModalProps) => {
  const isMobile = useIsMobile();

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <motion.div
      className={styles.modalBackdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.modalContainer}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={styles.modalHeader}>
          <div className={styles.modalTitleGroup}>
            <span className={styles.modalTitle}>{pdf.title}</span>
            <span className={styles.modalDesigner}>{designerName}</span>
          </div>
          <button
            className={styles.modalClose}
            onClick={onClose}
            aria-label="Close PDF viewer"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Body */}
        <div className={styles.modalBody}>
          {isMobile ? (
            /* Mobile: show a fallback with open-in-new-tab button */
            <div className={styles.mobilePdfFallback}>
              <PdfIcon size={56} className={styles.mobilePdfIcon} />
              <h3 className={styles.mobilePdfTitle}>{pdf.title}</h3>
              <p className={styles.mobilePdfText}>
                For the best reading experience, open this document in your browser&apos;s PDF viewer.
              </p>
              <a
                href={pdf.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobilePdfButton}
              >
                Open PDF <ExternalLinkIcon />
              </a>
            </div>
          ) : (
            /* Desktop: embedded iframe */
            <iframe
              src={pdf.pdfUrl}
              className={styles.pdfIframe}
              title={pdf.title}
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ── Main Component ──────────────────────────────── */

export const DesignerGallery = () => {
  const [selectedDesigner, setSelectedDesigner] = useState<Designer | null>(null);
  const [viewingPdf, setViewingPdf] = useState<DesignerPdf | null>(null);

  const handleDesignerClick = useCallback((designer: Designer) => {
    setSelectedDesigner((prev) => (prev?.id === designer.id ? null : designer));
    setViewingPdf(null);
  }, []);

  const handlePdfClick = useCallback((pdf: DesignerPdf) => {
    setViewingPdf(pdf);
  }, []);

  const handleCloseViewer = useCallback(() => {
    setViewingPdf(null);
  }, []);

  const isMobile = useIsMobile();

  // Lock body scroll when mobile overlay is active
  useEffect(() => {
    if (selectedDesigner && isMobile && !viewingPdf) {
      document.body.style.overflow = 'hidden';
    } else if (!viewingPdf) {
      document.body.style.overflow = '';
    }
    return () => {
      if (!viewingPdf) document.body.style.overflow = '';
    };
  }, [selectedDesigner, isMobile, viewingPdf]);

  const renderPdfContent = () => {
    if (!selectedDesigner) return null;
    return (
      <>
        {/* Divider with designer name - Only on desktop */}
        {!isMobile && (
          <div className={styles.designerIntro}>
            <span className={styles.introLine} />
            <span className={styles.introLabel}>
              {selectedDesigner.name}&apos;s Portfolio
            </span>
            <span className={styles.introLine} />
          </div>
        )}

        {selectedDesigner.pdfs.length > 0 ? (
          <div className={styles.pdfGrid}>
            {selectedDesigner.pdfs.map((pdf, index) => (
              <motion.div
                key={`${selectedDesigner.id}-${index}`}
                className={styles.pdfCard}
                onClick={() => handlePdfClick(pdf)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Thumbnail */}
                <div className={styles.pdfThumbnailWrapper}>
                  {pdf.thumbnailUrl ? (
                    <Image
                      src={pdf.thumbnailUrl}
                      alt={pdf.title}
                      fill
                      className={styles.pdfThumbnail}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', background: '#eeece8' }}>
                      <PdfIcon size={40} />
                    </div>
                  )}
                  <div className={styles.pdfIconOverlay}>
                    <div className={styles.pdfIconCircle}>
                      <PdfIcon size={22} />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className={styles.pdfInfo}>
                  <h4 className={styles.pdfTitle}>{pdf.title}</h4>
                  {pdf.description && (
                    <p className={styles.pdfDescription}>{pdf.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <FolderIcon size={48} className={styles.emptyIcon} />
            <p className={styles.emptyText}>
              Portfolio presentations coming soon.
            </p>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <section className={styles.section} id="designer-portfolios">
        <Container>
          {/* Section Header */}
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.sectionTitle}>
              Our Designers<span style={{ color: '#d54e5e' }}>.</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Select a designer to explore their portfolio presentations.
            </p>
          </motion.div>

          {/* Designer Avatar Row */}
          <motion.div
            className={styles.avatarRow}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {designersData.map((designer) => {
              const isActive = selectedDesigner?.id === designer.id;
              return (
                <motion.div
                  key={designer.id}
                  className={styles.avatarItem}
                  onClick={() => handleDesignerClick(designer)}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`${styles.avatarRing} ${isActive ? styles.active : ''}`}>
                    <div className={styles.avatarImageWrapper}>
                      <Image
                        src={designer.image}
                        alt={designer.name}
                        fill
                        className={styles.avatarImage}
                        sizes="88px"
                      />
                    </div>
                  </div>
                  <span className={styles.avatarName}>{designer.name}</span>
                  <span className={styles.avatarRole}>{designer.role}</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* PDF List for Selected Designer - DESKTOP */}
          <AnimatePresence mode="wait">
            {selectedDesigner && !isMobile && (
              <motion.div
                key={selectedDesigner.id}
                className={styles.pdfSection}
                initial={{ opacity: 0, y: 20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {renderPdfContent()}
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </section>

      {/* PDF List for Selected Designer - MOBILE OVERLAY */}
      <AnimatePresence>
        {selectedDesigner && isMobile && (
          <motion.div
            key="mobile-overlay"
            className={styles.mobileOverlay}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className={styles.mobileOverlayHeader}>
              <button 
                className={styles.mobileBackButton}
                onClick={() => setSelectedDesigner(null)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
                Back to Designers
              </button>
              <span className="font-display font-medium text-sm text-jet-black truncate max-w-[150px]">
                {selectedDesigner.name}
              </span>
            </div>
            <div className={styles.mobileOverlayContent}>
              {renderPdfContent()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PDF Viewer Modal — rendered at root level via portal-like placement */}
      <AnimatePresence>
        {viewingPdf && selectedDesigner && (
          <PdfViewerModal
            pdf={viewingPdf}
            designerName={selectedDesigner.name}
            onClose={handleCloseViewer}
          />
        )}
      </AnimatePresence>
    </>
  );
};
