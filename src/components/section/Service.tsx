import styled from '@emotion/styled';

import { Service } from '../../types/data';

import ListItemCard from '../ListItemCard';

const SectionWrapper = styled.section`
  padding: 24px 20px;
  padding-top: 0px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  color: #000;
  margin-top: 0px;
  margin-bottom: 8px;
`;

const ListWrapper = styled.div`
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
`;

type Props = {
  services: Service[];
};

const ServiceSection = ({ services }: Props) => {
  return (
    <SectionWrapper>
      <SectionTitle>목록</SectionTitle>
      <ListWrapper>
        {services.map((item, index) => (
          <ListItemCard
            key={index}
            iconUrl={item.iconUrl}
            title={item.name}
            subtitle={item.linkUrl}
          />
        ))}
      </ListWrapper>
    </SectionWrapper>
  );
};

export default ServiceSection;
