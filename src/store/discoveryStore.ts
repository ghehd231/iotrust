import { create } from 'zustand';
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
}

const useDiscoveryStore = create<DiscoveryState>((set) => ({
  services: mockServices,
  banners: mockBanners,
  favorites: mockFavorites,
  language: 'ko',
  addFavorite: (favorite) =>
    set((state) => ({ favorites: [...state.favorites, favorite] })),

  removeFavorite: (id) =>
    set((state) => ({ favorites: state.favorites.filter((f) => f.id !== id) })),
}));

export default useDiscoveryStore;
