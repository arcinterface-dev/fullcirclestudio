import { Metadata } from 'next';
import { BRAND } from './constants';

export const baseMetadata: Metadata = {
  title: {
    template: `%s | ${BRAND.name}${BRAND.suffix}`,
    default: `${BRAND.name}${BRAND.suffix} - ${BRAND.tagline}`,
  },
  description: "A cinematic, storytelling brand website for Full Circle System.",
  openGraph: {
    title: `${BRAND.name}${BRAND.suffix}`,
    description: "A cinematic, storytelling brand website for Full Circle System.",
    url: 'https://fullcirclestudio.com',
    siteName: `${BRAND.name}${BRAND.suffix}`,
    locale: 'en_US',
    type: 'website',
  },
};
