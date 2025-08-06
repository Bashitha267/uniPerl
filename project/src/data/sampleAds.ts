import { Ad } from '../types';

export const sampleAds: Ad[] = [
  {
    id: '1',
    title: 'iPhone 14 Pro Max 128GB - Like New Condition',
    category: 'electronics',
    subcategory: 'Mobile Phones',
    price: 320000,
    condition: 'like-new',
    description: 'Selling my iPhone 14 Pro Max in excellent condition. Used for only 6 months. Comes with original box, charger, and screen protector. No scratches or damage.',
    images: [
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    ],
    location: 'Colombo',
    district: 'Colombo',
    contactPhone: '+94 77 123 4567',
    contactEmail: 'seller1@example.com',
    userId: '1',
    userName: 'Kasun Perera',
    datePosted: '2025-01-15T10:00:00Z',
    isPromoted: true,
    views: 124,
    status: 'active'
  },
  {
    id: '2',
    title: 'Toyota Corolla 2018 - Excellent Condition',
    category: 'vehicles',
    subcategory: 'Cars',
    price: 4500000,
    condition: 'used',
    description: 'Well maintained Toyota Corolla 2018. Full service history available. Very economical and reliable car. Perfect for family use.',
    images: [
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    ],
    location: 'Gampaha',
    district: 'Gampaha',
    contactPhone: '+94 71 234 5678',
    contactEmail: 'seller2@example.com',
    userId: '2',
    userName: 'Nimali Silva',
    datePosted: '2025-01-14T15:30:00Z',
    isPromoted: false,
    views: 89,
    status: 'active'
  },
  {
    id: '3',
    title: 'Modern 3BR Apartment for Rent - Kandy',
    category: 'property',
    subcategory: 'Apartments for Rent',
    price: 75000,
    condition: 'new',
    description: 'Beautiful 3-bedroom apartment with modern amenities. Great location in Kandy city. Fully furnished with parking space. Available immediately.',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    ],
    location: 'Kandy',
    district: 'Kandy',
    contactPhone: '+94 81 234 5678',
    contactEmail: 'property@example.com',
    userId: '3',
    userName: 'Ravi Mendis',
    datePosted: '2025-01-13T09:15:00Z',
    isPromoted: true,
    views: 156,
    status: 'active'
  },
  {
    id: '4',
    title: 'MacBook Air M2 2022 - Perfect for Students',
    category: 'electronics',
    subcategory: 'Computers & Tablets',
    price: 285000,
    condition: 'used',
    description: 'MacBook Air with M2 chip, 8GB RAM, 256GB SSD. Excellent performance for coding and design work. Minor wear on corners but functions perfectly.',
    images: [
      'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    ],
    location: 'Negombo',
    district: 'Gampaha',
    contactPhone: '+94 77 987 6543',
    contactEmail: 'student@example.com',
    userId: '4',
    userName: 'Saman Kumara',
    datePosted: '2025-01-12T14:20:00Z',
    isPromoted: false,
    views: 67,
    status: 'active'
  },
  {
    id: '5',
    title: 'Experienced Software Developer - Remote Position',
    category: 'jobs',
    subcategory: 'IT & Software',
    price: 150000,
    condition: 'new',
    description: 'Looking for a skilled full-stack developer to join our team. Remote work available. React, Node.js experience required. Competitive salary package.',
    images: [
      'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    ],
    location: 'Colombo',
    district: 'Colombo',
    contactPhone: '+94 11 234 5678',
    contactEmail: 'hr@techcompany.com',
    userId: '5',
    userName: 'Tech Solutions Ltd',
    datePosted: '2025-01-11T11:00:00Z',
    isPromoted: true,
    views: 203,
    status: 'active'
  },
  {
    id: '6',
    title: 'Home Cleaning Services - Professional & Reliable',
    category: 'services',
    subcategory: 'Home Services',
    price: 5000,
    condition: 'new',
    description: 'Professional home cleaning services. Experienced team with all cleaning supplies included. Available weekdays and weekends. Affordable rates.',
    images: [
      'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    ],
    location: 'Colombo',
    district: 'Colombo',
    contactPhone: '+94 76 555 1234',
    contactEmail: 'cleaning@services.lk',
    userId: '6',
    userName: 'Clean Home Services',
    datePosted: '2025-01-10T16:45:00Z',
    isPromoted: false,
    views: 45,
    status: 'active'
  },
  {
    id: '7',
    title: 'Designer Handbag Collection - Brand New',
    category: 'fashion',
    subcategory: 'Bags & Accessories',
    price: 15000,
    condition: 'new',
    description: 'Beautiful collection of designer-style handbags. High-quality materials and craftsmanship. Perfect for office or casual wear. Multiple colors available.',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/1152078/pexels-photo-1152078.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    ],
    location: 'Galle',
    district: 'Galle',
    contactPhone: '+94 91 222 3333',
    contactEmail: 'fashion@boutique.lk',
    userId: '7',
    userName: 'Fashion Boutique',
    datePosted: '2025-01-09T13:30:00Z',
    isPromoted: false,
    views: 78,
    status: 'active'
  },
  {
    id: '8',
    title: 'Honda CB 150R 2020 - Sports Bike',
    category: 'vehicles',
    subcategory: 'Motorcycles',
    price: 420000,
    condition: 'used',
    description: 'Honda CB 150R in excellent condition. Well maintained with regular service. Great for city riding and weekend tours. Original documents available.',
    images: [
      'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    ],
    location: 'Matara',
    district: 'Matara',
    contactPhone: '+94 41 567 8901',
    contactEmail: 'bike@seller.com',
    userId: '8',
    userName: 'Motorcycle Dealer',
    datePosted: '2025-01-08T10:15:00Z',
    isPromoted: true,
    views: 134,
    status: 'active'
  }
];

export const getFilteredAds = (ads: Ad[], filters: any) => {
  return ads.filter(ad => {
    if (filters.query && !ad.title.toLowerCase().includes(filters.query.toLowerCase()) && 
        !ad.description.toLowerCase().includes(filters.query.toLowerCase())) {
      return false;
    }
    if (filters.category && ad.category !== filters.category) return false;
    if (filters.subcategory && ad.subcategory !== filters.subcategory) return false;
    if (filters.condition && ad.condition !== filters.condition) return false;
    if (filters.district && ad.district !== filters.district) return false;
    if (filters.location && ad.location !== filters.location) return false;
    if (filters.minPrice > 0 && ad.price < filters.minPrice) return false;
    if (filters.maxPrice > 0 && ad.price > filters.maxPrice) return false;
    return true;
  });
};