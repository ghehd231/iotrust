import { Banner, Favorite, Service } from '../types/data';

const ICON_BASE_URL =
  'https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/';

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
    id: 1,
    name: 'MoonPay',
    iconUrl: `${ICON_BASE_URL}icon_moonpay.png`,
    networks: '',
    description:
      'MoonPay offers simple and safer way to buy crypto instantly using VISA/Mastercard payment',
    linkUrl: 'https://buy.moonpay.com',
    conditions: {
      language: 'en',
      platform: 'ios',
      environment: 'prod',
    },
  },
  {
    id: 2,
    name: 'FTSO Portal',
    iconUrl: `${ICON_BASE_URL}icon_ftso.png`,
    networks: 'Songbird',
    description:
      'FTSO Portal은 사용자가 원하는 FTSO provider에 Vote Power 쉽고 빠르게 위임할 수 있는 기능을 제공하는 디센트의 서비스입니다. 사용자는 Vote Power 위임을 통해 패시브인컴(passive income)을 보상으로 받을 수 있습니다.',
    linkUrl: 'https://ftsoportal.com/',
    conditions: {
      language: 'ko',
      platform: 'all',
      environment: 'prod',
    },
  },
  {
    id: 3,
    name: 'Astar Portal',
    iconUrl: `${ICON_BASE_URL}icon_astar.png`,
    networks: 'Astar',
    description:
      '아스타포탈은 Astar Network에서 제공하는 모든 것을 사용하기 위한 Astar Network의 공식 애플리케이션입니다.',
    linkUrl: 'https://portal.astar.network/',
    conditions: {
      language: 'ko',
      platform: 'all',
      environment: 'dev',
    },
  },
  {
    id: 4,
    name: '1inch',
    iconUrl: `${ICON_BASE_URL}icon_1inch.png`,
    networks: 'Ethereum',
    description:
      '1inch는 모든 주요 DEX 거래소의 유동성과 가격 정보를 하나의 플랫폼에서 제공합니다. 원하는 거래의 가격을 쉽게 조회하여 토큰을 교환할 수 있습니다.',
    linkUrl: 'https://app.1inch.io/',
    conditions: {
      language: 'ko',
      platform: 'all',
      environment: 'prod',
    },
  },
  {
    id: 5,
    name: 'XDSea',
    iconUrl: `${ICON_BASE_URL}icon_xdsea.png`,
    networks: 'XDC Network',
    description:
      "XDSea is the world's first and largest peer-to-peer decentralized marketplace for buying and selling NFTs built on the XDC Network.",
    linkUrl: 'https://xdsea.com/',
    conditions: {
      language: 'en',
      platform: 'all',
      environment: 'prod',
    },
  },
  {
    id: 6,
    name: 'Compound',
    iconUrl: `${ICON_BASE_URL}icon_compound.png`,
    networks: 'Ethereum',
    description:
      'Compound는 담보를 통해 이자를 얻거나 자산을 빌릴 수 있는 이더리움 기반의 머니 마켓 프로토콜입니다. 컴파운드의 유동성 풀에 자산을 공급하면 복리이자를 얻을 수 있습니다.',
    linkUrl: 'https://app.compound.finance/',
    conditions: {
      language: 'ko',
      platform: 'all',
      environment: 'prod',
    },
  },
  {
    id: 7,
    name: 'PoolTogether',
    iconUrl: `${ICON_BASE_URL}icon_pooltogether.png`,
    networks: 'Ethereum',
    description:
      "PoolTogether는 저축을 재미있게 하는 이더리움 기반의 서비스입니다. 자산을 예치하면 “저축 티켓“을 받아 '풀'에 참여합니다. 각 저축 티켓은 풀에서 발생한 이자를 받을 수있는 기회를 제공하지만, 당첨되지 않더라도 손실이 없습니다.",
    linkUrl: 'https://app.pooltogether.com/',
    conditions: {
      language: 'ko',
      platform: 'all',
      environment: 'prod',
    },
  },
  {
    id: 8,
    name: 'OpenSea',
    iconUrl: `${ICON_BASE_URL}icon_opensea.png`,
    networks: 'Ethereum',
    description:
      'OpenSea는 수집품, 게임 아이템, 디지털 아트와 같은 이더리움 기반의 디지털 상품 및 디지털 자산을 거래할 수 있는 마켓 플레이스입니다.',
    linkUrl: 'https://opensea.io/',
    conditions: {
      language: 'ko',
      platform: 'all',
      environment: 'prod',
    },
  },
  {
    id: 9,
    name: 'BlueWhale',
    iconUrl: `${ICON_BASE_URL}icon_bluewhale.png`,
    networks: 'Kaia',
    description:
      '블루웨일 프로토콜은 사용하기 쉬운 디파이 서비스를 지향하는 프로젝트입니다. 디파이 대시보드, DEX 어그리게이터, 자동 재예치 서비스 등 탈중앙화 금융(DeFi) 관련 서비스 제공을 통해 클레이튼 디파이 생태계 활동을 더 쉽고 효율적으로 만듭니다.',
    linkUrl: 'https://bwpm.io/',
    conditions: {
      language: 'ko',
      platform: 'all',
      environment: 'prod',
    },
  },
];
