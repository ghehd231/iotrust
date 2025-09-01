import { Banner, Favorite, Service } from '../types/data';

export const mockBanners: Banner[] = [
  {
    id: 1,
    imageUrl:
      'https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/banner.png',
    ctaText: '자세히 보기',
    linkUrl: 'https://decent.io/banner1',
  },
  {
    id: 2,
    imageUrl:
      'https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/banner2.png',
    ctaText: '바로가기',
    linkUrl: 'https://decent.io/banner2',
  },
];

export const mockFavorites: Favorite[] = [
  {
    id: 1,
    name: 'Uniswap',
    iconUrl:
      'https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/icon_uniswap.png',
    linkUrl: 'https://uniswap.org/',
  },
];

export const mockServices: Service[] = [
  {
    id: 101,
    name: '서비스 A',
    iconUrl:
      'https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/service_a.png',
    description: '한국어 + Android + 개발환경에서만 표시되는 서비스입니다.',
    linkUrl: 'https://service-a.com/',
    conditions: {
      language: 'ko',
      platform: 'android',
      environment: 'dev',
    },
  },
];
