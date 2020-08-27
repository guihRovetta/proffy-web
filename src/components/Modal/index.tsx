import React from 'react';

import { Container, BackgroundWrapper, LogoContent } from './styles';

interface ModalProps {
  title: string;
  message: string;
  statusIcon: string;
}

const Modal: React.FC<ModalProps> = ({
  title,
  message,
  statusIcon,
  children,
}) => {
  return (
    <Container>
      <BackgroundWrapper>
        <LogoContent>
          <img src={statusIcon} alt="Proffy" />
          <h1>{title}</h1>
          <p>{message}</p>
          {children}
        </LogoContent>
      </BackgroundWrapper>
    </Container>
  );
};

export default Modal;
