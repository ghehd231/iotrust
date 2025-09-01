import styled from '@emotion/styled';
import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useClickAway } from 'react-use';

import Dimmer from '../Dimmer';

type ModalStyleProps = {
  padding?: number | string;
  margin?: number | string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  zIndex?: number;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  overflow?: string;
  blur?: string;
  alignItems?: 'start' | 'end' | 'center' | 'stretch';
  titleAlign?: 'start' | 'end' | 'center';
  titleFontSize?: string;
};

export type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  isHideClose?: boolean;
  shouldCloseOnDimmer?: boolean;
  title?: string;
  handleOpen: (isOpen: boolean) => void;
  style?: ModalStyleProps;
};

const ModalBlock = styled.div`
  justify-content: center;
  position: relative;
`;

const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const ModalBox = styled.div<{ style?: ModalStyleProps }>`
  background: ${({ style }) => style?.backgroundColor ?? 'white'};
  width: ${({ style }) => style?.width ?? '330px'};
  height: ${({ style }) => style?.height ?? 'auto'};
  max-width: ${({ style }) => style?.maxWidth ?? '1000px'};
  max-height: ${({ style }) => style?.maxHeight ?? '760px'};
  margin: ${({ style }) => style?.margin ?? '10px'};
  padding: ${({ style }) => style?.padding ?? '2rem'};
  border-radius: ${({ style }) => style?.borderRadius ?? '8px'};
  position: relative;
  overflow: ${({ style }) => style?.overflow ?? 'hidden'};
  border: ${({ style }) => style?.border ?? 'none'};
`;

const ModalTitle = styled.div<{
  textAlign: 'start' | 'end' | 'center';
  fontSize: string;
}>`
  width: ${({ textAlign }) => (textAlign === 'center' ? '100%' : 'auto')};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 600;
  text-align: ${({ textAlign }) => textAlign};
`;

const Modal = ({
  children,
  isOpen,
  isHideClose = false,
  title,
  shouldCloseOnDimmer = true,
  handleOpen,
  style,
}: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useClickAway(ref, () => {
    if (!shouldCloseOnDimmer) return;
    handleOpen(false);
  });

  if (!isOpen) return null;

  const portalElement = document.getElementById('portal');

  if (!portalElement) return null;

  return createPortal(
    <ModalBlock>
      <Dimmer
        alignItems={style?.alignItems}
        zIndex={style?.zIndex ?? 11}
        blur={style?.blur}
      >
        <ModalBox ref={ref} style={style}>
          <ModalHeader>
            <ModalTitle
              textAlign={style?.titleAlign ?? 'center'}
              fontSize={style?.titleFontSize ?? '20px'}
            >
              {title}
            </ModalTitle>
            {!isHideClose && (
              <button onClick={() => handleOpen(false)}>x</button>
            )}
          </ModalHeader>
          {children}
        </ModalBox>
      </Dimmer>
    </ModalBlock>,
    portalElement
  );
};

export default Modal;
