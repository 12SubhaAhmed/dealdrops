// types/blog.ts or inside your components

export interface SanityArticle {
  _id: string; 
  title: string;
  description: string;
  slug: {
    current: string; 
  };
  mainImage: any; 
  categories: string[]; 
  badge?: string;
  rating?: number;
  price?: string;
  publishedAt: string; 
}