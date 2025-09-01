import { DiscoveryData } from '../types/data';
import api from './index';
import { mockBanners, mockFavorites, mockServices } from './mockData';

const env = process.env.REACT_APP_ENV;

export const getData = async (): Promise<DiscoveryData> => {
  if (env === 'development') {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      banner: mockBanners,
      favorites: mockFavorites,
      services: mockServices,
    };
  }
  return await api.get(`/home`);
};
