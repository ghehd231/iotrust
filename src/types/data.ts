export interface Banner {
  id: number;
  imageUrl: string;
  ctaText: string;
  linkUrl: string;
}

export interface Favorite {
  id: number;
  name: string;
  iconUrl: string;
  linkUrl: string;
}

export interface Service {
  id: number;
  name: string;
  iconUrl: string;
  description: string;
  linkUrl: string;
  conditions: {
    language: 'ko' | 'en';
    platform: 'android' | 'ios' | 'all';
    environment: 'dev' | 'stage' | 'prod';
  };
}
