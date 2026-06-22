export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  client?: string;
  year?: string;
  details?: string[];
  pdfUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
