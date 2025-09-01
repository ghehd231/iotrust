import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { mockBanners, mockFavorites, mockServices } from './api/mockData';

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

  console.log('test', data);

  return (
    <Container>
      <Section>슬라이드 섹션</Section>
      <Section>즐겨찾기 섹션</Section>
      <Section>목록 섹션</Section>
    </Container>
  );
}

export default App;
