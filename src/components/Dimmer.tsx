import styled from '@emotion/styled';

type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  zIndex?: number;
  backgroundColor?: string;
  alignItems?: string;
  blur?: string;
};

const Block = styled.div<{
  zIndex: number;
  backgroundColor: string;
  alignItems?: string;
  blur?: string;
}>`
  position: fixed;
  display: flex;
  align-items: ${({ alignItems }) => alignItems ?? 'center'};
  justify-content: center;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ${({ backgroundColor }) => backgroundColor};
  z-index: ${({ zIndex }) => zIndex};
  backdrop-filter: ${({ blur }) => (blur ? `blur(${blur})` : 'none')};
`;

const Dimmer = ({
  backgroundColor = 'rgba(0,0,0, 0.2)',
  alignItems,
  children,
  onClick,
  blur,
  zIndex = 10,
}: Props) => {
  return (
    <Block
      onClick={onClick}
      alignItems={alignItems}
      zIndex={zIndex}
      backgroundColor={backgroundColor}
      blur={blur}
    >
      {children}
    </Block>
  );
};

export default Dimmer;
