import { ComponentProps } from 'react';
import styled from '@emotion/styled';
import { createPortal } from 'react-dom';

import useMountTransition from '../../hooks/useMountTransition';

type Props = {
  isOpen: boolean;
  direction: 'left' | 'right' | 'top' | 'bottom';
  shouldCloseOnDimmer?: boolean;
  className?: string;
  removeOnClosed?: boolean;
  handleOpen: (isOpen: boolean) => void;
} & ComponentProps<'div'>;

const DrawerBlock = styled.div`
  position: relative;
`;

const Dimmer = styled.div<{ direction: string; type: 'open' | 'close' }>`
  visibility: ${({ type }) => (type === 'open' ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;

  background-color: ${({ type }) =>
    `rgba(0, 0, 0, ${type === 'open' ? 0.8 : 0});`};
  transition: all 0.25s linear;
`;

const Container = styled.div<{ direction: string; type: 'open' | 'close' }>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ direction }) =>
    direction === 'bottom' ? 'flex-end' : 'flex-start'};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  transform: ${({ direction }) =>
    direction === 'left' || direction === 'right'
      ? `translateX(${direction === 'left' ? '-110%' : '100%'});`
      : `translateY(${direction === 'top' ? '-110%' : '100%'});`};
  transition: all 0.25s ease-in-out;

  &.open {
    transform: ${({ direction }) =>
      direction === 'left' || direction === 'right'
        ? `translateX(0);`
        : `translateY(0);`};
  }
`;

const Contents = styled.div`
  height: auto;
  z-index: 3;
  width: 100%;
  max-width: 100vw;
`;

const Drawer = ({
  isOpen,
  direction,
  children,
  className = 'contents-container',
  removeOnClosed = true,
  handleOpen,
}: Props) => {
  const isTransitioning = useMountTransition(isOpen, 300);

  const portalElement = document.getElementById('portal');

  if (!portalElement) return null;

  if (!isOpen && removeOnClosed && !isTransitioning) return null;

  return createPortal(
    <DrawerBlock>
      <Dimmer
        type={isOpen && isTransitioning ? 'open' : 'close'}
        direction={direction}
        onClick={() => handleOpen(false)}
      >
        <Container
          className={`${isOpen && isTransitioning ? 'open' : ''} ${className}`}
          type={isOpen ? 'open' : 'close'}
          direction={direction}
        >
          <Contents onClick={(e) => e.stopPropagation()}>{children}</Contents>
        </Container>
      </Dimmer>
    </DrawerBlock>,
    portalElement
  );
};

export default Drawer;
