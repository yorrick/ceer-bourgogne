export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  content: string;
  featuredImage?: string;
  category?: string;
  author?: string;
}

export interface PortfolioItem {
  slug: string;
  title: string;
  description?: string;
  images: string[];
  category?: string;
}

export interface Stage {
  slug: string;
  title: string;
  date: string;
  description: string;
  location: string;
  price: number;
  maxParticipants?: number;
  content: string;
  registrationDeadline?: string;
  featuredImage?: string;
}

export interface Page {
  slug: string;
  title: string;
  content: string;
  lastModified?: string;
} 