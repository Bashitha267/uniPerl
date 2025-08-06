import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'vehicles',
    name: 'Vehicles',
    icon: 'Car',
    color: '#2563eb',
    subcategories: [
      'Cars',
      'Motorcycles',
      'Three Wheelers',
      'Vans & Buses',
      'Trucks & Tractors',
      'Boats',
      'Auto Parts & Accessories'
    ]
  },
  {
    id: 'electronics',
    name: 'Electronics',
    icon: 'Smartphone',
    color: '#7c3aed',
    subcategories: [
      'Mobile Phones',
      'Computers & Tablets',
      'Audio & Sound Systems',
      'TVs & Video',
      'Cameras & Camcorders',
      'Home Appliances',
      'Air Conditioning & Electrical'
    ]
  },
  {
    id: 'property',
    name: 'Property',
    icon: 'Home',
    color: '#059669',
    subcategories: [
      'Houses for Sale',
      'Houses for Rent',
      'Apartments for Sale',
      'Apartments for Rent',
      'Land for Sale',
      'Commercial Property',
      'Vacation Rentals'
    ]
  },
  {
    id: 'jobs',
    name: 'Jobs',
    icon: 'Briefcase',
    color: '#dc2626',
    subcategories: [
      'Accounting & Finance',
      'IT & Software',
      'Marketing & Sales',
      'Healthcare',
      'Education',
      'Engineering',
      'Part Time Jobs',
      'Remote Work'
    ]
  },
  {
    id: 'services',
    name: 'Services',
    icon: 'Wrench',
    color: '#ea580c',
    subcategories: [
      'Home Services',
      'Repair & Maintenance',
      'Beauty & Wellness',
      'Education & Training',
      'Event Services',
      'Transport Services',
      'Professional Services'
    ]
  },
  {
    id: 'fashion',
    name: 'Fashion & Lifestyle',
    icon: 'ShoppingBag',
    color: '#be185d',
    subcategories: [
      'Clothing - Men',
      'Clothing - Women',
      'Clothing - Kids',
      'Shoes & Footwear',
      'Bags & Accessories',
      'Watches & Jewelry',
      'Health & Beauty'
    ]
  }
];

export const sriLankanLocations = [
  { district: 'Colombo', cities: ['Colombo', 'Sri Jayawardenepura Kotte', 'Dehiwala-Mount Lavinia', 'Moratuwa', 'Kesbewa'] },
  { district: 'Gampaha', cities: ['Gampaha', 'Negombo', 'Katunayake', 'Wattala', 'Minuwangoda'] },
  { district: 'Kalutara', cities: ['Kalutara', 'Panadura', 'Horana', 'Beruwala', 'Aluthgama'] },
  { district: 'Kandy', cities: ['Kandy', 'Gampola', 'Nawalapitiya', 'Wattegama', 'Harispattuwa'] },
  { district: 'Matale', cities: ['Matale', 'Dambulla', 'Sigiriya', 'Galewela', 'Ukuwela'] },
  { district: 'Nuwara Eliya', cities: ['Nuwara Eliya', 'Hatton', 'Talawakelle', 'Ginigathena', 'Kotagala'] },
  { district: 'Galle', cities: ['Galle', 'Hikkaduwa', 'Ambalangoda', 'Elpitiya', 'Bentota'] },
  { district: 'Matara', cities: ['Matara', 'Weligama', 'Mirissa', 'Akuressa', 'Hakmana'] },
  { district: 'Hambantota', cities: ['Hambantota', 'Tangalle', 'Tissamaharama', 'Beliatta', 'Ambalantota'] },
  { district: 'Jaffna', cities: ['Jaffna', 'Chavakachcheri', 'Point Pedro', 'Karainagar', 'Velanai'] },
  { district: 'Kilinochchi', cities: ['Kilinochchi', 'Pallai', 'Paranthan', 'Poonakary'] },
  { district: 'Mannar', cities: ['Mannar', 'Nanattan', 'Madhu', 'Pesalai'] },
  { district: 'Vavuniya', cities: ['Vavuniya', 'Nedunkeni', 'Settikulam', 'Vavuniya South'] },
  { district: 'Mullaitivu', cities: ['Mullaitivu', 'Oddusuddan', 'Puthukudiyiruppu', 'Weli Oya'] },
  { district: 'Batticaloa', cities: ['Batticaloa', 'Kalkudah', 'Valachchenai', 'Eravur'] },
  { district: 'Ampara', cities: ['Ampara', 'Kalmunai', 'Sainthamaruthu', 'Akkaraipattu'] },
  { district: 'Trincomalee', cities: ['Trincomalee', 'Kinniya', 'Mutur', 'Kuchchaveli'] },
  { district: 'Kurunegala', cities: ['Kurunegala', 'Kuliyapitiya', 'Narammala', 'Wariyapola'] },
  { district: 'Puttalam', cities: ['Puttalam', 'Chilaw', 'Wennappuwa', 'Anamaduwa'] },
  { district: 'Anuradhapura', cities: ['Anuradhapura', 'Kekirawa', 'Thambuttegama', 'Eppawala'] },
  { district: 'Polonnaruwa', cities: ['Polonnaruwa', 'Kaduruwela', 'Medirigiriya', 'Hingurakgoda'] },
  { district: 'Badulla', cities: ['Badulla', 'Bandarawela', 'Haputale', 'Welimada'] },
  { district: 'Moneragala', cities: ['Moneragala', 'Bibile', 'Wellawaya', 'Kataragama'] },
  { district: 'Ratnapura', cities: ['Ratnapura', 'Embilipitiya', 'Balangoda', 'Pelmadulla'] },
  { district: 'Kegalle', cities: ['Kegalle', 'Mawanella', 'Warakapola', 'Rambukkana'] }
];