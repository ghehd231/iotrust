import { create } from 'zustand';
import { devtools } from 'zustand-devtools';

import { getClientLanguage } from '../lib/utils';
import { Service, Favorite, Banner } from '../types/data';

import { mockBanners, mockFavorites, mockServices } from '../api/mockData';

// 스토어 상태의 타입 정의
interface DiscoveryState {
  services: Service[];
  favorites: Favorite[];
  banners: Banner[];
  language: 'ko' | 'en';
  addFavorite: (favorite: Favorite) => void;
  removeFavorite: (id: number) => void;
  updateLanguage: () => void;
}

const useDiscoveryStore = create<DiscoveryState>()(
  devtools(
    (set) => ({
      services: mockServices,
      banners: mockBanners,
      favorites: mockFavorites,
      language: getClientLanguage(),
      addFavorite: (favorite) =>
        set((state) => ({ favorites: [...state.favorites, favorite] })),

      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((f) => f.id !== id),
        })),

      updateLanguage: () => set((state) => ({ language: getClientLanguage() })),
    }),
    { name: 'discovery' }
  )
);

export default useDiscoveryStore;
