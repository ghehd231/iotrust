import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';

import { mockBanners, mockFavorites, mockServices } from './api/mockData';
import BannerSection from './components/section/Banner';
import FavoriteSection from './components/section/Favorite';

// 전체 컨테이너
const Container = styled.div`
  max-width: 420px;
  width: 100%;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
`;

// 섹션별 컨테이너
const Section = styled.section`
  padding: 24px 20px;
  border-bottom: 2px solid #f8f9fa;
  &:last-of-type {
    border-bottom: none;
  }
`;

function App() {
  const fetchPosts = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      banner: mockBanners,
      favorites: mockFavorites,
      services: mockServices,
    };
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return (
      <Container>
        <p>데이터를 불러오는 중입니다...</p>
      </Container>
    );
  }

  if (isError || !data) {
    return (
      <Container>
        <p>데이터를 불러오는 데 실패했습니다.</p>
      </Container>
    );
  }

  return (
    <Container>
      <BannerSection banner={data.banner} />
      <FavoriteSection favorites={data.favorites} />
      <Section>목록 섹션</Section>
    </Container>
  );
}

export default App;
