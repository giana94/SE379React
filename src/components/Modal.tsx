import React from 'react';
import '../modal.css';

interface ModalProps {
  dismissModal: () => void;
  theme: {
    background: string;
    foreground: string;
    primaryColor: string;
  };
}

export const Modal: React.FC<ModalProps> = ({ dismissModal, theme }) => {
  return (
    <>
      <div className="modal" style={{ backgroundColor: theme.background, color: theme.foreground }}>
        <p>Item Added to Cart</p>
      </div>
      <div onClick={dismissModal} className="backdrop"></div>
    </>
  );
};



