import { useState } from 'react';

const useOpenModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, handleOpen, handleToggle };
};

export default useOpenModal;
