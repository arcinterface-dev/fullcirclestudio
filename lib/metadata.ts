import { Metadata } from 'next';
import { BRAND } from './constants';

const SITE_URL = 'https://fullcirclestudio.com'; // Replace with production URL when ready

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | FullCircle Studio`,
    default: `FullCircle Studio - ${BRAND.tagline}`,
  },
  description: "Premium interior design firm specializing in cinematic architectural storytelling and meticulous craftsmanship. We believe in luxury, precision, and spaces that tell a story.",
  keywords: ["Interior Design", "Architectural Visualization", "Luxury Design", "Cinematic Storytelling", "FullCircle Studio", "Home Transformation"],
  authors: [{ name: "FullCircle Studio" }],
  creator: "FullCircle Studio",
  publisher: "FullCircle Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `FullCircle Studio | ${BRAND.tagline}`,
    description: "Premium interior design firm specializing in cinematic architectural storytelling and meticulous craftsmanship.",
    url: SITE_URL,
    siteName: 'FullCircle Studio',
    images: [
      {
        url: '/images/hero/hero.png',
        width: 1200,
        height: 630,
        alt: 'FullCircle Studio Interior Design',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `FullCircle Studio | ${BRAND.tagline}`,
    description: "Premium interior design firm specializing in cinematic architectural storytelling.",
    images: ['/images/hero/hero.png'],
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
