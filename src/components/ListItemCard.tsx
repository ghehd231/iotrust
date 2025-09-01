import styled from '@emotion/styled';

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-of-type {
    border-bottom: none;
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 16px;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff; // 배경색은 흰색 유지
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);

  flex-shrink: 0;

  & img {
    width: 36px;
    height: 36px;
    object-fit: contain;
  }
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.h4`
  font-family: 'Apple SD Gothic Neo', sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Subtitle = styled.p`
  font-family: 'Apple SD Gothic Neo', sans-serif;
  font-size: 13px;
  color: #888;
  margin: 4px 0 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  flex-shrink: 0;
  color: #888;
`;

type Props = {
  iconUrl: string;
  title: string;
  subtitle: string;
  actionButton?: React.ReactNode;
  onClick?: () => void;
  onActionButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ListItemCard = ({
  iconUrl,
  title,
  subtitle,
  actionButton,
  onClick,
  onActionButtonClick,
}: Props) => {
  return (
    <CardContainer onClick={onClick}>
      <IconWrapper>
        <Icon src={iconUrl} alt={`${title} icon`} />
      </IconWrapper>
      <TextContent>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextContent>
      {actionButton && (
        <ActionButton onClick={onActionButtonClick}>
          {actionButton}
        </ActionButton>
      )}
    </CardContainer>
  );
};

export default ListItemCard;
