import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';

import { mockBanners, mockFavorites, mockServices } from './api/mockData';

import BannerSection from './components/section/Banner';
import FavoriteSection from './components/section/Favorite';
import ServiceSection from './components/section/Service';

const Container = styled.div`
  max-width: 420px;
  width: 100%;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
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
      <div id="portal" />
      <BannerSection banner={data.banner} />
      <FavoriteSection favorites={data.favorites} />
      <ServiceSection services={data.services} />
    </Container>
  );
}

export default App;
