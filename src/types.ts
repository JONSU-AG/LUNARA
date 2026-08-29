export type ServiceCategory = 'acrilico-poligel' | 'rubber-gel' | 'extras' | 'all';

export interface ServiceItem {
  id: string;
  name: string;
  category: 'acrilico-poligel' | 'rubber-gel' | 'extras';
  price: number;
  priceDisplay?: string;
  priceNote?: string;
  description: string;
  durationMinutes: number;
  popular?: boolean;
  badge?: string;
  includes?: string[];
  imageUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'poligel' | 'gel' | 'rubber' | 'kapping' | 'mano-alzada' | 'francesa' | 'encapsulado';
  categoryLabel: string;
  priceEstimate?: string;
  description: string;
  imageUrl: string;
  tags: string[];
  isFeatured?: boolean;
}

export interface BookingFormState {
  clientName: string;
  serviceId: string;
  selectedExtras: string[];
  preferredDate: string;
  preferredTime: string;
  hasPreviousMaterial: boolean;
  previousMaterialType: string;
  notes: string;
}

export interface PolicyItem {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  detail: string;
  badge?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
}
