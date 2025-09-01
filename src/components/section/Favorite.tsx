import styled from '@emotion/styled';

import { Favorite } from '../../types/data';

import ListItemCard from '../ListItemCard';

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
  const handleDeleteClick = (id: number) => {
    console.log(`${id} 항목이 삭제되었습니다.`);
    // TODO: 삭제 로직 추가
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
            onActionButtonClick={(e) => {
              e.stopPropagation(); // 카드 전체 클릭 이벤트가 발생하지 않도록 막음
              handleDeleteClick(item.id);
            }}
          />
        ))}
      </ListWrapper>
    </SectionWrapper>
  );
};

export default FavoriteSection;
