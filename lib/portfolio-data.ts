import { PortfolioProject } from './types';

export const portfolioData: PortfolioProject[] = [
  {
    slug: "modern-minimalist-living-room",
    title: "Modern Minimalist Living Room",
    category: "Residential",
    description: "A serene living space with neutral tones, clean lines, and carefully curated furniture that enhances simplicity and comfort. The use of natural light and subtle textures creates a peaceful retreat.",
    imageUrl: "/images/portfolio/modern-minimalist.jpg",
    client: "Private Client",
    year: "2023",
    details: ["Custom Millwork", "Italian Leather Sofa", "Smart Lighting Integration"]
  },
  {
    slug: "elegant-scandinavian-apartment",
    title: "Elegant Scandinavian Apartment",
    category: "Residential",
    description: "This light-filled apartment features a soft color palette, natural materials, and cozy textures. The combination of functionality and beauty makes this space feel fresh and welcoming.",
    imageUrl: "/images/portfolio/scandinavian.jpg",
    client: "The Jensens",
    year: "2023",
    details: ["Oak Hardwood Flooring", "Bespoke Joinery", "Minimalist Fixtures"]
  },
  {
    slug: "luxury-penthouse-redesign",
    title: "Luxury Penthouse Redesign",
    category: "Luxury Residential",
    description: "A high-end penthouse designed with luxury in mind. Featuring custom-built furniture, marble finishes, and statement lighting, this project exudes elegance and sophistication.",
    imageUrl: "/images/portfolio/luxury-penthouse.jpg",
    client: "Confidential",
    year: "2024",
    details: ["Calacatta Marble Kitchen", "Motorized Window Treatments", "Custom Walk-in Closets"]
  }
];
