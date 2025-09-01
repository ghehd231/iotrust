import { useState } from 'react';
import styled from '@emotion/styled';

import { Favorite } from '../../types/data';
import useOpenModal from '../../hooks/useOpenModal';

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

type Props = {
  favorites: Favorite[];
};

const FavoriteSection = ({ favorites }: Props) => {
  const [selectedFavorite, setSelectedFavorite] = useState<Favorite | null>(
    null
  );

  const { isOpen, handleOpen } = useOpenModal();

  const handleDeleteConfirm = (id: number) => {
    console.log(`${id} 항목이 삭제되었습니다.`);
    // TODO: 실제로 즐겨찾기 목록에서 아이템을 삭제하는 로직 추가
  };

  const handleActionButtonClick = (e: React.MouseEvent, item: Favorite) => {
    e.stopPropagation();
    setSelectedFavorite(item); // 선택된 아이템 정보 저장
    handleOpen(true); // 모달 열기
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
