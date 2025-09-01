import styled from '@emotion/styled';

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
  border-bottom: 8px solid #f8f9fa;
  &:last-of-type {
    border-bottom: none;
  }
`;

function App() {
  return (
    <Container>
      <Section>섹션</Section>
    </Container>
  );
}

export default App;
