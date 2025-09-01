import { useState } from 'react';
import styled from '@emotion/styled';

import { Favorite } from '../../types/data';
import useOpenModal from '../../hooks/useOpenModal';
import useDiscoveryStore from '../../store/discoveryStore'; // Zustand 스토어 불러오기

import ListItemCard from '../ListItemCard';
import DeleteFavoriteModal from '../modal/DeleteFavoritModal';

const SectionWrapper = styled.section`
  padding: 24px 20px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  color: #000;
  margin-bottom: 8px;
`;

const ListWrapper = styled.div`
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
`;

const BookmarkIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 2V22L12 17L19 22V2H5Z" fill="gray" />
  </svg>
);

const FavoriteSection = () => {
  const [selectedFavorite, setSelectedFavorite] = useState<Favorite | null>(
    null
  );
  const { isOpen, handleOpen } = useOpenModal();

  const favorites = useDiscoveryStore((state) => state.favorites);
  const removeFavorite = useDiscoveryStore((state) => state.removeFavorite);

  const handleDeleteConfirm = (id: number) => {
    removeFavorite(id); // Zustand 액션 호출
    handleOpen(false);
  };

  const handleActionButtonClick = (e: React.MouseEvent, item: Favorite) => {
    e.stopPropagation();
    setSelectedFavorite(item);
    handleOpen(true);
  };

  return (
    <SectionWrapper>
      <SectionTitle>즐겨찾기</SectionTitle>
      <ListWrapper>
        {favorites.map((item, index) => (
          <ListItemCard
            key={index}
            iconUrl={item.iconUrl}
            title={item.name}
            subtitle={item.linkUrl}
            actionButton={<BookmarkIcon />}
            onClick={() => window.open(item.linkUrl, '_blank')}
            onActionButtonClick={(e) => handleActionButtonClick(e, item)}
          />
        ))}
      </ListWrapper>
      {selectedFavorite && (
        <DeleteFavoriteModal
          isOpen={isOpen}
          handleOpen={handleOpen}
          selectedFavorite={selectedFavorite}
          onConfirm={handleDeleteConfirm}
        />
      )}
    </SectionWrapper>
  );
};

export default FavoriteSection;
