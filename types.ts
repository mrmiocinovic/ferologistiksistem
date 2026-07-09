export interface Service {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  description: string;
  features: string[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PricingPackage {
  id: string;
  title: string;
  titleSr: string;
  volume: string;
  dimensions: string;
  idealFor: string;
  idealForSr: string;
  features: string[];
  featuresSr: string[];
  priceInfo: string;
  priceInfoSr: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactMessage {
  id: string;
  fullName: string;
  phone: string;
  serviceType: string;
  location: string;
  message: string;
  timestamp: string;
}

// Structured data for local SEO targeting Serbian locations (principally Novi Sad and Vojvodina region)
export const SERBIAN_LOCATIONS = [
  "Novi Beograd",
  "Zemun",
  "Dorćol",
  "Vračar",
  "Batajnica",
];
