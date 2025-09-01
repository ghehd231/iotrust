import styled from '@emotion/styled';

import { Service } from '../../types/data';

import Drawer from './index';

const DrawerContent = styled.div`
  background-color: #fff;
  border-radius: 12px 12px 0 0;
  padding: 24px;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
`;

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const IconTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
`;

const ServiceIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ServiceName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin: 0;
`;

const ServiceCategory = styled.p`
  font-size: 14px;
  color: #888;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #aaa;
  cursor: pointer;
  padding: 0;
  line-height: 1;
`;

const ServiceLink = styled.a`
  font-size: 14px;
  color: #3e82f7;
  text-decoration: none;
  margin-bottom: 24px;
  word-break: break-all;
`;

const DescriptionTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: #000;
  align-self: flex-start;
  margin-bottom: 8px;
  margin-top: 16px;
`;

const ServiceDescription = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.5;
  text-align: left;
  margin-bottom: 32px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const GoButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  max-width: 300px;
`;

interface Props {
  isOpen: boolean;
  handleOpen: (isOpen: boolean) => void;
  service: Service;
}

const ServiceDrawer = ({ isOpen, handleOpen, service }: Props) => {
  return (
    <Drawer
      isOpen={isOpen}
      handleOpen={handleOpen}
      direction="bottom"
      shouldCloseOnDimmer={true}
    >
      <DrawerContent>
        <DrawerHeader>
          <IconTitleWrapper>
            <IconWrapper>
              <ServiceIcon src={service.iconUrl} alt={`${service.name} icon`} />
            </IconWrapper>
            <TitleWrapper>
              <ServiceName>{service.name}</ServiceName>
              <ServiceCategory>아스타</ServiceCategory>
            </TitleWrapper>
          </IconTitleWrapper>
          <CloseButton onClick={() => handleOpen(false)}>&times;</CloseButton>
        </DrawerHeader>

        <ServiceLink
          href={service.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {service.linkUrl}
        </ServiceLink>

        <DescriptionTitle>Description</DescriptionTitle>
        <ServiceDescription>{service.description}</ServiceDescription>
        <ButtonWrapper>
          <GoButton onClick={() => window.open(service.linkUrl, '_blank')}>
            서비스 바로가기
          </GoButton>
        </ButtonWrapper>
      </DrawerContent>
    </Drawer>
  );
};

export default ServiceDrawer;
