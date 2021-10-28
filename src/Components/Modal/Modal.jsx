import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { GrFormClose } from 'react-icons/gr';

import { Overlay, ImmageWrapper, CloseBtn } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ src, alt, onClick }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClick();
    }
  };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClick();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ImmageWrapper>
        <img src={src} alt={alt} />
        <CloseBtn type="button" onClick={onClick}>
          <GrFormClose />
        </CloseBtn>
      </ImmageWrapper>
    </Overlay>,
    modalRoot,
  );
};
