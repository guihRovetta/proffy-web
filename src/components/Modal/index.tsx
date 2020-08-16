import React from 'react';

import logoImg from '../../assets/images/icons/success-check-icon.svg';

import { Container, BackgroundWrapper, LogoContent } from './styles';

interface ModalProps {
  title?: string;
  message?: string;
}

const Modal: React.FC<ModalProps> = ({ title, message, children }) => {
  return (
    <Container>
      <BackgroundWrapper>
        <LogoContent>
          <img src={logoImg} alt="Proffy" />
          <h1>Redefinição enviada!</h1>
          <p>
            Boa, agora é só checar o e-mail que foi enviado para você redefinir
            sua senha e aproveitar os estudos.
          </p>
          {children}
        </LogoContent>
      </BackgroundWrapper>
    </Container>
  );
};

export default Modal;
