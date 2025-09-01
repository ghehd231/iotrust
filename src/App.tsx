import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';

import api from './api';

interface Post {
  id: number;
  title: string;
  body: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f4f8;
  color: #333;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #007bff;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: center;
`;

// API 호출 함수
const fetchPosts = async (): Promise<Post[]> => {
  const { data } = await api.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return data;
};

function App() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  console.log('test', data);
  return (
    <Container>
      <Title>CRA & Emotion 세팅</Title>
      <Paragraph>기본 세팅</Paragraph>
    </Container>
  );
}

export default App;
