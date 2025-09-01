import { Banner, Favorite, Service } from '../types/data';

export const mockBanners: Banner[] = [
  {
    id: 1,
    content: {
      ko: {
        imageUrl:
          'https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/banner_mapo_kr.png',
        buttonText: '확인하기',
        linkUrl:
          'https://store-kr.dcentwallet.com/blogs/post/tap-that-drop-with-map-protocol',
      },
      en: {
        imageUrl:
          'https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/banner_mapo_en.png',
        buttonText: 'Explore',
        linkUrl:
          'https://store.dcentwallet.com/blogs/post/tap-that-drop-with-map-protocol',
      },
    },
  },
  {
    id: 2,
    content: {
      ko: {
        imageUrl:
          'https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/banner_dcent.png',
        description:
          '디센트 지문인증형 지갑으로 한층 더 강화된 보안을 경험하세요!',
        buttonText: '구매하기',
        linkUrl: 'https://store-kr.dcentwallet.com',
      },
      en: {
        imageUrl:
          'https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/banner_dcent.png',
        description: "Enhance your security with D'CENT biometric wallet",
        buttonText: 'Buy Now',
        linkUrl: 'https://store.dcentwallet.com',
      },
    },
  },
  {
    id: 3,
    content: {
      ko: {
        imageUrl:
          'https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/banner_blog.png',
        description:
          '새로운 디센트 블로그를 방문하여 최신 업데이트를 먼저 확인해보세요!',
        buttonText: '확인하기',
        linkUrl: 'https://store-kr.dcentwallet.com/blogs/post',
      },
      en: {
        imageUrl:
          'https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/banner_blog.png',
        description:
          'Visit the new D’CENT Blog to explore the latest updates first!',
        buttonText: 'Explore',
        linkUrl: 'https://store.dcentwallet.com/blogs/post',
      },
    },
  },
];

export const mockFavorites: Favorite[] = [
  {
    id: 1,
    name: 'OpenSea',
    iconUrl:
      'https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/icon_opensea.png',
    linkUrl: 'https://opensea.io/',
  },
  {
    id: 2,
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
