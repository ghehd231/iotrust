import { useMutation, useQueryClient } from '@tanstack/react-query';
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

export const useDeleteFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (favoriteId: number) => {
      await new Promise<void>((resolve) => setTimeout(resolve, 500));
      return favoriteId;
    },
    onSuccess: (deletedFavoriteId) => {
      queryClient.setQueryData<DiscoveryData | undefined>(
        ['discover'],
        (oldData) => {
          if (!oldData) {
            return undefined;
          }

          const updatedFavorites = oldData.favorites.filter(
            (fav) => fav.id !== deletedFavoriteId
          );

          return {
            ...oldData,
            favorites: updatedFavorites,
          };
        }
      );
    },
  });
};
