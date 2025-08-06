export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  joinDate: string;
  verified: boolean;
}

export interface Ad {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  price: number;
  condition: 'new' | 'used' | 'like-new';
  description: string;
  images: string[];
  location: string;
  district: string;
  contactPhone: string;
  contactEmail: string;
  userId: string;
  userName: string;
  datePosted: string;
  isPromoted: boolean;
  views: number;
  status: 'active' | 'sold' | 'expired';
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories: string[];
  color: string;
}

export interface SearchFilters {
  query: string;
  category: string;
  subcategory: string;
  minPrice: number;
  maxPrice: number;
  condition: string;
  location: string;
  district: string;
}