// src/components/DeleteFavoriteModal.tsx
import styled from '@emotion/styled';
import Modal from './index';
import { Favorite } from '../../types/data';

// 모달 콘텐츠를 위한 스타일
const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 12px;
  border-top: 2px dotted #e2e2e2;
`;

const ModalText = styled.p`
  font-size: 15px;
  color: #888;
  margin-bottom: 24px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 16px;
  width: 100%;
`;

const ModalButton = styled.button`
  flex: 1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;
  font-size: 16px;
`;

const ConfirmButton = styled(ModalButton)``;

// 모달 컴포넌트의 Props 정의
type Props = {
  isOpen: boolean;
  handleOpen: (isOpen: boolean) => void;
  selectedFavorite: Favorite;
  onConfirm: (id: number) => void;
};

const DeleteFavoriteModal = ({
  isOpen,
  handleOpen,
  selectedFavorite,
  onConfirm,
}: Props) => {
  const handleConfirm = () => {
    onConfirm(selectedFavorite.id);
    handleOpen(false); // 모달 닫기
  };

  return (
    <Modal
      title="즐겨찾기 삭제"
      isOpen={isOpen}
      handleOpen={handleOpen}
      shouldCloseOnDimmer={false}
      isHideClose
    >
      <ModalContentWrapper>
        <ModalText>이 사이트를 즐겨찾기 목록에서 삭제하시겠습니까?</ModalText>
        <ButtonWrapper>
          <ModalButton onClick={() => handleOpen(false)}>취소</ModalButton>
          <ConfirmButton onClick={handleConfirm}>확인</ConfirmButton>
        </ButtonWrapper>
      </ModalContentWrapper>
    </Modal>
  );
};

export default DeleteFavoriteModal;
