import { Metadata } from 'next';
import { BRAND } from './constants';

const SITE_URL = 'https://fullcirclestudio.com'; // Replace with production URL when ready

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | fullcircle studio`,
    default: `fullcircle studio - ${BRAND.tagline}`,
  },
  description: "Premium interior design firm specializing in cinematic architectural storytelling and meticulous craftsmanship. We believe in luxury, precision, and spaces that tell a story.",
  keywords: ["Interior Design", "Architectural Visualization", "Luxury Design", "Cinematic Storytelling", "fullcircle studio", "Home Transformation"],
  authors: [{ name: "fullcircle studio" }],
  creator: "fullcircle studio",
  publisher: "fullcircle studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `fullcircle studio | ${BRAND.tagline}`,
    description: "Premium interior design firm specializing in cinematic architectural storytelling and meticulous craftsmanship.",
    url: SITE_URL,
    siteName: 'fullcircle studio',
    images: [
      {
        url: '/images/hero/hero.webp',
        width: 1200,
        height: 630,
        alt: 'fullcircle studio Interior Design',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `fullcircle studio | ${BRAND.tagline}`,
    description: "Premium interior design firm specializing in cinematic architectural storytelling.",
    images: ['/images/hero/hero.webp'],
    creator: '@fullcirclestudio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
