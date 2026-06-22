export interface DesignerPdf {
  title: string;
  description?: string;
  pdfUrl: string;
  thumbnailUrl?: string;
}

export interface Designer {
  id: string;
  name: string;
  role: string;
  image: string;
  pdfs: DesignerPdf[];
}

export const designersData: Designer[] = [
  {
    id: "rafic",
    name: "Mohammed Rafic",
    role: "Founder & Principal Designer",
    image: "/images/team/rafic.webp",
    pdfs: [
      {
        title: "Infinitti Infra Portfolio",
        description: "Commercial interior design portfolio for Infinitti Infra.",
        pdfUrl: "/pdfs/rafic/FullCircle Studio - Infinitti Infra Portfolio.pdf"
      },
      {
        title: "Mr. Nikhil's Portfolio",
        description: "Residential interior design portfolio tailored for Mr. Nikhil's residence.",
        pdfUrl: "/pdfs/rafic/FullCircle Studio - Mr Nikhil portfolio.pdf"
      },
      {
        title: "Mr. Ravi Kiran's Portfolio",
        description: "Elegant residential interiors crafted for Mr. Ravi Kiran.",
        pdfUrl: "/pdfs/rafic/FullCircle Studio - Mr. Ravi kiran portfolio.pdf"
      },
      {
        title: "Mr. Suraj's Portfolio",
        description: "Modern residential space planning and design for Mr. Suraj.",
        pdfUrl: "/pdfs/rafic/FullCircle Studio - Mr. Suraj portfolio.pdf"
      },
      {
        title: "Mr. Selvam's Portfolio",
        description: "Comprehensive interior portfolio for Mr. Selvam's property.",
        pdfUrl: "/pdfs/rafic/FullCircle Studio - Mr.Selvam Portfolio.pdf"
      },
      {
        title: "Bangalore Project",
        description: "Detailed architectural and interior presentation for the Bangalore Project.",
        pdfUrl: "/pdfs/rafic/FullCircle Studio -Banglore Project Portfolio.pdf"
      },
      {
        title: "Mr. Rajkumar's Portfolio",
        description: "Customized residential interior solutions for Mr. Rajkumar.",
        pdfUrl: "/pdfs/rafic/FullCircle Studio- Mr. Rajkumar Portfolio.pdf"
      },
      {
        title: "Mr. Reddy's Portfolio",
        description: "Bespoke home interiors designed for Mr. Reddy.",
        pdfUrl: "/pdfs/rafic/FullCircle Studio- Mr. Reddy Portfolio.pdf"
      },
      {
        title: "Ms. Nalini's Portfolio",
        description: "Thoughtfully curated residential design for Ms. Nalini.",
        pdfUrl: "/pdfs/rafic/FullCircle Studio- Ms Nalini portfolio.pdf"
      }
    ]
  },
  {
    id: "elena",
    name: "Elena Rostova",
    role: "Interior Designer",
    image: "/images/team/placeholder-member.webp",
    pdfs: [
      {
        title: "Elegant Scandinavian Apartment",
        description: "Light-filled apartment featuring soft palette, natural materials, and cozy textures.",
        pdfUrl: "/pdfs/sample.pdf",
        thumbnailUrl: "/images/portfolio/scandinavian.webp"
      }
    ]
  },
  {
    id: "alistair",
    name: "Alistair Vance",
    role: "Junior Architect",
    image: "/images/team/placeholder-member.webp",
    pdfs: [
      {
        title: "Contemporary Villa Design",
        description: "A modern villa blending contemporary aesthetics with functional space planning.",
        pdfUrl: "/pdfs/sample.pdf",
        thumbnailUrl: "/images/portfolio/modern-minimalist.webp"
      }
    ]
  },
  {
    id: "zara",
    name: "Zara Hassan",
    role: "Interior Designer",
    image: "/images/team/placeholder-member.webp",
    pdfs: [
      {
        title: "Warm Residential Interiors",
        description: "Thoughtfully curated interiors with warm tones and handpicked finishes.",
        pdfUrl: "/pdfs/sample.pdf",
        thumbnailUrl: "/images/portfolio/scandinavian.webp"
      }
    ]
  }
];
