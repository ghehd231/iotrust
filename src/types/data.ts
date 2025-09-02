export type DiscoveryData = {
  banner: Banner[];
  favorites: Favorite[];
  services: Service[];
};

export interface Banner {
  id: number;
  content: {
    ko: {
      imageUrl: string;
      description?: string;
      buttonText: string;
      linkUrl: string;
    };
    en: {
      imageUrl: string;
      description?: string;
      buttonText: string;
      linkUrl: string;
    };
  };
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
  networks?: string;
  linkUrl: string;
  conditions: {
    language: 'ko' | 'en';
    platform: 'android' | 'ios' | 'all';
    environment: 'dev' | 'stage' | 'prod';
  };
}
