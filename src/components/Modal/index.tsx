import React from 'react';

import logoImg from '../../assets/images/icons/success-check-icon.svg';

import { Container, BackgroundWrapper, LogoContent } from './styles';

interface ModalProps {
  title: string;
  message: string;
}

const Modal: React.FC<ModalProps> = ({ title, message, children }) => {
  return (
    <Container>
      <BackgroundWrapper>
        <LogoContent>
          <img src={logoImg} alt="Proffy" />
          <h1>{title}</h1>
          <p>{message}</p>
          {children}
        </LogoContent>
      </BackgroundWrapper>
    </Container>
  );
};

export default Modal;
